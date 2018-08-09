"""
    Usage:
    # From tensorflow/models/
    # Create train data:
    python generate_tfrecord.py --csv_input=data/train_labels.csv  --output_path=train.record
    # Create test data:
    python generate_tfrecord.py --csv_input=data/test_labels.csv  --output_path=test.record
    """
from __future__ import division
from __future__ import print_function
from __future__ import absolute_import

import os
import io
import pandas as pd
import tensorflow as tf

from PIL import Image
from object_detection.utils import dataset_util
from collections import namedtuple, OrderedDict

flags = tf.app.flags
flags.DEFINE_string('csv_input', '', 'Path to the CSV input')
flags.DEFINE_string('output_path', '', 'Path to output TFRecord')
FLAGS = flags.FLAGS


# TO-DO replace this with label map
def class_text_to_int(row_label):
    if row_label == 'Honda CRV 4 5':
        return 1
    if row_label == 'Toyota Camry 6 7':
        return 2
    if row_label == 'Ford F140 12 13':
        return 3
    if row_label == 'Dodge Charger':
        return 4
    if row_label == 'Chevrolet Blazer':
        return 5
    if row_label == 'RAM 1500':
        return 6
    if row_label == 'Chevrolet Camaro':
        return 7
    if row_label == 'Chevrolet Cobalt':
        return 8
    if row_label == 'Chevrolet Cruze':
        return 9
    if row_label == 'Ford Crown Victoria':
        return 10
    if row_label == 'Ford F450':
        return 11
    if row_label == 'Ford Escape':
        return 12
    if row_label == 'Honda Fit':
        return 13
    if row_label == 'Honda Pilot':
        return 14
    if row_label == 'Hyundai Accent':
        return 15
    if row_label == 'Hyundai Santa Fe':
        return 16
    if row_label == 'Nissan Pathfinder':
        return 17
    if row_label == 'Nissan Rogue':
        return 18
    if row_label == 'Honda Accord':
        return 19
    if row_label == 'Ford Explorer':
        return 20
    if row_label == 'Chevrolet Suburban':
        return 21
    if row_label == 'Chevrolet Impala':
        return 22
    if row_label == 'Chevrolet Malibu':
        return 23
    if row_label == 'Chevrolet Silverado':
        return 24
    if row_label == 'Nissan Versa Note':
        return 25
    if row_label == 'Nissan Versa Sedan':
        return 26
    if row_label == 'Ford F250':
        return 27
    if row_label == 'Ford Ranger':
        return 28
    if row_label == 'Honda Civic':
        return 29
    if row_label == 'Nissan Altima':
        return 30
    if row_label == 'Buick Regal':
        return 31
    if row_label == 'Ford Fusion':
        return 32
    if row_label == 'KIA OPTIMA':
        return 33
    if row_label == 'TOYOTA SIENNA':
        return 34
    if row_label == 'TOYOTA AVALON':
        return 35
    if row_label == 'JEEP GRAND':
        return 36
    if row_label == 'GMC SIERRA':
        return 37
    if row_label == 'FORD FOCUS':
        return 38
    if row_label == 'FORD F350':
        return 39
    if row_label == 'TOYOTA TACOMA':
        return 40
    if row_label == 'CHRYSLER PT':
        return 41
    if row_label == 'LEXUS ES':
        return 42
    if row_label == 'LINCOLN TOWN':
        return 43
    if row_label == 'KIA SORENTO':
        return 44
    if row_label == 'VOLKSWAGEN PASSAT':
        return 45
    if row_label == 'CHRYSLER 300':
        return 46
    if row_label == 'CHRYSLER 200':
        return 47
    if row_label == 'DODGE NEON':
        return 48
    if row_label == 'GMC YUKON':
        return 49
    if row_label == 'TOYOTA HIGHLANDER':
        return 50
    if row_label == 'Hyundai Elantra':
        return 51
    if row_label == 'Hyundai Sonata':
        return 52
    if row_label == 'Nissan Sentra':
        return 53
    if row_label == 'GMC ENVOY':
        return 54
    if row_label == 'SUBARU LEGACY':
        return 55
    if row_label == 'CHEVROLET TAHOE':
        return 56
    if row_label == 'NISSAN MAXIMA':
        return 57
    if row_label == 'DODGE DAKOTA':
        return 58
    if row_label == 'TOYOTA TUNDRA':
        return 59
    if row_label == 'CHEVROLET S':
        return 60
    if row_label == 'TOYOTA RAV4':
        return 61
    if row_label == 'VOLKSWAGEN JETTA':
        return 62
    if row_label == 'TOYOTA 4RUNNER':
        return 63
    if row_label == 'CHEVROLET EQUINOX':
        return 64
    if row_label == 'CHEVROLET CAVALIER':
        return 65
    if row_label == 'DODGE DURANGO':
        return 66
    if row_label == 'CADILLAC ESCALADE':
        return 67
    if row_label == 'BMW 328':
        return 68
    if row_label == 'CHEVROLET TRAVERSE':
        return 69
    if row_label == 'SUBARU IMPREZA':
        return 70
    else:
        None


def split(df, group):
    data = namedtuple('data', ['filename', 'object'])
    gb = df.groupby(group)
    return [data(filename, gb.get_group(x)) for filename, x in zip(gb.groups.keys(), gb.groups)]


def create_tf_example(group, path):
    with tf.gfile.GFile(os.path.join(path, '{}'.format(group.filename)), 'rb') as fid:
        encoded_jpg = fid.read()
    encoded_jpg_io = io.BytesIO(encoded_jpg)
    image = Image.open(encoded_jpg_io)
    width, height = image.size

    filename = group.filename.encode('utf8')
    image_format = b'jpg'
    xmins = []
    xmaxs = []
    ymins = []
    ymaxs = []
    classes_text = []
    classes = []

    for index, row in group.object.iterrows():
        xmins.append(row['xmin'] / width)
        xmaxs.append(row['xmax'] / width)
        ymins.append(row['ymin'] / height)
        ymaxs.append(row['ymax'] / height)
        classes_text.append(row['class'].encode('utf8'))
        classes.append(class_text_to_int(row['class']))

    tf_example = tf.train.Example(features=tf.train.Features(feature={
                                                             'image/height': dataset_util.int64_feature(height),
                                                             'image/width': dataset_util.int64_feature(width),
                                                             'image/filename': dataset_util.bytes_feature(filename),
                                                             'image/source_id': dataset_util.bytes_feature(filename),
                                                             'image/encoded': dataset_util.bytes_feature(encoded_jpg),
                                                             'image/format': dataset_util.bytes_feature(image_format),
                                                             'image/object/bbox/xmin': dataset_util.float_list_feature(xmins),
                                                             'image/object/bbox/xmax': dataset_util.float_list_feature(xmaxs),
                                                             'image/object/bbox/ymin': dataset_util.float_list_feature(ymins),
                                                             'image/object/bbox/ymax': dataset_util.float_list_feature(ymaxs),
                                                             'image/object/class/text': dataset_util.bytes_list_feature(classes_text),
                                                             'image/object/class/label': dataset_util.int64_list_feature(classes),
                                                             }))
    return tf_example


def main(_):
    writer = tf.python_io.TFRecordWriter(FLAGS.output_path)
    path = os.path.join(os.getcwd(), 'image_10')
    examples = pd.read_csv(FLAGS.csv_input)
    grouped = split(examples, 'filename')
    for group in grouped:
        tf_example = create_tf_example(group, path)
        writer.write(tf_example.SerializeToString())

    writer.close()
    output_path = os.path.join(os.getcwd(), FLAGS.output_path)
    print('Successfully created the TFRecords: {}'.format(output_path))


if __name__ == '__main__':
    tf.app.run()
