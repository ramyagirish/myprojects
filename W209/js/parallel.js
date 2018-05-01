// AIDSVu Parallel Coordinates
// Adapted from Kai Chang's D3V2 Nutrient Explorer,
//
// This version of the code has been altered from Kai Chang's original code
// (copyright notice below) to fit the display of a modified AIDSvu dataset
// and to alter the functionality to meet the AIDSVu project needs.  In
// addition, code has been updated to us D3 version 4 (from version 2).
// Chris Beecroft

// Nutrient Explorer Parallel Coordinates
// Copyright (c) 2012, Kai Chang
// Released under the BSD License: http://opensource.org/licenses/BSD-3-Clause

var width = document.body.clientWidth,
    height = d3.max([document.body.clientHeight - 475, 240]);

var m = [60, 0, 10, 50],
    w = width - m[1] - m[3],
    h = height - m[0] - m[2],
    xscale = d3.scaleBand().range([0, w], 1),
    yscale = {},
    dragging = {},
    line = d3.line(),
    axis = d3.axisLeft().ticks(1 + height / 50),
    data,
    data_cases,
    data_perc,
    data_rate,
    range_type = 1, // 1 = each var, 2 = by variable group,
    g,
    foreground,
    background,
    highlighted,
    dimensions,
    legend,
    legend2,
    legend3,
    show_data = 'rate',
    render_speed = 50,
    brush_count = 0,
    years = [],
    excluded_states = [],
    excluded_years = [];

var colors = {
    "Alabama": [185, 56, 73],
    "Alaska": [37, 50, 75],
    "Arizona": [325, 50, 39],
    "Arkansas": [10, 28, 67],
    "California": [271, 39, 57],
    "Colorado": [50, 100, 73],
    "Connecticut": [28, 100, 52],
    "Delaware": [41, 75, 61],
    "Florida": [60, 86, 61],
    "Georgia": [30, 100, 73],
    "Hawaii": [318, 65, 67],
    "Idaho": [274, 30, 76],
    "Illinois": [20, 49, 49],
    "Indiana": [334, 80, 84],
    "Iowa": [185, 80, 45],
    "Kansas": [10, 30, 42],
    "Kentucky": [339, 60, 49],
    "Louisiana": [359, 69, 49],
    "Maine": [204, 70, 41],
    "Montana": [1, 100, 79],
    "Nebraska": [189, 57, 75],
    "Nevada": [110, 57, 70],
    "New Hampshire": [214, 55, 79],
    "New Jersey": [339, 60, 75],
    "New Mexico": [120, 56, 40],

    "New York": [185, 56, 73],
    "North Carolina": [37, 50, 75],
    "North Dakota": [325, 50, 39],
    "Ohio": [10, 28, 67],
    "Oklahoma": [271, 39, 57],
    "Oregon": [50, 100, 73],
    "Maryland": [28, 100, 52],
    "Massachusetts": [41, 75, 61],
    "Michigan": [60, 86, 61],
    "Minnesota": [30, 100, 73],
    "Mississippi": [318, 65, 67],
    "Missouri": [274, 30, 76],
    "Pennsylvania": [20, 49, 49],
    "Rhode Island": [334, 80, 84],
    "South Carolina": [185, 80, 45],
    "South Dakota": [10, 30, 42],
    "Tennessee": [339, 60, 49],
    "Texas": [359, 69, 49],
    "Utah": [204, 70, 41],
    "Vermont": [1, 100, 79],
    "Virginia": [189, 57, 75],
    "Washington": [110, 57, 70],
    "West Virginia": [214, 55, 79],
    "Wisconsin": [339, 60, 75],
    "Wyoming": [120, 56, 40],

    "Washington DC": [185, 56, 73],
    "Puerto Rico": [37, 50, 75]
};

// Set default values
for (var c in colors) {
    if (c != 'California') {
        excluded_states.push(c);
    }
}
excluded_years = [2008, 2009, 2010, 2011, 2012, 2013, 2014];

var descript = {
    "Year": "Diagnosis Year",
    "Male": "Male",
    "Female": "Female",
    "Age 13-24": "Age 13-24",
    "Age 25-34": "Age 25-34",
    "Age 35-44": "Age 35-44",
    "Age 45-54": "Age 45-54",
    "Age 55+": "Age 55+",
    "White": "White",
    "Black": "Black",
    "Hispanic": "Hispanic",
    "Asian": "Asian",
    "AmerInd/Alaskan": "American Indian/Alaskan Native",
    "Hawaiian/Pac Islander": "Hawaiian/Pacific Islander",
    "Multiple Race": "Multiple Race",
    "Heterosexual": "Heterosexual",
    "MSM": "MSM: Men who have Sex with Men",
    "IDU": "IDU: Intravenous drug use",
    "Other Transmission": "Other Transmission Method",
    "Total": "State Total Cases"
};

var features = [
    {"name": "Gender", "list": ["Male", "Female"]},
    {"name": "Age Range", "list": ["Age 13-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55+"]},
    {"name": "Ethnicity", "list": ["White", "Black", "Hispanic", "Asian", "AmerInd/Alaskan", "Hawaiian/Pac Islander", "Multiple Race"]},
    {"name": "Transmission Method", "list":["Heterosexual", "MSM", "IDU", "Other Transmission"]},
    {"name": "Year/Total", "list":["Year", "Total"]}
];

// Scale chart and canvas height
d3.select("#chart")
    .style("height", (h + m[0] + m[2]) + "px")

d3.selectAll("canvas")
    .attr("width", w)
    .attr("height", h)
    .style("padding", m.join("px ") + "px");

// Foreground canvas for primary view
foreground = document.getElementById('foreground').getContext('2d');
foreground.globalCompositeOperation = "destination-over";
foreground.strokeStyle = "rgba(0,100,160,0.1)";
foreground.lineWidth = 1.7;

// Highlight canvas for temporary interactions
highlighted = document.getElementById('highlight').getContext('2d');
highlighted.strokeStyle = "rgba(0,100,160,1)";
highlighted.lineWidth = 4;

// Background canvas
background = document.getElementById('background').getContext('2d');
background.strokeStyle = "rgba(0,100,160,0.1)";
background.lineWidth = 1.7;

// SVG for ticks, labels, and interactions
var svg = d3.select("svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
    .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

// Load the cases data
d3.csv("data/AIDSVu_State_New_Cases.csv", function(raw_data) {
    var temp_years = Object;
    data_cases = raw_data.map(function(d) {
        // save off the years
        temp_years[d.Year] = 1;
        for (var k in d) {
            if (!_.isNaN(raw_data[0][k] - 0)) {
                d[k] = parseFloat(d[k]) || 0;
                // push the unknowns and zeros to 1
                if (d[k] < 1) {
                    d[k] = 1;
                }
            }
        };
        return d;
    });

    // deep copy our array
    var raw_data2 = JSON.parse(JSON.stringify(raw_data));
    data_perc = raw_data2.map(function(d) {
        for (var k in d) {
            if (k != "Year" && k != "Total" && k != "State") {
                d[k] = (d[k] / d.Total) * 100;
            }
        };
        return d;
    });

    // create out list of years we have in the data
    for (var id in temp_years) {
        years.push(parseInt(id));
    }
});

// Load the rate data (default data) and visualization
d3.csv("data/AIDSVu_State_New_Rate.csv", function(raw_data) {
    data_rate = raw_data.map(function(d) {
        for (var k in d) {
            if (!_.isNaN(raw_data[0][k] - 0)) {
                d[k] = parseFloat(d[k]) || 0;
                // push the unknowns and zeros to 1
                if (d[k] < 1) {
                    d[k] = 1;
                }
            }
        };
        return d;
    });

    // set the data to initially use the rate data
    data = data_rate;

    // Extract the list of numerical dimensions and create a scale for each.
    xscale.domain(dimensions = d3.keys(data[0]).filter(function(k) {
        yscale[k] = {};
        if (k == 'Year') {
            return (_.isNumber(data[0][k])) && (yscale[k].scale = d3.scaleLinear()
                .domain(d3.extent(data, function(d) {
                    return +d[k];
                }))
                .range([0, h]));
        } else {
            return (_.isNumber(data[0][k])) && (yscale[k].scale = d3.scaleLinear()
                .domain(d3.extent(data, function(d) {
                    return +d[k];
                }))
                .range([h, 0]));
        }
    }));

    // Set the year to be inverted by default
    yscale['Year'].inverted = true;

    // Create our axis and scales
    create_scales();

    // The state legend
    legend = create_legend(colors, brush);
    // The year legend
    legend2 = create_legend2(years, brush);
    // The column legend
    legend3 = create_legend3(features, brush, g);

    // Render foreground
    brush();

});

// Create our scales
function create_scales() {
    // TODO: hack to get the add axis back working
    svg.selectAll(".dimension").remove();

    // Convert quantitative scales to floats
    // Add a group element for each dimension.
    g = svg.selectAll(".dimension")
        .data(dimensions)
        .enter().append("svg:g")
        .attr("class", "dimension")
        .attr("transform", function(d) {
            return "translate(" + xscale(d) + ")";
        })
        .call(d3.drag()
            .on("start", function(d) {
                dragging[d] = this.__origin__ = xscale(d);
                this.__dragged__ = false;
                d3.select("#foreground").style("opacity", "0.35");
            })
            .on("drag", function(d) {
                dragging[d] = Math.min(w, Math.max(0, this.__origin__ += d3.event.dx));
                dimensions.sort(function(a, b) {
                    return position(a) - position(b);
                });
                xscale.domain(dimensions);
                g.attr("transform", function(d) {
                    return "translate(" + position(d) + ")";
                });
                brush_count++;
                this.__dragged__ = true;

                // Feedback for axis deletion if dropped
                if (dragging[d] < 12 || dragging[d] > w - 12) {
                    d3.select(this).select(".background").style("fill", "#b00");
                } else {
                    d3.select(this).select(".background").style("fill", null);
                }
            })
            .on("end", function(d) {
                if (!this.__dragged__) {
                    // no movement, invert axis
                    var extent = invert_axis(d);
                } else {
                    // reorder axes
                    d3.select(this).transition().attr("transform", "translate(" + xscale(d) + ")");

                    // remove axis if dragged all the way left
                    if (dragging[d] < 12 || dragging[d] > w - 12) {
                        remove_axis(d);
                        // adjust the scales if we are using common scales
                        if (range_type > 1) { rescale(); }
                    }
                }

                // TODO required to avoid a bug
                xscale.domain(dimensions);
                update_ticks(d, extent);

                // rerender
                d3.select("#foreground").style("opacity", null);
                brush();
                delete this.__dragged__;
                delete this.__origin__;
                delete dragging[d];
            }));

    // Add an axis and title.
    g.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(0,0)")
        .each(function(d) {
            d3.select(this).call(axis.scale(yscale[d].scale));
        })
        .append("svg:text")
        .attr("text-anchor", "middle")
        .attr("y", function(d, i) {
            return i % 2 == 0 ? -14 : -30
        })
        .attr("x", 0)
        .attr("class", "label")
        .text(String)
        .append("title")
        .text(function(d) {
            return descript[d] + "\nClick to invert, Drag to reorder"
        });

    // Add and store a brush for each axis.
    g.append("svg:g")
        .attr("class", "brush")
        .each(function(d) {
            d3.select(this).call(yscale[d].brush = d3.brushY(yscale[d].scale)
                .extent([
                    [-10, 0],
                    [10, height]
                ])
                .on("brush", brush)
                .on("end", brush));
            yscale[d].node = this;
        })
        .selectAll("rect")
        .style("visibility", null)
        .attr("x", -23)
        .attr("width", 36)
        .append("title")
        .text("Drag up or down to brush along this axis");

    g.selectAll(".extent")
        .append("title")
        .text("Drag or resize this filter");

    return g;
}

// copy one canvas to another, grayscale
function gray_copy(source, target) {
    var pixels = source.getImageData(0, 0, w, h);
    target.putImageData(grayscale(pixels), 0, 0);
}

// http://www.html5rocks.com/en/tutorials/canvas/imagefilters/
function grayscale(pixels, args) {
    var d = pixels.data;
    for (var i = 0; i < d.length; i += 4) {
        var r = d[i];
        var g = d[i + 1];
        var b = d[i + 2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        d[i] = d[i + 1] = d[i + 2] = v
    }
    return pixels;
};

function create_legend(colors, brush) {
    // create legend
    var legend_data = d3.select("#legend")
        .html("")
        .selectAll(".row")
        .data(_.keys(colors).sort())

    // filter by group
    var legend = legend_data
        .enter().append("div")
        .on("mouseover", highlight)
        .on("mouseout", unhighlight)
        .attr("title", "Hide State")
        .on("click", function(d) {
            // toggle states
            if (_.contains(excluded_states, d)) {
                d3.select(this).attr("title", "Hide State")
                excluded_states = _.difference(excluded_states, [d]);
                brush();
            } else {
                d3.select(this).attr("title", "Show State")
                excluded_states.push(d);
                brush();
            }
        });

    legend
        .append("span")
        .style("background", function(d, i) {
            return color(d, 0.85)
        })
        .attr("class", "color-bar");

    legend
        .append("span")
        .text(function(d, i) {
            return " " + d
        });

    return legend;
}

function create_legend2(years, brush) {
    // create legend
    var legend2 = d3.select("#year-list")
        .selectAll(".row")
        .data(years.sort())
        .enter().append("div")
        .on("mouseover", highlight2)
        .on("mouseout", unhighlight)
        .on("click", function(d) {
            // toggle years
            if (_.contains(excluded_years, d)) {
                // d3.select(this).attr("title", "Hide Year")
                excluded_years = _.difference(excluded_years, [d]);
                brush();
            } else {
                // d3.select(this).attr("title", "Show Year")
                excluded_years.push(d);
                brush();
            }
        })
        .append("span")
        .text(function(d, i) {
            return d
        });

    return legend2;
}

// column legend
function create_legend3(dim, brush) {
    // create legend
    var legend3 = d3.select("#feature-list")
        .selectAll(".row")
        .data(dim)
        .enter()
        .append("ul")
        .text(function(d) { return d.name; })
        .selectAll("li")
        .data(function(d) { return d.list; })
        .enter()
        .append("li")
        .on("click", function(d) {
            // toggle features
            if (_.contains(dimensions, d)) {
                remove_axis(d);
                // adjust the scales if we are using common scales
                if (range_type > 1) { rescale(); }
            } else {
                dimensions.push(d);
                xscale.domain(dimensions);
                update_ticks(); //d, extent);
                create_scales();
                // adjust the scales if we are using common scales
                if (range_type > 1) { rescale(); }
            }
            brush();
        })
        .append("span")
        .text(function(d, i) {
            return descript[d];
        });

    return legend3;
}

// render polylines i to i+render_speed
function render_range(selection, i, max, opacity) {
    selection.slice(i, max).forEach(function(d) {
        path(d, foreground, color(d.State, opacity));
    });
};

// Adjusts rendering speed
function optimize(timer) {
    var delta = (new Date()).getTime() - timer;
    render_speed = Math.max(Math.ceil(render_speed * 30 / delta), 8);
    render_speed = Math.min(render_speed, 300);
    return (new Date()).getTime();
}

// Highlight single polyline
function highlight(d) {
    d3.select("#foreground").style("opacity", "0.25");
    for (var id in data) {
        if (data[id].State == d && !_.contains(excluded_years, data[id].Year)) {
            // path(data[id], highlighted, colors2[data[id].Year]);
            adj = (data[id].Year - 2013) * 10;
            path(data[id], highlighted, color(data[id].State, 1, adj));
        }
    }
}

function highlight2(d) {
    d3.select("#foreground").style("opacity", "0.25");
    for (var id in data) {
        if (data[id].Year == d && !_.contains(excluded_states, data[id].State)) {
            // path(data[id], highlighted, colors2[data[id].Year]);
            adj = (data[id].Year - 2013) * 10;
            path(data[id], highlighted, color(data[id].State, 1, adj));
        }
    }
}

// Remove highlight
function unhighlight() {
    d3.select("#foreground").style("opacity", null);
    // d3.selectAll(".row").style("opacity", null);
    highlighted.clearRect(0, 0, w, h);
}

// Invert the axis
function invert_axis(d) {
    // get extent before inverting
    var actives = active_brush_selections();

    // Invert the scales
    if (yscale[d].inverted == true) {
        yscale[d].scale.range([h, 0]);
        d3.selectAll('.label')
            .filter(function(p) {
                return p == d;
            })
            .style("text-decoration", null);
        yscale[d].inverted = false;
    } else {
        yscale[d].scale.range([0, h]);
        d3.selectAll('.label')
            .filter(function(p) {
                return p == d;
            })
            .style("text-decoration", "underline");
        yscale[d].inverted = true;
    }

    // update the brush
    var extent = [];
    // look for our current item
    for (var i in actives) {
        if (actives[i].dimension == d) {
            // Move the brush if one was set
            extent = [actives[i].extent[1], actives[i].extent[0]].map(yscale[d].scale);
            d3.select(yscale[d].node).call(yscale[d].brush.move, extent);
        }
    }
    return extent;
}

// Clear all active clear_brushes
function clear_brushes() {
    var actives = active_brush_selections();
    for (var i in actives) {
        var d = actives[i].dimension;
        d3.select(yscale[d].node).call(yscale[d].brush.move, null);
    }
}

function path(d, ctx, color) {
    if (color) ctx.strokeStyle = color;
    ctx.beginPath();
    var x0 = 0, //xscale(0) - 30,
        y0 = yscale[dimensions[0]].scale(d[dimensions[0]]); // left edge
    ctx.moveTo(x0, y0);
    dimensions.map(function(p, i) {
        var x = xscale(p),
            y = yscale[p].scale(d[p]);
        var cp1x = x - 0.88 * (x - x0);
        var cp1y = y0;
        var cp2x = x - 0.12 * (x - x0);
        var cp2y = y;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        x0 = x;
        y0 = y;
    });
    ctx.lineTo(x0 + 15, y0); // right edge
    ctx.stroke();
};

function color(d, a, adj = 0) {
    var c = colors[d];
    var x = c[0] + adj;
    if (x < 1) {
        x += 360;
    }
    if (x > 360) {
        x -= 360;
    }
    return ["hsla(", x, ",", c[1], "%,", c[2], "%,", a, ")"].join("");
}

function position(d) {
    var v = dragging[d];
    return v == null ? xscale(d) : v;
}

// Get active brush selection
function active_brush_selections() {
    var actives = [];
    svg.selectAll(".brush")
        .filter(function(d) {
            return d3.brushSelection(this);
        })
        .each(function(d) {
            var extent = d3.brushSelection(this);
            actives.push({
                dimension: d,
                extent: extent.map(yscale[d].scale.invert)
            });
        });
    return actives;
}

function data_filter() {
    var actives = active_brush_selections();

    // Get lines within extents
    var selected = [];
    data
        .filter(function(d) {
            return !(_.contains(excluded_states, d.State) || _.contains(excluded_years, d.Year));
        })
        .map(function(d) {
            if (actives.every(function(active) {
                    var dim = active.dimension;
                    if (yscale[dim].inverted == true) {
                        return d[dim] <= active.extent[1] &&
                            d[dim] >= active.extent[0];
                    } else {
                        return d[dim] <= active.extent[0] &&
                            d[dim] >= active.extent[1];
                    }
                })) {
                selected.push(d);
            }
        });
    return selected;
}

// Handles a brush event, toggling the display of foreground lines.
function brush() {
    brush_count++;

    // bold dimensions with label
    d3.selectAll('.label')
        .style("font-weight", function(dimension) {
            if (_.include(data_filter, dimension)) return "bold";
            return null;
        });

    var selected = data_filter();

    if (selected.length < data.length && selected.length > 0) {
        d3.select("#keep-data").attr("disabled", null);
        d3.select("#exclude-data").attr("disabled", null);
    } else {
        d3.select("#keep-data").attr("disabled", "disabled");
        d3.select("#exclude-data").attr("disabled", "disabled");
    };

    // total by state
    var tallies = _(selected)
        .groupBy(function(d) {
            return d.State;
        })

    // include empty states
    _(colors).each(function(v, k) {
        tallies[k] = tallies[k] || [];
    });

    legend
        .style("text-decoration", function(d) {
            return _.contains(excluded_states, d) ? "line-through" : null;
        })
        .attr("class", function(d) {
            return (tallies[d].length > 0) ?
                "row" :
                "row off";
        });

    legend2
        .style("text-decoration", function(d) {
            return _.contains(excluded_years, d) ? "line-through" : null;
        })
        .attr("class", function(d) {
            return _.contains(excluded_years, d) ?
                "row off" :
                "row";
        });

    legend3
        .style("text-decoration", function(d) {
            return !_.contains(dimensions, d) ? "line-through" : null;
        })
        .attr("class", function(d) {
            return !_.contains(dimensions, d) ?
                "row off" :
                "row";
        });

    legend.selectAll(".color-bar")
        .style("width", function(d) {
            return Math.ceil(600 * tallies[d].length / data.length) + "px"
        });

    legend.selectAll(".tally")
        .text(function(d, i) {
            return tallies[d].length
        });

    // Render selected lines
    paths(selected, foreground, brush_count, true);
}

// render a set of polylines on a canvas
function paths(selected, ctx, count) {
    var n = selected.length,
        i = 0,
        opacity = d3.min([2 / Math.pow(n, 0.3), 1]),
        timer = (new Date()).getTime();

    ctx.clearRect(0, 0, w + 1, h + 1);

    // render all lines until finished or a new brush event
    function animloop() {
        if (i >= n || count < brush_count) return true;
        var max = d3.min([i + render_speed, n]);
        render_range(selected, i, max, opacity);
        i = max;
        timer = optimize(timer); // adjusts render_speed
    };

    d3.timer(animloop);
}

// transition ticks for reordering and rescaling
function update_ticks(d, extent) {
    // update brushes
    if (d) {
        var brush_el = d3.selectAll(".brush")
            .filter(function(key) {
                return key == d;
            });
        // single tick
        if (extent) {
            // restore previous extent
            brush_el.call(yscale[d].brush = d3.brushY(yscale[d].scale)
                .extent([
                    [-10, 0],
                    [10, height]
                ])
                .on("brush", brush)
                .on("end", brush));
        } else {
            brush_el.call(yscale[d].brush = d3.brushY(yscale[d].scale)
                .extent([
                    [-10, 0],
                    [10, height]
                ])
                .on("brush", brush)
                .on("end", brush));
        }
    } else {
        // all ticks
        d3.selectAll(".brush")
            .each(function(d) {
                d3.select(this).call(yscale[d].brush = d3.brushY(yscale[d].scale)
                    .extent([
                        [-10, 0],
                        [10, height]
                    ])
                    .on("brush", brush)
                    .on("end", brush));
            })
    }

    brush_count++;

    show_ticks();

    // update axes
    d3.selectAll(".axis")
        .each(function(d, i) {
            // hide lines for better performance
            d3.select(this).selectAll('line').style("display", "none");

            // transition axis numbers
            d3.select(this)
                .transition()
                .duration(720)
                .call(axis.scale(yscale[d].scale));

            // bring lines back
            d3.select(this).selectAll('line').transition().delay(800).style("display", null);

            d3.select(this)
                .selectAll('text')
                .style('font-weight', null)
                .style('font-size', null)
                .style('display', null);
        });
}

// Rescale to new dataset domain,  preserving inverted state and brushes
function rescale() {
    // Save off our brush selections
    var actives = active_brush_selections();

    // Find out the extents of all our data
    var extents = [];
    if (range_type == 3) {
        // get the extents for the selected data
        var selected = data_filter();
        dimensions.forEach(function(d, i) {
            if (d != 'Year') {
                extents[d] = d3.extent(selected, function(p) { return +p[d]; });
            } else {
                extents[d] = d3.extent(data, function(p) { return +p[d]; });
            }
        });
    } else {
        // get the extents for everything
        var selected = data;
        dimensions.forEach(function(d, i) {
            extents[d] = d3.extent(data, function(p) { return +p[d]; });
        });
    }

    if (range_type == 1) {
        // every variable has its own scale
        dimensions.forEach(function(d, i) {
            yscale[d].scale = d3.scaleLinear().domain(extents[d]);
        });
    } else {
        // every grouping has a variable that is particular to its group
        features.forEach(function(d, i) {
            // only look at columns that are being displayed
            var min = d3.min(d.list, function(p) { if (_.contains(dimensions, p)) { return extents[p][0]; } });
            var max = d3.max(d.list, function(p) { if (_.contains(dimensions, p)) { return extents[p][1]; } });
            d.list.forEach(function(l, i) {
                if (d.name != 'Year/Total') {
                    // set all our items to the common group min/max
                    yscale[l].scale = d3.scaleLinear().domain([min,max]);
                } else {
                    // set just one offs
                    yscale[l].scale = d3.scaleLinear().domain(extents[l]);
                }
            })
        });
    }

    // update the inverted values
    dimensions.forEach(function(d, i) {
        if (yscale[d].inverted) {
            yscale[d].scale = yscale[d].scale.range([0, h]).nice();
        } else {
            yscale[d].scale = yscale[d].scale.range([h, 0]).nice();
        }
    });

    // update brush placement
    for (var i in actives) {
        var d = actives[i].dimension;
        d3.select(yscale[d].node).call(yscale[d].brush.move, [actives[i].extent[0], actives[i].extent[1]].map(yscale[d].scale));
    }

    update_ticks();
    // Render selected data
    // paths(selected, foreground, brush_count);
}

// scale to window size
window.onresize = function() {
    width = document.body.clientWidth;
    height = d3.max([document.body.clientHeight - 475, 220]);

    w = width - m[1] - m[3];
    h = height - m[0] - m[2];

    d3.select("#chart")
        .style("height", (h + m[0] + m[2]) + "px")

    d3.selectAll("canvas")
        .attr("width", w)
        .attr("height", h)
        .style("padding", m.join("px ") + "px");

    d3.select("svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .select("g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    // get our brush selections before we change any ranges
    var actives = active_brush_selections();

    xscale = d3.scaleBand().range([0, w], 1).domain(dimensions);
    dimensions.forEach(function(d) {
        if (yscale[d].inverted == true) {
            yscale[d].scale.range([0, h]);
        } else {
            yscale[d].scale.range([h, 0]);
        }
    });

    d3.selectAll(".dimension")
        .attr("transform", function(d) {
            return "translate(" + xscale(d) + ")";
        })

    // update brush placement
    for (var i in actives) {
        var d = actives[i].dimension;
             d3.select(yscale[d].node).call(yscale[d].brush.move, [actives[i].extent[0], actives[i].extent[1]].map(yscale[d].scale));
    }

    brush_count++;

    // update axis placement
    axis = axis.ticks(1 + height / 50),
        d3.selectAll(".axis")
        .each(function(d) {
            d3.select(this).call(axis.scale(yscale[d].scale));
        });

    // render data
    brush();
};

function remove_axis(d) {
    dimensions = _.difference(dimensions, [d]);
    xscale.domain(dimensions);

    g.filter(function (p) {
        if (_.contains(dimensions, p)) { return true; }
    })
        .transition().attr("transform", function(p) {
        if (!_.contains(dimensions, p)) {
            // TODO: Hack to move this out of the way
            return "translate(-100)";
        } else {
            return "translate(" + position(p) + ")";
        }
    });

    // TODO: Hack to get this off the screen
    g.filter(function (p) {
        if (p == d) { return true; }
    }).style("opacity", 0);

    update_ticks();
    brush();
}

// Data type toggles
d3.selectAll("input[name='data-type']").on("change", function() {
    if (this.value == 'rate') {
        data = data_rate;
        d3.selectAll("#chart-title").text("AIDSVu Explorer - New Infections Data (Rate per 100,000)");
    } else if (this.value == 'case') {
        data = data_cases;
        d3.selectAll("#chart-title").text("AIDSVu Explorer - New Infections Data (Number of Cases)");
    } else if (this.value == 'perc') {
        data = data_perc;
        d3.selectAll("#chart-title").text("AIDSVu Explorer - New Infections Data (Percent of Total)");
    }
    clear_brushes();
    rescale();
    brush();
});

// Scale toggles
d3.selectAll("input[name='range-type']").on("change", function() {
    if (this.value == 'variable') {
        range_type = 1;
        d3.selectAll("#update-scale").attr("disabled", "disabled");
    } else if (this.value == 'group') {
        range_type = 2;
        d3.selectAll("#update-scale").attr("disabled", "disabled");
    } else if (this.value == 'group_selected') {
        range_type = 3;
        d3.selectAll("#update-scale").attr("disabled", null);
    }
    rescale();
    brush();
});

// Handle the ticks and ligth/dark buttons
d3.select("#hide-ticks").on("click", hide_ticks);
d3.select("#show-ticks").on("click", show_ticks);
d3.select("#dark-theme").on("click", dark_theme);
d3.select("#light-theme").on("click", light_theme);

// Handle the state list
d3.select("#state-toggle").on("click", state_toggle);
d3.select("#state-show").on("click", state_show);
d3.select("#state-hide").on("click", state_hide);

// Handle the year list
d3.select("#year-toggle").on("click", year_toggle);
d3.select("#year-show").on("click", year_show);
d3.select("#year-hide").on("click", year_hide);
d3.select("#update-scale").on("click", rescale_brush);

function hide_ticks() {
    d3.selectAll(".axis g").style("display", "none");
    d3.selectAll(".background").style("visibility", "hidden");
    d3.selectAll("#hide-ticks").attr("disabled", "disabled");
    d3.selectAll("#show-ticks").attr("disabled", null);
};

function show_ticks() {
    d3.selectAll(".axis g").style("display", null);
    d3.selectAll(".background").style("visibility", null);
    d3.selectAll("#show-ticks").attr("disabled", "disabled");
    d3.selectAll("#hide-ticks").attr("disabled", null);
};

function dark_theme() {
    d3.select("body").attr("class", null);
    d3.selectAll("#dark-theme").attr("disabled", "disabled");
    d3.selectAll("#light-theme").attr("disabled", null);
}

function light_theme() {
    d3.select("body").attr("class", "light");
    d3.selectAll("#light-theme").attr("disabled", "disabled");
    d3.selectAll("#dark-theme").attr("disabled", null);
}

// Using the colors as the index for states
function state_toggle() {
    for (var d in colors) {
        if (_.contains(excluded_states, d)) {
            excluded_states = _.difference(excluded_states, [d]);
        } else {
            excluded_states.push(d);
        }
    }
    if (range_type == 3) { rescale(); }
    brush();
}

function state_show() {
    for (var d in colors) {
        if (_.contains(excluded_states, d)) {
            excluded_states = _.difference(excluded_states, [d]);
        }
    }
    if (range_type == 3) { rescale(); }
    brush();
}

function state_hide() {
    for (var d in colors) {
        if (!_.contains(excluded_states, d)) {
            excluded_states.push(d);
        }
    }
    if (range_type == 3) { rescale(); }
    brush();
}

// Do the same with Year
function year_toggle() {
    for (var d in years) {
        if (_.contains(excluded_years, years[d])) {
            excluded_years = _.difference(excluded_years, [years[d]]);
        } else {
            excluded_years.push(years[d]);
        }
    }
    if (range_type == 3) { rescale(); }
    brush();
}

function year_show() {
    for (var d in years) {
        if (_.contains(excluded_years, years[d])) {
            excluded_years = _.difference(excluded_years, [years[d]]);
        }
    }
    if (range_type == 3) { rescale(); }
    brush();
}

function year_hide() {
    for (var d in years) {
        if (!_.contains(excluded_years, years[d])) {
            excluded_years.push(years[d]);
        }
    }
    if (range_type == 3) { rescale(); }
    brush();
}

// function to help our rescale button
function rescale_brush() {
    rescale();
    brush();
}
