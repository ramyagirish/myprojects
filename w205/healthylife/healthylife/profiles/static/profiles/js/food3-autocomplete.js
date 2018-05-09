 $(function(){
  var foodItems3 = [
 {
   data: 1001,
   value: "BUTTER,WITH SALT"
 },
 {
   data: 1002,
   value: "BUTTER,WHIPPED,WITH SALT"
 },
 {
   data: 1003,
   value: "BUTTER OIL,ANHYDROUS"
 },
 {
   data: 1004,
   value: "CHEESE,BLUE"
 },
 {
   data: 1005,
   value: "CHEESE,BRICK"
 },
 {
   data: 1006,
   value: "CHEESE,BRIE"
 },
 {
   data: 1007,
   value: "CHEESE,CAMEMBERT"
 },
 {
   data: 1008,
   value: "CHEESE,CARAWAY"
 },
 {
   data: 1009,
   value: "CHEESE,CHEDDAR"
 },
 {
   data: 1010,
   value: "CHEESE,CHESHIRE"
 },
 {
   data: 1011,
   value: "CHEESE,COLBY"
 },
 {
   data: 1012,
   value: "CHEESE,COTTAGE,CRMD,LRG OR SML CURD"
 },
 {
   data: 1013,
   value: "CHEESE,COTTAGE,CRMD,W/FRUIT"
 },
 {
   data: 1014,
   value: "CHEESE,COTTAGE,NONFAT,UNCRMD,DRY,LRG OR SML CURD"
 },
 {
   data: 1015,
   value: "CHEESE,COTTAGE,LOWFAT,2% MILKFAT"
 },
 {
   data: 1016,
   value: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT"
 },
 {
   data: 1017,
   value: "CHEESE,CREAM"
 },
 {
   data: 1018,
   value: "CHEESE,EDAM"
 },
 {
   data: 1019,
   value: "CHEESE,FETA"
 },
 {
   data: 1020,
   value: "CHEESE,FONTINA"
 },
 {
   data: 1021,
   value: "CHEESE,GJETOST"
 },
 {
   data: 1022,
   value: "CHEESE,GOUDA"
 },
 {
   data: 1023,
   value: "CHEESE,GRUYERE"
 },
 {
   data: 1024,
   value: "CHEESE,LIMBURGER"
 },
 {
   data: 1025,
   value: "CHEESE,MONTEREY"
 },
 {
   data: 1026,
   value: "CHEESE,MOZZARELLA,WHL MILK"
 },
 {
   data: 1027,
   value: "CHEESE,MOZZARELLA,WHL MILK,LO MOIST"
 },
 {
   data: 1028,
   value: "CHEESE,MOZZARELLA,PART SKIM MILK"
 },
 {
   data: 1029,
   value: "CHEESE,MOZZARELLA,PART SKIM MILK,LO MOIST"
 },
 {
   data: 1030,
   value: "CHEESE,MUENSTER"
 },
 {
   data: 1031,
   value: "CHEESE,NEUFCHATEL"
 },
 {
   data: 1032,
   value: "CHEESE,PARMESAN,GRATED"
 },
 {
   data: 1033,
   value: "CHEESE,PARMESAN,HARD"
 },
 {
   data: 1034,
   value: "CHEESE,PORT DE SALUT"
 },
 {
   data: 1035,
   value: "CHEESE,PROVOLONE"
 },
 {
   data: 1036,
   value: "CHEESE,RICOTTA,WHOLE MILK"
 },
 {
   data: 1037,
   value: "CHEESE,RICOTTA,PART SKIM MILK"
 },
 {
   data: 1038,
   value: "CHEESE,ROMANO"
 },
 {
   data: 1039,
   value: "CHEESE,ROQUEFORT"
 },
 {
   data: 1040,
   value: "CHEESE,SWISS"
 },
 {
   data: 1041,
   value: "CHEESE,TILSIT"
 },
 {
   data: 1042,
   value: "CHEESE,PAST PROCESS,AMERICAN,FORT W/ VITAMIN D"
 },
 {
   data: 1043,
   value: "CHEESE,PAST PROCESS,PIMENTO"
 },
 {
   data: 1044,
   value: "CHEESE,PAST PROCESS,SWISS"
 },
 {
   data: 1045,
   value: "CHEESE FD,COLD PK,AMERICAN"
 },
 {
   data: 1046,
   value: "CHEESE FD,PAST PROCESS,AMERICAN,VITAMIN D FORT"
 },
 {
   data: 1047,
   value: "CHEESE FD,PAST PROCESS,SWISS"
 },
 {
   data: 1048,
   value: "CHEESE SPRD,PAST PROCESS,AMERICAN"
 },
 {
   data: 1049,
   value: "CREAM,FLUID,HALF AND HALF"
 },
 {
   data: 1050,
   value: "CREAM,FLUID,LT (COFFEE CRM OR TABLE CRM)"
 },
 {
   data: 1052,
   value: "CREAM,FLUID,LT WHIPPING"
 },
 {
   data: 1053,
   value: "CREAM,FLUID,HVY WHIPPING"
 },
 {
   data: 1054,
   value: "CREAM,WHIPPED,CRM TOPPING,PRESSURIZED"
 },
 {
   data: 1055,
   value: "CREAM,SOUR,RED FAT,CULTURED"
 },
 {
   data: 1056,
   value: "CREAM,SOUR,CULTURED"
 },
 {
   data: 1057,
   value: "EGGNOG"
 },
 {
   data: 1058,
   value: "SOUR DRSNG,NON-BUTTERFAT,CULTURED,FILLED CREAM-TYPE"
 },
 {
   data: 1059,
   value: "MILK,FILLED,FLUID,W/BLEND OF HYDR VEG OILS"
 },
 {
   data: 1060,
   value: "MILK,FILLED,FLUID,W/LAURIC ACID OIL"
 },
 {
   data: 1067,
   value: "CREAM SUB,LIQ,W/HYDR VEG OIL&SOY PROT"
 },
 {
   data: 1068,
   value: "CREAM SUB,LIQ,W/LAURIC ACID OIL&NA CASEINATE"
 },
 {
   data: 1069,
   value: "CREAM SUBSTITUTE,POWDERED"
 },
 {
   data: 1070,
   value: "DESSERT TOPPING,POWDERED"
 },
 {
   data: 1071,
   value: "DESSERT TOPPING,PDR,1.5 OZ PREP W/1/2 CUP MILK"
 },
 {
   data: 1072,
   value: "DESSERT TOPPING,PRESSURIZED"
 },
 {
   data: 1073,
   value: "DESSERT TOPPING,SEMI SOLID,FRZ"
 },
 {
   data: 1074,
   value: "SOUR CRM,IMITN,CULTURED"
 },
 {
   data: 1076,
   value: "MILK SUBSTITUTES,FLUID,W/LAURIC ACID OIL"
 },
 {
   data: 1077,
   value: "MILK,WHL,3.25% MILKFAT,W/ ADDED VITAMIN D"
 },
 {
   data: 1078,
   value: "MILK,PRODUCER,FLUID,3.7% MILKFAT"
 },
 {
   data: 1079,
   value: "MILK,RED FAT,FLUID,2% MILKFAT,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1080,
   value: "MILK,RED FAT,FLUID,2% MILKFAT,W/ ADDED NFMS, VIT A & VIT D"
 },
 {
   data: 1081,
   value: "MILK,RED FAT,FLUID,2% MILKFAT,PROT FORT,W/ ADDED VIT A & D"
 },
 {
   data: 1082,
   value: "MILK,LOWFAT,FLUID,1% MILKFAT,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1083,
   value: "MILK,LOWFAT,FLUID,1% MILKFAT,W/ ADD NONFAT MILK SOL,VIT A/ D"
 },
 {
   data: 1084,
   value: "MILK,LOWFAT,FLUID,1% MILKFAT,PROT FORT,W/ ADDED VIT A & D"
 },
 {
   data: 1085,
   value: "MILK,NONFAT,FLUID,W/ ADDED VIT A & VIT D (FAT FREE OR SKIM)"
 },
 {
   data: 1086,
   value: "MILK,NONFAT,FLUID,W/ ADDED NONFAT MILK SOL,VIT A & VIT D"
 },
 {
   data: 1087,
   value: "MILK,NONFAT,FLUID,PROT FORT,W/ ADD VIT A & D (FAT FREE/SKIM)"
 },
 {
   data: 1088,
   value: "MILK,BTTRMLK,FLUID,CULTURED,LOWFAT"
 },
 {
   data: 1089,
   value: "MILK,LO NA,FLUID"
 },
 {
   data: 1090,
   value: "MILK,DRY,WHL,W/ ADDED VITAMIN D"
 },
 {
   data: 1091,
   value: "MILK,DRY,NONFAT,REG,WO/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1092,
   value: "MILK,DRY,NONFAT,INST,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1093,
   value: "MILK,DRY,NONFAT,CA RED"
 },
 {
   data: 1094,
   value: "MILK,BUTTERMILK,DRIED"
 },
 {
   data: 1095,
   value: "MILK,CND,COND,SWTND"
 },
 {
   data: 1096,
   value: "MILK,CND,EVAP,W/ ADDED VITAMIN D & WO/ ADDED VIT A"
 },
 {
   data: 1097,
   value: "MILK,CND,EVAP,NONFAT,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1102,
   value: "MILK,CHOC,FLUID,COMM,WHL,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1103,
   value: "MILK,CHOC,FLUID,COMM,RED FAT"
 },
 {
   data: 1104,
   value: "MILK,CHOC,FLUID,COMM,LOWFAT,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1105,
   value: "MILK,CHOC BEV,HOT COCOA,HOMEMADE"
 },
 {
   data: 1106,
   value: "MILK,GOAT,FLUID,W/ ADDED VITAMIN D"
 },
 {
   data: 1107,
   value: "MILK,HUMAN,MATURE,FLUID"
 },
 {
   data: 1108,
   value: "MILK,INDIAN BUFFALO,FLUID"
 },
 {
   data: 1109,
   value: "MILK,SHEEP,FLUID"
 },
 {
   data: 1110,
   value: "MILK SHAKES,THICK CHOC"
 },
 {
   data: 1111,
   value: "MILK SHAKES,THICK VANILLA"
 },
 {
   data: 1112,
   value: "WHEY,ACID,FLUID"
 },
 {
   data: 1113,
   value: "WHEY,ACID,DRIED"
 },
 {
   data: 1114,
   value: "WHEY,SWEET,FLUID"
 },
 {
   data: 1115,
   value: "WHEY,SWEET,DRIED"
 },
 {
   data: 1116,
   value: "YOGURT,PLN,WHL MILK,8 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1117,
   value: "YOGURT,PLN,LOFAT,12 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1118,
   value: "YOGURT,PLN,SKIM MILK,13 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1119,
   value: "YOGURT,VANILLA,LOFAT,11 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1120,
   value: "YOGURT,FRUIT,LOFAT,9 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1121,
   value: "YOGURT,FRUIT,LOFAT,10 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1122,
   value: "YOGURT,FRUIT,LOFAT,11 GRAMS PROT PER 8 OZ"
 },
 {
   data: 1123,
   value: "EGG,WHL,RAW,FRSH"
 },
 {
   data: 1124,
   value: "EGG,WHITE,RAW,FRESH"
 },
 {
   data: 1125,
   value: "EGG,YOLK,RAW,FRSH"
 },
 {
   data: 1126,
   value: "EGG,YOLK,RAW,FRZ,PAST"
 },
 {
   data: 1127,
   value: "EGG,YOLK,RAW,FRZ,SUGARED,PAST"
 },
 {
   data: 1128,
   value: "EGG,WHL,CKD,FRIED"
 },
 {
   data: 1129,
   value: "EGG,WHL,CKD,HARD-BOILED"
 },
 {
   data: 1130,
   value: "EGG,WHOLE,COOKED,OMELET"
 },
 {
   data: 1131,
   value: "EGG,WHL,CKD,POACHED"
 },
 {
   data: 1132,
   value: "EGG,WHL,CKD,SCRMBLD"
 },
 {
   data: 1133,
   value: "EGG,WHOLE,DRIED"
 },
 {
   data: 1134,
   value: "EGG,WHL,DRIED,STABILIZED,GLUCOSE RED"
 },
 {
   data: 1135,
   value: "EGG,WHITE,DRIED,FLAKES,STABILIZED,GLUCOSE RED"
 },
 {
   data: 1136,
   value: "EGG,WHITE,DRIED,PDR,STABILIZED,GLUCOSE RED"
 },
 {
   data: 1137,
   value: "EGG,YOLK,DRIED"
 },
 {
   data: 1138,
   value: "EGG,DUCK,WHOLE,FRESH,RAW"
 },
 {
   data: 1139,
   value: "EGG,GOOSE,WHOLE,FRESH,RAW"
 },
 {
   data: 1140,
   value: "EGG,QUAIL,WHOLE,FRESH,RAW"
 },
 {
   data: 1141,
   value: "EGG,TURKEY,WHL,FRSH,RAW"
 },
 {
   data: 1144,
   value: "EGG SUBSTITUTE,POWDER"
 },
 {
   data: 1145,
   value: "BUTTER,WITHOUT SALT"
 },
 {
   data: 1146,
   value: "CHEESE,PARMESAN,SHREDDED"
 },
 {
   data: 1151,
   value: "MILK,NONFAT,FLUID,WO/ ADDED VIT A & VIT D (FAT FREE OR SKIM)"
 },
 {
   data: 1152,
   value: "MILK,RED FAT,FLUID,2% MILKFAT,W/ NONFAT MILK SOL,WO/ VIT A"
 },
 {
   data: 1153,
   value: "MILK,CND,EVAP,W/ VIT A"
 },
 {
   data: 1154,
   value: "MILK,DRY,NONFAT,REG,W/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1155,
   value: "MILK,DRY,NONFAT,INST,WO/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1156,
   value: "CHEESE,GOAT,HARD TYPE"
 },
 {
   data: 1157,
   value: "CHEESE,GOAT,SEMISOFT TYPE"
 },
 {
   data: 1159,
   value: "CHEESE,GOAT,SOFT TYPE"
 },
 {
   data: 1160,
   value: "EGG,YOLK,RAW,FRZ,SALTED,PAST"
 },
 {
   data: 1161,
   value: "CHEESE SUB,MOZZARELLA"
 },
 {
   data: 1164,
   value: "CHEESE SAU,PREP FROM RECIPE"
 },
 {
   data: 1165,
   value: "CHEESE,MEXICAN,QUESO ANEJO"
 },
 {
   data: 1166,
   value: "CHEESE,MEXICAN,QUESO ASADERO"
 },
 {
   data: 1167,
   value: "CHEESE,MEXICAN,QUESO CHIHUAHUA"
 },
 {
   data: 1168,
   value: "CHEESE,LOFAT,CHEDDAR OR COLBY"
 },
 {
   data: 1169,
   value: "CHEESE,LOW-SODIUM,CHEDDAR OR COLBY"
 },
 {
   data: 1171,
   value: "EGG,WHL,RAW,FRZ,PAST"
 },
 {
   data: 1172,
   value: "EGG,WHITE,RAW,FRZ,PAST"
 },
 {
   data: 1173,
   value: "EGG,WHITE,DRIED"
 },
 {
   data: 1174,
   value: "MILK,RED FAT,FLUID,2% MILKFAT,WO/ ADDED VIT A & VIT D"
 },
 {
   data: 1175,
   value: "MILK,FLUID,1% FAT,WO/ ADDED VIT A & VIT D"
 },
 {
   data: 1178,
   value: "SOUR CREAM,REDUCED FAT"
 },
 {
   data: 1179,
   value: "SOUR CREAM,LIGHT"
 },
 {
   data: 1180,
   value: "SOUR CREAM,FAT FREE"
 },
 {
   data: 1182,
   value: "USDA COMMODITY,CHS,CHEDDAR,RED FAT"
 },
 {
   data: 1184,
   value: "YOGURT,VAN OR LEM FLAV,NONFAT MILK,SWTND W/LOW-CALORIE SWTNR"
 },
 {
   data: 1185,
   value: "PARMESAN CHS TOPPING,FAT FREE"
 },
 {
   data: 1186,
   value: "CHEESE,CREAM,FAT FREE"
 },
 {
   data: 1187,
   value: "YOGURT,CHOC,NONFAT MILK"
 },
 {
   data: 1188,
   value: "KRAFT CHEEZ WHIZ PAST PROCESS CHS SAU"
 },
 {
   data: 1189,
   value: "KRAFT CHEEZ WHIZ LT PAST PROCESS CHS PRODUCT"
 },
 {
   data: 1190,
   value: "KRAFT FREE SINGLES AMERICAN NONFAT PAST PROCESS CHS PRODUCT"
 },
 {
   data: 1191,
   value: "KRAFT VELVEETA PAST PROCESS CHS SPRD"
 },
 {
   data: 1192,
   value: "KRAFT VELVEETA LT RED FAT PAST PROCESS CHS PRODUCT"
 },
 {
   data: 1193,
   value: "KRAFT BREAKSTONE'S RED FAT SOUR CRM"
 },
 {
   data: 1194,
   value: "KRAFT BREAKSTONE'S FREE FAT FREE SOUR CRM"
 },
 {
   data: 1195,
   value: "KRAFT BREYERS LOWFAT STRAWBERRY YOGURT (1% MILKFAT)"
 },
 {
   data: 1196,
   value: "KRAFT BREYERS LT N' LVLY LOWFAT STR'BERY YOGURT (1% MILKFAT)"
 },
 {
   data: 1197,
   value: "KRAFT BREYERS SMOTH&CRMY LOWFAT STR'BERY YOGURT (1% MILKFAT)"
 },
 {
   data: 1198,
   value: "KRAFT BREYERS LT NONFAT STR'BERY YOGURT (W/ASPRT&FRUCT SW'T)"
 },
 {
   data: 1199,
   value: "CREAM,HALF & HALF,FAT FREE"
 },
 {
   data: 1200,
   value: "REDDI WIP FAT FREE WHIPPED TOPPING"
 },
 {
   data: 1202,
   value: "MILK,CHOC,FLUID,COMM,RED FAT,W/ ADDED CA"
 },
 {
   data: 1203,
   value: "YOGURT,FRUIT,LOFAT,W/LO CAL SWEETENER"
 },
 {
   data: 1204,
   value: "CHEESE,PARMESAN,DRY GRATED,RED FAT"
 },
 {
   data: 1205,
   value: "CREAM SUB,FLAV,LIQ"
 },
 {
   data: 1206,
   value: "CREAM SUB,FLAV,PDR"
 },
 {
   data: 1208,
   value: "CHEESE,PROVOLONE,RED FAT"
 },
 {
   data: 1209,
   value: "CHEESE,MEXICAN,BLEND,RED FAT"
 },
 {
   data: 1210,
   value: "EGG MIX,USDA CMDTY"
 },
 {
   data: 1211,
   value: "MILK,WHL,3.25% MILKFAT,WO/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1212,
   value: "MILK,DRY,WHL,WO/ ADDED VITAMIN D"
 },
 {
   data: 1214,
   value: "MILK,CND,EVAP,WO/ ADDED VIT A & VITAMIN D"
 },
 {
   data: 1215,
   value: "CHEESE PRODUCT,PAST PROCESS,AMERICAN,RED FAT,FORT W/ VIT D"
 },
 {
   data: 1216,
   value: "YOGURT,FRUIT,LOFAT,9 GRAMS PROT PER 8 OZ,FORT W/ VITAMIN D"
 },
 {
   data: 1217,
   value: "YOGURT,FRUIT,LOFAT,10 GRAMS PROT PER 8 OZ,FORT W/ VITAMIN D"
 },
 {
   data: 1218,
   value: "YOGURT,FRUIT VAR,NONFAT,FORT W/ VITAMIN D"
 },
 {
   data: 1219,
   value: "YOGURT,FRUIT,LOWFAT,W/ LO CAL SWTNR,FORT W/ VITAMIN D"
 },
 {
   data: 1220,
   value: "YOGURT,VANILLA,LOFAT,11 GRAMS PROT PER 8 OZ,FORT W/ VIT D"
 },
 {
   data: 1221,
   value: "YOGURT,VAN/LEM FLAV,NONFAT MILK,W/ LO-CAL SWTNR,FORT W/VIT D"
 },
 {
   data: 1222,
   value: "YOGURT,CHOC,NONFAT MILK,FORT W/ VITAMIN D"
 },
 {
   data: 1223,
   value: "PROTEIN SUPP,MILK BSD,MUSCLE MILK,PDR"
 },
 {
   data: 1224,
   value: "PROTEIN SUPP,MILK BSD,MUSCLE MILK LT,PDR"
 },
 {
   data: 1225,
   value: "DULCE DE LECHE"
 },
 {
   data: 1226,
   value: "EGG SUB,LIQ OR FRZ,FAT FREE"
 },
 {
   data: 1227,
   value: "CHEESE,DRY WHITE,QUESO SECO"
 },
 {
   data: 1228,
   value: "CHEESE,FRSH,QUESO FRESCO"
 },
 {
   data: 1229,
   value: "CHEESE,WHITE,QUESO BLANCO"
 },
 {
   data: 1230,
   value: "MILK,BTTRMLK,FLUID,WHL"
 },
 {
   data: 1231,
   value: "YOGURT,VANILLA FLAVOR,LOWFAT MILK,SWTND W/ LO CAL SWTNR"
 },
 {
   data: 1235,
   value: "YOGURT,FRZ,FLAVORS NOT CHOC,NONFAT MILK,W/ LOW-CALORIE SWTNR"
 },
 {
   data: 1236,
   value: "ICE CRM,SOFT SERVE,CHOC"
 },
 {
   data: 1237,
   value: "ICE CRM,BAR OR STK,CHOC COVERED"
 },
 {
   data: 1238,
   value: "ICE CRM SNDWCH"
 },
 {
   data: 1239,
   value: "ICE CRM COOKIE SNDWCH"
 },
 {
   data: 1240,
   value: "ICE CRM CONE,CHOC COVERED,W/ NUTS,FLAVORS OTHER THAN CHOC"
 },
 {
   data: 1241,
   value: "ICE CRM SNDWCH,MADE W/ LT ICE CRM,VANILLA"
 },
 {
   data: 1242,
   value: "ICE CRM SNDWCH,VANILLA,LT,NO SUGAR ADDED"
 },
 {
   data: 1243,
   value: "FAT FREE ICE CRM,NO SUGAR ADDED,FLAVORS OTHER THAN CHOC"
 },
 {
   data: 1244,
   value: "MILK DSSRT BAR,FRZ,MADE FROM LOWFAT MILK"
 },
 {
   data: 1250,
   value: "NUTRITIONAL SUPP FOR PEOPLE W/ DIABETES,LIQ"
 },
 {
   data: 1251,
   value: "CHEESE,MEXICAN BLEND"
 },
 {
   data: 1252,
   value: "CHEESE PRODUCT,PAST PROCESS,AMERICAN,VITAMIN D FORT"
 },
 {
   data: 1253,
   value: "CHEESE,PAST PROCESS,AMERICAN,WO/ ADDED VITAMIN D"
 },
 {
   data: 1254,
   value: "CHEESE FD,PAST PROCESS,AMERICAN,WO/ ADDED VITAMIN D"
 },
 {
   data: 1255,
   value: "EGG,WHL,RAW,FRZ,SALTED,PAST"
 },
 {
   data: 1256,
   value: "YOGURT,GREEK,PLN,NONFAT"
 },
 {
   data: 1258,
   value: "EGG,WHITE,DRIED,STABILIZED,GLUCOSE RED"
 },
 {
   data: 2001,
   value: "ALLSPICE,GROUND"
 },
 {
   data: 2002,
   value: "ANISE SEED"
 },
 {
   data: 2003,
   value: "SPICES,BASIL,DRIED"
 },
 {
   data: 2004,
   value: "SPICES,BAY LEAF"
 },
 {
   data: 2005,
   value: "CARAWAY SEED"
 },
 {
   data: 2006,
   value: "SPICES,CARDAMOM"
 },
 {
   data: 2007,
   value: "CELERY SEED"
 },
 {
   data: 2008,
   value: "CHERVIL,DRIED"
 },
 {
   data: 2009,
   value: "CHILI POWDER"
 },
 {
   data: 2010,
   value: "CINNAMON,GROUND"
 },
 {
   data: 2011,
   value: "CLOVES,GROUND"
 },
 {
   data: 2012,
   value: "CORIANDER LEAF,DRIED"
 },
 {
   data: 2013,
   value: "CORIANDER SEED"
 },
 {
   data: 2014,
   value: "CUMIN SEED"
 },
 {
   data: 2015,
   value: "CURRY POWDER"
 },
 {
   data: 2016,
   value: "DILL SEED"
 },
 {
   data: 2017,
   value: "DILL WEED,DRIED"
 },
 {
   data: 2018,
   value: "FENNEL SEED"
 },
 {
   data: 2019,
   value: "FENUGREEK SEED"
 },
 {
   data: 2020,
   value: "GARLIC POWDER"
 },
 {
   data: 2021,
   value: "GINGER,GROUND"
 },
 {
   data: 2022,
   value: "MACE,GROUND"
 },
 {
   data: 2023,
   value: "MARJORAM,DRIED"
 },
 {
   data: 2024,
   value: "SPICES,MUSTARD SD,GROUND"
 },
 {
   data: 2025,
   value: "NUTMEG,GROUND"
 },
 {
   data: 2026,
   value: "ONION POWDER"
 },
 {
   data: 2027,
   value: "SPICES,OREGANO,DRIED"
 },
 {
   data: 2028,
   value: "PAPRIKA"
 },
 {
   data: 2029,
   value: "PARSLEY,DRIED"
 },
 {
   data: 2030,
   value: "PEPPER,BLACK"
 },
 {
   data: 2031,
   value: "PEPPER,RED OR CAYENNE"
 },
 {
   data: 2032,
   value: "PEPPER,WHITE"
 },
 {
   data: 2033,
   value: "POPPY SEED"
 },
 {
   data: 2034,
   value: "POULTRY SEASONING"
 },
 {
   data: 2035,
   value: "PUMPKIN PIE SPICE"
 },
 {
   data: 2036,
   value: "ROSEMARY,DRIED"
 },
 {
   data: 2037,
   value: "SAFFRON"
 },
 {
   data: 2038,
   value: "SAGE,GROUND"
 },
 {
   data: 2039,
   value: "SAVORY,GROUND"
 },
 {
   data: 2041,
   value: "SPICES,TARRAGON,DRIED"
 },
 {
   data: 2042,
   value: "SPICES,THYME,DRIED"
 },
 {
   data: 2043,
   value: "TURMERIC,GROUND"
 },
 {
   data: 2044,
   value: "BASIL,FRESH"
 },
 {
   data: 2045,
   value: "DILL WEED,FRSH"
 },
 {
   data: 2046,
   value: "MUSTARD,PREPARED,YELLOW"
 },
 {
   data: 2047,
   value: "SALT,TABLE"
 },
 {
   data: 2048,
   value: "VINEGAR,CIDER"
 },
 {
   data: 2049,
   value: "THYME,FRSH"
 },
 {
   data: 2050,
   value: "VANILLA EXTRACT"
 },
 {
   data: 2051,
   value: "VANILLA EXTRACT,IMITN,ALCOHOL"
 },
 {
   data: 2052,
   value: "VANILLA EXTRACT,IMITN,NO ALCOHOL"
 },
 {
   data: 2053,
   value: "VINEGAR,DISTILLED"
 },
 {
   data: 2054,
   value: "CAPERS,CANNED"
 },
 {
   data: 2055,
   value: "HORSERADISH,PREPARED"
 },
 {
   data: 2063,
   value: "ROSEMARY,FRESH"
 },
 {
   data: 2064,
   value: "PEPPERMINT,FRESH"
 },
 {
   data: 2065,
   value: "SPEARMINT,FRESH"
 },
 {
   data: 2066,
   value: "SPEARMINT,DRIED"
 },
 {
   data: 2068,
   value: "VINEGAR,RED WINE"
 },
 {
   data: 2069,
   value: "VINEGAR,BALSAMIC"
 },
 {
   data: 2073,
   value: "PACE,DRY TACO SEAS MIX"
 },
 {
   data: 3001,
   value: "BABYFOOD,JUC TREATS,FRUIT MEDLEY,TODD"
 },
 {
   data: 3002,
   value: "BABYFOOD,MEAT,BF,STR"
 },
 {
   data: 3003,
   value: "BABYFOOD,MEAT,BF,STR"
 },
 {
   data: 3005,
   value: "BABYFOOD,MEAT,VEAL,STR"
 },
 {
   data: 3007,
   value: "BABYFOOD,MEAT,PORK,STR"
 },
 {
   data: 3008,
   value: "BABYFOOD,MEAT,HAM,STR"
 },
 {
   data: 3009,
   value: "BABYFOOD,MEAT,HAM,JUNIOR"
 },
 {
   data: 3010,
   value: "BABYFOOD,MEAT,LAMB,STR"
 },
 {
   data: 3011,
   value: "BABYFOOD,MEAT,LAMB,JUNIOR"
 },
 {
   data: 3012,
   value: "BABYFOOD,MEAT,CHICK,STR"
 },
 {
   data: 3013,
   value: "BABYFOOD,MEAT,CHICK,JR"
 },
 {
   data: 3014,
   value: "BABYFOOD,MEAT,CHICK STKS,JR"
 },
 {
   data: 3015,
   value: "BABYFOOD,MEAT,TURKEY,STR"
 },
 {
   data: 3016,
   value: "BABYFOOD,MEAT,TURKEY,JR"
 },
 {
   data: 3017,
   value: "Babyfood, meat, turkey sticks, junior"
 },
 {
   data: 3019,
   value: "GERBER GRADUATES FRUIT STRIPS REAL FRUIT BARS"
 },
 {
   data: 3021,
   value: "BABYFOOD,MEAT,MEAT STKS,JR"
 },
 {
   data: 3041,
   value: "BABYFOOD,DINNER,VEG&DUMPLINGS&BF,STR"
 },
 {
   data: 3042,
   value: "BABYFOOD,DINNER,VEG&DUMPLINGS&BF,JR"
 },
 {
   data: 3043,
   value: "BABYFOOD,DINNER,BF LASAGNA,TODD"
 },
 {
   data: 3044,
   value: "BABYFOOD,DINNER,MACARONI&TOMATO&BF,STR"
 },
 {
   data: 3045,
   value: "BABYFOOD,DINNER,MACARONI&TOMATO&BF,JR"
 },
 {
   data: 3046,
   value: "BABYFOOD,RAVIOLI,CHS FILLED,W/TOMATO SAU"
 },
 {
   data: 3047,
   value: "BABYFOOD,DINNER,BF NOODLE,STR"
 },
 {
   data: 3048,
   value: "BABYFOOD,MACARONI&CHS,TODD"
 },
 {
   data: 3049,
   value: "BABYFOOD,DINNER,BF&RICE,TODD"
 },
 {
   data: 3050,
   value: "BABYFOOD,DINNER,SPAGHETTI&TOMATO&MEAT,JR"
 },
 {
   data: 3051,
   value: "BABYFOOD,DINNER,SPAGHETTI&TOMATO&MEAT,TODD"
 },
 {
   data: 3052,
   value: "BABYFOOD,DINNER,BF STEW,TODD"
 },
 {
   data: 3053,
   value: "BABYFOOD,DINNER,VEG&BF,STR"
 },
 {
   data: 3054,
   value: "BABYFOOD,DINNER,VEG&BF,JR"
 },
 {
   data: 3055,
   value: "BABYFOOD,DINNER,BF W/VEG"
 },
 {
   data: 3059,
   value: "BABYFOOD,DINNER,VEG&BACON,STR"
 },
 {
   data: 3061,
   value: "BABYFOOD,DINNER,VEG&HAM,STR"
 },
 {
   data: 3062,
   value: "BABYFOOD,DINNER,VEG&HAM,JR"
 },
 {
   data: 3066,
   value: "BABYFOOD,DINNER,VEG&LAMB,STR"
 },
 {
   data: 3067,
   value: "BABYFOOD,DINNER,VEG&LAMB,JR"
 },
 {
   data: 3068,
   value: "BABYFOOD,DINNER,CHICK NOODLE,STR"
 },
 {
   data: 3069,
   value: "BABYFOOD,DINNER,CHICK NOODLE,JR"
 },
 {
   data: 3070,
   value: "BABYFOOD,DINNER,CHICK SOUP,STR"
 },
 {
   data: 3072,
   value: "BABYFOOD  DINNER  CHICK STEW  TODD"
 },
 {
   data: 3073,
   value: "BABYFOOD,DINNER,VEG CHICK,STR"
 },
 {
   data: 3075,
   value: "BABYFOOD,DINNER,VEG,NOODLES&CHICK,STR"
 },
 {
   data: 3076,
   value: "BABYFOOD,DINNER,VEG,NOODLES&CHICK,JR"
 },
 {
   data: 3077,
   value: "BABYFOOD,DINNER,PASTA W/VEG"
 },
 {
   data: 3079,
   value: "BABYFOOD,DINNER,VEG&NOODLES&TURKEY,STR"
 },
 {
   data: 3081,
   value: "BABYFOOD,DINNER,VEG&NOODLES&TURKEY,JR"
 },
 {
   data: 3082,
   value: "BABYFOOD,DINNER,TURKEY&RICE,STR"
 },
 {
   data: 3083,
   value: "BABYFOOD,DINNER,TURKEY&RICE,JR"
 },
 {
   data: 3084,
   value: "BABYFOOD,DINNER,VEG&TURKEY,STR"
 },
 {
   data: 3085,
   value: "BABYFOOD,DINNER,VEG&TURKEY,JR"
 },
 {
   data: 3086,
   value: "BABYFOOD,DINNER,VEG&TURKEY,TODD"
 },
 {
   data: 3089,
   value: "BABYFOOD,DINNER,MACARONI&CHS,STR"
 },
 {
   data: 3090,
   value: "BABYFOOD,DINNER,MACARONI&CHS,JR"
 },
 {
   data: 3091,
   value: "BABYFOOD,VEG,GRN BNS,STR"
 },
 {
   data: 3092,
   value: "BABYFOOD,VEG,GRN BNS,JR"
 },
 {
   data: 3093,
   value: "BABYFOOD,GRN BNS,DICES,TODD"
 },
 {
   data: 3096,
   value: "BABYFOOD,VEG,GRN BNS&POTATOES"
 },
 {
   data: 3098,
   value: "BABYFOOD,VEG,BEETS,STR"
 },
 {
   data: 3099,
   value: "BABYFOOD,VEG,CARROTS,STR"
 },
 {
   data: 3100,
   value: "BABYFOOD,VEG,CARROTS,JR"
 },
 {
   data: 3104,
   value: "BABYFOOD,VEG,SQUASH,STR"
 },
 {
   data: 3105,
   value: "BABYFOOD,VEG,SQUASH,JR"
 },
 {
   data: 3108,
   value: "BABYFOOD,VEG,SWT POTATOES,STR"
 },
 {
   data: 3109,
   value: "BABYFOOD,VEG,SWT POTATOES,JR"
 },
 {
   data: 3112,
   value: "BABYFOOD,POTATOES,TODDLER"
 },
 {
   data: 3114,
   value: "BABYFOOD,VEG,BUTTERNUT SQUASH&CORN"
 },
 {
   data: 3115,
   value: "BABYFOOD,APPLS,DICES,TODD"
 },
 {
   data: 3116,
   value: "BABYFOOD,FRUIT,APPLSAUC,STR"
 },
 {
   data: 3117,
   value: "BABYFOOD,FRUIT,APPLSAUC,JR"
 },
 {
   data: 3118,
   value: "BABYFOOD,FRUIT,APRICOT W/TAPIOCA,STR"
 },
 {
   data: 3119,
   value: "BABYFOOD,VEG,CORN,CRMD,STR"
 },
 {
   data: 3120,
   value: "BABYFOOD,VEG,CORN,CRMD,JR"
 },
 {
   data: 3121,
   value: "BABYFOOD,VEG,PEAS,STR"
 },
 {
   data: 3122,
   value: "BABYFOOD,PEAS,DICES,TODD"
 },
 {
   data: 3127,
   value: "BABYFOOD,VEG,SPINACH,CRMD,STR"
 },
 {
   data: 3128,
   value: "BABYFOOD,FRUIT,APRICOT W/TAPIOCA,JR"
 },
 {
   data: 3129,
   value: "BABYFOOD,FRUIT,BANANAS W/TAPIOCA,STR"
 },
 {
   data: 3130,
   value: "BABYFOOD,FRUIT,PEACHES,STR"
 },
 {
   data: 3131,
   value: "BABYFOOD,FRUIT,PEACHES,JR"
 },
 {
   data: 3132,
   value: "BABYFOOD,FRUIT,PEARS,STR"
 },
 {
   data: 3133,
   value: "BABYFOOD,FRUIT,PEARS,JR"
 },
 {
   data: 3134,
   value: "BABYFOOD,FRUIT,PLUMS W/TAPIOCA,WO/VIT C,STR"
 },
 {
   data: 3135,
   value: "BABYFOOD,FRUIT,PLUMS W/TAPIOCA,WO/VIT C,JR"
 },
 {
   data: 3136,
   value: "BABYFOOD,FRUIT,PRUNES W/TAPIOCA,WO/VIT C,STR"
 },
 {
   data: 3137,
   value: "BABYFOOD,FRUIT,PRUNES W/TAPIOCA,WO/VIT C,JR"
 },
 {
   data: 3139,
   value: "BABYFOOD,PRUNES,WO/VIT C,STR"
 },
 {
   data: 3140,
   value: "BABYFOOD,FRUIT DSSRT,MANGO W/ TAPIOCA"
 },
 {
   data: 3141,
   value: "BABYFOOD,PEARS,DICES,TODD"
 },
 {
   data: 3142,
   value: "BABYFOOD,FRUIT,APPLSAUC&APRICOTS,STR"
 },
 {
   data: 3143,
   value: "BABYFOOD,FRUIT,APPLSAUC&APRICOTS,JR"
 },
 {
   data: 3144,
   value: "BABYFOOD,FRUIT,APPLSAUC&CHERRIES,STR"
 },
 {
   data: 3145,
   value: "BABYFOOD,FRUIT,APPLSAUC & CHERRIES,JR"
 },
 {
   data: 3147,
   value: "BABYFOOD,FRUIT,APPLSAUC W/BANANA,JR"
 },
 {
   data: 3150,
   value: "BABYFOOD,FRUIT,APPLSAUC&PNAPPL,STR"
 },
 {
   data: 3151,
   value: "BABYFOOD,FRUIT,APPLSAUC&PNAPPL,JR"
 },
 {
   data: 3152,
   value: "BABYFOOD,FRUIT,APPL & RASPBERRY,STR"
 },
 {
   data: 3153,
   value: "BABYFOOD,FRUIT,APPL & RASPBERRY,JR"
 },
 {
   data: 3154,
   value: "BABYFOOD,FRUIT & VEG,APPL & SWT POTATO"
 },
 {
   data: 3156,
   value: "BABYFOOD,FRUIT,BANANAS&PNAPPL W/TAPIOCA,JR"
 },
 {
   data: 3157,
   value: "BABYFOOD,FRUIT,BANANAS&PNAPPL W/TAPIOCA,STR"
 },
 {
   data: 3158,
   value: "BABYFOOD,FRUIT,PEARS&PNAPPL,STR"
 },
 {
   data: 3159,
   value: "BABYFOOD,FRUIT,PEARS&PNAPPL,JR"
 },
 {
   data: 3160,
   value: "BABYFOOD,FRUIT,GUAVA&PAPAYA W/TAPIOCA,STR"
 },
 {
   data: 3161,
   value: "BABYFOOD,PEACHES,DICES,TODD"
 },
 {
   data: 3162,
   value: "BABYFOOD,FRUIT,PAPAYA&APPLSAUC W/TAPIOCA,STR"
 },
 {
   data: 3163,
   value: "BABYFOOD,FRUIT,BANANAS W/APPLS&PEARS,STR"
 },
 {
   data: 3164,
   value: "BABYFOOD,FRUIT,APPL&BLUEBERRY,STR"
 },
 {
   data: 3165,
   value: "BABYFOOD,FRUIT,APPL&BLUEBERRY,JR"
 },
 {
   data: 3166,
   value: "BABYFOOD,JUICE,APPLE"
 },
 {
   data: 3167,
   value: "BABYFOOD,APPLE-BANANA JUC"
 },
 {
   data: 3168,
   value: "BABYFOOD,JUC,APPL&PEACH"
 },
 {
   data: 3169,
   value: "BABYFOOD,APPLE-CRANBERRY JUC"
 },
 {
   data: 3170,
   value: "BABYFOOD,JUC,APPL&PLUM"
 },
 {
   data: 3171,
   value: "BABYFOOD,JUC,APPL&PRUNE"
 },
 {
   data: 3172,
   value: "BABYFOOD,JUICE,ORANGE"
 },
 {
   data: 3173,
   value: "BABYFOOD,JUC,ORANGE&APPL"
 },
 {
   data: 3174,
   value: "BABYFOOD,JUC,ORANGE&APPL&BANANA"
 },
 {
   data: 3175,
   value: "BABYFOOD,JUC,ORANGE&APRICOT"
 },
 {
   data: 3176,
   value: "BABYFOOD,JUC,ORANGE&BANANA"
 },
 {
   data: 3177,
   value: "BABYFOOD,JUC,ORANGE&PNAPPL"
 },
 {
   data: 3178,
   value: "BABYFOOD,JUC,PRUNE&ORANGE"
 },
 {
   data: 3179,
   value: "BABYFOOD,JUC,MXD FRUIT"
 },
 {
   data: 3181,
   value: "BABYFOOD,CRL,BARLEY,DRY"
 },
 {
   data: 3184,
   value: "BABYFOOD,CRL,WHL WHEAT,W/APPLS,DRY"
 },
 {
   data: 3185,
   value: "BABYFOOD,CEREAL,MIXED,DRY"
 },
 {
   data: 3186,
   value: "BABYFOOD,CRL,MXD,W/BANANAS,DRY"
 },
 {
   data: 3187,
   value: "BABYFOOD,CRL,MXD,W/APPLSAUC&BANANAS,STR"
 },
 {
   data: 3188,
   value: "BABYFOOD,CRL,MXD,W/ APPLSAUC & BANANAS,JR"
 },
 {
   data: 3189,
   value: "BABYFOOD,CRL,OATMEAL,DRY"
 },
 {
   data: 3190,
   value: "BABYFOOD,CRL,OATMEAL,W/BANANAS,DRY"
 },
 {
   data: 3191,
   value: "BABYFOOD,CRL,OATMEAL,W/APPLSAUC&BANANAS,STR"
 },
 {
   data: 3192,
   value: "BABYFOOD,CRL,OATMEAL,W/APPLSAUC&BANANAS,JR"
 },
 {
   data: 3193,
   value: "BABYFOOD,CRL,OATMEAL,W/HONEY,DRY"
 },
 {
   data: 3194,
   value: "BABYFOOD,CEREAL,RICE,DRY"
 },
 {
   data: 3195,
   value: "BABYFOOD,CRL,RICE,W/APPLSAUC&BANANAS,STR"
 },
 {
   data: 3197,
   value: "BABYFOOD,CRL,W/EGG YOLKS,STR"
 },
 {
   data: 3198,
   value: "BABYFOOD,CRL,W/EGG YOLKS,JR"
 },
 {
   data: 3199,
   value: "BABYFOOD,CRL,W/EGGS,STR"
 },
 {
   data: 3201,
   value: "BABYFOOD,CRL,EGG YOLKS&BACON,JR"
 },
 {
   data: 3205,
   value: "BABYFOOD,OATMEAL CRL W/FRUIT,DRY,INST,TODD"
 },
 {
   data: 3206,
   value: "BABYFOOD,COOKIE,BABY,FRUIT"
 },
 {
   data: 3209,
   value: "BABYFOOD,CRACKERS,VEG"
 },
 {
   data: 3210,
   value: "BABYFOOD,CRL,RICE,W/MXD FRUIT,JR"
 },
 {
   data: 3211,
   value: "BABYFOOD,CRL,HI PROT,W/APPL&ORANGE,DRY"
 },
 {
   data: 3212,
   value: "BABYFOOD,CRL,RICE,W/BANANAS,DRY"
 },
 {
   data: 3213,
   value: "BABYFOOD,COOKIES"
 },
 {
   data: 3214,
   value: "BABYFOOD,COOKIES,ARROWROOT"
 },
 {
   data: 3215,
   value: "BABYFOOD,PRETZELS"
 },
 {
   data: 3216,
   value: "BABYFOOD,TEETHING BISCUITS"
 },
 {
   data: 3217,
   value: "ZWIEBACK"
 },
 {
   data: 3220,
   value: "BABYFOOD,DSSRT,DUTCH APPL,STR"
 },
 {
   data: 3221,
   value: "BABYFOOD,DSSRT,DUTCH APPL,JR"
 },
 {
   data: 3222,
   value: "BABYFOOD,CHERRY COBBLER,JR"
 },
 {
   data: 3224,
   value: "BABYFOOD,DSSRT,CHERRY VANILLA PUDD,STR"
 },
 {
   data: 3225,
   value: "BABYFOOD,DSSRT,CHERRY VANILLA PUDD,JR"
 },
 {
   data: 3226,
   value: "BABYFOOD,DSSRT,FRUIT PUDD,ORANGE,STR"
 },
 {
   data: 3227,
   value: "BABYFOOD,DSSRT,PEACH COBBLER,STR"
 },
 {
   data: 3228,
   value: "BABYFOOD,DSSRT,PEACH COBBLER,JR"
 },
 {
   data: 3229,
   value: "BABYFOOD,DSSRT,PEACH MELBA,STR"
 },
 {
   data: 3230,
   value: "BABYFOOD,DSSRT,PEACH MELBA,JR"
 },
 {
   data: 3233,
   value: "BABYFOOD,DSSRT,FRUIT PUDD,PNAPPL,STR"
 },
 {
   data: 3235,
   value: "BABYFOOD,DSSRT,FRUIT DSSRT,WO/VIT C,STR"
 },
 {
   data: 3236,
   value: "BABYFOOD,DSSRT,FRUIT DSSRT,WO/VIT C,JR"
 },
 {
   data: 3238,
   value: "BABYFOOD,DSSRT,TROPICAL FRUIT,JR"
 },
 {
   data: 3245,
   value: "BABYFOOD,DSSRT,CUSTARD PUDD,VANILLA,STR"
 },
 {
   data: 3246,
   value: "BABYFOOD,DSSRT,CUSTARD PUDD,VANILLA,JR"
 },
 {
   data: 3265,
   value: "BABYFOOD,JUC,APPL&GRAPE"
 },
 {
   data: 3267,
   value: "BABYFOOD,JUC,FRUIT PUNCH,W/CA"
 },
 {
   data: 3268,
   value: "BABYFOOD,JUC,APPL&CHERRY"
 },
 {
   data: 3269,
   value: "BABYFOOD,JUC,APPL,W/CA"
 },
 {
   data: 3274,
   value: "BABYFOOD,DINNER,VEG&CHICK,JR"
 },
 {
   data: 3278,
   value: "BABYFOOD,DINNER,MXD VEG,STR"
 },
 {
   data: 3279,
   value: "BABYFOOD,DINNER,MXD VEG,JR"
 },
 {
   data: 3280,
   value: "BABYFOOD,FRUIT,BANANAS W/TAPIOCA,JR"
 },
 {
   data: 3282,
   value: "BABYFOOD,VEG,MIX VEG JR"
 },
 {
   data: 3283,
   value: "BABYFOOD,VEG,GARDEN VEG,STR"
 },
 {
   data: 3286,
   value: "BABYFOOD,VEG,MIX VEG STR"
 },
 {
   data: 3287,
   value: "BABYFOOD,DINNER,BF NOODLE,JR"
 },
 {
   data: 3289,
   value: "BABYFOOD,APPLS W/HAM,STR"
 },
 {
   data: 3290,
   value: "BABYFOOD,CARROTS&BF,STR"
 },
 {
   data: 3293,
   value: "BABYFOOD,PLUMS,BANANAS&RICE,STR"
 },
 {
   data: 3296,
   value: "BABYFOOD,DINNER,TURKEY,RICE,AND VEG,TODD"
 },
 {
   data: 3297,
   value: "BABYFOOD,DINNER,APPLS&CHICK,STR"
 },
 {
   data: 3298,
   value: "BABYFOOD,DINNER,BROCCOLI & CHICK,JR"
 },
 {
   data: 3301,
   value: "Babyfood, beverage, GERBER GRADUATE FRUIT SPLASHERS"
 },
 {
   data: 3302,
   value: "BABYFOOD,SNACK,GERBER GRADUATE YOGURT MELTS"
 },
 {
   data: 3303,
   value: "BABYFOOD,DINNER,SWT POTATOES&CHICK,STR"
 },
 {
   data: 3304,
   value: "BABYFOOD,DINNER,POTATOES W/CHS&HAM,TODD"
 },
 {
   data: 3681,
   value: "BABYFOOD,CRL,BARLEY,PREP W/WHL MILK"
 },
 {
   data: 3682,
   value: "BABYFOOD,CRL,HI PROT,PREP W/WHL MILK"
 },
 {
   data: 3685,
   value: "BABYFOOD,CRL,MXD,PREP W/WHL MILK"
 },
 {
   data: 3686,
   value: "BABYFOOD,CRL,MXD,W/BANANAS,PREP W/WHL MILK"
 },
 {
   data: 3689,
   value: "BABYFOOD,CRL,OATMEAL,PREP W/WHL MILK"
 },
 {
   data: 3690,
   value: "BABYFOOD,CRL,OATMEAL,W/BANANAS,PREP W/WHL MILK"
 },
 {
   data: 3693,
   value: "BABYFOOD,CRL,OATMEAL,W/HONEY,PREP W/WHL MILK"
 },
 {
   data: 3694,
   value: "BABYFOOD,CRL,RICE,PREP W/WHL MILK"
 },
 {
   data: 3696,
   value: "BABYFOOD,CRL,RICE,W/HONEY,PREP W/WHL MILK"
 },
 {
   data: 3704,
   value: "BABYFOOD,CRL,MXD,W/HONEY,PREP W/WHL MILK"
 },
 {
   data: 3711,
   value: "BABYFOOD,CRL,HI PROT,W/APPL&ORANGE,PREP W/WHL MILK"
 },
 {
   data: 3712,
   value: "BABYFOOD,CRL,RICE,W/BANANAS,PREP W/WHL MILK"
 },
 {
   data: 3800,
   value: "INF FORMULA,NESTLE,GOOD START SUPREME,W/ IRON,RTF"
 },
 {
   data: 3801,
   value: "INF FORMULA,NES,G START SUPR,W/ IRON,LIQ CONC,NOT RECON"
 },
 {
   data: 3802,
   value: "INF FORMULA,NESTLE,GOOD START SUPREME,W/ IRON,PDR"
 },
 {
   data: 3803,
   value: "INFANT FORMULA,MEAD JOHNSON,ENFAMIL,W/IRON,RTF"
 },
 {
   data: 3805,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,W/ IRON,PDR"
 },
 {
   data: 3806,
   value: "INFANT FORMULA,MEAD JOHNSON,ENFAMIL,LO IRON,RTF"
 },
 {
   data: 3808,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMILLIPIL,W/IRN,PDR,W/ ARA & DHA"
 },
 {
   data: 3809,
   value: "INFANT FORMULA,MEAD JOHNSON,ENFAMIL,LO IRON,PDR,NOT RECON"
 },
 {
   data: 3812,
   value: "INF FORMU,MEAD JOHNS,ENFA,LIPIL,W/ IRO,LIQ CONC,W/ ARA & DHA"
 },
 {
   data: 3813,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN,W/ IRON,RTF"
 },
 {
   data: 3814,
   value: "INF FORM,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN,W/IRON,PDR,NOTRECN"
 },
 {
   data: 3815,
   value: "INF FORMMEAD JOHN,ENFAMIL LIPIL,W/ IRON,RTF,W/ ARA & DHA"
 },
 {
   data: 3816,
   value: "INF FORM,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN,W/IRON,LC,NOT RECON"
 },
 {
   data: 3817,
   value: "INF FORM,ME JOHNS,ENFAMIL,LIPIL,LO IRON,PDR,W/ ARA & DHA"
 },
 {
   data: 3818,
   value: "INF FORM,ME JOHNS,ENFAM,LIP,LO IRON,LIQ CONC,W/ ARA & DHA"
 },
 {
   data: 3819,
   value: "CHILD FORMULA,MEAD JOHNSON,PORTAGEN,W/ IRON,PDR,NOT RECON"
 },
 {
   data: 3820,
   value: "CHILD FORMULA,MEAD JOHNSON,PORTAGEN,W/ IRON,PREP FROM PDR"
 },
 {
   data: 3821,
   value: "INFANT FORMULA,MEAD JOHNSON,PREGESTIMIL,W/IRON,PDR,NOT RECON"
 },
 {
   data: 3822,
   value: "INFANT FORMULA,MEAD JOHNSON,PREGESTIMIL,W/IRON,PREP FROM PDR"
 },
 {
   data: 3823,
   value: "INF FORMULA,MEAD JOHNSON,PROSOBEE,W/ IRON,RTF"
 },
 {
   data: 3824,
   value: "INFANT FORMULA,MEAD JOHNSON,PROSOBEE,W/IRON,LIQ CNC, NOT REC"
 },
 {
   data: 3825,
   value: "INF FOR,ME JOHN,ENFAM,LIPIL,LO IRON,READY TO FE,W/ ARA & DHA"
 },
 {
   data: 3826,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PROSOBEE,IRON,PDR,NOT RECON"
 },
 {
   data: 3827,
   value: "INF FOR,ME JOHNS,ENFAMIL,LACTOF LIPIL,W/ IR,PDR,W/ ARA & DHA"
 },
 {
   data: 3830,
   value: "INF FOR,MEA JO,ENF,LACT,LIPIL,W/ IR,LI CO,NO REC,W/ AR & DH"
 },
 {
   data: 3832,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,LIPIL,RTF,W/ ARA & DHA"
 },
 {
   data: 3837,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,PM 60/40,PDR NOT RECON"
 },
 {
   data: 3838,
   value: "INF FOR,ME JOH,ENF,NUTR LIPIL,W/ IRO,PDR,NOT RE,W/ ARA & DHA"
 },
 {
   data: 3839,
   value: "INF FORMU,ABBOTT NUTR,SIMILA NAT CARE,ADVAN,RTF,W/ ARA & DHA"
 },
 {
   data: 3840,
   value: "INF FORM,ABB NUTR,SIM,SPL CAR,ADVA 24,W/ IRON,R,W/ ARA & DHA"
 },
 {
   data: 3841,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,ISOMIL,W/ IRON,RTF"
 },
 {
   data: 3842,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,ISOMIL,W/ IRON,LIQ CONC"
 },
 {
   data: 3843,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,ISOMIL,W/ IRON,PDR,NOT RECON"
 },
 {
   data: 3844,
   value: "INF FO,ME JO,ENF,NUTR,LIPIL,W/ IR,LIQ CO NOT RE,W/ ARA & DHA"
 },
 {
   data: 3845,
   value: "INF FO,ME JOHN,EN,NUTR LIPIL,W/ IRON,RE TO FE,W/ ARA & DHA"
 },
 {
   data: 3846,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,ALIMENTUM,W/ IRON,RTF"
 },
 {
   data: 3849,
   value: "In for, M JOHN, ENF, ENFAC LIP, with ir, po, wi ARA and DH"
 },
 {
   data: 3850,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,W/ IRON,RTF"
 },
 {
   data: 3851,
   value: "INF FORM,AB NUTR,SIMILAC,W/ IRON,LIQ CONC,NOT RECON"
 },
 {
   data: 3852,
   value: "INF FO,ME JOHN,EN,PROS LIPIL,W/ IRON,PDR,NOT RE,W/ ARA & DHA"
 },
 {
   data: 3853,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,W/ IRON,PDR,NOT RECON"
 },
 {
   data: 3854,
   value: "INFFOR,MEADJOHNS,ENFAMIL,PROSOBEE,LIPIL,LC,NOTREC,ARA&DHA"
 },
 {
   data: 3855,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,LO IRON,RTF (FORMERLY ROSS)"
 },
 {
   data: 3856,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,LO IRON,LIQ CONC,NOT RECON"
 },
 {
   data: 3857,
   value: "INF FOR,MEJOHN,PROSOBEE LIPIL,W/ IRON,RE TO FE,W/ ARA & DHA"
 },
 {
   data: 3858,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,LO IRON,PDR,NOT RECON"
 },
 {
   data: 3859,
   value: "INF FORMULA,NESTLE,GOOD START SOY,W/ DHA & ARA,RTF"
 },
 {
   data: 3860,
   value: "CHILD FORMULA,ABBOTT NUTR,PEDIASURE,RTF (FORMERLY ROSS)"
 },
 {
   data: 3861,
   value: "INF FORM,MEAD JOHN,NEXT STEP,PROS LIPIL,PDR,W/ ARA & DHA"
 },
 {
   data: 3864,
   value: "INF FORM,ME JO,NEXT STEP,PROSO,LIPIL,REATO FEED,W/ ARA & DHA"
 },
 {
   data: 3867,
   value: "INF FORMULA,NESTLE,GOOD START SOY,W/ ARA & DHA,PDR"
 },
 {
   data: 3868,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,LACTOFREE,RTF"
 },
 {
   data: 3869,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,LACTOFREE,W/ IRN,PDR,NOTREC"
 },
 {
   data: 3870,
   value: "CHI FORMU,ABBT NUTR,PEDIASU,RTF,W/ IRON & FIB (FORMER ROSS)"
 },
 {
   data: 3880,
   value: "INF FORMU,PBM PRO,ULTRA BRI BEGINN,RTF (FORME WYETH-AYERST)"
 },
 {
   data: 3881,
   value: "INF FOR,PBM PR,UL BRI BEGI,LIQ CONC,NOT (FOR WYETH-AYERST)"
 },
 {
   data: 3883,
   value: "INF FORMULA,PBM PRODUCTS,ULTRA BRIGHT BEGINNINGS,PDR"
 },
 {
   data: 3890,
   value: "INF FORM,PBM PRODU,ULTRA BRIG BEGINNINGS,SOY,RTF"
 },
 {
   data: 3891,
   value: "INF FORMUL,PBM PRODUCTS,ULTRA BRIGHT BEGINNINGS,SOY,LIQ CONC"
 },
 {
   data: 3893,
   value: "INF FORM,PBM,ULTRA BRIGHT BEGIN,SOY,PDR (FORM WYETH-AYERST)"
 },
 {
   data: 3900,
   value: "INF FORMULA,NESTLE,GOOD START 2 ESSENTIALS,W/ IRON,RTF"
 },
 {
   data: 3901,
   value: "INF FOR,NE,GOOD START 2 ESSENT,W/ IRON,LIQ CONC,NOT RECON"
 },
 {
   data: 3913,
   value: "INF FORMULA,NESTLE,GOOD START 2 ESSENTIALS,W/ IRON,PDR"
 },
 {
   data: 3925,
   value: "INF FORMULA,NESTLE,GOOD START ESSENTIALS SOY,W/ IRON,RTF"
 },
 {
   data: 3926,
   value: "INF FORM,NEST,GOOD START ESSENT SOY,W/ IRON,LIQ CON,NOT RECO"
 },
 {
   data: 3928,
   value: "INF FORMULA,NESTLE,GOOD START ESSENTIALS SOY,W/ IRON,PDR"
 },
 {
   data: 3929,
   value: "INF FORMULA,MEAD JOHNSON,NEXT STEP PROSOBEE,PDR,NOT RECON"
 },
 {
   data: 3930,
   value: "INF FORMULA,MEAD JOHNSON,NEXT STEP PROSOBEE,PREP FROM PDR"
 },
 {
   data: 3934,
   value: "BABYFOOD,CORN & SWT POTATOES,STR"
 },
 {
   data: 3935,
   value: "INF FORM,ABBO NUTR,SIMIL,ALIMENT,ADVANCE,RTF,W/ ARA & DHA"
 },
 {
   data: 3936,
   value: "INF FORM,PBM PRODU,STORE BRAND,RTF (FORM WYETH-AYERST)"
 },
 {
   data: 3937,
   value: "INF FORM,PBM PROD,STORE BRAND,LC,NOT REC (FORM WYETH-AYERST)"
 },
 {
   data: 3938,
   value: "INF FORMULA,PBM PRODUCTS,STORE BRAND,PDR"
 },
 {
   data: 3939,
   value: "INF FORMULA,PBM PRODUCTS,STORE BRAND,SOY,RTF"
 },
 {
   data: 3940,
   value: "INF FORMU,PBM PRODU,STORE BR,SOY,LIQ CONC,NOT RECON"
 },
 {
   data: 3941,
   value: "INF FORMULA,PBM PRODUCTS,STORE BRAND,SOY,PDR"
 },
 {
   data: 3942,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,AR LIPIL,RTF,W/ ARA & DHA"
 },
 {
   data: 3943,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,AR LIPIL,PDR,W/ ARA & DHA"
 },
 {
   data: 3944,
   value: "INF FORM,ABBOT NUT,SIMIL NEOSU,RTF,W/ ARA & DHA"
 },
 {
   data: 3945,
   value: "INF FORM,ABBOTT ,SIMILAC,NEOSURE,PDR,W/ ARA & DHA"
 },
 {
   data: 3946,
   value: "INF FOR,ABBO NUTR,SIMIL,SENS (LACTOSE FREE) RTF,W/ ARA & DHA"
 },
 {
   data: 3947,
   value: "INF FOR,ABB NUT,SIMILA,SENSIT,(LACT FR),LIQ CON,W/ ARA & DHA"
 },
 {
   data: 3948,
   value: "INF FOR,ABBONUTR,SIMIL,SENSIT,(LACTO FREE),PDR,W/ ARA & DHA"
 },
 {
   data: 3949,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,ADVANCE,W/ IRON,RTF"
 },
 {
   data: 3950,
   value: "INF FORMULA,ABBOTT NUTR,SIMILAC,ADVANC,W/ IRON,PDR,NOT RECON"
 },
 {
   data: 3951,
   value: "INF FORMU,ABBO NUTR,SIMILAC,ADVAN,W/ IRON,LIQ CONC,NOT RECON"
 },
 {
   data: 3952,
   value: "INF FORM,ABBO NUTR,SIMIL,ISOMIL,ADVA W/ IRON,LIQ CONC"
 },
 {
   data: 3953,
   value: "INF FOR,ABBO NUTR,SIMIL,ISOMIL,ADVANCE W/ IRON,RTF"
 },
 {
   data: 3954,
   value: "INF FOR,ABBO NUTR,SIMI,ISOMIL,ADVANCE W/ IRON,PDR,NOT RECON"
 },
 {
   data: 3955,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,ENFACARE LIPIL,RTF, ARA&DHA"
 },
 {
   data: 3956,
   value: "BABYFOOD,YOGURT,WHL MILK,W/ FRUIT,MULTIGRAIN CRL & ADDED DHA"
 },
 {
   data: 3957,
   value: "INF FORM,ABBOTT,ALIMENTUM ADVANCE,IRON,PDR,NOTREC,DHA&ARA"
 },
 {
   data: 3959,
   value: "BABYFOOD,MSHD CHEDDAR POTATOES&BROCCOLI,TODDLER"
 },
 {
   data: 3960,
   value: "INF FORMULA,NESTLE,GOOD START SUPREME,W/ IRON,DHA & ARA,RTF"
 },
 {
   data: 3961,
   value: "INF FORM,NESTLE,GOOD START SUPREME,IRON,DHA&ARA,PRP FR LC"
 },
 {
   data: 3963,
   value: "INFFORM,MEADJOHNSON,ENFAMIL GENTLEASE LIPIL,W/IRON,PREPFRPDR"
 },
 {
   data: 3964,
   value: "BABY FD,FORT CRL BAR,FRUIT FILLING"
 },
 {
   data: 3965,
   value: "BABYFOOD,YOGURT,WHL MILK,W/ FRUIT,MULTIGRAIN CRL & IRON"
 },
 {
   data: 3966,
   value: "INF FORMULA,NESTLE,GOOD START SOY,W/ DHA & ARA,LIQ CONC"
 },
 {
   data: 3967,
   value: "Infant formula Enfamil,NEXT STEP,Milk based LIPIL, powder"
 },
 {
   data: 3968,
   value: "TODDLER FORMULA, MEAD JOHNSON, ENFAGROW PREMIUM, RTF"
 },
 {
   data: 3980,
   value: "INF FORMULA,MEAD JOHNSON,ENFAMIL,GENTLEASE,PDR"
 },
 {
   data: 4001,
   value: "FAT,BEEF TALLOW"
 },
 {
   data: 4002,
   value: "LARD"
 },
 {
   data: 4011,
   value: "SALAD DRSNG,KRAFT MAYO LT MAYO"
 },
 {
   data: 4013,
   value: "SALAD DRSNG,KRAFT MAYO FAT FREE MAYO DRSNG"
 },
 {
   data: 4014,
   value: "SALAD DRSNG,KRAFT MIRACLE WHIP FREE NONFAT DRSNG"
 },
 {
   data: 4015,
   value: "SALAD DRSNG,RUSSIAN DRSNG"
 },
 {
   data: 4016,
   value: "SALAD DRSNG,SESAME SD DRSNG,REG"
 },
 {
   data: 4017,
   value: "SALAD DRSNG,1000 ISLAND,COMM,REG"
 },
 {
   data: 4018,
   value: "SALAD DRSNG,MAYO TYPE,REG,W/SALT"
 },
 {
   data: 4020,
   value: "SALAD DRSNG,FRENCH DRSNG,RED FAT"
 },
 {
   data: 4021,
   value: "SALAD DRSNG,ITALIAN DRSNG,COMM,RED FAT"
 },
 {
   data: 4022,
   value: "SALAD DRSNG,RUSSIAN DRSNG,LO CAL"
 },
 {
   data: 4023,
   value: "SALAD DRSNG,1000 ISLAND DRSNG,RED FAT"
 },
 {
   data: 4025,
   value: "SALAD DRSNG,MAYO,REG"
 },
 {
   data: 4026,
   value: "SALAD DRSNG,MAYO,SOYBN&SAFFLOWER OIL,W/SALT"
 },
 {
   data: 4027,
   value: "SALAD DRSNG,MAYO,IMITN,SOYBN"
 },
 {
   data: 4028,
   value: "SALAD DRSNG,MAYO,IMITN,MILK CRM"
 },
 {
   data: 4029,
   value: "SALAD DRSNG,MAYO,IMITN,SOYBN WO/CHOL"
 },
 {
   data: 4030,
   value: "SANDWICH SPRD,W/CHOPD PICKLE,REG,UNSPEC OILS"
 },
 {
   data: 4031,
   value: "SHORTENING,HOUSEHOLD,PARTIALLY HYDROG SOYBN -COTTONSEED"
 },
 {
   data: 4034,
   value: "OIL,SOYBN,SALAD OR COOKING,(PARTIALLY HYDROGENATED)"
 },
 {
   data: 4037,
   value: "OIL,RICE BRAN"
 },
 {
   data: 4038,
   value: "OIL,WHEAT GERM"
 },
 {
   data: 4042,
   value: "OIL,PNUT,SALAD OR COOKING"
 },
 {
   data: 4044,
   value: "OIL,SOYBN,SALAD OR COOKING"
 },
 {
   data: 4047,
   value: "OIL,COCNT"
 },
 {
   data: 4053,
   value: "OIL,OLIVE,SALAD OR COOKING"
 },
 {
   data: 4055,
   value: "OIL,PALM"
 },
 {
   data: 4058,
   value: "OIL,SESAME,SALAD OR COOKING"
 },
 {
   data: 4060,
   value: "OIL,SUNFLOWER,LINOLEIC (LESS THAN 60%)"
 },
 {
   data: 4073,
   value: "MARGARINE,REG,HARD,SOYBN (HYDR)"
 },
 {
   data: 4114,
   value: "SALAD DRSNG,ITALIAN DRSNG,COMM,REG"
 },
 {
   data: 4120,
   value: "SALAD DRSNG,FRENCH DRSNG,COMM,REG"
 },
 {
   data: 4128,
   value: "VEG OIL SPRD,UNSPEC OILS,APPROX 37% FAT,W/ SALT"
 },
 {
   data: 4133,
   value: "SALAD DRSNG,FRENCH,HOME RECIPE"
 },
 {
   data: 4134,
   value: "SALAD DRSNG,HOME RECIPE,CKD"
 },
 {
   data: 4135,
   value: "SALAD DRSNG,HOME RECIPE,VINEGAR&OIL"
 },
 {
   data: 4141,
   value: "SALAD DRSNG,FRENCH DRSNG,COMM,REG,WO/ SALT"
 },
 {
   data: 4142,
   value: "SALAD DRSNG,FRENCH DRSNG,RED FAT,WO/ SALT"
 },
 {
   data: 4143,
   value: "SALAD DRSNG,ITALIAN DRSNG,COMM,REG,WO/ SALT"
 },
 {
   data: 4144,
   value: "SALAD DRSNG,ITALIAN DRSNG,RED FAT,WO/ SALT"
 },
 {
   data: 4145,
   value: "SALAD DRSNG,MAYO,SOYBN OIL,WO/SALT"
 },
 {
   data: 4146,
   value: "SALAD DRSNG,FRENCH,CTTNSD,OIL,HOME RECIPE"
 },
 {
   data: 4367,
   value: "SALAD DRSNG,FRENCH DRSNG,FAT-FREE"
 },
 {
   data: 4501,
   value: "OIL,COCOA BUTTER"
 },
 {
   data: 4502,
   value: "OIL,CTTNSD,SALAD OR COOKING"
 },
 {
   data: 4506,
   value: "OIL,SUNFLOWER,LINOLEIC,(APPROX. 65%)"
 },
 {
   data: 4510,
   value: "OIL,SAFFLOWER,SALAD OR COOKING,LINOLEIC,(OVER 70%)"
 },
 {
   data: 4511,
   value: "OIL,SAFFLOWER,SALAD OR COOKING,HI OLEIC"
 },
 {
   data: 4513,
   value: "VEGETABLE OIL,PALM KERNEL"
 },
 {
   data: 4514,
   value: "OIL,POPPYSEED"
 },
 {
   data: 4515,
   value: "OIL,TOMATOSEED"
 },
 {
   data: 4516,
   value: "OIL,TEASEED"
 },
 {
   data: 4517,
   value: "OIL,GRAPESEED"
 },
 {
   data: 4518,
   value: "OIL,CORN,INDUSTRIAL & RTL,ALLPURP SALAD OR COOKING"
 },
 {
   data: 4520,
   value: "FAT,MUTTON TALLOW"
 },
 {
   data: 4528,
   value: "OIL,WALNUT"
 },
 {
   data: 4529,
   value: "OIL,ALMOND"
 },
 {
   data: 4530,
   value: "OIL,APRICOT KERNEL"
 },
 {
   data: 4531,
   value: "OIL,SOYBN LECITHIN"
 },
 {
   data: 4532,
   value: "OIL,HAZELNUT"
 },
 {
   data: 4534,
   value: "OIL,BABASSU"
 },
 {
   data: 4536,
   value: "OIL,SHEANUT"
 },
 {
   data: 4539,
   value: "SALAD DRSNG,BLUE OR ROQUEFORT CHS DRSNG,COMM,REG"
 },
 {
   data: 4541,
   value: "OIL,CUPU ASSU"
 },
 {
   data: 4542,
   value: "FAT,CHICKEN"
 },
 {
   data: 4543,
   value: "OIL,SOYBN,SALAD OR COOKING,(PARTIALLY HYDROGENATED) & CTTNSD"
 },
 {
   data: 4544,
   value: "SHORTENING,HOUSEHOLD,LARD&VEG OIL"
 },
 {
   data: 4545,
   value: "OIL,SUNFLOWER,LINOLEIC,(PARTIALLY HYDROGENATED)"
 },
 {
   data: 4546,
   value: "SHORTENING BREAD,SOYBN (HYDR)&CTTNSD"
 },
 {
   data: 4548,
   value: "SHORTENING CAKE MIX,SOYBN (HYDR)&CTTNSD (HYDR)"
 },
 {
   data: 4549,
   value: "SHORTENING INDUSTRIAL,LARD&VEG OIL"
 },
 {
   data: 4550,
   value: "SHORTENING FRYING (HVY DUTY),BF TALLOW&CTTNSD"
 },
 {
   data: 4551,
   value: "SHORTENING CONFECTIONERY,COCNT (HYDR)&OR PALM KERNEL (HYDR)"
 },
 {
   data: 4554,
   value: "SHORTENING INDUSTRIAL,SOYBN (HYDR)&CTTNSD"
 },
 {
   data: 4556,
   value: "SHORTENING FRYING (HVY DUTY),PALM (HYDR)"
 },
 {
   data: 4559,
   value: "SHORTENING HOUSEHOLD SOYBN (HYDR)&PALM"
 },
 {
   data: 4560,
   value: "SHORTENING FRYING HVY DUTY,SOYBN HYDR,LINOLEIC (LESS THAN 1%"
 },
 {
   data: 4570,
   value: "SHORTENING,CONFECTIONERY,FRACTIONATED PALM"
 },
 {
   data: 4572,
   value: "OIL,NUTMEG BUTTER"
 },
 {
   data: 4573,
   value: "OIL,UCUHUBA BUTTER"
 },
 {
   data: 4574,
   value: "FAT,DUCK"
 },
 {
   data: 4575,
   value: "FAT,TURKEY"
 },
 {
   data: 4576,
   value: "FAT,GOOSE"
 },
 {
   data: 4581,
   value: "OIL,AVOCADO"
 },
 {
   data: 4582,
   value: "OIL,CANOLA"
 },
 {
   data: 4583,
   value: "OIL,MUSTARD"
 },
 {
   data: 4584,
   value: "OIL,SUNFLOWER,HI OLEIC (70% & OVER)"
 },
 {
   data: 4585,
   value: "MARGARINE-LIKE,MARGARINE-BUTTER BLEND,SOYBN OIL & BUTTER"
 },
 {
   data: 4586,
   value: "SHORTENING,SPL PURPOSE FOR CAKES&FROSTINGS,SOYBN (HYDR)"
 },
 {
   data: 4587,
   value: "SHORTENING,SPL PURPOSE FOR BAKING,SOYBN (HYDR) PALM&CTTNSD"
 },
 {
   data: 4588,
   value: "OIL,OAT"
 },
 {
   data: 4589,
   value: "FISH OIL,COD LIVER"
 },
 {
   data: 4590,
   value: "FISH OIL,HERRING"
 },
 {
   data: 4591,
   value: "FISH OIL,MENHADEN"
 },
 {
   data: 4592,
   value: "FISH OIL,MENHADEN,FULLY HYDR"
 },
 {
   data: 4593,
   value: "FISH OIL,SALMON"
 },
 {
   data: 4594,
   value: "FISH OIL,SARDINE"
 },
 {
   data: 4595,
   value: "SHORTENING,MULTIPURPOSE,SOYBN (HYDR)&PALM (HYDR)"
 },
 {
   data: 4600,
   value: "MARGARINE-LIKE,VEG OIL-BUTTER SPRD,TUB,W/ SALT"
 },
 {
   data: 4601,
   value: "BUTTER,LT,STK,W/SALT"
 },
 {
   data: 4602,
   value: "BUTTER,LT,STK,WO/SALT"
 },
 {
   data: 4606,
   value: "MEAT DRIPPINGS (LARD,BF TALLOW,MUTTON TALLOW)"
 },
 {
   data: 4609,
   value: "ANIMAL FAT,BACON GREASE"
 },
 {
   data: 4610,
   value: "MARGARINE,REG,80% FAT,COMP,STK,W/ SALT"
 },
 {
   data: 4611,
   value: "MARGARINE,REG,80% FAT,COMP,TUB,W/ SALT"
 },
 {
   data: 4612,
   value: "MARGARINE-LIKE,VEG OIL SPRD,60% FAT,STK,W/ SALT"
 },
 {
   data: 4613,
   value: "MARGARINE-LIKE,VEG OIL SPRD,60% FAT,TUB,W/ SALT"
 },
 {
   data: 4614,
   value: "MARGARINE-LIKE,VEG OIL SPRD,60% FAT,STICK/TUB/BOTTLE,W/ SALT"
 },
 {
   data: 4615,
   value: "SHORTENING,VEG,HOUSEHOLD,COMP"
 },
 {
   data: 4617,
   value: "MARGARINE,REG,80% FAT,COMP,STK,WO/ SALT"
 },
 {
   data: 4618,
   value: "MARGARINE,REG,80% FAT,COMP,TUB,WO/ SALT"
 },
 {
   data: 4620,
   value: "VEG OIL SPRD,60% FAT,STICK/TUB/BOTTLE,WO/ SALT"
 },
 {
   data: 4624,
   value: "MARGARINE-LIKE,VEG OIL SPRD,FAT FREE,LIQ,W/ SALT"
 },
 {
   data: 4626,
   value: "MARGARINE-LIKE SPRD W/ YOGURT,70% FAT,STK,W/ SALT"
 },
 {
   data: 4627,
   value: "MARGARINE-LIKE SPRD W/ YOGURT,APPROX 40% FAT,TUB,W/ SALT"
 },
 {
   data: 4628,
   value: "MARGARINE,80% FAT,STK,INCL REG & HYDR CORN & SOYBN OILS"
 },
 {
   data: 4629,
   value: "MARGARINE, VEG OIL SPRD,70% FAT,SOYBN & PART HYDR SOYBN,STK"
 },
 {
   data: 4630,
   value: "MARGARINE SPRD,APPROX 48% FAT,TUB"
 },
 {
   data: 4631,
   value: "MARGARINE-LIKE,VEG OIL SPRD,FAT-FREE,TUB"
 },
 {
   data: 4633,
   value: "MARGARINE-LIKE,VEG OIL SPRD,20% FAT,W/ SALT"
 },
 {
   data: 4634,
   value: "MARGARINE-LIKE,VEG OIL SPRD,20% FAT,WO/ SALT"
 },
 {
   data: 4635,
   value: "SALAD DRSNG,1000 ISLAND DRSNG,FAT-FREE"
 },
 {
   data: 4636,
   value: "SALAD DRSNG,ITALIAN DRSNG,FAT-FREE"
 },
 {
   data: 4638,
   value: "SALAD DRSNG,RANCH DRSNG,FAT-FREE"
 },
 {
   data: 4639,
   value: "SALAD DRSNG,RANCH DRSNG,COMM,REG"
 },
 {
   data: 4640,
   value: "SALAD DRSNG,RANCH DRSNG,RED FAT"
 },
 {
   data: 4641,
   value: "SALAD DRSNG,MAYO,LT"
 },
 {
   data: 4642,
   value: "OIL,INDUSTRIAL,MID-OLEIC,SUNFLOWER"
 },
 {
   data: 4643,
   value: "OIL,INDUSTRIAL,CANOLA W/ ANTIFOAMING AGENT"
 },
 {
   data: 4644,
   value: "OIL,INDUSTRIAL,CANOLA FOR SALADS,WOKS & LT FRYING"
 },
 {
   data: 4645,
   value: "OIL,INDUS,CANOLA (PART HYDROG) OIL FOR DEEP FAT FRYING"
 },
 {
   data: 4646,
   value: "OIL,INDUSTRIAL,COCNT"
 },
 {
   data: 4648,
   value: "OIL,INDUSTRIAL,SOY (PART HYDR),FOR POPCORN & FLAVORING VEG"
 },
 {
   data: 4649,
   value: "SHORTENING,INDUS,SOY (PART HYDROG),POURABLE LIQ FRY"
 },
 {
   data: 4650,
   value: "OIL,INDUSTRIAL,SOY,REFINED,FOR WOKS & LT FRYING"
 },
 {
   data: 4651,
   value: "OIL,INDUSTRIAL,SOY (PART HYDR),FOR NON-DAIRY BUTTER FLAVOR"
 },
 {
   data: 4652,
   value: "OIL,INDUSTRIAL,SOY ( PART HYDROGENATED),ALLPURP"
 },
 {
   data: 4653,
   value: "OIL,INDUSTRIAL,SOY (PART HYDR ) & SOY,POURABLE FRY"
 },
 {
   data: 4654,
   value: "OIL,INDUS,SOY (PART HYDROG) & CTTNSD,TORTILLA SHORTENING"
 },
 {
   data: 4655,
   value: "MARGARINE-LIKE SHORTENING,INDUS,SOY(PART  HYDR),CTTNSD,& SOY"
 },
 {
   data: 4656,
   value: "OIL,INDUSTRIAL,PALM KERNEL,CONFECTION FAT"
 },
 {
   data: 4657,
   value: "OIL,INDUSTRIAL,PALM KERNEL (HYDROGENATED),CONFECTION FAT"
 },
 {
   data: 4658,
   value: "OIL,INDUSTRIAL,PALM KERNEL (HYDROGENATED),CONFECTION FAT"
 },
 {
   data: 4659,
   value: "OIL,INDUSTRIAL,COCNT,CONFECTION FAT,ICE CRM COATINGS"
 },
 {
   data: 4660,
   value: "OIL,INDUSTRIAL,PALM KERNEL (HYDROG) FOR WHIPPED TOPPINGS"
 },
 {
   data: 4661,
   value: "OIL,INDUSTRIAL,COCNT (HYDROGENATED),FOR TOPPINGS & WHITENERS"
 },
 {
   data: 4662,
   value: "OIL,INDUSTRIAL,PALM & PALM KERNEL,FILLING FAT (NON-HYDROG)"
 },
 {
   data: 4663,
   value: "OIL,INDUSTRIAL,PALM KERNEL (HYDROGENATED),FILLING FAT"
 },
 {
   data: 4664,
   value: "OIL,INDUSTRIAL,SOY (PARTHYDR ),PALM, ICINGS & FILLINGS"
 },
 {
   data: 4665,
   value: "MARGARINE,INDUS,NON-DAIRY,CTTNSD,SOY OIL (PART HYDR )"
 },
 {
   data: 4666,
   value: "SHORTENING,INDUSTRIAL,SOY (PARTIALLY HYDR )&CORN FOR FRYING"
 },
 {
   data: 4667,
   value: "SHORTENING,INDUS,SOY (PART HYDR ) FOR BAKING & CONFECTIONS"
 },
 {
   data: 4668,
   value: "MARGARINE,INDUS,SOY & PART HYDR SOY OIL,BAKING,SAUCES,CANDY"
 },
 {
   data: 4669,
   value: "USDA CMDTY FD,OIL,VEG,SOYBN,REFINED"
 },
 {
   data: 4670,
   value: "USDA CMDTY FD,OIL,VEG,LO SATURATED FAT"
 },
 {
   data: 4673,
   value: "MARGARINE-LIKE SPRD,SMART BALANCE REG BUTTERY SPRD"
 },
 {
   data: 4674,
   value: "MARGARINE-LIKE SPRD,SMART BALANCE LT BUTTERY SPRD"
 },
 {
   data: 4675,
   value: "MARGARINE-LIKE SPRD,SMART BEAT SUPER LT WO/ SATURATED FAT"
 },
 {
   data: 4676,
   value: "MARGARINE-LIKE SPRD,SMART BEAT SMART SQUEEZE"
 },
 {
   data: 4677,
   value: "MARGARINE-LIKE SPRD,SMART BALANCE OMEGA PLUS SPRD"
 },
 {
   data: 4678,
   value: "OIL,VEG,NATREON CANOLA,HI STABILITY,NON TRANS,HI OLEIC (70%)"
 },
 {
   data: 4679,
   value: "OIL,PAM COOKING SPRAY,ORIGINAL"
 },
 {
   data: 4683,
   value: "MARGARINE,MARGARINE-LIKE VEG OIL SPRD,67-70% FAT,TUB"
 },
 {
   data: 4684,
   value: "MARGARINE,80% FAT,TUB,CANOLA HARVEST SOFT SPRD"
 },
 {
   data: 4685,
   value: "OIL,COOKING & SALAD,ENOVA,80% DIGLYCERIDES"
 },
 {
   data: 4686,
   value: "SALAD DRSNG,HONEY MUSTARD DRSNG,RED CAL"
 },
 {
   data: 4687,
   value: "MARGARINE-LIKE SPRD,BENECOL LT SPRD"
 },
 {
   data: 4688,
   value: "SALAD DRSNG,SPRAY-STYLE DRSNG,ASSORTED FLAVORS"
 },
 {
   data: 4689,
   value: "SALAD DRSNG,MAYO,LT,SMART BALANCE,OMEGA PLUS LT"
 },
 {
   data: 4690,
   value: "VEG OIL SPRD,37% FAT,UNSPEC OILS,W/ SALT,W/ ADDED VITAMIN D"
 },
 {
   data: 4691,
   value: "MARGARINE,REG,80% FAT,COMP,STK,W/ SALT,W/ ADDED VITAMIN D"
 },
 {
   data: 4692,
   value: "MARGARINE,REG,80% FAT,COMP,TUB,W/ SALT,W/ ADDED VITAMIN D"
 },
 {
   data: 4693,
   value: "VEG OIL SPRD,60% FAT,STK,W/ SALT,W/ ADDED VITAMIN D"
 },
 {
   data: 4694,
   value: "VEG OIL SPRD,60% FAT,TUB,W/ SALT,W/ ADDED VITAMIN D"
 },
 {
   data: 4695,
   value: "VEG-OIL SPRD,STICK/TUB/BOTTLE,60% FAT,W/ ADDED VITAMIN D"
 },
 {
   data: 4696,
   value: "MARGARINE,REG,80% FAT,COMP,STK,WO/ SALT,W/ ADDED VITAMIN D"
 },
 {
   data: 4697,
   value: "VEG OIL SPRD,60% FAT,STICK/TUB/BOTTLE,WO/ SALT,W/VIT D"
 },
 {
   data: 4698,
   value: "OIL,INDUSTRIAL,CANOLA,HI OLEIC"
 },
 {
   data: 4699,
   value: "OIL,INDUSTRIAL,SOY,LO LINOLENIC"
 },
 {
   data: 4700,
   value: "OIL,INDUSTRIAL,SOY,ULTRA LO LINOLENIC"
 },
 {
   data: 4701,
   value: "OIL,INDUSTRIAL,SOY,FULLY HYDR"
 },
 {
   data: 4702,
   value: "OIL,INDUSTRIAL,CTTNSD,FULLY HYDR"
 },
 {
   data: 4703,
   value: "SALAD DRSNG,HONEY MUSTARD,REG"
 },
 {
   data: 4704,
   value: "SALAD DRSNG,POPPYSEED,CREAMY"
 },
 {
   data: 4705,
   value: "SALAD DRSNG,CAESAR,FAT-FREE"
 },
 {
   data: 4706,
   value: "DRESSING,HONEY MUSTARD,FAT-FREE"
 },
 {
   data: 4707,
   value: "OIL,FLAXSEED,CONTAINS ADDED SLICED FLAXSEED"
 },
 {
   data: 5000,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,BREAST MEAT ONLY"
 },
 {
   data: 5001,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,RAW"
 },
 {
   data: 5002,
   value: "CHICKEN,BROILER OR FRYER,MEAT&SKN&GIBLETS&NECK,FRIED,BATTER"
 },
 {
   data: 5003,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,FRIED,FLR"
 },
 {
   data: 5004,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,RSTD"
 },
 {
   data: 5005,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,STWD"
 },
 {
   data: 5006,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT & SKN,RAW"
 },
 {
   data: 5007,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5008,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5009,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5010,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5011,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,RAW"
 },
 {
   data: 5012,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5013,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,RSTD"
 },
 {
   data: 5014,
   value: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,STWD"
 },
 {
   data: 5015,
   value: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,RAW"
 },
 {
   data: 5016,
   value: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,FRIED,BATTER"
 },
 {
   data: 5017,
   value: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,FRIED,FLR"
 },
 {
   data: 5018,
   value: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,RSTD"
 },
 {
   data: 5019,
   value: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,STWD"
 },
 {
   data: 5020,
   value: "CHICKEN,BROILERS OR FRYERS,GIBLETS,RAW"
 },
 {
   data: 5021,
   value: "CHICKEN,BROILERS OR FRYERS,GIBLETS,CKD,FRIED"
 },
 {
   data: 5022,
   value: "CHICKEN,BROILERS OR FRYERS,GIBLETS,CKD,SIMMRD"
 },
 {
   data: 5023,
   value: "CHICKEN,GIZZARD,ALL CLASSES,RAW"
 },
 {
   data: 5024,
   value: "CHICKEN,GIZZARD,ALL CLASSES,CKD,SIMMRD"
 },
 {
   data: 5025,
   value: "CHICKEN,HEART,ALL CLASSES,RAW"
 },
 {
   data: 5026,
   value: "CHICKEN,HEART,ALL CLASSES,CKD,SIMMRD"
 },
 {
   data: 5027,
   value: "CHICKEN,LIVER,ALL CLASSES,RAW"
 },
 {
   data: 5028,
   value: "CHICKEN,LIVER,ALL CLASSES,CKD,SIMMRD"
 },
 {
   data: 5029,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT & SKN,RAW"
 },
 {
   data: 5030,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5031,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5032,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5033,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5034,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT & SKN,RAW"
 },
 {
   data: 5035,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5036,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5037,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5038,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5039,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5040,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5041,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5042,
   value: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5043,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5044,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5045,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5046,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5047,
   value: "CHICKEN,BROILERS OR FRYERS,FAT,RAW"
 },
 {
   data: 5048,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,RAW"
 },
 {
   data: 5049,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5050,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5051,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5052,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5053,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,RAW"
 },
 {
   data: 5054,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5055,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5056,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5057,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,RAW"
 },
 {
   data: 5058,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5059,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5060,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5061,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5062,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,RAW"
 },
 {
   data: 5063,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5064,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5065,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5066,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,RAW"
 },
 {
   data: 5067,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5068,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5069,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5070,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5071,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MEAT ONLY,RAW"
 },
 {
   data: 5072,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5073,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MEAT ONLY,CKD,RST"
 },
 {
   data: 5074,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5075,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,RAW"
 },
 {
   data: 5076,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5077,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5078,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5079,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5080,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,RAW"
 },
 {
   data: 5081,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5082,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5083,
   value: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5084,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,RAW"
 },
 {
   data: 5085,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5086,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5087,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,CKD SIMMRD"
 },
 {
   data: 5088,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT ONLY,RAW"
 },
 {
   data: 5089,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5090,
   value: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT ONLY,CKD,SIMMRD"
 },
 {
   data: 5091,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,RAW"
 },
 {
   data: 5092,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5093,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5094,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5095,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5096,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,THIGH,MEAT ONLY,RAW"
 },
 {
   data: 5097,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5098,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5099,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5100,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,RAW"
 },
 {
   data: 5101,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,FRIED,BATTER"
 },
 {
   data: 5102,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,FRIED,FLR"
 },
 {
   data: 5103,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5104,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5105,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,RAW"
 },
 {
   data: 5106,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,FRIED"
 },
 {
   data: 5107,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5108,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5109,
   value: "CHICKEN,ROASTING,MEAT&SKN&GIBLETS&NECK,RAW"
 },
 {
   data: 5110,
   value: "CHICKEN,ROASTING,MEAT&SKN&GIBLETS&NECK,CKD,RSTD"
 },
 {
   data: 5112,
   value: "CHICKEN,ROASTING,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5113,
   value: "CHICKEN,ROASTING,MEAT ONLY,RAW"
 },
 {
   data: 5114,
   value: "CHICKEN,ROASTING,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5115,
   value: "CHICKEN,ROASTING,GIBLETS,RAW"
 },
 {
   data: 5116,
   value: "CHICKEN,ROASTING,GIBLETS,CKD,SIMMRD"
 },
 {
   data: 5117,
   value: "CHICKEN,ROASTING,LT MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5118,
   value: "CHICKEN,ROASTING,LT MEAT,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5119,
   value: "CHICKEN,ROASTING,DK MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5120,
   value: "CHICKEN,ROASTING,DK MEAT,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5121,
   value: "CHICKEN,STEWING,MEAT&SKN,&GIBLETS&NECK,RAW"
 },
 {
   data: 5122,
   value: "CHICKEN,STEWING,MEAT & SKN,& GIBLETS & NECK,CKD,STWD"
 },
 {
   data: 5123,
   value: "CHICKEN,STEWING,MEAT&SKN,RAW"
 },
 {
   data: 5124,
   value: "CHICKEN,STEWING,MEAT&SKN,CKD,STWD"
 },
 {
   data: 5125,
   value: "CHICKEN,STEWING,MEAT ONLY,RAW"
 },
 {
   data: 5126,
   value: "CHICKEN,STEWING,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5127,
   value: "CHICKEN,STEWING,GIBLETS,RAW"
 },
 {
   data: 5128,
   value: "CHICKEN,STEWING,GIBLETS,CKD,SIMMRD"
 },
 {
   data: 5129,
   value: "CHICKEN,STEWING,LT MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5130,
   value: "CHICKEN,STEWING,LT MEAT,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5131,
   value: "CHICKEN,STEWING,DK MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5132,
   value: "CHICKEN,STEWING,DK MEAT,MEAT ONLY,CKD,STWD"
 },
 {
   data: 5133,
   value: "CHICKEN,CAPONS,MEAT&SKN&GIBLETS&NECK,RAW"
 },
 {
   data: 5134,
   value: "CHICKEN,CAPONS,MEAT&SKN&GIBLETS&NECK,CKD,RSTD"
 },
 {
   data: 5135,
   value: "CHICKEN,CAPONS,MEAT&SKN,RAW"
 },
 {
   data: 5136,
   value: "CHICKEN,CAPONS,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5137,
   value: "CHICKEN,CAPONS,GIBLETS,RAW"
 },
 {
   data: 5138,
   value: "CHICKEN,CAPONS,GIBLETS,CKD,SIMMRD"
 },
 {
   data: 5139,
   value: "DUCK,DOMESTICATED,MEAT&SKN,RAW"
 },
 {
   data: 5140,
   value: "DUCK,DOMESTICATED,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5141,
   value: "DUCK,DOMESTICATED,MEAT ONLY,RAW"
 },
 {
   data: 5142,
   value: "DUCK,DOMESTICATED,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5143,
   value: "DUCK,DOMESTICATED,LIVER,RAW"
 },
 {
   data: 5144,
   value: "DUCK,WILD,MEAT&SKN,RAW"
 },
 {
   data: 5145,
   value: "DUCK,WILD,BREAST,MEAT ONLY,RAW"
 },
 {
   data: 5146,
   value: "GOOSE,DOMESTICATED,MEAT&SKN,RAW"
 },
 {
   data: 5147,
   value: "GOOSE,DOMESTICATED,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5148,
   value: "GOOSE,DOMESTICATED,MEAT ONLY,RAW"
 },
 {
   data: 5149,
   value: "GOOSE,DOMESTICATED,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5150,
   value: "GOOSE,LIVER,RAW"
 },
 {
   data: 5151,
   value: "GUINEA HEN,MEAT&SKN,RAW"
 },
 {
   data: 5152,
   value: "GUINEA HEN,MEAT ONLY,RAW"
 },
 {
   data: 5153,
   value: "PHEASANT,RAW,MEAT&SKN"
 },
 {
   data: 5154,
   value: "PHEASANT,RAW,MEAT ONLY"
 },
 {
   data: 5155,
   value: "PHEASANT,BREAST,MEAT ONLY,RAW"
 },
 {
   data: 5156,
   value: "PHEASANT,LEG,MEAT ONLY,RAW"
 },
 {
   data: 5157,
   value: "QUAIL,MEAT AND SKIN,RAW"
 },
 {
   data: 5158,
   value: "QUAIL,MEAT ONLY,RAW"
 },
 {
   data: 5159,
   value: "QUAIL,BREAST,MEAT ONLY,RAW"
 },
 {
   data: 5160,
   value: "SQUAB,(PIGEON),MEAT&SKN,RAW"
 },
 {
   data: 5161,
   value: "SQUAB,(PIGEON),MEAT ONLY,RAW"
 },
 {
   data: 5162,
   value: "SQUAB,(PIGEON),LT MEAT WO/SKN,RAW"
 },
 {
   data: 5163,
   value: "TURKEY,ALL CLASSES,MEAT&SKN&GIBLETS&NECK,RAW"
 },
 {
   data: 5164,
   value: "TURKEY,ALL CLASSES,MEAT&SKN&GIBLETS&NECK,CKD,RSTD"
 },
 {
   data: 5165,
   value: "TURKEY,WHL,MEAT & SKN,RAW"
 },
 {
   data: 5166,
   value: "TURKEY,WHL,MEAT & SKN,CKD,RSTD"
 },
 {
   data: 5167,
   value: "TURKEY,WHL,MEAT ONLY,RAW"
 },
 {
   data: 5168,
   value: "TURKEY,WHL,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5169,
   value: "TURKEY,SKN FROM WHL,(LIGHT & DARK),RAW"
 },
 {
   data: 5170,
   value: "TURKEY,SKN FROM WHL (LIGHT & DARK),RSTD"
 },
 {
   data: 5171,
   value: "TURKEY,WHL,GIBLETS,RAW"
 },
 {
   data: 5172,
   value: "TURKEY,WHL,GIBLETS,CKD,SIMMRD"
 },
 {
   data: 5173,
   value: "TURKEY,GIZZARD,ALL CLASSES,RAW"
 },
 {
   data: 5174,
   value: "TURKEY,GIZZARD,ALL CLASSES,CKD,SIMMRD"
 },
 {
   data: 5175,
   value: "TURKEY,HEART,ALL CLASSES,RAW"
 },
 {
   data: 5176,
   value: "TURKEY,HEART,ALL CLASSES,CKD,SIMMRD"
 },
 {
   data: 5177,
   value: "TURKEY,LIVER,ALL CLASSES,RAW"
 },
 {
   data: 5178,
   value: "TURKEY,LIVER,ALL CLASSES,CKD,SIMMRD"
 },
 {
   data: 5179,
   value: "TURKEY FROM WHL,NECK,MEAT ONLY,RAW"
 },
 {
   data: 5180,
   value: "TURKEY FROM WHL,NECK,MEAT ONLY,CKD,SIMMRD"
 },
 {
   data: 5181,
   value: "TURKEY FROM WHL,LT MEAT,MEAT & SKN,RAW"
 },
 {
   data: 5182,
   value: "TURKEY FROM WHL,LT MEAT,MEAT & SKN,CKD,RSTD"
 },
 {
   data: 5183,
   value: "TURKEY,DK MEAT,MEAT & SKN,RAW"
 },
 {
   data: 5184,
   value: "TURKEY,DK MEAT FROM WHL,MEAT & SKN,CKD,RSTD"
 },
 {
   data: 5185,
   value: "TURKEY FROM WHL,LT MEAT,RAW"
 },
 {
   data: 5186,
   value: "TURKEY,ALL CLASSES,LT MEAT,CKD,RSTD"
 },
 {
   data: 5187,
   value: "Turkey from whole, dark meat, meat only, raw"
 },
 {
   data: 5188,
   value: "TURKEY,FROM WHL,DK MEAT,CKD,RSTD"
 },
 {
   data: 5189,
   value: "TURKEY,ALL CLASSES,BACK,MEAT&SKN,RAW"
 },
 {
   data: 5190,
   value: "TURKEY,ALL CLASSES,BACK,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5191,
   value: "TURKEY,ALL CLASSES,BREAST,MEAT&SKN,RAW"
 },
 {
   data: 5192,
   value: "TURKEY,ALL CLASSES,BREAST,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5193,
   value: "TURKEY,ALL CLASSES,LEG,MEAT&SKN,RAW"
 },
 {
   data: 5194,
   value: "TURKEY,ALL CLASSES,LEG,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5195,
   value: "TURKEY,ALL CLASSES,WING,MEAT&SKN,RAW"
 },
 {
   data: 5196,
   value: "TURKEY,ALL CLASSES,WING,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5200,
   value: "TURKEY,FRYER-ROASTERS,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5220,
   value: "TURKEY,FRYER-ROASTERS,BREAST,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5228,
   value: "TURKEY,FRYER-ROASTERS,WING,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5229,
   value: "TURKEY,YOUNG HEN,MEAT&SKN&GIBLETS&NECK,RAW"
 },
 {
   data: 5236,
   value: "TURKEY,YOUNG HEN,SKN ONLY,CKD,RSTD"
 },
 {
   data: 5277,
   value: "CHICKEN,CND,MEAT ONLY,W/BROTH"
 },
 {
   data: 5282,
   value: "PATE DE FOIE GRAS,CND (GOOSE LIVER PATE),SMOKED"
 },
 {
   data: 5284,
   value: "TURKEY,CND,MEAT ONLY,W/BROTH"
 },
 {
   data: 5285,
   value: "TURKEY,DICED,LT&DK MEAT,SEASONED"
 },
 {
   data: 5286,
   value: "TURKEY AND GRAVY,FROZEN"
 },
 {
   data: 5292,
   value: "TURKEY PATTIES,BREADED,BATTERED,FRIED"
 },
 {
   data: 5293,
   value: "TURKEY BREAST,PRE-BASTED,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5294,
   value: "TURKEY THIGH,PRE-BASTED,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5295,
   value: "TURKEY RST,BNLESS,FRZ,SEASONED,LT&DK MEAT,RAW"
 },
 {
   data: 5296,
   value: "TURKEY RST,BNLESS,FRZ,SEASONED,LT&DK MEAT,RSTD"
 },
 {
   data: 5300,
   value: "TURKEY STKS,BREADED,BATTERED,FRIED"
 },
 {
   data: 5301,
   value: "POULTRY,MECHANICALLY DEBONED,FROM BACKS&NECKS W/SKN,RAW"
 },
 {
   data: 5302,
   value: "POULTRY,MECHANICALLY DEBONED,FROM BACKS&NECKS WO/SKN,RAW"
 },
 {
   data: 5303,
   value: "POULTRY,MECHANICALLY DEBONED,FROM MATURE HENS,RAW"
 },
 {
   data: 5304,
   value: "TURKEY,MECHANICALLY DEBONED,FROM TURKEY FRAMES,RAW"
 },
 {
   data: 5305,
   value: "Poultry food products, ground turkey, raw"
 },
 {
   data: 5306,
   value: "Poultry food products, ground turkey, cooked"
 },
 {
   data: 5307,
   value: "CHICKEN,CORNISH GAME HENS,MEAT&SKN,RAW"
 },
 {
   data: 5308,
   value: "CHICKEN,CORNISH GAME HENS,MEAT&SKN,CKD,RSTD"
 },
 {
   data: 5309,
   value: "CHICKEN,CORNISH GAME HENS,MEAT ONLY,RAW"
 },
 {
   data: 5310,
   value: "CHICKEN,CORNISH GAME HENS,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5311,
   value: "CHICKEN,CANNED,NO BROTH"
 },
 {
   data: 5312,
   value: "CHICKEN,WING,FRZ,GLAZED,BARBECUE FLAV"
 },
 {
   data: 5313,
   value: "CHICKEN,WING,FRZ,GLAZED,BARBECUE FLAV,HTD (MICROWAVE)"
 },
 {
   data: 5314,
   value: "CHKN,BROLRS OR FRYERS,BRST,SKNLSS,BNLESS,MEAT OLY,ENHCED,RAW"
 },
 {
   data: 5315,
   value: "DUCK,YNG DUCKLING,DOM,WH PEKIN,BRST,MEAT&SKN,BNLESS,CKD,RSTD"
 },
 {
   data: 5316,
   value: "DUCK,YNG DUCKL,DOM,WH PEKIN,BRST,MEAT,BNLESS,CKD WO/SKN,BRLD"
 },
 {
   data: 5317,
   value: "DUCK,YNG DUCKLING,DOM,WH PEKIN,LEG,MEAT&SKN,BONE IN,CKD,RSTD"
 },
 {
   data: 5318,
   value: "DUCK,YNG DUCKL,DOM,WH PEKIN,LEG,MEAT,BONE IN,CKD WO/SKN,BRSD"
 },
 {
   data: 5319,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,DRUMSTK,MEAT ONLY"
 },
 {
   data: 5320,
   value: "CHICKEN,WING,FRZ,GLAZED,BBQ FLAV,HTD (CONVENTIONAL OVEN)"
 },
 {
   data: 5321,
   value: "CHICKEN NUGGETS,FRZ,CKD"
 },
 {
   data: 5322,
   value: "CHICKEN NUGGETS,FRZ,UNCKD"
 },
 {
   data: 5323,
   value: "CHICKEN PATTY,FRZ,UNCKD"
 },
 {
   data: 5324,
   value: "CHICKEN PATTY,FRZ,CKD"
 },
 {
   data: 5325,
   value: "CHICKEN BREAST TENDERS,CKD,CONVENTIONAL OVEN"
 },
 {
   data: 5326,
   value: "CHICKEN BREAST TENDERS,CKD,MICROWAVED"
 },
 {
   data: 5327,
   value: "CHICKEN BREAST TENDERS,BREADED,UNCKD"
 },
 {
   data: 5332,
   value: "CHICKEN,GROUND,RAW"
 },
 {
   data: 5333,
   value: "CHICKEN,GROUND,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 5334,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,THIGH,MEAT ONLY"
 },
 {
   data: 5335,
   value: "CHICK,FEET,BOILED"
 },
 {
   data: 5336,
   value: "USDA CMDTY CHICK,CND,MEAT ONLY,DRND"
 },
 {
   data: 5337,
   value: "USDA CMDTY,CHICK,CND,MEAT ONLY,W/ H2O"
 },
 {
   data: 5338,
   value: "USDA CMDTY,CHICK,CND,MEAT ONLY,W/ BROTH"
 },
 {
   data: 5339,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,WING,MEAT ONLY"
 },
 {
   data: 5341,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,ROTISSERIE,ORI"
 },
 {
   data: 5342,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,ROTISSERIE,O"
 },
 {
   data: 5343,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT ONLY,CKD,ROTISSERIE,"
 },
 {
   data: 5344,
   value: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,ROTISSERIE,ORIGINAL"
 },
 {
   data: 5345,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,ROTISSERIE,OR"
 },
 {
   data: 5346,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,ROTISSERIE,ORI"
 },
 {
   data: 5347,
   value: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT & SKN,CKD,ROTISSERIE,OR"
 },
 {
   data: 5348,
   value: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT & SKN,CKD,ROTISSERIE,"
 },
 {
   data: 5349,
   value: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT & SKN,CKD,ROTISSERIE"
 },
 {
   data: 5351,
   value: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT & SKN,CKD,ROTISSERIE,O"
 },
 {
   data: 5352,
   value: "CHICKEN,BROILERS OR FRYERS,WING,MEAT & SKN,CKD,ROTISSERIE,OR"
 },
 {
   data: 5353,
   value: "USDA CMDTY,CHICK FAJITA STRIPS,FRZ"
 },
 {
   data: 5354,
   value: "USDA CMDTY,TURKEY TACO MEAT,FRZ,CKD"
 },
 {
   data: 5356,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,SKIN"
 },
 {
   data: 5357,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,BACK MEAT & SKN"
 },
 {
   data: 5358,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,BREAST MEAT & SKN"
 },
 {
   data: 5359,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,DRUMSTK MEAT & SKN"
 },
 {
   data: 5361,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,THIGH MEAT & SKN"
 },
 {
   data: 5362,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,WING MEAT & SKN"
 },
 {
   data: 5600,
   value: "USDA COMMODITY,TURKEY HAM,DK MEAT,SMOKED,FRZ"
 },
 {
   data: 5621,
   value: "EMU,GROUND,RAW"
 },
 {
   data: 5622,
   value: "EMU,GROUND,CKD,PAN-BROILED"
 },
 {
   data: 5623,
   value: "EMU,FAN FILLET,RAW"
 },
 {
   data: 5624,
   value: "EMU,FAN FILLET,CKD,BRLD"
 },
 {
   data: 5625,
   value: "EMU,FLAT FILLET,RAW"
 },
 {
   data: 5626,
   value: "EMU,FULL RUMP,RAW"
 },
 {
   data: 5627,
   value: "EMU,FULL RUMP,CKD,BRLD"
 },
 {
   data: 5628,
   value: "EMU,INSIDE DRUM,RAW"
 },
 {
   data: 5629,
   value: "EMU,INSIDE DRUMS,CKD,BRLD"
 },
 {
   data: 5630,
   value: "EMU,OUTSIDE DRUM,RAW"
 },
 {
   data: 5631,
   value: "EMU,OYSTER,RAW"
 },
 {
   data: 5632,
   value: "EMU,TOP LOIN,CKD,BRLD"
 },
 {
   data: 5641,
   value: "OSTRICH,GROUND,RAW"
 },
 {
   data: 5642,
   value: "OSTRICH,GROUND,CKD,PAN-BROILED"
 },
 {
   data: 5643,
   value: "OSTRICH,FAN,RAW"
 },
 {
   data: 5644,
   value: "OSTRICH,INSIDE LEG,RAW"
 },
 {
   data: 5645,
   value: "OSTRICH,INSIDE LEG,CKD"
 },
 {
   data: 5646,
   value: "OSTRICH,INSIDE STRIP,RAW"
 },
 {
   data: 5647,
   value: "OSTRICH,INSIDE STRIP,CKD"
 },
 {
   data: 5648,
   value: "OSTRICH,OUTSIDE LEG,RAW"
 },
 {
   data: 5649,
   value: "OSTRICH,OUTSIDE STRIP,RAW"
 },
 {
   data: 5650,
   value: "OSTRICH,OUTSIDE STRIP,CKD"
 },
 {
   data: 5651,
   value: "OSTRICH,OYSTER,RAW"
 },
 {
   data: 5652,
   value: "OSTRICH,OYSTER,CKD"
 },
 {
   data: 5653,
   value: "OSTRICH,RND,RAW"
 },
 {
   data: 5654,
   value: "OSTRICH,TENDERLOIN,RAW"
 },
 {
   data: 5655,
   value: "OSTRICH,TIP RAW"
 },
 {
   data: 5656,
   value: "OSTRICH,TIP CKD"
 },
 {
   data: 5657,
   value: "OSTRICH,TOP LOIN,RAW"
 },
 {
   data: 5658,
   value: "OSTRICH,TOP LOIN,CKD"
 },
 {
   data: 5661,
   value: "CHICKEN,LIVER,ALL CLASSES,CKD,PAN-FRIED"
 },
 {
   data: 5662,
   value: "GROUND TURKEY,FAT FREE,RAW"
 },
 {
   data: 5663,
   value: "GROUND TURKEY,FAT FREE,PAN-BROILED CRUMBLES"
 },
 {
   data: 5664,
   value: "GROUND TURKEY,FAT FREE,PATTIES,BRLD"
 },
 {
   data: 5665,
   value: "GROUND TURKEY,93% LN,7% FAT,RAW"
 },
 {
   data: 5666,
   value: "GROUND TURKEY,93% LN,7% FAT,PAN-BROILED CRUMBLES"
 },
 {
   data: 5667,
   value: "GROUND TURKEY,93% LN,7% FAT,PATTIES,BRLD"
 },
 {
   data: 5668,
   value: "GROUND TURKEY,85% LN,15% FAT,RAW"
 },
 {
   data: 5669,
   value: "GROUND TURKEY,85% LN,15% FAT,PAN-BROILED CRUMBLES"
 },
 {
   data: 5670,
   value: "GROUND TURKEY,85% LN,15% FAT,PATTIES,BRLD"
 },
 {
   data: 5671,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MEAT OLY,CKD,BRSD"
 },
 {
   data: 5672,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,THIGH,MEAT ONLY,CKD,BRSD"
 },
 {
   data: 5673,
   value: "CHICKEN,SKN (DRUMSTICKS & THIGHS),CKD,BRSD"
 },
 {
   data: 5674,
   value: "CHICKEN,SKN (DRUMSTICKS & THIGHS),RAW"
 },
 {
   data: 5675,
   value: "CHICKEN,SKN (DRUMSTICKS & THIGHS),CKD,RSTD"
 },
 {
   data: 5676,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MT & SKN,CKD,BRSD"
 },
 {
   data: 5677,
   value: "CHICKEN,BROILERS OR FRYERS,DK MEAT,THIGH,MEAT & SKN,CKD,BRSD"
 },
 {
   data: 5693,
   value: "CHICKEN,BROILER,ROTISSERIE,BBQ,BACK MEAT ONLY"
 },
 {
   data: 5694,
   value: "TURKEY,DK MEAT FROM WHL,ENHANCED,MEAT ONLY,RAW"
 },
 {
   data: 5695,
   value: "TURKEY,ENHANCED,DK MEAT,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5696,
   value: "TURKEY FROM WHL,ENHANCED,LT MEAT,MEAT ONLY,RAW"
 },
 {
   data: 5697,
   value: "TURKEY FROM WHL,ENHANCED,LT MEAT,MEAT ONLY,CKD,RSTD"
 },
 {
   data: 5698,
   value: "TURKEY,ENHANCED,SKN FROM WHL (LIGHT & DARK),RAW"
 },
 {
   data: 5699,
   value: "TURKEY,ENHANCED,SKN FROM WHL,(LIGHT & DARK),RSTD"
 },
 {
   data: 5700,
   value: "TURKEY,ENHANCED,DK MEAT FROM WHL,MEAT & SKN,RAW"
 },
 {
   data: 5701,
   value: "TURKEY,ENHANCED,DK MEAT FROM WHL,MEAT & SKN,CKD,RSTD"
 },
 {
   data: 5702,
   value: "TURKEY FROM WHL,ENHANCED,LT MEAT,MEAT & SKN,RAW"
 },
 {
   data: 5703,
   value: "TURKEY FROM WHL,ENHANCED,LT MEAT,MEAT & SKN,CKD,RSTD"
 },
 {
   data: 5704,
   value: "TURKEY,WHL,ENHANCED,MEAT ONLY,RAW"
 },
 {
   data: 5705,
   value: "TURKEY,WHL,ENHANCED,MEAT ONLY,RSTD"
 },
 {
   data: 5706,
   value: "TURKEY,WHL,ENHANCED,MEAT & SKN,RAW"
 },
 {
   data: 5707,
   value: "TURKEY,WHL,ENHANCED,MEAT & SKN,RSTD"
 },
 {
   data: 6001,
   value: "SOUP,CRM OF ASPARAGUS,CND,COND"
 },
 {
   data: 6002,
   value: "SOUP,BLACK BEAN,CND,COND"
 },
 {
   data: 6003,
   value: "CAMPBELL'S RED & WHITE,BEEFY MUSHROOM SOUP,COND"
 },
 {
   data: 6004,
   value: "SOUP,BEAN W/ PORK,CND,COND"
 },
 {
   data: 6006,
   value: "SOUP,BEAN W/ FRANKFURTERS,CND,COND"
 },
 {
   data: 6007,
   value: "SOUP,BEAN W/ HAM,CND,CHUNKY,RTS"
 },
 {
   data: 6008,
   value: "SOUP,BF BROTH OR BOUILLON CND,RTS"
 },
 {
   data: 6009,
   value: "SOUP,BF NOODLE,CND,COND"
 },
 {
   data: 6010,
   value: "SOUP,CRM OF CELERY,CND,COND"
 },
 {
   data: 6011,
   value: "SOUP,CHS,CND,COND"
 },
 {
   data: 6012,
   value: "SOUP,CHICK W/ DUMPLINGS,CND,COND"
 },
 {
   data: 6013,
   value: "SOUP,CHICK BROTH,CND,COND"
 },
 {
   data: 6014,
   value: "CAMPBELL'S RED & WHITE,BROCCOLI CHS SOUP,COND"
 },
 {
   data: 6015,
   value: "SOUP,CHICK,CND,CHUNKY,RTS"
 },
 {
   data: 6016,
   value: "SOUP,CRM OF CHICK,CND,COND"
 },
 {
   data: 6017,
   value: "SOUP,CHICK GUMBO,CND,COND"
 },
 {
   data: 6018,
   value: "SOUP,CHUNKY CHICK NOODLE,CND,RTS"
 },
 {
   data: 6019,
   value: "SOUP,CHICK NOODLE,CND,COND"
 },
 {
   data: 6022,
   value: "SOUP,CHICK RICE,CND,CHUNKY,RTS"
 },
 {
   data: 6023,
   value: "SOUP,CHICK W/ RICE,CND,COND"
 },
 {
   data: 6024,
   value: "SOUP,CHICK VEG,CHUNKY,CND,RTS"
 },
 {
   data: 6025,
   value: "SOUP,CHICK VEG,CND,COND"
 },
 {
   data: 6026,
   value: "SOUP,CHILI BF,CND,COND"
 },
 {
   data: 6027,
   value: "SOUP,CLAM CHOWDER,MANHATTAN STYLE,CND,CHUNKY,RTS"
 },
 {
   data: 6028,
   value: "SOUP,CLAM CHOWDER,MANHATTAN,CND,COND"
 },
 {
   data: 6029,
   value: "HEALTHY REQUEST,CHICK W/ RICE,COND"
 },
 {
   data: 6030,
   value: "SOUP,CLAM CHOWDER,NEW ENGLAND,CND,COND"
 },
 {
   data: 6032,
   value: "SOUP,BF BROTH BOUILLON & CONSOMME,CND,COND"
 },
 {
   data: 6034,
   value: "SOUP,CRAB,CND,RTS"
 },
 {
   data: 6035,
   value: "SOUP,ESCAROLE,CND,RTS"
 },
 {
   data: 6036,
   value: "SOUP,GAZPACHO,CND,RTS"
 },
 {
   data: 6037,
   value: "SOUP,LENTIL W/HAM,CND,RTS"
 },
 {
   data: 6038,
   value: "CAMPBELL'S RED&WHITE,CHEDDAR CHS SOUP,COND"
 },
 {
   data: 6039,
   value: "SOUP,MINESTRONE,CND,CHUNKY,RTS"
 },
 {
   data: 6040,
   value: "SOUP,MINESTRONE,CND,COND"
 },
 {
   data: 6041,
   value: "CAMPBELL'S RED&WHITE,CHICK & DUMPLINGS SOUP,COND"
 },
 {
   data: 6042,
   value: "SOUP,MUSHROOM BARLEY,CND,COND"
 },
 {
   data: 6043,
   value: "SOUP,CRM OF MUSHROOM,CND,COND"
 },
 {
   data: 6044,
   value: "SOUP,MUSHROOM W/ BF STOCK,CND,COND"
 },
 {
   data: 6045,
   value: "SOUP,ONION,CND,COND"
 },
 {
   data: 6046,
   value: "SOUP,CRM OF ONION,CND,COND"
 },
 {
   data: 6047,
   value: "CAMPBELL'S RED & WHITE,CHICK & STARS SOUP,COND"
 },
 {
   data: 6048,
   value: "SOUP,OYSTER STEW,CND,COND"
 },
 {
   data: 6049,
   value: "SOUP,PEA,GRN,CND,COND"
 },
 {
   data: 6050,
   value: "SOUP,PEA,SPLIT W/HAM,CND,CHUNKY,RTS"
 },
 {
   data: 6051,
   value: "SOUP,PEA,SPLIT W/ HAM,CND,COND"
 },
 {
   data: 6052,
   value: "SOUP,PEPPERPOT,CND,COND"
 },
 {
   data: 6053,
   value: "SOUP,CRM OF POTATO,CND,COND"
 },
 {
   data: 6054,
   value: "CAMPBELL'S RED & WHITE,CHICK ALPHABET SOUP,COND"
 },
 {
   data: 6055,
   value: "SOUP,SCOTCH BROTH,CND,COND"
 },
 {
   data: 6056,
   value: "SOUP,CRM OF SHRIMP,CND,COND"
 },
 {
   data: 6057,
   value: "CAMPBELL'S RED&WHITE,CHICK BROTH,COND"
 },
 {
   data: 6058,
   value: "CAMPBELL'S RED & WHITE,CHICK GUMBO SOUP,COND"
 },
 {
   data: 6060,
   value: "SOUP,STOCKPOT,CND,COND"
 },
 {
   data: 6061,
   value: "SOUP,TOMATO BF W/ NOODLE,CND,COND"
 },
 {
   data: 6062,
   value: "CAMPBELL'S RED & WHITE,CHICK NOODLE SOUP,COND"
 },
 {
   data: 6063,
   value: "SOUP,TOMATO RICE,CND,COND"
 },
 {
   data: 6064,
   value: "SOUP,TURKEY,CHUNKY,CND,RTS"
 },
 {
   data: 6065,
   value: "SOUP,TURKEY NOODLE,CND,COND"
 },
 {
   data: 6066,
   value: "SOUP,TURKEY VEG,CND,COND"
 },
 {
   data: 6067,
   value: "SOUP,CHUNKY VEG,CND,RTS"
 },
 {
   data: 6068,
   value: "SOUP,VEGETARIAN VEG,CND,COND"
 },
 {
   data: 6070,
   value: "SOUP,CHUNKY BF,CND,RTS"
 },
 {
   data: 6071,
   value: "SOUP,VEG BF,CND,COND"
 },
 {
   data: 6072,
   value: "SOUP,VEG W/ BF BROTH,CND,COND"
 },
 {
   data: 6075,
   value: "SOUP,BF BROTH OR BOUILLON,PDR,DRY"
 },
 {
   data: 6076,
   value: "SOUP,BEEF BROTH,CUBED,DRY"
 },
 {
   data: 6077,
   value: "SOUP,BF NOODLE,DRY,MIX"
 },
 {
   data: 6080,
   value: "SOUP,CHICK BROTH OR BOUILLON,DRY"
 },
 {
   data: 6081,
   value: "SOUP,CHICK BROTH CUBES,DRY"
 },
 {
   data: 6082,
   value: "CAMPBELL'S RED & WHITE,CHICK NOODLEO'S SOUP,COND"
 },
 {
   data: 6084,
   value: "CAMPBELL'S RED & WHITE,CHICK VEG SOUP,COND"
 },
 {
   data: 6091,
   value: "CAMPBELL'S RED & WHITE,BF BROTH,COND"
 },
 {
   data: 6094,
   value: "SOUP,ONION,DRY,MIX"
 },
 {
   data: 6097,
   value: "CAMPBELLS RED & WHITE,BF CONSOMME,COND"
 },
 {
   data: 6099,
   value: "SOUP,TOMATO VEG,DRY,MIX"
 },
 {
   data: 6101,
   value: "SOUP,CRM OF VEG,DRY,PDR"
 },
 {
   data: 6103,
   value: "SAUCE,CHS,DRY,PDR"
 },
 {
   data: 6105,
   value: "CAMPBELL'S RED & WHITE,BATMAN FUN SHAPES SOUP,COND"
 },
 {
   data: 6112,
   value: "SAUCE,TERIYAKI,RTS"
 },
 {
   data: 6114,
   value: "GRAVY,AU JUS,CANNED"
 },
 {
   data: 6115,
   value: "GRAVY,AU JUS,DRY"
 },
 {
   data: 6116,
   value: "GRAVY,BF,CND,RTS"
 },
 {
   data: 6117,
   value: "CAMPBELL'S RED & WHITE,BEAN W/ BACON SOUP,COND"
 },
 {
   data: 6118,
   value: "GRAVY,BROWN,DRY"
 },
 {
   data: 6119,
   value: "GRAVY,CHICK,CND,RTS"
 },
 {
   data: 6120,
   value: "GRAVY,CHICKEN,DRY"
 },
 {
   data: 6121,
   value: "GRAVY,MUSHROOM,CANNED"
 },
 {
   data: 6122,
   value: "GRAVY,MUSHROOM,DRY,PDR"
 },
 {
   data: 6123,
   value: "GRAVY,ONION,DRY,MIX"
 },
 {
   data: 6124,
   value: "GRAVY,PORK,DRY,PDR"
 },
 {
   data: 6125,
   value: "GRAVY,TURKEY,CND,RTS"
 },
 {
   data: 6126,
   value: "GRAVY,TURKEY,DRY"
 },
 {
   data: 6127,
   value: "GRAVY,UNSPEC TYPE,DRY"
 },
 {
   data: 6128,
   value: "SOUP,CHICK NOODLE,DRY,MIX"
 },
 {
   data: 6137,
   value: "SAUCE,MOLE POBLANO,DRY MIX,SINGLE BRAND"
 },
 {
   data: 6142,
   value: "SAUCE,SOFRITO,PREP FROM RECIPE"
 },
 {
   data: 6143,
   value: "USDA COMMODITY,SPAGHETTI SAU,MEATLESS,CND"
 },
 {
   data: 6145,
   value: "CAMPBELL'S RED & WHITE,BF NOODLE SOUP,COND"
 },
 {
   data: 6146,
   value: "CAMPBELL'S RED & WHITE,BF W/ VEG & BARLEY SOUP,COND"
 },
 {
   data: 6147,
   value: "SOUP,BF MUSHROOM,CND,COND"
 },
 {
   data: 6149,
   value: "SOUP,CHICK MUSHROOM,CND,COND"
 },
 {
   data: 6150,
   value: "SAUCE,BARBECUE"
 },
 {
   data: 6151,
   value: "SAUCE,PLUM,READY-TO-SERVE"
 },
 {
   data: 6152,
   value: "SAUCE,PIZZA,CND,RTS"
 },
 {
   data: 6158,
   value: "SOUP,TOMATO BISQUE,CND,COND"
 },
 {
   data: 6159,
   value: "SOUP,TOMATO,CND,COND"
 },
 {
   data: 6164,
   value: "SAUCE,SALSA,RTS"
 },
 {
   data: 6165,
   value: "SAUCE,HOMEMADE,WHITE,THIN"
 },
 {
   data: 6166,
   value: "SAUCE,HOMEMADE,WHITE,MED"
 },
 {
   data: 6167,
   value: "SAUCE,HOMEMADE,WHITE,THICK"
 },
 {
   data: 6168,
   value: "SAUCE,RTS,PEPPER OR HOT"
 },
 {
   data: 6169,
   value: "SAUCE,RTS,PEPPER,TABASCO"
 },
 {
   data: 6170,
   value: "SOUP,STOCK,BEEF,HOME-PREPARED"
 },
 {
   data: 6172,
   value: "SOUP,STOCK,CHICK,HOME-PREPARED"
 },
 {
   data: 6174,
   value: "SOUP,STOCK,FISH,HOME-PREPARED"
 },
 {
   data: 6175,
   value: "SAUCE,HOISIN,RTS"
 },
 {
   data: 6176,
   value: "SAUCE,OYSTER,RTS"
 },
 {
   data: 6177,
   value: "SOUP,MINESTRONE,CND,RED NA,RTS"
 },
 {
   data: 6178,
   value: "USDA COMMODITY,SALSA"
 },
 {
   data: 6179,
   value: "SAUCE,FISH,READY-TO-SERVE"
 },
 {
   data: 6180,
   value: "SOUP,SHARK FIN,REST-PREP"
 },
 {
   data: 6182,
   value: "SOUP,CRM OF MUSHROOM,CND,COND,RED NA"
 },
 {
   data: 6183,
   value: "SOUP,CHICK BROTH,CND,LESS/REDUCED NA"
 },
 {
   data: 6189,
   value: "SAUCE,TERIYAKI,RTS,RED NA"
 },
 {
   data: 6190,
   value: "SOUP,BEAN&HAM,CND,RED NA,PREP W/H2O OR RTS"
 },
 {
   data: 6192,
   value: "SPLIT PEA SOUP,CND,RED NA,PREP W/ H2O OR READY-TO SERVE"
 },
 {
   data: 6193,
   value: "SPLIT PEA W/ HAM SOUP,CND,RED NA,PREP W/ H2O OR RTS"
 },
 {
   data: 6194,
   value: "SOUP,CHICK BROTH,CND,RTS"
 },
 {
   data: 6195,
   value: "HEALTHY REQUEST,CRM OF CHICK SOUP,COND"
 },
 {
   data: 6201,
   value: "SOUP,CRM OF ASPARAGUS,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6208,
   value: "SOUP,CHICK VEG W/POTATO&CHS,CHUNKY,RTS"
 },
 {
   data: 6209,
   value: "CAMPBELL'S RED&WHITE,98% FAT FREE CRM OF BROCCOLI SOUP,COND"
 },
 {
   data: 6210,
   value: "SOUP,CRM OF CELERY,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6211,
   value: "SOUP,CHS,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6212,
   value: "RED&WHITE,25% LESS NA CHIC NOODL,COND"
 },
 {
   data: 6213,
   value: "CAMPBELL'S RED&WHITE,25% LESS NA TOMATO SOUP,COND"
 },
 {
   data: 6214,
   value: "CAMPBELL'S RED&WHITE,25% LESS NA CRM OF MSHR,COND"
 },
 {
   data: 6215,
   value: "CAMPBELL'S RED&WHITE,98% FAT FR BRCCLI CHS,COND"
 },
 {
   data: 6216,
   value: "SOUP,CRM OF CHICK,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6217,
   value: "SOUP,VEG,CND,LO NA,COND"
 },
 {
   data: 6218,
   value: "CAMPBELL'S RED & WHITE,98% FAT FREE CRM OF CELERY SOUP,COND"
 },
 {
   data: 6219,
   value: "CAMPBELL'S RED & WHITE,98% FAT FREE CRM OF CHICK SOUP,COND"
 },
 {
   data: 6220,
   value: "PREGO PASTA,CHNKY GRD MSHRM & GRN PPPR ITAL SAU,RTS"
 },
 {
   data: 6221,
   value: "PREGO PASTA,CHUNKY GARDEN MUSHROOM ITALIAN SAU,RTS"
 },
 {
   data: 6222,
   value: "PREGO PASTA,DICED ONION & GARLIC ITAL SAU,RTS"
 },
 {
   data: 6223,
   value: "PREGO PASTA,FLAV W/ MEAT ITAL SAU,RTS"
 },
 {
   data: 6224,
   value: "PREGO PASTA,FRSH MUSHROOM ITAL SAU,RTS"
 },
 {
   data: 6225,
   value: "PREGO PASTA,GARLIC SUPREME ITAL SAU,RTS"
 },
 {
   data: 6226,
   value: "PREGO PASTA,ITAL SAUSGE & GARLIC ITAL SAU,RTS"
 },
 {
   data: 6228,
   value: "PREGO PASTA,MINI MEATBALL ITAL SAU,RTS"
 },
 {
   data: 6229,
   value: "PREGO PASTA,MUSHRM & GRLIC ITAL SAU,RTS"
 },
 {
   data: 6230,
   value: "SOUP,CLAM CHOWDER,NEW ENG,CND,PREP W/ EQ VLM LOFAT (2%) MILK"
 },
 {
   data: 6231,
   value: "PREGO PASTA,MUSHRM & PARMESAN ITALIAN SAU,RTS"
 },
 {
   data: 6232,
   value: "PREGO PASTA,ORGANIC MUSHROOM ITALIAN SAU,RTS"
 },
 {
   data: 6233,
   value: "PREGO PASTA,ORGNIC TOMATO & BASIL ITAL SAU,RTS"
 },
 {
   data: 6234,
   value: "PREGO PASTA,HEART SMRT- RICOTTA PMESAN ITLN SAU,RTS"
 },
 {
   data: 6235,
   value: "PREGO PASTA,RSTD GARLIC & HERB ITAL SAU,RTS"
 },
 {
   data: 6236,
   value: "PREGO PASTA,RSTD GARLIC PARMESAN ITAL SAU,RTS"
 },
 {
   data: 6237,
   value: "PREGO PASTA,H ST- RSTD RED PR GRLIC ITLIAN SAU,RTS"
 },
 {
   data: 6239,
   value: "PREGO PASTA,TOMATO,BASIL & GARLIC ITAL SAU,RTS"
 },
 {
   data: 6240,
   value: "PREGO PASTA,ZESTY MUSHROOM ITALIAN SAU,RTS"
 },
 {
   data: 6241,
   value: "CAMPBELL'S,CHNKY MICRO BOWLS,BF W/ CONTRY VEG,RTS"
 },
 {
   data: 6242,
   value: "CAMPBELL'S CHUNKY MICROWAVABLE BWLS,CHCK DMPLINGS SOUP"
 },
 {
   data: 6243,
   value: "SOUP,CRM OF MUSHROOM,CND,PREP W/ EQ VOLUME LOFAT (2%) MILK"
 },
 {
   data: 6244,
   value: "CAMPBELL'S, CHNKY MICRO BOWLS,CLSSC CHIC NOODL,RTS"
 },
 {
   data: 6245,
   value: "CAMPBELL'S, CHNKY MICRO BOWL,GRLLD CHIC&SAUS GMBO,RTS"
 },
 {
   data: 6246,
   value: "SOUP,CRM OF ONION,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6247,
   value: "CAMPBELL'S, CHNKY MICRO BOWL,GRLD CHIC W/VEG&PSTA,RTS"
 },
 {
   data: 6248,
   value: "SOUP,OYSTER STEW,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6249,
   value: "SOUP,PEA,GRN,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6250,
   value: "CAMPBELL'S, CHNKY MICRO BOWL,NEW ENGL CLM CHOW,RTS"
 },
 {
   data: 6251,
   value: "CAMPBELL'S,CHUNKY MICRO BOWLS,OLD FASH VEG BF,RTS"
 },
 {
   data: 6252,
   value: "CAMPBELL'S,CHUNKY MICRO BOWLS,SIRL BRGER W/CNTRY VEG,RTS"
 },
 {
   data: 6253,
   value: "SOUP,CRM OF POTATO,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6256,
   value: "SOUP,CRM OF SHRIMP,CND,PREP W/ EQ VOLUME LOFAT (2%) MILK"
 },
 {
   data: 6264,
   value: "SAUCE,WHITE,THIN,PREPARED-FROM-RECIPE,W/ BUTTER"
 },
 {
   data: 6285,
   value: "SAUCE,SWT & SOUR,PREPARED-FROM-RECIPE"
 },
 {
   data: 6307,
   value: "SAUCE,BARBECUE,KRAFT,ORIGINAL"
 },
 {
   data: 6309,
   value: "CAMPBELL'S RED & WHITE,CHICK W/ RICE SOUP,COND"
 },
 {
   data: 6311,
   value: "CAMPBELL'S RED&WHITE,CHICK WON TON SOUP,COND"
 },
 {
   data: 6312,
   value: "CAMPBELL'S RED & WHITE,CRM OF ASPARAGUS SOUP,COND"
 },
 {
   data: 6314,
   value: "SOUP,HEALTHY CHOIC CHICK NOODLE SOUP,CND"
 },
 {
   data: 6315,
   value: "SOUP,HEALTHY CHOIC CHICK & RICE SOUP,CND"
 },
 {
   data: 6316,
   value: "SOUP,HEALTHY CHOIC GARDEN VEG SOUP,CND"
 },
 {
   data: 6317,
   value: "CAMPBELL'S FAT FREE BF GRAVY"
 },
 {
   data: 6318,
   value: "CAMPBELL'S COUNTRY STYLE CRM GRAVY"
 },
 {
   data: 6319,
   value: "CAMPBELL'S COUNTRY STYLE SAUSAGE GRAVY"
 },
 {
   data: 6320,
   value: "CAMPBELL'S FAT FREE CHICK GRAVY"
 },
 {
   data: 6321,
   value: "CAMPBELL'S GOLDEN PORK GRAVY"
 },
 {
   data: 6322,
   value: "CAMPBELL'S MUSHROOM GRAVY"
 },
 {
   data: 6323,
   value: "CAMPBELL'S FAT FREE TURKEY GRAVY"
 },
 {
   data: 6324,
   value: "CAMPBELL'S MICROWAVABLE BF GRAVY"
 },
 {
   data: 6325,
   value: "CAMPBELL'S MICROWAVABLE CHICK GRAVY"
 },
 {
   data: 6326,
   value: "CAMPBELL'S TURKEY GRAVY"
 },
 {
   data: 6327,
   value: "FRANCO-AMERICN FAT FR SLW RST BF GRAVY"
 },
 {
   data: 6328,
   value: "FRANCO-AMERICAN FT FE SLW RST CHICK GRVY"
 },
 {
   data: 6329,
   value: "FRANCO-AMERICAN SLOW RST BF GRAVY"
 },
 {
   data: 6330,
   value: "FRANCO-AMERICAN SLOW RST CHICK GRAVY"
 },
 {
   data: 6331,
   value: "FRANCO-AMERICAN SLOW RST TURKEY GRAVY"
 },
 {
   data: 6332,
   value: "CAMPBELL'S MICROWAVABLE TURKEY GRAVY"
 },
 {
   data: 6333,
   value: "CAMPBELL'S RED & WHITE,CRM OF BROCCOLI SOUP,COND"
 },
 {
   data: 6334,
   value: "CAMPBELL'S RED & WHITE,CRM OF CELERY SOUP,COND"
 },
 {
   data: 6336,
   value: "CAMPBELL'S RED & WHITE,CRM OF CHICK SOUP,COND"
 },
 {
   data: 6337,
   value: "CAMPBELL'S RED&WHITE,CRM OF CHIC W/ HERBS SOUP,COND"
 },
 {
   data: 6338,
   value: "CAMPBELL'S RED & WHITE,CRM OF MUSHROOM SOUP,COND"
 },
 {
   data: 6339,
   value: "CAMPBELLS RED&WHITE,CRM OF MSHRM W/ RSTD GARLC,COND"
 },
 {
   data: 6340,
   value: "CAMPBELL'S RED & WHITE,CRM OF ONION SOUP,COND"
 },
 {
   data: 6341,
   value: "CAMPBELL'S RED & WHITE,CRM OF POTATO SOUP,COND"
 },
 {
   data: 6342,
   value: "CAMPBELL'S RED & WHITE,CRM OF SHRIMP SOUP,COND"
 },
 {
   data: 6343,
   value: "CAMPBELL'S RED&WHITE,CREAMY CHICK NOODLE SOUP,COND"
 },
 {
   data: 6344,
   value: "CAMPBELL'S RED&WHITE,CREAMY CHICK VERDE SOUP,COND"
 },
 {
   data: 6346,
   value: "CAMPBELL'S RED & WHITE,CURLY NOODLE SOUP,COND"
 },
 {
   data: 6349,
   value: "CAMPBELL'S RED & WHITE,DORA THE EXPLORER SOUP,COND"
 },
 {
   data: 6350,
   value: "CAMPBELL'S RED & WHITE,DOUBLE NOODLE IN CHICK BROTH SOP,COND"
 },
 {
   data: 6351,
   value: "CAMPBELL'S RED & WHITE,OLD FASHIONED TOMATO RICE SOUP,COND"
 },
 {
   data: 6353,
   value: "CAMPBELL'S RED & WHITE,FIESTA NACHO CHS SOUP,COND"
 },
 {
   data: 6354,
   value: "CAMPBELL'S RED & WHITE,FRENCH ONION SOUP,COND"
 },
 {
   data: 6355,
   value: "CAMPBELL'S RED & WHITE,GOLDEN MUSHROOM SOUP,COND"
 },
 {
   data: 6357,
   value: "CAMPBELL'S RED & WHITE,GOLDFISH PASTA W/ CHICK"
 },
 {
   data: 6358,
   value: "SOUP,TOMATO BISQUE,CND,PREP W/ EQ VOLUME MILK"
 },
 {
   data: 6359,
   value: "SOUP,TOMATO,CND,PREP W/ EQ VOLUME LOFAT (2%) MILK"
 },
 {
   data: 6360,
   value: "CAMPBELL'S RED & WHITE,GOLDFISH PASTA W/ MEATBALL"
 },
 {
   data: 6361,
   value: "CAMPBELL'S RED & WHITE,GRN PEA SOUP,COND"
 },
 {
   data: 6362,
   value: "CAMPBELL'S RED & WHITE,HEARTY VEG W/ PASTA SOUP,COND"
 },
 {
   data: 6363,
   value: "CAMPBELL'S RED & WHITE,HOMESTYLE CHICK NOODLE SOUP,COND"
 },
 {
   data: 6364,
   value: "CAMPBELL'S RED & WHITE,MANHATTAN CLAM CHOWDER,COND"
 },
 {
   data: 6365,
   value: "CAMPBELL'S RED & WHITE,MEGA NOODLE IN CHICK BROTH,COND"
 },
 {
   data: 6366,
   value: "CAMPBELL'S RED & WHITE,MINESTRONE SOUP,COND"
 },
 {
   data: 6367,
   value: "CAMPBELL'S RED & WHITE,NEW ENGLAND CLAM CHOWDER,COND"
 },
 {
   data: 6369,
   value: "CAMPBELL'S RED & WHITE,OYSTER STEW,COND"
 },
 {
   data: 6370,
   value: "CAMPBELL'S RED & WHITE,PEPPER POT SOUP,COND"
 },
 {
   data: 6371,
   value: "CAMPBELL'S RED & WHT,SCOTCH BRTH,COND"
 },
 {
   data: 6372,
   value: "CAMPBELL'S RED & WHITE,STHWEST STYLE PEPPER JCK SP,COND"
 },
 {
   data: 6373,
   value: "CAMPBELL'S RED & WHITE,VEGETARIAN VEG SOUP,COND"
 },
 {
   data: 6374,
   value: "CAMPBELL'S RED & WHITE,VEG SOUP,COND"
 },
 {
   data: 6375,
   value: "CAMPBELL'S RED & WHITE,VEG BF SOP,COND"
 },
 {
   data: 6377,
   value: "CAMPBELL'S RED & WHITE,TOMATO SOUP,COND"
 },
 {
   data: 6379,
   value: "CAMPBELL'S RED & WHITE,TOMATO BISQUE,COND"
 },
 {
   data: 6380,
   value: "CAMPBELL'S RED & WHITE,SPLIT PEA W/ HAM & BACON SOUP,COND"
 },
 {
   data: 6381,
   value: "CAMPBELL'S RED & WHITE,SOUTHWESTERN-STYLE CHICK VEG SOP,COND"
 },
 {
   data: 6383,
   value: "CAMPBELL'S CHUNKY SOUPS,BKD POTATO CHEDDAR BACON BITS SOUP"
 },
 {
   data: 6384,
   value: "CAMPBELL'S CHUNKY SOUPS,BKD POTATO W/ STEAK & CHS SOUP"
 },
 {
   data: 6385,
   value: "CAMPBELL'S CHUNKY SOUPS,BARBEQUE SEASONED BURGER SOUP"
 },
 {
   data: 6386,
   value: "CAMPBELL'S CHUNKY SOUPS,BBQ SEASONED PORK SOUP"
 },
 {
   data: 6387,
   value: "CAMPBELL'S CHUNKY SOUPS,BF RIB RST POTATOES HERBS SOUP"
 },
 {
   data: 6388,
   value: "CAMPBELL'S CHUNKY SOUPS,BF W/ COUNTRY VEG SOUP"
 },
 {
   data: 6389,
   value: "CAMPBELL'S CHUNKY SOUPS,BF W/ WHITE & WILD RICE SOUP"
 },
 {
   data: 6391,
   value: "CAMPBELL'S CHUNKY SOUPS,CHICK & DUMPLINGS SOUP"
 },
 {
   data: 6392,
   value: "CAMPBELL'S CHUNKY SOUPS,CHICK BROCCOLI CHS & POTATO SOUP"
 },
 {
   data: 6393,
   value: "CAMPBELL'S CHUNKY SOUPS,CHICK CORN CHOWDER"
 },
 {
   data: 6394,
   value: "CAMPBELL'S CHUNKY SOUPS,CHICK MUSHROOM CHOWDER"
 },
 {
   data: 6395,
   value: "CAMPBELL'S CHUNKY SOUPS,CLASSIC CHICK NDLE SOUP"
 },
 {
   data: 6396,
   value: "CAMPBELL'S CHUNKY SOUPS,FAJITA CHICK W/ RICE & BNS SOUP"
 },
 {
   data: 6398,
   value: "CAMPBELL'S CHUNKY SOUPS,FIREHOUSE - HOT SPICY BF BEAN CHILI"
 },
 {
   data: 6399,
   value: "CAMPBELL'S CHUNKY SOUPS,GRILLED CHICK SAUSAGE GUMBO SOUP"
 },
 {
   data: 6400,
   value: "CAMPBELL'S CHUNKY SOUPS,GRILLED CHICK VEG & PASTA SOUP"
 },
 {
   data: 6401,
   value: "SOUP,CRM OF ASPARAGUS,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6402,
   value: "SOUP,BLACK BEAN,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6403,
   value: "CAMPBELL'S CHUNKY SOUPS,GRILLED SIRLOIN STEAK HEARTY VEG SP"
 },
 {
   data: 6404,
   value: "SOUP,BEAN W/ PORK,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6405,
   value: "CAMPBELL'S CHUNKY SOUPS,HEALTHY REQUEST CHICK NOODLE SOUP"
 },
 {
   data: 6406,
   value: "SOUP,BEAN W/ FRANKFURTERS,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6408,
   value: "CAMPBELL'S CHUNKY SOUPS,HEALTHY REQUEST VEG SOUP"
 },
 {
   data: 6409,
   value: "SOUP,BF NOODLE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6410,
   value: "SOUP,CRM OF CELERY,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6411,
   value: "SOUP,CHS,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6412,
   value: "SOUP,CHICK W/ DUMPLINGS,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6413,
   value: "SOUP,CHICK BROTH,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6414,
   value: "CAMPBELL'S CHUNKY SOUPS,HEARTY BEAN 'N' HAM SOUP"
 },
 {
   data: 6415,
   value: "CAMPBELL'S CHUNKY SOUPS,HEARTY BF BARLEY SOUP"
 },
 {
   data: 6416,
   value: "SOUP,CRM OF CHICK,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6417,
   value: "SOUP,CHICK GUMBO,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6418,
   value: "CAMPBELL'S CHUNKY SOUPS,HEARTY CHICK W/ VEG SOUP"
 },
 {
   data: 6419,
   value: "SOUP,CHICK NOODLE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6420,
   value: "CAMPBELL'S CHUNKY SOUPS,HEARTY VEG W/ PASTA SOUP"
 },
 {
   data: 6421,
   value: "CAMPBELL'S CHUNKY SOUPS,HERB RSTD CHICK POTATOES GARLIC SOUP"
 },
 {
   data: 6423,
   value: "SOUP,CHICK W/ RICE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6424,
   value: "CAMPBELL'S CHUNKY SOUPS,HONEY RSTD HAM W/ POTATOES SOUP"
 },
 {
   data: 6425,
   value: "SOUP,CHICK VEG,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6426,
   value: "SOUP,CHILI BF,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6427,
   value: "CAMPBELL'S CHUNKY SOUPS,ITALIAN SAUSAGE & PEPPERS SOUP"
 },
 {
   data: 6428,
   value: "SOUP,CLAM CHOWDER,MANHATTAN,CND,PREP W/EQ VOLUME H2O"
 },
 {
   data: 6429,
   value: "CAMPBELL'S CHUNKY SOUPS,MANHATTAN CLAM CHOWDER"
 },
 {
   data: 6430,
   value: "SOUP,CLAM CHOWDER,NEW ENGLAND,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6431,
   value: "CAMPBELL'S CHUNKY SOUPS,NEW ENGLAND CLAM CHOWDER"
 },
 {
   data: 6432,
   value: "SOUP,BF BROTH,BOUILLON,CONSOMME,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6433,
   value: "CAMPBELL'S CHUNKY SOUPS,OLD FASHIONED POTATO HAM CHOWDER"
 },
 {
   data: 6434,
   value: "CAMPBELL'S CHUNKY SOUPS,OLD FASHIONED VEG BF SOUP"
 },
 {
   data: 6435,
   value: "CAMPBELL'S CHUNKY SOUPS,PEPPER STEAK SOUP"
 },
 {
   data: 6436,
   value: "CAMPBELL'S CHUNKY SOUPS,PORK RST CARROTS POTATOES SOUP"
 },
 {
   data: 6437,
   value: "CAMPBELL'S CHUNKY SOUPS,ROADHOUSE - BF BEAN CHILI"
 },
 {
   data: 6438,
   value: "CAMPBELL'S CHUNKY SOUPS,SALISBURY STEAK MUSHRMS ONIONS SOUP"
 },
 {
   data: 6439,
   value: "CAMPBELL'S CHUNKY SOUPS,SAVORY CHICK WHITE WILD RICE SOUP"
 },
 {
   data: 6440,
   value: "SOUP,MINESTRONE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6441,
   value: "CAMPBELL'S CHUNKY SOUPS,SAVORY POT RST SOUP"
 },
 {
   data: 6442,
   value: "SOUP,MUSHROOM BARLEY,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6443,
   value: "SOUP,CRM OF MUSHROOM,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6444,
   value: "SOUP,MUSHROOM W/ BF STOCK,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6445,
   value: "SOUP,ONION,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6446,
   value: "SOUP,CRM OF ONION,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6447,
   value: "CAMPBELL'S CHUNKY SOUPS,SAVORY VEG SOUP"
 },
 {
   data: 6448,
   value: "SOUP,OYSTER STEW,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6449,
   value: "SOUP,PEA,GRN,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6451,
   value: "SOUP,PEA,SPLIT W/ HAM,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6452,
   value: "SOUP,PEPPERPOT,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6453,
   value: "SOUP,CRM OF POTATO,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6454,
   value: "CAMPBELL'S CHUNKY SOUPS,SIZZLIN' STEAK- GRLD STK CHILI BNS"
 },
 {
   data: 6455,
   value: "SOUP,SCOTCH BROTH,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6456,
   value: "SOUP,CRM OF SHRIMP,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6457,
   value: "CAMPBELL'S CHUNKY SOUPS,SLOW RSTD BF W/ MUSHROOMS SOUP"
 },
 {
   data: 6458,
   value: "CAMPBELL'S CHUNKY SOUPS,SMOKED CHICK W/ RSTD CORN CHOWDER"
 },
 {
   data: 6459,
   value: "CAMPBELL'S CHUNKY SOUPS,SPLIT PEA 'N' HAM SOUP"
 },
 {
   data: 6460,
   value: "SOUP,STOCKPOT,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6461,
   value: "SOUP,TOMATO BF W/ NOODLE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6462,
   value: "CAMPBELL'S CHUNKY SOUPS,STEAK 'N' POTATO SOUP"
 },
 {
   data: 6463,
   value: "SOUP,TOMATO RICE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6464,
   value: "CAMPBELL'S CHNKY SOUPS,TANTALIZIN' TRKY - TRKY CHILI BNS SP"
 },
 {
   data: 6465,
   value: "SOUP,TURKEY NOODLE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6466,
   value: "SOUP,TURKEY VEG,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6468,
   value: "SOUP,VEGETARIAN VEG,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6470,
   value: "CAMPBELL'S LO NA SOUPS,CHICK BROTH"
 },
 {
   data: 6471,
   value: "SOUP,VEG BF,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6472,
   value: "SOUP,VEG W/ BF BROTH,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6474,
   value: "SOUP,BEAN W/ BACON,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6475,
   value: "SOUP,BF BROTH OR BOUILLON,PDR,PREP W/H2O"
 },
 {
   data: 6476,
   value: "SOUP,BF BROTH,CUBED,PREP W/H2O"
 },
 {
   data: 6480,
   value: "SOUP,CHICK BROTH OR BOUILLON,DRY,PREP W/ H2O"
 },
 {
   data: 6481,
   value: "SOUP,CHICK BROTH CUBES,DRY,PREP W/ H2O"
 },
 {
   data: 6482,
   value: "CAMPBELL'S LO NA SOUPS,CHICK W/ NOODLES SOUP"
 },
 {
   data: 6483,
   value: "SOUP,CRM OF CHICK,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6485,
   value: "SOUP,CHICK RICE,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6487,
   value: "CAMPBELL'S LO NA SOUPS,CRM OF MUSHROOM SOUP"
 },
 {
   data: 6489,
   value: "SOUP,CONSOMME W/ GELATIN,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6493,
   value: "SOUP,MUSHROOM,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6494,
   value: "SOUP,ONION,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6495,
   value: "SOUP,OXTAIL,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6497,
   value: "CAMPBELL'S RED & WHITE - MCRWVEABLE BOWLS,CHICK NOODLE SOUP"
 },
 {
   data: 6498,
   value: "SOUP,TOMATO,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6499,
   value: "SOUP,TOMATO VEG,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6500,
   value: "SOUP,VEG BF,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6502,
   value: "CAMPBELL'S RED & WHITE - MICROWAVEABLE BOWLS,CHICK RICE SOUP"
 },
 {
   data: 6503,
   value: "CAMPBELL'S RED & WHITE - MCRWVEABLE BOWLS,CREAMY TOMATO SOUP"
 },
 {
   data: 6504,
   value: "CAMPBELL'S RED & WHITE - MICROWAVEABLE BOWLS,TOMATO SOUP"
 },
 {
   data: 6505,
   value: "CAMPBELL'S RED & WHITE - MICROWAVEABLE BOWLS,VEG BF SOUP"
 },
 {
   data: 6507,
   value: "CAMPBELL'S SEL GOLD LABEL SOUPS,BLNDED RED PEPP BLK BEAN SP"
 },
 {
   data: 6508,
   value: "CAMPBELL'S SEL GOLD LABEL SOUPS,CRMY PORTOBELLO MSHRM SOUP"
 },
 {
   data: 6509,
   value: "CAMPBELL'S SEL GOLD LABEL SOUPS,GOLDEN BUTTERNUT SQSH SOUP"
 },
 {
   data: 6513,
   value: "CAMPBELL BOWLS,98% FAT FREE NEW ENGLAND CLAM CHOWDER"
 },
 {
   data: 6514,
   value: "CAMPBELL'S SEL MCRWVABLE BOWLS,CHICK W/ EGG NOODLES SOUP"
 },
 {
   data: 6516,
   value: "CAMPBELL'S SEL MCRWVABLE BWLS,ITAL SSGE PSTA & PEPRNI SOUP"
 },
 {
   data: 6517,
   value: "CAMPBELL'S SEL MCRWVABLE BOWLS,ITALIAN-STYLE WEDDING SOUP"
 },
 {
   data: 6519,
   value: "CAMPBELL'S SEL MCRWVABLE BOWLS,MEX STYLE CHICK TORTILLA SOUP"
 },
 {
   data: 6521,
   value: "CAMPBELL'S SEL MICROWAVEABLE BOWLS,MINESTRONE SOUP"
 },
 {
   data: 6525,
   value: "CAMPBELL'S SEL MCRWVABLE BOWLS,SVRY CHK & LONG GRN RICE SOUP"
 },
 {
   data: 6528,
   value: "SOUP,CHICK NOODLE,DRY,MIX,PREP W/ H2O"
 },
 {
   data: 6529,
   value: "CAMPBELL'S SEL SOUP,98% FAT FREE NEW ENGLAND CLAM CHOWDER"
 },
 {
   data: 6531,
   value: "CAMPBELL'S SEL SOUP,BF W/ RSTD BARLEY SOUP"
 },
 {
   data: 6532,
   value: "CAMPBELL'S SEL SOUP,CHICK & PASTA W/ RSTD GARLIC SOUP"
 },
 {
   data: 6533,
   value: "CAMPBELL'S SEL SOUP,CHICK VEG MEDLEY SOUP"
 },
 {
   data: 6535,
   value: "CAMPBELL'S SEL SOUP,CREAMY CHICK ALFREDO SOUP"
 },
 {
   data: 6537,
   value: "CAMPBELL'S SEL SOUP,HEALTHY REQUEST MEX STYLE CHICK TORTILLA"
 },
 {
   data: 6540,
   value: "CAMPBELL'S SEL SOUP,ITALIAN SAUSAGE W/ PASTA PEPPERONI SOUP"
 },
 {
   data: 6541,
   value: "CAMPBELL'S SEL SOUP,ITALIAN-STYLE WEDDING SOUP"
 },
 {
   data: 6542,
   value: "CAMPBELL'S SEL SOUP,MEDITERRANEAN MEATBALL BOWTIE PASTA SOUP"
 },
 {
   data: 6543,
   value: "CAMPBELL'S SEL SOUP,MEXICAN STYLE CHICK TORTILLA SOUP"
 },
 {
   data: 6544,
   value: "CAMPBELL'S SEL SOUP,MINESTRONE SOUP"
 },
 {
   data: 6545,
   value: "CAMPBELLS SEL SOUP,NEW ENGLAND CLAM CHOWDER"
 },
 {
   data: 6546,
   value: "CAMPBELL'S SEL SOUP,POTATO BROCCOLI CHS SOUP"
 },
 {
   data: 6547,
   value: "SOUP,BF MUSHROOM,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6548,
   value: "CAMPBELL'S SEL SOUP,RSTD CHICK W/ LONG GRAIN WILD RICE SOUP"
 },
 {
   data: 6549,
   value: "SOUP,CHICK MUSHROOM,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6550,
   value: "CAMPBELL'S SEL SOUP,RSTD CHICK W/ ROTINI & PENNE PASTA SOUP"
 },
 {
   data: 6553,
   value: "CAMPBELL'S SEL SOUP,SAVORY WHITE BEAN W/ RSTD HAM SOUP"
 },
 {
   data: 6554,
   value: "CAMPBELL'S SEL SOUP,SLOW RSTD BF & VEG SOUP"
 },
 {
   data: 6556,
   value: "CAMPBELL'S SEL SOUP,SPLIT PEA W/ RSTD HAM SOUP"
 },
 {
   data: 6558,
   value: "SOUP,TOMATO BISQUE,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6559,
   value: "SOUP,TOMATO,CND,PREP W/EQ VOLUME H2O,COMM"
 },
 {
   data: 6578,
   value: "CAMPBELL'S SEL SOUP,TOMATO GARDEN SOUP"
 },
 {
   data: 6580,
   value: "CAMPBELL'S SEL SOUP,VEG MEDLEY SOUP"
 },
 {
   data: 6583,
   value: "SOUP,RAMEN NOODLE,ANY FLAVOR,DRY"
 },
 {
   data: 6584,
   value: "SOUP,BROCCOLI CHS,CND,COND,COMM"
 },
 {
   data: 6585,
   value: "CAMPBELL'S SOUP AT HAND,BLENDED VEG MEDLEY SOUP"
 },
 {
   data: 6586,
   value: "CAMPBELL'S SOUP AT HAND,CHICK & STARS SOUP"
 },
 {
   data: 6587,
   value: "CAMPBELL'S SOUP AT HAND,CHICK W/ MINI NOODLES SOUP"
 },
 {
   data: 6589,
   value: "CAMPBELL'S SOUP AT HAND,CRM OF BROCCOLI SOUP"
 },
 {
   data: 6590,
   value: "CAMPBELL'S SOUP AT HAND,CREAMY CHICK SOUP"
 },
 {
   data: 6592,
   value: "CAMPBELL'S SOUP AT HAND,CREAMY TOMATO SOUP"
 },
 {
   data: 6593,
   value: "CAMPBELL'S SOUP AT HAND,ITALIAN STYLE WEDDING SOUP"
 },
 {
   data: 6594,
   value: "CAMPBELL'S SOUP AT HAND,NEW ENGLAND CLAM CHOWDER"
 },
 {
   data: 6595,
   value: "CAMPBELL'S SOUP AT HAND,VEG BF SOUP"
 },
 {
   data: 6596,
   value: "CAMPBELL'S SOUP AT HAND,VELVETY POTATO SOUP"
 },
 {
   data: 6597,
   value: "PACE,CHIPOTLE CHUNKY SALSA"
 },
 {
   data: 6598,
   value: "PACE,CILANTRO CHUNKY SALSA"
 },
 {
   data: 6599,
   value: "PACE,ENCHILADA SAU"
 },
 {
   data: 6600,
   value: "PACE,GRN TACO SAU"
 },
 {
   data: 6601,
   value: "PACE,LIME & GARLIC CHUNKY SALSA"
 },
 {
   data: 6602,
   value: "PACE,ORGANIC PICANTE SAU"
 },
 {
   data: 6603,
   value: "PACE,PICANTE SAU"
 },
 {
   data: 6604,
   value: "PACE,RED TACO SAU"
 },
 {
   data: 6605,
   value: "PACE,THICK & CHUNKY SALSA"
 },
 {
   data: 6609,
   value: "SWANSON BROTH,CERT ORGANIC VEG BROTH"
 },
 {
   data: 6615,
   value: "SWANSON BROTH,VEG BROTH"
 },
 {
   data: 6617,
   value: "CAMPBELL'S, HEALTHY REQUEST ITALIAN-STYLE WEDDING SOUP"
 },
 {
   data: 6720,
   value: "SAUCE,CHS SAU MIX,DRY"
 },
 {
   data: 6725,
   value: "SOUP,CHICK CORN CHOWDER,CHUNKY,RTS,SINGLE BRAND"
 },
 {
   data: 6726,
   value: "SOUP,CHICK MUSHROOM CHOWDER,CHUNKY,RTS,SINGLE BRAND"
 },
 {
   data: 6728,
   value: "SOUP,POTATO HAM CHOWDER,CHUNKY,RTS,SINGLE BRAND"
 },
 {
   data: 6729,
   value: "SOUP,SIRLOIN BURGER W/VEG,RTS,SINGLE BRAND"
 },
 {
   data: 6730,
   value: "SOUP,SPLIT PEA W/ HAM,CHUNKY,RED FAT,RED NA,RTS,SINGLE BRAND"
 },
 {
   data: 6731,
   value: "SOUP,BEAN W/BACON,COND,SINGLE BRAND"
 },
 {
   data: 6733,
   value: "SOUP,BF W/VEG&BARLEY,CND,COND,SINGLE BRAND"
 },
 {
   data: 6734,
   value: "SOUP,CHICK W/STAR-SHAPED PASTA,CND,COND,SINGLE BRAND"
 },
 {
   data: 6736,
   value: "SOUP,CRM OF CHICK,CND,COND,SINGLE BRAND"
 },
 {
   data: 6738,
   value: "SOUP,SPLIT PEA W/HAM&BACON,CND,COND,SINGLE BRAND"
 },
 {
   data: 6739,
   value: "SOUP,VEG BF,CND,COND,SINGLE BRAND"
 },
 {
   data: 6740,
   value: "SOUP,CHICK VEG,CHUNKY,RED FAT,RED NA,RTS,SINGLE BRAND"
 },
 {
   data: 6742,
   value: "SOUP,VEG BF,MICROWAVABLE,RTS,SINGLE BRAND"
 },
 {
   data: 6749,
   value: "SOUP,BF & VEG,CND,RTS"
 },
 {
   data: 6930,
   value: "SAUCE,CHS,RTS"
 },
 {
   data: 6931,
   value: "SAUCE,PASTA,SPAGHETTI/MARINARA,RTS"
 },
 {
   data: 6932,
   value: "PREGO PASTA,TRADITIONAL ITALIAN SAU,RTS"
 },
 {
   data: 6955,
   value: "SOUP,CRM OF CHICK,CND,COND,RED NA"
 },
 {
   data: 6956,
   value: "SOUP,TOMATO,CND,COND,RED NA"
 },
 {
   data: 6957,
   value: "GRAVY,BROWN INST,DRY"
 },
 {
   data: 6958,
   value: "GRAVY,INST BF,DRY"
 },
 {
   data: 6959,
   value: "GRAVY,INST TURKEY,DRY"
 },
 {
   data: 6960,
   value: "SAUCE,ALFREDO MIX,DRY"
 },
 {
   data: 6961,
   value: "SAUCE,PEPPERS,HOT,CHILI,MATURE RED,CND"
 },
 {
   data: 6962,
   value: "SAUCE,CHILI,PEPPERS,HOT,IMMAT GRN,CND"
 },
 {
   data: 6963,
   value: "FISH BROTH"
 },
 {
   data: 6964,
   value: "SOUP,TOMATO,LO NA,W/H2O"
 },
 {
   data: 6965,
   value: "SOUP,PEA,LO NA,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6966,
   value: "SOUP,CHICK NOODLE,LO NA,CND,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6967,
   value: "SOUP,VEG SOUP,COND,LO NA,PREP W/ EQ VOLUME H2O"
 },
 {
   data: 6968,
   value: "SOUP,CRM OF MUSHROOM,LO NA,RTS,CND"
 },
 {
   data: 6969,
   value: "POTATO SOUP,INST,DRY MIX"
 },
 {
   data: 6970,
   value: "SOUP,CHICK BROTH,LO NA,CND"
 },
 {
   data: 6971,
   value: "SAUCE,WORCESTERSHIRE"
 },
 {
   data: 6972,
   value: "SAUCE,TOMATO CHILI SAU,BTLD,W/SALT"
 },
 {
   data: 6973,
   value: "SAUCE,TOMATO CHILI SAU,BTLD,NO SALT,LO NA"
 },
 {
   data: 6974,
   value: "SOUP,VEG CHICK,CND,PREP W/ H2O,LO NA"
 },
 {
   data: 6975,
   value: "SAUCE,BARBECUE,LO NA"
 },
 {
   data: 6976,
   value: "SAUCE,PASTA,SPAGHETTI/MARINARA,RTS,LO NA"
 },
 {
   data: 6977,
   value: "GRAVY,MEAT OR POULTRY,LO NA,PREP"
 },
 {
   data: 6978,
   value: "SOUP,BF & MUSHROOM,LO NA,CHUNK STYLE"
 },
 {
   data: 6979,
   value: "ADOBO FRESCO"
 },
 {
   data: 6980,
   value: "SOUP,BF STROGANOFF,CND,CHUNKY STYLE,RTS"
 },
 {
   data: 6981,
   value: "SOUP,BOUILLON CUBES&GRANULES,LO NA,DRY"
 },
 {
   data: 6982,
   value: "SOUP,RAMEN NOODLE,BF FLAVOR,DRY"
 },
 {
   data: 6983,
   value: "SOUP,RAMEN NOODLE,CHICK FLAVOR,DRY"
 },
 {
   data: 6984,
   value: "SOUP,SWANSON CHICK BROTH 99% FAT FREE"
 },
 {
   data: 6985,
   value: "GRAVY,HEINZ HOME STYLE SAVORY BF GRAVY"
 },
 {
   data: 6986,
   value: "HEALTHY REQUEST,CHICK NOODLE SOUP,COND"
 },
 {
   data: 6987,
   value: "HEALTHY REQUEST,CRM OF CELERY,COND"
 },
 {
   data: 6988,
   value: "HEALTHY REQUEST,CRM OF MUSHROOM ,COND"
 },
 {
   data: 6989,
   value: "HEALTHY REQUEST,HOMESTYL CHICK NOODLE,COND"
 },
 {
   data: 6990,
   value: "HEALTHY REQUEST,MINESTRONE SOUP,COND"
 },
 {
   data: 6991,
   value: "HEALTHY REQUEST,TOMATO SOUP,COND"
 },
 {
   data: 6992,
   value: "HEALTHY REQUEST,VEG SOUP,COND"
 },
 {
   data: 6994,
   value: "PREGO PASTA,CHUNKY GARDEN COMB ITALIAN SAU,RTS"
 },
 {
   data: 6995,
   value: "PREGO PASTA,CHNKY GRDN TMTO,ON & GRLIC ITAL SAU,RTS"
 },
 {
   data: 6996,
   value: "CAMPBELL'S AU JUS GRAVY"
 },
 {
   data: 6997,
   value: "CAMPBELL'S BF GRAVY"
 },
 {
   data: 6998,
   value: "CAMPBELL'S BROWN GRAVY W/ ONIONS"
 },
 {
   data: 6999,
   value: "CAMPBELL'S CHICK GRAVY"
 },
 {
   data: 7001,
   value: "BARBECUE LOAF,PORK,BEEF"
 },
 {
   data: 7002,
   value: "BEERWURST,BEER SALAMI,PORK & BF"
 },
 {
   data: 7003,
   value: "BEERWURST,BEER SALAMI,PORK"
 },
 {
   data: 7004,
   value: "SAUSAGE  BERLINER  PORK  BF"
 },
 {
   data: 7005,
   value: "BLOOD SAUSAGE"
 },
 {
   data: 7006,
   value: "BOCKWURST  PORK  VEAL  RAW"
 },
 {
   data: 7007,
   value: "BOLOGNA,BF"
 },
 {
   data: 7008,
   value: "BOLOGNA,BF & PORK"
 },
 {
   data: 7010,
   value: "BOLOGNA,PORK"
 },
 {
   data: 7011,
   value: "BOLOGNA  TURKEY"
 },
 {
   data: 7013,
   value: "BRATWURST,PORK,CKD"
 },
 {
   data: 7014,
   value: "BRAUNSCHWEIGER (A LIVER SAUSAGE),PORK"
 },
 {
   data: 7015,
   value: "BROTWURST,PORK,BF,LINK"
 },
 {
   data: 7016,
   value: "CHEESEFURTER,CHS SMOKIE,PORK,BF"
 },
 {
   data: 7017,
   value: "CHICKEN ROLL  LT MEAT"
 },
 {
   data: 7018,
   value: "CHICKEN SPRD"
 },
 {
   data: 7019,
   value: "CHORIZO,PORK AND BEEF"
 },
 {
   data: 7020,
   value: "CORNED BEEF LOAF,JELLIED"
 },
 {
   data: 7022,
   value: "FRANKFURTER,BF,UNHTD"
 },
 {
   data: 7023,
   value: "FRANKFURTER  BF & PORK"
 },
 {
   data: 7024,
   value: "FRANKFURTER,CHICK"
 },
 {
   data: 7025,
   value: "FRANKFURTER,TURKEY"
 },
 {
   data: 7026,
   value: "HAM,CHOPPED,CANNED"
 },
 {
   data: 7027,
   value: "HAM,CHOPPED,NOT CANNED"
 },
 {
   data: 7028,
   value: "HAM,SLICED,PREPACKAGED (96% FAT FREE,H2O ADDED)"
 },
 {
   data: 7029,
   value: "HAM,SLICED,REG (APPROX 11% FAT)"
 },
 {
   data: 7030,
   value: "HAM,MINCED"
 },
 {
   data: 7031,
   value: "HAM SALAD SPREAD"
 },
 {
   data: 7032,
   value: "HAM&CHS LOAF OR ROLL"
 },
 {
   data: 7033,
   value: "HAM AND CHEESE SPREAD"
 },
 {
   data: 7034,
   value: "HEADCHEESE,PORK"
 },
 {
   data: 7035,
   value: "HONEY LOAF  PORK  BF"
 },
 {
   data: 7036,
   value: "SAUSAGE,ITALIAN,PORK,RAW"
 },
 {
   data: 7037,
   value: "KIELBASA,KOLBASSY,PORK,BF,NONFAT DRY MILK"
 },
 {
   data: 7038,
   value: "KNACKWURST  KNOCKWURST  PORK  BF"
 },
 {
   data: 7039,
   value: "LEBANON BOLOGNA  BF"
 },
 {
   data: 7040,
   value: "LIVER CHEESE,PORK"
 },
 {
   data: 7041,
   value: "LIVER SAUSAGE,LIVERWURST,PORK"
 },
 {
   data: 7042,
   value: "LUNCHEON MEAT,BEEF,LOAVED"
 },
 {
   data: 7043,
   value: "LUNCHEON MEAT,BF,THIN SLICED"
 },
 {
   data: 7044,
   value: "USDA CMDTY,LUNCHEON MEAT,CND"
 },
 {
   data: 7045,
   value: "LUNCHEON MEAT,PORK,CANNED"
 },
 {
   data: 7046,
   value: "TURKEY BREAST,LO SALT,PREPACKAGED OR DELI,LUNCHEON MEAT"
 },
 {
   data: 7047,
   value: "LUNCHEON MEAT,PORK,BEEF"
 },
 {
   data: 7050,
   value: "MORTADELLA,BEEF,PORK"
 },
 {
   data: 7051,
   value: "OLIVE LOAF,PORK"
 },
 {
   data: 7052,
   value: "PASTRAMI,TURKEY"
 },
 {
   data: 7053,
   value: "PATE,CHICKEN LIVER,CANNED"
 },
 {
   data: 7054,
   value: "PATE,GOOSE LIVER,SMOKED,CND"
 },
 {
   data: 7055,
   value: "PATE,LIVER,NOT SPECIFIED,CND"
 },
 {
   data: 7056,
   value: "PEPPERED LOAF  PORK  BF"
 },
 {
   data: 7057,
   value: "PEPPERONI,PORK,BEEF"
 },
 {
   data: 7058,
   value: "PICKLE&PIMIENTO LOAF,PORK"
 },
 {
   data: 7059,
   value: "POLISH SAUSAGE,PORK"
 },
 {
   data: 7060,
   value: "LUXURY LOAF,PORK"
 },
 {
   data: 7061,
   value: "MOTHER'S LOAF,PORK"
 },
 {
   data: 7062,
   value: "PICNIC LOAF,PORK,BEEF"
 },
 {
   data: 7063,
   value: "PORK SAUSAGE,FRSH,RAW"
 },
 {
   data: 7064,
   value: "PORK SAUSAGE,FRSH,CKD"
 },
 {
   data: 7065,
   value: "PORK&BF SAUSAGE,FRSH,CKD"
 },
 {
   data: 7066,
   value: "TURKEY SAUSAGE,RED FAT,BROWN&SERVE,CKD"
 },
 {
   data: 7067,
   value: "POULTRY SALAD SNDWCH SPRD"
 },
 {
   data: 7068,
   value: "SALAMI  CKD  BF"
 },
 {
   data: 7069,
   value: "SALAMI,CKD,BF&PORK"
 },
 {
   data: 7070,
   value: "SALAMI,COOKED,TURKEY"
 },
 {
   data: 7071,
   value: "SALAMI,DRY OR HARD,PORK"
 },
 {
   data: 7072,
   value: "SALAMI,DRY OR HARD,PORK,BF"
 },
 {
   data: 7073,
   value: "SANDWICH SPREAD,PORK,BEEF"
 },
 {
   data: 7074,
   value: "SMOKED LINK SAUSAGE,PORK"
 },
 {
   data: 7075,
   value: "SAUSAGE,SMOKED LINK SAUSAGE,PORK & BF"
 },
 {
   data: 7076,
   value: "SMOKED LINK SAUSAGE,PORK&BF,FLR&NONFAT DRY MILK"
 },
 {
   data: 7077,
   value: "SMOKED LINK SAUSAGE,PORK&BF,NONFAT DRY MILK"
 },
 {
   data: 7078,
   value: "THURINGER,CERVELAT,SMMR SAUSAGE,BF,PORK"
 },
 {
   data: 7079,
   value: "TURKEY BREAST,SLICED,OVEN RSTD,LUNCHEON MEAT"
 },
 {
   data: 7080,
   value: "TURKEY HAM,CURED TURKEY THIGH MEAT"
 },
 {
   data: 7081,
   value: "TURKEY BREAST,SLICED,PREPACKAGED"
 },
 {
   data: 7082,
   value: "TURKEY ROLL,LT&DK MEAT"
 },
 {
   data: 7083,
   value: "SAUSAGE,VIENNA,CND,CHICK,BF,PORK"
 },
 {
   data: 7088,
   value: "HONEY ROLL SAUSAGE,BEEF"
 },
 {
   data: 7089,
   value: "SAUSAGE,ITALIAN,PORK,CKD"
 },
 {
   data: 7090,
   value: "LUNCHEON SAUSAGE,PORK&BF"
 },
 {
   data: 7091,
   value: "NEW ENGLAND BRAND SAUSAGE,PORK,BF"
 },
 {
   data: 7200,
   value: "OSCAR MAYER,BOLOGNA (CHICK,PORK,BF)"
 },
 {
   data: 7201,
   value: "OSCAR MAYER,BOLOGNA (BEEF)"
 },
 {
   data: 7202,
   value: "OSCAR MAYER,BOLOGNA (BEEF LIGHT)"
 },
 {
   data: 7203,
   value: "OSCAR MAYER,BOLOGNA (FAT FREE)"
 },
 {
   data: 7205,
   value: "OSCAR MAYER  BOLOGNA LIGHT (PORK  CHICK  BEEF)"
 },
 {
   data: 7206,
   value: "OSCAR MAYER. BOLOGNA (WISCONSIN MADE RING)"
 },
 {
   data: 7207,
   value: "OSCAR MAYER,BRAUNSCHWEIGER LIVER SAUSAGE (SLICED)"
 },
 {
   data: 7208,
   value: "OSCAR MAYER,BRAUNSCHWEIGER LIVER SAUSAGE (SAREN TUBE)"
 },
 {
   data: 7209,
   value: "OSCAR MAYER  CHICKEN BREAST (HONEY GLAZED)"
 },
 {
   data: 7210,
   value: "OSCAR MAYER,CHICK BREAST (OVEN RSTD,FAT FREE)"
 },
 {
   data: 7211,
   value: "OSCAR MAYER  HAM & CHEESE LOAF"
 },
 {
   data: 7212,
   value: "OSCAR MAYER,HAM (CHOPPED W/ NAT JUICE)"
 },
 {
   data: 7213,
   value: "OSCAR MAYER  HAM (WATER ADDED  BKD CKD 96% FAT FREE)"
 },
 {
   data: 7214,
   value: "OSCAR MAYER,HAM (H2O ,BLD)"
 },
 {
   data: 7215,
   value: "OSCAR MAYER,HAM (H2O ,HONEY)"
 },
 {
   data: 7216,
   value: "OSCAR MAYER,HAM (H2O ,SMOKED,CKD)"
 },
 {
   data: 7217,
   value: "OSCAR MAYER,HAM (40%HAM/WATER PRODUCT,SMOKED,FAT FREE)"
 },
 {
   data: 7218,
   value: "OSCAR MAYER,HEAD CHEESE"
 },
 {
   data: 7220,
   value: "OSCAR MAYER,LIVER CHS,PORK FAT WRAPPED"
 },
 {
   data: 7221,
   value: "OSCAR MAYER,LUNCHEON LOAF (SPICED)"
 },
 {
   data: 7222,
   value: "OSCAR MAYER,OLD FASHIONED LOAF"
 },
 {
   data: 7223,
   value: "OSCAR MAYER,OLIVE LOAF (CHICK,PORK,TURKEY)"
 },
 {
   data: 7224,
   value: "OSCAR MAYER,PICKLE PIMIENTO LOAF (W/CHICK)"
 },
 {
   data: 7225,
   value: "OSCAR MAYER,PORK SAUSAGE LINKS (CKD)"
 },
 {
   data: 7226,
   value: "OSCAR MAYER,SALAMI BF COTTO"
 },
 {
   data: 7227,
   value: "OSCAR MAYER,SALAMI COTTO (BF,PORK,CHICK)"
 },
 {
   data: 7228,
   value: "OSCAR MAYER,SALAMI (FOR BEER)"
 },
 {
   data: 7229,
   value: "OSCAR MAYER,SALAMI (GENOA)"
 },
 {
   data: 7230,
   value: "OSCAR MAYER,SALAMI (HARD)"
 },
 {
   data: 7231,
   value: "OSCAR MAYER,SNDWCH SPRD (PORK,CHICK,BF)"
 },
 {
   data: 7232,
   value: "OSCAR MAYER,SMOKIE LINKS SAUSAGE"
 },
 {
   data: 7233,
   value: "OSCAR MAYER  SMOKIES (BEEF)"
 },
 {
   data: 7234,
   value: "OSCAR MAYER,SMOKIES (CHS)"
 },
 {
   data: 7235,
   value: "OSCAR MAYER,SMOKIES SAUSAGE LITTLE (PORK,TURKEY)"
 },
 {
   data: 7236,
   value: "OSCAR MAYER,SMOKIES SAUSAGE LITTLE CHS (PORK,TURKEY)"
 },
 {
   data: 7237,
   value: "OSCAR MAYER,SMMR SAUSAGE BF THURINGER CERVELAT"
 },
 {
   data: 7238,
   value: "OSCAR MAYER,SMMR SAUSAGE THURINGER CERVALAT"
 },
 {
   data: 7239,
   value: "OSCAR MAYER,TURKEY BREAST (SMOKED,FAT FREE)"
 },
 {
   data: 7240,
   value: "OSCAR MAYER,WIENERS (PORK,TURKEY)"
 },
 {
   data: 7241,
   value: "OSCAR MAYER,WIENERS (BEEF FRANKS)"
 },
 {
   data: 7242,
   value: "OSCAR MAYER  WIENERS (BEEF FRANKS  BUN LENGTH)"
 },
 {
   data: 7243,
   value: "OSCAR MAYER,WIENERS (BEEF FRANKS,FAT FREE)"
 },
 {
   data: 7244,
   value: "OSCAR MAYER,WIENERS (BEEF FRANKS,LIGHT)"
 },
 {
   data: 7245,
   value: "OSCAR MAYER,WIENERS (CHEESE HOT DOGS W/ TURKEY)"
 },
 {
   data: 7246,
   value: "OSCAR MAYER,WIENERS (FAT FREE HOT DOGS)"
 },
 {
   data: 7247,
   value: "OSCAR MAYER,WIENERS (LIGHT PORK,TURKEY,BEEF)"
 },
 {
   data: 7248,
   value: "OSCAR MAYER,WIENERS LITTLE (PORK,TURKEY)"
 },
 {
   data: 7249,
   value: "LOUIS RICH,CHICK BREAST CLASSIC BKD /GRILL (CARVING BOARD)"
 },
 {
   data: 7250,
   value: "LOUIS RICH,CHICK BREAST (OVEN RSTD DELUXE)"
 },
 {
   data: 7251,
   value: "LOUIS RICH,CHICK (WHITE,OVEN RSTD)"
 },
 {
   data: 7252,
   value: "LOUIS RICH,FRANKS (TURKEY & CHICK CHEESE)"
 },
 {
   data: 7253,
   value: "LOUIS RICH,FRANKS (TURKEY & CHICKEN)"
 },
 {
   data: 7254,
   value: "LOUIS RICH  TURKEY BACON"
 },
 {
   data: 7255,
   value: "LOUIS RICH,TURKEY BOLOGNA"
 },
 {
   data: 7256,
   value: "LOUIS RICH,TURKEY BREAST & WHITE TURKEY (OVEN ROASTED)"
 },
 {
   data: 7257,
   value: "LOUIS RICH,TURKEY BREAST&WHITE TURKEY (SMOKED SLICED)"
 },
 {
   data: 7258,
   value: "LOUIS RICH,TURKEY (HONEY RSTD,FAT FREE)"
 },
 {
   data: 7259,
   value: "LOUIS RICH,TURKEY BREAST (OVEN RSTD,FAT FREE)"
 },
 {
   data: 7260,
   value: "LOUIS RICH,TURKEY BREAST (OVEN RSTD,PORTION FAT FREE)"
 },
 {
   data: 7261,
   value: "LOUIS RICH,TURKEY BREAST (SMOKED,CARVING BOARD)"
 },
 {
   data: 7262,
   value: "LOUIS RICH,TURKEY BREAST (SMOKED,PORTION FAT FREE)"
 },
 {
   data: 7264,
   value: "LOUIS RICH,TURKEY HAM (10% H2O)"
 },
 {
   data: 7265,
   value: "LOUIS RICH,TURKEY NUGGETS/STICKS (BREADED)"
 },
 {
   data: 7266,
   value: "LOUIS RICH,TURKEY SALAMI"
 },
 {
   data: 7267,
   value: "LOUIS RICH,TURKEY SALAMI COTTO"
 },
 {
   data: 7268,
   value: "LOUIS RICH,TURKEY SMOKED SAUSAGE"
 },
 {
   data: 7269,
   value: "BUTCHER BOY MEATS,INC.,TURKEY FRANKS"
 },
 {
   data: 7270,
   value: "CARL BUDDIG,CKD CORNED BF,CHOPD,PRESSED"
 },
 {
   data: 7271,
   value: "CARL BUDDIG,SMOKED SLICED CHICK,LT&DK MEAT"
 },
 {
   data: 7272,
   value: "CARL BUDDIG,SMOKED SLICED BF"
 },
 {
   data: 7273,
   value: "CARL BUDDIG,SMOKED SLICED TURKEY,LT&DK MEAT"
 },
 {
   data: 7274,
   value: "CARL BUDDIG. CKD SMOKED BF PASTRAMI,CHOPD,PRESSED"
 },
 {
   data: 7275,
   value: "CARL BUDDIG,SMOKED SLICED HAM"
 },
 {
   data: 7276,
   value: "HORMEL SPAM  LUNCHEON MEAT  PORK W/ HAM  MINCED  CND"
 },
 {
   data: 7277,
   value: "HORMEL SPAM,LT LUNCH MT,PORK & CHICK,MINCED,CND,VIT C ADDED"
 },
 {
   data: 7278,
   value: "HORMEL PILLOW PAK SLICED TURKEY PEPPERONI"
 },
 {
   data: 7279,
   value: "HORMEL WRANGLER BEEF FRANKS"
 },
 {
   data: 7900,
   value: "TURKEY,PORK,&BF SAUSAGE,LOFAT,SMOKED"
 },
 {
   data: 7901,
   value: "USDA COMMODITY,PORK,SAUSAGE,BULK/LINKS/PATTIES,FRZ,CKD"
 },
 {
   data: 7905,
   value: "FRANKFURTER,BF,PORK,& TURKEY,FAT FREE"
 },
 {
   data: 7906,
   value: "LUNCHEON MEAT,PORK,HAM,&CHICK,MINCD,CND,RED NA,VIT C, (SPAM)"
 },
 {
   data: 7907,
   value: "USDA COMMODITY,PORK SAUSAGE,BULK/LINKS/PATTIES,FRZ,RAW"
 },
 {
   data: 7908,
   value: "LUNCHEON MEAT,PORK W/HAM,MINCED,CND,INCL SPAM (HORMEL)"
 },
 {
   data: 7909,
   value: "LUNCHEON MEAT,PORK&CHICK,MINCED,CND,INCL SPAM LITE"
 },
 {
   data: 7910,
   value: "BRATWURST  VEAL  CKD"
 },
 {
   data: 7911,
   value: "LIVERWURST SPRD"
 },
 {
   data: 7912,
   value: "ROAST BF SPRD"
 },
 {
   data: 7913,
   value: "SALAMI  PORK  BF  LESS NA"
 },
 {
   data: 7914,
   value: "SAUSAGE  ITALIAN  SWT  LINKS"
 },
 {
   data: 7915,
   value: "SAUSAGE  POLISH  BF W/ CHICK  HOT"
 },
 {
   data: 7916,
   value: "SAUSAGE  POLISH  PORK & BF  SMOKED"
 },
 {
   data: 7917,
   value: "SAUSAGE  PORK & BF  W/ CHEDDAR CHS  SMOKED"
 },
 {
   data: 7918,
   value: "SAUSAGE  SMMR  PORK & BF  STKS  W/ CHEDDAR CHS"
 },
 {
   data: 7919,
   value: "SAUSAGE  TURKEY  BRKFST LINKS  MILD"
 },
 {
   data: 7920,
   value: "SWISSWURST  PORK & BF  W/ SWISS CHS  SMOKED"
 },
 {
   data: 7921,
   value: "BACON & BF STKS"
 },
 {
   data: 7922,
   value: "BRATWURST  BF & PORK  SMOKED"
 },
 {
   data: 7923,
   value: "BRATWURST,CHICK,CKD"
 },
 {
   data: 7924,
   value: "BRATWURST  PORK  BF & TURKEY  LITE  SMOKED"
 },
 {
   data: 7925,
   value: "PASTRAMI  BF  98% FAT-FREE"
 },
 {
   data: 7926,
   value: "SALAMI  ITALIAN  PORK"
 },
 {
   data: 7927,
   value: "SAUSAGE  ITALIAN  TURKEY  SMOKED"
 },
 {
   data: 7928,
   value: "SAUSAGE  CHICK  BF  PORK  SKINLESS  SMOKED"
 },
 {
   data: 7929,
   value: "SAUSAGE  TURKEY  HOT  SMOKED"
 },
 {
   data: 7930,
   value: "YACHTWURST,W/ PISTACHIO NUTS,CKD"
 },
 {
   data: 7931,
   value: "BEERWURST  PORK & BF"
 },
 {
   data: 7932,
   value: "CHICKEN BREAST  FAT-FREE  MESQ FLAVOR  SLICED"
 },
 {
   data: 7933,
   value: "CHICKEN BREAST  OVEN-ROASTED  FAT-FREE  SLICED"
 },
 {
   data: 7934,
   value: "KIELBASA,POLISH,TURKEY & BF,SMOKED"
 },
 {
   data: 7935,
   value: "OVEN-ROASTED CHICK BREAST ROLL"
 },
 {
   data: 7936,
   value: "BOLOGNA  PORK & TURKEY  LITE"
 },
 {
   data: 7937,
   value: "BOLOGNA  PORK  TURKEY & BF"
 },
 {
   data: 7938,
   value: "HAM  HONEY  SMOKED  CKD"
 },
 {
   data: 7939,
   value: "FRANKFURTER,PORK"
 },
 {
   data: 7940,
   value: "MACARONI & CHS LOAF  CHICK  PORK & BF"
 },
 {
   data: 7941,
   value: "SALAMI  ITALIAN  PORK & BF  DRY  SLICED  50% LESS NA"
 },
 {
   data: 7942,
   value: "PATE  TRUFFLE FLAVOR"
 },
 {
   data: 7943,
   value: "TURKEY,BREAST,SMOKED,LEMON PEPPER FLAVOR,97% FAT-FREE"
 },
 {
   data: 7944,
   value: "TURKEY  WHITE  ROTISSERIE  DELI CUT"
 },
 {
   data: 7945,
   value: "FRANKFURTER  BF  HTD"
 },
 {
   data: 7949,
   value: "FRANKFURTER  MEAT  HTD"
 },
 {
   data: 7950,
   value: "FRANKFURTER  MEAT"
 },
 {
   data: 7951,
   value: "SCRAPPLE,PORK"
 },
 {
   data: 7952,
   value: "BOLOGNA,CHICK,TURKEY,PORK"
 },
 {
   data: 7953,
   value: "PORK SAUSAGE,PRE-COOKED"
 },
 {
   data: 7954,
   value: "BEEF SAUSAGE,PRE-COOKED"
 },
 {
   data: 7955,
   value: "TURKEY SAUSAGE,FRSH,RAW"
 },
 {
   data: 7956,
   value: "BEEF SAUSAGE,FRSH,CKD"
 },
 {
   data: 7957,
   value: "PORK & TURKEY SAUSAGE,PRE-COOKED"
 },
 {
   data: 7958,
   value: "TURKEY SAUSAGE,FRSH,CKD"
 },
 {
   data: 7959,
   value: "BOLOGNA,CHICK,PORK,BF"
 },
 {
   data: 7960,
   value: "BOLOGNA,CHICK,PORK"
 },
 {
   data: 7961,
   value: "CHICKEN BREAST,DELI,ROTISSERIE SEASONED,SLICED,PREPACKAGED"
 },
 {
   data: 8001,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S ALL-BRAN ORIGINAL"
 },
 {
   data: 8002,
   value: "CEREALS RTE,POST,ALPHA-BITS"
 },
 {
   data: 8003,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S APPL JACKS"
 },
 {
   data: 8005,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S ALL-BRAN BRAN BUDS"
 },
 {
   data: 8010,
   value: "CEREALS RTE,QUAKER,CAP'N CRUNCH"
 },
 {
   data: 8011,
   value: "CEREALS RTE,QUAKER,CAP'N CRUNCH W/ CRUNCHBERRIES"
 },
 {
   data: 8012,
   value: "CEREALS RTE,QUAKER,CAP'N CRUNCH'S PNUT BUTTER CRUNCH"
 },
 {
   data: 8013,
   value: "CEREALS RTE,GENERAL MILLS,CHEERIOS"
 },
 {
   data: 8014,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S COCOA KRISPIES"
 },
 {
   data: 8015,
   value: "CEREALS RTE,POST,COCOA PEBBLES"
 },
 {
   data: 8017,
   value: "CEREALS RTE,GENERAL MILLS,COOKIE CRISP"
 },
 {
   data: 8018,
   value: "CEREALS RTE,QUAKER,QUAKER CRUNCHY BRAN"
 },
 {
   data: 8019,
   value: "CEREALS RTE,GENERAL MILLS CORN CHEX"
 },
 {
   data: 8020,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S CORN FLAKES"
 },
 {
   data: 8022,
   value: "CEREALS RTE,CORN FLAKES,LO NA"
 },
 {
   data: 8023,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S CRACKLIN' OAT BRAN"
 },
 {
   data: 8025,
   value: "CEREALS RTE,RALSTON CRISPY RICE"
 },
 {
   data: 8028,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S ALL-BRAN COMPLETE WHEAT FLAKES"
 },
 {
   data: 8029,
   value: "CEREALS RTE,BRAN FLAKES,SINGLE BRAND"
 },
 {
   data: 8030,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S FROOT LOOPS"
 },
 {
   data: 8031,
   value: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS,BIG BITE"
 },
 {
   data: 8032,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S FRSTD RICE KRISPIES"
 },
 {
   data: 8034,
   value: "CEREALS RTE,POST,FRUITY PEBBLES"
 },
 {
   data: 8035,
   value: "CEREALS RTE,GENERAL MILLS,GOLDEN GRAHAMS"
 },
 {
   data: 8037,
   value: "CEREALS RTE,GRANOLA,HOMEMADE"
 },
 {
   data: 8038,
   value: "CEREALS RTE,POST,GRAPE-NUTS CRL"
 },
 {
   data: 8039,
   value: "CEREALS RTE,POST,GRAPE-NUTS FLAKES"
 },
 {
   data: 8045,
   value: "CEREALS RTE,GENERAL MILLS,HONEY NUT CHEERIOS"
 },
 {
   data: 8046,
   value: "CEREALS RTE,POST,HONEYCOMB CRL"
 },
 {
   data: 8047,
   value: "CEREALS RTE,QUAKER,KING VITAMAN"
 },
 {
   data: 8048,
   value: "CEREALS RTE,GENERAL MILLS,KIX"
 },
 {
   data: 8049,
   value: "CEREALS RTE,QUAKER,QUAKER OAT LIFE,PLN"
 },
 {
   data: 8050,
   value: "CEREALS RTE,GENERAL MILLS,LUCKY CHARMS"
 },
 {
   data: 8054,
   value: "CEREALS RTE,QUAKER,100% NAT GRANOLA,OATS,WHEAT & HONEY"
 },
 {
   data: 8057,
   value: "CEREALS RTE,GENERAL MILLS,HONEY NUT CHEX"
 },
 {
   data: 8058,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S PRODUCT 19"
 },
 {
   data: 8059,
   value: "CEREALS RTE,QUAKER,SWT CRUNCH/QUISP"
 },
 {
   data: 8060,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S RAISIN BRAN"
 },
 {
   data: 8061,
   value: "CEREALS RTE,POST RAISIN BRAN CRL"
 },
 {
   data: 8064,
   value: "CEREALS RTE,GENERAL MILLS,RICE CHEX"
 },
 {
   data: 8065,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S RICE KRISPIES"
 },
 {
   data: 8066,
   value: "CEREALS RTE,QUAKER,QUAKER PUFFED RICE"
 },
 {
   data: 8067,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K"
 },
 {
   data: 8068,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S CORN POPS"
 },
 {
   data: 8069,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S FRSTD FLAKES"
 },
 {
   data: 8071,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S HONEY SMACKS"
 },
 {
   data: 8073,
   value: "CEREALS RTE,POST,GOLDEN CRISP"
 },
 {
   data: 8074,
   value: "CEREALS RTE,RALSTON TASTEEOS"
 },
 {
   data: 8076,
   value: "CEREALS RTE,POST TOASTIES CORN FLAKES"
 },
 {
   data: 8077,
   value: "CEREALS RTE,GENERAL MILLS,WHL GRAIN TOTAL"
 },
 {
   data: 8078,
   value: "CEREALS RTE,GENERAL MILLS,TRIX"
 },
 {
   data: 8079,
   value: "CEREALS RTE,WAFFELOS"
 },
 {
   data: 8081,
   value: "CEREALS RTE,POST,HONEY NUT SHREDDED WHEAT"
 },
 {
   data: 8082,
   value: "CEREALS RTE,GENERAL MILLS,WHEAT CHEX"
 },
 {
   data: 8083,
   value: "CEREALS RTE,MALT-O-MEAL,CORN BURSTS"
 },
 {
   data: 8084,
   value: "CEREALS RTE,WHEAT GERM,TSTD,PLN"
 },
 {
   data: 8085,
   value: "CEREALS RTE,SUN COUNTRY,KRETSCHMER HONEY CRUNCH WHEAT GERM"
 },
 {
   data: 8087,
   value: "CEREALS RTE,GENERAL MILLS,MULTI-GRAIN CHEERIOS"
 },
 {
   data: 8089,
   value: "CEREALS RTE,GENERAL MILLS,WHEATIES"
 },
 {
   data: 8090,
   value: "CEREALS,CORN GRITS,WHITE,REG & QUICK,ENR,DRY"
 },
 {
   data: 8091,
   value: "CEREALS,CORN GRITS,WHITE,REG & QUICK,ENR,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8092,
   value: "CEREALS,QUAKER,CORN GRITS,INST,PLN,DRY"
 },
 {
   data: 8093,
   value: "CEREALS,QUAKER,CORN GRITS,INST,PLN,PREP,WO/ SALT"
 },
 {
   data: 8094,
   value: "CEREALS,QUAKER,CORN GRITS,INST,CHEDDAR CHS FLAVOR,DRY"
 },
 {
   data: 8096,
   value: "CEREALS,QUAKER,CORN GRITS,INST,W/IMITN BACON BITS,DRY"
 },
 {
   data: 8100,
   value: "CEREALS,CRM OF RICE,DRY"
 },
 {
   data: 8101,
   value: "CEREALS,CRM OF RICE,CKD W/H2O,WO/SALT"
 },
 {
   data: 8102,
   value: "CEREALS,CRM OF WHEAT,REG,10 MINUTE COOKING,DRY"
 },
 {
   data: 8103,
   value: "CEREALS,CRM OF WHEAT,REG (10 MINUTE),CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8104,
   value: "CEREALS,FARINA,ENR,ASSORTED BRANDS,DRY"
 },
 {
   data: 8105,
   value: "CEREALS,FARINA,ENR,ASSORTED BRANDS,QUICK,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8106,
   value: "CEREALS,CREAM OF WHEAT,INST,DRY"
 },
 {
   data: 8107,
   value: "CEREALS,CREAM OF WHEAT,INST,PREP W/ H2O,WO/ SALT"
 },
 {
   data: 8108,
   value: "CEREALS,CREAM OF WHEAT,MIX'N EAT,PLN,DRY"
 },
 {
   data: 8109,
   value: "CEREALS,CREAM OF WHEAT,MIX'N EAT,PLN,PREP W/ H2O"
 },
 {
   data: 8110,
   value: "CEREALS,CRM OF WHEAT,MIX'N EAT,APPL,BANANA&MAPLE FLAV,DRY"
 },
 {
   data: 8111,
   value: "CEREALS,CRM OF WHEAT,MIX'N EAT,APPL,BANANA&MAPLE FLAV,PREP"
 },
 {
   data: 8113,
   value: "CEREALS,FARINA,ENR,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8114,
   value: "CEREALS,MALTEX,DRY"
 },
 {
   data: 8115,
   value: "CEREALS,MALTEX,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8116,
   value: "CEREALS,MALT-O-MEAL,PLN,DRY"
 },
 {
   data: 8118,
   value: "CEREALS,MAYPO,DRY"
 },
 {
   data: 8119,
   value: "CEREALS,MAYPO,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8120,
   value: "CEREALS,OATS,REG & QUICK,NOT FORT,DRY"
 },
 {
   data: 8121,
   value: "CEREALS,OATS,REG & QUICK,UNENR,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8122,
   value: "CEREALS,OATS,INST,FORT,PLN,DRY"
 },
 {
   data: 8123,
   value: "CEREALS,OATS,INST,FORT,PLN,PREP W/ H2O"
 },
 {
   data: 8124,
   value: "CEREALS,QUAKER,INST OATMEAL,APPLS & CINN,DRY"
 },
 {
   data: 8128,
   value: "CEREALS,OATS,INST,FORT,W/ CINN & SPICE,DRY"
 },
 {
   data: 8129,
   value: "CEREALS,OATS,INST,FORT,W/ CINN & SPICE,PREP W/ H2O"
 },
 {
   data: 8130,
   value: "CEREALS,QUAKER,INST OATMEAL,MAPLE & BROWN SUGAR,DRY"
 },
 {
   data: 8132,
   value: "CEREALS,OATS,INST,FORT,W/ RAISINS & SPICE,DRY"
 },
 {
   data: 8133,
   value: "CEREALS,OATS,INST,FORT,W/ RAISINS & SPICE,PREP W/ H2O"
 },
 {
   data: 8134,
   value: "CEREALS,RALSTON,DRY"
 },
 {
   data: 8135,
   value: "CEREALS,RALSTON,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8136,
   value: "CEREALS,ROMAN MEAL,PLN,DRY"
 },
 {
   data: 8137,
   value: "CEREALS,ROMAN MEAL,PLN,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8138,
   value: "CEREALS RTE,MALT-O-MEAL,MARSHMLLW MATEYS"
 },
 {
   data: 8142,
   value: "CEREALS,WHEATENA,DRY"
 },
 {
   data: 8143,
   value: "CEREALS,WHEATENA,CKD W/ H2O"
 },
 {
   data: 8144,
   value: "CEREALS,WHL WHEAT HOT NAT CRL,DRY"
 },
 {
   data: 8145,
   value: "CEREALS,WHL WHEAT HOT NAT CRL,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8146,
   value: "CEREALS RTE,QUAKER,QUAKER PUFFED WHEAT"
 },
 {
   data: 8147,
   value: "CEREALS RTE,WHEAT,SHREDDED,PLN,SUGAR & SALT FREE"
 },
 {
   data: 8148,
   value: "CEREALS RTE,POST,SHREDDED WHEAT,SPOON-SIZE"
 },
 {
   data: 8155,
   value: "CEREALS,ROMAN MEAL WITH OATS,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8156,
   value: "CEREALS RTE,RICE,PUFFED,FORT"
 },
 {
   data: 8157,
   value: "CEREALS RTE,WHEAT,PUFFED,FORT"
 },
 {
   data: 8158,
   value: "CEREALS,CORN GRITS,WHITE,REG & QUICK,UNENR,DRY"
 },
 {
   data: 8159,
   value: "CEREALS,CORN GRITS,YEL,REG & QUICK,ENR,DRY"
 },
 {
   data: 8160,
   value: "CEREALS,CORN GRITS,YEL,REG & QUICK,UNENR,DRY"
 },
 {
   data: 8161,
   value: "CEREALS,CORN GRITS,WHITE,REG & QUICK,ENR,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8162,
   value: "CEREALS,CORN GRITS,WHITE,REG & QCK,UNENR,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8163,
   value: "CEREALS,CORN GRITS,WHITE,REG,QUICK,UNENR,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8164,
   value: "CEREALS,CORN GRITS,YEL,REG & QUICK,ENR,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8165,
   value: "CEREALS,CORN GRITS,YEL,REG,QUICK,ENR,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8166,
   value: "CEREALS,CORN GRITS,YEL,REG & QUICK,UNENR,CKD W/ H2O,WO/ SALT"
 },
 {
   data: 8167,
   value: "CEREALS,CORN GRITS,YEL,REG,QUICK,UNENR,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8168,
   value: "CEREALS,CREAM OF RICE,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8169,
   value: "CEREALS,CRM OF WHEAT,REG (10 MINUTE),CKD W/ H2O,W/ SALT"
 },
 {
   data: 8172,
   value: "CEREALS,FARINA,UNENR,DRY"
 },
 {
   data: 8173,
   value: "CEREALS,FARINA,ENR,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8176,
   value: "CEREALS,MALTEX,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8177,
   value: "CEREALS,MALT-O-MEAL,CHOC,DRY"
 },
 {
   data: 8179,
   value: "CEREALS,MAYPO,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8180,
   value: "CEREALS,OATS,REG & QUICK & INST,UNENR,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8181,
   value: "CEREALS,ROMAN MEAL,PLN,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8182,
   value: "CEREALS,WHEATENA,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8183,
   value: "CEREALS,WHL WHEAT HOT NAT CRL,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8184,
   value: "CEREALS,ROMAN MEAL WITH OATS,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8185,
   value: "CEREALS,RALSTON,CKD W/ H2O,W/ SALT"
 },
 {
   data: 8189,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S LOFAT GRANOLA WO/ RAISINS"
 },
 {
   data: 8191,
   value: "CEREALS RTE,POST,SHREDDED WHEAT,LIGHTLY FRSTD,SPOON-SIZE"
 },
 {
   data: 8192,
   value: "CEREALS RTE,POST BLUEBERRY MORNING"
 },
 {
   data: 8194,
   value: "CEREALS RTE,GENERAL MILLS,REESE'S PUFFS"
 },
 {
   data: 8200,
   value: "CEREALS,QUAKER,QUAKER MULTIGRAIN OATMEAL,DRY"
 },
 {
   data: 8202,
   value: "CEREALS RTE,GENERAL MILLS,OATMEAL CRISP,CRUNCHY ALMOND"
 },
 {
   data: 8204,
   value: "CEREALS RTE,CHOCOLATE-FLAVORED FRSTD PUFFED CORN"
 },
 {
   data: 8206,
   value: "CEREALS RTE,MALT-O-MEAL,COCO-ROOS"
 },
 {
   data: 8210,
   value: "CEREALS RTE,QUAKER,QUAKER OAT CINN LIFE"
 },
 {
   data: 8211,
   value: "CEREALS RTE,QUAKER,HONEY GRAHAM OH!S"
 },
 {
   data: 8212,
   value: "CEREALS RTE,QUAKER,SUN COUNTRY GRANOLA W/ ALMONDS"
 },
 {
   data: 8214,
   value: "CEREALS RTE,QUAKER,QUAKER OATMEAL SQUARES"
 },
 {
   data: 8215,
   value: "CEREALS RTE,QUAKER,QUAKER CINN OATMEAL SQUARES"
 },
 {
   data: 8216,
   value: "CEREALS RTE,QUAKER,QUAKER OAT BRAN CRL"
 },
 {
   data: 8218,
   value: "CEREALS RTE,QUAKER,QUAKER GRANOLA W/ OATS,WHEAT& RAISINS"
 },
 {
   data: 8220,
   value: "CEREALS RTE,QUAKER,LOFAT 100% NAT GRANOLA W/ RAISINS"
 },
 {
   data: 8221,
   value: "CEREALS,QUAKER,CORN GRITS,INST,BUTTER FLAVOR,DRY"
 },
 {
   data: 8225,
   value: "CEREALS,QUAKER,INST OATMEAL,FRUIT & CRM VAR,DRY"
 },
 {
   data: 8228,
   value: "CEREALS,QUAKER,INST OATMEAL,RAISINS,DATES & WALNUTS,DRY"
 },
 {
   data: 8230,
   value: "CEREALS,QUAKER,FARINA,CREAMY WHEAT,ENR,DRY"
 },
 {
   data: 8231,
   value: "CEREALS,QUAKER,OAT BRAN,QUAKER/MOTHER'S OAT BRAN,DRY"
 },
 {
   data: 8232,
   value: "CEREALS,QUAKER,SCOTCH BARLEY,REG&QUICK,DRY"
 },
 {
   data: 8236,
   value: "CEREALS,QKR,OAT BRAN,PREP W/H2O,NO SALT"
 },
 {
   data: 8237,
   value: "CEREALS,QUAKER,CREAMY WHEAT,FARINA,ENR,PREP W/H2O,NO SALT"
 },
 {
   data: 8239,
   value: "CEREALS RTE,GENERAL MILLS,BERRY BURST CHEERIOS,TRIPLE BERRY"
 },
 {
   data: 8240,
   value: "CEREALS,OAT BRAN,QKR,QKR/MOTHER'S OAT BRAN,PREP W/H2O,SALT"
 },
 {
   data: 8241,
   value: "CEREALS,QUAKER,CREAMY WHEAT,FARINA,ENR,PREP W/H2O,SALT"
 },
 {
   data: 8243,
   value: "CEREALS RTE,GENERAL MILLS,HONEY NUT CLUSTERS"
 },
 {
   data: 8244,
   value: "CEREALS RTE,GENERAL MILLS,FIBER ONE BRAN CRL"
 },
 {
   data: 8245,
   value: "CEREALS RTE,GENERAL MILLS,OATMEAL CRISP HEARTY RAISIN"
 },
 {
   data: 8247,
   value: "CEREALS RTE,GENERAL MILLS,TOTAL RAISIN BRAN"
 },
 {
   data: 8249,
   value: "CEREALS,QUAKER,QUAKER MULTIGRAIN OATMEAL,PREP W/H2O,NO SALT"
 },
 {
   data: 8252,
   value: "CEREALS,QUAKER,QUAKER MULTIGRAIN OATMEAL,PREP W/H2O,SALT"
 },
 {
   data: 8259,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S CRISPIX"
 },
 {
   data: 8261,
   value: "CEREALS RTE,GENERAL MILLS,RAISIN NUT BRAN"
 },
 {
   data: 8262,
   value: "CEREALS RTE,GENERAL MILLS,BASIC 4"
 },
 {
   data: 8263,
   value: "CEREALS RTE,GENERAL MILLS,APPL CINN CHEERIOS"
 },
 {
   data: 8267,
   value: "CEREALS RTE,GENERAL MILLS,FRSTD CHEERIOS"
 },
 {
   data: 8268,
   value: "CEREALS RTE,GENERAL MILLS,FRANKENBERRY"
 },
 {
   data: 8270,
   value: "CEREALS RTE,GENERAL MILLS,COUNT CHOCULA"
 },
 {
   data: 8271,
   value: "CEREALS RTE,GENERAL MILLS,COCOA PUFFS"
 },
 {
   data: 8272,
   value: "CEREALS RTE,GENERAL MILLS,CINN TOAST CRUNCH"
 },
 {
   data: 8273,
   value: "CEREALS RTE,GENERAL MILLS,BOO BERRY"
 },
 {
   data: 8274,
   value: "CEREALS RTE,GENERAL MILLS,BERRY BERRY KIX"
 },
 {
   data: 8277,
   value: "CEREALS RTE,GENERAL MILLS,NATURE VALLEY LOFAT FRUIT GRANOLA"
 },
 {
   data: 8284,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S LOFAT GRANOLA W/ RAISINS"
 },
 {
   data: 8286,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S MUESLIX"
 },
 {
   data: 8288,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S RICE KRISPIES TREATS CRL"
 },
 {
   data: 8290,
   value: "CEREALS RTE,HEALTH VALLEY,FIBER 7 FLAKES"
 },
 {
   data: 8305,
   value: "CEREALS RTE,OAT,CORN&WHEAT SQUARES,PRESWEETENED,MAPLE FLAV"
 },
 {
   data: 8309,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S HONEY CRUNCH CORN FLAKES"
 },
 {
   data: 8314,
   value: "CEREALS,QUAKER,HOMINY GRITS,WHITE,QUICK,DRY"
 },
 {
   data: 8316,
   value: "CEREALS,QUAKER,HOMINY GRITS,WHITE,REG,DRY"
 },
 {
   data: 8317,
   value: "CEREALS,QUAKER,FARINA,ENR CINN FLAVOR,DRY"
 },
 {
   data: 8318,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S SMART START ANTIOXIDANTS CRL"
 },
 {
   data: 8319,
   value: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS,BITE SZE & LTL BITES"
 },
 {
   data: 8345,
   value: "CEREALS RTE,GENERAL MILLS,MULTI-BRAN CHEX"
 },
 {
   data: 8346,
   value: "CEREALS RTE,MALT-O-MEAL,COLOSSAL CRUNCH"
 },
 {
   data: 8347,
   value: "CEREALS RTE,MALT-O-MEAL,BERRY COLOSSAL CRUNCH"
 },
 {
   data: 8348,
   value: "CEREALS RTE,MALT-O-MEAL,CRISPY RICE"
 },
 {
   data: 8349,
   value: "CEREALS RTE,MALT-O-MEAL,TOOTIE FRUITIES"
 },
 {
   data: 8351,
   value: "CEREALS RTE,QUAKER,MOTHER'S PNUT BUTTER BUMPERS CRL"
 },
 {
   data: 8352,
   value: "CEREALS RTE,QUAKER,MOTHER'S TSTD OAT BRAN CRL,BROWN SUGAR"
 },
 {
   data: 8353,
   value: "CEREALS RTE,QUAKER,MOTHER'S CINN OAT CRUNCH"
 },
 {
   data: 8354,
   value: "CEREALS RTE,QUAKER,MOTHER'S GROOVY GRAHAMS"
 },
 {
   data: 8355,
   value: "CEREALS RTE,QUAKER,MOTHER'S COCOA BUMPERS"
 },
 {
   data: 8361,
   value: "CEREALS RTE,QUAKER,HONEY GRAHAM BAGGED CRL"
 },
 {
   data: 8363,
   value: "CEREALS RTE,SUN COUNTRY,KRETSCHMER TSTD WHEAT BRAN"
 },
 {
   data: 8365,
   value: "CEREALS RTE,QUAKER,SHREDDED WHEAT,BAGGED CRL"
 },
 {
   data: 8366,
   value: "CEREALS RTE,SUN COUNTRY,KRETSCHMER WHEAT GERM,REG"
 },
 {
   data: 8370,
   value: "CEREALS RTE,GENERAL MILLS,RICE CRUNCHINS"
 },
 {
   data: 8376,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S MARSHMLLW FROOT LOOPS"
 },
 {
   data: 8380,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S,RAISIN BRAN CRUNCH"
 },
 {
   data: 8383,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K RED BERRIES"
 },
 {
   data: 8384,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S MINI-WHEATS,UNFROSTED BITE SZE"
 },
 {
   data: 8386,
   value: "CEREALS RTE,KASHI GOLEAN CRUNCH!"
 },
 {
   data: 8387,
   value: "CEREALS RTE,KASHI HEART TO HEART,HONEY TSTD OAT"
 },
 {
   data: 8388,
   value: "CEREALS RTE,KASHI 7 WHL GRAIN PUFFS"
 },
 {
   data: 8389,
   value: "CEREALS RTE,KASHI 7 WHL GRAIN HONEY PUFFS"
 },
 {
   data: 8390,
   value: "CEREALS RTE,KASHI GOOD FRIENDS"
 },
 {
   data: 8393,
   value: "CEREALS RTE,KASHI GOLEAN"
 },
 {
   data: 8400,
   value: "CEREALS RTE,CRANBERRY MACADAMIA NUT CRL"
 },
 {
   data: 8402,
   value: "CEREALS,QUAKER,QUICK OATS,DRY"
 },
 {
   data: 8409,
   value: "CEREALS RTE,MALT-O-MEAL,FRSTD FLAKES"
 },
 {
   data: 8410,
   value: "CEREALS,QUAKER,INST OATMEAL,CINNAMON-SPICE,DRY"
 },
 {
   data: 8411,
   value: "CERLS,QUKR,INST OTML,DNSR EGS W/ \"DNSR BNS\",BRN SGR CINN,DRY"
 },
 {
   data: 8414,
   value: "CEREALS,QUAKER,INST OATMEAL EXPRESS,GOLDEN BROWN SUGAR,DRY"
 },
 {
   data: 8417,
   value: "CEREALS,QUAKER,INST OATMEAL,BANANA BREAD,DRY"
 },
 {
   data: 8418,
   value: "CEREALS,QUAKER,INST OATMEAL EXPRESS,BKD APPL,DRY"
 },
 {
   data: 8419,
   value: "CEREALS,QUAKER,INST OATMEAL EXPRESS CINN ROLL,DRY"
 },
 {
   data: 8435,
   value: "CEREALS RTE,UNCLE SAM CRL"
 },
 {
   data: 8436,
   value: "CEREALS,QUAKER,INST OATMEAL,RAISIN & SPICE,DRY"
 },
 {
   data: 8444,
   value: "CERLS,QUAKER,INST GRIT PRDCT W/ RDEYE GRVY&IMITN HAM BIT,DRY"
 },
 {
   data: 8449,
   value: "CEREALS,QUAKER,INST GRITS PRODUCT W/ AMERICAN CHS FLAVOR,DRY"
 },
 {
   data: 8450,
   value: "CEREALS,QUAKER,INST GRITS PRODUCT--HAM 'N' CHS"
 },
 {
   data: 8451,
   value: "CEREALS,QUAKER,QUICK OATS W/ IRON,DRY"
 },
 {
   data: 8452,
   value: "CEREALS,QUAKER,WHL WHEAT NAT CRL"
 },
 {
   data: 8458,
   value: "CEREALS RTE,KELLOGG'S,FRUIT HARVEST STRAWBERRY/BLUEBERRY"
 },
 {
   data: 8459,
   value: "CEREALS RTE,KELLG'S,FRSTD MINI-WHTS,MPLE & BRWN SGR,BTE SZE"
 },
 {
   data: 8461,
   value: "CEREALS RTE,KASHI,GOOD FRIENDS,CINNA-RAISIN CRUNCH"
 },
 {
   data: 8462,
   value: "CEREALS RTE,KASHI,ORGANIC PROMISE AUTUMN WHEAT"
 },
 {
   data: 8463,
   value: "CEREALS RTE,KASHI ORGANIC PROMISE,STRAWBERRY FIELDS"
 },
 {
   data: 8469,
   value: "CEREALS RTE,KELLOGG'S,RED SUGAR FRSTD FLAKES CRL"
 },
 {
   data: 8471,
   value: "CEREALS RTE,KELLOGG'S,SPL K PROT PLUS"
 },
 {
   data: 8476,
   value: "CEREALS RTE,MALT-O-MEAL,HONEY BUZZERS"
 },
 {
   data: 8478,
   value: "CEREALS RTE,MALT-O-MEAL,GOLDEN PUFFS"
 },
 {
   data: 8481,
   value: "CEREALS RTE,MALT-O-MEAL HONEY GRAHAM SQUARES"
 },
 {
   data: 8483,
   value: "CEREALS RTE,MALT-O-MEAL,PUFFED WHEAT CRL"
 },
 {
   data: 8484,
   value: "CEREALS RTE,MALT-O-MEAL,RAISIN BRAN CRL"
 },
 {
   data: 8487,
   value: "CEREALS RTE,MALT-O-MEAL,BLUEBERRY MUFFIN TOPS CRL"
 },
 {
   data: 8488,
   value: "CEREALS,MALT-O-MEAL,FARINA HOT WHEAT CRL,DRY"
 },
 {
   data: 8489,
   value: "CEREALS RTE,MALT-O-MEAL,MAPLE & BRWN SGR HOT WHT CRL,DRY"
 },
 {
   data: 8491,
   value: "CEREALS RTE,MALT-O-MEAL,HONEY NUT TOASTY O'S CRL"
 },
 {
   data: 8492,
   value: "CEREALS RTE,MALT-O-MEAL,PUFFED RICE CRL"
 },
 {
   data: 8493,
   value: "CEREALS RTE,MALT-O-MEAL,APPL ZINGS"
 },
 {
   data: 8494,
   value: "CEREALS RTE,MALT-O-MEAL,CINN TOASTERS"
 },
 {
   data: 8495,
   value: "CEREALS RTE,MALT-O-MEAL,COCOA DYNO-BITES"
 },
 {
   data: 8500,
   value: "CEREALS RTE,MALT-O-MEAL,FRSTD MINI SPOONERS"
 },
 {
   data: 8501,
   value: "CEREALS RTE,MALT-O-MEAL,FRUITY DYNO-BITES"
 },
 {
   data: 8502,
   value: "CEREALS RTE,NATURE'S PATH,OPTIMUM"
 },
 {
   data: 8503,
   value: "CEREALS RTE,NATURE'S PATH,OPTIMUM SLIM"
 },
 {
   data: 8504,
   value: "CEREALS RTE,RALSTON ENR BRAN FLAKES"
 },
 {
   data: 8505,
   value: "CEREALS RTE,RALSTON CORN BISCUITS"
 },
 {
   data: 8506,
   value: "CEREALS RTE,RALSTON CORN FLAKES"
 },
 {
   data: 8507,
   value: "CEREALS RTE,RALSTON CRISPY HEXAGONS"
 },
 {
   data: 8508,
   value: "CEREALS RTE,USDA CMDTY CORN & RICE (INCLUDES ALL  BRANDS)"
 },
 {
   data: 8509,
   value: "CEREALS RTE,USDA CMDTY RICE CRISPS (INCLUDES ALL  BRANDS)"
 },
 {
   data: 8510,
   value: "MILK & CRL BAR"
 },
 {
   data: 8511,
   value: "CEREALS,MALT-O-MEAL,PLN,PREP W/ H2O,WO/ SALT"
 },
 {
   data: 8512,
   value: "CEREALS,MALT-O-MEAL,CHOC,PREP W/ H2O,WO/ SALT"
 },
 {
   data: 8513,
   value: "CEREALS RTE,GENERAL MILLS,CHOC LUCKY CHARMS"
 },
 {
   data: 8520,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S CINN MINI SWIRLZ"
 },
 {
   data: 8530,
   value: "CEREALS RTE,KELLOGG,SMORZ"
 },
 {
   data: 8531,
   value: "CEREALS RTE,KELLOGG,SPL K,FRUIT & YOGURT"
 },
 {
   data: 8537,
   value: "CEREALS RTE,KASHI 7 WHL GRAIN FLAKES"
 },
 {
   data: 8538,
   value: "CEREALS RTE,KASHI,HEART TO HEART,WILD BLUEBERRY"
 },
 {
   data: 8539,
   value: "CEREALS RTE,KASHI ORGANIC PROMISE,CINN HARVEST"
 },
 {
   data: 8542,
   value: "CEREALS RTE,KELLOGG'S,FRSTD MINI-WHEATS BITE SIZE STRAWB DEL"
 },
 {
   data: 8543,
   value: "CEREALS RTE,KELLOGG'S,SPL K VANILLA ALMOND"
 },
 {
   data: 8544,
   value: "CEREALS RTE,POST GREAT GRAINS CRANBERRY ALMOND CRUNCH"
 },
 {
   data: 8546,
   value: "RICE & WHEAT CRL BAR"
 },
 {
   data: 8549,
   value: "CEREALS RTE,QUAKER,QUAKER HONEY GRAHAM LIFE CRL"
 },
 {
   data: 8550,
   value: "CEREALS RTE,QUAKER,CHRISTMAS CRUNCH"
 },
 {
   data: 8553,
   value: "CEREALS RTE,GENERAL MILLS,CHEERIOS,YOGURT BURST,STRAWBERRY"
 },
 {
   data: 8554,
   value: "CEREALS RTE,ROLLED OATS,WHL WHEAT,RICE,MAPLE FLAV,W/ PECANS"
 },
 {
   data: 8560,
   value: "CEREALS RTE,KASHI GO LN CRUNCH!,HONEY ALMOND FLAX"
 },
 {
   data: 8561,
   value: "CEREALS,KASHI GO LN HOT CRL,HEARTY HONEY & CINN,DRY"
 },
 {
   data: 8562,
   value: "CEREALS,KASHI GO LN HOT CRL,CREAMY TRULY VANILLA,DRY"
 },
 {
   data: 8563,
   value: "CEREALS RTE,KASHI GRANOLA,COCOA BEACH CRL"
 },
 {
   data: 8565,
   value: "CEREALS RTE,KASHI GRANOLA,SMMR BERRY CRL"
 },
 {
   data: 8566,
   value: "CEREALS RTE,KASHI GRANOLA,MOUNTAIN MEDLEY CRL"
 },
 {
   data: 8567,
   value: "CEREALS RTE,KASHI 7 WHL GRAIN NUGGETS"
 },
 {
   data: 8568,
   value: "CEREALS,KASHI HEART TO HEART,INST OATMEAL,APPL CINN,DRY"
 },
 {
   data: 8569,
   value: "CEREALS,KASHI HEART TO HEART,INST OATMEAL,GLDN BRWN MPLE,DRY"
 },
 {
   data: 8573,
   value: "CEREALS,CRM OF WHEAT,2 1/2 MINUTE COOK TIME,DRY"
 },
 {
   data: 8574,
   value: "CEREALS,CRM OF WHEAT,2 1/2 MIN,CKD,STOVE-TOP,WO/ SALT"
 },
 {
   data: 8575,
   value: "CEREALS,CRM OF WHEAT,2 1/2 MIN,CKD W/H2O,MICROWAVED"
 },
 {
   data: 8576,
   value: "CEREALS,CRM OF WHEAT,1 MINUTE COOK TIME,DRY"
 },
 {
   data: 8577,
   value: "CEREALS,CRM OF WHEAT,1 MINUTE,CKD W/ H2O,STOVE-TOP,WO/ SALT"
 },
 {
   data: 8578,
   value: "CEREALS,CRM OF WHEAT,1 MINUTE,CKD W/ H2O,MICROWAVED,WO/ SALT"
 },
 {
   data: 8579,
   value: "CEREALS RTE,GENERAL MILLS,25% LESS SUGAR CINN TOAST CRL"
 },
 {
   data: 8580,
   value: "INCAPARINA,DRY MIX (CORN & SOY FLOURS),UNPREP"
 },
 {
   data: 8582,
   value: "CEREALS RTE,GENERAL MILLS,DORA THE EXPLORER"
 },
 {
   data: 8583,
   value: "CEREALS RTE,GENERAL MILLS,FRUITY CHEERIOS"
 },
 {
   data: 8584,
   value: "CEREALS RTE,KELLOGG'S SPL K CHOCOLATEY DELIGHT"
 },
 {
   data: 8585,
   value: "CEREALS RTE,GENERAL MILLS,TOTAL,CRANBERRY CRUNCH"
 },
 {
   data: 8586,
   value: "CEREALS RTE,GENERAL MILLS,25% LESS SUGAR TRIX"
 },
 {
   data: 8587,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K LOFAT GRANOLA"
 },
 {
   data: 8588,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S CINNABON CRL"
 },
 {
   data: 8589,
   value: "CEREALS RTE,KASHI GOLEAN CRISP TSTD BERRY CRUMBLE"
 },
 {
   data: 8590,
   value: "CEREALS RTE,KASHI HEART TO HEART,WARM CINN"
 },
 {
   data: 8591,
   value: "CEREALS RTE,KASHI ORGANIC PROMISE,ISLAND VANILLA"
 },
 {
   data: 8592,
   value: "CEREALS RTE,GENERAL MILLS,CHEERIOS,BANANA NUT"
 },
 {
   data: 8593,
   value: "CEREALS RTE,GENERAL MILLS,CHEERIOS,CHOC"
 },
 {
   data: 8594,
   value: "CEREALS RTE,GENERAL MILLS,CHOC CHEX"
 },
 {
   data: 8595,
   value: "CEREALS RTE,GENERAL MILLS CINN CHEX"
 },
 {
   data: 8596,
   value: "CEREALS RTE,GENERAL MILLS,FIBER ONE,CARAMEL DELIGHT"
 },
 {
   data: 8597,
   value: "CEREALS RTE,GENERAL MILLS,FIBER ONE,FRSTD SHREDDED WHEAT"
 },
 {
   data: 8598,
   value: "CEREALS RTE,GENERAL MILLS,FIBER ONE,HONEY CLUSTERS"
 },
 {
   data: 8599,
   value: "CEREALS RTE,GENERAL MILLS,FIBER ONE,RAISIN BRAN CLUSTERS"
 },
 {
   data: 8600,
   value: "CEREALS RTE,GENERAL MILLS,TOTAL,BLUEBERRY POMEGRANATE"
 },
 {
   data: 8601,
   value: "CEREALS RTE,GENERAL MILLS,WHEATIES,FUEL"
 },
 {
   data: 8602,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K,CINN PECAN"
 },
 {
   data: 8603,
   value: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K BLUEBERRY"
 },
 {
   data: 8605,
   value: "CEREALS RTE,KASHI,KASHI U"
 },
 {
   data: 8606,
   value: "CEREALS RTE,BEAR NAKED BANANA NUT"
 },
 {
   data: 8607,
   value: "CEREALS RTE,BEAR NAKED CRANBERRY RAISIN"
 },
 {
   data: 8608,
   value: "CEREALS RTE,KASHI BERRY BLOSSOM"
 },
 {
   data: 8609,
   value: "CEREALS RTE,KASHI GOLDEN GOODNESS"
 },
 {
   data: 8610,
   value: "CEREALS RTE,KASHI HONEY SUNSHINE"
 },
 {
   data: 8611,
   value: "CEREALS RTE,KELLOGG'S FIBERPLUS CINN OAT CRUNCH"
 },
 {
   data: 8612,
   value: "CEREALS RTE,KELLOGG'S FIBERPLUS BERRY YOGURT CRUNCH"
 },
 {
   data: 8613,
   value: "CEREALS RTE,KELLOGG'S SPL K MULTIGRAIN OATS & HONEY"
 },
 {
   data: 8614,
   value: "CEREALS RTE,KELLOGG'S CRUNCHY NUT RSTD NUT & HONEY O'S"
 },
 {
   data: 8615,
   value: "CEREALS RTE,KELLOGG'S CRUNCHY NUT GOLDEN HONEY NUT FLAKES"
 },
 {
   data: 8616,
   value: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS BITE SZ CINN STREUS"
 },
 {
   data: 8617,
   value: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS BITE SZ BLUEB MUFFIN"
 },
 {
   data: 8618,
   value: "CEREALS RTE,KELLOGG'S POPS MIXIT CRL,ALL FLAVORS"
 },
 {
   data: 8619,
   value: "CEREALS RTE,KELLOGG'S CORN FLAKES,SIMPLY CINN"
 },
 {
   data: 8621,
   value: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHTS TOUCH FRT MDL MXD BER"
 },
 {
   data: 8625,
   value: "CEREALS RTE,QUAKER,CAP'N CRUNCH'S HALLOWEEN CRUNCH"
 },
 {
   data: 8627,
   value: "QUAKER,NAT GRANOLA APPL CRANBERRY ALMOND"
 },
 {
   data: 8628,
   value: "CEREALS RTE,QUAKER,MAPLE BROWN SUGAR LIFE CRL"
 },
 {
   data: 8629,
   value: "CEREALS RTE,QUAKER,CAP'N CRUNCH'S OOPS! ALL BERRIES CRL"
 },
 {
   data: 8631,
   value: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS LITTLE BITES,CHOC"
 },
 {
   data: 8632,
   value: "CEREALS RTE,QUAKER SQUARES,GOLDEN MAPLE"
 },
 {
   data: 8633,
   value: "CEREALS RTE,POST HONEY BUNCHES OF OATS W/ VANILLA BUNCHES"
 },
 {
   data: 8635,
   value: "CEREALS RTE,GENERAL MILLS,COCOA PUFFS,25% RED SUGAR"
 },
 {
   data: 8636,
   value: "CEREALS RTE,GENERAL MILLS,SPRINKLES COOKIE CRISP"
 },
 {
   data: 8637,
   value: "CEREALS RTE,GENERAL MILLS,OAT CLUSTER CHEERIOS CRUNCH"
 },
 {
   data: 8639,
   value: "CEREALS,QUAKER,INST OATMEAL,CINN SPICE,RED SUGAR"
 },
 {
   data: 8640,
   value: "CEREALS,QUAKER,INST OATMEAL ORGANIC,REG"
 },
 {
   data: 8641,
   value: "CEREALS,QUAKER,INST OATMEAL,FRUIT & CRM,RED SUGAR"
 },
 {
   data: 8642,
   value: "CEREALS,QUAKER,INST OATMEAL,APPL & CINN,RED SUGAR"
 },
 {
   data: 8643,
   value: "CEREALS RTE,GENERAL MILLS,HONEY KIX"
 },
 {
   data: 8644,
   value: "CEREALS RTE,GENERAL MILLS,COCOA PUFFS COMBOS,CHOC & VANILLA"
 },
 {
   data: 8645,
   value: "CEREALS RTE,BEAR NAKED NUT CLUSTER CRUNCH,HONEY ALMOND"
 },
 {
   data: 8646,
   value: "CEREALS RTE,BEAR NAKED NUT CLUSTER CRUNCH,MAPLE PECAN WALNUT"
 },
 {
   data: 8647,
   value: "CEREALS RTE,KASHI INDIGO MORNING"
 },
 {
   data: 8648,
   value: "CEREALS RTE,KASHI SIMPLY MAIZE"
 },
 {
   data: 8649,
   value: "CEREALS RTE,KASHI GOLEAN CRISP CINN CRUMBLE"
 },
 {
   data: 8650,
   value: "CEREALS RTE,GENERAL MILLS TOTAL PLUS OMEGA3,HONEY ALMOND FLX"
 },
 {
   data: 8651,
   value: "CEREALS RTE,GENERAL MILLS,FIBER ONE 80 CAL,HONEY SQUARES"
 },
 {
   data: 8652,
   value: "CEREALS RTE,KELLOGG'S KRAVE CHOC CRL"
 },
 {
   data: 8653,
   value: "CEREALS RTE,KELLOGG'S RICE KRISPIES,GLUTEN FREE"
 },
 {
   data: 9001,
   value: "ACEROLA,(WEST INDIAN CHERRY),RAW"
 },
 {
   data: 9002,
   value: "ACEROLA JUICE,RAW"
 },
 {
   data: 9003,
   value: "APPLES,RAW,WITH SKIN"
 },
 {
   data: 9004,
   value: "APPLES,RAW,WITHOUT SKIN"
 },
 {
   data: 9005,
   value: "APPLES,RAW,WO/SKN,CKD,BLD"
 },
 {
   data: 9006,
   value: "APPLES,RAW,WO/ SKN,CKD,MICROWAVE"
 },
 {
   data: 9007,
   value: "APPLES,CND,SWTND,SLICED,DRND,UNHTD"
 },
 {
   data: 9008,
   value: "APPLES,CND,SWTND,SLICED,DRND,HTD"
 },
 {
   data: 9009,
   value: "APPLES,DEHYD (LO MOIST),SULFURED,UNCKD"
 },
 {
   data: 9010,
   value: "APPLES,DEHYD (LO MOIST),SULFURED,STWD"
 },
 {
   data: 9011,
   value: "APPLES,DRIED,SULFURED,UNCKD"
 },
 {
   data: 9012,
   value: "APPLES,DRIED,SULFURED,STWD,WO/ SUGAR"
 },
 {
   data: 9013,
   value: "APPLES,DRIED,SULFURED,STWD,W/ SUGAR"
 },
 {
   data: 9014,
   value: "APPLES,FRZ,UNSWTND,UNHTD"
 },
 {
   data: 9015,
   value: "APPLES,FRZ,UNSWTND,HTD"
 },
 {
   data: 9016,
   value: "APPLE JUC,CND OR BTLD,UNSWTND,WO/ ADDED VIT C"
 },
 {
   data: 9017,
   value: "APPLE JUC,FRZ CONC,UNSWTND,UNDIL,WO/ VIT C"
 },
 {
   data: 9018,
   value: "APPLE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O WO/ VIT C"
 },
 {
   data: 9019,
   value: "APPLESAUCE,CND,UNSWTND,WO/ADDED VIT C (INCLUDES USDA COMMOD)"
 },
 {
   data: 9020,
   value: "APPLESAUCE,CND,SWTND,WO/ SALT (INCLUDES USDA COMMODITY)"
 },
 {
   data: 9021,
   value: "APRICOTS,RAW"
 },
 {
   data: 9022,
   value: "APRICOTS,CND,H2O PK,W/SKN,SOL&LIQUIDS"
 },
 {
   data: 9023,
   value: "APRICOTS,CND,H2O PK,WO/SKN,SOL&LIQUIDS"
 },
 {
   data: 9024,
   value: "APRICOTS,CND,JUC PK,W/SKN,SOL&LIQUIDS"
 },
 {
   data: 9025,
   value: "APRICOTS,CND,EX LT SYRUP PK,W/SKN,SOL&LIQUIDS"
 },
 {
   data: 9026,
   value: "APRICOTS,CND,LT SYRUP PK,W/SKN,SOL&LIQUIDS"
 },
 {
   data: 9027,
   value: "APRICOTS,CND,HVY SYRUP PK,W/SKN,SOL&LIQUIDS"
 },
 {
   data: 9028,
   value: "APRICOTS,CND,HVY SYRUP PK,WO/SKN,SOL&LIQUIDS"
 },
 {
   data: 9029,
   value: "APRICOTS,CND,EX HVY SYRUP PK,WO/SKN,SOL&LIQUIDS"
 },
 {
   data: 9030,
   value: "APRICOTS,DEHYD (LOW-MOISTURE),SULFURED,UNCKD"
 },
 {
   data: 9031,
   value: "APRICOTS,DEHYD (LOW-MOISTURE),SULFURED,STWD"
 },
 {
   data: 9032,
   value: "APRICOTS,DRIED,SULFURED,UNCKD"
 },
 {
   data: 9033,
   value: "APRICOTS,DRIED,SULFURED,STWD,WO/ SUGAR"
 },
 {
   data: 9034,
   value: "APRICOTS,DRIED,SULFURED,STWD,W/ SUGAR"
 },
 {
   data: 9035,
   value: "APRICOTS,FROZEN,SWEETENED"
 },
 {
   data: 9036,
   value: "APRICOT NECTAR,CND,WO/ VIT C"
 },
 {
   data: 9037,
   value: "AVOCADOS,RAW,ALL COMM VAR"
 },
 {
   data: 9038,
   value: "AVOCADOS,RAW,CALIFORNIA"
 },
 {
   data: 9039,
   value: "AVOCADOS,RAW,FLORIDA"
 },
 {
   data: 9040,
   value: "BANANAS,RAW"
 },
 {
   data: 9041,
   value: "BANANAS,DEHYD,OR BANANA PDR"
 },
 {
   data: 9042,
   value: "BLACKBERRIES,RAW"
 },
 {
   data: 9043,
   value: "BLACKBERRY JUC,CND"
 },
 {
   data: 9046,
   value: "BLACKBERRIES,CND,HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9048,
   value: "BLACKBERRIES,FRZ,UNSWTND"
 },
 {
   data: 9050,
   value: "BLUEBERRIES,RAW"
 },
 {
   data: 9052,
   value: "BLUEBERRIES,CND,HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9053,
   value: "BLUEBERRIES,WILD,FRZ"
 },
 {
   data: 9054,
   value: "BLUEBERRIES,FRZ,UNSWTND"
 },
 {
   data: 9055,
   value: "BLUEBERRIES,FRZ,SWTND"
 },
 {
   data: 9056,
   value: "BOYSENBERRIES,CND,HVY SYRUP"
 },
 {
   data: 9057,
   value: "BOYSENBERRIES,FRZ,UNSWTND"
 },
 {
   data: 9059,
   value: "BREADFRUIT,RAW"
 },
 {
   data: 9060,
   value: "CARAMBOLA,(STARFRUIT),RAW"
 },
 {
   data: 9061,
   value: "CARISSA,(NATAL-PLUM),RAW"
 },
 {
   data: 9062,
   value: "CHERIMOYA,RAW"
 },
 {
   data: 9063,
   value: "CHERRIES,SOUR,RED,RAW"
 },
 {
   data: 9064,
   value: "CHERRIES,SOUR,RED,CND,H2O PK,SOL&LIQUIDS (INCL USDA CMDTY)"
 },
 {
   data: 9065,
   value: "CHERRIES,SOUR,RED,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9066,
   value: "CHERRIES,SOUR,RED,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9067,
   value: "CHERRIES,SOUR,RED,CND,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9068,
   value: "CHERRIES,SOUR,RED,FRZ,UNSWTND"
 },
 {
   data: 9070,
   value: "CHERRIES,SWEET,RAW"
 },
 {
   data: 9071,
   value: "CHERRIES,SWT,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9072,
   value: "CHERRIES,SWT,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9073,
   value: "CHERRIES,SWT,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9074,
   value: "CHERRIES,SWT,CND,PITTED,HVY SYRUP PK,SOL & LIQUIDS"
 },
 {
   data: 9075,
   value: "CHERRIES,SWT,CND,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9076,
   value: "CHERRIES,SWT,FRZ,SWTND"
 },
 {
   data: 9077,
   value: "CRABAPPLES,RAW"
 },
 {
   data: 9078,
   value: "CRANBERRIES,RAW"
 },
 {
   data: 9079,
   value: "CRANBERRIES,DRIED,SWTND"
 },
 {
   data: 9081,
   value: "CRANBERRY SAU,CND,SWTND"
 },
 {
   data: 9082,
   value: "CRANBERRY-ORANGE RELISH,CND"
 },
 {
   data: 9083,
   value: "CURRANTS,EUROPEAN BLACK,RAW"
 },
 {
   data: 9084,
   value: "CURRANTS,RED&WHITE,RAW"
 },
 {
   data: 9085,
   value: "CURRANTS,ZANTE,DRIED"
 },
 {
   data: 9086,
   value: "CUSTARD-APPLE,(BULLOCK'S-HEART),RAW"
 },
 {
   data: 9087,
   value: "DATES,DEGLET NOOR"
 },
 {
   data: 9088,
   value: "ELDERBERRIES,RAW"
 },
 {
   data: 9089,
   value: "FIGS,RAW"
 },
 {
   data: 9090,
   value: "FIGS,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9091,
   value: "FIGS,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9092,
   value: "FIGS,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9093,
   value: "FIGS,CND,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9094,
   value: "FIGS,DRIED,UNCOOKED"
 },
 {
   data: 9095,
   value: "FIGS,DRIED,STEWED"
 },
 {
   data: 9096,
   value: "FRUIT COCKTAIL,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9097,
   value: "FRUIT COCKTAIL,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9098,
   value: "FRUIT COCKTAIL,CND,EX LT SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9099,
   value: "FRUIT COCKTAIL,CND,LT SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9100,
   value: "FRUIT COCKTAIL,CND,HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9101,
   value: "FRUIT COCKTAIL,CND,EX HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9102,
   value: "FRUIT SALAD,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9103,
   value: "FRUIT SALAD,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9104,
   value: "FRUIT SALAD,CND,LT SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9105,
   value: "FRUIT SALAD,CND,HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9106,
   value: "FRUIT SALAD,CND,EX HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9107,
   value: "GOOSEBERRIES,RAW"
 },
 {
   data: 9109,
   value: "GOOSEBERRIES,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9111,
   value: "GRAPEFRUIT,RAW,PINK&RED&WHITE,ALL AREAS"
 },
 {
   data: 9112,
   value: "GRAPEFRUIT,RAW,PINK&RED,ALL AREAS"
 },
 {
   data: 9113,
   value: "GRAPEFRUIT,RAW,PINK&RED,CALIFORNIA&ARIZONA"
 },
 {
   data: 9114,
   value: "GRAPEFRUIT,RAW,PINK & RED,FLORIDA"
 },
 {
   data: 9116,
   value: "GRAPEFRUIT,RAW,WHITE,ALL AREAS"
 },
 {
   data: 9117,
   value: "GRAPEFRUIT,RAW,WHITE,CALIFORNIA"
 },
 {
   data: 9118,
   value: "GRAPEFRUIT,RAW,WHITE,FLORIDA"
 },
 {
   data: 9119,
   value: "GRAPEFRUIT,SECTIONS,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9120,
   value: "GRAPEFRUIT,SECTIONS,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9121,
   value: "GRAPEFRUIT,SECTIONS,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9123,
   value: "GRAPEFRUIT JUC,WHITE,CND,UNSWTND"
 },
 {
   data: 9124,
   value: "GRAPEFRUIT JUC,WHITE,CND,SWTND"
 },
 {
   data: 9125,
   value: "GRAPEFRUIT JUC,WHITE,FRZ CONC,UNSWTND,UNDIL"
 },
 {
   data: 9126,
   value: "GRAPEFRUIT JUC,WHITE,FRZ CONC,UNSWTND,DIL W/ 3 VOLUME H2O"
 },
 {
   data: 9128,
   value: "GRAPEFRUIT JUC,WHITE,RAW"
 },
 {
   data: 9129,
   value: "GRAPES,MUSCADINE,RAW"
 },
 {
   data: 9130,
   value: "GRAPE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C"
 },
 {
   data: 9131,
   value: "GRAPES,AMERICAN TYPE (SLIP SKN),RAW"
 },
 {
   data: 9132,
   value: "GRAPES,RED OR GRN (EURO TYPE,SUCH AS THOMPSON SEEDLESS),RAW"
 },
 {
   data: 9133,
   value: "GRAPES,CND,THOMPSON SEEDLESS,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9134,
   value: "GRAPES,CND,THOMPSON SEEDLESS,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9135,
   value: "GRAPE JUC,CND OR BTLD,UNSWTND,WO/ ADDED VIT C"
 },
 {
   data: 9136,
   value: "GRAPE JUC COCKTAIL,FRZ CONC,UNDIL,W/ ADDED VIT C"
 },
 {
   data: 9137,
   value: "GRAPE JUC COCKTAIL,FRZ CONC,DIL W/ 3 VOL H2O,W/ ADDED VIT C"
 },
 {
   data: 9138,
   value: "GROUNDCHERRIES,(CAPE-GOOSEBERRIES OR POHA),RAW"
 },
 {
   data: 9139,
   value: "GUAVAS,COMMON,RAW"
 },
 {
   data: 9140,
   value: "GUAVAS,STRAWBERRY,RAW"
 },
 {
   data: 9143,
   value: "GUAVA SAUCE,COOKED"
 },
 {
   data: 9144,
   value: "JACKFRUIT,RAW"
 },
 {
   data: 9145,
   value: "JAVA-PLUM,(JAMBOLAN),RAW"
 },
 {
   data: 9146,
   value: "JUJUBE,RAW"
 },
 {
   data: 9147,
   value: "JUJUBE,DRIED"
 },
 {
   data: 9148,
   value: "KIWIFRUIT,GRN,RAW"
 },
 {
   data: 9149,
   value: "KUMQUATS,RAW"
 },
 {
   data: 9150,
   value: "LEMONS,RAW,WITHOUT PEEL"
 },
 {
   data: 9152,
   value: "LEMON JUICE,RAW"
 },
 {
   data: 9153,
   value: "LEMON JUC,CND OR BTLD"
 },
 {
   data: 9154,
   value: "LEMON JUC,FRZ,UNSWTND,SINGLE STRENGTH"
 },
 {
   data: 9156,
   value: "LEMON PEEL,RAW"
 },
 {
   data: 9159,
   value: "LIMES,RAW"
 },
 {
   data: 9160,
   value: "LIME JUICE,RAW"
 },
 {
   data: 9161,
   value: "LIME JUC,CND OR BTLD,UNSWTND"
 },
 {
   data: 9164,
   value: "LITCHIS,RAW"
 },
 {
   data: 9165,
   value: "LITCHIS,DRIED"
 },
 {
   data: 9167,
   value: "LOGANBERRIES,FROZEN"
 },
 {
   data: 9172,
   value: "LONGANS,RAW"
 },
 {
   data: 9173,
   value: "LONGANS,DRIED"
 },
 {
   data: 9174,
   value: "LOQUATS,RAW"
 },
 {
   data: 9175,
   value: "MAMMY-APPLE,(MAMEY),RAW"
 },
 {
   data: 9176,
   value: "MANGOS,RAW"
 },
 {
   data: 9177,
   value: "MANGOSTEEN,CND,SYRUP PK"
 },
 {
   data: 9181,
   value: "MELONS,CANTALOUPE,RAW"
 },
 {
   data: 9183,
   value: "MELONS,CASABA,RAW"
 },
 {
   data: 9184,
   value: "MELONS,HONEYDEW,RAW"
 },
 {
   data: 9185,
   value: "MELON BALLS,FROZEN"
 },
 {
   data: 9190,
   value: "MULBERRIES,RAW"
 },
 {
   data: 9191,
   value: "NECTARINES,RAW"
 },
 {
   data: 9192,
   value: "OHELOBERRIES,RAW"
 },
 {
   data: 9193,
   value: "OLIVES,RIPE,CND (SMALL-EXTRA LRG)"
 },
 {
   data: 9194,
   value: "OLIVES,RIPE,CND (JUMBO-SUPER COLOSSAL)"
 },
 {
   data: 9195,
   value: "OLIVES,PICKLED,CND OR BTLD,GRN"
 },
 {
   data: 9200,
   value: "ORANGES,RAW,ALL COMM VAR"
 },
 {
   data: 9201,
   value: "ORANGES,RAW,CALIFORNIA,VALENCIAS"
 },
 {
   data: 9202,
   value: "ORANGES,RAW,NAVELS"
 },
 {
   data: 9203,
   value: "ORANGES,RAW,FLORIDA"
 },
 {
   data: 9205,
   value: "ORANGES,RAW,WITH PEEL"
 },
 {
   data: 9206,
   value: "ORANGE JUICE,RAW"
 },
 {
   data: 9207,
   value: "ORANGE JUC,CND,UNSWTND"
 },
 {
   data: 9209,
   value: "ORANGE JUC,CHILLED,INCL FROM CONC"
 },
 {
   data: 9210,
   value: "ORANGE JUC,CHILLED,INCL FROM CONC,FORT W/ CA & VITAMIN D"
 },
 {
   data: 9211,
   value: "ORANGE JUC,CHILLED,INCL FROM CONC,FORT W/ CA"
 },
 {
   data: 9214,
   value: "ORANGE JUC,FRZ CONC,UNSWTND,UNDIL"
 },
 {
   data: 9215,
   value: "ORANGE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O"
 },
 {
   data: 9216,
   value: "ORANGE PEEL,RAW"
 },
 {
   data: 9217,
   value: "ORANGE-GRAPEFRUIT JUC,CND,UNSWTND"
 },
 {
   data: 9218,
   value: "TANGERINES,(MANDARIN ORANGES),RAW"
 },
 {
   data: 9219,
   value: "TANGERINES,(MANDARIN ORANGES),CND,JUC PK"
 },
 {
   data: 9220,
   value: "TANGERINES,(MANDARIN ORANGES),CND,LT SYRUP PK"
 },
 {
   data: 9221,
   value: "TANGERINE JUICE,RAW"
 },
 {
   data: 9223,
   value: "TANGERINE JUC,CND,SWTND"
 },
 {
   data: 9224,
   value: "TANGERINE JUC,FRZ CONC,SWTND,UNDIL"
 },
 {
   data: 9225,
   value: "TANGERINE JUC,FRZ CONC,SWTND,DIL W/3 VOLUME H2O"
 },
 {
   data: 9226,
   value: "PAPAYAS,RAW"
 },
 {
   data: 9228,
   value: "PAPAYA,CND,HVY SYRUP,DRND"
 },
 {
   data: 9229,
   value: "PAPAYA NECTAR,CANNED"
 },
 {
   data: 9231,
   value: "PASSION-FRUIT,(GRANADILLA),PURPLE,RAW"
 },
 {
   data: 9232,
   value: "PASSION-FRUIT JUC,PURPLE,RAW"
 },
 {
   data: 9233,
   value: "PASSION-FRUIT JUC,YEL,RAW"
 },
 {
   data: 9236,
   value: "PEACHES,RAW"
 },
 {
   data: 9237,
   value: "PEACHES,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9238,
   value: "PEACHES,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9239,
   value: "PEACHES,CND,EX LT SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9240,
   value: "PEACHES,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9241,
   value: "PEACHES,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9242,
   value: "PEACHES,CND,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9243,
   value: "PEACHES,SPICED,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9244,
   value: "PEACHES,DEHYD (LOW-MOISTURE),SULFURED,UNCKD"
 },
 {
   data: 9245,
   value: "PEACHES,DEHYD (LOW-MOISTURE),SULFURED,STWD"
 },
 {
   data: 9246,
   value: "PEACHES,DRIED,SULFURED,UNCKD"
 },
 {
   data: 9247,
   value: "PEACHES,DRIED,SULFURED,STWD,WO/ SUGAR"
 },
 {
   data: 9248,
   value: "PEACHES,DRIED,SULFURED,STWD,W/ SUGAR"
 },
 {
   data: 9250,
   value: "PEACHES,FRZ,SLICED,SWTND"
 },
 {
   data: 9251,
   value: "PEACH NECTAR,CND,WO/ VIT C"
 },
 {
   data: 9252,
   value: "PEARS,RAW"
 },
 {
   data: 9253,
   value: "PEARS,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9254,
   value: "PEARS,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9255,
   value: "PEARS,CND,EX LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9256,
   value: "PEARS,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9257,
   value: "PEARS,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9258,
   value: "PEARS,CND,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9259,
   value: "PEARS,DRIED,SULFURED,UNCKD"
 },
 {
   data: 9260,
   value: "PEARS,DRIED,SULFURED,STWD,WO/ SUGAR"
 },
 {
   data: 9261,
   value: "PEARS,DRIED,SULFURED,STWD,W/ SUGAR"
 },
 {
   data: 9262,
   value: "PEAR NECTAR,CND,WO/ VIT C"
 },
 {
   data: 9263,
   value: "PERSIMMONS,JAPANESE,RAW"
 },
 {
   data: 9264,
   value: "PERSIMMONS,JAPANESE,DRIED"
 },
 {
   data: 9265,
   value: "PERSIMMONS,NATIVE,RAW"
 },
 {
   data: 9266,
   value: "PINEAPPLE,RAW,ALL VAR"
 },
 {
   data: 9267,
   value: "PINEAPPLE,CND,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9268,
   value: "PINEAPPLE,CND,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9269,
   value: "PINEAPPLE,CND,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9270,
   value: "PINEAPPLE,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9271,
   value: "PINEAPPLE,CND,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9272,
   value: "PINEAPPLE,FRZ,CHUNKS,SWTND"
 },
 {
   data: 9273,
   value: "PINEAPPLE JUC,CND,UNSWTND,WO/ VIT C"
 },
 {
   data: 9274,
   value: "PINEAPPLE JUC,FRZ CONC,UNSWTND,UNDIL"
 },
 {
   data: 9275,
   value: "PINEAPPLE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O"
 },
 {
   data: 9276,
   value: "PITANGA,(SURINAM-CHERRY),RAW"
 },
 {
   data: 9277,
   value: "PLANTAINS,RAW"
 },
 {
   data: 9278,
   value: "PLANTAINS,COOKED"
 },
 {
   data: 9279,
   value: "PLUMS,RAW"
 },
 {
   data: 9281,
   value: "PLUMS,CND,PURPLE,H2O PK,SOL&LIQUIDS"
 },
 {
   data: 9282,
   value: "PLUMS,CND,PURPLE,JUC PK,SOL&LIQUIDS"
 },
 {
   data: 9283,
   value: "PLUMS,CND,PURPLE,LT SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9284,
   value: "PLUMS,CND,PURPLE,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9285,
   value: "PLUMS,CND,PURPLE,EX HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9286,
   value: "POMEGRANATES,RAW"
 },
 {
   data: 9287,
   value: "PRICKLY PEARS,RAW"
 },
 {
   data: 9288,
   value: "PRUNES,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9289,
   value: "PRUNES,DEHYD (LOW-MOISTURE),UNCKD"
 },
 {
   data: 9290,
   value: "PRUNES,DEHYD (LOW-MOISTURE),STWD"
 },
 {
   data: 9291,
   value: "PLUMS,DRIED (PRUNES),UNCKD"
 },
 {
   data: 9292,
   value: "PLUMS,DRIED (PRUNES),STWD,WO/ ADDED SUGAR"
 },
 {
   data: 9293,
   value: "PLUMS,DRIED (PRUNES),STWD,W/ ADDED SUGAR"
 },
 {
   data: 9294,
   value: "PRUNE JUICE,CANNED"
 },
 {
   data: 9295,
   value: "PUMMELO,RAW"
 },
 {
   data: 9296,
   value: "QUINCES,RAW"
 },
 {
   data: 9297,
   value: "RAISINS,GOLDEN SEEDLESS"
 },
 {
   data: 9298,
   value: "RAISINS,SEEDLESS"
 },
 {
   data: 9299,
   value: "RAISINS,SEEDED"
 },
 {
   data: 9301,
   value: "RAMBUTAN,CND,SYRUP PK"
 },
 {
   data: 9302,
   value: "RASPBERRIES,RAW"
 },
 {
   data: 9304,
   value: "RASPBERRIES,CND,RED,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9306,
   value: "RASPBERRIES,FRZ,RED,SWTND"
 },
 {
   data: 9307,
   value: "RHUBARB,RAW"
 },
 {
   data: 9309,
   value: "RHUBARB,FROZEN,UNCOOKED"
 },
 {
   data: 9310,
   value: "RHUBARB,FRZ,CKD,W/SUGAR"
 },
 {
   data: 9311,
   value: "ROSELLE,RAW"
 },
 {
   data: 9312,
   value: "ROSE-APPLES,RAW"
 },
 {
   data: 9313,
   value: "SAPODILLA,RAW"
 },
 {
   data: 9314,
   value: "SAPOTE,MAMEY,RAW"
 },
 {
   data: 9315,
   value: "SOURSOP,RAW"
 },
 {
   data: 9316,
   value: "STRAWBERRIES,RAW"
 },
 {
   data: 9317,
   value: "STRAWBERRIES,CND,HVY SYRUP PK,SOL&LIQUIDS"
 },
 {
   data: 9318,
   value: "STRAWBERRIES,FRZ,UNSWTND"
 },
 {
   data: 9319,
   value: "STRAWBERRIES,FRZ,SWTND,WHL"
 },
 {
   data: 9320,
   value: "STRAWBERRIES,FRZ,SWTND,SLICED"
 },
 {
   data: 9321,
   value: "SUGAR-APPLES,(SWEETSOP),RAW"
 },
 {
   data: 9322,
   value: "TAMARINDS,RAW"
 },
 {
   data: 9325,
   value: "FRUIT SALAD,TROPICAL,CND,HVY SYRUP,SOL&LIQUIDS"
 },
 {
   data: 9326,
   value: "WATERMELON,RAW"
 },
 {
   data: 9328,
   value: "MARASCHINO CHERRIES,CND,DRND"
 },
 {
   data: 9334,
   value: "FEIJOA,RAW"
 },
 {
   data: 9340,
   value: "PEARS,ASIAN,RAW"
 },
 {
   data: 9351,
   value: "FRUIT COCKTAIL,CND,HVY SYRUP,DRND"
 },
 {
   data: 9352,
   value: "BLUEBERRIES,CND,LT SYRUP,DRND"
 },
 {
   data: 9353,
   value: "BLUEBERRIES,WILD,CND,HVY SYRUP,DRND"
 },
 {
   data: 9354,
   value: "PINEAPPLE,CND,JUC PK,DRND"
 },
 {
   data: 9357,
   value: "APRICOTS,CND,HVY SYRUP,DRND"
 },
 {
   data: 9367,
   value: "CHERRIES,SWT,CND,PITTED,HVY SYRUP,DRND"
 },
 {
   data: 9370,
   value: "PEACHES,CND,HVY SYRUP,DRND"
 },
 {
   data: 9374,
   value: "PEARS,CND,HVY SYRUP,DRND"
 },
 {
   data: 9379,
   value: "PLUMS,CND,HVY SYRUP,DRND"
 },
 {
   data: 9383,
   value: "TANGERINES,(MANDARIN ORANGES),CND,JUC PK,DRND"
 },
 {
   data: 9400,
   value: "APPLE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C"
 },
 {
   data: 9401,
   value: "APPLESAUCE,CND,UNSWTND,W/ VIT C"
 },
 {
   data: 9402,
   value: "APPLESAUCE,CND,SWTND,W/SALT"
 },
 {
   data: 9403,
   value: "APRICOT NECTAR,CND,W/ VIT C"
 },
 {
   data: 9404,
   value: "GRAPEFRUIT JUICE,PINK,RAW"
 },
 {
   data: 9407,
   value: "PEACH NECTAR,CND,W/ VIT C"
 },
 {
   data: 9408,
   value: "PEAR NECTAR,CND,W/ VIT C"
 },
 {
   data: 9409,
   value: "PINEAPPLE JUC,CND,UNSWTND,W/ ADDED VIT C"
 },
 {
   data: 9410,
   value: "APPLE JUC,FRZ CONC,UNSWTND,UNDIL,W/ VIT C"
 },
 {
   data: 9411,
   value: "APPLE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O,W/ VIT C"
 },
 {
   data: 9412,
   value: "PEARS,RAW,BARTLETT"
 },
 {
   data: 9420,
   value: "JACKFRUIT,CND,SYRUP PK"
 },
 {
   data: 9421,
   value: "DATES,MEDJOOL"
 },
 {
   data: 9422,
   value: "DURIAN,RAW OR FROZEN"
 },
 {
   data: 9423,
   value: "PRUNE PUREE"
 },
 {
   data: 9426,
   value: "CANDIED FRUIT"
 },
 {
   data: 9427,
   value: "ABIYUCH,RAW"
 },
 {
   data: 9428,
   value: "ROWAL,RAW"
 },
 {
   data: 9429,
   value: "PINEAPPLE,RAW,TRADITIONAL VAR"
 },
 {
   data: 9430,
   value: "PINEAPPLE,RAW,EX SWT VAR"
 },
 {
   data: 9431,
   value: "USDA CMDTY,MXD FRUIT (PEACH,PEARS,GRAPES),CND,LT SYRUP,DRND"
 },
 {
   data: 9432,
   value: "USDA CMDTY,MXD FRUIT (PEACH,PEAR,GRAPE),CND,LT SYR,SOL & LIQ"
 },
 {
   data: 9433,
   value: "CLEMENTINES,RAW"
 },
 {
   data: 9434,
   value: "GUANABANA NECTAR,CND"
 },
 {
   data: 9435,
   value: "GUAVA NECTAR,CND"
 },
 {
   data: 9436,
   value: "MANGO NECTAR,CND"
 },
 {
   data: 9437,
   value: "TAMARIND NECTAR,CND"
 },
 {
   data: 9438,
   value: "USDA CMDTY PEACHES,CND,LT SYRUP,DRND"
 },
 {
   data: 9439,
   value: "USDA CMDTY PEARS,CND,JUC PK,DRND"
 },
 {
   data: 9440,
   value: "USDA CMDTY PEARS,CND,LT SYRUP,DRND"
 },
 {
   data: 9442,
   value: "POMEGRANATE JUC,BTLD"
 },
 {
   data: 9443,
   value: "JUICE,APPL & GRAPE BLEND,W/ ADDED VIT C"
 },
 {
   data: 9444,
   value: "JUICE,APPL,GRAPE & PEAR BLEND,W/ ADDED VIT C & CA"
 },
 {
   data: 9445,
   value: "KIWIFRUIT,GOLD,RAW"
 },
 {
   data: 9446,
   value: "PLANTAINS,GRN,FRIED"
 },
 {
   data: 9447,
   value: "PLANTAINS,YEL,FRIED,LATINO RESTAURANT"
 },
 {
   data: 9448,
   value: "NANCE,CND,SYRUP,DRND"
 },
 {
   data: 9449,
   value: "NANCE,FRZ,UNSWTND"
 },
 {
   data: 9450,
   value: "NARANJILLA (LULO) PULP,FRZ,UNSWTND"
 },
 {
   data: 9451,
   value: "HORNED MELON (KIWANO)"
 },
 {
   data: 9452,
   value: "ORANGE PNAPPL JUC BLEND"
 },
 {
   data: 9501,
   value: "APPLES,RAW,GOLDEN DELICIOUS,W/ SKN"
 },
 {
   data: 10000,
   value: "PORK,FRSH,ENHANCED,COMP OF FAT,CKD"
 },
 {
   data: 10001,
   value: "PORK,FRSH,CARCASS,LN&FAT,RAW"
 },
 {
   data: 10002,
   value: "PORK,FRSH,COMP OF RTL CUTS (LEG,LOIN,SHLDR),LN,RAW"
 },
 {
   data: 10003,
   value: "PORK,FRSH,COMP OF LEG,LOIN,SHLDR,& SPARERIBS,LN & FAT,RAW"
 },
 {
   data: 10004,
   value: "PORK,FRESH,BACKFAT,RAW"
 },
 {
   data: 10005,
   value: "PORK,FRSH,BELLY,RAW"
 },
 {
   data: 10006,
   value: "PORK,FRSH,FAT,RAW"
 },
 {
   data: 10007,
   value: "PORK,FRSH,FAT,CKD"
 },
 {
   data: 10008,
   value: "PORK,FRSH,LEG (HAM),WHL,LN&FAT,RAW"
 },
 {
   data: 10009,
   value: "PORK,FRSH,LEG (HAM),WHL,LN&FAT,CKD,RSTD"
 },
 {
   data: 10010,
   value: "PORK,FRSH,LEG (HAM),WHL,LN,RAW"
 },
 {
   data: 10011,
   value: "PORK,FRSH,LEG (HAM),WHL,LN,CKD,RSTD"
 },
 {
   data: 10012,
   value: "PORK,FRSH,LEG (HAM),RUMP HALF,LN&FAT,RAW"
 },
 {
   data: 10013,
   value: "PORK,FRSH,LEG (HAM),RUMP HALF,LN&FAT,CKD,RSTD"
 },
 {
   data: 10014,
   value: "PORK,FRSH,LEG (HAM),RUMP HALF,LN,RAW"
 },
 {
   data: 10015,
   value: "PORK,FRSH,LEG (HAM),RUMP HALF,LN,CKD,RSTD"
 },
 {
   data: 10016,
   value: "PORK,FRSH,LEG (HAM),SHANK HALF,LN&FAT,RAW"
 },
 {
   data: 10017,
   value: "PORK,FRSH,LEG (HAM),SHANK HALF,LN&FAT,CKD,RSTD"
 },
 {
   data: 10018,
   value: "PORK,FRSH,LEG (HAM),SHANK HALF,LN,RAW"
 },
 {
   data: 10019,
   value: "PORK,FRSH,LEG (HAM),SHANK HALF,LN,CKD,RSTD"
 },
 {
   data: 10020,
   value: "PORK,FRSH,LOIN,WHL,LN&FAT,RAW"
 },
 {
   data: 10021,
   value: "PORK,FRSH,LOIN,WHL,LN&FAT,CKD,BRSD"
 },
 {
   data: 10022,
   value: "PORK,FRSH,LOIN,WHL,LN&FAT,CKD,BRLD"
 },
 {
   data: 10023,
   value: "PORK,FRSH,LOIN,WHL,LN&FAT,CKD,RSTD"
 },
 {
   data: 10024,
   value: "PORK,FRSH,LOIN,WHL,LN,RAW"
 },
 {
   data: 10025,
   value: "PORK,FRSH,LOIN,WHL,LN,CKD,BRSD"
 },
 {
   data: 10026,
   value: "PORK,FRSH,LOIN,WHL,LN,CKD,BRLD"
 },
 {
   data: 10027,
   value: "PORK,FRSH,LOIN,WHL,LN,CKD,RSTD"
 },
 {
   data: 10028,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS OR ROASTS),BONE-IN,LN&FAT,RAW"
 },
 {
   data: 10029,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN&FAT,CKD,BRSD"
 },
 {
   data: 10030,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN&FAT,CKD,BRLD"
 },
 {
   data: 10031,
   value: "PORK,FRSH,LOIN,BLADE (ROASTS),BONE-IN,LN&FAT,CKD,RSTD"
 },
 {
   data: 10032,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS OR ROASTS),BONE-IN,LN,RAW"
 },
 {
   data: 10033,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN,CKD,BRSD"
 },
 {
   data: 10034,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN,CKD,BRLD"
 },
 {
   data: 10035,
   value: "PORK,FRSH,LOIN,BLADE (ROASTS),BONE-IN,LN,CKD,RSTD"
 },
 {
   data: 10036,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN & FAT,RAW"
 },
 {
   data: 10037,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRSD"
 },
 {
   data: 10038,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRLD"
 },
 {
   data: 10039,
   value: "PORK,FRSH,LOIN,CNTR LOIN (ROASTS),BONE-IN,LN&FAT,CKD,RSTD"
 },
 {
   data: 10040,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,RAW"
 },
 {
   data: 10041,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,CKD,BRSD"
 },
 {
   data: 10042,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,CKD,BRLD"
 },
 {
   data: 10043,
   value: "PORK,FRSH,LOIN,CNTR LOIN (ROASTS),BONE-IN,LN,CKD,RSTD"
 },
 {
   data: 10044,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BONE-IN,LN&FAT,RAW"
 },
 {
   data: 10045,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN&FAT,CKD,BRSD"
 },
 {
   data: 10046,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN&FAT,CKD,BRLD"
 },
 {
   data: 10047,
   value: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BONE-IN,LN&FAT,CKD,RSTD"
 },
 {
   data: 10048,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BONE-IN,LN,RAW"
 },
 {
   data: 10049,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN,CKD,BRSD"
 },
 {
   data: 10050,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN,CKD,BRLD"
 },
 {
   data: 10051,
   value: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BONE-IN,LN,CKD,RSTD"
 },
 {
   data: 10052,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BONE-IN,LN&FAT,RAW"
 },
 {
   data: 10053,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRSD"
 },
 {
   data: 10054,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRLD"
 },
 {
   data: 10055,
   value: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BONE-IN,LN&FAT,CKD,RSTD"
 },
 {
   data: 10056,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BONE-IN,LN,RAW"
 },
 {
   data: 10057,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN,CKD,BRSD"
 },
 {
   data: 10058,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN,CKD,BRLD"
 },
 {
   data: 10059,
   value: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BONE-IN,LN,CKD,RSTD"
 },
 {
   data: 10060,
   value: "PORK  FRSH  LOIN  TENDERLOIN   LN ONLY  RAW"
 },
 {
   data: 10061,
   value: "PORK,FRSH,LOIN,TENDERLOIN,LN,CKD,RSTD"
 },
 {
   data: 10062,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,RAW"
 },
 {
   data: 10063,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,CKD,BRSD"
 },
 {
   data: 10064,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,CKD,BRLD"
 },
 {
   data: 10065,
   value: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN&FAT,CKD,RSTD"
 },
 {
   data: 10066,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,RAW"
 },
 {
   data: 10067,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,BRSD"
 },
 {
   data: 10068,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,BRLD"
 },
 {
   data: 10069,
   value: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN,CKD,RSTD"
 },
 {
   data: 10070,
   value: "PORK,FRSH,SHLDR,WHL,LN&FAT,RAW"
 },
 {
   data: 10071,
   value: "PORK,FRSH,SHLDR,WHL,LN&FAT,CKD,RSTD"
 },
 {
   data: 10072,
   value: "PORK,FRSH,SHLDR,WHL,LN,RAW"
 },
 {
   data: 10073,
   value: "PORK,FRSH,SHLDR,WHL,LN,CKD,RSTD"
 },
 {
   data: 10074,
   value: "PORK,FRSH,SHLDR,ARM PICNIC,LN&FAT,RAW"
 },
 {
   data: 10075,
   value: "PORK,FRSH,SHLDR,ARM PICNIC,LN&FAT,CKD,BRSD"
 },
 {
   data: 10076,
   value: "PORK,FRSH,SHLDR,ARM PICNIC,LN&FAT,CKD,RSTD"
 },
 {
   data: 10077,
   value: "PORK,FRSH,SHLDR,ARM PICNIC,LN,RAW"
 },
 {
   data: 10078,
   value: "PORK,FRSH,SHLDR,ARM PICNIC,LN,CKD,BRSD"
 },
 {
   data: 10079,
   value: "PORK,FRSH,SHLDR,ARM PICNIC,LN,CKD,RSTD"
 },
 {
   data: 10080,
   value: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN & FAT,RAW"
 },
 {
   data: 10081,
   value: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STKS),LN & FAT,CKD,BRSD"
 },
 {
   data: 10082,
   value: "PORK,FRSH,SHLDR,BLADE,BOSTON (STEAKS),LN&FAT,CKD,BRLD"
 },
 {
   data: 10083,
   value: "PORK,FRSH,SHLDR,BLADE,BOSTON (ROASTS),LN&FAT,CKD,RSTD"
 },
 {
   data: 10084,
   value: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN,RAW"
 },
 {
   data: 10085,
   value: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN,CKD,BRSD"
 },
 {
   data: 10086,
   value: "PORK,FRSH,SHLDR,BLADE,BOSTON (STEAKS),LN,CKD,BRLD"
 },
 {
   data: 10087,
   value: "PORK,FRSH,SHLDR,BLADE,BOSTON (ROASTS),LN,CKD,RSTD"
 },
 {
   data: 10088,
   value: "PORK,FRSH,SPARERIBS,LN&FAT,RAW"
 },
 {
   data: 10089,
   value: "PORK,FRSH,SPARERIBS,LN&FAT,CKD,BRSD"
 },
 {
   data: 10093,
   value: "PORK,FRSH,COMP OF RTL CUTS (LEG,LOIN,&SHLDR),LN,CKD"
 },
 {
   data: 10096,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,BRAIN,RAW"
 },
 {
   data: 10097,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,BRSD"
 },
 {
   data: 10098,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,CHITTERLINGS,RAW"
 },
 {
   data: 10099,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,CHITTERLINGS,CKD,SIMMRD"
 },
 {
   data: 10100,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,EARS,FRZ,RAW"
 },
 {
   data: 10101,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,EARS,FRZ,CKD,SIMMRD"
 },
 {
   data: 10102,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,FEET,RAW"
 },
 {
   data: 10103,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,HEART,RAW"
 },
 {
   data: 10104,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,HEART,CKD,BRSD"
 },
 {
   data: 10105,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,JOWL,RAW"
 },
 {
   data: 10106,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW"
 },
 {
   data: 10107,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,BRSD"
 },
 {
   data: 10109,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LEAF FAT,RAW"
 },
 {
   data: 10110,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LIVER,RAW"
 },
 {
   data: 10111,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LIVER,CKD,BRSD"
 },
 {
   data: 10112,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LUNGS,RAW"
 },
 {
   data: 10113,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD"
 },
 {
   data: 10114,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,MECHANICALLY SEPARATED,RAW"
 },
 {
   data: 10115,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW"
 },
 {
   data: 10116,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD"
 },
 {
   data: 10117,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW"
 },
 {
   data: 10118,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD"
 },
 {
   data: 10119,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,STOMACH,RAW"
 },
 {
   data: 10120,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN,CKD,PAN-FRIED"
 },
 {
   data: 10121,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TONGUE,RAW"
 },
 {
   data: 10122,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,BRSD"
 },
 {
   data: 10123,
   value: "PORK,CURED,BACON,UNPREP"
 },
 {
   data: 10124,
   value: "PORK,CURED,BACON,CKD,BRLD,PAN-FRIED OR RSTD"
 },
 {
   data: 10128,
   value: "PORK,CURED,BRKFST STRIPS,RAW OR UNHTD"
 },
 {
   data: 10129,
   value: "PORK,CURED,BRKFST STRIPS,CKD"
 },
 {
   data: 10130,
   value: "PORK,CURED,CANADIAN-STYLE BACON,UNHTD"
 },
 {
   data: 10131,
   value: "PORK,CURED,CANADIAN-STYLE BACON,GRILLED"
 },
 {
   data: 10132,
   value: "PORK,CURED,FEET,PICKLED"
 },
 {
   data: 10134,
   value: "PORK,CURED,HAM,BNLESS,EX LN (APPROX 5% FAT),RSTD"
 },
 {
   data: 10136,
   value: "PORK,CURED,HAM,BNLESS,REG (APPROX 11% FAT),RSTD"
 },
 {
   data: 10137,
   value: "PORK,CURED,HAM,EX LN (APPROX 4% FAT),CND,UNHTD"
 },
 {
   data: 10138,
   value: "PORK,CURED,HAM,EX LN (APPROX 4% FAT),CND,RSTD"
 },
 {
   data: 10139,
   value: "PORK,CURED,HAM,REG (APPROX 13% FAT),CND,UNHTD"
 },
 {
   data: 10140,
   value: "PORK,CURED,HAM,REG (APPROX 13% FAT),CND,RSTD"
 },
 {
   data: 10141,
   value: "PORK,CURED,HAM,CNTR SLICE,COUNTRY-STYLE,LN,RAW"
 },
 {
   data: 10142,
   value: "PORK,CURED,HAM,CNTR SLICE,LN&FAT,UNHTD"
 },
 {
   data: 10146,
   value: "PORK,CURED,HAM,PATTIES,UNHTD"
 },
 {
   data: 10147,
   value: "PORK,CURED,HAM,PATTIES,GRILLED"
 },
 {
   data: 10149,
   value: "PORK,CURED,HAM,STEAK,BNLESS,EX LN,UNHTD"
 },
 {
   data: 10150,
   value: "PORK,CURED,HAM,WHL,LN&FAT,UNHTD"
 },
 {
   data: 10151,
   value: "PORK,CURED,HAM,WHL,LN&FAT,RSTD"
 },
 {
   data: 10152,
   value: "PORK,CURED,HAM,WHL,LN,UNHTD"
 },
 {
   data: 10153,
   value: "PORK,CURED,HAM,WHL,LN,RSTD"
 },
 {
   data: 10158,
   value: "USDA CMDTY,PORK,CND"
 },
 {
   data: 10165,
   value: "PORK,CURED,SALT PORK,RAW"
 },
 {
   data: 10166,
   value: "PORK,CURED,FAT (FROM HAM&ARM PICNIC),UNHTD"
 },
 {
   data: 10167,
   value: "PORK,CURED,FAT (FROM HAM&ARM PICNIC),RSTD"
 },
 {
   data: 10168,
   value: "PORK,CURED,SHLDR,ARM PICNIC,LN&FAT,RSTD"
 },
 {
   data: 10169,
   value: "PORK,CURED,SHLDR,ARM PICNIC,LN,RSTD"
 },
 {
   data: 10170,
   value: "PORK,CURED,SHLDR,BLADE ROLL,LN&FAT,UNHTD"
 },
 {
   data: 10171,
   value: "PORK,CURED,SHLDR,BLADE ROLL,LN&FAT,RSTD"
 },
 {
   data: 10173,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,FEET,CKD,SIMMRD"
 },
 {
   data: 10174,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TAIL,RAW"
 },
 {
   data: 10175,
   value: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TAIL,CKD,SIMMRD"
 },
 {
   data: 10176,
   value: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,CKD,PAN-FRIED"
 },
 {
   data: 10177,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN,CKD,PAN-FRIED"
 },
 {
   data: 10178,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN&FAT,CKD,PAN-FRIED"
 },
 {
   data: 10179,
   value: "PORK,FRSH,LOIN,CNTR LOIN CHOPS,BONE-IN,LN&FAT,CKD,PAN-FRIED"
 },
 {
   data: 10180,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN&FAT,CKD,PAN-FRIED"
 },
 {
   data: 10181,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,PAN-FRIED"
 },
 {
   data: 10182,
   value: "PORK,CURED,HAM,BNLESS,EX LN&REG,UNHTD"
 },
 {
   data: 10183,
   value: "PORK,CURED,HAM,BNLESS,EX LN&REG,RSTD"
 },
 {
   data: 10184,
   value: "PORK,CURED,HAM,EX LN&REG,CND,UNHTD"
 },
 {
   data: 10185,
   value: "PORK,CURED,HAM,EX LN&REG,CND,RSTD"
 },
 {
   data: 10186,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN&FAT,CKD,PAN-FRIED"
 },
 {
   data: 10187,
   value: "PORK,FRSH,COMP (LEG,LOIN,SHLDR,&SPARERIBS),LN&FAT,RAW"
 },
 {
   data: 10188,
   value: "PORK,FRSH,COMP (LEG,LOIN,SHLDR,&SPARERIBS),LN&FAT,CKD"
 },
 {
   data: 10192,
   value: "PORK,FRSH,BACKRIBS,LN&FAT,RAW"
 },
 {
   data: 10193,
   value: "PORK,FRSH,BACKRIBS,LN&FAT,CKD,RSTD"
 },
 {
   data: 10194,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BNLESS,LN&FAT,RAW"
 },
 {
   data: 10195,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN&FAT,CKD,BRSD"
 },
 {
   data: 10196,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN&FAT,CKD,BRLD"
 },
 {
   data: 10197,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN&FAT,CKD,PAN-FRIED"
 },
 {
   data: 10198,
   value: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BNLESS,LN&FAT,CKD,RSTD"
 },
 {
   data: 10199,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BNLESS,LN,RAW"
 },
 {
   data: 10200,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN,CKD,BRSD"
 },
 {
   data: 10201,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN,CKD,BRLD"
 },
 {
   data: 10202,
   value: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN,CKD,PAN-FRIED"
 },
 {
   data: 10203,
   value: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BNLESS,LN,CKD,RSTD"
 },
 {
   data: 10204,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN&FAT,RAW"
 },
 {
   data: 10205,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN&FAT,CKD,BRSD"
 },
 {
   data: 10206,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BONE-IN,CKD,RSTD"
 },
 {
   data: 10207,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,RAW"
 },
 {
   data: 10208,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,CKD,BRSD"
 },
 {
   data: 10209,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BONE-IN,CKD,RSTD"
 },
 {
   data: 10210,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BNLESS,LN&FAT,RAW"
 },
 {
   data: 10211,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN&FAT,CKD,BRSD"
 },
 {
   data: 10212,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN&FAT,CKD,BRLD"
 },
 {
   data: 10213,
   value: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BNLESS,LN&FAT,CKD,RSTD"
 },
 {
   data: 10214,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BNLESS,LN,RAW"
 },
 {
   data: 10215,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN,CKD,BRSD"
 },
 {
   data: 10216,
   value: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN,CKD,BRLD"
 },
 {
   data: 10217,
   value: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BNLESS,LN,CKD,RSTD"
 },
 {
   data: 10218,
   value: "PORK,FRSH,LOIN,TENDERLOIN,LN&FAT,RAW"
 },
 {
   data: 10219,
   value: "PORK,FRESH,GROUND,RAW"
 },
 {
   data: 10220,
   value: "PORK,FRESH,GROUND,COOKED"
 },
 {
   data: 10221,
   value: "PORK,FRSH,LOIN,TENDERLOIN,LN&FAT,CKD,BRLD"
 },
 {
   data: 10222,
   value: "PORK,FRSH,LOIN,TENDERLOIN,LN&FAT,CKD,RSTD"
 },
 {
   data: 10223,
   value: "PORK,FRSH,LOIN,TENDERLOIN,LN,CKD,BRLD"
 },
 {
   data: 10224,
   value: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN&FAT,RAW"
 },
 {
   data: 10225,
   value: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN,RAW"
 },
 {
   data: 10226,
   value: "PORK,FRSH,COMP OF RTL CUTS (LOIN & SHLDR BLADE),LN & FAT,RAW"
 },
 {
   data: 10227,
   value: "PORK,FRSH,COMP OF RTL CUTS (LOIN&SHLDR BLADE),LN&FAT,CKD"
 },
 {
   data: 10228,
   value: "PORK,FRSH,COMP OF RTL CUTS (LOIN&SHLDR BLADE),LN,RAW"
 },
 {
   data: 10229,
   value: "PORK,FRSH,COMP OF RTL CUTS (LOIN&SHLDR BLADE),LN,CKD"
 },
 {
   data: 10802,
   value: "USDA COMMODITY,PORK,CURED,HAM,BNLESS,CKD,HTD"
 },
 {
   data: 10803,
   value: "USDA COMMODITY,PORK,GROUND,FINE/COARSE,FRZ,CKD"
 },
 {
   data: 10804,
   value: "USDA COMMODITY,PORK,CURED,HAM,BNLESS,CKD,UNHTD"
 },
 {
   data: 10805,
   value: "USDA COMMODITY,PORK,GROUND,FINE/COARSE,FRZ,RAW"
 },
 {
   data: 10851,
   value: "HORMEL,CURE 81 HAM"
 },
 {
   data: 10852,
   value: "HORMEL ALWAYS TENDER,PORK TENDERLOIN,TERIYAKI-FLAVORED"
 },
 {
   data: 10853,
   value: "HORMEL ALWAYS TENDER,PORK TENDERLOIN,PEPPERCORN-FLAVORED"
 },
 {
   data: 10854,
   value: "HORMEL ALWAYS TENDER,PORK LOIN FILETS,LEMON GARLIC-FLAVORED"
 },
 {
   data: 10855,
   value: "HORMEL ALWAYS TENDER,CNTR CUT CHOPS,FRSH PORK"
 },
 {
   data: 10856,
   value: "HORMEL ALWAYS TENDER,BNLESS PORK LOIN,FRSH PORK"
 },
 {
   data: 10857,
   value: "HORMEL CANADIAN STYLE BACON"
 },
 {
   data: 10858,
   value: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,ENH,LN,CKD,PAN-BROIL"
 },
 {
   data: 10859,
   value: "PRK,FRSH,TOP LOIN (CHPS),BNLESS,ENHCD,LN & FAT,CKD,PAN-BRLD"
 },
 {
   data: 10860,
   value: "PORK,CURED,BACON,CKD,BKD"
 },
 {
   data: 10861,
   value: "PORK,CURED,BACON,CKD,MICROWAVED"
 },
 {
   data: 10862,
   value: "PORK,CURED,BACON,PRE-SLICED,CKD,PAN-FRIED"
 },
 {
   data: 10863,
   value: "PORK,FRSH,VAR MEATS & BY-PRODUCTS,STOMACH,CKD,SIMMRD"
 },
 {
   data: 10864,
   value: "PORK,BACON,RENDERED FAT,CKD"
 },
 {
   data: 10865,
   value: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10866,
   value: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN,UNHTD"
 },
 {
   data: 10867,
   value: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10868,
   value: "PORK,CURED,HAM -- H2O ADDED,SLICE,BONE-IN,LN,HTD,PAN-BROIL"
 },
 {
   data: 10869,
   value: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BONE-IN,LN,HTD,PAN-BROIL"
 },
 {
   data: 10870,
   value: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BNLESS,LN,HTD,PAN-BROIL"
 },
 {
   data: 10871,
   value: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN,HTD,RSTD"
 },
 {
   data: 10872,
   value: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN,UNHTD"
 },
 {
   data: 10873,
   value: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10874,
   value: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10875,
   value: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BONE-IN,LN,HTD,PAN-BROIL"
 },
 {
   data: 10876,
   value: "PRK,CRD,HAM W/ NAT JUCS,SPRL SLC,MEAT ONLY,BNLES,LN,HTD,RSTD"
 },
 {
   data: 10877,
   value: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10878,
   value: "PORK,CURED,HAM -- H2O ADDED,SLICE,BNLESS,LN,HTD,PAN-BROIL"
 },
 {
   data: 10879,
   value: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN,HTD,RSTD"
 },
 {
   data: 10880,
   value: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN,UNHTD"
 },
 {
   data: 10881,
   value: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10882,
   value: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BNLESS,LN,HTD,PAN-BROIL"
 },
 {
   data: 10883,
   value: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN,HTD,RSTD"
 },
 {
   data: 10884,
   value: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN,UNHTD"
 },
 {
   data: 10885,
   value: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN,UNHTD"
 },
 {
   data: 10886,
   value: "PORK,CURED,HAM -- H2O ADDED,SLICE,BONE-IN,LN,UNHTD"
 },
 {
   data: 10887,
   value: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN,UNHTD"
 },
 {
   data: 10888,
   value: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BONE-IN,LN,UNHTD"
 },
 {
   data: 10889,
   value: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,UNHTD,LN"
 },
 {
   data: 10890,
   value: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN,UNHTD"
 },
 {
   data: 10891,
   value: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN,UNHTD"
 },
 {
   data: 10892,
   value: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BONE-IN,LN,UNHTD"
 },
 {
   data: 10893,
   value: "PORK,CURED,HAM W/ NAT JUICES,SPIRAL SLICE,BNLESS,LN,UNHTD"
 },
 {
   data: 10894,
   value: "PORK,CURED,HAM,FAT,BNLESS,HTD"
 },
 {
   data: 10895,
   value: "PORK,CURED,HAM,FAT,BNLESS,UNHTD"
 },
 {
   data: 10898,
   value: "PORK,PICKLED PORK HOCKS"
 },
 {
   data: 10899,
   value: "PORK,CURED,HAM,SLICE,BONE-IN,LN,HTD,PAN-BROIL"
 },
 {
   data: 10900,
   value: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN & FAT,UNHTD"
 },
 {
   data: 10901,
   value: "PORK,CURED,HAM W/ NAT JUICES,SPIRL SLCE,BNLES,LN & FAT,UNHTD"
 },
 {
   data: 10902,
   value: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10903,
   value: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10904,
   value: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10905,
   value: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN & FAT,UNHTD"
 },
 {
   data: 10906,
   value: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10907,
   value: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10908,
   value: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10909,
   value: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN & FAT,UNHTD"
 },
 {
   data: 10910,
   value: "PORK,CURED,HAM -- H2O ADDED,SLICE,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10911,
   value: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10912,
   value: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10913,
   value: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10914,
   value: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10915,
   value: "PORK,CURED,HAM -- H2O ADDED,SLCE,BNE-IN,LN & FAT,HTD,PAN-BRL"
 },
 {
   data: 10916,
   value: "PORK,CURED,HAM -- H2O ADDED,SLCE,BNLESS,LN & FAT,HTD,PAN-BRL"
 },
 {
   data: 10917,
   value: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN & FAT,HTD,RSTD"
 },
 {
   data: 10918,
   value: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10919,
   value: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10920,
   value: "PORK,CURED,HAM & H2O PRDCT,SLCE,BNE-IN,LN & FAT,HTD,PAN-BRL"
 },
 {
   data: 10921,
   value: "PORK,CURED,HAM & H2O PRDCT,SLICE,BNLESS,LN & FAT,HTD,PAN-BRL"
 },
 {
   data: 10922,
   value: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN & FAT,HTD,RSTD"
 },
 {
   data: 10923,
   value: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10924,
   value: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10925,
   value: "PORK,CURED,HAM W/ NAT JUICS,SLCE,BNE-IN,LN & FAT,HTD,PAN-BRL"
 },
 {
   data: 10926,
   value: "PORK,CURED,HAM W/ NAT JUICS,SLICE,BNLES,LN & FAT,HTD,PAN-BRL"
 },
 {
   data: 10927,
   value: "PORK,CURED,HAM W/ NAT JUCS,SPRL SLCE,BNLES,LN & FAT,HTD,RSTD"
 },
 {
   data: 10928,
   value: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN & FAT,HTD,RSTD"
 },
 {
   data: 10929,
   value: "PORK,CURED,HAM,RUMP,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10931,
   value: "PORK,CURED,HAM,RUMP,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10932,
   value: "PORK,CURED,HAM,RUMP,BONE-IN,LN,UNHTD"
 },
 {
   data: 10933,
   value: "PORK,CURED,HAM,SHANK,BONE-IN,LN,HTD,RSTD"
 },
 {
   data: 10934,
   value: "PORK,CURED,HAM,SHANK,BONE-IN,LN,UNHTD"
 },
 {
   data: 10935,
   value: "PORK,CURED,HAM,SHANK,BONE-IN,LN & FAT,HTD,RSTD"
 },
 {
   data: 10936,
   value: "PORK,CURED,HAM,SHANK,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10937,
   value: "PORK,CURED,HAM,SLICE,BONE-IN,LN & FAT,HTD,PAN-BROIL"
 },
 {
   data: 10938,
   value: "PORK,CURED,HAM,SLICE,BONE-IN,LN,UNHTD"
 },
 {
   data: 10939,
   value: "PORK,CURED,HAM,SLICE,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10940,
   value: "PORK,FRSH,SPARERIBS,LN & FAT,CKD,RSTD"
 },
 {
   data: 10942,
   value: "PORK,FRSH,ENHANCED,COMP OF FAT,RAW"
 },
 {
   data: 10943,
   value: "PORK,FRSH,ENHANCED,LOIN,TENDERLOIN,LN,CKD,RSTD"
 },
 {
   data: 10944,
   value: "PORK,FRSH,ENHANCED,LOIN,TENDERLOIN,LN,RAW"
 },
 {
   data: 10945,
   value: "PORK,FRSH,ENHCED,SHLDR,(BOSTON BUTT),BLDE (STKS),LN,CKD,BRSD"
 },
 {
   data: 10946,
   value: "PORK,FRSH,ENHANCED,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN,RAW"
 },
 {
   data: 10947,
   value: "PORK,FRSH,ENHANCED,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,BRLD"
 },
 {
   data: 10948,
   value: "PORK,FRSH,ENHANCED,LOIN,TOP LOIN (CHOPS),BNLESS,LN,RAW"
 },
 {
   data: 10949,
   value: "PORK,FRSH,ENHANCED,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,RAW"
 },
 {
   data: 10950,
   value: "PORK,FRSH,ENHCD,LN,TOP LOIN (CHOPS),BNLESS,LN & FAT,CKD,BRLD"
 },
 {
   data: 10951,
   value: "PORK,FRSH,ENHANCED,LOIN,TENDERLOIN,LN & FAT,RAW"
 },
 {
   data: 10952,
   value: "PORK,FRSH,ENHANCED,LOIN,TENDERLOIN,LN & FAT,CKD,RSTD"
 },
 {
   data: 10953,
   value: "PORK,FRSH,ENHCD,SHLDR,(BOSTON BUTT),BLDE (STKS),LN & FAT,RAW"
 },
 {
   data: 10954,
   value: "PORK,FRSH,ENHCED,SHLDR,(BSTN BUTT),BLDE(STKS),LN&FAT,BRSD"
 },
 {
   data: 10955,
   value: "PORK,CURED,HAM,RUMP,BONE-IN,LN & FAT,UNHTD"
 },
 {
   data: 10956,
   value: "PORK,LOIN,LEG CAP STEAK,BNLESS,LN & FAT,CKD,BRLD"
 },
 {
   data: 10957,
   value: "PORK,LEG CAP STEAK,BNLESS,LN & FAT,RAW"
 },
 {
   data: 10958,
   value: "PORK,SHLDR BREAST,BNLESS,LN & FAT,RAW"
 },
 {
   data: 10959,
   value: "PORK,SHLDR BREAST,BNLESS,LN & FAT,CKD,BRLD"
 },
 {
   data: 10960,
   value: "PORK,SHLDR,PETITE TENDER,BNLESS,LN & FAT,CKD,BRLD"
 },
 {
   data: 10961,
   value: "PORK,SHLDR PETITE TENDER,BNLESS,LN & FAT,RAW"
 },
 {
   data: 10962,
   value: "PORK,LEG SIRLOIN TIP RST,BNLESS,LN & FAT,CKD,BRSD"
 },
 {
   data: 10963,
   value: "PORK,LEG SIRLOIN TIP RST,BNLESS,LN & FAT,RAW"
 },
 {
   data: 10971,
   value: "PORK,GROUND,72% LN / 28% FAT,RAW"
 },
 {
   data: 10972,
   value: "PORK,GROUND,84% LN / 16% FAT,RAW"
 },
 {
   data: 10973,
   value: "PORK,GROUND,96% LN / 4% FAT,RAW"
 },
 {
   data: 10974,
   value: "PORK,GROUND,72% LN / 28% FAT,CKD,CRUMBLES"
 },
 {
   data: 10975,
   value: "PORK,GROUND,84% LN / 16% FAT,CKD,CRUMBLES"
 },
 {
   data: 10976,
   value: "PORK,GROUND,96% LN / 4% FAT,CKD,CRUMBLES"
 },
 {
   data: 10977,
   value: "PORK,GROUND,72% LN / 28% FAT,CKD,PAN-BROILED"
 },
 {
   data: 10978,
   value: "PORK,GROUND,84% LN / 16% FAT,CKD,PAN-BROILED"
 },
 {
   data: 10979,
   value: "PORK,GROUND,96% LN / 4% FAT,CKD,PAN-BROILED"
 },
 {
   data: 10982,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS OR ROASTS),BNLESS,LN,RAW"
 },
 {
   data: 10983,
   value: "PORK,FRSH,LOIN,BLADE (ROASTS),BNLESS,LN,CKD,RSTD"
 },
 {
   data: 10984,
   value: "PORK,FRSH,LOIN,BLADE (CHOPS),BNLESS,LN,BNLESS,CKD,BRLD"
 },
 {
   data: 10985,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BNLESS,CKD,BRLD"
 },
 {
   data: 10986,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BONE-IN,CKD,BRLD"
 },
 {
   data: 10987,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BNLESS,CKD,RSTD"
 },
 {
   data: 10988,
   value: "PORK,FRSH,BLADE,(CHOPS),BNLESS,LN & FAT,CKD,BRLD"
 },
 {
   data: 10989,
   value: "PORK,FRSH,LOIN,BLDE (CHOPS OR ROAST),BNLESS,LN & FAT OLY,RAW"
 },
 {
   data: 10990,
   value: "PORK,FRSH,LOIN,BLADE (ROASTS),BNLESS,LN & FAT,CKD,RSTD"
 },
 {
   data: 10991,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BNLESS,CKD,BRLD"
 },
 {
   data: 10992,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BONE-IN,CKD,BRLD"
 },
 {
   data: 10993,
   value: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BNLESS,CKD,RSTD"
 },
 {
   data: 10994,
   value: "BACON,PRE-SLICED,REDUCED/LOW NA,UNPREP"
 },
 {
   data: 11001,
   value: "ALFALFA SEEDS,SPROUTED,RAW"
 },
 {
   data: 11003,
   value: "AMARANTH LEAVES,RAW"
 },
 {
   data: 11004,
   value: "AMARANTH LEAVES,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11005,
   value: "ARROWHEAD,RAW"
 },
 {
   data: 11006,
   value: "ARROWHEAD,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11007,
   value: "ARTICHOKES,(GLOBE OR FRENCH),RAW"
 },
 {
   data: 11008,
   value: "ARTICHOKES,(GLOBE OR FRENCH),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11009,
   value: "ARTICHOKES,(GLOBE OR FRENCH),FRZ,UNPREP"
 },
 {
   data: 11010,
   value: "ARTICHOKES,(GLOBE OR FRENCH),FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11011,
   value: "ASPARAGUS,RAW"
 },
 {
   data: 11012,
   value: "ASPARAGUS,CKD,BLD,DRND"
 },
 {
   data: 11013,
   value: "ASPARAGUS,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11015,
   value: "ASPARAGUS,CND,DRND SOL"
 },
 {
   data: 11018,
   value: "ASPARAGUS,FRZ,UNPREP"
 },
 {
   data: 11019,
   value: "ASPARAGUS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11022,
   value: "BALSAM-PEAR (BITTER GOURD),LEAFY TIPS,RAW"
 },
 {
   data: 11023,
   value: "BALSAM-PEAR (BITTER GOURD),LEAFY TIPS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11024,
   value: "BALSAM-PEAR (BITTER GOURD),PODS,RAW"
 },
 {
   data: 11025,
   value: "BALSAM-PEAR (BITTER GOURD),PODS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11026,
   value: "BAMBOO SHOOTS,RAW"
 },
 {
   data: 11027,
   value: "BAMBOO SHOOTS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11028,
   value: "BAMBOO SHOOTS,CND,DRND SOL"
 },
 {
   data: 11029,
   value: "BEANS,KIDNEY,MATURE SEEDS,SPROUTED,RAW"
 },
 {
   data: 11030,
   value: "BEANS,KIDNEY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11031,
   value: "LIMA BNS,IMMAT SEEDS,RAW"
 },
 {
   data: 11032,
   value: "LIMA BNS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11033,
   value: "BEANS,LIMA,IMMAT SEEDS,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11037,
   value: "LIMA BNS,IMMAT SEEDS,FRZ,FORDHOOK,UNPREP"
 },
 {
   data: 11038,
   value: "LIMA BNS,IMMAT SEEDS,FRZ,FORDHOOK,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11039,
   value: "LIMA BNS,IMMAT SEEDS,FRZ,BABY,UNPREP"
 },
 {
   data: 11040,
   value: "LIMA BNS,IMMAT SEEDS,FRZ,BABY,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11043,
   value: "MUNG BNS,MATURE SEEDS,SPROUTED,RAW"
 },
 {
   data: 11044,
   value: "MUNG BNS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11045,
   value: "MUNG BNS,MATURE SEEDS,SPROUTED,CKD,STIR-FRIED"
 },
 {
   data: 11046,
   value: "BEANS,NAVY,MATURE SEEDS,SPROUTED,RAW"
 },
 {
   data: 11047,
   value: "BEANS,NAVY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11048,
   value: "BEANS,PINTO,IMMAT SEEDS,FRZ,UNPREP"
 },
 {
   data: 11049,
   value: "BEANS,PINTO,IMMAT SEEDS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11050,
   value: "BEANS,SHELLIE,CND,SOL & LIQUIDS"
 },
 {
   data: 11052,
   value: "BEANS,SNAP,GREEN,RAW"
 },
 {
   data: 11053,
   value: "BEANS,SNAP,GRN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11054,
   value: "BEANS,SNAP,GRN VAR,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11056,
   value: "BEANS,SNAP,GRN,CND,REG PK,DRND SOL"
 },
 {
   data: 11058,
   value: "BEANS,SNAP,CND,ALL STYLES,SEASONED,SOL&LIQUIDS"
 },
 {
   data: 11060,
   value: "BEANS,SNAP,GRN,FRZ,ALL STYLES,UNPREP"
 },
 {
   data: 11061,
   value: "BEANS,SNAP,GRN,FRZ,CKD,BLD,DRND WO/SALT"
 },
 {
   data: 11062,
   value: "BEANS,SNAP,GRN,FRZ,ALL STYLES,MICROWAVED"
 },
 {
   data: 11063,
   value: "BEANS,SNAP,GRN,MICROWAVED"
 },
 {
   data: 11080,
   value: "BEETS,RAW"
 },
 {
   data: 11081,
   value: "BEETS,CKD,BLD,DRND"
 },
 {
   data: 11082,
   value: "BEETS,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11084,
   value: "BEETS,CND,DRND SOL"
 },
 {
   data: 11086,
   value: "BEET GREENS,RAW"
 },
 {
   data: 11087,
   value: "BEET GRNS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11088,
   value: "BROADBEANS,IMMAT SEEDS,RAW"
 },
 {
   data: 11089,
   value: "BROADBEANS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11090,
   value: "BROCCOLI,RAW"
 },
 {
   data: 11091,
   value: "BROCCOLI,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11092,
   value: "BROCCOLI,FRZ,CHOPD,UNPREP"
 },
 {
   data: 11093,
   value: "BROCCOLI,FRZ,CHOPD,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11094,
   value: "BROCCOLI,FRZ,SPEARS,UNPREP"
 },
 {
   data: 11095,
   value: "BROCCOLI,FRZ,SPEARS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11096,
   value: "BROCCOLI RAAB,RAW"
 },
 {
   data: 11097,
   value: "BROCCOLI RAAB,CKD"
 },
 {
   data: 11098,
   value: "BRUSSELS SPROUTS,RAW"
 },
 {
   data: 11099,
   value: "BRUSSELS SPROUTS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11100,
   value: "BRUSSELS SPROUTS,FRZ,UNPREP"
 },
 {
   data: 11101,
   value: "BRUSSELS SPROUTS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11104,
   value: "BURDOCK ROOT,RAW"
 },
 {
   data: 11105,
   value: "BURDOCK ROOT,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11106,
   value: "BUTTERBUR,(FUKI),RAW"
 },
 {
   data: 11107,
   value: "BUTTERBUR,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11108,
   value: "BUTTERBUR,CANNED"
 },
 {
   data: 11109,
   value: "CABBAGE,RAW"
 },
 {
   data: 11110,
   value: "CABBAGE,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11112,
   value: "CABBAGE,RED,RAW"
 },
 {
   data: 11113,
   value: "CABBAGE,RED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11114,
   value: "CABBAGE,SAVOY,RAW"
 },
 {
   data: 11115,
   value: "CABBAGE,SAVOY,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11116,
   value: "CABBAGE,CHINESE (PAK-CHOI),RAW"
 },
 {
   data: 11117,
   value: "CABBAGE,CHINESE (PAK-CHOI),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11119,
   value: "CABBAGE,CHINESE (PE-TSAI),RAW"
 },
 {
   data: 11120,
   value: "CABBAGE,CHINESE (PE-TSAI),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11122,
   value: "CARDOON,RAW"
 },
 {
   data: 11123,
   value: "CARDOON,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11124,
   value: "CARROTS,RAW"
 },
 {
   data: 11125,
   value: "CARROTS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11126,
   value: "CARROTS,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11128,
   value: "CARROTS,CND,REG PK,DRND SOL"
 },
 {
   data: 11130,
   value: "CARROTS,FROZEN,UNPREPARED"
 },
 {
   data: 11131,
   value: "CARROTS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11134,
   value: "CASSAVA,RAW"
 },
 {
   data: 11135,
   value: "CAULIFLOWER,RAW"
 },
 {
   data: 11136,
   value: "CAULIFLOWER,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11137,
   value: "CAULIFLOWER,FRZ,UNPREP"
 },
 {
   data: 11138,
   value: "CAULIFLOWER,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11141,
   value: "CELERIAC,RAW"
 },
 {
   data: 11142,
   value: "CELERIAC,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11143,
   value: "CELERY,RAW"
 },
 {
   data: 11144,
   value: "CELERY,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11145,
   value: "CELTUCE,RAW"
 },
 {
   data: 11147,
   value: "CHARD,SWISS,RAW"
 },
 {
   data: 11148,
   value: "CHARD,SWISS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11149,
   value: "CHAYOTE,FRUIT,RAW"
 },
 {
   data: 11150,
   value: "CHAYOTE,FRUIT,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11151,
   value: "CHICORY,WITLOOF,RAW"
 },
 {
   data: 11152,
   value: "CHICORY GREENS,RAW"
 },
 {
   data: 11154,
   value: "CHICORY ROOTS,RAW"
 },
 {
   data: 11156,
   value: "CHIVES,RAW"
 },
 {
   data: 11157,
   value: "CHRYSANTHEMUM,GARLAND,RAW"
 },
 {
   data: 11158,
   value: "CHRYSANTHEMUM,GARLAND,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11159,
   value: "COLESLAW,HOME-PREPARED"
 },
 {
   data: 11161,
   value: "COLLARDS,RAW"
 },
 {
   data: 11162,
   value: "COLLARDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11163,
   value: "COLLARDS,FRZ,CHOPD,UNPREP"
 },
 {
   data: 11164,
   value: "COLLARDS,FRZ,CHOPD,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11165,
   value: "CORIANDER (CILANTRO) LEAVES,RAW"
 },
 {
   data: 11167,
   value: "CORN,SWT,YEL,RAW"
 },
 {
   data: 11168,
   value: "CORN,SWT,YEL,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11170,
   value: "CORN,SWT,YEL,CND,BRINE PK,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11172,
   value: "CORN,SWT,YEL,CND,WHL KERNEL,DRND SOL"
 },
 {
   data: 11174,
   value: "CORN,SWT,YEL,CND,CRM STYLE,REG PK"
 },
 {
   data: 11176,
   value: "CORN,SWT,YEL,CND,VACUUM PK,REG PK"
 },
 {
   data: 11177,
   value: "CORN,SWT,YEL,CND,DRND SOL,RINSED W/ TAP H2O"
 },
 {
   data: 11178,
   value: "CORN,SWT,YEL,FRZ,KRNLS CUT OFF COB,UNPREP"
 },
 {
   data: 11179,
   value: "CORN,SWT,YEL,FRZ,KRNLS CUT OFF COB,BLD,DRND,WO/SALT"
 },
 {
   data: 11180,
   value: "CORN,SWT,YEL,FRZ,KRNLS ON COB,UNPREP"
 },
 {
   data: 11181,
   value: "CORN,SWT,YEL,FRZ,KRNLS ON COB,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11182,
   value: "CORN,YEL,WHL KERNEL,FRZ,MICROWAVED"
 },
 {
   data: 11184,
   value: "CORN W/RED&GRN PEPPERS,CND,SOL&LIQUIDS"
 },
 {
   data: 11190,
   value: "CORNSALAD,RAW"
 },
 {
   data: 11191,
   value: "COWPEAS (BLACKEYES),IMMAT SEEDS,RAW"
 },
 {
   data: 11192,
   value: "COWPEAS (BLACKEYES),IMMAT SEEDS,CKD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11195,
   value: "COWPEAS (BLACKEYES),IMMAT SEEDS,FRZ,UNPREP"
 },
 {
   data: 11196,
   value: "COWPEAS (BLACKEYES),IMMTRE SEEDS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11197,
   value: "COWPEAS,YOUNG PODS W/SEEDS,RAW"
 },
 {
   data: 11198,
   value: "COWPEAS,YOUNG PODS W/SEEDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11199,
   value: "YARDLONG BEAN,RAW"
 },
 {
   data: 11200,
   value: "YARDLONG BEAN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11201,
   value: "COWPEAS,LEAFY TIPS,RAW"
 },
 {
   data: 11202,
   value: "COWPEAS,LEAFY TIPS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11203,
   value: "CRESS,GARDEN,RAW"
 },
 {
   data: 11204,
   value: "CRESS,GARDEN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11205,
   value: "CUCUMBER,WITH PEEL,RAW"
 },
 {
   data: 11206,
   value: "CUCUMBER,PEELED,RAW"
 },
 {
   data: 11207,
   value: "DANDELION GREENS,RAW"
 },
 {
   data: 11208,
   value: "DANDELION GRNS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11209,
   value: "EGGPLANT,RAW"
 },
 {
   data: 11210,
   value: "EGGPLANT,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11211,
   value: "EDAMAME,FRZ,UNPREP"
 },
 {
   data: 11212,
   value: "EDAMAME,FRZ,PREP"
 },
 {
   data: 11213,
   value: "ENDIVE,RAW"
 },
 {
   data: 11215,
   value: "GARLIC,RAW"
 },
 {
   data: 11216,
   value: "GINGER ROOT,RAW"
 },
 {
   data: 11218,
   value: "GOURD,WHITE-FLOWERED (CALABASH),RAW"
 },
 {
   data: 11219,
   value: "GOURD,WHITE-FLOWERED (CALABASH),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11220,
   value: "GOURD,DISHCLOTH (TOWELGOURD),RAW"
 },
 {
   data: 11221,
   value: "GOURD,DISHCLOTH (TOWELGOURD),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11222,
   value: "DRUMSTICK LEAVES,RAW"
 },
 {
   data: 11223,
   value: "DRUMSTICK LEAVES,CKD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11224,
   value: "HYACINTH-BEANS,IMMAT SEEDS,RAW"
 },
 {
   data: 11225,
   value: "HYACINTH-BEANS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11226,
   value: "JERUSALEM-ARTICHOKES,RAW"
 },
 {
   data: 11228,
   value: "JEW'S EAR,(PEPEAO),RAW"
 },
 {
   data: 11230,
   value: "PEPEAO,DRIED"
 },
 {
   data: 11231,
   value: "JUTE,POTHERB,RAW"
 },
 {
   data: 11232,
   value: "JUTE,POTHERB,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11233,
   value: "KALE,RAW"
 },
 {
   data: 11234,
   value: "KALE,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11235,
   value: "KALE,FROZEN,UNPREPARED"
 },
 {
   data: 11236,
   value: "KALE,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11237,
   value: "KANPYO,(DRIED GOURD STRIPS)"
 },
 {
   data: 11238,
   value: "MUSHROOMS,SHIITAKE,RAW"
 },
 {
   data: 11239,
   value: "MUSHROOMS,CHANTERELLE,RAW"
 },
 {
   data: 11240,
   value: "MUSHROOMS,MOREL,RAW"
 },
 {
   data: 11241,
   value: "KOHLRABI,RAW"
 },
 {
   data: 11242,
   value: "KOHLRABI,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11243,
   value: "MUSHROOMS,PORTABELLA,GRILLED"
 },
 {
   data: 11244,
   value: "LAMBSQUARTERS,RAW"
 },
 {
   data: 11245,
   value: "LAMBSQUARTERS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11246,
   value: "LEEKS,(BULB&LOWER LEAF-PORTION),RAW"
 },
 {
   data: 11247,
   value: "LEEKS,(BULB&LOWER LEAF-PORTION),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11248,
   value: "LENTILS,SPROUTED,RAW"
 },
 {
   data: 11249,
   value: "LENTILS,SPROUTED,CKD,STIR-FRIED,WO/SALT"
 },
 {
   data: 11250,
   value: "LETTUCE,BUTTERHEAD (INCL BOSTON&BIBB TYPES),RAW"
 },
 {
   data: 11251,
   value: "LETTUCE,COS OR ROMAINE,RAW"
 },
 {
   data: 11252,
   value: "LETTUCE,ICEBERG (INCL CRISPHEAD TYPES),RAW"
 },
 {
   data: 11253,
   value: "LETTUCE,GRN LEAF,RAW"
 },
 {
   data: 11254,
   value: "LOTUS ROOT,RAW"
 },
 {
   data: 11255,
   value: "LOTUS ROOT,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11257,
   value: "LETTUCE,RED LEAF,RAW"
 },
 {
   data: 11258,
   value: "MOUNTAIN YAM,HAWAII,RAW"
 },
 {
   data: 11259,
   value: "MOUNTAIN YAM,HAWAII,CKD,STMD,WO/SALT"
 },
 {
   data: 11260,
   value: "MUSHROOMS,WHITE,RAW"
 },
 {
   data: 11261,
   value: "MUSHROOMS,WHITE,CKD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11263,
   value: "MUSHROOMS,WHITE,STIR-FRIED"
 },
 {
   data: 11264,
   value: "MUSHROOMS,CND,DRND SOL"
 },
 {
   data: 11265,
   value: "MUSHROOMS,PORTABELLA,RAW"
 },
 {
   data: 11266,
   value: "MUSHROOMS,BROWN,ITALIAN,OR CRIMINI,RAW"
 },
 {
   data: 11267,
   value: "MUSHROOMS,SHIITAKE,STIR-FRIED"
 },
 {
   data: 11268,
   value: "MUSHROOMS,SHIITAKE,DRIED"
 },
 {
   data: 11269,
   value: "MUSHROOMS,SHIITAKE,CKD,WO/SALT"
 },
 {
   data: 11270,
   value: "MUSTARD GREENS,RAW"
 },
 {
   data: 11271,
   value: "MUSTARD GRNS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11272,
   value: "MUSTARD GRNS,FRZ,UNPREP"
 },
 {
   data: 11273,
   value: "MUSTARD GRNS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11274,
   value: "MUSTARD SPINACH,(TENDERGREEN),RAW"
 },
 {
   data: 11275,
   value: "MUSTARD SPINACH,(TENDERGREEN),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11276,
   value: "NEW ZEALAND SPINACH,RAW"
 },
 {
   data: 11277,
   value: "NEW ZEALAND SPINACH,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11278,
   value: "OKRA,RAW"
 },
 {
   data: 11279,
   value: "OKRA,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11280,
   value: "OKRA,FROZEN,UNPREPARED"
 },
 {
   data: 11281,
   value: "OKRA,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11282,
   value: "ONIONS,RAW"
 },
 {
   data: 11283,
   value: "ONIONS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11284,
   value: "ONIONS,DEHYDRATED FLAKES"
 },
 {
   data: 11285,
   value: "ONIONS,CND,SOL&LIQUIDS"
 },
 {
   data: 11286,
   value: "ONIONS,YEL,SAUTEED"
 },
 {
   data: 11287,
   value: "ONIONS,FRZ,CHOPD,UNPREP"
 },
 {
   data: 11288,
   value: "ONIONS,FRZ,CHOPD,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11289,
   value: "ONIONS,FRZ,WHL,UNPREP"
 },
 {
   data: 11290,
   value: "ONIONS,FRZ,WHL,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11291,
   value: "ONIONS,SPRING OR SCALLIONS (INCL TOPS&BULB),RAW"
 },
 {
   data: 11292,
   value: "ONIONS,YOUNG GRN,TOPS ONLY"
 },
 {
   data: 11293,
   value: "ONIONS,WELSH,RAW"
 },
 {
   data: 11294,
   value: "ONIONS,SWT,RAW"
 },
 {
   data: 11295,
   value: "ONION RINGS,BREADED,PAR FR,FRZ,UNPREP"
 },
 {
   data: 11296,
   value: "ONION RINGS,BREADED,PAR FR,FRZ,PREP,HTD IN OVEN"
 },
 {
   data: 11297,
   value: "PARSLEY,FRSH"
 },
 {
   data: 11298,
   value: "PARSNIPS,RAW"
 },
 {
   data: 11299,
   value: "PARSNIPS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11300,
   value: "PEAS,EDIBLE-PODDED,RAW"
 },
 {
   data: 11301,
   value: "PEAS,EDIBLE-PODDED,BLD,DRND,WO/ SALT"
 },
 {
   data: 11302,
   value: "PEAS,EDIBLE-PODDED,FRZ,UNPREP"
 },
 {
   data: 11303,
   value: "PEAS,EDIBLE-PODDED,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11304,
   value: "PEAS,GREEN,RAW"
 },
 {
   data: 11305,
   value: "PEAS,GRN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11306,
   value: "PEAS,GRN,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11308,
   value: "PEAS,GRN (INCLUDES BABY & LESUER TYPES),CND,DRND SOL,UNPREP"
 },
 {
   data: 11310,
   value: "PEAS,GRN,CND,SEASONED,SOL&LIQUIDS"
 },
 {
   data: 11311,
   value: "PEAS,GRN,CND,DRND SOL,RINSED IN TAP H2O"
 },
 {
   data: 11312,
   value: "PEAS,GRN,FRZ,UNPREP"
 },
 {
   data: 11313,
   value: "PEAS,GRN,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11316,
   value: "PEAS,MATURE SEEDS,SPROUTED,RAW"
 },
 {
   data: 11317,
   value: "PEAS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11318,
   value: "PEAS&CARROTS,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11322,
   value: "PEAS&CARROTS,FRZ,UNPREP"
 },
 {
   data: 11323,
   value: "PEAS&CARROTS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11324,
   value: "PEAS&ONIONS,CND,SOL&LIQUIDS"
 },
 {
   data: 11326,
   value: "PEAS&ONIONS,FRZ,UNPREP"
 },
 {
   data: 11327,
   value: "PEAS&ONIONS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11329,
   value: "PEPPERS,HOT CHILI,GRN,CND,PODS,EXCLUDING SEEDS,SOL&LIQUIDS"
 },
 {
   data: 11333,
   value: "PEPPERS,SWT,GRN,RAW"
 },
 {
   data: 11334,
   value: "PEPPERS,SWT,GRN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11335,
   value: "PEPPERS,SWT,GRN,CND,SOL&LIQUIDS"
 },
 {
   data: 11337,
   value: "PEPPERS,SWT,GRN,FRZ,CHOPD,UNPREP"
 },
 {
   data: 11338,
   value: "PEPPERS,SWT,GRN,FRZ,CHOPD,BLD,DRND,WO/SALT"
 },
 {
   data: 11339,
   value: "PEPPERS,SWT,GRN,SAUTEED"
 },
 {
   data: 11344,
   value: "PIGEONPEAS,IMMAT SEEDS,RAW"
 },
 {
   data: 11345,
   value: "PIGEONPEAS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11349,
   value: "POI"
 },
 {
   data: 11350,
   value: "POKEBERRY SHOOTS,(POKE),RAW"
 },
 {
   data: 11351,
   value: "POKEBERRY SHOOTS,(POKE),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11352,
   value: "POTATO,FLESH & SKN,RAW"
 },
 {
   data: 11353,
   value: "POTATOES,RUSSET,FLESH & SKN,RAW"
 },
 {
   data: 11354,
   value: "POTATOES,WHITE,FLESH & SKN,RAW"
 },
 {
   data: 11355,
   value: "POTATOES,RED,FLESH & SKN,RAW"
 },
 {
   data: 11356,
   value: "POTATOES,RUSSET,FLESH & SKN,BKD"
 },
 {
   data: 11357,
   value: "POTATOES,WHITE,FLESH & SKN,BKD"
 },
 {
   data: 11358,
   value: "POTATOES,RED,FLESH & SKN,BKD"
 },
 {
   data: 11359,
   value: "POTATOES,FR FR,CRNKL OR REG,SALT ADDED IN PROC,FRZ,AS PURCH"
 },
 {
   data: 11360,
   value: "POTATOES,FR FR,CRNKL/REG CUT,SALT ADDED IN PROC,FRZ,OVEN-HTD"
 },
 {
   data: 11362,
   value: "POTATOES,RAW,SKIN"
 },
 {
   data: 11363,
   value: "POTATOES,BKD,FLESH,WO/SALT"
 },
 {
   data: 11364,
   value: "POTATOES,BKD,SKN,WO/SALT"
 },
 {
   data: 11365,
   value: "POTATOES,BLD,CKD IN SKN,FLESH,WO/SALT"
 },
 {
   data: 11366,
   value: "POTATOES,BLD,CKD IN SKN,SKN,WO/SALT"
 },
 {
   data: 11367,
   value: "POTATOES,BLD,CKD WO/ SKN,FLESH,WO/ SALT"
 },
 {
   data: 11368,
   value: "POTATOES,MICROWAVED,CKD IN SKN,FLESH,WO/SALT"
 },
 {
   data: 11369,
   value: "POTATOES,MICROWAVED,CKD IN SKN,SKN,WO/SALT"
 },
 {
   data: 11370,
   value: "POTATOES,HASHED BROWN,HOME-PREPARED"
 },
 {
   data: 11371,
   value: "POTATOES,MSHD,HOME-PREPARED,WHL MILK & MARGARINE ADDED"
 },
 {
   data: 11372,
   value: "POTATOES,SCALLPD,HOME-PREPARED W/BUTTER"
 },
 {
   data: 11373,
   value: "POTATOES,AU GRATIN,HOME-PREPARED FROM RECIPE USING BUTTER"
 },
 {
   data: 11374,
   value: "POTATOES,CND,SOL&LIQUIDS"
 },
 {
   data: 11376,
   value: "POTATOES,CND,DRND SOL"
 },
 {
   data: 11378,
   value: "POTATOES,MSHD,DEHYD,FLAKES WO/MILK,DRY FORM"
 },
 {
   data: 11379,
   value: "POTATOES,MSHD,DEHYD,PREP FROM FLAKES WO/ MILK,WHL MILK & BUT"
 },
 {
   data: 11380,
   value: "POTATOES,MSHD,DEHYD,GRANULES WO/MILK,DRY FORM"
 },
 {
   data: 11381,
   value: "POTATOES,MSHD,DEHYD,PREP FR GRNLS WO/MILK,WHL MILK&BUTTER"
 },
 {
   data: 11382,
   value: "POTATOES,MSHD,DEHYD,GRANULES W/MILK,DRY FORM"
 },
 {
   data: 11383,
   value: "POTATOES,MSHD,DEHYD,PREP FROM GRAN W/ MILK,H2O & MARG ADDED"
 },
 {
   data: 11384,
   value: "POTATOES,AU GRATIN,DRY MIX,UNPREP"
 },
 {
   data: 11385,
   value: "POTATOES,AU GRATIN,DRY MIX,PREP W/H2O,WHL MILK&BUTTER"
 },
 {
   data: 11386,
   value: "POTATOES,SCALLPD,DRY MIX,UNPREP"
 },
 {
   data: 11387,
   value: "POTATOES,SCALLPD,DRY MIX,PREP W/H2O,WHL MILK&BUTTER"
 },
 {
   data: 11390,
   value: "POTATOES,HASHED BROWN,FRZ,PLN,UNPREP"
 },
 {
   data: 11391,
   value: "POTATOES,HASHED BROWN,FRZ,PLN,PREP"
 },
 {
   data: 11392,
   value: "POTATOES,HASHED BROWN,FRZ,W/BUTTER SAU,UNPREP"
 },
 {
   data: 11393,
   value: "POTATOES,HASHED BROWN,FRZ,W/BUTTER SAU,PREP"
 },
 {
   data: 11394,
   value: "POTATOES,FRENCH FR,SHOESTRING,SALT ADDED IN PROC,FRZ,AS PRCH"
 },
 {
   data: 11395,
   value: "POTATOES,FRENCH FR,SHOESTRNG,SALT ADDED IN PROC,FRZ,OVEN-HTD"
 },
 {
   data: 11396,
   value: "POTATOES,O'BRIEN,FRZ,UNPREP"
 },
 {
   data: 11397,
   value: "POTATOES,O'BRIEN,FRZ,PREP"
 },
 {
   data: 11398,
   value: "POTATO PUFFS,FRZ,UNPREP"
 },
 {
   data: 11399,
   value: "POTATO PUFFS,FRZ,OVEN-HEATED"
 },
 {
   data: 11400,
   value: "POTATOES,FRZ,WHL,UNPREP"
 },
 {
   data: 11401,
   value: "POTATOES,FRZ,WHL,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11402,
   value: "POTATOES,FRENCH FR,ALL TYPES,SALT ADDED IN PROC,FRZ,UNPREP"
 },
 {
   data: 11403,
   value: "POTATOES,FRENCH FR,ALL TYPES,SALT ADDED IN PROC,FRZ,OVEN HTD"
 },
 {
   data: 11406,
   value: "POTATOES,FRNCH FR,CTTG-CUT,SALT NOT ADDED,FRZ,AS PRCH"
 },
 {
   data: 11407,
   value: "POTATOES,FRENCH FR,COTTAGE-CUT,SALT NOT ADDED,FRZ,OVEN-HTD"
 },
 {
   data: 11408,
   value: "POTATOES,FRZ,FRENCH FR,PAR FR,EXTRUDED,UNPREP"
 },
 {
   data: 11409,
   value: "POTATOES,FRZ,FRCH FR,PAR FR,EXTRUDED,PREP,HTD OVEN,WO/SALT"
 },
 {
   data: 11410,
   value: "USDA COMMODITY,POTATO WEDGES,FRZ"
 },
 {
   data: 11411,
   value: "POTATOES,FRENCH FR,STK FRIES,SALT ADDED IN PROC,FRZ,AS PRCH"
 },
 {
   data: 11412,
   value: "POTATOES,FRENCH FR,STK FRIES,SALT ADDED IN PROC,FRZ,OVEN-HTD"
 },
 {
   data: 11413,
   value: "POTATO FLOUR"
 },
 {
   data: 11414,
   value: "POTATO SALAD,HOME-PREPARED"
 },
 {
   data: 11416,
   value: "PUMPKIN FLOWERS,RAW"
 },
 {
   data: 11417,
   value: "PUMPKIN FLOWERS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11418,
   value: "PUMPKIN LEAVES,RAW"
 },
 {
   data: 11419,
   value: "PUMPKIN LEAVES,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11422,
   value: "PUMPKIN,RAW"
 },
 {
   data: 11423,
   value: "PUMPKIN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11424,
   value: "PUMPKIN,CND,WO/SALT"
 },
 {
   data: 11426,
   value: "PUMPKIN PIE MIX,CANNED"
 },
 {
   data: 11427,
   value: "PURSLANE,RAW"
 },
 {
   data: 11428,
   value: "PURSLANE,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11429,
   value: "RADISHES,RAW"
 },
 {
   data: 11430,
   value: "RADISHES,ORIENTAL,RAW"
 },
 {
   data: 11431,
   value: "RADISHES,ORIENTAL,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11432,
   value: "RADISHES,ORIENTAL,DRIED"
 },
 {
   data: 11435,
   value: "RUTABAGAS,RAW"
 },
 {
   data: 11436,
   value: "RUTABAGAS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11437,
   value: "SALSIFY,(VEG OYSTER),RAW"
 },
 {
   data: 11438,
   value: "SALSIFY,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11439,
   value: "SAUERKRAUT,CND,SOL&LIQUIDS"
 },
 {
   data: 11442,
   value: "SEAWEED,AGAR,RAW"
 },
 {
   data: 11444,
   value: "SEAWEED,IRISHMOSS,RAW"
 },
 {
   data: 11445,
   value: "SEAWEED,KELP,RAW"
 },
 {
   data: 11446,
   value: "SEAWEED,LAVER,RAW"
 },
 {
   data: 11447,
   value: "SESBANIA FLOWER,RAW"
 },
 {
   data: 11448,
   value: "SESBANIA FLOWER,CKD,STMD,WO/SALT"
 },
 {
   data: 11450,
   value: "SOYBEANS,GREEN,RAW"
 },
 {
   data: 11451,
   value: "SOYBEANS,GRN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11452,
   value: "SOYBEANS,MATURE SEEDS,SPROUTED,RAW"
 },
 {
   data: 11453,
   value: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STMD"
 },
 {
   data: 11454,
   value: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STIR-FRIED"
 },
 {
   data: 11457,
   value: "SPINACH,RAW"
 },
 {
   data: 11458,
   value: "SPINACH,CKD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11459,
   value: "SPINACH,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11461,
   value: "SPINACH,CND,REG PK,DRND SOL"
 },
 {
   data: 11463,
   value: "SPINACH,FRZ,CHOPD OR LEAF,UNPREP"
 },
 {
   data: 11464,
   value: "SPINACH,FRZ,CHOPD OR LEAF,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11467,
   value: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,RAW"
 },
 {
   data: 11468,
   value: "SQUASH,SMMR,CROOKNECK & STRAIGHTNECK,CKD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11471,
   value: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,CND,DRND,SOLID,WO/SALT"
 },
 {
   data: 11473,
   value: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,FRZ,UNPREP"
 },
 {
   data: 11474,
   value: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11475,
   value: "SQUASH,SUMMER,SCALLOP,RAW"
 },
 {
   data: 11476,
   value: "SQUASH,SMMR,SCALLOP,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11477,
   value: "SQUASH,SMMR,ZUCCHINI,INCL SKN,RAW"
 },
 {
   data: 11478,
   value: "SQUASH,SMMR,ZUCCHINI,INCL SKN,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11479,
   value: "SQUASH,SMMR,ZUCCHINI,INCL SKN,FRZ,UNPREP"
 },
 {
   data: 11480,
   value: "SQUASH,SMMR,ZUCCHINI,INCL SKN,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11481,
   value: "SQUASH,SMMR,ZUCCHINI,ITALIAN STYLE,CND"
 },
 {
   data: 11482,
   value: "SQUASH,WINTER,ACORN,RAW"
 },
 {
   data: 11483,
   value: "SQUASH,WNTR,ACORN,CKD,BKD,WO/SALT"
 },
 {
   data: 11484,
   value: "SQUASH,WNTR,ACORN,CKD,BLD,MSHD,WO/SALT"
 },
 {
   data: 11485,
   value: "SQUASH,WNTR,BUTTERNUT,RAW"
 },
 {
   data: 11486,
   value: "SQUASH,WNTR,BUTTERNUT,CKD,BKD,WO/SALT"
 },
 {
   data: 11487,
   value: "SQUASH,WNTR,BUTTERNUT,FRZ,UNPREP"
 },
 {
   data: 11488,
   value: "SQUASH,WNTR,BUTTERNUT,FRZ,CKD,BLD,WO/SALT"
 },
 {
   data: 11489,
   value: "SQUASH,WINTER,HUBBARD,RAW"
 },
 {
   data: 11490,
   value: "SQUASH,WNTR,HUBBARD,BKD,WO/ SALT"
 },
 {
   data: 11491,
   value: "SQUASH,WNTR,HUBBARD,CKD,BLD,MSHD,WO/SALT"
 },
 {
   data: 11492,
   value: "SQUASH,WNTR,SPAGHETTI,RAW"
 },
 {
   data: 11493,
   value: "SQUASH,WNTR,SPAGHETTI,CKD,BLD,DRND,OR BKD,WO/SALT"
 },
 {
   data: 11495,
   value: "SUCCOTASH,(CORN&LIMAS),RAW"
 },
 {
   data: 11496,
   value: "SUCCOTASH,(CORN&LIMAS),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11497,
   value: "SUCCOTASH,(CORN&LIMAS),CND,W/CRM STYLE CORN"
 },
 {
   data: 11499,
   value: "SUCCOTASH,(CORN&LIMAS),CND,W/WHL KERNEL CORN,SOL&LIQUIDS"
 },
 {
   data: 11501,
   value: "SUCCOTASH,(CORN&LIMAS),FRZ,UNPREP"
 },
 {
   data: 11502,
   value: "SUCCOTASH,(CORN&LIMAS),FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11503,
   value: "SWAMP CABBAGE,(SKUNK CABBAGE),RAW"
 },
 {
   data: 11504,
   value: "SWAMP CABBAGE,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11505,
   value: "SWEET POTATO LEAVES,RAW"
 },
 {
   data: 11506,
   value: "SWEET POTATO LEAVES,CKD,STMD,WO/ SALT"
 },
 {
   data: 11507,
   value: "SWEET POTATO,RAW,UNPREP"
 },
 {
   data: 11508,
   value: "SWEET POTATO,CKD,BKD IN SKN,WO/ SALT"
 },
 {
   data: 11510,
   value: "SWEET POTATO,CKD,BLD,WO/ SKN"
 },
 {
   data: 11512,
   value: "SWEETPOTATO,CND,VACUUM PK"
 },
 {
   data: 11514,
   value: "SWEET POTATO,CND,MSHD"
 },
 {
   data: 11516,
   value: "SWEET POTATO,FRZ,UNPREP"
 },
 {
   data: 11517,
   value: "SWEET POTATO,FRZ,CKD,BKD,WO/ SALT"
 },
 {
   data: 11518,
   value: "TARO,RAW"
 },
 {
   data: 11519,
   value: "TARO,COOKED,WITHOUT SALT"
 },
 {
   data: 11520,
   value: "TARO LEAVES,RAW"
 },
 {
   data: 11521,
   value: "TARO LEAVES,CKD,STMD,WO/SALT"
 },
 {
   data: 11522,
   value: "TARO SHOOTS,RAW"
 },
 {
   data: 11523,
   value: "TARO SHOOTS,CKD,WO/SALT"
 },
 {
   data: 11525,
   value: "TARO,TAHITIAN,RAW"
 },
 {
   data: 11526,
   value: "TARO,TAHITIAN,CKD,WO/SALT"
 },
 {
   data: 11527,
   value: "TOMATOES,GREEN,RAW"
 },
 {
   data: 11529,
   value: "TOMATOES,RED,RIPE,RAW,YEAR RND AVERAGE"
 },
 {
   data: 11530,
   value: "TOMATOES,RED,RIPE,CKD"
 },
 {
   data: 11531,
   value: "TOMATOES,RED,RIPE,CND,PACKED IN TOMATO JUC"
 },
 {
   data: 11533,
   value: "TOMATOES,RED,RIPE,CND,STWD"
 },
 {
   data: 11537,
   value: "TOMATOES,RED,RIPE,CND,W/GRN CHILIES"
 },
 {
   data: 11540,
   value: "TOMATO JUC,CND,W/SALT"
 },
 {
   data: 11546,
   value: "TOMATO PRODUCTS,CND,PASTE,WO/ SALT ADDED"
 },
 {
   data: 11547,
   value: "TOMATO PRODUCTS,CND,PUREE,WO/SALT"
 },
 {
   data: 11548,
   value: "TOMATO POWDER"
 },
 {
   data: 11549,
   value: "TOMATO PRODUCTS,CND,SAU"
 },
 {
   data: 11551,
   value: "TOMATO PRODUCTS,CND,SAU,W/MUSHROOMS"
 },
 {
   data: 11553,
   value: "TOMATO PRODUCTS,CND,SAU,W/ONIONS"
 },
 {
   data: 11555,
   value: "TOMATO PRODUCTS,CND,SAU,W/HERBS&CHS"
 },
 {
   data: 11557,
   value: "TOMATO PRODUCTS,CND,SAU,W/ONIONS,GRN PEPPERS,&CELERY"
 },
 {
   data: 11559,
   value: "TOMATO PRODUCTS,CND,SAU,W/TOMATO TIDBITS"
 },
 {
   data: 11563,
   value: "TREE FERN,CKD,WO/SALT"
 },
 {
   data: 11564,
   value: "TURNIPS,RAW"
 },
 {
   data: 11565,
   value: "TURNIPS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11566,
   value: "TURNIPS,FROZEN,UNPREPARED"
 },
 {
   data: 11567,
   value: "TURNIPS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11568,
   value: "TURNIP GREENS,RAW"
 },
 {
   data: 11569,
   value: "TURNIP GRNS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11570,
   value: "TURNIP GRNS,CND,SOL&LIQUIDS"
 },
 {
   data: 11574,
   value: "TURNIP GRNS,FRZ,UNPREP"
 },
 {
   data: 11575,
   value: "TURNIP GRNS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11576,
   value: "TURNIP GRNS&TURNIPS,FRZ,UNPREP"
 },
 {
   data: 11577,
   value: "TURNIP GRNS&TURNIPS,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11578,
   value: "VEGETABLE JUC COCKTAIL,CND"
 },
 {
   data: 11579,
   value: "VEGETABLES,MXD,CND,SOL&LIQUIDS"
 },
 {
   data: 11581,
   value: "VEGETABLES,MXD,CND,DRND SOL"
 },
 {
   data: 11583,
   value: "VEGETABLES,MXD,FRZ,UNPREP"
 },
 {
   data: 11584,
   value: "VEGETABLES,MXD,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11587,
   value: "VINESPINACH,(BASELLA),RAW"
 },
 {
   data: 11588,
   value: "WATERCHESTNUTS,CHINESE,(MATAI),RAW"
 },
 {
   data: 11590,
   value: "WATERCHESTNUTS,CHINESE,CND,SOL&LIQUIDS"
 },
 {
   data: 11591,
   value: "WATERCRESS,RAW"
 },
 {
   data: 11593,
   value: "WAXGOURD,(CHINESE PRESERVING MELON),RAW"
 },
 {
   data: 11594,
   value: "WAXGOURD,(CHINESE PRESERVING MELON),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11595,
   value: "WINGED BNS,IMMAT SEEDS,RAW"
 },
 {
   data: 11596,
   value: "WINGED BNS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11597,
   value: "WINGED BEAN LEAVES,RAW"
 },
 {
   data: 11599,
   value: "WINGED BEAN TUBER,RAW"
 },
 {
   data: 11601,
   value: "YAM,RAW"
 },
 {
   data: 11602,
   value: "YAM,CKD,BLD,DRND,OR BKD,WO/SALT"
 },
 {
   data: 11603,
   value: "YAMBEAN (JICAMA),RAW"
 },
 {
   data: 11604,
   value: "YAMBEAN (JICAMA),CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11605,
   value: "BEETS,HARVARD,CND,SOL&LIQUIDS"
 },
 {
   data: 11609,
   value: "BEETS,PICKLED,CND,SOL&LIQUIDS"
 },
 {
   data: 11613,
   value: "BORAGE,RAW"
 },
 {
   data: 11614,
   value: "BORAGE,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11615,
   value: "CHIVES,FREEZE-DRIED"
 },
 {
   data: 11616,
   value: "DOCK,RAW"
 },
 {
   data: 11617,
   value: "DOCK,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11618,
   value: "EPPAW,RAW"
 },
 {
   data: 11620,
   value: "DRUMSTICK PODS,RAW"
 },
 {
   data: 11621,
   value: "DRUMSTICK PODS,CKD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11622,
   value: "KALE,SCOTCH,RAW"
 },
 {
   data: 11623,
   value: "KALE,SCOTCH,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11624,
   value: "LEEKS,(BULB&LOWER-LEAF PORTION),FREEZE-DRIED"
 },
 {
   data: 11625,
   value: "PARSLEY,FREEZE-DRIED"
 },
 {
   data: 11626,
   value: "BEANS,MUNG,MATURE SEEDS,SPROUTED,CND,DRND SOL"
 },
 {
   data: 11632,
   value: "PEPPERS,JALAPENO,CND,SOL&LIQUIDS"
 },
 {
   data: 11634,
   value: "PEPPERS,SWT,GRN,FREEZE-DRIED"
 },
 {
   data: 11637,
   value: "RADISHES,WHITE ICICLE,RAW"
 },
 {
   data: 11640,
   value: "SHALLOTS,FREEZE-DRIED"
 },
 {
   data: 11641,
   value: "SQUASH,SMMR,ALL VAR,RAW"
 },
 {
   data: 11642,
   value: "SQUASH,SMMR,ALL VAR,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11643,
   value: "SQUASH,WNTR,ALL VAR,RAW"
 },
 {
   data: 11644,
   value: "SQUASH,WNTR,ALL VAR,CKD,BKD,WO/SALT"
 },
 {
   data: 11645,
   value: "SWEET POTATO,CND,SYRUP PK,SOL & LIQUIDS"
 },
 {
   data: 11647,
   value: "SWEET POTATO,CND,SYRUP PK,DRND SOL"
 },
 {
   data: 11649,
   value: "TOMATO PRODUCTS,CND,SAU,SPANISH STYLE"
 },
 {
   data: 11653,
   value: "BEANS,PINTO,MATURE SEEDS,SPROUTED,RAW"
 },
 {
   data: 11654,
   value: "BEANS,PINTO,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11655,
   value: "CARROT JUICE,CANNED"
 },
 {
   data: 11656,
   value: "CORN PUDD,HOME PREP"
 },
 {
   data: 11657,
   value: "POTATOES,MSHD,HOME-PREPARED,WHL MILK ADDED"
 },
 {
   data: 11658,
   value: "SPINACH SOUFFLE"
 },
 {
   data: 11659,
   value: "SWEET POTATO,CKD,CANDIED,HOME-PREPARED"
 },
 {
   data: 11660,
   value: "TOMATOES,RED,RIPE,CKD,STWD"
 },
 {
   data: 11663,
   value: "SEAWEED,AGAR,DRIED"
 },
 {
   data: 11666,
   value: "SEAWEED,SPIRULINA,RAW"
 },
 {
   data: 11667,
   value: "SEAWEED,SPIRULINA,DRIED"
 },
 {
   data: 11669,
   value: "SEAWEED,WAKAME,RAW"
 },
 {
   data: 11670,
   value: "PEPPERS,HOT CHILI,GRN,RAW"
 },
 {
   data: 11671,
   value: "POTATOES,O'BRIEN,HOME-PREPARED"
 },
 {
   data: 11672,
   value: "POTATO PANCAKES"
 },
 {
   data: 11674,
   value: "POTATO,BKD,FLESH & SKN,WO/ SALT"
 },
 {
   data: 11675,
   value: "POTATOES,MICROWAVED,CKD IN SKN,FLESH&SKN,WO/SALT"
 },
 {
   data: 11676,
   value: "RADISH SEEDS,SPROUTED,RAW"
 },
 {
   data: 11677,
   value: "SHALLOTS,RAW"
 },
 {
   data: 11683,
   value: "CARROT,DEHYDRATED"
 },
 {
   data: 11693,
   value: "TOMATOES,CRUSHED,CANNED"
 },
 {
   data: 11695,
   value: "TOMATOES,ORANGE,RAW"
 },
 {
   data: 11696,
   value: "TOMATOES,YELLOW,RAW"
 },
 {
   data: 11697,
   value: "ARROWROOT,RAW"
 },
 {
   data: 11698,
   value: "CHRYSANTHEMUM LEAVES,RAW"
 },
 {
   data: 11700,
   value: "AMARANTH LEAVES,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11701,
   value: "ARROWHEAD,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11702,
   value: "ARTICHOKES,(GLOBE OR FRENCH),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11703,
   value: "ARTICHOKES,(GLOBE OR FRENCH),FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11705,
   value: "ASPARAGUS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11707,
   value: "ASPARAGUS,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11709,
   value: "ASPARAGUS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11710,
   value: "BALSAM-PEAR (BITTER GOURD),LEAFY TIPS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11711,
   value: "BALSAM-PEAR (BITTER GOURD),PODS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11712,
   value: "BAMBOO SHOOTS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11713,
   value: "BEANS,KIDNEY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11714,
   value: "LIMA BNS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11715,
   value: "LIMA BNS,IMMAT SEEDS,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11716,
   value: "LIMA BNS,IMMAT SEEDS,FRZ,BABY,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11717,
   value: "LIMA BNS,IMMAT SEEDS,FRZ,FORDHOOK,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11718,
   value: "MUNG BNS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11719,
   value: "BEANS,NAVY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11720,
   value: "BEANS,PINTO,IMMAT SEEDS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11721,
   value: "BEANS,PINTO,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11722,
   value: "BEANS,SNAP,YELLOW,RAW"
 },
 {
   data: 11723,
   value: "BEANS,SNAP,GRN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11724,
   value: "BEANS,SNAP,YEL,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11725,
   value: "BEANS,SNAP,YEL,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11726,
   value: "BEANS,SNAP,GRN,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11727,
   value: "BEANS,SNAP,YEL,CND,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11728,
   value: "BEANS,SNAP,YEL,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11729,
   value: "BEANS,SNAP,GRN,CND,NO SALT,DRND SOL"
 },
 {
   data: 11730,
   value: "BEANS,SNAP,YEL,FRZ,ALL STYLES,UNPREP"
 },
 {
   data: 11731,
   value: "BEANS,SNAP,GRN,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11732,
   value: "BEANS,SNAP,YEL,FRZ,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11733,
   value: "BEANS,SNAP,YEL,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11734,
   value: "BEETS,CKD,BOILED. DRND,W/SALT"
 },
 {
   data: 11735,
   value: "BEETS,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11736,
   value: "BEET GRNS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11737,
   value: "BORAGE,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11738,
   value: "BROADBEANS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11739,
   value: "BROCCOLI,LEAVES,RAW"
 },
 {
   data: 11740,
   value: "BROCCOLI,FLOWER CLUSTERS,RAW"
 },
 {
   data: 11741,
   value: "BROCCOLI,STALKS,RAW"
 },
 {
   data: 11742,
   value: "BROCCOLI,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11743,
   value: "BROCCOLI,FRZ,CHOPD,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11744,
   value: "BROCCOLI,FRZ,SPEARS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11745,
   value: "BRUSSELS SPROUTS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11746,
   value: "BRUSSELS SPROUTS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11747,
   value: "BURDOCK ROOT,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11748,
   value: "BUTTERBUR,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11749,
   value: "CABBAGE,COMMON,FRESHLY HARVEST,RAW"
 },
 {
   data: 11750,
   value: "CABBAGE,COMMON (DANISH,DOMESTIC,&POINTED TYPES),STORED,RAW"
 },
 {
   data: 11751,
   value: "CABBAGE,COMMON,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11752,
   value: "CABBAGE,RED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11753,
   value: "CABBAGE,SAVOY,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11754,
   value: "CABBAGE,CHINESE (PAK-CHOI),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11755,
   value: "CABBAGE,CHINESE (PE-TSAI),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11756,
   value: "CARDOON,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11757,
   value: "CARROTS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11758,
   value: "CARROTS,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11759,
   value: "CARROTS,CND,NO SALT ,DRND SOL"
 },
 {
   data: 11760,
   value: "CARROTS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11761,
   value: "CAULIFLOWER,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11762,
   value: "CAULIFLOWER,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11763,
   value: "CELERIAC,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11764,
   value: "CELERY,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11765,
   value: "CHARD,SWISS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11766,
   value: "CHAYOTE,FRUIT,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11767,
   value: "CHRYSANTHEMUM,GARLAND,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11768,
   value: "COLLARDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11769,
   value: "COLLARDS,FRZ,CHOPD,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11770,
   value: "CORN,SWT,YEL,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11771,
   value: "CORN,SWT,YEL,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11772,
   value: "CORN,SWT,YEL,CND,CRM STYLE,NO SALT"
 },
 {
   data: 11773,
   value: "CORN,SWT,YEL,CND,VACUUM PK,NO SALT"
 },
 {
   data: 11774,
   value: "CORN,SWT,YEL,FRZ,KRNLS,CUT OFF COB,BLD,DRND,W/SALT"
 },
 {
   data: 11775,
   value: "CORN,SWT,YEL,FRZ,KRNLS ON COB,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11777,
   value: "COWPEAS (BLACKEYES),IMMAT SEEDS,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11778,
   value: "COWPEAS (BLACKEYES),IMMAT SEEDS,FRZ,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11779,
   value: "COWPEAS,YOUNG PODS W/SEEDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11780,
   value: "COWPEAS,LEAFY TIPS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11781,
   value: "CRESS,GARDEN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11782,
   value: "DANDELION GRNS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11783,
   value: "EGGPLANT,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11784,
   value: "GOURD,WHITE-FLOWERED (CALABASH),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11785,
   value: "GOURD,DISHCLOTH (TOWELGOURD),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11786,
   value: "DRUMSTICK LEAVES,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11787,
   value: "DRUMSTICK PODS,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11788,
   value: "HYACINTH-BEANS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11789,
   value: "JUTE,POTHERB,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11790,
   value: "KALE,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11791,
   value: "KALE,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11792,
   value: "KALE,SCOTCH,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11793,
   value: "KOHLRABI,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11794,
   value: "LAMBS QUARTERS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11795,
   value: "LEEKS,(BULB&LOWER LEAF-PORTION),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11796,
   value: "LOTUS ROOT,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11797,
   value: "MUSHROOMS,WHITE,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11798,
   value: "MUSHROOMS,SHIITAKE,CKD,W/SALT"
 },
 {
   data: 11799,
   value: "MUSTARD GRNS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11800,
   value: "MUSTARD GRNS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11801,
   value: "MUSTARD SPINACH,(TENDERGREEN),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11802,
   value: "NEW ZEALAND SPINACH,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11803,
   value: "OKRA,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11804,
   value: "OKRA,FRZ,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11805,
   value: "ONIONS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11806,
   value: "ONIONS,FRZ,CHOPD,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11807,
   value: "ONIONS,FRZ,WHL,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11808,
   value: "PARSNIPS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11809,
   value: "PEAS,EDIBLE-PODDED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11810,
   value: "PEAS,EDIBLE-PODDED,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11811,
   value: "PEAS,GRN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11812,
   value: "PEAS,GRN,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11813,
   value: "PEAS,GRN,CND,NO SALT,DRND SOL"
 },
 {
   data: 11814,
   value: "PEAS,GRN,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11815,
   value: "PEAS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11816,
   value: "PEAS&CARROTS,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11817,
   value: "PEAS&CARROTS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11818,
   value: "PEAS&ONIONS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11819,
   value: "PEPPERS,HOT CHILI,RED,RAW"
 },
 {
   data: 11820,
   value: "PEPPERS,HOT CHILI,RED,CND,EXCLUDING SEEDS,SOL&LIQUIDS"
 },
 {
   data: 11821,
   value: "PEPPERS,SWT,RED,RAW"
 },
 {
   data: 11822,
   value: "PEPPERS,SWT,GRN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11823,
   value: "PEPPERS,SWT,RED,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11824,
   value: "PEPPERS,SWT,RED,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11825,
   value: "PEPPERS,SWT,GRN,FRZ,CHOPD,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11826,
   value: "PIGEONPEAS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11827,
   value: "POKEBERRY SHOOTS,(POKE),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11828,
   value: "POTATOES,BKD,FLESH & SKN,W/ SALT"
 },
 {
   data: 11829,
   value: "POTATOES,BKD,FLESH,W/SALT"
 },
 {
   data: 11830,
   value: "POTATOES,BKD,SKN,W/ SALT"
 },
 {
   data: 11831,
   value: "POTATOES,BLD,CKD IN SKN,FLESH,W/SALT"
 },
 {
   data: 11832,
   value: "POTATOES,BLD,CKD IN SKN,SKN,W/SALT"
 },
 {
   data: 11833,
   value: "POTATOES,BLD,CKD WO/ SKN,FLESH,W/ SALT"
 },
 {
   data: 11834,
   value: "POTATOES,MICROWAVED,CKD,IN SKN,FLESH&SKN,W/SALT"
 },
 {
   data: 11835,
   value: "POTATOES,MICROWAVED,CKD IN SKN,FLESH,W/SALT"
 },
 {
   data: 11836,
   value: "POTATOES,MICROWAVED,CKD,IN SKN,SKN W/SALT"
 },
 {
   data: 11837,
   value: "POTATOES,FRZ,WHL,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11840,
   value: "POTATOES,FRZ,FRCH FR,PAR FR,CTTGE-CUT,PREP,HTD OVEN,W/SALT"
 },
 {
   data: 11841,
   value: "POTATOES,FR FR,ALL TYPES,SALT NOT ADDED IN PROC,FRZ,OVN-HTD"
 },
 {
   data: 11842,
   value: "POTATOES,FR FR,ALL TYPES,SALT NOT ADDED IN PROC,FRZ,AS PURCH"
 },
 {
   data: 11843,
   value: "POTATOES,AU GRATIN,HOME-PREPARED FROM RECIPE USING MARGARINE"
 },
 {
   data: 11844,
   value: "POTATOES,SCALLPD,HOME-PREPARED W/MARGARINE"
 },
 {
   data: 11845,
   value: "PUMPKIN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11846,
   value: "PUMPKIN,CANNED,WITH SALT"
 },
 {
   data: 11847,
   value: "PUMPKIN,FLOWERS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11848,
   value: "PUMPKIN LEAVES,CKD,BLD,DRND,W/ SALT"
 },
 {
   data: 11849,
   value: "PURSLANE,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11850,
   value: "RADISHES,ORIENTAL,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11851,
   value: "RUTABAGAS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11852,
   value: "SALSIFY,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11853,
   value: "SOYBEANS,GRN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11854,
   value: "SPINACH,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11855,
   value: "SPINACH,CND,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11856,
   value: "SPINACH,FRZ,CHOPD OR LEAF,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11857,
   value: "SQUASH,SMMR,ALL VAR,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11858,
   value: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11859,
   value: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11860,
   value: "SQUASH,SMMR,SCALLOP,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11861,
   value: "SQUASH,SMMR,ZUCCHINI,INCL SKN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11862,
   value: "SQUASH,SMMR,ZUCCHINI,INCL SKN,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11863,
   value: "SQUASH,WNTR,ALL VAR,CKD,BKD,W/SALT"
 },
 {
   data: 11864,
   value: "SQUASH,WNTR,ACORN,CKD,BKD,W/SALT"
 },
 {
   data: 11865,
   value: "SQUASH,WNTR,ACORN,CKD,BLD,MSHD,W/SALT"
 },
 {
   data: 11866,
   value: "SQUASH,WNTR,BUTTERNUT,CKD,BKD,W/SALT"
 },
 {
   data: 11867,
   value: "SQUASH,WNTR,BUTTERNUT,FRZ,CKD,BLD,W/SALT"
 },
 {
   data: 11868,
   value: "SQUASH,WNTR,HUBBARD,BKD,W/ SALT"
 },
 {
   data: 11869,
   value: "SQUASH,WNTR,HUBBARD,CKD,BLD,MSHD,W/SALT"
 },
 {
   data: 11870,
   value: "SQUASH,WNTR,SPAGHETTI,CKD,BLD,DRND,OR BKD,W/SALT"
 },
 {
   data: 11871,
   value: "SUCCOTASH,(CORN&LIMAS),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11872,
   value: "SUCCOTASH,(CORN&LIMAS),FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11873,
   value: "SWAMP CABBAGE,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11874,
   value: "SWEET POTATO LEAVES,CKD,STMD,W/ SALT"
 },
 {
   data: 11875,
   value: "SWEET POTATO,CKD,BKD IN SKN,W/ SALT"
 },
 {
   data: 11876,
   value: "SWEET POTATO,CKD,BLD,WO/ SKN,W/ SALT"
 },
 {
   data: 11877,
   value: "SWEET POTATO,FRZ,CKD,BKD,W/ SALT"
 },
 {
   data: 11878,
   value: "TARO,COOKED,WITH SALT"
 },
 {
   data: 11879,
   value: "TARO,LEAVES,CKD,STMD,W/SALT"
 },
 {
   data: 11880,
   value: "TARO,SHOOTS,CKD,W/SALT"
 },
 {
   data: 11881,
   value: "TARO,TAHITIAN,CKD,W/SALT"
 },
 {
   data: 11884,
   value: "TOMATOES,RED,RIPE,CKD,W/ SALT"
 },
 {
   data: 11885,
   value: "TOMATOES,RED,RIPE,CND,PACKED IN TOMATO JUC,NO SALT ADDED"
 },
 {
   data: 11886,
   value: "TOMATO JUC,CND,WO/SALT"
 },
 {
   data: 11887,
   value: "TOMATO PRODUCTS,CND,PASTE,W/SALT"
 },
 {
   data: 11888,
   value: "TOMATO PRODUCTS,CND,PUREE,W/SALT"
 },
 {
   data: 11889,
   value: "TURNIPS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11890,
   value: "TURNIPS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11891,
   value: "TURNIP GRNS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11892,
   value: "TURNIP GRNS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11893,
   value: "TURNIP GRNS&TURNIPS,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11894,
   value: "VEGETABLES,MXD,FRZ,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11895,
   value: "WAXGOURD,(CHINESE PRESERVING MELON),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11896,
   value: "WINGED BEAN,IMMAT SEEDS,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11897,
   value: "YAM,CKD,BLD,DRND,OR BKD,W/SALT"
 },
 {
   data: 11898,
   value: "YAMBEAN (JICAMA),CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11899,
   value: "YARDLONG BEAN,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11900,
   value: "CORN,SWEET,WHITE,RAW"
 },
 {
   data: 11901,
   value: "CORN,SWT,WHITE,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11902,
   value: "CORN,SWT,WHITE,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11903,
   value: "CORN,SWT,WHITE,CND,WHL KERNEL,REG PK,SOL&LIQUIDS"
 },
 {
   data: 11904,
   value: "CORN,SWT,WHITE,CND,WHL KERNEL,NO SALT,SOL&LIQUIDS"
 },
 {
   data: 11905,
   value: "CORN,SWT,WHITE,CND,WHL KERNEL,DRND SOL"
 },
 {
   data: 11906,
   value: "CORN,SWT,WHITE,CND,CRM STYLE,REG PK"
 },
 {
   data: 11907,
   value: "CORN,SWT,WHITE,CND,CRM STYLE,NO SALT"
 },
 {
   data: 11908,
   value: "CORN,SWT,WHITE,CND,VACUUM PK,REG PK"
 },
 {
   data: 11909,
   value: "CORN,SWT,WHITE,CND,VACUUM PK,NO SALT"
 },
 {
   data: 11910,
   value: "CORN,SWT,WHITE,FRZ,KRNLS CUT OFF COB,UNPREP"
 },
 {
   data: 11911,
   value: "CORN,SWT,WHITE,FRZ,KRNLS CUT OFF COB,BLD,DRND,WO/SALT"
 },
 {
   data: 11912,
   value: "CORN,SWT,WHITE,FRZ,KRNLS CUT OFF COB,BLD,DRND,W/SALT"
 },
 {
   data: 11913,
   value: "CORN,SWT,WHITE,FRZ,KRNLS ON COB,UNPREP"
 },
 {
   data: 11914,
   value: "CORN,SWT,WHITE,FRZ,KRNLS ON COB,CKD,BLD,DRND,WO/SALT"
 },
 {
   data: 11915,
   value: "CORN,SWT,WHITE,FRZ,KRNLS ON COB,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11916,
   value: "PEPPERS,SWT,RED,CND,SOL&LIQUIDS"
 },
 {
   data: 11917,
   value: "PEPPERS,SWT,RED,FRZ,CHOPD,UNPREP"
 },
 {
   data: 11918,
   value: "PEPPERS,SWT,RED,FRZ,CHOPD,BLD,DRND,WO/ SALT"
 },
 {
   data: 11919,
   value: "PEPPERS,SWT,RED,FRZ,CHOPD,BLD,DRND,W/ SALT"
 },
 {
   data: 11921,
   value: "PEPPERS,SWT,RED,SAUTEED"
 },
 {
   data: 11922,
   value: "SESBANIA FLOWER,CKD,STMD,W/SALT"
 },
 {
   data: 11923,
   value: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STMD,W/SALT"
 },
 {
   data: 11924,
   value: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STIR-FRIED,W/SALT"
 },
 {
   data: 11925,
   value: "DOCK,CKD,BLD,DRND,W/SALT"
 },
 {
   data: 11926,
   value: "LENTILS,SPROUTED,CKD,STIR-FRIED,W/SALT"
 },
 {
   data: 11927,
   value: "MOUNTAIN YAM,HAWAII,CKD,STMD,W/ SALT"
 },
 {
   data: 11928,
   value: "TREE FERN,CKD,W/SALT"
 },
 {
   data: 11929,
   value: "POTATOES,MSHD,PREP FROM GRANULES,WO/MILK,WHL MILK&MARGARINE"
 },
 {
   data: 11930,
   value: "POTATOES,MSHD,DEHYD,PREP FRM FLKS WO/ MILK,WHL MILK&MARG ADD"
 },
 {
   data: 11931,
   value: "PEPPERS,SWT,RED,FREEZE-DRIED"
 },
 {
   data: 11932,
   value: "BEANS,SNAP,YEL,CND,REG PK,DRND SOL"
 },
 {
   data: 11933,
   value: "BEANS,SNAP,YEL,CND,NO SALT,DRND SOL"
 },
 {
   data: 11934,
   value: "POTATOES,MSHD,HOME-PREPARED,WHL MILK & BUTTER ADDED"
 },
 {
   data: 11935,
   value: "Catsup"
 },
 {
   data: 11937,
   value: "PICKLES,CUCUMBER,DILL OR KOSHER DILL"
 },
 {
   data: 11939,
   value: "MUSHROOMS,PORTABELLA,EXPOSED TO UV LT,GRILLED"
 },
 {
   data: 11940,
   value: "PICKLES,CUCUMBER,SWT (INCLUDES BREAD & BUTTER PICKLES)"
 },
 {
   data: 11941,
   value: "PICKLES,CUCUMBER,SOUR"
 },
 {
   data: 11943,
   value: "PIMENTO,CANNED"
 },
 {
   data: 11944,
   value: "PICKLE RELISH,HOT DOG"
 },
 {
   data: 11945,
   value: "PICKLE RELISH,SWEET"
 },
 {
   data: 11946,
   value: "PICKLES,CUCUMBER,SOUR,LO NA"
 },
 {
   data: 11947,
   value: "PICKLES,CUCUMBER,DILL,LO NA"
 },
 {
   data: 11948,
   value: "PICKLES,CUCUMBER,SWT,LO NA (INCLUDES BREAD & BUTTER PICKLES)"
 },
 {
   data: 11949,
   value: "CATSUP,LOW SODIUM"
 },
 {
   data: 11950,
   value: "MUSHROOMS,ENOKI,RAW"
 },
 {
   data: 11951,
   value: "PEPPERS,SWEET,YELLOW,RAW"
 },
 {
   data: 11952,
   value: "RADICCHIO,RAW"
 },
 {
   data: 11953,
   value: "SQUASH,ZUCCHINI,BABY,RAW"
 },
 {
   data: 11954,
   value: "TOMATILLOS,RAW"
 },
 {
   data: 11955,
   value: "TOMATOES,SUN-DRIED"
 },
 {
   data: 11956,
   value: "TOMATOES,SUN-DRIED,PACKED IN OIL,DRND"
 },
 {
   data: 11957,
   value: "FENNEL,BULB,RAW"
 },
 {
   data: 11958,
   value: "PICKLE RELISH,HAMBURGER"
 },
 {
   data: 11959,
   value: "ARUGULA,RAW"
 },
 {
   data: 11960,
   value: "CARROTS,BABY,RAW"
 },
 {
   data: 11961,
   value: "HEARTS OF PALM,CANNED"
 },
 {
   data: 11962,
   value: "PEPPERS,HOT CHILE,SUN-DRIED"
 },
 {
   data: 11963,
   value: "NOPALES,RAW"
 },
 {
   data: 11964,
   value: "NOPALES,CKD,WO/SALT"
 },
 {
   data: 11965,
   value: "CAULIFLOWER,GREEN,RAW"
 },
 {
   data: 11967,
   value: "CAULIFLOWER,GRN,CKD,NO SALT ADDED"
 },
 {
   data: 11968,
   value: "CAULIFLOWER,GRN,CKD,W/ SALT"
 },
 {
   data: 11969,
   value: "BROCCOLI,CHINESE,COOKED"
 },
 {
   data: 11970,
   value: "CABBAGE,NAPA,COOKED"
 },
 {
   data: 11972,
   value: "LEMON GRASS (CITRONELLA),RAW"
 },
 {
   data: 11973,
   value: "BEANS,FAVA,IN POD,RAW"
 },
 {
   data: 11974,
   value: "GRAPE LEAVES,RAW"
 },
 {
   data: 11975,
   value: "GRAPE LEAVES,CND"
 },
 {
   data: 11976,
   value: "PEPPER,BANANA,RAW"
 },
 {
   data: 11977,
   value: "PEPPERS,SERRANO,RAW"
 },
 {
   data: 11978,
   value: "PEPPERS,ANCHO,DRIED"
 },
 {
   data: 11979,
   value: "PEPPERS,JALAPENO,RAW"
 },
 {
   data: 11980,
   value: "PEPPERS,CHILI,GRN,CND"
 },
 {
   data: 11981,
   value: "PEPPERS,HUNGARIAN,RAW"
 },
 {
   data: 11982,
   value: "PEPPERS,PASILLA,DRIED"
 },
 {
   data: 11983,
   value: "PICKLES,CHOWCHOW,W/CAULIFLOWER ONION MUSTARD,SWT"
 },
 {
   data: 11984,
   value: "EPAZOTE,RAW"
 },
 {
   data: 11985,
   value: "FIREWEED,LEAVES,RAW"
 },
 {
   data: 11986,
   value: "MALABAR SPINACH,COOKED"
 },
 {
   data: 11987,
   value: "MUSHROOMS,OYSTER,RAW"
 },
 {
   data: 11988,
   value: "FUNGI,CLOUD EARS,DRIED"
 },
 {
   data: 11989,
   value: "MUSHROOMS,STRAW,CND,DRND SOL"
 },
 {
   data: 11990,
   value: "WASABI,ROOT,RAW"
 },
 {
   data: 11991,
   value: "YAUTIA (TANNIER),RAW"
 },
 {
   data: 11992,
   value: "MUSHROOMS,WHITE,MICROWAVED"
 },
 {
   data: 11993,
   value: "MUSHROOMS,MAITAKE,RAW"
 },
 {
   data: 11995,
   value: "FIDDLEHEAD FERNS,RAW"
 },
 {
   data: 11996,
   value: "FIDDLEHEAD FERNS,FRZ,UNPREP"
 },
 {
   data: 11998,
   value: "MUSHROOMS,PORTABELLA,EXPOSED TO UV LT,RAW"
 },
 {
   data: 12001,
   value: "BREADFRUIT SEEDS,RAW"
 },
 {
   data: 12003,
   value: "BREADFRUIT SEEDS,BOILED"
 },
 {
   data: 12004,
   value: "SEEDS,BREADNUT TREE SEEDS,RAW"
 },
 {
   data: 12005,
   value: "SEEDS,BREADNUT TREE SEEDS,DRIED"
 },
 {
   data: 12006,
   value: "CHIA SEEDS,DRIED"
 },
 {
   data: 12007,
   value: "COTTONSEED FLR,PART DEFATTED (GLANDLESS)"
 },
 {
   data: 12008,
   value: "COTTONSEED FLR,LOFAT (GLANDLESS)"
 },
 {
   data: 12011,
   value: "COTTONSEED MEAL,PART DEFATTED (GLANDLESS)"
 },
 {
   data: 12013,
   value: "LOTUS SEEDS,DRIED"
 },
 {
   data: 12014,
   value: "PUMPKIN&SQUASH SD KRNLS,DRIED"
 },
 {
   data: 12016,
   value: "PUMPKIN&SQUASH SD KRNLS,RSTD,WO/SALT"
 },
 {
   data: 12021,
   value: "SAFFLOWER SD KRNLS,DRIED"
 },
 {
   data: 12022,
   value: "SAFFLOWER SD MEAL,PART DEFATTED"
 },
 {
   data: 12023,
   value: "SESAME SEEDS,WHOLE,DRIED"
 },
 {
   data: 12024,
   value: "SESAME SEEDS,WHL,RSTD&TSTD"
 },
 {
   data: 12029,
   value: "SESAME SD KRNLS,TSTD,WO/SALT (DECORT)"
 },
 {
   data: 12032,
   value: "SESAME FLR,PART DEFATTED"
 },
 {
   data: 12033,
   value: "SESAME FLOUR,LOW-FAT"
 },
 {
   data: 12034,
   value: "SESAME MEAL,PART DEFATTED"
 },
 {
   data: 12036,
   value: "SUNFLOWER SD KRNLS,DRIED"
 },
 {
   data: 12037,
   value: "SUNFLOWER SD KRNLS,DRY RSTD,WO/SALT"
 },
 {
   data: 12038,
   value: "SUNFLOWER SD KRNLS,OIL RSTD,WO/SALT"
 },
 {
   data: 12039,
   value: "SUNFLOWER SD KRNLS,TSTD,WO/SALT"
 },
 {
   data: 12040,
   value: "SUNFLOWER SD BUTTER,WO/SALT"
 },
 {
   data: 12041,
   value: "SUNFLOWER SD FLR,PART DEFATTED"
 },
 {
   data: 12058,
   value: "ACORNS,RAW"
 },
 {
   data: 12059,
   value: "ACORNS,DRIED"
 },
 {
   data: 12060,
   value: "ACORN FLOUR,FULL FAT"
 },
 {
   data: 12061,
   value: "ALMONDS"
 },
 {
   data: 12062,
   value: "ALMONDS,BLANCHED"
 },
 {
   data: 12063,
   value: "ALMONDS,DRY RSTD,WO/SALT"
 },
 {
   data: 12065,
   value: "ALMONDS,OIL RSTD,WO/SALT"
 },
 {
   data: 12071,
   value: "ALMOND PASTE"
 },
 {
   data: 12077,
   value: "BEECHNUTS,DRIED"
 },
 {
   data: 12078,
   value: "BRAZILNUTS,DRIED,UNBLANCHED"
 },
 {
   data: 12084,
   value: "BUTTERNUTS,DRIED"
 },
 {
   data: 12085,
   value: "CASHEW NUTS,DRY RSTD,WO/SALT"
 },
 {
   data: 12086,
   value: "CASHEW NUTS,OIL RSTD,WO/SALT"
 },
 {
   data: 12087,
   value: "NUTS,CASHEW NUTS,RAW"
 },
 {
   data: 12088,
   value: "CASHEW BUTTER,PLN,WO/SALT"
 },
 {
   data: 12093,
   value: "CHESTNUTS,CHINESE,RAW"
 },
 {
   data: 12094,
   value: "CHESTNUTS,CHINESE,DRIED"
 },
 {
   data: 12095,
   value: "CHESTNUTS,CHINESE,BLD&STMD"
 },
 {
   data: 12096,
   value: "CHESTNUTS,CHINESE,ROASTED"
 },
 {
   data: 12097,
   value: "CHESTNUTS,EUROPEAN,RAW,UNPEELED"
 },
 {
   data: 12098,
   value: "CHESTNUTS,EUROPEAN,RAW,PEELED"
 },
 {
   data: 12099,
   value: "CHESTNUTS,EUROPEAN,DRIED,UNPEELED"
 },
 {
   data: 12100,
   value: "CHESTNUTS,EUROPEAN,DRIED,PEELED"
 },
 {
   data: 12101,
   value: "CHESTNUTS,EUROPEAN,BLD&STMD"
 },
 {
   data: 12104,
   value: "COCONUT MEAT,RAW"
 },
 {
   data: 12108,
   value: "COCONUT MEAT,DRIED (DESICCATED),NOT SWTND"
 },
 {
   data: 12109,
   value: "COCONUT MEAT,DRIED (DESICCATED),SWTND,FLAKED,PACKAGED"
 },
 {
   data: 12110,
   value: "COCONUT MEAT,DRIED (DESICCATED),SWTND,FLAKED,CND"
 },
 {
   data: 12114,
   value: "COCONUT MEAT,DRIED (DESICCATED),TSTD"
 },
 {
   data: 12115,
   value: "COCONUT CRM,RAW (LIQ EXPRESSED FROM GRATED MEAT)"
 },
 {
   data: 12116,
   value: "NUTS,COCNT CRM,CND,SWTND"
 },
 {
   data: 12117,
   value: "COCONUT MILK,RAW (LIQ EXPRESSED FROM GRATED MEAT&H2O)"
 },
 {
   data: 12118,
   value: "COCONUT MILK,CND (LIQ EXPRESSED FROM GRATED MEAT&H2O)"
 },
 {
   data: 12119,
   value: "COCONUT H2O (LIQ FROM COCONUTS)"
 },
 {
   data: 12120,
   value: "HAZELNUTS OR FILBERTS"
 },
 {
   data: 12121,
   value: "HAZELNUTS OR FILBERTS,BLANCHED"
 },
 {
   data: 12122,
   value: "HAZELNUTS OR FILBERTS,DRY RSTD,WO/SALT"
 },
 {
   data: 12127,
   value: "GINKGO NUTS,RAW"
 },
 {
   data: 12128,
   value: "GINKGO NUTS,DRIED"
 },
 {
   data: 12129,
   value: "GINKGO NUTS,CANNED"
 },
 {
   data: 12130,
   value: "HICKORYNUTS,DRIED"
 },
 {
   data: 12131,
   value: "MACADAMIA NUTS,RAW"
 },
 {
   data: 12132,
   value: "MACADAMIA NUTS,DRY RSTD,WO/SALT"
 },
 {
   data: 12135,
   value: "MIXED NUTS,DRY RSTD,W/PNUTS,WO/SALT"
 },
 {
   data: 12137,
   value: "MIXED NUTS,OIL RSTD,W/PNUTS,WO/SALT"
 },
 {
   data: 12138,
   value: "MIXED NUTS,OIL RSTD,WO/PNUTS,WO/SALT"
 },
 {
   data: 12140,
   value: "FORMULATED,WHEAT-BASED,UNFLAVORED,W/SALT"
 },
 {
   data: 12142,
   value: "PECANS"
 },
 {
   data: 12143,
   value: "PECANS,DRY RSTD,WO/SALT"
 },
 {
   data: 12144,
   value: "PECANS,OIL RSTD,WO/SALT"
 },
 {
   data: 12145,
   value: "NUTS,PILINUTS,DRIED"
 },
 {
   data: 12147,
   value: "NUTS,PINE NUTS,DRIED"
 },
 {
   data: 12149,
   value: "PINE NUTS,PINYON,DRIED"
 },
 {
   data: 12151,
   value: "PISTACHIO NUTS,RAW"
 },
 {
   data: 12152,
   value: "PISTACHIO NUTS,DRY RSTD,WO/SALT"
 },
 {
   data: 12154,
   value: "WALNUTS,BLACK,DRIED"
 },
 {
   data: 12155,
   value: "WALNUTS,ENGLISH"
 },
 {
   data: 12158,
   value: "BREADFRUIT SEEDS,ROASTED"
 },
 {
   data: 12160,
   value: "COTTONSEED KRNLS,RSTD (GLANDLESS)"
 },
 {
   data: 12163,
   value: "PUMPKIN&SQUASH SEEDS,WHL,RSTD,WO/SALT"
 },
 {
   data: 12166,
   value: "SESAME BUTTER,TAHINI,FROM RSTD&TSTD KRNLS (MOST COMMON TYPE)"
 },
 {
   data: 12167,
   value: "CHESTNUTS,EUROPEAN,RSTD"
 },
 {
   data: 12169,
   value: "SESAME BUTTER,PASTE"
 },
 {
   data: 12170,
   value: "SESAME FLOUR,HIGH-FAT"
 },
 {
   data: 12171,
   value: "SESAME BUTTER,TAHINI,FROM UNROASTED KRNLS"
 },
 {
   data: 12174,
   value: "WATERMELON SD KRNLS,DRIED"
 },
 {
   data: 12175,
   value: "CHESTNUTS,JAPANESE,DRIED"
 },
 {
   data: 12176,
   value: "COCONUT MILK,FRZ (LIQ EXPRESSED FROM GRATED MEAT&H2O)"
 },
 {
   data: 12177,
   value: "COCONUT MEAT,DRIED (DESICCATED),CRMD"
 },
 {
   data: 12179,
   value: "COCONUT MEAT,DRIED (DESICCATED),SWTND,SHREDDED"
 },
 {
   data: 12193,
   value: "SISYMBRIUM SP. SEEDS,WHL,DRIED"
 },
 {
   data: 12195,
   value: "ALMOND BUTTER,PLN,WO/SALT"
 },
 {
   data: 12198,
   value: "SESAME BUTTER,TAHINI,FROM RAW&STONE GROUND KRNLS"
 },
 {
   data: 12200,
   value: "FORMULATED,WHEAT-BASED,ALL FLAVORS XCPT MACADAMIA,WO/SALT"
 },
 {
   data: 12201,
   value: "SESAME SD KRNLS,DRIED (DECORT)"
 },
 {
   data: 12202,
   value: "CHESTNUTS,JAPANESE,RAW"
 },
 {
   data: 12203,
   value: "CHESTNUTS,JAPANESE,BLD&STMD"
 },
 {
   data: 12204,
   value: "CHESTNUTS,JAPANESE,RSTD"
 },
 {
   data: 12205,
   value: "LOTUS SEEDS,RAW"
 },
 {
   data: 12206,
   value: "ALMONDS,HONEY RSTD,UNBLANCHED"
 },
 {
   data: 12220,
   value: "SEEDS,FLAXSEED"
 },
 {
   data: 12516,
   value: "PUMPKIN&SQUASH SD KRNLS,RSTD,W/SALT"
 },
 {
   data: 12529,
   value: "SESAME SD KRNLS,TSTD,W/SALT (DECORT)"
 },
 {
   data: 12537,
   value: "SUNFLOWER SD KRNLS,DRY RSTD,W/SALT"
 },
 {
   data: 12538,
   value: "SUNFLOWER SD KRNLS,OIL RSTD,W/SALT"
 },
 {
   data: 12539,
   value: "SUNFLOWER SD KRNLS,TSTD,W/SALT"
 },
 {
   data: 12540,
   value: "SUNFLOWER SD BUTTER,W/SALT"
 },
 {
   data: 12563,
   value: "ALMONDS,DRY RSTD,W/SALT"
 },
 {
   data: 12565,
   value: "ALMONDS,OIL RSTD,W/SALT"
 },
 {
   data: 12585,
   value: "CASHEW NUTS,DRY RSTD,W/SALT"
 },
 {
   data: 12586,
   value: "CASHEW NUTS,OIL RSTD,W/SALT"
 },
 {
   data: 12588,
   value: "CASHEW BUTTER,PLN,W/SALT"
 },
 {
   data: 12632,
   value: "MACADAMIA NUTS,DRY RSTD,W/SALT"
 },
 {
   data: 12635,
   value: "MIXED NUTS,DRY RSTD,W/PNUTS,W/SALT"
 },
 {
   data: 12637,
   value: "NUTS,MXD NUTS,OIL RSTD,W/ PNUTS,W/ SALT ADDED"
 },
 {
   data: 12638,
   value: "NUTS,MXD NUTS,OIL RSTD,WO/ PNUTS,W/ SALT ADDED"
 },
 {
   data: 12643,
   value: "PECANS,DRY RSTD,W/SALT"
 },
 {
   data: 12644,
   value: "PECANS,OIL RSTD,W/SALT"
 },
 {
   data: 12652,
   value: "PISTACHIO NUTS,DRY RSTD,W/SALT"
 },
 {
   data: 12663,
   value: "PUMPKIN&SQUASH SEEDS,WHL,RSTD,W/SALT"
 },
 {
   data: 12695,
   value: "ALMOND BUTTER,PLN,W/SALT"
 },
 {
   data: 12698,
   value: "SESAME BUTTER,TAHINI,KRNLS UNSPEC"
 },
 {
   data: 12737,
   value: "NUTS,MXD NUTS,OIL RSTD,W/ PNUTS,LIGHTLY SALTED"
 },
 {
   data: 12738,
   value: "NUTS,MXD NUTS,OIL RSTD,WO/ PNUTS,LIGHTLY SALTED"
 },
 {
   data: 13000,
   value: "BEEF,GRASS-FED,STRIP STEAKS,LN,RAW"
 },
 {
   data: 13001,
   value: "BEEF,CARCASS,LN&FAT,CHOIC,RAW"
 },
 {
   data: 13002,
   value: "BEEF,CARCASS,LN&FAT,SEL,RAW"
 },
 {
   data: 13019,
   value: "BEEF,RTL CUTS,FAT,RAW"
 },
 {
   data: 13020,
   value: "BEEF,RTL CUTS,FAT,CKD"
 },
 {
   data: 13023,
   value: "BEEF,BRISKET,WHL,LN,ALL GRDS,RAW"
 },
 {
   data: 13047,
   value: "BEEF,GRASS-FED,GROUND,RAW"
 },
 {
   data: 13055,
   value: "BEEF,BRISKET,FLAT HALF,LN & FAT,1/8\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13065,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13066,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13067,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13068,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13069,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13070,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13095,
   value: "BEEF,RIB,EYE,SML END (RIBS 10-12),LN&FAT,0\"FAT,CHOIC,RAW"
 },
 {
   data: 13096,
   value: "BF,RIB,EYE,SML END (RIB 10-12),LN & FT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13097,
   value: "BEEF,RIB,EYE,SML END (RIBS 10-12),LN,0\"FAT,CHOIC,RAW"
 },
 {
   data: 13098,
   value: "BEEF,RIB,EYE,SML END (RIBS 10-12),LN,0\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13147,
   value: "BEEF,RIB,SHORTRIBS,LN&FAT,CHOIC,RAW"
 },
 {
   data: 13148,
   value: "BEEF,RIB,SHORTRIBS,LN&FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13149,
   value: "BEEF,RIB,SHORTRIBS,LN ONLY,CHOIC,RAW"
 },
 {
   data: 13150,
   value: "BEEF,RIB,SHORTRIBS,LN,CHOIC,CKD,BRSD"
 },
 {
   data: 13156,
   value: "BEEF,RND,FULL CUT,LN,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13158,
   value: "BEEF,RND,FULL CUT,LN,1/4\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13165,
   value: "BEEF,BRISKET,FLAT HALF,LN & FAT,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13166,
   value: "USDA CMDTY,BF,CND"
 },
 {
   data: 13227,
   value: "BEEF,SHANK CROSSCUTS,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 13228,
   value: "BEEF,SHANK CROSSCUTS,LN,1/4\"FAT,CHOIC,CKD,SIMMRD"
 },
 {
   data: 13284,
   value: "BEEF,RIB EYE,SML END (RIBS 10-12),LN,0\" FAT,SEL,RAW"
 },
 {
   data: 13285,
   value: "BEEF,CHUCK,UND BL POT RST,BNLESS,LN,0\" FAT,ALL GRDS,CKD"
 },
 {
   data: 13293,
   value: "BEEF,CHK,UND BL POT RST,BNLESS,LN,0\" FAT,ALL GRDS,CKD, BRSD"
 },
 {
   data: 13294,
   value: "BEEF,CHCK,UND BL POT RST OR STEAK,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13317,
   value: "BEEF,GROUND,PATTIES,FRZ,CKD,BRLD"
 },
 {
   data: 13318,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,BRAIN,RAW"
 },
 {
   data: 13319,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,PAN-FRIED"
 },
 {
   data: 13320,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,SIMMRD"
 },
 {
   data: 13321,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,HEART,RAW"
 },
 {
   data: 13322,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,HEART,CKD,SIMMRD"
 },
 {
   data: 13323,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW"
 },
 {
   data: 13324,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,SIMMRD"
 },
 {
   data: 13325,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,LIVER,RAW"
 },
 {
   data: 13326,
   value: "BEEF,VAR MEATS & BY-PRODUCTS,LIVER,CKD,BRSD"
 },
 {
   data: 13327,
   value: "BEEF, VAR MEATS&BY-PRODUCTS, LIVER, CKD, PAN-FRIED"
 },
 {
   data: 13328,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,LUNGS,RAW"
 },
 {
   data: 13329,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD"
 },
 {
   data: 13330,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,MECHANICALLY SEPARATED BF,RAW"
 },
 {
   data: 13331,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW"
 },
 {
   data: 13332,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD"
 },
 {
   data: 13333,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW"
 },
 {
   data: 13334,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD"
 },
 {
   data: 13335,
   value: "BEEF,VAR MEATS & BY-PRODUCTS,SUET,RAW"
 },
 {
   data: 13337,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,THYMUS,RAW"
 },
 {
   data: 13338,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,THYMUS,CKD,BRSD"
 },
 {
   data: 13339,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,TONGUE,RAW"
 },
 {
   data: 13340,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,SIMMRD"
 },
 {
   data: 13341,
   value: "BEEF,VAR MEATS&BY-PRODUCTS,TRIPE,RAW"
 },
 {
   data: 13342,
   value: "BEEF,SNDWCH STEAKS,FLAKED,CHOPD,FORMED & THINLY SLICED,RAW"
 },
 {
   data: 13343,
   value: "BEEF,BRISKET,FLAT HALF,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13344,
   value: "BEEF,CURED,BRKFST STRIPS,RAW OR UNHTD"
 },
 {
   data: 13345,
   value: "BEEF,CURED,BRKFST STRIPS,CKD"
 },
 {
   data: 13346,
   value: "BEEF,CURED,CORNED BF,BRISKET,RAW"
 },
 {
   data: 13347,
   value: "BEEF,CURED,CORNED BF,BRISKET,CKD"
 },
 {
   data: 13348,
   value: "BEEF,CURED,CORNED BF,CND"
 },
 {
   data: 13349,
   value: "BEEF,CHK,UND BLADE POT RST OR STK,BNLESS,LN,0\" FAT,SEL, RAW"
 },
 {
   data: 13350,
   value: "BEEF,CURED,DRIED"
 },
 {
   data: 13351,
   value: "BEEF,CHUCK,UNDER BLADE CNTR STEAK,BNLESS,DENVER CUT,LN,0\" FA"
 },
 {
   data: 13352,
   value: "BEEF,CHUCK,UNDER BLADE CNTR STEAK,BNLESS,DENVER CUT,LN,0\" FA"
 },
 {
   data: 13353,
   value: "BEEF,CURED,LUNCHEON MEAT,JELLIED"
 },
 {
   data: 13354,
   value: "BEEF,CHK,UND BL CNTR STK,BNLESS,DEN CUT,LN,0\" FA, SEL, CKD"
 },
 {
   data: 13355,
   value: "BEEF,CURED,PASTRAMI"
 },
 {
   data: 13356,
   value: "BEEF,CHK,UNDBL CNTR STK,BNLESS,DENCUT,LN,0\" FA, ALL GRD, RAW"
 },
 {
   data: 13357,
   value: "BEEF,CURED,SAUSAGE,CKD,SMOKED"
 },
 {
   data: 13358,
   value: "BEEF,CURED,SMOKED,CHOPD BF"
 },
 {
   data: 13359,
   value: "BEEF,CHK,UND BLCNTR STK,BNLESS,DEN CUT,LN,0\" FA, CHOICE, RAW"
 },
 {
   data: 13360,
   value: "BEEF,CURED,THIN-SLICED BF"
 },
 {
   data: 13361,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,0\"FAT,ALL GRDS,CKD"
 },
 {
   data: 13362,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,0\"FAT,CHOIC,CKD"
 },
 {
   data: 13363,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,0\"FAT,SEL,CKD"
 },
 {
   data: 13364,
   value: "BEEF,COMP OF RTL CUTS,LN,0\" FAT,ALL GRDS,CKD"
 },
 {
   data: 13365,
   value: "BEEF,COMP OF RTL CUTS,LN,0\"FAT,CHOIC,CKD"
 },
 {
   data: 13366,
   value: "BEEF,COMP OF RTL CUTS,LN,0\"FAT,SEL,CKD"
 },
 {
   data: 13367,
   value: "BEEF,BRISKET,WHL,LN&FAT,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13368,
   value: "BEEF,BRISKET,WHL,LN,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13369,
   value: "BEEF,BRISKET,FLAT HALF,LN&FAT,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13370,
   value: "BEEF,BRISKET,FLAT HALF,LN,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13371,
   value: "BEEF,BRISKET,POINT HALF,LN&FAT,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13372,
   value: "BEEF,BRISKET,POINT HALF,LN,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13373,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13375,
   value: "BEEF,CHUCK,ARM POT RST,LN & FAT,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13377,
   value: "BEEF,CHUCK,ARM POT RST,LN,0\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13378,
   value: "BEEF,CHUCK,ARM POT RST,LN,0\"FAT,SEL,CKD,BRSD"
 },
 {
   data: 13380,
   value: "BEEF,CHCK,UNDR BLDE POT RST,BNLS,LN & FAT,0\",CHC,CKD,BRSD"
 },
 {
   data: 13381,
   value: "BEEF,CHCK,UNDR BLDE POT RST,BNLS,LN & FAT,0\",SEL,CKD,BRSD"
 },
 {
   data: 13382,
   value: "BEEF,CHUCK,BLADE RST,LN,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13383,
   value: "BEEF,CHK,UNDER BLADE POT RST,BNLESS,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13384,
   value: "BEEF,CHUCK,UNDER BLADE POT RST,BNLESS,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13386,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,0\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13387,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,0\"FAT,SEL,CKD,RSTD"
 },
 {
   data: 13388,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN,0\"FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13389,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN,0\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13390,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN,0\"FAT,SEL,CKD,RSTD"
 },
 {
   data: 13391,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,0\"FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13392,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,0\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13393,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,0\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13394,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,0\"FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13395,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,0\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13396,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,0\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13398,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13399,
   value: "BEEF,RND,BTTM RND,RST,LN & FAT,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13401,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13402,
   value: "BEEF,RND,BTTM RND,RST,LN & FAT,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13404,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13405,
   value: "BEEF,RND,BTTM RND,RST,LN & FAT,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13407,
   value: "BEEF,RND,BTTM RND,STEAK,LN,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13408,
   value: "BEEF,RND,BTTM RND,RST,LN,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13410,
   value: "BEEF,RND,BTTM RND,STEAK,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13411,
   value: "Beef, bottom round, roast,lean only, 0\" fat, choice, roasted"
 },
 {
   data: 13413,
   value: "BEEF,RND,BTTM RND,STEAK,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13414,
   value: "BEEF,RND,BTTM RND RST,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13415,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13416,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13417,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13418,
   value: "BEEF,RND,EYE OF RND,RST,LN,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13419,
   value: "BEEF,RND,EYE OF RND,RST,LN,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13420,
   value: "BEEF,RND,EYE OF RND,RST,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13421,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13422,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13423,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13424,
   value: "BEEF,RND,TIP RND,RST,LN,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13425,
   value: "BEEF,RND,TIP RND,RST,LN,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13426,
   value: "BEEF,RND,TIP RND,RST,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13428,
   value: "BEEF,RND,TOP RND,LN&FAT,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13430,
   value: "BEEF,RND,TOP RND,LN&FAT,0\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13432,
   value: "BEEF,RND,TOP RND,LN&FAT,0\"FAT,SEL,CKD,BRSD"
 },
 {
   data: 13434,
   value: "BEEF,RND,TOP RND,LN,0\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13436,
   value: "BEEF,RND,TOP RND,LN,0\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13438,
   value: "BEEF,RND,TOP RND,LN,0\"FAT,SEL,CKD,BRSD"
 },
 {
   data: 13439,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13440,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13441,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13442,
   value: "BEEF,TENDERLOIN,STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13443,
   value: "BEEF,TENDERLOIN,STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13444,
   value: "BEEF,TENDERLOIN,STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13445,
   value: "BEEF,SHRT LOIN,TOP LOIN,STK,LN & FAT,0\" FAT,ALL GRD,CKD,BRLD"
 },
 {
   data: 13446,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13447,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13448,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13449,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13450,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13451,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13452,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13453,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13454,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13455,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13456,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13459,
   value: "BEEF,SHRT LOIN,PRTRHS STK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13460,
   value: "BEEF,LOIN,PRTRHS STK,LN & FAT,0\" FAT,USDA CHOIC,CKD,BRLD"
 },
 {
   data: 13463,
   value: "BEEF,SHRT LOIN,PRTRHS STK,LN & FAT,0\" FAT,USDA SEL,CKD,BRLD"
 },
 {
   data: 13466,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13467,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13470,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13473,
   value: "BEEF,SHRT LOIN,T-BONE STK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13474,
   value: "BEEF,LOIN,T-BONE STEAK,LN & FAT,0\" FAT,USDA CHOIC,CKD,BRLD"
 },
 {
   data: 13477,
   value: "BEEF,SHRT LOIN,T-BONE STK,LN & FAT,0\" FAT,USDA SEL,CKD,BRLD"
 },
 {
   data: 13479,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN,1/4\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13480,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13481,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13484,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13485,
   value: "BEEF,BRISKET,FLAT HALF,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13486,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13487,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13488,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 13490,
   value: "BEEF,RIB,EYE,SML END (RIBS 10- 12) LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13491,
   value: "BEEF,RND,TOP RND,STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13492,
   value: "BEEF,RND,TOP RND,STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13493,
   value: "BEEF,RND,TOP RND,STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13494,
   value: "BEEF,GROUND,70% LN MEAT / 30% FAT,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 13495,
   value: "BEEF,GROUND,70% LN MEAT / 30% FAT,LOAF,CKD,BKD"
 },
 {
   data: 13496,
   value: "BEEF,GROUND,70% LN MEAT / 30% FAT,PATTY CKD,PAN-BROILED"
 },
 {
   data: 13497,
   value: "BEEF,GROUND,70% LN MEAT / 30% FAT,PATTY,CKD,BRLD"
 },
 {
   data: 13498,
   value: "BEEF,GROUND,70% LN MEAT / 30% FAT,RAW"
 },
 {
   data: 13499,
   value: "BEEF,CHK,UND BL CNTR STK,BNLESS,DEN CUT,LN,0\" FA, SEL, RAW"
 },
 {
   data: 13500,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0\" FAT,ALL GRDS,CKD,GRI"
 },
 {
   data: 13501,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0\" FAT,CHOIC,CKD,GRILLE"
 },
 {
   data: 13502,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 13519,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13520,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13523,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 13595,
   value: "BEEF,BRISKET,FLAT HALF,BNLESS LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13596,
   value: "BEEF,BRISKET,FLAT HALF,BNLESS LN,0\" FAT,ALL CHOICE,RAW"
 },
 {
   data: 13597,
   value: "BEEF,BRISKET,FLAT HALF,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 13598,
   value: "BEEF,SHLDR TOP BLADE STK,BNLES,LN & FAT,0\" ,ALL GRDS,CKD,G"
 },
 {
   data: 13647,
   value: "BEEF,SHLDR POT RST OR STEAK,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13648,
   value: "BEEF,SHLDR POT RST OR STEAK,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13649,
   value: "BEEF,SHLDR POT RST OR STEAK,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 13650,
   value: "BEEF,SHLDR TOP BLDE STK,BNS,LN & FAT,0\" FAT,CHOIC,CKD,G"
 },
 {
   data: 13786,
   value: "BEEF,CHUCK EYE RST,BNLESS,A BF RST,LN & FAT,0\",ALL G,RAW"
 },
 {
   data: 13788,
   value: "BEEF,CHUCK EYE RST,BNLS,A BF RST,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13791,
   value: "BEEF,CHUCK EYE RST,BNLS,A BF RST,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 13795,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13796,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,ALL GRDS,CKD"
 },
 {
   data: 13797,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13798,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,CHOIC,CKD"
 },
 {
   data: 13799,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13800,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,SEL,CKD"
 },
 {
   data: 13801,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,PRIME,RAW"
 },
 {
   data: 13802,
   value: "BEEF,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,PRIME,CKD"
 },
 {
   data: 13803,
   value: "BEEF,BRISKET,WHL,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13804,
   value: "BEEF,BRISKET,WHL,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13805,
   value: "BEEF,BRISKET,FLAT HALF,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13806,
   value: "BEEF,BRISKET,FLAT HALF,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13807,
   value: "BEEF,BRISKET,POINT HALF,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13808,
   value: "BEEF,BRISKET,POINT HALF,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13809,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13810,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13811,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13812,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,1/8\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13813,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13814,
   value: "BEEF,CHUCK,ARM POT RST,LN&FAT,1/8\"FAT,SEL,CKD,BRSD"
 },
 {
   data: 13815,
   value: "BEEF,CHUCK,BLADE RST,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13816,
   value: "BEEF,CHUCK,BLADE RST,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13817,
   value: "BEEF,CHUCK,BLADE RST,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13818,
   value: "BEEF,CHUCK,BLADE RST,LN&FAT,1/8\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13819,
   value: "BEEF,CHUCK,BLADE RST,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13820,
   value: "BEEF,CHUCK,BLADE RST,LN&FAT,1/8\"FAT,SEL,CKD,BRSD"
 },
 {
   data: 13821,
   value: "BEEF,CHK EYE RST,BNL,AMERICA'S BF RST,LN,0\" FAT,ALL GRD, CKD"
 },
 {
   data: 13822,
   value: "BEEF,CHK EYE RST,BNLESS,AMERICA'S BF RST,LN,0\" FAT,CHOIC,CKD"
 },
 {
   data: 13823,
   value: "BEEF,CHUCK EYE RST,BNLESS,AMERICA'S BF RST,LN,0\" FAT,SEL,CKD"
 },
 {
   data: 13824,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13825,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13826,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13827,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13828,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13829,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13830,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13831,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13832,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,SEL,CKD,RSTD"
 },
 {
   data: 13833,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,PRIME,RAW"
 },
 {
   data: 13834,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,PRIME,CKD,BRLD"
 },
 {
   data: 13835,
   value: "BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8\"FAT,PRIME,CKD,RSTD"
 },
 {
   data: 13838,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13839,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13840,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13841,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13842,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13843,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13844,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13845,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13846,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,SEL,CKD,RSTD"
 },
 {
   data: 13847,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,PRIME,RAW"
 },
 {
   data: 13848,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,PRIME,CKD,BRLD"
 },
 {
   data: 13849,
   value: "BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8\"FAT,PRIME,CKD,RSTD"
 },
 {
   data: 13850,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13851,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,ALL GRDS,CKD,BR"
 },
 {
   data: 13852,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,ALL GRDS,CKD,RS"
 },
 {
   data: 13853,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13854,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13855,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13856,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13857,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13858,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,SEL,CKD,RSTD"
 },
 {
   data: 13859,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,PRIME,RAW"
 },
 {
   data: 13860,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,PRIME,CKD,BRLD"
 },
 {
   data: 13861,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8\"FAT,PRIME,CKD,RSTD"
 },
 {
   data: 13862,
   value: "BEEF,SHLDR TOP BLDE STK,BNLS,LN & FAT,0\" FAT,SEL,CKD,G"
 },
 {
   data: 13863,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLS,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13864,
   value: "BEEF,RND,FULL CUT,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13865,
   value: "BEEF,RND,FULL CUT,LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13866,
   value: "BEEF,RND,FULL CUT,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13867,
   value: "BEEF,RND,FULL CUT,LN&FAT,1/8\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 13868,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13869,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13870,
   value: "BEEF,RND,BTTM RND,RST,LN & FAT,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13871,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 13872,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13873,
   value: "BEEF,RND,BTTM RND,RST,LN & FAT,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13874,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 13875,
   value: "BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13876,
   value: "BEEF,RND,BTTM RND,RST,LN & FAT,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13877,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13878,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13879,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 13880,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13881,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 13882,
   value: "BEEF,RND,EYE OF RND,RST,LN & FAT,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13883,
   value: "BEEF,RND,TIP RND,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 13884,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13885,
   value: "BEEF,RND,TIP RND,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13886,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13887,
   value: "BEEF,RND,TIP RND,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 13888,
   value: "BEEF,RND,TIP RND,RST,LN & FAT,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13889,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13890,
   value: "BEEF,RND,TOP RND,LN,1/8\" FAT,CHOIC,CKD,PAN-FRIED"
 },
 {
   data: 13891,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13892,
   value: "BEEF,RND,TOP RND,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13893,
   value: "BEEF,RND,TOP RND STEAK,LN & FAT,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13894,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 13895,
   value: "BEEF,RND,TOP RND,LN&FAT,1/8\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 13896,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13897,
   value: "BEEF,RND,TOP RND,LN&FAT,1/8\"FAT,CHOIC,CKD,PAN-FRIED"
 },
 {
   data: 13898,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 13899,
   value: "BEEF,RND,TOP RND,LN&FAT,1/8\"FAT,SEL,CKD,BRSD"
 },
 {
   data: 13900,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13901,
   value: "BEEF,RND,TOP RND,LN&FAT,1/8\"FAT,PRIME,RAW"
 },
 {
   data: 13902,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,1/8\" FAT,PRIME,CKD,BRLD"
 },
 {
   data: 13903,
   value: "BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 13904,
   value: "BEEF,BRISKET,FLAT HALF,BNLESS,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13905,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13906,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13907,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 13908,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13909,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13910,
   value: "BEEF,SHRT LOIN,TOP LOIN,STK,LN & FT,1/8\" FT,ALL GRD,CKD,BRLD"
 },
 {
   data: 13911,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 13912,
   value: "BEEF,SHRT LOIN,TOP LOIN,STK,LN & FT,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13913,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 13914,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13915,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8\" FAT,PRIME,RAW"
 },
 {
   data: 13916,
   value: "BEEF,SHRT LOIN,TOP LOIN,LN&FAT,1/8\"FAT,PRIME,CKD,BRLD"
 },
 {
   data: 13917,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13918,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13919,
   value: "BEEF,TENDERLOIN,RST,LN & FAT,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 13920,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 13921,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13922,
   value: "BEEF,TENDERLOIN,RST,LN & FAT,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13923,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 13924,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13925,
   value: "BEEF,TENDERLOIN,RST,LN & FAT,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13926,
   value: "BEEF,TENDERLOIN,LN&FAT,1/8\"FAT,PRIME,RAW"
 },
 {
   data: 13927,
   value: "BEEF,TENDERLOIN,STEAK,LN & FAT,1/8\" FAT,PRIME,CKD,BRLD"
 },
 {
   data: 13928,
   value: "BEEF,TENDERLOIN,RST,LN & FAT,1/8\" FAT,PRIME,CKD,RSTD"
 },
 {
   data: 13929,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13930,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13931,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 13932,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13933,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,CHOIC,CKD,PAN-FRIED"
 },
 {
   data: 13934,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 13935,
   value: "BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13937,
   value: "BEEF,CHUCK,CLOD RST,LN,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13940,
   value: "BEEF,CHUCK,CLOD RST,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13943,
   value: "Beef, shoulder steak, boneless, lean only, 0\", choice, grill"
 },
 {
   data: 13946,
   value: "BEEF,SHLDR STEAK,BNLESS,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 13948,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13949,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13950,
   value: "BEEF,BRISKET,FLAT HALF,LN & FAT,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13951,
   value: "BEEF,RIB EYE,SML END (RIBS 10-12),LN & FAT,0\",SEL,CKD,BRLD"
 },
 {
   data: 13952,
   value: "BEEF,RIBEYE,SML END(RIBS 10-12),LN&FAT,0\",ALL GRDS,CKD,BRLD"
 },
 {
   data: 13954,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13955,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 13956,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13957,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 13958,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 13959,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13961,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13963,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13965,
   value: "BEEF,CHUCK,TOP BLADE,LN,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13967,
   value: "BEEF,CHUCK,TOP BLADE,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13968,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 13969,
   value: "BEEF,RND,TOP RND,STEAK,LN & FAT,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 13970,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 13971,
   value: "BEEF,FLANK,STEAK,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 13972,
   value: "BEEF,CHK EYE RST,BNL,AMERICA'S BF RST,LN,0\" FAT,ALL GRD, RAW"
 },
 {
   data: 13973,
   value: "BEEF,CHK EYE RST,BNL,AMERICA'S BF RST,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13974,
   value: "BEEF,CHUCK EYE RST,BNLESS,AMERICA'S BF RST,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 13975,
   value: "BEEF,BRISKET,FLAT HALF,BNLESS,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 13977,
   value: "BEEF,PLATE,INSIDE SKIRT STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13979,
   value: "BEEF,PLATE,OUTSIDE SKIRT STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 13980,
   value: "BEEF, CHUCK, SHORT RIBS, BNL, 0\" FAT, CHOICE, CKED, BR"
 },
 {
   data: 13981,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 13982,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 13983,
   value: "BEEF,BRISKET,FLAT HALF,BNLESS,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 13985,
   value: "BF,LOIN,BTTM SIRLOIN BUTT,TRI-TIP,LN,0\" FAT,ALL GRD,CKD,RSTD"
 },
 {
   data: 13987,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 14003,
   value: "ALCOHOLIC BEV,BEER,REG,ALL"
 },
 {
   data: 14004,
   value: "ALCOHOLIC BEV,BEER,REG,BUDWEISER"
 },
 {
   data: 14005,
   value: "ALCOHOLIC BEV,BEER,LT,BUDWEISER SEL"
 },
 {
   data: 14006,
   value: "ALCOHOLIC BEV,BEER,LT"
 },
 {
   data: 14007,
   value: "ALCOHOLIC BEV,BEER,LT,BUD LT"
 },
 {
   data: 14009,
   value: "ALCOHOLIC BEV,DAIQUIRI,CND"
 },
 {
   data: 14010,
   value: "ALCOHOLIC BEV,DAIQUIRI,PREPARED-FROM-RECIPE"
 },
 {
   data: 14013,
   value: "ALCOHOLIC BEV,BEER,LT,MICHELOB ULTRA"
 },
 {
   data: 14015,
   value: "ALCOHOLIC BEV,PINA COLADA,CND"
 },
 {
   data: 14017,
   value: "ALCOHOLIC BEV,PINA COLADA,PREPARED-FROM-RECIPE"
 },
 {
   data: 14019,
   value: "ALCOHOLIC BEV,TEQUILA SUNRISE,CND"
 },
 {
   data: 14024,
   value: "WHISKEY SOUR MIX,PDR"
 },
 {
   data: 14025,
   value: "ALCOHOLIC BEV,WHISKEY SOUR,PREP W/ H2O,WHISKEY & PDR MIX"
 },
 {
   data: 14027,
   value: "ALCOHOLIC BEV,WHISKEY SOUR,CND"
 },
 {
   data: 14028,
   value: "WHISKEY SOUR MIX,BTLD"
 },
 {
   data: 14029,
   value: "ALCOHOLIC BEV,WHISKEY SOUR,PREP FROM ITEM 14028"
 },
 {
   data: 14034,
   value: "ALCOHOLIC BEV,CREME DE MENTHE,72 PROOF"
 },
 {
   data: 14037,
   value: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 80 PROOF"
 },
 {
   data: 14049,
   value: "ALCOHOLIC BEV,DISTILLED,GIN,90 PROOF"
 },
 {
   data: 14050,
   value: "ALCOHOLIC BEV,DISTILLED,RUM,80 PROOF"
 },
 {
   data: 14051,
   value: "ALCOHOLIC BEV,DISTILLED,VODKA,80 PROOF"
 },
 {
   data: 14052,
   value: "ALCOHOLIC BEV,DISTILLED,WHISKEY,86 PROOF"
 },
 {
   data: 14057,
   value: "ALCOHOLIC BEV,WINE,DSSRT,SWT"
 },
 {
   data: 14084,
   value: "ALCOHOLIC BEV,WINE,TABLE,ALL"
 },
 {
   data: 14086,
   value: "V8 SPLASH SMOOTHIES,PEACH MANGO"
 },
 {
   data: 14087,
   value: "V8 SPLASH SMOOTHIES,STRAWBERRY BANANA"
 },
 {
   data: 14088,
   value: "V8 SPLASH SMOOTHIES,TROPICAL COLADA"
 },
 {
   data: 14096,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED"
 },
 {
   data: 14097,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,CABERNET SAUVIGNON"
 },
 {
   data: 14098,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,CABERNET FRANC"
 },
 {
   data: 14099,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,PINOT NOIR"
 },
 {
   data: 14100,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,SYRAH"
 },
 {
   data: 14101,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,BARBERA"
 },
 {
   data: 14102,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,ZINFANDEL"
 },
 {
   data: 14103,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,PETITE SIRAH"
 },
 {
   data: 14105,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,CLARET"
 },
 {
   data: 14106,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE"
 },
 {
   data: 14107,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,LEMBERGER"
 },
 {
   data: 14108,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,SANGIOVESE"
 },
 {
   data: 14109,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,CARIGNANE"
 },
 {
   data: 14113,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,PINOT GRIS (GRIGIO)"
 },
 {
   data: 14114,
   value: "BEEF BROTH&TOMATO JUC,CND"
 },
 {
   data: 14116,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,CHENIN BLANC"
 },
 {
   data: 14117,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,FUME BLANC"
 },
 {
   data: 14119,
   value: "MIXED VEG & FRUIT JUC DRK,W/ ADDED NUTR"
 },
 {
   data: 14120,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,MULLER THURGAU"
 },
 {
   data: 14121,
   value: "CARBONATED BEV,CLUB SODA"
 },
 {
   data: 14124,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,GEWURZTRAMINER"
 },
 {
   data: 14125,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,LATE HARVEST,GEWURZTRAMINER"
 },
 {
   data: 14126,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,SEMILLON"
 },
 {
   data: 14130,
   value: "CARBONATED BEV,CRM SODA"
 },
 {
   data: 14132,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,RIESLING"
 },
 {
   data: 14134,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,SAUVIGNON BLANC"
 },
 {
   data: 14135,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,LATE HARVEST"
 },
 {
   data: 14136,
   value: "CARBONATED BEV,GINGER ALE"
 },
 {
   data: 14137,
   value: "TEA,RTD,NESTLE,COOL NESTEA ICE TEA LEMON FLAVOR"
 },
 {
   data: 14138,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,PINOT BLANC"
 },
 {
   data: 14140,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,MUSCAT"
 },
 {
   data: 14142,
   value: "CARBONATED BEV,GRAPE SODA"
 },
 {
   data: 14143,
   value: "CARBONATED BEV,LO CAL,OTHER THAN COLA OR PEPPER,WO/ CAFFEINE"
 },
 {
   data: 14144,
   value: "CARBONATED BEV,LEMON-LIME SODA,CONTAINS CAFFEINE"
 },
 {
   data: 14145,
   value: "CARBONATED BEV,SPRITE,LEMON-LIME,WO/ CAFFEINE"
 },
 {
   data: 14146,
   value: "CARBONATED BEV,LO CAL,COLA OR PEPPR-TYPE,W/ ASPRT,WO/ CAFFEN"
 },
 {
   data: 14147,
   value: "CARBONATED BEV,COLA,WO/CAFFEINE"
 },
 {
   data: 14148,
   value: "CARBONATED BEV,COLA,W/HIGHER CAFFEINE"
 },
 {
   data: 14149,
   value: "CARBONATED BEV,RED SUGAR,COLA,CONTAINS CAFFEINE & SWEETENERS"
 },
 {
   data: 14150,
   value: "CARBONATED BEV,ORANGE"
 },
 {
   data: 14151,
   value: "CARB BEV,LO CAL,OTHR THN COLA OR PEPPER,W/ ASPRT,CONTNS CAFF"
 },
 {
   data: 14152,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,BURGUNDY"
 },
 {
   data: 14153,
   value: "CARBONATED BEV,PEPPER-TYPE,CONTAINS CAFFEINE"
 },
 {
   data: 14154,
   value: "ENGY DRK,RED BULL,W/ ADD CAFFEINE,NIACIN,PANTO,VIT B6 & B12"
 },
 {
   data: 14155,
   value: "CARBONATED BEV,TONIC H2O"
 },
 {
   data: 14156,
   value: "ENG DRK,RED BULL,SGR FR,W/ADD CAFF,NIACIN,PANTO,VIT B6 & B12"
 },
 {
   data: 14157,
   value: "CARBONATED BEV,ROOT BEER"
 },
 {
   data: 14158,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,GAMAY"
 },
 {
   data: 14159,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,MOUVEDRE"
 },
 {
   data: 14160,
   value: "ALCOHOLIC BEV,WINE,TABLE,WHITE,CHARDONNAY"
 },
 {
   data: 14166,
   value: "CARBONATED BEV,LO CAL,COLA OR PEPR,W/ NA SACC,CONTAINS CAFFN"
 },
 {
   data: 14168,
   value: "CAROB-FLAVOR BEV MIX,PDR"
 },
 {
   data: 14169,
   value: "CAROB-FLAVOR BEV MIX,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14175,
   value: "CHOCOLATE-FLAVOR BEV MIX FOR MILK,PDR,WO/ ADDED NUTR"
 },
 {
   data: 14177,
   value: "CHOCOLATE-FLAVOR BEV MIX,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14181,
   value: "CHOCOLATE SYRUP"
 },
 {
   data: 14182,
   value: "CHOCOLATE SYRUP,PREP W/ WHL MILK"
 },
 {
   data: 14187,
   value: "CLAM&TOMATO JUC,CND"
 },
 {
   data: 14192,
   value: "COCOA MIX,PDR"
 },
 {
   data: 14194,
   value: "COCOA MIX,PDR,PREP W/ H2O"
 },
 {
   data: 14195,
   value: "COCOA MIX,NESTLE,HOT COCOA MIX RICH CHOC W/ MARSHMALLOWS"
 },
 {
   data: 14196,
   value: "COCOA MIX,NO SUGAR ADDED,PDR"
 },
 {
   data: 14197,
   value: "COCOA MIX,NESTLE,RICH CHOC HOT COCOA MIX"
 },
 {
   data: 14201,
   value: "COFFEE,BREWED FROM GROUNDS,PREP W/ TAP H2O,DECAFFEINATED"
 },
 {
   data: 14202,
   value: "COFFEE,BREWED,ESPRESSO,REST-PREP,DECAFFEINATED"
 },
 {
   data: 14203,
   value: "COFFEE,INST,REG,PDR,HALF THE CAFFEINE"
 },
 {
   data: 14204,
   value: "COFFEE&COCOA (MOCHA) PDR,W/WHTNR&LO CAL SWTNR,DECAFFEINATED"
 },
 {
   data: 14209,
   value: "COFFEE,BREWED FROM GROUNDS,PREP W/ TAP H2O"
 },
 {
   data: 14210,
   value: "COFFEE,BREWED,ESPRESSO,REST-PREP"
 },
 {
   data: 14214,
   value: "COFFEE,INST,REG,PDR"
 },
 {
   data: 14215,
   value: "COFFEE,INST,REG,PREP W/H2O"
 },
 {
   data: 14218,
   value: "COFFEE,INST,DECAFFEINATED,PDR"
 },
 {
   data: 14219,
   value: "COFFEE,INST,DECAFFEINATED,PDR,PREP W/H2O"
 },
 {
   data: 14222,
   value: "COFFEE,INST,W/CHICORY,PDR"
 },
 {
   data: 14223,
   value: "COFFEE,INST,W/ CHICORY,PREP W/ H2O"
 },
 {
   data: 14224,
   value: "COFFEE,INST,W/SUGAR,MOCHA-FLAVOR,PDR"
 },
 {
   data: 14228,
   value: "COFFEE,INST,W/SUGAR,CAPPUCCINO-FLAVOR PDR"
 },
 {
   data: 14229,
   value: "COFFEE,INST,W/SUGAR,FRENCH-FLAVOR,PDR"
 },
 {
   data: 14236,
   value: "COFFEE SUB,CRL GRAIN BEV,PDR"
 },
 {
   data: 14237,
   value: "COFFEE SUB,CRL GRAIN BEV,PREP W/ H2O"
 },
 {
   data: 14238,
   value: "CRANBERRY-APPLE JUC DRK,BTLD"
 },
 {
   data: 14240,
   value: "CRANBERRY-APRICOT JUC DRK,BTLD"
 },
 {
   data: 14241,
   value: "CRANBERRY-GRAPE JUC DRK,BTLD"
 },
 {
   data: 14242,
   value: "CRANBERRY JUC COCKTAIL,BTLD"
 },
 {
   data: 14243,
   value: "CRANBERRY JUC COCKTAIL,BTLD,LO CAL,W/CA,SACCHARIN&CORN SWTNR"
 },
 {
   data: 14245,
   value: "EGGNOG-FLAVOR MIX,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14262,
   value: "CITRUS FRUIT JUC DRK,FRZ CONC"
 },
 {
   data: 14263,
   value: "CITRUS FRUIT JUC DRK,FRZ CONC,PREP W/H2O"
 },
 {
   data: 14264,
   value: "FRUIT PUNCH DRK,WO/ ADDED NUTR,CND"
 },
 {
   data: 14267,
   value: "FRUIT PUNCH DRK,W/ ADDED NUTR,CND"
 },
 {
   data: 14268,
   value: "FRUIT PUNCH DRK,FRZ CONC"
 },
 {
   data: 14269,
   value: "FRUIT PUNCH DRK,FRZ CONC,PREP W/H2O"
 },
 {
   data: 14277,
   value: "GRAPE DRINK,CANNED"
 },
 {
   data: 14282,
   value: "GRAPE JUICE DRINK,CANNED"
 },
 {
   data: 14287,
   value: "LEMONADE,POWDER"
 },
 {
   data: 14288,
   value: "LEMONADE,PDR,PREP W/H2O"
 },
 {
   data: 14289,
   value: "LEMONADE,LO CAL,W/ NON-NUTRITIVE SWTNR,PDR"
 },
 {
   data: 14290,
   value: "LEMONADE,LO CAL,W/ NON-NUTRITIVE SWTNR,PDR,PREP W/ H2O"
 },
 {
   data: 14292,
   value: "LEMONADE,FRZ CONC,WHITE"
 },
 {
   data: 14293,
   value: "LEMONADE,FRZ CONC,WHITE,PREP W/H2O"
 },
 {
   data: 14296,
   value: "LEMONADE-FLAVOR DRK,PDR"
 },
 {
   data: 14297,
   value: "LEMONADE-FLAVOR DRK,PDR,PREP W/H2O"
 },
 {
   data: 14303,
   value: "LIMEADE,FRZ CONC,PREP W/H2O"
 },
 {
   data: 14305,
   value: "MALT BEV,INCL NON-ALCOHOLIC BEER"
 },
 {
   data: 14309,
   value: "MALTED DRK MIX,NAT,W/ ADDED NUTR,PDR"
 },
 {
   data: 14310,
   value: "MALTED DRK MIX,NAT,W/ ADDED NUTR,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14311,
   value: "MALTED DRK MIX,NAT,PDR"
 },
 {
   data: 14312,
   value: "MALTED DRK MIX,NAT,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14315,
   value: "MALTED DRK MIX,CHOC,W/ ADDED NUTR,PDR"
 },
 {
   data: 14316,
   value: "MALTED DRK MIX,CHOC,W/ ADDED NUTR,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14317,
   value: "MALTED DRK MIX,CHOC,PDR"
 },
 {
   data: 14318,
   value: "MALTED DRK MIX,CHOC,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14323,
   value: "ORANGE DRK,CND,W/ ADDED VIT C"
 },
 {
   data: 14327,
   value: "ORANGE&APRICOT JUC DRK,CND"
 },
 {
   data: 14334,
   value: "PINEAPPLE&GRAPEFRUIT JUC DRK,CND"
 },
 {
   data: 14341,
   value: "PINEAPPLE&ORANGE JUC DRK,CND"
 },
 {
   data: 14346,
   value: "SHAKE,FAST FOOD,CHOCOLATE"
 },
 {
   data: 14347,
   value: "SHAKE,FAST FOOD,VANILLA"
 },
 {
   data: 14350,
   value: "STRAWBERRY-FLAVOR BEV MIX,PDR"
 },
 {
   data: 14351,
   value: "STRAWBERRY-FLAVOR BEV MIX,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14352,
   value: "TEA,BLACK,BREWED,PREP W/ TAP H2O,DECAFFEINATED"
 },
 {
   data: 14353,
   value: "TEA,INST,UNSWTND,PDR,DECAFFEINATED"
 },
 {
   data: 14355,
   value: "TEA,BLACK,BREWED,PREP W/ TAP H2O"
 },
 {
   data: 14356,
   value: "TEA,INST,SWTND W/ NON-NUTRSWTNR,LEMON-FLAVOR,PDR,DECAFFE"
 },
 {
   data: 14357,
   value: "TEA,INST,SWTND W/SUGAR,LEMN-FLAV,WO/ VIT C,PDR,DECAFFEINATED"
 },
 {
   data: 14366,
   value: "TEA,INST,UNSWTND,PDR"
 },
 {
   data: 14367,
   value: "TEA,INST,UNSWTND,PDR,PREP"
 },
 {
   data: 14368,
   value: "TEA,INST,UNSWTND,LEMON-FLAVORED,PDR"
 },
 {
   data: 14370,
   value: "TEA,INST,SWTND W/SUGAR,LEMON-FLAVORED,WO/ VIT C,PDR"
 },
 {
   data: 14371,
   value: "TEA,INST,SWTND W/SUGAR,LEMON-FLAVORED,WO/ VIT C,PDR,PREP"
 },
 {
   data: 14375,
   value: "TEA,INST,SWTND W/NA SACCHARIN,LEMON-FLAVORED,PDR"
 },
 {
   data: 14376,
   value: "TEA,INST,SWTND W/ NON-NUTRITIVE SWTNR,LEMON-FLAVORED,PREP"
 },
 {
   data: 14381,
   value: "TEA,HERB,OTHER THAN CHAMOMILE,BREWED"
 },
 {
   data: 14383,
   value: "SPORTS DRK,FRUIT-FLAVORED,LO CAL,RTD"
 },
 {
   data: 14384,
   value: "WATER,BTLD,PERRIER"
 },
 {
   data: 14385,
   value: "WATER,BTLD,POLAND SPRING"
 },
 {
   data: 14390,
   value: "COCOA MIX,W/ ASPRT,PDR,PREP W/ H2O"
 },
 {
   data: 14400,
   value: "CARBONATED BEV,COLA,CONTAINS CAFFEINE"
 },
 {
   data: 14405,
   value: "FRUIT PUNCH JUC DRK,FRZ CONC"
 },
 {
   data: 14406,
   value: "FRUIT PUNCH JUC DRK,FRZ CONC,PREP W/H2O"
 },
 {
   data: 14407,
   value: "ORANGE-FLAVOR DRK,BRKFST TYPE,PDR"
 },
 {
   data: 14408,
   value: "ORANGE-FLAVOR DRK,BRKFST TYPE,PDR,PREP W/ H2O"
 },
 {
   data: 14409,
   value: "ORANGE-FLAVOR DRK,BRKFST TYPE,LO CAL,PDR"
 },
 {
   data: 14411,
   value: "WATER,TAP,DRINKING"
 },
 {
   data: 14412,
   value: "WATER,TAP,WELL"
 },
 {
   data: 14414,
   value: "ALCOHOLIC BEV,LIQUEUR,COFFEE,53 PROOF"
 },
 {
   data: 14415,
   value: "ALCOHOLIC BEV,LIQUEUR,COFFEE W/CRM,34 PROOF"
 },
 {
   data: 14416,
   value: "CARB BEV,LO CAL,COLA OR PEP,W/ ASPRT, CAF"
 },
 {
   data: 14421,
   value: "COFFEE SUB,CRL GRAIN BEV,PDR,PREP W/ WHL MILK"
 },
 {
   data: 14422,
   value: "DAIRY DRK MIX,CHOC,RED CAL,W/ LOW-CALORIE SWEETENERS,PDR"
 },
 {
   data: 14423,
   value: "DAIRY DRK MIX,CHOC,RED CAL,W/ ASPRT,PDR,PREP W/ H2O & ICE"
 },
 {
   data: 14424,
   value: "ORANGE-FLAVOR DRK,BRKFST TYPE,W/PULP,FRZ CONC"
 },
 {
   data: 14425,
   value: "ORANGE-FLAVOR DRK,BRKFST TYPE,W/PULP,FRZ CONC,PREP W/H2O"
 },
 {
   data: 14426,
   value: "ORANGE DRK,BRKFST TYPE,W/ JUC & PULP,FRZ CONC"
 },
 {
   data: 14427,
   value: "ORANGE DRK,BRKFST TYPE,W/JUC&PULP,FRZ CONC,PREP W/H2O"
 },
 {
   data: 14428,
   value: "SHAKE,FAST FD,STRAWBERRY"
 },
 {
   data: 14429,
   value: "WATER,TAP,MUNICIPAL"
 },
 {
   data: 14430,
   value: "CRANBERRY JUC COCKTAIL,FRZ CONC"
 },
 {
   data: 14431,
   value: "CRANBERRY JUC COCKTAIL,FRZ CONC,PREP W/ H2O"
 },
 {
   data: 14432,
   value: "WATER,BTLD,NON-CARBONATED,DANNON"
 },
 {
   data: 14433,
   value: "WATER,BTLD,NON-CARBONATED,PEPSI,AQUAFINA"
 },
 {
   data: 14434,
   value: "WATER,BTLD,NON-CARBONATED,DASANI"
 },
 {
   data: 14436,
   value: "ORANGE BRKFST DRK,RTD,W/ ADDED NUTR"
 },
 {
   data: 14437,
   value: "WATER,BTLD,NON-CARBONATED,CALISTOGA"
 },
 {
   data: 14438,
   value: "WATER,BTLD,NON-CARBONATED,CRYSTAL GEYSER"
 },
 {
   data: 14439,
   value: "WATER,BTLD,NON-CARBONATED,NAYA"
 },
 {
   data: 14440,
   value: "WATER,BTLD,NON-CARBONATED,DANNON FLUORIDE TO GO"
 },
 {
   data: 14450,
   value: "DRINK MIX,QUAKER OATS,GATORADE,ORANGE FLAVOR,PDR"
 },
 {
   data: 14460,
   value: "SPORTS DRK,PEPSICO QUAKER GATORADE,ORIGINAL,FRUIT-FLAVD,RTD"
 },
 {
   data: 14461,
   value: "SPORTS DRK,COCA-COLA,POWERADE,LEMON-LIME FLAV,RTD"
 },
 {
   data: 14462,
   value: "QUAKER OATS,PROPEL FITNESS H2O,FRUIT-FLAVORED,NON-CARBONATED"
 },
 {
   data: 14475,
   value: "TEA,RTD,ARIZONA ICED TEA,W/ LEMON FLAVOR"
 },
 {
   data: 14476,
   value: "TEA,RTD,LIPTON BRISK ICED TEA,W/ LEMON FLAVOR"
 },
 {
   data: 14530,
   value: "WHISKEY SOUR MIX,BTLD,W/ K&NA"
 },
 {
   data: 14531,
   value: "ALCOHOLIC BEV,WHISKEY SOUR,PREP FROM ITEM 14530"
 },
 {
   data: 14532,
   value: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 94 PROOF"
 },
 {
   data: 14533,
   value: "ALCOHOLIC BEV,DISTILLED,ALL 100 PROOF"
 },
 {
   data: 14534,
   value: "ALCOHOLIC BEV,LIQUEUR,COFFEE,63 PROOF"
 },
 {
   data: 14536,
   value: "ALCOHOLIC BEV,WINE,DSSRT,DRY"
 },
 {
   data: 14537,
   value: "CARBONATED BEV,LOCAL,OTHR THAN COLA OR PEP,W/ NA SAC,WO/ CAF"
 },
 {
   data: 14538,
   value: "COCOA MIX,W/ ASPT,LO CAL,PDR,W/ ADD CA P,WO/ ADD NA OR VIT A"
 },
 {
   data: 14541,
   value: "FRUIT PUNCH-FLAVOR DRK,PDR,WO/ NA,PREP W/H2O"
 },
 {
   data: 14542,
   value: "LEMONADE,FRZ CONC,PINK"
 },
 {
   data: 14543,
   value: "LEMONADE,FRZ CONC,PINK,PREP W/H2O"
 },
 {
   data: 14544,
   value: "TEA,BLACK,BREWED,PREP W/ DISTILLED H2O"
 },
 {
   data: 14545,
   value: "TEA,HERB,CHAMOMILE,BREWED"
 },
 {
   data: 14548,
   value: "TEA,INST,SWTND W/SUGAR,LEMON-FLAVORED,W/ VIT C,PDR"
 },
 {
   data: 14550,
   value: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 86 PROOF"
 },
 {
   data: 14551,
   value: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 90 PROOF"
 },
 {
   data: 14552,
   value: "CARBONATED BEV,CHOCOLATE-FLAVORED SODA"
 },
 {
   data: 14553,
   value: "WINE,NON-ALCOHOLIC"
 },
 {
   data: 14555,
   value: "WATER,BTLD,GENERIC"
 },
 {
   data: 14557,
   value: "CHOCOLATE-FLAVOR BEV MIX FOR MILK,PDR,W/ ADDED NUTR"
 },
 {
   data: 14558,
   value: "CHOCOLATE-FLAVOR BEV MIX W/ ADDED NUTR,PREP W/ WHL MILK"
 },
 {
   data: 14559,
   value: "WATER,BTLD,NON-CARBONATED,EVIAN"
 },
 {
   data: 14599,
   value: "SPORTS DRK,POWERADE ZERO ION4,CALORIE-FREE,ASSORTED FLAVORS"
 },
 {
   data: 14601,
   value: "TEA,RTD,UNSWTND,WENDY'S,FAST FD,WO/ ICE"
 },
 {
   data: 14602,
   value: "ALCOHOLIC BEV,WINE,TABLE,RED,MERLOT"
 },
 {
   data: 14604,
   value: "WATER,NON-CARBONATED,FRUIT FLAVORS,SWTND W/ LO CAL SWTNR"
 },
 {
   data: 14605,
   value: "WATER W/ ADDED VITAMINS & MINERALS,SWTND, FRUIT FLAVORS"
 },
 {
   data: 14607,
   value: "V8 SPLASH JUC DRINKS,DIET BERRY BLEND"
 },
 {
   data: 14608,
   value: "V8 SPLASH JUC DRINKS,DIET FRUIT MEDLEY"
 },
 {
   data: 14609,
   value: "V8 SPLASH,DIET STRAWBERRY KIWI"
 },
 {
   data: 14610,
   value: "V8 SPLASH,DIET TROPICAL BLEND"
 },
 {
   data: 14611,
   value: "V8 SPLASH JUC DRINKS,BERRY BLEND"
 },
 {
   data: 14612,
   value: "V8 SPLASH JUC DRINKS,FRUIT MEDLEY"
 },
 {
   data: 14613,
   value: "V8 SPLASH JUC,GUAVA PASSION FRUIT"
 },
 {
   data: 14614,
   value: "V8 SPLASH JUC DRINKS,MANGO PEACH"
 },
 {
   data: 14615,
   value: "V8 SPLASH JUC DRINKS,ORANGE PNAPPL"
 },
 {
   data: 14616,
   value: "V8 SPLASH JUC DRINKS,ORCHARD BLEND"
 },
 {
   data: 14617,
   value: "V8 SPLASH JUC DRINKS,STRAWBERRY BANANA"
 },
 {
   data: 14618,
   value: "V8 SPLASH JUC DRINKS,STRAWBERRY KIWI"
 },
 {
   data: 14619,
   value: "V8 SPLASH JUC DRINKS,TROPICAL BLEND"
 },
 {
   data: 14620,
   value: "V8 V. FUSION JUICES,PEACH MANGO"
 },
 {
   data: 14621,
   value: "V8 V. FUSION JUICES,STRAWBERRY BANANA"
 },
 {
   data: 14622,
   value: "V8 V. FUSION JUICES,TROPICAL"
 },
 {
   data: 14623,
   value: "V8 V. FUSION JUICES,ACAI BERRY"
 },
 {
   data: 14625,
   value: "ENERGY DRK,AMP"
 },
 {
   data: 14626,
   value: "ENERGY DRK,FULL THROTTLE"
 },
 {
   data: 14627,
   value: "ENERGY DRK,MONSTER"
 },
 {
   data: 14628,
   value: "ENERGY DRK,AMP,SUGAR FREE"
 },
 {
   data: 14629,
   value: "ENERGY DRK,ROCKSTAR"
 },
 {
   data: 14630,
   value: "ENERGY DRK,ROCKSTAR,SUGAR FREE"
 },
 {
   data: 14631,
   value: "HORCHATA,DRY MIX,UNPREP,VAR OF BRANDS,ALL W/ MORRO SEEDS"
 },
 {
   data: 14632,
   value: "MEAL SUPP DRK,NESTLE,SUPLIGEN,CND,PNUT FLAVOR"
 },
 {
   data: 14633,
   value: "VEGETABLE & FRUIT JUC DRK,RED CAL,ADDED VIT C"
 },
 {
   data: 14634,
   value: "READY-TO-DRINK RED FAT MILK,FLAV & SWTND,W/CA,VIT A & VIT D"
 },
 {
   data: 14635,
   value: "BEVERAGES,VEG & FRUIT JUC BLEND,W/ ADDED VITAMINS A,C,E"
 },
 {
   data: 14636,
   value: "BEVERAGES,FRUIT JUC DRK,RED SUGAR,W/ VITAMIN E ADDED"
 },
 {
   data: 14637,
   value: "WATER,W/ CORN SYRUP AND/OR SUGAR & LO CAL SWTNR,FRUIT FLAV"
 },
 {
   data: 14638,
   value: "BEVERAGE,HORCHATA,AS SERVED IN RESTAURANT"
 },
 {
   data: 14639,
   value: "RICE DRK,UNSWTND,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 14640,
   value: "ENERGY DRK,VAULT,CITRUS FLAVOR"
 },
 {
   data: 14641,
   value: "ENERGY DRK,VAULT ZERO,SUGAR-FREE,CITRUS FLAVOR"
 },
 {
   data: 14644,
   value: "SPORTS DRK,GATORADE G2,LO CAL"
 },
 {
   data: 14645,
   value: "FRUIT FLAV DRK,LESS THAN 3% JUC,NOT FORT W/ VIT C"
 },
 {
   data: 14646,
   value: "FRUIT FLAV DRK CONTAINING LESS THAN 3% FRUIT JUC,W/ HI VIT C"
 },
 {
   data: 14647,
   value: "FRUIT FLAV DRK,RED SUGAR,JUC,HI VIT C,ADDED CA"
 },
 {
   data: 14648,
   value: "FRUIT JUC DRK,OVER 3% FRUIT JUC,HI VIT C & ADDED THIAMIN"
 },
 {
   data: 14649,
   value: "HIBISCUS TEA"
 },
 {
   data: 14651,
   value: "FRUIT JUC DRK,GREATER THAN 3% JUC,HI VIT C"
 },
 {
   data: 14652,
   value: "FRUIT-FLAVORED DRK,DRY PDR,LO CAL,W/ HI VIT C"
 },
 {
   data: 15001,
   value: "ANCHOVY,EUROPEAN,RAW"
 },
 {
   data: 15002,
   value: "ANCHOVY,EUROPEAN,CND IN OIL,DRND SOL"
 },
 {
   data: 15003,
   value: "BASS,FRSH H2O,MXD SP,RAW"
 },
 {
   data: 15004,
   value: "BASS,STRIPED,RAW"
 },
 {
   data: 15005,
   value: "BLUEFISH,RAW"
 },
 {
   data: 15006,
   value: "BURBOT,RAW"
 },
 {
   data: 15007,
   value: "BUTTERFISH,RAW"
 },
 {
   data: 15008,
   value: "CARP,RAW"
 },
 {
   data: 15009,
   value: "CARP,COOKED,DRY HEAT"
 },
 {
   data: 15010,
   value: "CATFISH,CHANNEL,WILD,RAW"
 },
 {
   data: 15011,
   value: "CATFISH,CHANNEL,CKD,BREADED&FRIED"
 },
 {
   data: 15012,
   value: "CAVIAR,BLACK&RED,GRANULAR"
 },
 {
   data: 15013,
   value: "CISCO,RAW"
 },
 {
   data: 15014,
   value: "CISCO,SMOKED"
 },
 {
   data: 15015,
   value: "COD,ATLANTIC,RAW"
 },
 {
   data: 15016,
   value: "COD,ATLANTIC,CKD,DRY HEAT"
 },
 {
   data: 15017,
   value: "COD,ATLANTIC,CND,SOL&LIQ"
 },
 {
   data: 15018,
   value: "COD,ATLANTIC,DRIED&SALTED"
 },
 {
   data: 15019,
   value: "COD,PACIFIC,RAW"
 },
 {
   data: 15020,
   value: "CROAKER,ATLANTIC,RAW"
 },
 {
   data: 15021,
   value: "CROAKER,ATLANTIC,CKD,BREADED&FRIED"
 },
 {
   data: 15022,
   value: "CUSK,RAW"
 },
 {
   data: 15023,
   value: "DOLPHINFISH,RAW"
 },
 {
   data: 15024,
   value: "DRUM,FRESHWATER,RAW"
 },
 {
   data: 15025,
   value: "EEL,MIXED SPECIES,RAW"
 },
 {
   data: 15026,
   value: "EEL,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15027,
   value: "FISH PORTIONS&STKS,FRZ,PREHTD"
 },
 {
   data: 15028,
   value: "FLATFISH (FLOUNDER&SOLE SP),RAW"
 },
 {
   data: 15029,
   value: "FLATFISH (FLOUNDER&SOLE SP),CKD,DRY HEAT"
 },
 {
   data: 15030,
   value: "GEFILTEFISH,COMM,SWT RECIPE"
 },
 {
   data: 15031,
   value: "GROUPER,MIXED SPECIES,RAW"
 },
 {
   data: 15032,
   value: "GROUPER,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15033,
   value: "HADDOCK,RAW"
 },
 {
   data: 15034,
   value: "HADDOCK,COOKED,DRY HEAT"
 },
 {
   data: 15035,
   value: "HADDOCK,SMOKED"
 },
 {
   data: 15036,
   value: "HALIBUT,ATLANTIC&PACIFIC,RAW"
 },
 {
   data: 15037,
   value: "HALIBUT,ATLANTIC&PACIFIC,CKD,DRY HEAT"
 },
 {
   data: 15038,
   value: "HALIBUT,GREENLAND,RAW"
 },
 {
   data: 15039,
   value: "HERRING,ATLANTIC,RAW"
 },
 {
   data: 15040,
   value: "HERRING,ATLANTIC,CKD,DRY HEAT"
 },
 {
   data: 15041,
   value: "HERRING,ATLANTIC,PICKLED"
 },
 {
   data: 15042,
   value: "HERRING,ATLANTIC,KIPPERED"
 },
 {
   data: 15043,
   value: "HERRING,PACIFIC,RAW"
 },
 {
   data: 15044,
   value: "LING,RAW"
 },
 {
   data: 15045,
   value: "LINGCOD,RAW"
 },
 {
   data: 15046,
   value: "MACKEREL,ATLANTIC,RAW"
 },
 {
   data: 15047,
   value: "MACKEREL,ATLANTIC,CKD,DRY HEAT"
 },
 {
   data: 15048,
   value: "MACKEREL,JACK,CND,DRND SOL"
 },
 {
   data: 15049,
   value: "MACKEREL,KING,RAW"
 },
 {
   data: 15050,
   value: "MACKEREL,PACIFIC&JACK,MXD SP,RAW"
 },
 {
   data: 15051,
   value: "MACKEREL,SPANISH,RAW"
 },
 {
   data: 15052,
   value: "MACKEREL,SPANISH,CKD,DRY HEAT"
 },
 {
   data: 15053,
   value: "MILKFISH,RAW"
 },
 {
   data: 15054,
   value: "MONKFISH,RAW"
 },
 {
   data: 15055,
   value: "MULLET,STRIPED,RAW"
 },
 {
   data: 15056,
   value: "MULLET,STRIPED,CKD,DRY HEAT"
 },
 {
   data: 15057,
   value: "OCEAN PERCH,ATLANTIC,RAW"
 },
 {
   data: 15058,
   value: "OCEAN PERCH,ATLANTIC,CKD,DRY HEAT"
 },
 {
   data: 15059,
   value: "POUT,OCEAN,RAW"
 },
 {
   data: 15060,
   value: "PERCH,MIXED SPECIES,RAW"
 },
 {
   data: 15061,
   value: "PERCH,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15062,
   value: "PIKE,NORTHERN,RAW"
 },
 {
   data: 15063,
   value: "PIKE,NORTHERN,CKD,DRY HEAT"
 },
 {
   data: 15064,
   value: "PIKE,WALLEYE,RAW"
 },
 {
   data: 15065,
   value: "POLLOCK,ATLANTIC,RAW"
 },
 {
   data: 15066,
   value: "FISH,POLLOCK,ALASKA,RAW"
 },
 {
   data: 15067,
   value: "FISH,POLLOCK,ALASKA,CKD,DRY HEAT"
 },
 {
   data: 15068,
   value: "POMPANO,FLORIDA,RAW"
 },
 {
   data: 15069,
   value: "POMPANO,FLORIDA,CKD,DRY HEAT"
 },
 {
   data: 15070,
   value: "ROCKFISH,PACIFIC,MXD SP,RAW"
 },
 {
   data: 15071,
   value: "ROCKFISH,PACIFIC,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15072,
   value: "ROE,MIXED SPECIES,RAW"
 },
 {
   data: 15073,
   value: "ROUGHY,ORANGE,RAW"
 },
 {
   data: 15074,
   value: "SABLEFISH,RAW"
 },
 {
   data: 15075,
   value: "SABLEFISH,SMOKED"
 },
 {
   data: 15076,
   value: "SALMON,ATLANTIC,WILD,RAW"
 },
 {
   data: 15077,
   value: "SALMON,CHINOOK,SMOKED"
 },
 {
   data: 15078,
   value: "SALMON,CHINOOK,RAW"
 },
 {
   data: 15079,
   value: "SALMON,CHUM,RAW"
 },
 {
   data: 15080,
   value: "FISH,SALMON,CHUM,CND,DRND SOL W/ BONE"
 },
 {
   data: 15081,
   value: "SALMON,COHO,WILD,RAW"
 },
 {
   data: 15082,
   value: "SALMON,COHO,WILD,CKD,MOIST HEAT"
 },
 {
   data: 15083,
   value: "SALMON,PINK,RAW"
 },
 {
   data: 15084,
   value: "FISH,SALMON,PINK,CND,TOTAL CAN CONTENTS"
 },
 {
   data: 15085,
   value: "SALMON,SOCKEYE,RAW"
 },
 {
   data: 15086,
   value: "SALMON,SOCKEYE,CKD,DRY HEAT"
 },
 {
   data: 15087,
   value: "FISH,SALMON,SOCKEYE,CND,DRND SOL"
 },
 {
   data: 15088,
   value: "SARDINE,ATLANTIC,CND IN OIL,DRND SOL W/BONE"
 },
 {
   data: 15089,
   value: "SARDINE,PACIFIC,CND IN TOMATO SAU,DRND SOL W/BONE"
 },
 {
   data: 15090,
   value: "SCUP,RAW"
 },
 {
   data: 15091,
   value: "SEA BASS,MXD SP,RAW"
 },
 {
   data: 15092,
   value: "SEA BASS,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15093,
   value: "SEATROUT,MXD SP,RAW"
 },
 {
   data: 15094,
   value: "SHAD,AMERICAN,RAW"
 },
 {
   data: 15095,
   value: "SHARK,MIXED SPECIES,RAW"
 },
 {
   data: 15096,
   value: "SHARK,MXD SP,CKD,BATTER-DIPPED&FRIED"
 },
 {
   data: 15097,
   value: "SHEEPSHEAD,RAW"
 },
 {
   data: 15098,
   value: "SHEEPSHEAD,CKD,DRY HEAT"
 },
 {
   data: 15099,
   value: "SMELT,RAINBOW,RAW"
 },
 {
   data: 15100,
   value: "SMELT,RAINBOW,CKD,DRY HEAT"
 },
 {
   data: 15101,
   value: "SNAPPER,MIXED SPECIES,RAW"
 },
 {
   data: 15102,
   value: "SNAPPER,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15103,
   value: "SPOT,RAW"
 },
 {
   data: 15104,
   value: "STURGEON,MXD SP,RAW"
 },
 {
   data: 15105,
   value: "STURGEON,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15106,
   value: "STURGEON,MXD SP,SMOKED"
 },
 {
   data: 15107,
   value: "SUCKER,WHITE,RAW"
 },
 {
   data: 15108,
   value: "SUNFISH,PUMPKIN SEED,RAW"
 },
 {
   data: 15109,
   value: "SURIMI"
 },
 {
   data: 15110,
   value: "SWORDFISH,RAW"
 },
 {
   data: 15111,
   value: "SWORDFISH,COOKED,DRY HEAT"
 },
 {
   data: 15112,
   value: "TILEFISH,RAW"
 },
 {
   data: 15113,
   value: "TILEFISH,COOKED,DRY HEAT"
 },
 {
   data: 15114,
   value: "TROUT,MIXED SPECIES,RAW"
 },
 {
   data: 15115,
   value: "TROUT,RAINBOW,WILD,RAW"
 },
 {
   data: 15116,
   value: "TROUT,RAINBOW,WILD,CKD,DRY HEAT"
 },
 {
   data: 15117,
   value: "TUNA,FRESH,BLUEFIN,RAW"
 },
 {
   data: 15118,
   value: "TUNA,FRSH,BLUEFIN,CKD,DRY HEAT"
 },
 {
   data: 15119,
   value: "TUNA,LT,CND IN OIL,DRND SOL"
 },
 {
   data: 15121,
   value: "FISH,TUNA,LT,CND IN H2O,DRND SOL"
 },
 {
   data: 15123,
   value: "TUNA,FRESH,SKIPJACK,RAW"
 },
 {
   data: 15124,
   value: "TUNA,WHITE,CND IN OIL,DRND SOL"
 },
 {
   data: 15126,
   value: "TUNA,WHITE,CND IN H2O,DRND SOL"
 },
 {
   data: 15127,
   value: "TUNA,FRESH,YELLOWFIN,RAW"
 },
 {
   data: 15128,
   value: "TUNA SALAD"
 },
 {
   data: 15129,
   value: "TURBOT,EUROPEAN,RAW"
 },
 {
   data: 15130,
   value: "WHITEFISH,MXD SP,RAW"
 },
 {
   data: 15131,
   value: "WHITEFISH,MXD SP,SMOKED"
 },
 {
   data: 15132,
   value: "WHITING,MIXED SPECIES,RAW"
 },
 {
   data: 15133,
   value: "WHITING,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15134,
   value: "WOLFFISH,ATLANTIC,RAW"
 },
 {
   data: 15135,
   value: "YELLOWTAIL,MXD SP,RAW"
 },
 {
   data: 15136,
   value: "CRAB,ALASKA KING,RAW"
 },
 {
   data: 15137,
   value: "CRAB,ALASKA KING,CKD,MOIST HEAT"
 },
 {
   data: 15138,
   value: "CRAB,ALASKA KING,IMITN,MADE FROM SURIMI"
 },
 {
   data: 15139,
   value: "CRAB,BLUE,RAW"
 },
 {
   data: 15140,
   value: "CRAB,BLUE,CKD,MOIST HEAT"
 },
 {
   data: 15141,
   value: "CRAB,BLUE,CANNED"
 },
 {
   data: 15142,
   value: "CRAB,BLUE,CRAB CAKES"
 },
 {
   data: 15143,
   value: "CRAB,DUNGENESS,RAW"
 },
 {
   data: 15144,
   value: "CRAB,QUEEN,RAW"
 },
 {
   data: 15145,
   value: "CRAYFISH,MXD SP,WILD,RAW"
 },
 {
   data: 15146,
   value: "CRAYFISH,MXD SP,WILD,CKD,MOIST HEAT"
 },
 {
   data: 15147,
   value: "LOBSTER,NORTHERN,RAW"
 },
 {
   data: 15148,
   value: "LOBSTER,NORTHERN,CKD,MOIST HEAT"
 },
 {
   data: 15149,
   value: "SHRIMP,MIXED SPECIES,RAW"
 },
 {
   data: 15150,
   value: "SHRIMP,MXD SP,CKD,BREADED&FRIED"
 },
 {
   data: 15151,
   value: "SHRIMP,MXD SP,CKD,MOIST HEAT"
 },
 {
   data: 15152,
   value: "SHRIMP,MXD SP,CND"
 },
 {
   data: 15153,
   value: "SHRIMP,MXD SP,IMITN,MADE FROM SURIMI"
 },
 {
   data: 15154,
   value: "SPINY LOBSTER,MXD SP,RAW"
 },
 {
   data: 15155,
   value: "ABALONE,MIXED SPECIES,RAW"
 },
 {
   data: 15156,
   value: "ABALONE,MXD SP,CKD,FRIED"
 },
 {
   data: 15157,
   value: "CLAM,MIXED SPECIES,RAW"
 },
 {
   data: 15158,
   value: "CLAM,MXD SP,CKD,BREADED&FRIED"
 },
 {
   data: 15159,
   value: "CLAM,MXD SP,CKD,MOIST HEAT"
 },
 {
   data: 15160,
   value: "CLAM,MXD SP,CND,DRND SOL"
 },
 {
   data: 15162,
   value: "CLAM,MXD SP,CND,LIQ"
 },
 {
   data: 15163,
   value: "CUTTLEFISH,MXD SP,RAW"
 },
 {
   data: 15164,
   value: "MUSSEL,BLUE,RAW"
 },
 {
   data: 15165,
   value: "MUSSEL,BLUE,CKD,MOIST HEAT"
 },
 {
   data: 15166,
   value: "OCTOPUS,COMMON,RAW"
 },
 {
   data: 15167,
   value: "OYSTER,EASTERN,WILD,RAW"
 },
 {
   data: 15168,
   value: "OYSTER,EASTERN,CKD,BREADED&FRIED"
 },
 {
   data: 15169,
   value: "OYSTER,EASTERN,WILD,CKD,MOIST HEAT"
 },
 {
   data: 15170,
   value: "OYSTER,EASTERN,CANNED"
 },
 {
   data: 15171,
   value: "OYSTER,PACIFIC,RAW"
 },
 {
   data: 15172,
   value: "SCALLOP,MIXED SPECIES,RAW"
 },
 {
   data: 15173,
   value: "SCALLOP,MXD SP,CKD,BREADED&FRIED"
 },
 {
   data: 15174,
   value: "SCALLOP,MXD SP,IMITN,MADE FROM SURIMI"
 },
 {
   data: 15175,
   value: "SQUID,MIXED SPECIES,RAW"
 },
 {
   data: 15176,
   value: "SQUID,MXD SP,CKD,FRIED"
 },
 {
   data: 15177,
   value: "WHELK,UNSPECIFIED,RAW"
 },
 {
   data: 15178,
   value: "WHELK,UNSPEC,CKD,MOIST HEAT"
 },
 {
   data: 15179,
   value: "SALMON,CHINOOK,SMOKED,(LOX),REG"
 },
 {
   data: 15180,
   value: "SALMON,CHUM,CND,WO/SALT,DRND SOL W/BONE"
 },
 {
   data: 15181,
   value: "SALMON,PINK,CND,WO/SALT,SOL W/BONE&LIQ"
 },
 {
   data: 15182,
   value: "SALMON,SOCKEYE,CND,WO/SALT,DRND SOL W/BONE"
 },
 {
   data: 15183,
   value: "TUNA,LT,CND IN OIL,WO/SALT,DRND SOL"
 },
 {
   data: 15184,
   value: "TUNA,LT,CND IN H2O,WO/SALT,DRND SOL"
 },
 {
   data: 15185,
   value: "TUNA,WHITE,CND IN OIL,WO/SALT,DRND SOL"
 },
 {
   data: 15186,
   value: "TUNA,WHITE,CND IN H2O,WO/SALT,DRND SOL"
 },
 {
   data: 15187,
   value: "BASS,FRESHWATER,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15188,
   value: "BASS,STRIPED,CKD,DRY HEAT"
 },
 {
   data: 15189,
   value: "BLUEFISH,COOKED,DRY HEAT"
 },
 {
   data: 15190,
   value: "BURBOT,COOKED,DRY HEAT"
 },
 {
   data: 15191,
   value: "BUTTERFISH,CKD,DRY HEAT"
 },
 {
   data: 15192,
   value: "COD,PACIFIC,CKD,DRY HEAT"
 },
 {
   data: 15193,
   value: "CUSK,COOKED,DRY HEAT"
 },
 {
   data: 15194,
   value: "DOLPHINFISH,CKD,DRY HEAT"
 },
 {
   data: 15195,
   value: "DRUM,FRESHWATER,CKD,DRY HEAT"
 },
 {
   data: 15196,
   value: "HALIBUT,GREENLAND,CKD,DRY HEAT"
 },
 {
   data: 15197,
   value: "HERRING,PACIFIC,CKD,DRY HEAT"
 },
 {
   data: 15198,
   value: "LING,COOKED,DRY HEAT"
 },
 {
   data: 15199,
   value: "LINGCOD,COOKED,DRY HEAT"
 },
 {
   data: 15200,
   value: "MACKEREL,KING,CKD,DRY HEAT"
 },
 {
   data: 15201,
   value: "MACKEREL,PACIFIC&JACK,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15202,
   value: "MILKFISH,COOKED,DRY HEAT"
 },
 {
   data: 15203,
   value: "MONKFISH,COOKED,DRY HEAT"
 },
 {
   data: 15204,
   value: "PIKE,WALLEYE,CKD,DRY HEAT"
 },
 {
   data: 15205,
   value: "POLLOCK,ATLANTIC,CKD,DRY HEAT"
 },
 {
   data: 15206,
   value: "POUT,OCEAN,CKD,DRY HEAT"
 },
 {
   data: 15207,
   value: "ROE,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15208,
   value: "SABLEFISH,COOKED,DRY HEAT"
 },
 {
   data: 15209,
   value: "SALMON,ATLANTIC,WILD,CKD,DRY HEAT"
 },
 {
   data: 15210,
   value: "SALMON,CHINOOK,CKD,DRY HEAT"
 },
 {
   data: 15211,
   value: "SALMON,CHUM,CKD,DRY HEAT"
 },
 {
   data: 15212,
   value: "SALMON,PINK,CKD,DRY HEAT"
 },
 {
   data: 15213,
   value: "SCUP,COOKED,DRY HEAT"
 },
 {
   data: 15214,
   value: "SEATROUT,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15215,
   value: "SHAD,AMERICAN,CKD,DRY HEAT"
 },
 {
   data: 15216,
   value: "SPOT,COOKED,DRY HEAT"
 },
 {
   data: 15217,
   value: "SUCKER,WHITE,CKD,DRY HEAT"
 },
 {
   data: 15218,
   value: "SUNFISH,PUMPKIN SD,CKD,DRY HEAT"
 },
 {
   data: 15219,
   value: "TROUT,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15220,
   value: "TUNA,SKIPJACK,FRSH,CKD,DRY HEAT"
 },
 {
   data: 15221,
   value: "TUNA,YELLOWFIN,FRSH,CKD,DRY HEAT"
 },
 {
   data: 15222,
   value: "TURBOT,EUROPEAN,CKD,DRY HEAT"
 },
 {
   data: 15223,
   value: "WHITEFISH,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15224,
   value: "WOLFFISH,ATLANTIC,CKD,DRY HEAT"
 },
 {
   data: 15225,
   value: "YELLOWTAIL,MXD SP,CKD,DRY HEAT"
 },
 {
   data: 15226,
   value: "CRAB,DUNGENESS,CKD,MOIST HEAT"
 },
 {
   data: 15227,
   value: "CRAB,QUEEN,CKD,MOIST HEAT"
 },
 {
   data: 15228,
   value: "SPINY LOBSTER,MXD SP,CKD,MOIST HEAT"
 },
 {
   data: 15229,
   value: "CUTTLEFISH,MXD SP,CKD,MOIST HEAT"
 },
 {
   data: 15230,
   value: "OCTOPUS,COMMON,CKD,MOIST HEAT"
 },
 {
   data: 15231,
   value: "OYSTER,PACIFIC,CKD,MOIST HEAT"
 },
 {
   data: 15232,
   value: "ROUGHY,ORANGE,CKD,DRY HEAT"
 },
 {
   data: 15233,
   value: "CATFISH,CHANNEL,WILD,CKD,DRY HEAT"
 },
 {
   data: 15234,
   value: "CATFISH,CHANNEL,FARMED,RAW"
 },
 {
   data: 15235,
   value: "CATFISH,CHANNEL,FARMED,CKD,DRY HEAT"
 },
 {
   data: 15236,
   value: "SALMON,ATLANTIC,FARMED,RAW"
 },
 {
   data: 15237,
   value: "SALMON,ATLANTIC,FARMED,CKD,DRY HEAT"
 },
 {
   data: 15238,
   value: "SALMON,COHO,FARMED,RAW"
 },
 {
   data: 15239,
   value: "SALMON,COHO,FARMED,CKD,DRY HEAT"
 },
 {
   data: 15240,
   value: "TROUT,RAINBOW,FARMED,RAW"
 },
 {
   data: 15241,
   value: "TROUT,RAINBOW,FARMED,CKD,DRY HEAT"
 },
 {
   data: 15242,
   value: "CRAYFISH,MXD SP,FARMED,RAW"
 },
 {
   data: 15243,
   value: "CRAYFISH,MXD SP,FARMED,CKD,MOIST HEAT"
 },
 {
   data: 15244,
   value: "OYSTER,EASTERN,WILD,CKD,DRY HEAT"
 },
 {
   data: 15245,
   value: "OYSTER,EASTERN,FARMED,RAW"
 },
 {
   data: 15246,
   value: "OYSTER,EASTERN,FARMED,CKD,DRY HEAT"
 },
 {
   data: 15247,
   value: "SALMON,COHO,WILD,CKD,DRY HEAT"
 },
 {
   data: 15250,
   value: "CONCH,BAKED OR BROILED"
 },
 {
   data: 15251,
   value: "USDA COMMODITY,SALMON NUGGETS,BREADED,FRZ,HTD"
 },
 {
   data: 15252,
   value: "USDA COMMODITY,SALMON NUGGETS,CKD AS PURCHASED,UNHTD"
 },
 {
   data: 15253,
   value: "SALMON,SOCKEYE,CND,TOTAL CAN CONTENTS"
 },
 {
   data: 15260,
   value: "FISH,SALMON,PINK,CND,DRND SOL"
 },
 {
   data: 15261,
   value: "FISH,TILAPIA,RAW"
 },
 {
   data: 15262,
   value: "FISH,TILAPIA,CKD,DRY HEAT"
 },
 {
   data: 15264,
   value: "SALMON,SOCKEYE,CND,DRND SOL,WO/ SKN & BONES"
 },
 {
   data: 15265,
   value: "FISH,SALMON,PINK,CND,DRND SOL,WO/ SKN & BONES"
 },
 {
   data: 15266,
   value: "FISH,POLLOCK,ALASKA,UNTREATED,RAW"
 },
 {
   data: 15267,
   value: "FISH,POLLOCK,ALASKA,UNTREATED,CKD"
 },
 {
   data: 15268,
   value: "FISH,COD,PACIFIC,UNTREATED,RAW"
 },
 {
   data: 15269,
   value: "FISH,COD,PACIFIC,UNTREATED,CKD"
 },
 {
   data: 15270,
   value: "CRUSTACEANS,SHRIMP,UNTREATED,RAW"
 },
 {
   data: 15271,
   value: "CRUSTACEANS,SHRIMP,UNTREATED,CKD"
 },
 {
   data: 15272,
   value: "FISH,SALMON,SOCKEYE,UNTREATED,RAW"
 },
 {
   data: 15273,
   value: "FISH,SALMON,SOCKEYE,UNTREATED,CKD"
 },
 {
   data: 16001,
   value: "BEANS,ADZUKI,MATURE SEEDS,RAW"
 },
 {
   data: 16002,
   value: "BEANS,ADZUKI,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16003,
   value: "BEANS,ADZUKI,MATURE SEEDS,CND,SWTND"
 },
 {
   data: 16004,
   value: "BEANS,ADZUKI,YOKAN,MATURE SEEDS"
 },
 {
   data: 16005,
   value: "BEANS,BAKED,HOME PREPARED"
 },
 {
   data: 16006,
   value: "BEANS,BKD,CND,PLN OR VEGETARIAN"
 },
 {
   data: 16007,
   value: "BEANS,BKD,CND,W/BF"
 },
 {
   data: 16008,
   value: "BEANS,BKD,CND,W/FRANKS"
 },
 {
   data: 16009,
   value: "BEANS,BKD,CND,W/PORK"
 },
 {
   data: 16010,
   value: "BEANS,BKD,CND,W/PORK&SWT SAU"
 },
 {
   data: 16011,
   value: "BEANS,BKD,CND,W/PORK&TOMATO SAU"
 },
 {
   data: 16014,
   value: "BEANS,BLACK,MATURE SEEDS,RAW"
 },
 {
   data: 16015,
   value: "BEANS,BLACK,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16016,
   value: "BEANS,BLACK TURTLE,MATURE SEEDS,RAW"
 },
 {
   data: 16017,
   value: "BEANS,BLACK TURTLE,MATURE SEEDS,CKD,BLD,WO/ SALT"
 },
 {
   data: 16018,
   value: "BEANS,BLACK TURTLE,MATURE SEEDS,CND"
 },
 {
   data: 16019,
   value: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,RAW"
 },
 {
   data: 16020,
   value: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16021,
   value: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,CND"
 },
 {
   data: 16022,
   value: "BEANS,FRENCH,MATURE SEEDS,RAW"
 },
 {
   data: 16023,
   value: "BEANS,FRENCH,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16024,
   value: "BEANS,GREAT NORTHERN,MATURE SEEDS,RAW"
 },
 {
   data: 16025,
   value: "BEANS,GREAT NORTHERN,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16026,
   value: "BEANS,GREAT NORTHERN,MATURE SEEDS,CND"
 },
 {
   data: 16027,
   value: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,RAW"
 },
 {
   data: 16028,
   value: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16029,
   value: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,CND"
 },
 {
   data: 16030,
   value: "BEANS,KIDNEY,CALIFORNIA RED,MATURE SEEDS,RAW"
 },
 {
   data: 16031,
   value: "BEANS,KIDNEY,CALIFORNIA RED,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16032,
   value: "BEANS,KIDNEY,RED,MATURE SEEDS,RAW"
 },
 {
   data: 16033,
   value: "BEANS,KIDNEY,RED,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16034,
   value: "BEANS,KIDNEY,RED,MATURE SEEDS,CND,SOL & LIQUIDS"
 },
 {
   data: 16035,
   value: "BEANS,KIDNEY,ROYAL RED,MATURE SEEDS,RAW"
 },
 {
   data: 16036,
   value: "BEANS,KIDNEY,ROYAL RED,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16037,
   value: "BEANS,NAVY,MATURE SEEDS,RAW"
 },
 {
   data: 16038,
   value: "BEANS,NAVY,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16039,
   value: "BEANS,NAVY,MATURE SEEDS,CND"
 },
 {
   data: 16040,
   value: "BEANS,PINK,MATURE SEEDS,RAW"
 },
 {
   data: 16041,
   value: "BEANS,PINK,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16042,
   value: "BEANS,PINTO,MATURE SEEDS,RAW"
 },
 {
   data: 16043,
   value: "BEANS,PINTO,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16044,
   value: "BEANS,PINTO,MATURE SEEDS,CND,SOL & LIQUIDS"
 },
 {
   data: 16045,
   value: "BEANS,SML WHITE,MATURE SEEDS,RAW"
 },
 {
   data: 16046,
   value: "BEANS,SML WHITE,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16047,
   value: "BEANS,YEL,MATURE SEEDS,RAW"
 },
 {
   data: 16048,
   value: "BEANS,YEL,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16049,
   value: "BEANS,WHITE,MATURE SEEDS,RAW"
 },
 {
   data: 16050,
   value: "BEANS,WHITE,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16051,
   value: "BEANS,WHITE,MATURE SEEDS,CND"
 },
 {
   data: 16052,
   value: "BROADBEANS (FAVA BEANS),MATURE SEEDS,RAW"
 },
 {
   data: 16053,
   value: "BROADBEANS (FAVA BNS),MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16054,
   value: "BROADBEANS (FAVA BNS),MATURE SEEDS,CND"
 },
 {
   data: 16055,
   value: "CAROB FLOUR"
 },
 {
   data: 16056,
   value: "CHICKPEAS (GARBANZO BNS,BENGAL GM),MATURE SEEDS,RAW"
 },
 {
   data: 16057,
   value: "CHICKPEAS ,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16058,
   value: "CHICKPEAS (GARBANZO BNS,BENGAL GRAM),MATURE SDS,CND,SOL&LIQ"
 },
 {
   data: 16059,
   value: "CHILI WITH BEANS,CANNED"
 },
 {
   data: 16060,
   value: "COWPEAS,CATJANG,MATURE SEEDS,RAW"
 },
 {
   data: 16061,
   value: "COWPEAS,CATJANG,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16062,
   value: "COWPEAS,COMMON (BLACKEYES,CROWDER,SOUTHERN),MTRE SEEDS,RAW"
 },
 {
   data: 16063,
   value: "COWPEAS,COMMON (BLKEYES,CRWDR,STHRN),MTURE,CKD,BLD,WO/SALT"
 },
 {
   data: 16064,
   value: "COWPEAS,COMMON,MATURE SEEDS,CND,PLN"
 },
 {
   data: 16065,
   value: "COWPEAS,COMMON,MATURE SEEDS,CND W/PORK"
 },
 {
   data: 16067,
   value: "HYACINTH BNS,MATURE SEEDS,RAW"
 },
 {
   data: 16068,
   value: "HYACINTH BNS,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16069,
   value: "LENTILS,RAW"
 },
 {
   data: 16070,
   value: "LENTILS,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16071,
   value: "LIMA BNS,LRG,MATURE SEEDS,RAW"
 },
 {
   data: 16072,
   value: "LIMA BNS,LRG,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16073,
   value: "LIMA BNS,LRG,MATURE SEEDS,CND"
 },
 {
   data: 16074,
   value: "LIMA BNS,THIN SEEDED (BABY),MATURE SEEDS,RAW"
 },
 {
   data: 16075,
   value: "LIMA BNS,THIN SEEDED (BABY),MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16076,
   value: "LUPINS,MATURE SEEDS,RAW"
 },
 {
   data: 16077,
   value: "LUPINS,MATURE SEEDS,CKD,BLD,WO/ SALT"
 },
 {
   data: 16078,
   value: "MOTHBEANS,MATURE SEEDS,RAW"
 },
 {
   data: 16079,
   value: "MOTHBEANS,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16080,
   value: "MUNG BNS,MATURE SEEDS,RAW"
 },
 {
   data: 16081,
   value: "MUNG BNS,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16082,
   value: "NOODLES,CHINESE,CELLOPHANE OR LONG RICE (MUNG BNS),DEHYD"
 },
 {
   data: 16083,
   value: "MUNGO BNS,MATURE SEEDS,RAW"
 },
 {
   data: 16084,
   value: "MUNGO BNS,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16085,
   value: "PEAS,SPLIT,MATURE SEEDS,RAW"
 },
 {
   data: 16086,
   value: "PEAS,SPLIT,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16087,
   value: "PEANUTS,ALL TYPES,RAW"
 },
 {
   data: 16088,
   value: "PEANUTS,ALL TYPES,CKD,BLD,W/SALT"
 },
 {
   data: 16089,
   value: "PEANUTS,ALL TYPES,OIL-ROASTED,W/SALT"
 },
 {
   data: 16090,
   value: "PEANUTS,ALL TYPES,DRY-ROASTED,W/SALT"
 },
 {
   data: 16091,
   value: "PEANUTS,SPANISH,RAW"
 },
 {
   data: 16092,
   value: "PEANUTS,SPANISH,OIL-ROASTED,W/SALT"
 },
 {
   data: 16093,
   value: "PEANUTS,VALENCIA,RAW"
 },
 {
   data: 16094,
   value: "PEANUTS,VALENCIA,OIL-ROASTED,W/SALT"
 },
 {
   data: 16095,
   value: "PEANUTS,VIRGINIA,RAW"
 },
 {
   data: 16096,
   value: "PEANUTS,VIRGINIA,OIL-ROASTED,W/SALT"
 },
 {
   data: 16097,
   value: "PEANUT BUTTER,CHUNK STYLE,W/SALT"
 },
 {
   data: 16098,
   value: "PEANUT BUTTER,SMOOTH STYLE,W/ SALT"
 },
 {
   data: 16099,
   value: "PEANUT FLOUR,DEFATTED"
 },
 {
   data: 16100,
   value: "PEANUT FLOUR,LOW FAT"
 },
 {
   data: 16101,
   value: "PIGEON PEAS (RED GM),MATURE SEEDS,RAW"
 },
 {
   data: 16102,
   value: "PIGEON PEAS (RED GM),MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16103,
   value: "REFRIED BNS,CND,TRADITIONAL STYLE (INCLUDES USDA COMMODITY)"
 },
 {
   data: 16104,
   value: "BACON,MEATLESS"
 },
 {
   data: 16106,
   value: "MEAT EXTENDER"
 },
 {
   data: 16107,
   value: "SAUSAGE,MEATLESS"
 },
 {
   data: 16108,
   value: "SOYBEANS,MATURE SEEDS,RAW"
 },
 {
   data: 16109,
   value: "SOYBEANS,MATURE CKD,BLD,WO/SALT"
 },
 {
   data: 16110,
   value: "SOYBEANS,MATURE SEEDS,RSTD,SALTED"
 },
 {
   data: 16111,
   value: "SOYBEANS,MATURE SEEDS,DRY RSTD"
 },
 {
   data: 16112,
   value: "MISO"
 },
 {
   data: 16113,
   value: "NATTO"
 },
 {
   data: 16114,
   value: "TEMPEH"
 },
 {
   data: 16115,
   value: "SOY FLOUR,FULL-FAT,RAW"
 },
 {
   data: 16116,
   value: "SOY FLR,FULL-FAT,RSTD"
 },
 {
   data: 16117,
   value: "SOY FLOUR,DEFATTED"
 },
 {
   data: 16118,
   value: "SOY FLOUR,LOW-FAT"
 },
 {
   data: 16119,
   value: "SOY MEAL,DEFATTED,RAW"
 },
 {
   data: 16120,
   value: "SOYMILK,ORIGINAL & VANILLA,UNFORTIFIED"
 },
 {
   data: 16121,
   value: "SOY PROT CONC,PRODUCED BY ALCOHOL EXTRACTION"
 },
 {
   data: 16122,
   value: "SOY PROTEIN ISOLATE"
 },
 {
   data: 16123,
   value: "SOY SAU MADE FROM SOY&WHEAT (SHOYU)"
 },
 {
   data: 16124,
   value: "SOY SAU MADE FROM SOY (TAMARI)"
 },
 {
   data: 16125,
   value: "SOY SAU MADE FROM HYDROLYZED VEG PROT"
 },
 {
   data: 16126,
   value: "TOFU,FIRM,PREP W/CA SULFATE&MAGNESIUM CHLORIDE (NIGARI)"
 },
 {
   data: 16127,
   value: "TOFU,SOFT,PREP W/CA SULFATE&MAGNESIUM CHLORIDE (NIGARI)"
 },
 {
   data: 16128,
   value: "TOFU,DRIED-FROZEN (KOYADOFU)"
 },
 {
   data: 16129,
   value: "TOFU,FRIED"
 },
 {
   data: 16130,
   value: "OKARA"
 },
 {
   data: 16132,
   value: "TOFU,SALTED&FERMENTED (FUYU)"
 },
 {
   data: 16133,
   value: "YARDLONG BNS,MATURE SEEDS,RAW"
 },
 {
   data: 16134,
   value: "YARDLONG BNS,MATURE SEEDS,CKD,BLD,WO/SALT"
 },
 {
   data: 16135,
   value: "WINGED BNS,MATURE SEEDS,RAW"
 },
 {
   data: 16136,
   value: "WINGED BNS,MATURE SEEDS,CKD,BLD,WO/ SALT"
 },
 {
   data: 16137,
   value: "HUMMUS,HOME PREP"
 },
 {
   data: 16138,
   value: "FALAFEL,HOME-PREPARED"
 },
 {
   data: 16139,
   value: "SOYMILK,ORIGINAL & VANILLA,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16144,
   value: "LENTILS,PINK,RAW"
 },
 {
   data: 16145,
   value: "BEANS,RED,KIDNEY,MATURE SEEDS,CND,DRND SOL"
 },
 {
   data: 16146,
   value: "BEANS,PINTO,CND,DRND SOL"
 },
 {
   data: 16147,
   value: "VEGGIE BURGERS OR SOYBURGERS  UNPREP"
 },
 {
   data: 16149,
   value: "PEANUT SPRD,RED SUGAR"
 },
 {
   data: 16150,
   value: "PEANUT BUTTER,SMOOTH,RED FAT"
 },
 {
   data: 16152,
   value: "ENSURE FIBER W/ FOS,LIQ"
 },
 {
   data: 16155,
   value: "PEANUT BUTTER,SMOOTH,VIT & MINERAL FORT"
 },
 {
   data: 16156,
   value: "PEANUT BUTTER,CHUNKY,VITAMIN&MINERAL FORT"
 },
 {
   data: 16157,
   value: "CHICKPEA FLOUR (BESAN)"
 },
 {
   data: 16158,
   value: "HUMMUS,COMMERCIAL"
 },
 {
   data: 16159,
   value: "TOFU,EX FIRM,PREP W/NIGARI"
 },
 {
   data: 16160,
   value: "TOFU,HARD,PREP W/NIGARI"
 },
 {
   data: 16161,
   value: "MORI-NU,TOFU,SILKEN,SOFT"
 },
 {
   data: 16162,
   value: "MORI-NU,TOFU,SILKEN,FIRM"
 },
 {
   data: 16163,
   value: "MORI-NU,TOFU,SILKEN,EX FIRM"
 },
 {
   data: 16164,
   value: "MORI-NU,TOFU,SILKEN,LITE FIRM"
 },
 {
   data: 16165,
   value: "MORI-NU,TOFU,SILKEN,LITE EX FIRM"
 },
 {
   data: 16166,
   value: "SOYMILK,CHOC,UNFORTIFIED"
 },
 {
   data: 16167,
   value: "USDA CMDTY,PNUT BUTTER,SMOOTH"
 },
 {
   data: 16168,
   value: "SOYMILK,CHOC,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16171,
   value: "REFRIED BNS,CND,VEGETARIAN"
 },
 {
   data: 16172,
   value: "REFRIED BNS,CND,FAT-FREE"
 },
 {
   data: 16173,
   value: "FRIJOLES ROJOS VOLTEADOS (REFRIED BNS,RED,CANNED)"
 },
 {
   data: 16174,
   value: "TEMPEH,CKD"
 },
 {
   data: 16175,
   value: "SOY PROT ISOLATE,PROT TECHNOLOGIES INTERNATIONAL,SUPRO"
 },
 {
   data: 16176,
   value: "SOY PROT ISOLATE,PROT TECHNOLOGIES INTERNATIONAL,PROPLUS"
 },
 {
   data: 16200,
   value: "CAMPBELL'S BRN SUGAR&BACON FLAV BKD BNS"
 },
 {
   data: 16201,
   value: "CAMPBELL'S PORK & BNS"
 },
 {
   data: 16202,
   value: "PACE,TRADITIONAL REFRIED BNS"
 },
 {
   data: 16203,
   value: "PACE,SALSA REFRIED BNS"
 },
 {
   data: 16204,
   value: "PACE,SPICY JALAPENO REFRIED BNS"
 },
 {
   data: 16210,
   value: "VITASOY USA,NASOYA LITE FIRM TOFU"
 },
 {
   data: 16211,
   value: "VITASOY USA,ORGANIC NASOYA SUPER FIRM CUBED TOFU"
 },
 {
   data: 16212,
   value: "VITASOY USA,ORGANIC NASOYA EX FIRM TOFU"
 },
 {
   data: 16213,
   value: "VITASOY USA,ORGANIC NASOYA FIRM TOFU"
 },
 {
   data: 16214,
   value: "VITASOY USA  ORGANIC NASOYA SILKEN TOFU"
 },
 {
   data: 16215,
   value: "VITASOY USA,VITASOY ORGANIC CREAMY ORIGINAL SOYMILK"
 },
 {
   data: 16216,
   value: "VITASOY USA,VITASOY ORGANIC CLASSIC ORIGINAL SOYMILK"
 },
 {
   data: 16219,
   value: "VITASOY USA,VITASOY LT VANILLA SOYMILK"
 },
 {
   data: 16222,
   value: "SOYMILK (ALL FLAVORS),UNSWTND,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16223,
   value: "SOYMILK (ALL FLAVORS),ENHANCED"
 },
 {
   data: 16225,
   value: "SOYMILK,ORIGINAL & VANILLA,LT,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16227,
   value: "SOYMILK,CHOC & OTHER FLAVORS,LT,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16228,
   value: "SOYMILK,ORIGINAL & VANILLA,LT,UNSWTND,W/ ADDED CA,VIT A & D"
 },
 {
   data: 16229,
   value: "SOYMILK (ALL FLAVORS),LOWFAT,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16230,
   value: "SOYMILK (ALL FLAVORS),NONFAT,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16231,
   value: "SOYMILK,CHOC,NONFAT,W/ ADDED CA,VITAMINS A & D"
 },
 {
   data: 16235,
   value: "SILK PLN,SOYMILK"
 },
 {
   data: 16236,
   value: "SILK VANILLA,SOYMILK"
 },
 {
   data: 16237,
   value: "SILK CHOC,SOYMILK"
 },
 {
   data: 16238,
   value: "SILK LT PLN,SOYMILK"
 },
 {
   data: 16239,
   value: "SILK LT VANILLA,SOYMILK"
 },
 {
   data: 16240,
   value: "SILK LT CHOC,SOYMILK"
 },
 {
   data: 16241,
   value: "SILK PLUS OMEGA-3 DHA,SOYMILK"
 },
 {
   data: 16242,
   value: "SILK PLUS FOR BONE HEALTH,SOYMILK"
 },
 {
   data: 16243,
   value: "SILK PLUS FIBER,SOYMILK"
 },
 {
   data: 16244,
   value: "SILK UNSWTND,SOYMILK"
 },
 {
   data: 16245,
   value: "SILK VERY VANILLA,SOYMILK"
 },
 {
   data: 16246,
   value: "SILK NOG,SOYMILK"
 },
 {
   data: 16247,
   value: "SILK CHAI,SOYMILK"
 },
 {
   data: 16248,
   value: "SILK MOCHA,SOYMILK"
 },
 {
   data: 16249,
   value: "SILK COFFEE,SOYMILK"
 },
 {
   data: 16250,
   value: "SILK VANILLA SOY YOGURT (FAMILY SIZE)"
 },
 {
   data: 16251,
   value: "SILK VANILLA SOY YOGURT (SINGLE SERVING SIZE)"
 },
 {
   data: 16252,
   value: "SILK PLN SOY YOGURT"
 },
 {
   data: 16253,
   value: "SILK STRAWBERRY SOY YOGURT"
 },
 {
   data: 16254,
   value: "SILK RASPBERRY SOY YOGURT"
 },
 {
   data: 16255,
   value: "SILK PEACH SOY YOGURT"
 },
 {
   data: 16256,
   value: "SILK BLACK CHERRY SOY YOGURT"
 },
 {
   data: 16257,
   value: "SILK BLUEBERRY SOY YOGURT"
 },
 {
   data: 16258,
   value: "SILK KEY LIME SOY YOGURT"
 },
 {
   data: 16259,
   value: "SILK BANANA-STRAWBERRY SOY YOGURT"
 },
 {
   data: 16260,
   value: "SILK ORIGINAL CREAMER"
 },
 {
   data: 16261,
   value: "SILK FRENCH VANILLA CREAMER"
 },
 {
   data: 16262,
   value: "SILK HAZELNUT CREAMER"
 },
 {
   data: 16271,
   value: "VITASOY USA ORGANIC NASOYA,SOFT TOFU"
 },
 {
   data: 16272,
   value: "VITASOY USA NASOYA,LITE SILKEN TOFU"
 },
 {
   data: 16273,
   value: "VITASOY USA ORGANIC NASOYA,TOFU PLUS EX FIRM"
 },
 {
   data: 16274,
   value: "VITASOY USA ORGANIC NASOYA,TOFU PLUS FIRM"
 },
 {
   data: 16275,
   value: "VITASOY USA ORGANIC NASOYA SPROUTED,TOFU PLUS SUPER FIRM"
 },
 {
   data: 16276,
   value: "VITASOY USA AZUMAYA,EX FIRM TOFU"
 },
 {
   data: 16277,
   value: "VITASOY USA AZUMAYA,FIRM TOFU"
 },
 {
   data: 16278,
   value: "VITASOY USA AZUMAYA,SILKEN TOFU"
 },
 {
   data: 16279,
   value: "HOUSE FOODS PREMIUM SOFT TOFU"
 },
 {
   data: 16281,
   value: "HOUSE FOODS PREMIUM FIRM TOFU"
 },
 {
   data: 16302,
   value: "BEANS,ADZUKI,MATURE SD,CKD,BLD,W/SALT"
 },
 {
   data: 16315,
   value: "BEANS,BLACK,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16317,
   value: "BEANS,BLACK TURTLE,MATURE SEEDS,CKD,BLD,W/ SALT"
 },
 {
   data: 16320,
   value: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16323,
   value: "BEANS,FRENCH,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16325,
   value: "BEANS,GREAT NORTHERN,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16328,
   value: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16331,
   value: "BEANS,KIDNEY,CALIFORNIA RED,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16333,
   value: "BEANS,KIDNEY,RED,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16335,
   value: "BEANS,KIDNEY,RED,MATURE SEEDS,CND,DRND SOL,RINSED IN TAP H2O"
 },
 {
   data: 16336,
   value: "BEANS,KIDNEY,ROYAL RED,MATURE SEEDS,CKD,BLD W/SALT"
 },
 {
   data: 16338,
   value: "BEANS,NAVY,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16341,
   value: "BEANS,PINK,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16343,
   value: "BEANS,PINTO,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16345,
   value: "BEANS,PINTO,MATURE SEEDS,CND,DRND SOL,RINSED IN TAP H2O"
 },
 {
   data: 16346,
   value: "BEANS,SML WHITE,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16348,
   value: "BEANS,YEL,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16350,
   value: "BEANS,WHITE,MATURE SEEDS,CKD,BLD,W/ SALT"
 },
 {
   data: 16353,
   value: "BROADBEANS (FAVA BNS),MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16357,
   value: "CHICKPEAS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16358,
   value: "CHICKPEAS (GARBANZO BNS,BENGAL GRAM),MAT SEEDS,CND,DRND SOL"
 },
 {
   data: 16359,
   value: "CHICKPEAS (GARBANZO BNS,BENGAL GRAM),MAT SDS,CND,DRND,RNSD"
 },
 {
   data: 16361,
   value: "COWPEAS,CATJANG,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16363,
   value: "COWPEAS,COMMON,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16368,
   value: "HYACINTH BNS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16370,
   value: "LENTILS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16372,
   value: "LIMA BNS,LRG,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16375,
   value: "LIMA BNS,THIN SEEDED (BABY),MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16377,
   value: "LUPINS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16379,
   value: "MOTHBEANS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16381,
   value: "MUNG BNS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16384,
   value: "MUNGO BNS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16386,
   value: "PEAS,SPLIT,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16389,
   value: "PEANUTS,ALL TYPES,OIL-ROASTED,WO/ SALT"
 },
 {
   data: 16390,
   value: "PEANUTS,ALL TYPES,DRY-ROASTED,WO/SALT"
 },
 {
   data: 16392,
   value: "PEANUTS,SPANISH,OIL-ROASTED,WO/SALT"
 },
 {
   data: 16394,
   value: "PEANUTS,VALENCIA,OIL-ROASTED,WO/SALT"
 },
 {
   data: 16396,
   value: "PEANUTS,VIRGINIA,OIL-ROASTED,WO/SALT"
 },
 {
   data: 16397,
   value: "PEANUT BUTTER,CHUNK STYLE,WO/SALT"
 },
 {
   data: 16398,
   value: "PEANUT BUTTER,SMOOTH STYLE,WO/SALT"
 },
 {
   data: 16399,
   value: "PEANUT BUTTER W/ OMEGA-3,CREAMY"
 },
 {
   data: 16402,
   value: "PIGEON PEAS (RED GM),MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16409,
   value: "SOYBEANS,MATURE SEEDS,CKD,BLD,W/SALT"
 },
 {
   data: 16410,
   value: "SOYBEANS,MATURE SEEDS,RSTED,NO SALT ADDED"
 },
 {
   data: 16415,
   value: "SOY FLR,FULL-FAT,RAW,CRUDE PROT BASIS (N X 6.25)"
 },
 {
   data: 16416,
   value: "SOY FLR,FULL-FAT,RSTD,CRUDE PROT BASIS (N X 6.25)"
 },
 {
   data: 16417,
   value: "SOY FLR,DEFATTED,CRUDE PROT BASIS (N X 6.25)"
 },
 {
   data: 16418,
   value: "SOY FLR,LOW-FAT,CRUDE PROT BASIS (N x 6.25)"
 },
 {
   data: 16419,
   value: "SOY MEAL,DEFATTED,RAW,CRUDE PROT BASIS (N X 6.25)"
 },
 {
   data: 16420,
   value: "SOY PROT CONC,PRODUCED BY ACID WASH"
 },
 {
   data: 16421,
   value: "SOY PROT CONC,CRUDE PROT BASIS (N X 6.25),ACID WASH"
 },
 {
   data: 16422,
   value: "SOY PROT ISOLATE,K TYPE"
 },
 {
   data: 16423,
   value: "SOY PROT ISOLATE,K TYPE,CRUDE PROT BASIS"
 },
 {
   data: 16424,
   value: "SOY SAU MADE FROM SOY&WHEAT (SHOYU),LO NA"
 },
 {
   data: 16426,
   value: "TOFU,RAW,FIRM,PREP W/CA SULFATE"
 },
 {
   data: 16427,
   value: "TOFU,RAW,REG,PREP W/CA SULFATE"
 },
 {
   data: 16428,
   value: "TOFU,DRIED-FROZEN (KOYADOFU),PREP W/CA SULFATE"
 },
 {
   data: 16429,
   value: "TOFU,FRIED,PREP W/CA SULFATE"
 },
 {
   data: 16432,
   value: "TOFU,SALTED&FERMENTED (FUYU),PREP W/CA SULFATE"
 },
 {
   data: 16434,
   value: "YARDLONG BNS,MATURE SEEDS,CKD,BLD,W/ SALT"
 },
 {
   data: 16436,
   value: "WINGED BNS,MATURE SEEDS,CKD,BLD,W/ SALT"
 },
 {
   data: 16500,
   value: "LOMA LINDA LITTLE LINKS,CND,UNPREP"
 },
 {
   data: 16502,
   value: "LOMA LINDA LOFAT BIG FRANKS,CND,UNPREP"
 },
 {
   data: 16504,
   value: "LOMA LINDA TENDER ROUNDS W/ GRAVY,CND,UNPREP"
 },
 {
   data: 16505,
   value: "LOMA LINDA SWISS STAKE W/ GRAVY,CND,UNPREP"
 },
 {
   data: 16506,
   value: "LOMA LINDA VEGE-BURGER,CND,UNPREP"
 },
 {
   data: 16507,
   value: "LOMA LINDA REDI-BURGER,CND,UNPREP"
 },
 {
   data: 16508,
   value: "LOMA LINDA TENDER BITS,CND,UNPREP"
 },
 {
   data: 16509,
   value: "LOMA LINDA LINKETTS,CND,UNPREP"
 },
 {
   data: 16510,
   value: "WORTHINGTON CHILI,CND,UNPREP"
 },
 {
   data: 16511,
   value: "WORTHINGTON CHOPLETS,CND,UNPREP"
 },
 {
   data: 16512,
   value: "WORTHINGTON DICED CHIK,CND,UNPREP"
 },
 {
   data: 16513,
   value: "WORTHINGTON FRICHIK ORIGINAL,CND,UNPREP"
 },
 {
   data: 16514,
   value: "WORTHINGTON LOFAT FRI CHIK,CND,UNPREP"
 },
 {
   data: 16515,
   value: "WORTHINGTON LOFAT VEJA-LINKS,CND,UNPREP"
 },
 {
   data: 16516,
   value: "WORTHINGTON MULTIGRAIN CUTLETS,CND,UNPREP"
 },
 {
   data: 16517,
   value: "WORTHINGTON PRIME STAKES,CND,UNPREP"
 },
 {
   data: 16518,
   value: "WORTHINGTON SAUCETTES,CND,UNPREP"
 },
 {
   data: 16519,
   value: "WORTHINGTON SUPER LINKS,CND,UNPREP"
 },
 {
   data: 16521,
   value: "WORTHINGTON VEG SKALLOPS,CND,UNPREP"
 },
 {
   data: 16522,
   value: "WORTHINGTON VEG STEAKS,CND,UNPREP"
 },
 {
   data: 16523,
   value: "WORTHINGTON VEGETARIAN BURGER,CND,UNPREP"
 },
 {
   data: 16524,
   value: "WORTHINGTON VEJA-LINKS,CND,UNPREP"
 },
 {
   data: 16525,
   value: "WORTHINGTON CHIC-KETTS,FRZ,UNPREP"
 },
 {
   data: 16526,
   value: "WORTHINGTON MEATLESS CHICK ROLL,FRZ,UNPREP"
 },
 {
   data: 16527,
   value: "WORTHINGTON MEATLESS CORNED BF ROLL,FRZ,UNPREP"
 },
 {
   data: 16528,
   value: "WORTHINGTON DINNER RST,FRZ,UNPREP"
 },
 {
   data: 16529,
   value: "WORTHINGTON FRIPATS,FRZ,UNPREP"
 },
 {
   data: 16531,
   value: "WORTHINGTON PROSAGE LINKS,FRZ,UNPREP"
 },
 {
   data: 16532,
   value: "WORTHINGTON PROSAGE ROLL,FRZ,UNPREP"
 },
 {
   data: 16533,
   value: "WORTHINGTON SMOKED TURKEY ROLL,FRZ,UNPREP"
 },
 {
   data: 16534,
   value: "WORTHINGTON STAKELETS,FRZ,UNPREP"
 },
 {
   data: 16535,
   value: "WORTHINGTON STRIPPLES,FRZ,UNPREP"
 },
 {
   data: 16536,
   value: "WORTHINGTON WHAM (ROLL),FRZ,UNPREP"
 },
 {
   data: 16538,
   value: "MORNINGSTAR FARMS BRKFST PATTIE MADE W/ ORG SOY,FRZ,UNPREP"
 },
 {
   data: 16542,
   value: "MORNINGSTAR FARMS VEGGIE BRKFST BACON STRIPS,FRZ,UNPREP"
 },
 {
   data: 16546,
   value: "MORNINGSTAR FARMS VEGGIE BRKFST SAUSAGE LINKS,FRZ,UNPREP"
 },
 {
   data: 16548,
   value: "MORNINGSTAR FARMS GRILLERS ORIGINAL,FRZ,UNPREP"
 },
 {
   data: 16549,
   value: "MORNINGSTAR FARMS GRILLERS PRIME,FRZ,UNPREP"
 },
 {
   data: 16551,
   value: "MORNINGSTAR FARMS ASIAN VEGGIE PATTIES,FRZ,UNPREP"
 },
 {
   data: 16552,
   value: "MORNINGSTAR FARMS MUSHROOM LOVER'S BURGER,FRZ,UNPREP"
 },
 {
   data: 16554,
   value: "MORNINGSTAR FARMS TOMATO & BASIL PIZZA BURGER,FRZ,UNPREP"
 },
 {
   data: 16555,
   value: "MORNINGSTAR FARMS MEATFREE BUFFALO WINGS,FRZ,UNPREP"
 },
 {
   data: 16556,
   value: "MORNINGSTAR FARMS CHIK'N NUGGETS,FRZ,UNPREP"
 },
 {
   data: 16557,
   value: "MORNINGSTAR FARMS CHIK PATTIES,FRZ,UNPREP"
 },
 {
   data: 16558,
   value: "MORNINGSTAR FARMS ITALIAN HERB CHIK PATTIES,FRZ,UNPREP"
 },
 {
   data: 16559,
   value: "MORNINGSTAR FARMS ORIGINAL CHIK'N TENDERS,FRZ,UNPREP"
 },
 {
   data: 16560,
   value: "MORNINGSTAR FARMS VEGGIE CORN DOGS,FRZ,UNPREP"
 },
 {
   data: 16561,
   value: "MORNINGSTAR FARMS MINI VEGGIE CORN DOGS,FRZ,UNPREP"
 },
 {
   data: 16563,
   value: "MORNINGSTAR FARMS MEAL STARTERS CHIK'N STRIPS,FRZ,UNPREP"
 },
 {
   data: 16565,
   value: "MORNINGSTAR FARMS SAUSAGE STYLE RECIPE CRUMBLES,FRZ,UNPREP"
 },
 {
   data: 16570,
   value: "GARDENBURGER,BLACK BEAN CHIPOTLE BURGER"
 },
 {
   data: 16579,
   value: "GARDENBURGER,ORIGINAL"
 },
 {
   data: 16584,
   value: "GARDENBURGER,SAVORY PORTABELLA VEGGIE BURGER"
 },
 {
   data: 16585,
   value: "GARDENBURGER,SUN-DRIED TOMATO BASIL BURGER"
 },
 {
   data: 16586,
   value: "GARDENBURGER,VEGGIE MEDLEY BURGER"
 },
 {
   data: 16587,
   value: "MORNINGSTAR FARMS MPL FLAV VEG SAUSAGE PATTIES,FRZ,UNPREP"
 },
 {
   data: 16588,
   value: "MORNINGSTAR FARMS CHIK'N GRILL VEGGIE PATTIES,FRZ,UNPREP"
 },
 {
   data: 16589,
   value: "MORNINGSTAR FARMS VEGGIE ITALIAN STYLE SAUSAGE,FRZ,UNPREP"
 },
 {
   data: 16590,
   value: "MORNINGSTAR FARMS BBQ RIBLETS,FRZ,UNPREP"
 },
 {
   data: 16591,
   value: "WORTHINGTON LEANIES,FRZ,UNPREP"
 },
 {
   data: 16592,
   value: "MORNINGSTAR FARMS CALIFORNIA TURK'Y BURGER,FRZ,UNPREP"
 },
 {
   data: 16593,
   value: "MORNINGSTAR FARMS HOT & SPICY VEG SAUSAGE PATTIES,FRZ,UNPREP"
 },
 {
   data: 16594,
   value: "MORNINGSTAR FARMS LASAGNA W/ VEGGIE SAUSAGE,FRZ,UNPREP"
 },
 {
   data: 16595,
   value: "MORNINGSTAR FARMS VEGGIE SWT & SOUR CHIK'N,FRZ,UNPREP"
 },
 {
   data: 16596,
   value: "MORNINGSTAR FARMS GRILLERS QUARTER POUND VEG BRGR,FRZ,UNPREP"
 },
 {
   data: 16597,
   value: "MORNINGSTAR FARMS ENTREE CHILI,FRZ,UNPREP"
 },
 {
   data: 16598,
   value: "MORNINGSTAR FARMS BACON,EGG & CHS BISCUIT,FRZ,UNPREP"
 },
 {
   data: 16600,
   value: "MORNINGSTAR FARMS SESAME CHIK'N ENTREE,FRZ,UNPREP"
 },
 {
   data: 16604,
   value: "MORNINGSTAR FARMS MEAL STARTERS VEGGIE MEATBALLS,FRZ,UNPREP"
 },
 {
   data: 16605,
   value: "MORNINGSTAR FARMS ENTREE CHIK'N ENCHILADA W/ RICE,FRZ,UNPREP"
 },
 {
   data: 17000,
   value: "VEAL,AUSTRALIAN,RIB,RIB RST,LN,RAW"
 },
 {
   data: 17001,
   value: "LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17002,
   value: "LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/4\"FAT,CHOIC,CKD"
 },
 {
   data: 17003,
   value: "LAMB,DOM,COMP OF RTL CUTS,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17004,
   value: "LAMB,DOM,COMP OF RTL CUTS,LN,1/4\"FAT,CHOIC,CKD"
 },
 {
   data: 17005,
   value: "LAMB,DOM,COMP OF RTL CUTS,FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17006,
   value: "LAMB,DOM,COMP OF RTL CUTS,FAT,1/4\"FAT,CHOIC,CKD"
 },
 {
   data: 17007,
   value: "LAMB,DOM,FORESHANK,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17008,
   value: "LAMB,DOM,FORESHANK,LN&FAT,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17009,
   value: "LAMB,DOM,FORESHANK,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17010,
   value: "LAMB,DOM,FORESHANK,LN,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17011,
   value: "LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17012,
   value: "LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17013,
   value: "LAMB,DOM,LEG,WHL (SHK&SIRL),LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17014,
   value: "LAMB,DOM,LEG,WHL (SHK&SIRL),LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17015,
   value: "LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17016,
   value: "LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17017,
   value: "LAMB,DOM,LEG,SHANK HALF,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17018,
   value: "LAMB,DOM,LEG,SHANK HALF,LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17019,
   value: "LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17020,
   value: "LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17021,
   value: "LAMB,DOM,LEG,SIRLOIN HALF,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17022,
   value: "LAMB,DOM,LEG,SIRLOIN HALF,LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17023,
   value: "LAMB,DOM,LOIN,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17024,
   value: "LAMB,DOM,LOIN,LN&FAT,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17025,
   value: "LAMB,DOM,LOIN,LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17026,
   value: "LAMB,DOM,LOIN,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17027,
   value: "LAMB,DOM,LOIN,LN,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17028,
   value: "LAMB,DOM,LOIN,LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17029,
   value: "LAMB,DOM,RIB,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17030,
   value: "LAMB,DOM,RIB,LN&FAT,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17031,
   value: "LAMB,DOM,RIB,LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17032,
   value: "LAMB,DOM,RIB,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17033,
   value: "LAMB,DOM,RIB,LN,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17034,
   value: "LAMB,DOM,RIB,LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17035,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17036,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17037,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17038,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17039,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17040,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17041,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17042,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17043,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17044,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17045,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17046,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17047,
   value: "LAMB,DOM,SHLDR,ARM,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17048,
   value: "LAMB,DOM,SHLDR,ARM,LN,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17049,
   value: "LAMB,DOM,SHLDR,ARM,LN,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17050,
   value: "LAMB,DOM,SHLDR,ARM,LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17051,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17052,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17053,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17054,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17055,
   value: "LAMB,DOM,SHLDR,BLADE,LN,1/4\"FAT,CHOIC,RAW"
 },
 {
   data: 17056,
   value: "LAMB,DOM,SHLDR,BLADE,LN,1/4\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17057,
   value: "LAMB,DOM,SHLDR,BLADE,LN,1/4\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17058,
   value: "LAMB,DOM,SHLDR,BLADE,LN,1/4\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17059,
   value: "LAMB,DOM,CUBED FOR STEW OR KABOB (LEG&SHLDR),LN,1/4\"FAT,RAW"
 },
 {
   data: 17060,
   value: "LAMB,DOM,CUBED FOR STEW (LEG&SHLDR),LN,1/4\"FAT,CKD,BRSD"
 },
 {
   data: 17061,
   value: "LAMB,DOM,CUBED FOR STEW (LEG&SHLDR),LN,1/4\"FAT,CKD,BRLD"
 },
 {
   data: 17062,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN&FAT,RAW"
 },
 {
   data: 17063,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN&FAT,CKD"
 },
 {
   data: 17064,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN,RAW"
 },
 {
   data: 17065,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN,CKD"
 },
 {
   data: 17066,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,FAT,RAW"
 },
 {
   data: 17067,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,FAT,CKD"
 },
 {
   data: 17068,
   value: "LAMB,NZ,IMP,FRZ,FORESHANK,LN&FAT,RAW"
 },
 {
   data: 17069,
   value: "LAMB,NZ,IMP,FRZ,FORESHANK,LN&FAT,CKD,BRSD"
 },
 {
   data: 17070,
   value: "LAMB,NZ,IMP,FRZ,FORESHANK,LN,RAW"
 },
 {
   data: 17071,
   value: "LAMB,NZ,IMP,FRZ,FORESHANK,LN,CKD,BRSD"
 },
 {
   data: 17072,
   value: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN&FAT,RAW"
 },
 {
   data: 17073,
   value: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN&FAT,CKD,RSTD"
 },
 {
   data: 17074,
   value: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN,RAW"
 },
 {
   data: 17075,
   value: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN,CKD,RSTD"
 },
 {
   data: 17076,
   value: "LAMB,NZ,IMP,FRZ,LOIN,LN&FAT,RAW"
 },
 {
   data: 17077,
   value: "LAMB,NZ,IMP,FRZ,LOIN,LN&FAT,CKD,BRLD"
 },
 {
   data: 17078,
   value: "LAMB,NZ,IMP,FRZ,LOIN,LN,RAW"
 },
 {
   data: 17079,
   value: "LAMB,NZ,IMP,FRZ,LOIN,LN,CKD,BRLD"
 },
 {
   data: 17080,
   value: "LAMB,NZ,IMP,FRZ,RIB,LN&FAT,RAW"
 },
 {
   data: 17081,
   value: "LAMB,NZ,IMP,FRZ,RIB,LN&FAT,CKD,RSTD"
 },
 {
   data: 17082,
   value: "LAMB,NZ,IMP,FRZ,RIB,LN,RAW"
 },
 {
   data: 17083,
   value: "LAMB,NZ,IMP,FRZ,RIB,LN,CKD,RSTD"
 },
 {
   data: 17084,
   value: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN&FAT,RAW"
 },
 {
   data: 17085,
   value: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN&FAT,CKD,BRSD"
 },
 {
   data: 17086,
   value: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN,RAW"
 },
 {
   data: 17087,
   value: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN,CKD,BRSD"
 },
 {
   data: 17088,
   value: "VEAL,COMP OF RTL CUTS,LN&FAT,RAW"
 },
 {
   data: 17089,
   value: "VEAL,COMP OF RTL CUTS,LN&FAT,CKD"
 },
 {
   data: 17090,
   value: "VEAL,COMP OF RTL CUTS,LN,RAW"
 },
 {
   data: 17091,
   value: "VEAL,COMP OF RTL CUTS,LN,CKD"
 },
 {
   data: 17092,
   value: "VEAL,COMP OF RTL CUTS,FAT,RAW"
 },
 {
   data: 17093,
   value: "VEAL,COMP OF RTL CUTS,FAT,CKD"
 },
 {
   data: 17094,
   value: "VEAL,LEG (TOP RND),LN&FAT,RAW"
 },
 {
   data: 17095,
   value: "VEAL,LEG (TOP RND),LN&FAT,CKD,BRSD"
 },
 {
   data: 17096,
   value: "VEAL,LEG (TOP RND),LN&FAT,CKD,PAN-FRIED,BREADED"
 },
 {
   data: 17097,
   value: "VEAL,LEG (TOP RND),LN&FAT,CKD,PAN-FRIED,NOT BREADED"
 },
 {
   data: 17098,
   value: "VEAL,LEG (TOP RND),LN&FAT,CKD,RSTD"
 },
 {
   data: 17099,
   value: "VEAL,LEG (TOP RND),LN,RAW"
 },
 {
   data: 17100,
   value: "VEAL,LEG (TOP RND),LN,CKD,BRSD"
 },
 {
   data: 17101,
   value: "VEAL,LEG (TOP RND),LN,CKD,PAN-FRIED,BREADED"
 },
 {
   data: 17102,
   value: "VEAL,LEG (TOP RND),LN,CKD,PAN-FRIED,NOT BREADED"
 },
 {
   data: 17103,
   value: "VEAL,LEG (TOP RND),LN,CKD,RSTD"
 },
 {
   data: 17104,
   value: "VEAL,LOIN,LN&FAT,RAW"
 },
 {
   data: 17105,
   value: "VEAL,LOIN,LN&FAT,CKD,BRSD"
 },
 {
   data: 17106,
   value: "VEAL,LOIN,LN&FAT,CKD,RSTD"
 },
 {
   data: 17107,
   value: "VEAL,LOIN,LN,RAW"
 },
 {
   data: 17108,
   value: "VEAL,LOIN,LN,CKD,BRSD"
 },
 {
   data: 17109,
   value: "VEAL,LOIN,LN,CKD,RSTD"
 },
 {
   data: 17110,
   value: "VEAL,RIB,LN&FAT,RAW"
 },
 {
   data: 17111,
   value: "VEAL,RIB,LN&FAT,CKD,BRSD"
 },
 {
   data: 17112,
   value: "VEAL,RIB,LN&FAT,CKD,RSTD"
 },
 {
   data: 17113,
   value: "VEAL,RIB,LN,RAW"
 },
 {
   data: 17114,
   value: "VEAL,RIB,LN,CKD,BRSD"
 },
 {
   data: 17115,
   value: "VEAL,RIB,LN,CKD,RSTD"
 },
 {
   data: 17116,
   value: "VEAL,SHLDR,WHL (ARM&BLD),LN&FAT,RAW"
 },
 {
   data: 17117,
   value: "VEAL,SHLDR,WHL (ARM&BLD),LN&FAT,CKD,BRSD"
 },
 {
   data: 17118,
   value: "VEAL,SHLDR,WHL (ARM&BLD),LN&FAT,CKD,RSTD"
 },
 {
   data: 17119,
   value: "VEAL,SHLDR,WHL (ARM&BLD),LN,RAW"
 },
 {
   data: 17120,
   value: "VEAL,SHLDR,WHL (ARM&BLD),LN,CKD,BRSD"
 },
 {
   data: 17121,
   value: "VEAL,SHLDR,WHL (ARM&BLD),LN,CKD,RSTD"
 },
 {
   data: 17122,
   value: "VEAL,SHLDR,ARM,LN&FAT,RAW"
 },
 {
   data: 17123,
   value: "VEAL,SHLDR,ARM,LN&FAT,CKD,BRSD"
 },
 {
   data: 17124,
   value: "VEAL,SHLDR,ARM,LN&FAT,CKD,RSTD"
 },
 {
   data: 17125,
   value: "VEAL,SHLDR,ARM,LN,RAW"
 },
 {
   data: 17126,
   value: "VEAL,SHLDR,ARM,LN,CKD,BRSD"
 },
 {
   data: 17127,
   value: "VEAL,SHLDR,ARM,LN,CKD,RSTD"
 },
 {
   data: 17128,
   value: "VEAL,SHLDR,BLADE,LN&FAT,RAW"
 },
 {
   data: 17129,
   value: "VEAL,SHLDR,BLADE,LN&FAT,CKD,BRSD"
 },
 {
   data: 17130,
   value: "VEAL,SHLDR,BLADE,LN&FAT,CKD,RSTD"
 },
 {
   data: 17131,
   value: "VEAL,SHLDR,BLADE,LN,RAW"
 },
 {
   data: 17132,
   value: "VEAL,SHLDR,BLADE,LN,CKD,BRSD"
 },
 {
   data: 17133,
   value: "VEAL,SHLDR,BLADE,LN,CKD,RSTD"
 },
 {
   data: 17134,
   value: "VEAL,SIRLOIN,LN&FAT,RAW"
 },
 {
   data: 17135,
   value: "VEAL,SIRLOIN,LN&FAT,CKD,BRSD"
 },
 {
   data: 17136,
   value: "VEAL,SIRLOIN,LN&FAT,CKD,RSTD"
 },
 {
   data: 17137,
   value: "VEAL,SIRLOIN,LN,RAW"
 },
 {
   data: 17138,
   value: "VEAL,SIRLOIN,LN,CKD,BRSD"
 },
 {
   data: 17139,
   value: "VEAL,SIRLOIN,LN,CKD,RSTD"
 },
 {
   data: 17140,
   value: "VEAL,CUBED FOR STEW (LEG&SHLDR),LN,RAW"
 },
 {
   data: 17141,
   value: "VEAL,CUBED FOR STEW (LEG&SHLDR),LN,CKD,BRSD"
 },
 {
   data: 17142,
   value: "VEAL,GROUND,RAW"
 },
 {
   data: 17143,
   value: "VEAL,GROUND,CKD,BRLD"
 },
 {
   data: 17144,
   value: "GAME MEAT,ANTELOPE,RAW"
 },
 {
   data: 17145,
   value: "GAME MEAT,ANTELOPE,CKD,RSTD"
 },
 {
   data: 17146,
   value: "GAME MEAT,BEAR,RAW"
 },
 {
   data: 17147,
   value: "GAME MEAT,BEAR,CKD,SIMMRD"
 },
 {
   data: 17148,
   value: "BISON,GROUND,GRASS-FED,CKD"
 },
 {
   data: 17149,
   value: "BISON,GROUND,GRASS-FED,RAW"
 },
 {
   data: 17150,
   value: "GAME MEAT,BEAVER,RAW"
 },
 {
   data: 17151,
   value: "GAME MEAT,BEAVER,CKD,RSTD"
 },
 {
   data: 17152,
   value: "GAME MEAT,BEEFALO,COMP OF CUTS,RAW"
 },
 {
   data: 17153,
   value: "GAME MEAT,BEEFALO,COMP OF CUTS,CKD,RSTD"
 },
 {
   data: 17154,
   value: "VEAL,AUSTRALIAN,FAT,RAW"
 },
 {
   data: 17155,
   value: "VEAL,AUSTRALIAN,RIB,RIB RST,LN & FAT,RAW"
 },
 {
   data: 17156,
   value: "GAME MEAT,BISON,LN,RAW"
 },
 {
   data: 17157,
   value: "GAME MEAT,BISON,LN,CKD,RSTD"
 },
 {
   data: 17158,
   value: "GAME MEAT,BOAR,WILD,RAW"
 },
 {
   data: 17159,
   value: "GAME MEAT,BOAR,WILD,CKD,RSTD"
 },
 {
   data: 17160,
   value: "GAME MEAT,BUFFALO,H2O,RAW"
 },
 {
   data: 17161,
   value: "GAME MEAT,BUFFALO,H2O,CKD,RSTD"
 },
 {
   data: 17162,
   value: "GAME MEAT,CARIBOU,RAW"
 },
 {
   data: 17163,
   value: "GAME MEAT,CARIBOU,CKD,RSTD"
 },
 {
   data: 17164,
   value: "GAME MEAT,DEER,RAW"
 },
 {
   data: 17165,
   value: "GAME MEAT,DEER,CKD,RSTD"
 },
 {
   data: 17166,
   value: "GAME MEAT,ELK,RAW"
 },
 {
   data: 17167,
   value: "GAME MEAT,ELK,CKD,RSTD"
 },
 {
   data: 17168,
   value: "GOAT,RAW"
 },
 {
   data: 17169,
   value: "GAME MEAT,GOAT,CKD,RSTD"
 },
 {
   data: 17170,
   value: "GAME MEAT,HORSE,RAW"
 },
 {
   data: 17171,
   value: "GAME MEAT,HORSE,CKD,RSTD"
 },
 {
   data: 17172,
   value: "GAME MEAT,MOOSE,RAW"
 },
 {
   data: 17173,
   value: "GAME MEAT,MOOSE,CKD,RSTD"
 },
 {
   data: 17174,
   value: "GAME MEAT,MUSKRAT,RAW"
 },
 {
   data: 17175,
   value: "GAME MEAT,MUSKRAT,CKD,RSTD"
 },
 {
   data: 17176,
   value: "GAME MEAT,OPOSSUM,CKD,RSTD"
 },
 {
   data: 17177,
   value: "GAME MEAT,RABBIT,DOMESTICATED,COMP OF CUTS,RAW"
 },
 {
   data: 17178,
   value: "GAME MEAT,RABBIT,DOMESTICATED,COMP OF CUTS,CKD,RSTD"
 },
 {
   data: 17179,
   value: "GAME MEAT,RABBIT,DOMESTICATED,COMP OF CUTS,CKD,STWD"
 },
 {
   data: 17180,
   value: "GAME MEAT,RABBIT,WILD,RAW"
 },
 {
   data: 17181,
   value: "GAME MEAT,RABBIT,WILD,CKD,STWD"
 },
 {
   data: 17182,
   value: "GAME MEAT,RACCOON,CKD,RSTD"
 },
 {
   data: 17183,
   value: "GAME MEAT,SQUIRREL,RAW"
 },
 {
   data: 17184,
   value: "GAME MEAT,SQUIRREL,CKD,RSTD"
 },
 {
   data: 17185,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,BRAIN,RAW"
 },
 {
   data: 17186,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,BRSD"
 },
 {
   data: 17187,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,PAN-FRIED"
 },
 {
   data: 17188,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,BRAIN,RAW"
 },
 {
   data: 17189,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,BRSD"
 },
 {
   data: 17190,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,PAN-FRIED"
 },
 {
   data: 17191,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,HEART,RAW"
 },
 {
   data: 17192,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,HEART,CKD,BRSD"
 },
 {
   data: 17193,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,HEART,RAW"
 },
 {
   data: 17194,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,HEART,CKD,BRSD"
 },
 {
   data: 17195,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW"
 },
 {
   data: 17196,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,BRSD"
 },
 {
   data: 17197,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW"
 },
 {
   data: 17198,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,BRSD"
 },
 {
   data: 17199,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,LIVER,RAW"
 },
 {
   data: 17200,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,LIVER,CKD,BRSD"
 },
 {
   data: 17201,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,LIVER,CKD,PAN-FRIED"
 },
 {
   data: 17202,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,LIVER,RAW"
 },
 {
   data: 17203,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,LIVER,CKD,BRSD"
 },
 {
   data: 17204,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,LIVER,CKD,PAN-FRIED"
 },
 {
   data: 17205,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,LUNGS,RAW"
 },
 {
   data: 17206,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD"
 },
 {
   data: 17207,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,LUNGS,RAW"
 },
 {
   data: 17208,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD"
 },
 {
   data: 17209,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,MECHANICALLY SEPARATED,RAW"
 },
 {
   data: 17210,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW"
 },
 {
   data: 17211,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD"
 },
 {
   data: 17212,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW"
 },
 {
   data: 17213,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD"
 },
 {
   data: 17214,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW"
 },
 {
   data: 17215,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD"
 },
 {
   data: 17216,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW"
 },
 {
   data: 17217,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD"
 },
 {
   data: 17218,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,THYMUS,RAW"
 },
 {
   data: 17219,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,THYMUS,CKD,BRSD"
 },
 {
   data: 17220,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,TONGUE,RAW"
 },
 {
   data: 17221,
   value: "LAMB,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,BRSD"
 },
 {
   data: 17222,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,TONGUE,RAW"
 },
 {
   data: 17223,
   value: "VEAL,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,BRSD"
 },
 {
   data: 17224,
   value: "LAMB,GROUND,RAW"
 },
 {
   data: 17225,
   value: "LAMB,GROUND,CKD,BRLD"
 },
 {
   data: 17226,
   value: "LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17227,
   value: "LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,CHOIC,CKD"
 },
 {
   data: 17228,
   value: "LAMB,DOM,FORESHANK,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17229,
   value: "LAMB,DOM,FORESHANK,LN&FAT,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17230,
   value: "LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17231,
   value: "LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17232,
   value: "LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17233,
   value: "LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17234,
   value: "LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17235,
   value: "LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17236,
   value: "LAMB,DOM,LOIN,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17237,
   value: "LAMB,DOM,LOIN,LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17238,
   value: "LAMB,DOM,LOIN,LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17239,
   value: "LAMB,DOM,RIB,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17240,
   value: "LAMB,DOM,RIB,LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17241,
   value: "LAMB,DOM,RIB,LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17242,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17243,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17244,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17245,
   value: "LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17246,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17247,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/8\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17248,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17249,
   value: "LAMB,DOM,SHLDR,ARM,LN&FAT,1/8\"FAT,CHOIC,RSTD"
 },
 {
   data: 17250,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8\"FAT,CHOIC,RAW"
 },
 {
   data: 17251,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8\"FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 17252,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 17253,
   value: "LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8\"FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 17254,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17255,
   value: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,CKD"
 },
 {
   data: 17256,
   value: "LAMB,NZ,IMP,FRZ,FORESHANK,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17257,
   value: "LAMB,NZ,IMP,FRZ,FORESHANK,LN&FAT,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17258,
   value: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17259,
   value: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN&FAT,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17260,
   value: "LAMB,NZ,IMP,FRZ,LOIN,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17261,
   value: "LAMB,NZ,IMP,FRZ,LOIN,LN&FAT,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17262,
   value: "LAMB,NZ,IMP,FRZ,RIB,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17263,
   value: "LAMB,NZ,IMP,FRZ,RIB,LN&FAT,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17264,
   value: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17265,
   value: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17267,
   value: "GAME MEAT,BISON,TOP SIRLOIN,LN,0\"FAT,RAW"
 },
 {
   data: 17268,
   value: "GAME MEAT,BISON,RIBEYE,LN,0\"FAT,RAW"
 },
 {
   data: 17269,
   value: "GAME MEAT,BISON,SHLDR CLOD,LN,0\"FAT,RAW"
 },
 {
   data: 17270,
   value: "VEAL,BREAST,FAT,CKD"
 },
 {
   data: 17271,
   value: "VEAL,BREAST,WHL,BNLESS,LN&FAT,RAW"
 },
 {
   data: 17272,
   value: "VEAL,BREAST,WHL,BNLESS,LN&FAT,CKD,BRSD"
 },
 {
   data: 17273,
   value: "VEAL,BREAST,PLATE HALF,BNLESS,LN&FAT,CKD,BRSD"
 },
 {
   data: 17274,
   value: "VEAL,BREAST,POINT HALF,BNLESS,LN&FAT,CKD,BRSD"
 },
 {
   data: 17275,
   value: "VEAL,BREAST,WHL,BNLESS,LN,CKD,BRSD"
 },
 {
   data: 17276,
   value: "VEAL,SHANK (FORE&HIND),LN&FAT,RAW"
 },
 {
   data: 17277,
   value: "VEAL,SHANK (FORE&HIND),LN&FAT,CKD,BRSD"
 },
 {
   data: 17278,
   value: "VEAL,SHANK (FORE&HIND),LN,RAW"
 },
 {
   data: 17279,
   value: "VEAL,SHANK (FORE&HIND),LN,CKD,BRSD"
 },
 {
   data: 17280,
   value: "LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17281,
   value: "LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN&FAT,1/8\"FAT,CKD"
 },
 {
   data: 17282,
   value: "LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN,1/8\"FAT,RAW"
 },
 {
   data: 17283,
   value: "LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN,1/8\"FAT,CKD"
 },
 {
   data: 17284,
   value: "LAMB,AUS,IMP,FRSH,FAT,RAW"
 },
 {
   data: 17285,
   value: "LAMB,AUS,IMP,FRSH,FAT,CKD"
 },
 {
   data: 17286,
   value: "LAMB,AUS,IMP,FRSH,FORESHANK,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17287,
   value: "LAMB,AUS,IMP,FRSH,FORESHANK,LN&FAT,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17288,
   value: "LAMB,AUS,IMP,FRSH,FORESHANK,LN,1/8\"FAT,RAW"
 },
 {
   data: 17289,
   value: "LAMB,AUS,IMP,FRSH,FORESHANK,LN,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17290,
   value: "LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17291,
   value: "LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN&FAT,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17292,
   value: "LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN,1/8\"FAT,RAW"
 },
 {
   data: 17293,
   value: "LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17294,
   value: "LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17295,
   value: "LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN&FAT,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17296,
   value: "LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN,1/8\"FAT,RAW"
 },
 {
   data: 17297,
   value: "LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17298,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRLOIN HALF,BNLESS,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17299,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRL HLF,BNLESS,LN&FT,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17300,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRLOIN HALF,BNLESS,LN,1/8\"FAT,RAW"
 },
 {
   data: 17301,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRL HALF,BNLESS,LN,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17302,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRL CHOPS,BNLESS,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17303,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRL CHPS,BNLESS,LN&FT,1/8\"FT,CKD,BRLD"
 },
 {
   data: 17304,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRLOIN CHOPS,BNLESS,LN,1/8\"FAT,RAW"
 },
 {
   data: 17305,
   value: "LAMB,AUS,IMP,FRSH,LEG,SIRL CHOPS,BNLESS,LN,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17306,
   value: "LAMB,AUS,IMP,FRSH,LEG,CNTR SLICE,BONE-IN,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17307,
   value: "LAMB,AUS,IMP,FRSH,LEG,CNTR SLCE,BNE-IN,LN&FT,1/8\"FT,CKD,BRLD"
 },
 {
   data: 17308,
   value: "LAMB,AUS,IMP,FRSH,LEG,CNTR SLICE,BONE-IN,LN,1/8\"FAT,RAW"
 },
 {
   data: 17309,
   value: "LAMB,AUS,IMP,FRSH,LEG,CNTR SLICE,BONE-IN,LN,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17310,
   value: "LAMB,AUS,IMP,FRSH,LOIN,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17311,
   value: "LAMB,AUS,IMP,FRSH,LOIN,LN&FAT,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17312,
   value: "LAMB,AUS,IMP,FRSH,LOIN,LN,1/8\"FAT,RAW"
 },
 {
   data: 17313,
   value: "LAMB,AUS,IMP,FRSH,LOIN,LN,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17314,
   value: "LAMB,AUS,IMP,FRSH,RIB,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17315,
   value: "LAMB,AUS,IMP,FRSH,RIB,LN&FAT,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17316,
   value: "LAMB,AUS,IMP,FRSH,RIB,LN,1/8\"FAT,RAW"
 },
 {
   data: 17317,
   value: "LAMB,AUS,IMP,FRSH,RIB,LN,1/8\"FAT,CKD,RSTD"
 },
 {
   data: 17318,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17319,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN&FAT,1/8\"FAT,CKD"
 },
 {
   data: 17320,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN,1/8\"FAT,RAW"
 },
 {
   data: 17321,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN,1/8\"FAT,CKD"
 },
 {
   data: 17322,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17323,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN&FAT,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17324,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN,1/8\"FAT,RAW"
 },
 {
   data: 17325,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN,1/8\"FAT,CKD,BRSD"
 },
 {
   data: 17326,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN&FAT,1/8\"FAT,RAW"
 },
 {
   data: 17327,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN&FAT,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17328,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN,1/8\"FAT,RAW"
 },
 {
   data: 17329,
   value: "LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN,1/8\"FAT,CKD,BRLD"
 },
 {
   data: 17330,
   value: "GAME MEAT BISON,GROUND,RAW"
 },
 {
   data: 17331,
   value: "GAME MEAT,BISON,GROUND,CKD,PAN-BROILED"
 },
 {
   data: 17332,
   value: "GAME MEAT BISON,TOP SIRLOIN,LN,1\" STEAK,CKD,BRLD"
 },
 {
   data: 17333,
   value: "GAME MEAT,BISON,CHUCK,SHLDR CLOD,LN,3-5 LB RST,CKD,BRSD"
 },
 {
   data: 17334,
   value: "GAME MEAT,BISON,CHUCK,SHLDR CLOD,LN,3-5 LB RST,RAW"
 },
 {
   data: 17335,
   value: "GAME MEAT,BISON,RIBEYE,LN,1\" STEAK,CKD,BRLD"
 },
 {
   data: 17336,
   value: "GAME MEAT,BISON,TOP RND,LN,1\" STEAK,CKD,BRLD"
 },
 {
   data: 17337,
   value: "GAME MEAT,BISON,TOP RND,LN,1\" STEAK,RAW"
 },
 {
   data: 17338,
   value: "GAME MEAT,ELK,GROUND,RAW"
 },
 {
   data: 17339,
   value: "GAME MEAT,ELK,GROUND,CKD,PAN-BROILED"
 },
 {
   data: 17340,
   value: "GAME MEAT,ELK,LOIN,LN,CKD,BRLD"
 },
 {
   data: 17341,
   value: "GAME MEAT,ELK,RND,LN,CKD,BRLD"
 },
 {
   data: 17342,
   value: "GAME MEAT,ELK,TENDERLOIN,LN,CKD,BRLD"
 },
 {
   data: 17343,
   value: "GAME MEAT,DEER,GROUND,RAW"
 },
 {
   data: 17344,
   value: "GAME MEAT,DEER,GROUND,CKD,PAN-BROILED"
 },
 {
   data: 17345,
   value: "GAME MEAT,DEER,LOIN,LN,1\" STEAK,CKD,BRLD"
 },
 {
   data: 17346,
   value: "GAME MEAT,DEER,SHLDR CLOD,LN,3-5 LB RST,CKD,BRSD"
 },
 {
   data: 17347,
   value: "GAME MEAT,DEER,TENDERLOIN,LN,0.5-1 LB RST,CKD,BRLD"
 },
 {
   data: 17348,
   value: "GAME MEAT,DEER,TOP RND,LN,1\" STEAK,CKD,BRLD"
 },
 {
   data: 17349,
   value: "VEAL,AUSTRALIAN,SHANK,FORE,BONE-IN,LN,RAW"
 },
 {
   data: 17350,
   value: "VEAL,AUSTRALIAN,SHANK,FORE,BONE-IN,LN & FAT,RAW"
 },
 {
   data: 17351,
   value: "VEAL,AUSTRALIAN,SHANK,HIND,BONE-IN,LN,RAW"
 },
 {
   data: 17352,
   value: "VEAL,AUSTRALIAN,SHANK,HIND,BONE-IN,LN & FAT"
 },
 {
   data: 17353,
   value: "LAMB,AUSTRALIAN,GROUND,85% LN / 15% FAT,RAW"
 },
 {
   data: 18001,
   value: "BAGEL,PLN,TSTD, ENR W/CA PROP(INCLUDE ONION,POPPY,SESAME)"
 },
 {
   data: 18002,
   value: "BAGELS,PLN,TSTD,ENR W/CA PROP (INCLUDES ONION,POPPY,SESAME)"
 },
 {
   data: 18003,
   value: "BAGELS,EGG"
 },
 {
   data: 18005,
   value: "BAGELS,CINNAMON-RAISIN"
 },
 {
   data: 18006,
   value: "BAGELS,CINNAMON-RAISIN,TSTD"
 },
 {
   data: 18007,
   value: "BAGELS,OAT BRAN"
 },
 {
   data: 18009,
   value: "BISCUITS,PLN OR BTTRMLK,FRZ,BKD"
 },
 {
   data: 18010,
   value: "BISCUITS,PLN OR BTTRMLK,DRY MIX"
 },
 {
   data: 18011,
   value: "BISCUITS,PLN OR BTTRMLK,DRY MIX,PREP"
 },
 {
   data: 18012,
   value: "BISCUITS,PLN OR BTTRMLK,REFR DOUGH,LOWER FAT"
 },
 {
   data: 18013,
   value: "BISCUITS,PLN OR BTTRMLK,REFR DOUGH,LOWER FAT,BKD"
 },
 {
   data: 18014,
   value: "BISCUIT, PLN OR BUTMLK, REFRI DOUGH, HIGHER FAT"
 },
 {
   data: 18015,
   value: "BISCUITS,PLN OR BTTRMLK,REFR DOUGH,HIGHER FAT,BKD"
 },
 {
   data: 18016,
   value: "BISCUITS,PLN OR BTTRMLK,PREP FROM RECIPE"
 },
 {
   data: 18017,
   value: "BISCUITS,MXD GRAIN,REFR DOUGH"
 },
 {
   data: 18019,
   value: "BREAD,BANANA,PREP FROM RECIPE,MADE W/MARGARINE"
 },
 {
   data: 18021,
   value: "BREAD,BOSTON BROWN,CANNED"
 },
 {
   data: 18022,
   value: "BREAD,CORNBREAD,DRY MIX,ENR (INCL CORN MUFFIN MIX)"
 },
 {
   data: 18023,
   value: "BREAD,CORNBREAD,DRY MIX,PREP"
 },
 {
   data: 18024,
   value: "BREAD,CORNBREAD,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18025,
   value: "BREAD,CRACKED-WHEAT"
 },
 {
   data: 18027,
   value: "BREAD,EGG"
 },
 {
   data: 18028,
   value: "BREAD,EGG,TOASTED"
 },
 {
   data: 18029,
   value: "BREAD, FRENCH OR VIENNA (INCLUDES SOURDOUGH)"
 },
 {
   data: 18030,
   value: "BREAD, FRENCH OR VIENNA, TSTD (IND SOURDOUGH)"
 },
 {
   data: 18032,
   value: "BREAD,IRISH SODA,PREP FROM RECIPE"
 },
 {
   data: 18033,
   value: "BREAD,ITALIAN"
 },
 {
   data: 18035,
   value: "BREAD,MULTI-GRAIN (INCLUDES WHOLE-GRAIN)"
 },
 {
   data: 18036,
   value: "BREAD,MULTI-GRAIN,TSTD (INCLUDES WHOLE-GRAIN)"
 },
 {
   data: 18037,
   value: "BREAD,OAT BRAN"
 },
 {
   data: 18038,
   value: "BREAD,OAT BRAN,TOASTED"
 },
 {
   data: 18039,
   value: "BREAD,OATMEAL"
 },
 {
   data: 18040,
   value: "BREAD,OATMEAL,TOASTED"
 },
 {
   data: 18041,
   value: "BREAD,PITA,WHITE,ENRICHED"
 },
 {
   data: 18042,
   value: "BREAD,PITA,WHOLE-WHEAT"
 },
 {
   data: 18043,
   value: "BREAD,PROT (INCL GLUTEN)"
 },
 {
   data: 18044,
   value: "BREAD,PUMPERNICKEL"
 },
 {
   data: 18045,
   value: "BREAD,PUMPERNICKEL,TSTD"
 },
 {
   data: 18047,
   value: "BREAD,RAISIN,ENRICHED"
 },
 {
   data: 18048,
   value: "BREAD,RAISIN,TSTD,ENR"
 },
 {
   data: 18049,
   value: "BREAD,RED-CAL,OAT BRAN"
 },
 {
   data: 18050,
   value: "BREAD,RED-CAL,OAT BRAN,TSTD"
 },
 {
   data: 18051,
   value: "BREAD,RED-CAL,OATMEAL"
 },
 {
   data: 18053,
   value: "BREAD,REDUCED-CALORIE,RYE"
 },
 {
   data: 18055,
   value: "BREAD,RED-CAL,WHEAT"
 },
 {
   data: 18057,
   value: "BREAD,RED-CAL,WHITE"
 },
 {
   data: 18059,
   value: "BREAD,RICE BRAN"
 },
 {
   data: 18060,
   value: "BREAD,RYE"
 },
 {
   data: 18061,
   value: "BREAD,RYE,TOASTED"
 },
 {
   data: 18064,
   value: "BREAD,WHEAT"
 },
 {
   data: 18065,
   value: "BREAD, WHEAT, TSTD"
 },
 {
   data: 18066,
   value: "BREAD,WHEAT BRAN"
 },
 {
   data: 18068,
   value: "BREAD,WHEAT GERM"
 },
 {
   data: 18069,
   value: "BREAD,WHITE,COMMLY PREP (INCL SOFT BREAD CRUMBS)"
 },
 {
   data: 18070,
   value: "BREAD,WHITE,COMMLY PREP,TSTD"
 },
 {
   data: 18071,
   value: "BREAD,WHITE,PREP FROM RECIPE,MADE W/NONFAT DRY MILK"
 },
 {
   data: 18073,
   value: "BREAD,WHITE,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18075,
   value: "BREAD,WHOLE-WHEAT,COMM. PREPARED"
 },
 {
   data: 18076,
   value: "BREAD, WHOLE-WHEAT, COMMER PREP, TOASTED"
 },
 {
   data: 18077,
   value: "BREAD,WHOLE-WHEAT,PREP FROM RECIPE"
 },
 {
   data: 18078,
   value: "BREAD,WHOLE-WHEAT,PREP FROM RECIPE,TSTD"
 },
 {
   data: 18079,
   value: "BREAD CRUMBS,DRY,GRATED,PLN"
 },
 {
   data: 18080,
   value: "BREAD STICKS,PLAIN"
 },
 {
   data: 18081,
   value: "BREAD STUFFING,BREAD,DRY MIX"
 },
 {
   data: 18082,
   value: "BREAD STUFFING,BREAD,DRY MIX,PREP"
 },
 {
   data: 18084,
   value: "BREAD STUFFING,CORNBREAD,DRY MIX"
 },
 {
   data: 18085,
   value: "BREAD STUFFING,CORNBREAD,DRY MIX,PREP"
 },
 {
   data: 18086,
   value: "CAKE,ANGELFOOD,COMMLY PREP"
 },
 {
   data: 18087,
   value: "CAKE MIX,ANGELFOOD,DRY"
 },
 {
   data: 18088,
   value: "CAKE,ANGELFOOD,DRY MIX,PREP"
 },
 {
   data: 18090,
   value: "CAKE,BOSTON CRM PIE,COMMLY PREP"
 },
 {
   data: 18092,
   value: "CAKE,CARROT,DRY MIX,PUDDING-TYPE"
 },
 {
   data: 18095,
   value: "CAKE,CHERRY FUDGE W/CHOC FRSTNG"
 },
 {
   data: 18096,
   value: "CAKE,CHOC,COMMLY PREP W/ CHOC FRSTNG,IN-STORE BAKERY"
 },
 {
   data: 18097,
   value: "CAKE,CHOC,DRY MIX,PUDDING-TYPE"
 },
 {
   data: 18099,
   value: "CAKE,CHOC,DRY MIX,REG"
 },
 {
   data: 18101,
   value: "CAKE,CHOC,PREP FROM RECIPE WO/FRSTNG"
 },
 {
   data: 18102,
   value: "CAKE,WHITE,PREP FROM RECIPE W/COCNT FRSTNG"
 },
 {
   data: 18103,
   value: "COFFEECAKE,CHEESE"
 },
 {
   data: 18104,
   value: "COFFEECAKE,CINN W/CRUMB TOPPING,COMMLY PREP,ENR"
 },
 {
   data: 18105,
   value: "COFFEECAKE,CREME-FILLED W/CHOC FRSTNG"
 },
 {
   data: 18106,
   value: "COFFEECAKE,FRUIT"
 },
 {
   data: 18107,
   value: "COFFEECAKE,CINN W/CRUMB TOPPING,DRY MIX"
 },
 {
   data: 18108,
   value: "COFFEECAKE,CINN W/CRUMB TOPPING,DRY MIX,PREP"
 },
 {
   data: 18110,
   value: "CAKE,FRUITCAKE,COMMLY PREP"
 },
 {
   data: 18112,
   value: "CAKE MIX,PUDD,DRY,GERMAN CHOC"
 },
 {
   data: 18114,
   value: "CAKE,GINGERBREAD,DRY MIX"
 },
 {
   data: 18116,
   value: "CAKE,GINGERBREAD,PREP FROM RECIPE"
 },
 {
   data: 18117,
   value: "CAKE,MARBLE,DRY MIX,PUDDING-TYPE"
 },
 {
   data: 18119,
   value: "CAKE,PNAPPL UPSIDE-DOWN,PREP FROM RECIPE"
 },
 {
   data: 18120,
   value: "CAKE,POUND,COMMLY PREP,BUTTER"
 },
 {
   data: 18121,
   value: "CAKE,POUND,COMMLY PREP,OTHER THAN ALL BUTTER,ENR"
 },
 {
   data: 18126,
   value: "CAKE,SHORTCAKE,BISCUIT-TYPE,PREP FROM RECIPE"
 },
 {
   data: 18127,
   value: "CAKE,SNACK CAKES,CREME-FILLED,CHOC W/ FRSTNG"
 },
 {
   data: 18128,
   value: "CAKE,SNACK CAKES,CREME-FILLED,SPONGE"
 },
 {
   data: 18131,
   value: "CAKE,WHITE,DRY MIX,SPL DIETARY (INCL LEMON-FLAVORED)"
 },
 {
   data: 18133,
   value: "CAKE,SPONGE,COMMLY PREP"
 },
 {
   data: 18134,
   value: "CAKE,SPONGE,PREP FROM RECIPE"
 },
 {
   data: 18135,
   value: "CAKE,WHITE,DRY MIX,PUDDING-TYPE,ENR"
 },
 {
   data: 18137,
   value: "CAKE MIX,DRY,WHITE,REG"
 },
 {
   data: 18139,
   value: "CAKE,WHITE,PREP FROM RECIPE WO/FRSTNG"
 },
 {
   data: 18140,
   value: "CAKE,YEL,COMMLY PREP,W/ CHOC FRSTNG,IN-STORE BAKERY"
 },
 {
   data: 18141,
   value: "CAKE,YEL,COMMLY PREP,W/VANILLA FRSTNG"
 },
 {
   data: 18142,
   value: "CAKE,YEL,DRY MIX,PUDDING-TYPE"
 },
 {
   data: 18144,
   value: "CAKE,YEL,DRY MIX,REG,ENR"
 },
 {
   data: 18146,
   value: "CAKE,YEL,PREP FROM RECIPE WO/FRSTNG"
 },
 {
   data: 18147,
   value: "CHEESECAKE COMMLY PREP"
 },
 {
   data: 18148,
   value: "CHEESECAKE PREP FROM MIX,NO-BAKE TYPE"
 },
 {
   data: 18150,
   value: "COOKIES,ANIMAL CRACKERS (INCL ARROWROOT,TEA BISCUITS,)"
 },
 {
   data: 18151,
   value: "COOKIES,BROWNIES,COMMLY PREP"
 },
 {
   data: 18152,
   value: "COOKIES,BROWNIES,DRY MIX,REG"
 },
 {
   data: 18154,
   value: "COOKIES,BROWNIES,PREP FROM RECIPE"
 },
 {
   data: 18155,
   value: "COOKIES,BUTTER,COMMLY PREP,ENR"
 },
 {
   data: 18156,
   value: "COOKIES,FUDGE,CAKE-TYPE (INCL TROLLEY CAKES)"
 },
 {
   data: 18157,
   value: "COOKIES,CHOCOLATE WAFERS"
 },
 {
   data: 18158,
   value: "COOKIES,CHOC CHIP,COMMLY PREP,REG,LOWER FAT"
 },
 {
   data: 18159,
   value: "COOKIES,CHOC CHIP,COMMLY PREP,REG,HIGHER FAT,ENR"
 },
 {
   data: 18160,
   value: "COOKIES,CHOC CHIP,COMMLY PREP,SOFT-TYPE"
 },
 {
   data: 18161,
   value: "COOKIES,CHOC CHIP,DRY MIX"
 },
 {
   data: 18163,
   value: "COOKIES,CHOC CHIP,REFR DOUGH"
 },
 {
   data: 18164,
   value: "COOKIES,CHOC CHIP,REFR DOUGH,BKD"
 },
 {
   data: 18165,
   value: "COOKIES,CHOC CHIP,PREP FROM RECIPE,MADE W/MARGARINE"
 },
 {
   data: 18166,
   value: "COOKIES,CHOC SNDWCH,W/CREME FILLING,REG"
 },
 {
   data: 18167,
   value: "COOKIES,CHOC SNDWCH,W/CREME FILLING,REG,CHOCOLATE-COATED"
 },
 {
   data: 18168,
   value: "COOKIES,CHOC SNDWCH,W/EX CREME FILLING"
 },
 {
   data: 18169,
   value: "COOKIES,COCNT MACAROONS,PREP FROM RECIPE"
 },
 {
   data: 18170,
   value: "COOKIES,FIG BARS"
 },
 {
   data: 18171,
   value: "COOKIES,FORTUNE"
 },
 {
   data: 18172,
   value: "COOKIES,GINGERSNAPS"
 },
 {
   data: 18173,
   value: "COOKIES,GRAHAM CRACKERS,PLN OR HONEY (INCL CINN)"
 },
 {
   data: 18174,
   value: "COOKIES,GRAHAM CRACKERS,CHOCOLATE-COATED"
 },
 {
   data: 18175,
   value: "COOKIES,LADYFINGERS,W/LEMON JUC&RIND"
 },
 {
   data: 18176,
   value: "COOKIES,MARSHMLLW,CHOCOLATE-COATED (INCL MARSHMLLW PIES)"
 },
 {
   data: 18177,
   value: "COOKIES,MOLASSES"
 },
 {
   data: 18178,
   value: "COOKIES,OATMEAL,COMMLY PREP,REG"
 },
 {
   data: 18179,
   value: "COOKIES,OATMEAL,COMMLY PREP,SOFT-TYPE"
 },
 {
   data: 18180,
   value: "COOKIES,OATMEAL,DRY MIX"
 },
 {
   data: 18182,
   value: "COOKIES,OATMEAL,REFR DOUGH"
 },
 {
   data: 18183,
   value: "COOKIES,OATMEAL,REFR DOUGH,BKD"
 },
 {
   data: 18184,
   value: "COOKIES,OATMEAL,PREP FROM RECIPE,W/RAISINS"
 },
 {
   data: 18185,
   value: "COOKIES,PNUT BUTTER,COMMLY PREP,REG"
 },
 {
   data: 18186,
   value: "COOKIES,PNUT BUTTER,COMMLY PREP,SOFT-TYPE"
 },
 {
   data: 18187,
   value: "COOKIES,PNUT BUTTER,REFR DOUGH"
 },
 {
   data: 18188,
   value: "COOKIES,PNUT BUTTER,REFR DOUGH,BKD"
 },
 {
   data: 18189,
   value: "COOKIES,PNUT BUTTER,PREP FROM RECIPE"
 },
 {
   data: 18190,
   value: "COOKIES,PNUT BUTTER SNDWCH,REG"
 },
 {
   data: 18191,
   value: "COOKIES,RAISIN,SOFT-TYPE"
 },
 {
   data: 18192,
   value: "COOKIES,SHORTBREAD,COMMLY PREP,PLN"
 },
 {
   data: 18193,
   value: "COOKIES,SHORTBREAD,COMMLY PREP,PECAN"
 },
 {
   data: 18196,
   value: "COOKIES,BROWNIES,DRY MIX,SPL DIETARY"
 },
 {
   data: 18197,
   value: "COOKIES,BROWNIES,DRY MIX,SPL DIETARY,PREP"
 },
 {
   data: 18198,
   value: "COOKIES,CHOC CHIP,COMMLY PREP,SPL DIETARY"
 },
 {
   data: 18199,
   value: "COOKIES,CHOC SNDWCH,W/CREME FILLING,SPL DIETARY"
 },
 {
   data: 18200,
   value: "COOKIES,OATMEAL,COMMLY PREP,SPL DIETARY"
 },
 {
   data: 18201,
   value: "COOKIES,PNUT BUTTER SNDWCH,SPL DIETARY"
 },
 {
   data: 18202,
   value: "COOKIES,SUGAR WAFERS W/CREME FILLING,SPL DIETARY"
 },
 {
   data: 18203,
   value: "COOKIES,SUGAR,COMMLY PREP,SPL DIETARY"
 },
 {
   data: 18204,
   value: "COOKIES,SUGAR,COMMLY PREP,REG (INCL VANILLA)"
 },
 {
   data: 18205,
   value: "COOKIES,SUGAR,REFR DOUGH"
 },
 {
   data: 18206,
   value: "COOKIES,SUGAR,REFR DOUGH,BKD"
 },
 {
   data: 18208,
   value: "COOKIES,SUGAR,PREP FROM RECIPE,MADE W/MARGARINE"
 },
 {
   data: 18209,
   value: "COOKIES,SUGAR WAFERS W/CREME FILLING,REG"
 },
 {
   data: 18210,
   value: "COOKIES,VANILLA SNDWCH W/CREME FILLING"
 },
 {
   data: 18211,
   value: "PUFF PASTRY,FRZ,RTB,BKD"
 },
 {
   data: 18212,
   value: "COOKIES,VANILLA WAFERS,LOWER FAT"
 },
 {
   data: 18213,
   value: "COOKIES,VANILLA WAFERS,HIGHER FAT"
 },
 {
   data: 18214,
   value: "CRACKERS,CHEESE,REGULAR"
 },
 {
   data: 18215,
   value: "CRACKERS,CHS,SANDWICH-TYPE W/PNUT BUTTER FILLING"
 },
 {
   data: 18216,
   value: "CRACKERS,CRISPBREAD,RYE"
 },
 {
   data: 18217,
   value: "CRACKERS,MATZO,PLAIN"
 },
 {
   data: 18218,
   value: "CRACKERS,MATZO,EGG"
 },
 {
   data: 18219,
   value: "CRACKERS,MATZO,WHOLE-WHEAT"
 },
 {
   data: 18220,
   value: "CRACKERS,MELBA TOAST,PLN"
 },
 {
   data: 18221,
   value: "CRACKERS,MELBA TOAST,RYE (INCL PUMPERNICKEL)"
 },
 {
   data: 18222,
   value: "CRACKERS,MELBA TOAST,WHEAT"
 },
 {
   data: 18223,
   value: "CRACKERS,MILK"
 },
 {
   data: 18224,
   value: "CRACKERS,RUSK TOAST"
 },
 {
   data: 18225,
   value: "CRACKERS,RYE,SANDWICH-TYPE W/CHS FILLING"
 },
 {
   data: 18226,
   value: "CRACKERS,RYE,WAFERS,PLAIN"
 },
 {
   data: 18227,
   value: "CRACKERS,RYE,WAFERS,SEASONED"
 },
 {
   data: 18228,
   value: "CRACKERS,SALTINES (INCL OYSTER,SODA,SOUP)"
 },
 {
   data: 18229,
   value: "CRACKERS,STD SNACK-TYPE,REG"
 },
 {
   data: 18230,
   value: "CRACKERS,STD SNACK-TYPE,SNDWCH,W/CHS FILLING"
 },
 {
   data: 18231,
   value: "CRACKERS,STD SNACK-TYPE,SNDWCH,W/PNUT BUTTER FILLING"
 },
 {
   data: 18232,
   value: "CRACKERS,WHEAT,REGULAR"
 },
 {
   data: 18233,
   value: "CRACKERS,WHEAT,SNDWCH,W/CHS FILLING"
 },
 {
   data: 18234,
   value: "CRACKERS,WHEAT,SNDWCH,W/PNUT BUTTER FILLING"
 },
 {
   data: 18235,
   value: "CRACKERS,WHOLE-WHEAT"
 },
 {
   data: 18236,
   value: "CRACKER MEAL"
 },
 {
   data: 18237,
   value: "CREAM PUFFS,PREP FROM RECIPE,SHELL (INCL ECLAIR)"
 },
 {
   data: 18238,
   value: "CREAM PUFFS,PREP FROM RECIPE,SHELL,W/CUSTARD FILLING"
 },
 {
   data: 18239,
   value: "CROISSANTS,BUTTER"
 },
 {
   data: 18240,
   value: "CROISSANTS,APPLE"
 },
 {
   data: 18241,
   value: "CROISSANTS,CHEESE"
 },
 {
   data: 18242,
   value: "CROUTONS,PLAIN"
 },
 {
   data: 18243,
   value: "CROUTONS,SEASONED"
 },
 {
   data: 18244,
   value: "DANISH PASTRY,CINN,ENR"
 },
 {
   data: 18245,
   value: "DANISH PASTRY,CHEESE"
 },
 {
   data: 18246,
   value: "DANISH PASTRY,FRUIT,ENR"
 },
 {
   data: 18247,
   value: "DANISH PASTRY,NUT (INCL ALMOND,RAISIN NUT,CINN NUT)"
 },
 {
   data: 18248,
   value: "DOUGHNUTS,CAKE-TYPE,PLN (INCLUDES UNSUGARED,OLD-FASHIONED)"
 },
 {
   data: 18249,
   value: "DOUGHNUTS,CAKE-TYPE,PLN,CHOCOLATE-COATED OR FRSTD"
 },
 {
   data: 18250,
   value: "DOUGHNUTS,CAKE-TYPE,PLN,SUGARED OR GLAZED"
 },
 {
   data: 18251,
   value: "DOUGHNUTS,CAKE-TYPE,CHOC,SUGARED OR GLAZED"
 },
 {
   data: 18252,
   value: "DOUGHNUTS,CAKE-TYPE,WHEAT,SUGARED OR GLAZED"
 },
 {
   data: 18253,
   value: "DOUGHNUTS,FRENCH CRULLERS,GLAZED"
 },
 {
   data: 18254,
   value: "DOUGHNUTS,YEAST-LEAVENED,W/CREME FILLING"
 },
 {
   data: 18255,
   value: "DOUGHNUTS, YEAST-LEAVENED, GLAZED, ENRICHED (INC HONEY BUNS)"
 },
 {
   data: 18256,
   value: "DOUGHNUTS,YEAST-LEAVENED,W/JELLY FILLING"
 },
 {
   data: 18257,
   value: "ECLAIRS,CUSTARD-FILLED W/CHOC GLAZE,PREP FROM RECIPE"
 },
 {
   data: 18258,
   value: "ENGLISH MUFFIN, PLN,ENCHED.W/CA PROP (INCLD SOURDOUGH)"
 },
 {
   data: 18259,
   value: "ENGLISH,MUFFIN,PLN,TSTD,ENR,W/CA PROP(INCL SOURDOUGH)"
 },
 {
   data: 18260,
   value: "ENGLISH MUFFINS,MIXED-GRAIN (INCL GRANOLA)"
 },
 {
   data: 18261,
   value: "ENGLISH MUFFINS,MIXED-GRAIN,TSTD (INCL GRANOLA)"
 },
 {
   data: 18262,
   value: "ENGLISH MUFFINS,RAISIN-CINNAMON (INCLUDES APPLE-CINNAMON)"
 },
 {
   data: 18263,
   value: "ENGLISH MUFFINS,RAISIN-CINNAMON,TSTD (INCL APPLE-CINNAMON)"
 },
 {
   data: 18264,
   value: "ENGLISH MUFFINS,WHEAT"
 },
 {
   data: 18265,
   value: "ENGLISH MUFFINS,WHEAT,TSTD"
 },
 {
   data: 18266,
   value: "ENGLISH MUFFINS,WHOLE-WHEAT"
 },
 {
   data: 18267,
   value: "ENGLISH MUFFINS,WHOLE-WHEAT,TSTD"
 },
 {
   data: 18268,
   value: "FRENCH TOAST,FRZ,RTH"
 },
 {
   data: 18269,
   value: "FRENCH TOAST,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18270,
   value: "HUSH PUPPIES,PREP FROM RECIPE"
 },
 {
   data: 18271,
   value: "ICE CRM CONES,CAKE OR WAFER-TYPE"
 },
 {
   data: 18272,
   value: "ICE CRM CONES,SUGAR,ROLLED-TYPE"
 },
 {
   data: 18273,
   value: "MUFFINS,PLN,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18274,
   value: "MUFFINS,BLUEBERRY,COMMLY PREP (INCLUDES MINI-MUFFINS)"
 },
 {
   data: 18275,
   value: "MUFFINS,BLUEBERRY,DRY MIX"
 },
 {
   data: 18277,
   value: "MUFFINS,BLUEBERRY,TOASTER-TYPE"
 },
 {
   data: 18278,
   value: "MUFFINS,BLUEBERRY,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18279,
   value: "MUFFINS,CORN,COMMLY PREP"
 },
 {
   data: 18280,
   value: "MUFFINS,CORN,DRY MIX,PREP"
 },
 {
   data: 18281,
   value: "MUFFINS,CORN,TOASTER-TYPE"
 },
 {
   data: 18282,
   value: "MUFFINS,CORN,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18283,
   value: "MUFFINS,OAT BRAN"
 },
 {
   data: 18284,
   value: "MUFFINS,WHEAT BRAN,DRY MIX"
 },
 {
   data: 18286,
   value: "MUFFINS,WHEAT BRAN,TOASTER-TYPE W/RAISINS"
 },
 {
   data: 18288,
   value: "PANCAKES PLN,FRZ,RTH (INCLUDES BUTTERMILK)"
 },
 {
   data: 18289,
   value: "PANCAKES,PLN,DRY MIX,COMPLETE (INCL BTTRMLK)"
 },
 {
   data: 18290,
   value: "PANCAKES,PLN,DRY MIX,COMPLETE,PREP"
 },
 {
   data: 18291,
   value: "PANCAKES,PLN,DRY MIX,INCOMPLETE (INCL BTTRMLK)"
 },
 {
   data: 18292,
   value: "PANCAKES,PLN,DRY MIX,INCOMPLETE,PREP"
 },
 {
   data: 18293,
   value: "PANCAKES,PLN,PREP FROM RECIPE"
 },
 {
   data: 18294,
   value: "PANCAKES,BLUEBERRY,PREP FROM RECIPE"
 },
 {
   data: 18295,
   value: "PANCAKES,BUCKWHEAT,DRY MIX,INCOMPLETE"
 },
 {
   data: 18297,
   value: "PANCAKES,SPL DIETARY,DRY MIX"
 },
 {
   data: 18299,
   value: "PANCAKES,WHOLE-WHEAT,DRY MIX,INCOMPLETE"
 },
 {
   data: 18300,
   value: "PANCAKES,WHOLE-WHEAT,DRY MIX,INCOMPLETE,PREP"
 },
 {
   data: 18301,
   value: "PIE,APPL,COMMLY PREP,ENR FLR"
 },
 {
   data: 18302,
   value: "PIE,APPL,PREP FROM RECIPE"
 },
 {
   data: 18303,
   value: "PIE,BANANA CRM,PREP FROM MIX,NO-BAKE TYPE"
 },
 {
   data: 18304,
   value: "PIE,BANANA CRM,PREP FROM RECIPE"
 },
 {
   data: 18305,
   value: "PIE,BLUEBERRY,COMMLY PREP"
 },
 {
   data: 18306,
   value: "PIE,BLUEBERRY,PREP FROM RECIPE"
 },
 {
   data: 18308,
   value: "PIE,CHERRY,COMMLY PREP"
 },
 {
   data: 18309,
   value: "PIE,CHERRY,PREP FROM RECIPE"
 },
 {
   data: 18310,
   value: "PIE,CHOC CREME,COMMLY PREP"
 },
 {
   data: 18312,
   value: "PIE,CHOC MOUSSE,PREP FROM MIX,NO-BAKE TYPE"
 },
 {
   data: 18313,
   value: "PIE,COCNT CREME,COMMLY PREP"
 },
 {
   data: 18314,
   value: "PIE,COCNT CRM,PREP FROM MIX,NO-BAKE TYPE"
 },
 {
   data: 18316,
   value: "PIE,COCNT CUSTARD,COMMLY PREP"
 },
 {
   data: 18317,
   value: "PIE,EGG CUSTARD,COMMLY PREP"
 },
 {
   data: 18319,
   value: "PIE,FRIED PIES,FRUIT"
 },
 {
   data: 18320,
   value: "PIE,LEMON MERINGUE,COMMLY PREP"
 },
 {
   data: 18321,
   value: "PIE,LEMON MERINGUE,PREP FROM RECIPE"
 },
 {
   data: 18322,
   value: "PIE,MINCE,PREP FROM RECIPE"
 },
 {
   data: 18323,
   value: "PIE,PEACH"
 },
 {
   data: 18324,
   value: "PIE,PECAN,COMMLY PREP"
 },
 {
   data: 18325,
   value: "PIE,PECAN,PREP FROM RECIPE"
 },
 {
   data: 18326,
   value: "PIE,PUMPKIN,COMMLY PREP"
 },
 {
   data: 18327,
   value: "PIE,PUMPKIN,PREP FROM RECIPE"
 },
 {
   data: 18328,
   value: "PIE,VANILLA CRM,PREP FROM RECIPE"
 },
 {
   data: 18330,
   value: "PIE CRUST,COOKIE-TYPE,PREP FROM RECIPE,GRAHAM CRACKER,BKD"
 },
 {
   data: 18332,
   value: "PIE CRUST,STANDARD-TYPE,DRY MIX"
 },
 {
   data: 18333,
   value: "PIE CRUST,STANDARD-TYPE,DRY MIX,PREP,BKD"
 },
 {
   data: 18334,
   value: "PIE CRUST,STANDARD-TYPE,FRZ,RTB,ENR"
 },
 {
   data: 18335,
   value: "PIE CRUST,STANDARD-TYPE,FRZ,RTB,ENR,BKD"
 },
 {
   data: 18336,
   value: "PIE CRUST,STANDARD-TYPE,PREP FROM RECIPE,BKD"
 },
 {
   data: 18337,
   value: "PUFF PASTRY,FRZ,RTB"
 },
 {
   data: 18338,
   value: "PHYLLO DOUGH"
 },
 {
   data: 18339,
   value: "POPOVERS,DRY MIX,ENRICHED"
 },
 {
   data: 18342,
   value: "ROLLS, DINNER, PLN,COMM PREPARED (INC BROWN -N- SERVE)"
 },
 {
   data: 18344,
   value: "ROLLS,DINNER,EGG"
 },
 {
   data: 18345,
   value: "ROLLS,DINNER,OAT BRAN"
 },
 {
   data: 18346,
   value: "ROLLS,DINNER,RYE"
 },
 {
   data: 18347,
   value: "ROLLS,DINNER,WHEAT"
 },
 {
   data: 18348,
   value: "ROLLS,DINNER,WHOLE-WHEAT"
 },
 {
   data: 18349,
   value: "ROLLS,FRENCH"
 },
 {
   data: 18350,
   value: "ROLLS,HAMBURGER OR HOTDOG,PLN"
 },
 {
   data: 18351,
   value: "ROLLS,HAMBURGER OR HOTDOG,MIXED-GRAIN"
 },
 {
   data: 18352,
   value: "ROLLS,HAMBURGER OR HOTDOG,RED-CAL"
 },
 {
   data: 18353,
   value: "ROLLS,HARD (INCL KAISER)"
 },
 {
   data: 18354,
   value: "STRUDEL,APPLE"
 },
 {
   data: 18355,
   value: "SWEET ROLLS,CHEESE"
 },
 {
   data: 18356,
   value: "SWEET ROLLS,CINN,COMMLY PREP W/RAISINS"
 },
 {
   data: 18357,
   value: "SWEET ROLLS,CINN,REFR DOUGH W/FRSTNG"
 },
 {
   data: 18358,
   value: "SWEET ROLLS,CINN,REFR DOUGH W/FRSTNG,BKD"
 },
 {
   data: 18360,
   value: "TACO SHELLS, BAKED"
 },
 {
   data: 18361,
   value: "TOASTER PASTRIES,BROWN-SUGAR-CINNAMON"
 },
 {
   data: 18362,
   value: "TOASTER PASTRIES,FRUIT"
 },
 {
   data: 18363,
   value: "TORTILLAS,RTB OR -FRY,CORN"
 },
 {
   data: 18364,
   value: "TORTILLAS,RTB OR -FRY,FLR,REFR"
 },
 {
   data: 18365,
   value: "WAFFLES,PLN,FRZ,RTH"
 },
 {
   data: 18367,
   value: "WAFFLES,PLN,PREP FROM RECIPE"
 },
 {
   data: 18368,
   value: "WONTON WRAPPERS (INCL EGG ROLL WRAPPERS)"
 },
 {
   data: 18369,
   value: "LEAVENING AGENTS,BAKING PDR,DOUBLE-ACTING,NA AL SULFATE"
 },
 {
   data: 18370,
   value: "LEAVENING AGENTS,BAKING PDR,DOUBLE-ACTING,STRAIGHT PO4"
 },
 {
   data: 18371,
   value: "LEAVENING AGENTS,BAKING PDR,LOW-SODIUM"
 },
 {
   data: 18372,
   value: "LEAVENING AGENTS,BAKING SODA"
 },
 {
   data: 18373,
   value: "LEAVENING AGENTS,CRM OF TARTAR"
 },
 {
   data: 18374,
   value: "LEAVENING AGENTS,YEAST,BAKER'S,COMPRESSED"
 },
 {
   data: 18375,
   value: "LEAVENING AGENTS,YEAST,BAKER'S,ACTIVE DRY"
 },
 {
   data: 18376,
   value: "BREAD CRUMBS,DRY,GRATED,SEASONED"
 },
 {
   data: 18377,
   value: "COOKIES,OATMEAL,PREP FROM RECIPE,WO/RAISINS"
 },
 {
   data: 18378,
   value: "COOKIES,CHOC CHIP,PREP FROM RECIPE,MADE W/BUTTER"
 },
 {
   data: 18383,
   value: "BREAD,PROT,TSTD (INCL GLUTEN)"
 },
 {
   data: 18384,
   value: "BREAD,RICE BRAN,TOASTED"
 },
 {
   data: 18385,
   value: "BREAD,WHEAT GERM,TOASTED"
 },
 {
   data: 18386,
   value: "MUFFINS,BLUEBERRY,TOASTER-TYPE,TSTD"
 },
 {
   data: 18388,
   value: "MUFFINS,WHEAT BRAN,TOASTER-TYPE W/RAISINS,TSTD"
 },
 {
   data: 18390,
   value: "PANCAKES,BTTRMLK,PREP FROM RECIPE"
 },
 {
   data: 18396,
   value: "ROLLS,DINNER,PLN,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK"
 },
 {
   data: 18398,
   value: "PIE CRUST,COOKIE-TYPE,PREP FROM RECIPE,CHOC WAFER,CHILLED"
 },
 {
   data: 18399,
   value: "PIE CRUST,COOKIE-TYPE,PREP FR RECIPE,GRAHAM CRACKER,CHILLED"
 },
 {
   data: 18400,
   value: "CRACKERS,MATZO,EGG&ONION"
 },
 {
   data: 18401,
   value: "PIE CRUST,COOKIE-TYPE,PREP FROM RECIPE,VANILLA WAFER,CHILLED"
 },
 {
   data: 18402,
   value: "PIE CRUST,STANDARD-TYPE,PREP FROM RECIPE,UNBAKED"
 },
 {
   data: 18403,
   value: "WAFFLES,PLN,FRZ,READY -TO-HEAT,TSTD"
 },
 {
   data: 18406,
   value: "BAGELS,PLN,ENR,WO/CA PROP (INCL ONION,POPPY,SESAME)"
 },
 {
   data: 18407,
   value: "BAGELS,PLN,UNENR,W/CA PROP (INCL ONION,POPPY,SESAME)"
 },
 {
   data: 18408,
   value: "BAGELS,PLN,UNENR,WO/CA PROP (INCL ONION,POPPY,SESAME)"
 },
 {
   data: 18412,
   value: "BREAD,CORNBREAD,DRY MIX,UNENR (INCL CORN MUFFIN MIX)"
 },
 {
   data: 18413,
   value: "BREAD,PITA,WHITE,UNENR"
 },
 {
   data: 18414,
   value: "BREAD,RAISIN,UNENRICHED"
 },
 {
   data: 18416,
   value: "BREAD,WHITE,COMMLY PREP,LO NA NO SALT"
 },
 {
   data: 18417,
   value: "COFFEECAKE,CINN W/CRUMB TOPPING,COMMLY PREP,UNENR"
 },
 {
   data: 18418,
   value: "CAKE,POUND,COMMLY PREP,OTHER THAN ALL BUTTER,UNENR"
 },
 {
   data: 18419,
   value: "CAKE,WHITE,DRY MIX,PUDDING-TYPE,UNENR"
 },
 {
   data: 18420,
   value: "CAKE,YEL,DRY MIX,REG,UNENR"
 },
 {
   data: 18421,
   value: "COOKIES,BUTTER,COMMLY PREP,UNENR"
 },
 {
   data: 18422,
   value: "COOKIES,CHOC CHIP,COMMLY PREP,REG,HIGHER FAT,UNENR"
 },
 {
   data: 18423,
   value: "COOKIES,LADYFINGERS,WO/LEMON JUC&RIND"
 },
 {
   data: 18424,
   value: "CRACKERS,MELBA TOAST,PLN,WO/SALT"
 },
 {
   data: 18425,
   value: "CRACKERS,SALTINES,LO SALT (INCL OYSTER,SODA,SOUP)"
 },
 {
   data: 18426,
   value: "CRACKERS,SALTINES,UNSALTED TOPS (INCL OYSTER,SODA,SOUP)"
 },
 {
   data: 18427,
   value: "CRACKERS,STD SNACK-TYPE,REG,LO SALT"
 },
 {
   data: 18428,
   value: "CRACKERS,WHEAT,LOW SALT"
 },
 {
   data: 18429,
   value: "CRACKERS,WHOLE-WHEAT,LO SALT"
 },
 {
   data: 18430,
   value: "DANISH PASTRY,CINN,UNENR"
 },
 {
   data: 18431,
   value: "DANISH PASTRY,FRUIT,UNENR (INCL APPL,CINN,RAISIN,STRAWBERRY)"
 },
 {
   data: 18432,
   value: "BREAD,WHITE,COMMLY PREP,TSTD,LO NA NO SALT"
 },
 {
   data: 18433,
   value: "DANISH PASTRY,LEMON,UNENR"
 },
 {
   data: 18434,
   value: "CRACKERS,CHS,LO NA"
 },
 {
   data: 18435,
   value: "DANISH PASTRY,RASPBERRY,UNENR"
 },
 {
   data: 18436,
   value: "DOUGHNUTS,YEAST-LEAVENED,GLAZED,UNENR (INCL HONEY BUNS)"
 },
 {
   data: 18437,
   value: "ENGLISH MUFFINS,PLN,ENR,WO/CA PROP (INCL SOURDOUGH)"
 },
 {
   data: 18438,
   value: "ENGLISH MUFFINS,PLN,UNENR,W/CA PROP (INCL SOURDOUGH)"
 },
 {
   data: 18439,
   value: "ENGLISH MUFFINS,PLN,UNENR,WO/CA PROP (INCL SOURDOUGH)"
 },
 {
   data: 18443,
   value: "PIE,APPL,COMMLY PREP,UNENR FLR"
 },
 {
   data: 18444,
   value: "PIE,FRIED PIES,CHERRY"
 },
 {
   data: 18445,
   value: "PIE,FRIED PIES,LEMON"
 },
 {
   data: 18446,
   value: "PIE CRUST,STANDARD-TYPE,FRZ,RTB,UNENR"
 },
 {
   data: 18447,
   value: "POPOVERS,DRY MIX,UNENR"
 },
 {
   data: 18448,
   value: "TACO SHELLS,BKD,WO/ SALT"
 },
 {
   data: 18449,
   value: "TORTILLAS,RTB OR -FRY,CORN,WO/ SALT"
 },
 {
   data: 18450,
   value: "TORTILLAS,RTB OR -FRY,FLR,WO/ CA"
 },
 {
   data: 18451,
   value: "CAKE,POUND,COMMLY PREP,FAT-FREE"
 },
 {
   data: 18452,
   value: "CAKE,SNACK CAKES,CUPCAKES,CHOC,W/FRSTNG,LOW-FAT"
 },
 {
   data: 18453,
   value: "CAKE,YELLOW,DRY MIX,LIGHT"
 },
 {
   data: 18456,
   value: "COOKIES,OATMEAL,COMMLY PREP,FAT-FREE"
 },
 {
   data: 18457,
   value: "CRACKERS,SALTINES,FAT-FREE,LOW-SODIUM"
 },
 {
   data: 18459,
   value: "BREAKFAST TART,LOFAT"
 },
 {
   data: 18476,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,BLUEBERRY"
 },
 {
   data: 18477,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD BLUEBERRY"
 },
 {
   data: 18478,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,BRWN SUGAR CINN"
 },
 {
   data: 18479,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TRTS,FRSTD BR SGR CIN"
 },
 {
   data: 18481,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD CHERRY"
 },
 {
   data: 18482,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD CHOC FUDG"
 },
 {
   data: 18486,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD RASPBERRY"
 },
 {
   data: 18487,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,S'MORES"
 },
 {
   data: 18488,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,STRAWBERRY"
 },
 {
   data: 18489,
   value: "TOASTER PASTRIES,KELLOGG,KELLOG'S POP TARTS,FRSTD STRAWBERRY"
 },
 {
   data: 18490,
   value: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD WLD BERRY"
 },
 {
   data: 18494,
   value: "TSTR PSTRS,KELLOGG,KELLOGG'S LF POP TRTS,FRSTD BRWN SGR CINN"
 },
 {
   data: 18497,
   value: "TSTR PSTRS,KELLOGG,KELLOGG'S LF POP TARTS,FRSTD STRAWBERRY"
 },
 {
   data: 18499,
   value: "KELLOGG,KELLOGG'S EGGO,BTTRMLK PANCAKE"
 },
 {
   data: 18501,
   value: "KELLOGG,KELLOGG'S NUTRI-GRAIN CRL BARS,MXD BERRY"
 },
 {
   data: 18505,
   value: "KELLOGG'S,EGGO,WAFFLES,HOMESTYLE,LOFAT"
 },
 {
   data: 18506,
   value: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,LOFAT"
 },
 {
   data: 18507,
   value: "KELLOGG'S EGGO LOWFAT BLUEBERRY NUTRI - GRAIN WAFFLES"
 },
 {
   data: 18513,
   value: "ARCHWAY HOME STYLE COOKIES,SUGAR FREE OATMEAL"
 },
 {
   data: 18522,
   value: "ARCHWAY Home Style Cookies, Chocolate Chip Ice Box"
 },
 {
   data: 18524,
   value: "ARCHWAY Home Style Cookies, Coconut Macaroon"
 },
 {
   data: 18527,
   value: "ARCHWAY Home Style Cookies, Date Filled Oatmeal"
 },
 {
   data: 18528,
   value: "ARCHWAY Home Style Cookies, Dutch Cocoa"
 },
 {
   data: 18529,
   value: "ARCHWAY HOME STYLE COOKIES,FROSTY LEMON"
 },
 {
   data: 18532,
   value: "ARCHWAY Home Style Cookies, Iced Molasses"
 },
 {
   data: 18533,
   value: "ARCHWAY Home Style Cookies, Iced Oatmeal"
 },
 {
   data: 18535,
   value: "ARCHWAY Home Style Cookies, Molasses"
 },
 {
   data: 18537,
   value: "ARCHWAY Home Style Cookies, Oatmeal"
 },
 {
   data: 18538,
   value: "ARCHWAY Home Style Cookies, Oatmeal Raisin"
 },
 {
   data: 18539,
   value: "ARCHWAY Home Style Cookies, Old Fashioned Molasses"
 },
 {
   data: 18540,
   value: "ARCHWAY Home Style Cookies, Old Fashioned Windmill Cookies"
 },
 {
   data: 18541,
   value: "ARCHWAY HOME STYLE COOKIES,PNUT BUTTER"
 },
 {
   data: 18544,
   value: "ARCHWAY HOME STYLE COOKIES,RASPBERRY FILLED"
 },
 {
   data: 18547,
   value: "ARCHWAY Home Style Cookies, Strawberry Filled"
 },
 {
   data: 18562,
   value: "ARCHWAY Home Style Cookies, Reduced Fat Ginger Snaps"
 },
 {
   data: 18566,
   value: "ARTIFICIAL BLUEBERRY MUFFIN MIX,DRY"
 },
 {
   data: 18567,
   value: "KRAFT,STOVE TOP STUFFING MIX CHICKEN FLAVOR"
 },
 {
   data: 18603,
   value: "GEORGE WESTON BAKER,BROWNBERRY SAGE & ONION STUFFING MIX,DRY"
 },
 {
   data: 18608,
   value: "KEEBLER,KEEBLER CHOC GRAHAM SELECTS"
 },
 {
   data: 18609,
   value: "KEEBLER,VANILLA WAFERS"
 },
 {
   data: 18610,
   value: "KRUSTEAZ ALMOND POPPYSEED MUFFIN MIX,ARTIFICIALLY FLAV,DRY"
 },
 {
   data: 18612,
   value: "MCKEE BAKING,LITTL DEBBI NUT BAR,WAFER W/PNUT BUTE,CHOC COVE"
 },
 {
   data: 18614,
   value: "MARTHA WHITE FOODS,MARTHA WHITE'S CHEWY FUDGE BROWNIE MX,DRY"
 },
 {
   data: 18615,
   value: "MARTHA WHITE FOODS,MARTHA WHITE'S BTTRMLK BISCUIT MIX,DRY"
 },
 {
   data: 18616,
   value: "MISSION FOODS,MISSION FLR TORTILLAS,SOFT TACO,8 INCH"
 },
 {
   data: 18617,
   value: "NABISCO,NABISCO GRAHAMS CRACKERS"
 },
 {
   data: 18619,
   value: "NABISCO,NABISCO OREO CRUNCHIES,COOKIE CRUMB TOPPING"
 },
 {
   data: 18621,
   value: "NABISCO,NABISCO RITZ CRACKERS"
 },
 {
   data: 18629,
   value: "PILLSBURY,BTTRMLK BISCUITS,ART FLAVOR,REFR DOUGH"
 },
 {
   data: 18630,
   value: "PILLSBURY,CHOC CHIP COOKIES,REFR DOUGH"
 },
 {
   data: 18631,
   value: "PILLSBURY,CRUSTY FRENCH LOAF,REFR DOUGH"
 },
 {
   data: 18632,
   value: "PILLSBURY,TRADITIONAL FUDGE BROWNIE MIX,DRY"
 },
 {
   data: 18633,
   value: "PILLSBURY GRANDS,BTTRMLK BISCUITS,REFR DOUGH"
 },
 {
   data: 18634,
   value: "PILLSBURY GOLDEN LAYER BTTRMLK BISCUITS,ART FLAVOR,REFR"
 },
 {
   data: 18635,
   value: "PILLSBURY,CINN ROLLS W/ ICING,REFR DOUGH"
 },
 {
   data: 18637,
   value: "KRAFT FOODS,SHAKE 'N' BAKE ORIG RECIPE,COATING FOR PORK,DRY"
 },
 {
   data: 18639,
   value: "GEORGE WESTON BAKERIES,THOMAS ENG MUFFINS"
 },
 {
   data: 18640,
   value: "HEINZ,WEIGHT WATCHER,CHOC ECLAIR,FRZ"
 },
 {
   data: 18641,
   value: "INTERSTATE BRANDS CORP,WONDER HAMBURGER ROLLS"
 },
 {
   data: 18642,
   value: "GENERAL MILLS,BETTY CROCKER SUPERMOIST YEL CAKE MIX,DRY"
 },
 {
   data: 18651,
   value: "NABISCO,NABISCO SNACKWELL'S FAT FREE DEVIL'S FD COOKIE CAKES"
 },
 {
   data: 18927,
   value: "CRACKERS,CHS,SANDWICH-TYPE W/ CHS FILLING"
 },
 {
   data: 18930,
   value: "USDA CMDTY,BAKERY,FLR MIX"
 },
 {
   data: 18931,
   value: "USDA CMDTY,BAKERY,FLR MIX LOW-FAT"
 },
 {
   data: 18932,
   value: "WAFFLES,BTTRMLK,FRZ,RTH"
 },
 {
   data: 18933,
   value: "WAFFLE,BTTRMLK,FRZ,RTH,TSTD"
 },
 {
   data: 18934,
   value: "WAFFLE,BTTRMLK,FRZ,RTH,MICROWAVED"
 },
 {
   data: 18935,
   value: "WAFFLE,PLN,FRZ,RTH,MICROWAVE"
 },
 {
   data: 18936,
   value: "PANCAKES,PLN,FRZ,RTH,MICROWAVE(INC BUTTMLK)"
 },
 {
   data: 18938,
   value: "TOASTER PASTRIES,FRUIT,FRSTD"
 },
 {
   data: 18939,
   value: "TSTR PSTRS,FRT,TSTD (INCL APPL,BLUEBERRY,CHERRY,STRAWBERRY)"
 },
 {
   data: 18940,
   value: "MUFFIN,BLUEBERRY,COMMLY PREP,LOW-FAT"
 },
 {
   data: 18942,
   value: "PIE CRUST,COOKIE-TYPE,GRAHAM CRACKER,READY CRUST"
 },
 {
   data: 18943,
   value: "PIE CRUST,COOKIE-TYPE,CHOC,READY CRUST"
 },
 {
   data: 18944,
   value: "PIE,DUTCH APPL,COMMLY PREP"
 },
 {
   data: 18945,
   value: "PIE CRUST,DEEP DISH,FRZ,UNBAKED,MADE W/ ENR FLR"
 },
 {
   data: 18946,
   value: "PIE CRUST,REFR,REG,BKD"
 },
 {
   data: 18947,
   value: "PIE CRUST,DEEP DISH,FRZ,BKD,MADE W/ ENR FLR"
 },
 {
   data: 18948,
   value: "PIE CRUST,REFR,REG,UNBAKED"
 },
 {
   data: 18949,
   value: "CRACKERS,WHOLE-WHEAT,RED FAT"
 },
 {
   data: 18950,
   value: "CRACKERS,WHEAT,RED FAT"
 },
 {
   data: 18951,
   value: "WAFFLES,CHOC CHIP,FRZ,RTH"
 },
 {
   data: 18952,
   value: "TOSTADA SHELLS,CORN"
 },
 {
   data: 18953,
   value: "BREAD,SALVADORAN SWT CHS (QUESADILLA SALVADORENA)"
 },
 {
   data: 18954,
   value: "BREAD,POUND CAKE TYPE,PAN DE TORTA SALVADORAN"
 },
 {
   data: 18955,
   value: "BREAD,PAN DULCE,SWT YEAST BREAD"
 },
 {
   data: 18956,
   value: "KEIKITOS (MUFFINS),LATINO BAKERY ITEM"
 },
 {
   data: 18957,
   value: "CAKE,POUND,BIMBO BAKERIES USA,PANQUE CASERO,HOME BKD STYLE"
 },
 {
   data: 18958,
   value: "PAN DULCE,LA RICURA,SALPORA DE ARROZ,COOKIE-LIKE"
 },
 {
   data: 18959,
   value: "PASTRY,PASTELITOS DE GUAVA (GUAVA PASTRIES)"
 },
 {
   data: 18960,
   value: "CRACKERS,SNACK,GOYA CRACKERS"
 },
 {
   data: 18961,
   value: "CRACKERS,CRM,GAMESA SABROSAS"
 },
 {
   data: 18962,
   value: "CRACKERS,CRM,LA MODERNA RIKIS CRM CRACKERS"
 },
 {
   data: 18963,
   value: "GARLIC BREAD,FRZ"
 },
 {
   data: 18964,
   value: "CINNAMON BUNS,FRSTD (INCLUDES HONEY BUNS)"
 },
 {
   data: 18965,
   value: "CRACKERS,CHS,RED FAT"
 },
 {
   data: 18966,
   value: "CRACKERS,SALTINES,WHL WHEAT (INCLUDES MULTI-GRAIN)"
 },
 {
   data: 18967,
   value: "BREAD,WHEAT,WHITE WHEAT"
 },
 {
   data: 18968,
   value: "BAGEL,WHEAT"
 },
 {
   data: 18969,
   value: "CREAM PUFF,ECLAIR,CUSTARD OR CRM FILLED,ICED"
 },
 {
   data: 18970,
   value: "TORTILLAS,RTB OR -FRY,FLR,SHELF STABLE"
 },
 {
   data: 18971,
   value: "BREAD,POTATO"
 },
 {
   data: 18972,
   value: "BREAD,CHS"
 },
 {
   data: 18973,
   value: "FOCACCIA,ITALIAN FLATBREAD,PLN"
 },
 {
   data: 18974,
   value: "KASHI TLC CRACKERS HONEY SESAME"
 },
 {
   data: 18975,
   value: "KASHI,TLC,ORIGINAL 7-GRAIN CRACKERS"
 },
 {
   data: 18977,
   value: "KASHI,TLC,TSTD ASIAGO CRACKERS"
 },
 {
   data: 18978,
   value: "KASHI BLUEBERRY WAFFLE"
 },
 {
   data: 18979,
   value: "KASHI H2H WOVEN WHEAT CRACKER ORIGINAL"
 },
 {
   data: 18980,
   value: "KASHI ORIGINAL WAFFLE"
 },
 {
   data: 18981,
   value: "KASHI,TLC,FIRE RSTD VEG CRACKERS"
 },
 {
   data: 18982,
   value: "KASHI H2H WOVEN WHEAT CRACKER RSTD GARLIC"
 },
 {
   data: 18983,
   value: "AUSTIN,CHEDDAR CHS ON WHEAT CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 18984,
   value: "AUSTIN,CHEDDAR CHS ON CHS CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 18985,
   value: "AUSTIN,CHOCOLATEY PNUT BUTTER CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 18986,
   value: "AUSTIN,GRILLED CHS ON WAFER CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 18987,
   value: "AUSTIN,CHEDDAR CHS ON CHS CRACKERS,SANDWICH-TYPE,RED FAT"
 },
 {
   data: 18988,
   value: "AUSTIN,PNUT BUTTER ON CHS CRACKERS,SANDWICH-TYPE,RED FAT"
 },
 {
   data: 18989,
   value: "AUSTIN,PNUT BUTTER ON TOASTY CRACKERS,SANDWICH-TYPE,RED FAT"
 },
 {
   data: 18990,
   value: "AUSTIN,PB & J CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 18991,
   value: "BARBARA DEE,WNTR MINTS COOKIES"
 },
 {
   data: 18992,
   value: "KELLOGG'S,BEANATURAL,ORIGINAL 3-BEAN CHIPS"
 },
 {
   data: 18993,
   value: "BEAR NAKED,DOUBLE CHOC COOKIES"
 },
 {
   data: 18994,
   value: "BEAR NAKED,FRUIT & NUT COOKIES"
 },
 {
   data: 18995,
   value: "KELLOGG'S,EGGO,BISCUIT SCRAMBLERS,BACON,EGG & CHS"
 },
 {
   data: 18996,
   value: "KELLOGG'S,EGGO,BISCUIT SCRAMBLERS,EGG & CHS"
 },
 {
   data: 18997,
   value: "KELLOGG'S,EGGO,FRENCH TOASTER STKS,CINN"
 },
 {
   data: 18998,
   value: "KELLOGG'S,EGGO,FRENCH TOASTER STKS,ORIGINAL"
 },
 {
   data: 18999,
   value: "KELLOGG'S,EGGO,MINI MUFFIN TOPS,BLUEBERRY"
 },
 {
   data: 19002,
   value: "BEEF JERKY,CHOPD&FORMED"
 },
 {
   data: 19003,
   value: "CORN-BASED,EXTRUDED,CHIPS,PLN"
 },
 {
   data: 19004,
   value: "CORN-BASED,EXTRUDED,CHIPS,BARBECUE-FLAVOR"
 },
 {
   data: 19005,
   value: "CORN-BASED,EXTRUDED,CONES,PLN"
 },
 {
   data: 19006,
   value: "CORN-BASED,EXTRUDED,CONES,NACHO-FLAVOR"
 },
 {
   data: 19007,
   value: "SNACKS,CORN-BASED,EXTRUDED,ONION-FLAVOR"
 },
 {
   data: 19008,
   value: "CORN-BASED,EXTRUDED,PUFFS OR TWISTS,CHEESE-FLAVOR"
 },
 {
   data: 19009,
   value: "CORNNUTS,PLAIN"
 },
 {
   data: 19010,
   value: "CRISPED RICE BAR,CHOC CHIP"
 },
 {
   data: 19013,
   value: "FRUIT LEATHER,PIECES"
 },
 {
   data: 19014,
   value: "FRUIT LEATHER,ROLLS"
 },
 {
   data: 19015,
   value: "GRANOLA BARS,HARD,PLAIN"
 },
 {
   data: 19016,
   value: "GRANOLA BARS,HARD,ALMOND"
 },
 {
   data: 19017,
   value: "GRANOLA BARS,HARD,CHOC CHIP"
 },
 {
   data: 19019,
   value: "GRANOLA BARS,HARD,PEANUT"
 },
 {
   data: 19020,
   value: "GRANOLA BARS,SOFT,UNCOATED,PLN"
 },
 {
   data: 19021,
   value: "GRANOLA BARS,SOFT,UNCOATED,PNUT BUTTER"
 },
 {
   data: 19022,
   value: "GRANOLA BARS,SOFT,UNCOATED,RAISIN"
 },
 {
   data: 19023,
   value: "GRANOLA BARS,OATS,FRUITS&NUT"
 },
 {
   data: 19024,
   value: "GRANOLA BARS,SOFT,COATD,MILK CHOC COATING,CHOC CHIP"
 },
 {
   data: 19026,
   value: "GRANOLA BARS,SOFT,COATD,MILK CHOC COATING,PNUT BUTTER"
 },
 {
   data: 19027,
   value: "GRANOLA BARS,SOFT,UNCOATED,PNUT BUTTER&CHOC CHIP"
 },
 {
   data: 19031,
   value: "ORIENTAL MIX,RICE-BASED"
 },
 {
   data: 19033,
   value: "SNACKS,GENERAL MILLS,CHEX MIX,TRADITIONAL FLAVOR"
 },
 {
   data: 19034,
   value: "POPCORN,AIR-POPPED"
 },
 {
   data: 19035,
   value: "POPCORN,OIL-POPPED"
 },
 {
   data: 19036,
   value: "POPCORN,CAKES"
 },
 {
   data: 19038,
   value: "POPCORN,CARAMEL-COATED,W/PNUTS"
 },
 {
   data: 19039,
   value: "POPCORN,CARAMEL-COATED,WO/PNUTS"
 },
 {
   data: 19040,
   value: "POPCORN,CHEESE-FLAVOR"
 },
 {
   data: 19041,
   value: "PORK SKINS,PLAIN"
 },
 {
   data: 19042,
   value: "POTATO CHIPS,BARBECUE-FLAVOR"
 },
 {
   data: 19043,
   value: "POTATO CHIPS,SOUR-CREAM-AND-ONION-FLAVOR"
 },
 {
   data: 19045,
   value: "POTATO CHIPS,MADE FROM DRIED POTATOES,LT"
 },
 {
   data: 19046,
   value: "POTATO CHIPS,MADE FR DRIED POTATOES,SOUR-CREAM&ONION-FLAVOR"
 },
 {
   data: 19047,
   value: "PRETZELS,HARD,PLN,SALTED"
 },
 {
   data: 19048,
   value: "PRETZELS,HARD,CONFECTIONER'S COATING,CHOCOLATE-FLAVOR"
 },
 {
   data: 19049,
   value: "SNACKS,M&M MARS,COMBOS SNACKS CHEDDAR CHS PRETZEL"
 },
 {
   data: 19050,
   value: "SNACKS,PRETZELS,HARD,WHOLE-WHEAT INCL BOTH SALTED & UNSALTED"
 },
 {
   data: 19051,
   value: "RICE CAKES,BROWN RICE,PLN"
 },
 {
   data: 19052,
   value: "RICE CAKES,BROWN RICE,BUCKWHEAT"
 },
 {
   data: 19053,
   value: "RICE CAKES,BROWN RICE,SESAME SD"
 },
 {
   data: 19056,
   value: "TORTILLA CHIPS,PLAIN"
 },
 {
   data: 19057,
   value: "SNACKS,TORTILLA CHIPS,NACHO CHS"
 },
 {
   data: 19058,
   value: "SNACKS,TORTILLA CHIPS,RANCH-FLAVOR"
 },
 {
   data: 19059,
   value: "TRAIL MIX,REGULAR"
 },
 {
   data: 19061,
   value: "TRAIL MIX,TROPICAL"
 },
 {
   data: 19062,
   value: "TRAIL MIX,REG,W/CHOC CHIPS,SALTED NUTS&SEEDS"
 },
 {
   data: 19063,
   value: "TORTILLA CHIPS,TACO-FLAVOR"
 },
 {
   data: 19064,
   value: "CANDIES,TOOTSIE ROLL,CHOCOLATE-FLAVOR ROLL"
 },
 {
   data: 19065,
   value: "CANDIES,ALMOND JOY CANDY BAR"
 },
 {
   data: 19067,
   value: "CANDIES,TWIZZLERS CHERRY BITES"
 },
 {
   data: 19068,
   value: "CANDIES,NESTLE,BIT-O'-HONEY CANDY CHEWS"
 },
 {
   data: 19069,
   value: "CANDIES,NESTLE,BUTTERFINGER BAR"
 },
 {
   data: 19070,
   value: "CANDIES,BUTTERSCOTCH"
 },
 {
   data: 19071,
   value: "CANDIES,CAROB,UNSWTND"
 },
 {
   data: 19074,
   value: "CANDIES,CARAMELS"
 },
 {
   data: 19075,
   value: "CANDIES,CARAMELLO CANDY BAR"
 },
 {
   data: 19076,
   value: "CANDIES, CARAMELS, CHOCOLATE-FLAVOR ROLL"
 },
 {
   data: 19077,
   value: "BAKING CHOC,UNSWTND,LIQ"
 },
 {
   data: 19078,
   value: "BAKING CHOC,UNSWTND,SQUARES"
 },
 {
   data: 19079,
   value: "CANDIES,CONFECTIONER'S COATING,YOGURT"
 },
 {
   data: 19080,
   value: "CANDIES,SEMISWEET CHOC"
 },
 {
   data: 19081,
   value: "CANDIES,SWEET CHOCOLATE"
 },
 {
   data: 19083,
   value: "CANDIES,SWT CHOC COATD FONDANT"
 },
 {
   data: 19084,
   value: "CANDIES,HERSHEY'S GOLDEN ALMOND SOLITAIRES"
 },
 {
   data: 19085,
   value: "CANDIES,CONFECTIONER'S COATING,BUTTERSCOTCH"
 },
 {
   data: 19086,
   value: "CANDIES,CONFECTIONER'S COATING,PNUT BUTTER"
 },
 {
   data: 19087,
   value: "CANDIES,WHITE CHOC"
 },
 {
   data: 19088,
   value: "ICE CREAMS,VANILLA,LT"
 },
 {
   data: 19089,
   value: "ICE CREAMS,VANILLA,RICH"
 },
 {
   data: 19090,
   value: "ICE CREAMS,FRENCH VANILLA,SOFT-SERVE"
 },
 {
   data: 19091,
   value: "CANDIES,YORK PEPPERMINT PATTIE"
 },
 {
   data: 19092,
   value: "CANDIES,TWIZZLERS NIBS CHERRY BITS"
 },
 {
   data: 19093,
   value: "CANDIES,SYMPHONY MILK CHOC BAR"
 },
 {
   data: 19094,
   value: "DESSERTS,FLAN,CARAMEL CUSTARD,PREPARED-FROM-RECIPE"
 },
 {
   data: 19095,
   value: "ICE CREAMS,VANILLA"
 },
 {
   data: 19096,
   value: "ICE CREAMS,VANILLA,LT,SOFT-SERVE"
 },
 {
   data: 19097,
   value: "SHERBET,ORANGE"
 },
 {
   data: 19098,
   value: "CANDIES,5TH AVENUE CANDY BAR"
 },
 {
   data: 19099,
   value: "CANDIES,FONDANT,PREPARED-FROM-RECIPE"
 },
 {
   data: 19100,
   value: "CANDIES,FUDGE,CHOC,PREPARED-FROM-RECIPE"
 },
 {
   data: 19101,
   value: "CANDIES,FUDGE,CHOC,W/ NUTS,PREPARED-FROM-RECIPE"
 },
 {
   data: 19102,
   value: "CANDIES,FUDGE,PNUT BUTTER,PREPARED-FROM-RECIPE"
 },
 {
   data: 19103,
   value: "CANDIES,FUDGE,VANILLA,PREPARED-FROM-RECIPE"
 },
 {
   data: 19104,
   value: "CANDIES,FUDGE,VANILLA W/ NUTS"
 },
 {
   data: 19105,
   value: "CANDIES,NESTLE,GOOBERS CHOC COVERED PNUTS"
 },
 {
   data: 19106,
   value: "CANDIES,GUMDROPS,STARCH JELLY PIECES"
 },
 {
   data: 19107,
   value: "CANDIES,HARD"
 },
 {
   data: 19108,
   value: "CANDIES,JELLYBEANS"
 },
 {
   data: 19109,
   value: "CANDIES,KIT KAT WAFER BAR"
 },
 {
   data: 19110,
   value: "CANDIES,KRACKEL CHOC BAR"
 },
 {
   data: 19111,
   value: "CANDIES,NESTLE,BABY RUTH BAR"
 },
 {
   data: 19112,
   value: "CANDIES,TWIZZLERS STRAWBERRY TWISTS CANDY"
 },
 {
   data: 19113,
   value: "SYRUPS,TABLE BLENDS,PANCAKE,W/BUTTER"
 },
 {
   data: 19114,
   value: "ICE CREAMS,CHOC,LT"
 },
 {
   data: 19115,
   value: "CANDIES,MARS SNACKFOOD US,MARS ALMOND BAR"
 },
 {
   data: 19116,
   value: "CANDIES,MARSHMALLOWS"
 },
 {
   data: 19117,
   value: "CANDIES,HALAVAH,PLAIN"
 },
 {
   data: 19118,
   value: "CANDIES,NESTLE,OH HENRY! BAR"
 },
 {
   data: 19119,
   value: "CANDIES,NESTLE,CHUNKY BAR"
 },
 {
   data: 19120,
   value: "CANDIES,MILK CHOC"
 },
 {
   data: 19121,
   value: "PUDDINGS,BANANA,DRY MIX,INST,PREP W/ 2% MILK"
 },
 {
   data: 19122,
   value: "PUDDINGS,BANANA,DRY MIX,REG,PREP W/ 2% MILK"
 },
 {
   data: 19123,
   value: "PUDDINGS,CHOC,DRY MIX,INST,PREP W/ 2% MILK"
 },
 {
   data: 19124,
   value: "BAKING CHOC,MEXICAN,SQUARES"
 },
 {
   data: 19125,
   value: "CHOCOLATE-FLAVORED HAZELNUT SPRD"
 },
 {
   data: 19126,
   value: "CANDIES,MILK CHOC COATD PNUTS"
 },
 {
   data: 19127,
   value: "CANDIES,MILK CHOC COATD RAISINS"
 },
 {
   data: 19128,
   value: "SYRUPS,TABLE BLENDS,PANCAKE,RED-CAL"
 },
 {
   data: 19129,
   value: "SYRUPS,TABLE BLENDS,PANCAKE"
 },
 {
   data: 19130,
   value: "CANDIES,HERSHEY'S POT OF GOLD ALMOND BAR"
 },
 {
   data: 19132,
   value: "CANDIES,MILK CHOC,W/ALMONDS"
 },
 {
   data: 19134,
   value: "CANDIES,MILK CHOC,W/RICE CRL"
 },
 {
   data: 19135,
   value: "CANDIES,MARS SNACKFOOD US,MILKY WAY BAR"
 },
 {
   data: 19136,
   value: "CANDIES,SKOR TOFFEE BAR"
 },
 {
   data: 19137,
   value: "TOPPINGS,STRAWBERRY"
 },
 {
   data: 19138,
   value: "CANDIES,TRUFFLES,PREPARED-FROM-RECIPE"
 },
 {
   data: 19139,
   value: "BAK CHOC,MARS SNACKFOOD US,M&M'S SEMISWT CHOC MINI BAK BITS"
 },
 {
   data: 19140,
   value: "CANDIES,MARS SNACKFOOD US,M&M'S PNUT CHOC CANDIES"
 },
 {
   data: 19141,
   value: "CANDIES,MARS SNACKFOOD US,M&M'S MILK CHOC CANDIES"
 },
 {
   data: 19142,
   value: "CANDIES,MOUNDS CANDY BAR"
 },
 {
   data: 19143,
   value: "CANDIES,MR. GOODBAR CHOC BAR"
 },
 {
   data: 19144,
   value: "CANDIES,NESTLE,100 GRAND BAR"
 },
 {
   data: 19145,
   value: "CANDIES,NESTLE,CRUNCH BAR&DSSRT TOPPING"
 },
 {
   data: 19146,
   value: "BAKING CHOC,MARS SNACKFOOD US,M&M'S MILK CHOC MINI BAK BITS"
 },
 {
   data: 19147,
   value: "CANDIES,PEANUT BAR"
 },
 {
   data: 19148,
   value: "CANDIES,PNUT BRITTLE,PREPARED-FROM-RECIPE"
 },
 {
   data: 19149,
   value: "CANDIES,NESTLE,RAISINETS CHOC COVERED RAISINS"
 },
 {
   data: 19150,
   value: "CANDIES,REESE'S PNUT BUTTER CUPS"
 },
 {
   data: 19151,
   value: "CANDIES,REESE'S PIECES CANDY"
 },
 {
   data: 19152,
   value: "CANDIES,ROLO CARAMELS IN MILK CHOC"
 },
 {
   data: 19153,
   value: "CANDIES,NESTLE,AFTER EIGHT MINTS"
 },
 {
   data: 19154,
   value: "CANDIES,SESAME CRUNCH"
 },
 {
   data: 19155,
   value: "CANDIES,MARS SNACKFOOD US,SNICKERS BAR"
 },
 {
   data: 19156,
   value: "CANDIES,MARS SNACKFOOD US,STARBURST FRUIT CHEWS,ORIG FRUIT"
 },
 {
   data: 19157,
   value: "CANDIES,MARS SNACKFOOD US,M&M'S MINIS MILK CHOC CANDIES"
 },
 {
   data: 19159,
   value: "CANDIES,MARS SNACKFOOD US,3 MUSKETEERS BAR"
 },
 {
   data: 19160,
   value: "CANDIES,MARS SNACKFOOD US,TWIX CARAMEL COOKIE BARS"
 },
 {
   data: 19161,
   value: "CANDIES,MARS SNACKFOOD US,TWIX PNUT BUTTER COOKIE BARS"
 },
 {
   data: 19162,
   value: "CANDIES,WHATCHAMACALLIT CANDY BAR"
 },
 {
   data: 19163,
   value: "CHEWING GUM"
 },
 {
   data: 19164,
   value: "CANDIES,SPL DK CHOC BAR"
 },
 {
   data: 19165,
   value: "COCOA,DRY PDR,UNSWTND"
 },
 {
   data: 19166,
   value: "COCOA,DRY PDR,UNSWTND,PROC W/ALKALI"
 },
 {
   data: 19168,
   value: "DESSERTS,EGG CUSTARD,BKD,PREPARED-FROM-RECIPE"
 },
 {
   data: 19169,
   value: "EGG CUSTARDS,DRY MIX"
 },
 {
   data: 19170,
   value: "EGG CUSTARDS,DRY MIX,PREP W/ WHL MILK"
 },
 {
   data: 19171,
   value: "COCOA,DRY PDR,UNSWTND,HERSHEY'S EUROPEAN STYLE COCOA"
 },
 {
   data: 19172,
   value: "GELATIN DSSRT,DRY MIX"
 },
 {
   data: 19173,
   value: "GELATIN DSSRT,DRY MIX,PREP W/ H2O"
 },
 {
   data: 19175,
   value: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT"
 },
 {
   data: 19176,
   value: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT,PREP W/ H2O"
 },
 {
   data: 19177,
   value: "GELATINS,DRY PDR,UNSWTND"
 },
 {
   data: 19181,
   value: "CANDIES,YORK BITES"
 },
 {
   data: 19182,
   value: "DESSERTS,MOUSSE,CHOC,PREPARED-FROM-RECIPE"
 },
 {
   data: 19183,
   value: "PUDDINGS,CHOC,RTE"
 },
 {
   data: 19184,
   value: "PUDDINGS,CHOC,DRY MIX,INST"
 },
 {
   data: 19185,
   value: "PUDDINGS,CHOC,DRY MIX,INST,PREP W/ WHL MILK"
 },
 {
   data: 19186,
   value: "DESSERTS,APPL CRISP,PREPARED-FROM-RECIPE"
 },
 {
   data: 19187,
   value: "FLAN,CARAMEL CUSTARD,DRY MIX"
 },
 {
   data: 19188,
   value: "DESSERTS,PUDD,CHOC,DRY MIX,REG"
 },
 {
   data: 19189,
   value: "PUDDINGS,CHOC,DRY MIX,INST,PREP W/ WHOLE MILK"
 },
 {
   data: 19190,
   value: "PUDDINGS,CHOC,DRY MIX,REG,PREP W/ 2% MILK"
 },
 {
   data: 19191,
   value: "PUDDINGS,COCNT CRM,DRY MIX,INST,PREP W/ 2% MILK"
 },
 {
   data: 19193,
   value: "PUDDINGS,RICE,RTE"
 },
 {
   data: 19194,
   value: "PUDDINGS,RICE,DRY MIX"
 },
 {
   data: 19195,
   value: "PUDDINGS,RICE,DRY MIX,PREP W/ WHL MILK"
 },
 {
   data: 19198,
   value: "PUDDINGS,TAPIOCA,DRY MIX"
 },
 {
   data: 19199,
   value: "PUDDINGS,TAPIOCA,DRY MIX,PREP W/ WHL MILK"
 },
 {
   data: 19201,
   value: "PUDDINGS,VANILLA,RTE"
 },
 {
   data: 19202,
   value: "PUDDINGS,VANILLA,DRY MIX,INST"
 },
 {
   data: 19203,
   value: "PUDDINGS,VANILLA,DRY MIX,INST,PREP W/ WHL MILK"
 },
 {
   data: 19204,
   value: "PUDDINGS,LEMON,DRY MIX,INST,PREP W/ 2% MILK"
 },
 {
   data: 19205,
   value: "EGG CUSTARDS,DRY MIX,PREP W/ 2% MILK"
 },
 {
   data: 19206,
   value: "PUDDINGS,VANILLA,DRY MIX,REG"
 },
 {
   data: 19207,
   value: "PUDDINGS,VANILLA,DRY MIX,REG,PREP W/ WHL MILK"
 },
 {
   data: 19208,
   value: "PUDDINGS,RICE,DRY MIX,PREP W/ 2% MILK"
 },
 {
   data: 19209,
   value: "PUDDINGS,TAPIOCA,DRY MIX,PREP W/ 2% MILK"
 },
 {
   data: 19212,
   value: "PUDDINGS,VANILLA,DRY MIX,REG,PREP W/ 2% MILK"
 },
 {
   data: 19213,
   value: "RENNIN,CHOC,DRY MIX,PREP W/ 2% MILK"
 },
 {
   data: 19214,
   value: "RENNIN,VANILLA,DRY MIX,PREP W/ 2% MILK"
 },
 {
   data: 19216,
   value: "CANDIES,PRALINE,PREPARED-FROM-RECIPE"
 },
 {
   data: 19217,
   value: "FROZEN NOVELTIES,ICE TYPE,FRUIT,NO SUGAR ADDED"
 },
 {
   data: 19218,
   value: "PUDDINGS,TAPIOCA,RTE"
 },
 {
   data: 19219,
   value: "PUDDINGS,COCNT CRM,DRY MIX,REG,PREP W/ 2% MILK"
 },
 {
   data: 19220,
   value: "DESSERTS,RENNIN,CHOC,DRY MIX"
 },
 {
   data: 19221,
   value: "RENNIN,CHOC,DRY MIX,PREP W/ WHL MILK"
 },
 {
   data: 19222,
   value: "DESSERTS,RENNIN,VANILLA,DRY MIX"
 },
 {
   data: 19223,
   value: "RENNIN,VANILLA,DRY MIX,PREP W/ WHL MILK"
 },
 {
   data: 19225,
   value: "DESSERTS,RENNIN,TABLETS,UNSWTND"
 },
 {
   data: 19226,
   value: "FROSTINGS,CHOC,CREAMY,RTE"
 },
 {
   data: 19227,
   value: "FROSTINGS,COCONUT-NUT,RTE"
 },
 {
   data: 19228,
   value: "FROSTINGS,CRM CHEESE-FLAVOR,RTE"
 },
 {
   data: 19230,
   value: "FROSTINGS,VANILLA,CREAMY,RTE"
 },
 {
   data: 19231,
   value: "FLAN,CARAMEL CUSTARD,DRY MIX,PREP W/ 2% MILK"
 },
 {
   data: 19232,
   value: "FLAN,CARAMEL CUSTARD,DRY MIX,PREP W/ WHL MILK"
 },
 {
   data: 19233,
   value: "PUDDINGS,VANILLA,RTE,FAT FREE"
 },
 {
   data: 19234,
   value: "PUDDINGS,TAPIOCA,RTE,FAT FREE"
 },
 {
   data: 19235,
   value: "PUDDINGS,CHOC,RTE,FAT FREE"
 },
 {
   data: 19236,
   value: "CANDIES,HERSHEY'S MILK CHOC W/ ALMOND BITES"
 },
 {
   data: 19238,
   value: "CANDIES,REESE'S BITES"
 },
 {
   data: 19239,
   value: "CANDIES,REESE'S NUTRAGEOUS CANDY BAR"
 },
 {
   data: 19240,
   value: "FROSTINGS,CHOC,CREAMY,DRY MIX"
 },
 {
   data: 19241,
   value: "FROSTINGS,CHOC,CREAMY,DRY MIX,PREP W/ BUTTER"
 },
 {
   data: 19243,
   value: "CANDIES,HEATH BITES"
 },
 {
   data: 19244,
   value: "FROSTINGS,VANILLA,CREAMY,DRY MIX"
 },
 {
   data: 19246,
   value: "FROSTINGS,WHITE,FLUFFY,DRY MIX"
 },
 {
   data: 19247,
   value: "FROSTINGS,WHITE,FLUFFY,DRY MIX,PREP W/H2O"
 },
 {
   data: 19248,
   value: "CANDIES,HERSHEY'S,ALMOND JOY BITES"
 },
 {
   data: 19249,
   value: "CANDIES,HERSHEY,REESESTICKS CRISPY WAFERS,PNUT BUT,MILK CHOC"
 },
 {
   data: 19250,
   value: "CANDIES,HERSHEY,KIT KAT BIG KAT BAR"
 },
 {
   data: 19252,
   value: "CANDIES,REESE'S,FAST BREAK,MILK CHOC PNT BTR & SFT NUGTS"
 },
 {
   data: 19254,
   value: "CANDIES,MARS SNACKFOOD US,DOVE MILK CHOC"
 },
 {
   data: 19255,
   value: "CANDIES,MARS SNACKFOOD US,DOVE DK CHOC"
 },
 {
   data: 19256,
   value: "CANDIES,MARS SNACKFOOD US,MILKYWAYCARAML,MILKCHOCOV"
 },
 {
   data: 19258,
   value: "CANDIES,MARS SNACKFOOD US,MILKY WAY CARML. DKCHOCCOV"
 },
 {
   data: 19260,
   value: "ICE CREAMS,VANILLA,LT,NO SUGAR ADDED"
 },
 {
   data: 19263,
   value: "FROZEN NOVELTIES,FRUIT & JUC BARS"
 },
 {
   data: 19265,
   value: "ICE CREAMS,CHOC,LT,NO SUGAR ADDED"
 },
 {
   data: 19268,
   value: "CANDIES,DK CHOC COATD COFFEE BNS"
 },
 {
   data: 19269,
   value: "SNACKS,GENERAL MILLS,BETTY CROCKER FRT RL UPS,BRY FLV,W/VT C"
 },
 {
   data: 19270,
   value: "ICE CREAMS,CHOC"
 },
 {
   data: 19271,
   value: "ICE CREAMS,STRAWBERRY"
 },
 {
   data: 19272,
   value: "SNACKS,FARLEY CANDY,FARLEY FRUIT SNACKS,W/VITAMINS A,C,&E"
 },
 {
   data: 19273,
   value: "SNACKS,SUNKIST,SUNKIST FRUIT ROLL,STRAWBERRY,W/VITMNS A,C,&E"
 },
 {
   data: 19274,
   value: "SNACKS,FRUIT LEATHER,PIECES,W/VIT C"
 },
 {
   data: 19279,
   value: "CANDIES,MILK CHOC COATD COFFEE BNS"
 },
 {
   data: 19280,
   value: "FROZEN NOVELTIES,ICE TYPE,LIME"
 },
 {
   data: 19281,
   value: "FROZEN NOVELTIES,ICE TYPE,ITALIAN,REST-PREP"
 },
 {
   data: 19283,
   value: "FROZEN NOVELTIES,ICE TYPE,POP"
 },
 {
   data: 19292,
   value: "CANDIES,MARS SNACKFOOD US,M&M'S CRISPY CHOC CANDIES"
 },
 {
   data: 19293,
   value: "FROZEN YOGURTS,VANILLA,SOFT-SERVE"
 },
 {
   data: 19294,
   value: "FRUIT BUTTERS,APPLE"
 },
 {
   data: 19295,
   value: "CANDIES,MARS SNACKFOOD US,SNICKERS MUNCH BAR"
 },
 {
   data: 19296,
   value: "HONEY"
 },
 {
   data: 19297,
   value: "JAMS AND PRESERVES"
 },
 {
   data: 19300,
   value: "JELLIES"
 },
 {
   data: 19301,
   value: "CANDIES,FUDGE,CHOC MARSHMLLW,W/ NUTS,PREPARED-BY-RECIPE"
 },
 {
   data: 19302,
   value: "CANDIES,MARS SNACKFOOD US,SNICKERS ALMOND BAR"
 },
 {
   data: 19303,
   value: "MARMALADE,ORANGE"
 },
 {
   data: 19304,
   value: "MOLASSES"
 },
 {
   data: 19306,
   value: "CANDIES,MARS SNACKFOOD US,POP SNICKERS BITE SIZE CANDIES"
 },
 {
   data: 19307,
   value: "CANDIES,MARS SNACKFOOD US,POP MILKY WAY BITE SIZE"
 },
 {
   data: 19308,
   value: "CANDIES,MARS SNACK US,POP'ABLES 3 MUSKETEERS BITE SIZE"
 },
 {
   data: 19309,
   value: "CANDIES,MARS SNACK US,STARBURST FRUIT CHEWS,FRT&CREM"
 },
 {
   data: 19310,
   value: "PECTIN,UNSWTND,DRY MIX"
 },
 {
   data: 19312,
   value: "PIE FILLINGS,APPL,CND"
 },
 {
   data: 19313,
   value: "CANDIES,MARS SNACKFOOD US,STARBURST FRUIT CHEWS,TROP"
 },
 {
   data: 19314,
   value: "PIE FILLINGS,CND,CHERRY"
 },
 {
   data: 19315,
   value: "CANDIES,MARS SNACKFOOD US,STARBURST SOUR FRUIT CHEWS"
 },
 {
   data: 19318,
   value: "PUDDINGS,BANANA,DRY MIX,INST"
 },
 {
   data: 19319,
   value: "PUDDINGS,BANANA,DRY MIX,INST,PREP W/ WHL MILK"
 },
 {
   data: 19320,
   value: "PUDDINGS,BANANA,DRY MIX,REG"
 },
 {
   data: 19321,
   value: "PUDDINGS,BANANA,DRY MIX,REG,PREP W/ WHL MILK"
 },
 {
   data: 19322,
   value: "DESSERTS,PUDD,COCNT CRM,DRY MIX,INST"
 },
 {
   data: 19323,
   value: "PUDDINGS,COCNT CRM,DRY MIX,INST,PREP W/ WHL MILK"
 },
 {
   data: 19324,
   value: "PUDDINGS,COCNT CRM,DRY MIX,REG"
 },
 {
   data: 19325,
   value: "PUDDINGS,COCNT CRM,DRY MIX,REG,PREP W/ WHL MILK"
 },
 {
   data: 19326,
   value: "CANDIES,MARS SNACKFOOD US,COCOAVIA CHOC BAR"
 },
 {
   data: 19327,
   value: "CANDIES,MARS SNACK US,COCOAVIA BLUEBERRY & ALMOND CHOC BAR"
 },
 {
   data: 19328,
   value: "CANDIES,MARS SNACKFOOD US,COCOAVIA CRISPY CHOC BAR"
 },
 {
   data: 19330,
   value: "PUDDINGS,LEMON,DRY MIX,INST"
 },
 {
   data: 19331,
   value: "PUDDINGS,LEMON,DRY MIX,INST,PREP W/ WHL MILK"
 },
 {
   data: 19332,
   value: "PUDDINGS,LEMON,DRY MIX,REG"
 },
 {
   data: 19333,
   value: "PUDDING,LEMON,DRY MIX,REG,PREP W/ SUGAR,EGG YOLK & H2O"
 },
 {
   data: 19334,
   value: "SUGARS,BROWN"
 },
 {
   data: 19335,
   value: "SUGARS,GRANULATED"
 },
 {
   data: 19336,
   value: "SUGARS,POWDERED"
 },
 {
   data: 19337,
   value: "SWEETENERS,TABLETOP,ASPRT,EQ,PACKETS"
 },
 {
   data: 19340,
   value: "SUGARS,MAPLE"
 },
 {
   data: 19345,
   value: "SYRUPS,CHOC,HERSHEY'S GENUINE CHOC FLAV LITE SYRUP"
 },
 {
   data: 19348,
   value: "SYRUPS,CHOC,FUDGE-TYPE"
 },
 {
   data: 19349,
   value: "SYRUPS,CORN,DK"
 },
 {
   data: 19350,
   value: "SYRUPS,CORN,LT"
 },
 {
   data: 19351,
   value: "SYRUPS,CORN,HIGH-FRUCTOSE"
 },
 {
   data: 19352,
   value: "SYRUPS,MALT"
 },
 {
   data: 19353,
   value: "SYRUPS,MAPLE"
 },
 {
   data: 19355,
   value: "SYRUPS,SORGHUM"
 },
 {
   data: 19359,
   value: "CANDIES,MARS SNACKFOOD US,SNICKERS CRUNCHER"
 },
 {
   data: 19360,
   value: "SYRUPS,TABLE BLENDS,PANCAKE,W/2% MAPLE"
 },
 {
   data: 19361,
   value: "SYRUPS,TABLE BLENDS,CANE&15% MAPLE"
 },
 {
   data: 19362,
   value: "SYRUPS,TABLE BLENDS,CORN,REFINER,&SUGAR"
 },
 {
   data: 19363,
   value: "CANDIES,MARS SNACKFOOD US,SKITTLES WILD BERRY BITE SIZE"
 },
 {
   data: 19364,
   value: "TOPPINGS,BUTTERSCOTCH OR CARAMEL"
 },
 {
   data: 19365,
   value: "TOPPINGS,MARSHMLLW CRM"
 },
 {
   data: 19366,
   value: "TOPPINGS,PINEAPPLE"
 },
 {
   data: 19367,
   value: "TOPPINGS,NUTS IN SYRUP"
 },
 {
   data: 19368,
   value: "CANDIES,MARS SNACKFOOD US,SKITTLES TROPICAL BITE SIZE CAND"
 },
 {
   data: 19369,
   value: "CANDIES,MARS SNACKFOOD US,SKITTLES SOURS ORIGINAL"
 },
 {
   data: 19370,
   value: "CANDIES,MARS SNACKFOOD US,SKITTLES ORIGINAL BITE SIZE CAND"
 },
 {
   data: 19371,
   value: "FROSTINGS,VANILLA,CREAMY,DRY MIX,PREP W/ MARGARINE"
 },
 {
   data: 19372,
   value: "FROSTINGS,CHOC,CREAMY,DRY MIX,PREP W/ MARGARINE"
 },
 {
   data: 19375,
   value: "FROSTINGS,GLAZE,PREPARED-FROM-RECIPE"
 },
 {
   data: 19379,
   value: "CANDIES,FUDGE,CHOC MARSHMLLW,PREPARED-FROM-RECIPE"
 },
 {
   data: 19382,
   value: "CANDIES,TAFFY,PREPARED-FROM-RECIPE"
 },
 {
   data: 19383,
   value: "CANDIES,TOFFEE,PREPARED-FROM-RECIPE"
 },
 {
   data: 19384,
   value: "CANDIES,DIVINITY,PREPARED-FROM-RECIPE"
 },
 {
   data: 19387,
   value: "FROZEN NOVELTIES,ICE TYPE,PINEAPPLE-COCONUT"
 },
 {
   data: 19393,
   value: "FROZEN YOGURTS,CHOC,SOFT-SERVE"
 },
 {
   data: 19400,
   value: "BANANA CHIPS"
 },
 {
   data: 19401,
   value: "CORNNUTS,BARBECUE-FLAVOR"
 },
 {
   data: 19402,
   value: "CORNNUTS,NACHO-FLAVOR"
 },
 {
   data: 19403,
   value: "CRISPED RICE BAR,ALMOND"
 },
 {
   data: 19404,
   value: "GRANOLA BARS,SOFT,UNCOATED,CHOC CHIP"
 },
 {
   data: 19405,
   value: "GRANOLA BARS,SOFT,UNCOATED,CHOC CHIP,GRAHAM&MARSHMLLW"
 },
 {
   data: 19406,
   value: "GRANOLA BARS,SOFT,UNCOATED,NUT&RAISIN"
 },
 {
   data: 19407,
   value: "SNACKS,BF STKS,SMOKED"
 },
 {
   data: 19408,
   value: "PORK SKINS,BARBECUE-FLAVOR"
 },
 {
   data: 19409,
   value: "FROSTING,GLAZ,CHC,PREP-FRM-RCIP,W/ BUTR,NFSMI RECIP NO. C-32"
 },
 {
   data: 19410,
   value: "SNACK,POTATO CHIPS,MADE FROM DRIED POTATOES,PLN"
 },
 {
   data: 19411,
   value: "POTATO CHIPS,PLAIN,SALTED"
 },
 {
   data: 19412,
   value: "POTATO CHIPS,MADE FROM DRIED POTATOES,CHEESE-FLAVOR"
 },
 {
   data: 19413,
   value: "SNACKS,RICE CAKES,BROWN RICE,CORN"
 },
 {
   data: 19414,
   value: "RICE CAKES,BROWN RICE,MULTIGRAIN"
 },
 {
   data: 19415,
   value: "SNACKS,POTATO STKS"
 },
 {
   data: 19416,
   value: "RICE CAKES,BROWN RICE,RYE"
 },
 {
   data: 19418,
   value: "SESAME STKS,WHEAT-BASED,SALTED"
 },
 {
   data: 19419,
   value: "CORN CAKES"
 },
 {
   data: 19420,
   value: "GRANOLA BARS,HARD,PNUT BUTTER"
 },
 {
   data: 19421,
   value: "POTATO CHIPS,CHEESE-FLAVOR"
 },
 {
   data: 19422,
   value: "SNACKS,POTATO CHIPS,RED FAT"
 },
 {
   data: 19423,
   value: "SNACKS,POTATO CHIPS,FAT-FREE,MADE W/OLESTRA"
 },
 {
   data: 19424,
   value: "SNACKS,TORTILLA CHIPS,NACHO-FLAVOR,RED FAT"
 },
 {
   data: 19433,
   value: "TORTILLA CHIPS,LOFAT,BKD WO/FAT"
 },
 {
   data: 19434,
   value: "CHEESE PUFFS & TWISTS,CORN BSD,BKD,LOFAT"
 },
 {
   data: 19435,
   value: "SNACKS,GRANOLA BAR,FRUIT-FILLED,NONFAT"
 },
 {
   data: 19436,
   value: "POPCORN,SUGAR SYRUP/CARAMEL,FAT-FREE"
 },
 {
   data: 19437,
   value: "POTATO CHIPS,FAT FREE,SALTED"
 },
 {
   data: 19438,
   value: "SNACKS,KELLOGG,KELLOGG'S RICE KRISPIES TREATS SQUARES"
 },
 {
   data: 19439,
   value: "SNACKS,KELLOGG'S LOFAT GRANOLA BAR,CRUNCHY ALMD/BRN SUGAR"
 },
 {
   data: 19440,
   value: "SNACKS,M&M MARS,KUDOS WHL GRAIN BARS,CHOC CHIP"
 },
 {
   data: 19441,
   value: "SNACKS,KELLOGG'S,NUTRI-GRAIN CRL BARS,FRUIT"
 },
 {
   data: 19444,
   value: "SNACKS,TORTILLA CHIPS,LOFAT,MADE W/OLESTRA,NACHO CHS"
 },
 {
   data: 19445,
   value: "SNACKS,POTATO CHIPS,FRM DRIED POTATOES,FAT-FREE,W/ OLESTRA"
 },
 {
   data: 19524,
   value: "TARO CHIPS"
 },
 {
   data: 19701,
   value: "CANDIES,SEMISWEET CHOC,MADE W/BUTTER"
 },
 {
   data: 19702,
   value: "GELATIN DSSRT,DRY MIX,W/ ADDED VIT C,SODIUM-CITRATE & SALT"
 },
 {
   data: 19703,
   value: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT,ADDED P,K,NA,VIT C"
 },
 {
   data: 19704,
   value: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT,NO ADDED NA"
 },
 {
   data: 19705,
   value: "PUDDINGS,BANANA,DRY MIX,INST,W/ ADDED OIL"
 },
 {
   data: 19706,
   value: "PUDDINGS,BANANA,DRY MIX,REG,W/ ADDED OIL"
 },
 {
   data: 19708,
   value: "PUDDINGS,LEMON,DRY MIX,REG,W/ ADDED OIL,K,NA"
 },
 {
   data: 19709,
   value: "PUDDINGS,TAPIOCA,DRY MIX,W/ NO ADDED SALT"
 },
 {
   data: 19710,
   value: "PUDDINGS,VANILLA,DRY MIX,REG,W/ ADDED OIL"
 },
 {
   data: 19719,
   value: "JAMS&PRESERVES,APRICOT"
 },
 {
   data: 19720,
   value: "SYRUPS,TABLE BLENDS,PANCAKE,W/2% MAPLE,W/ K"
 },
 {
   data: 19800,
   value: "CORN CAKES,VERY LO NA"
 },
 {
   data: 19802,
   value: "SNACKS,CORN-BASED,EXTRDD,PUFFS OR TWISTS,CHEESE-FLAVOR,UNENR"
 },
 {
   data: 19804,
   value: "SNACKS,CORN-BASE,EXTRUD,CHIPS,BARBECUE-FLAVOR,W/ENR MASA FLR"
 },
 {
   data: 19806,
   value: "POPCORN,AIR-POPPED,WHITE POPCORN"
 },
 {
   data: 19807,
   value: "SNACKS,POPCORN,OIL-POPPED,WHITE POPCORN,SALT ADDED"
 },
 {
   data: 19809,
   value: "POTATO CHIPS,PLN,MADE W/PART HYDR SOYBN OIL,SALTED"
 },
 {
   data: 19810,
   value: "POTATO CHIPS,PLN,MADE W/PART HYDR SOYBN OIL,UNSALTED"
 },
 {
   data: 19811,
   value: "POTATO CHIPS,PLN,UNSALTED"
 },
 {
   data: 19812,
   value: "PRETZELS,HARD,PLN,MADE W/UNENR FLR,SALTED"
 },
 {
   data: 19813,
   value: "PRETZELS,HARD,PLN,MADE W/UNENR FLR,UNSALTED"
 },
 {
   data: 19814,
   value: "SNACKS,PRETZELS,HARD,PLN,MADE W/ ENR FLR,UNSALTED"
 },
 {
   data: 19816,
   value: "RICE CAKES,BROWN RICE,PLN,UNSALTED"
 },
 {
   data: 19817,
   value: "RICE CAKES,BROWN RICE,BUCKWHEAT,UNSALTED"
 },
 {
   data: 19818,
   value: "RICE CAKES,BROWN RICE,MULTIGRAIN,UNSALTED"
 },
 {
   data: 19819,
   value: "RICE CAKES,BROWN RICE,SESAME SD,UNSALTED"
 },
 {
   data: 19820,
   value: "SESAME STKS,WHEAT-BASED,UNSALTED"
 },
 {
   data: 19821,
   value: "TRAIL MIX,REG,UNSALTED"
 },
 {
   data: 19822,
   value: "TRAIL MIX,REG,W/CHOC CHIPS,UNSALTED NUTS&SEEDS"
 },
 {
   data: 19823,
   value: "POTATO CHIPS,WO/SALT,RED FAT"
 },
 {
   data: 19833,
   value: "TORTILLA CHIPS,LOFAT,UNSALTED"
 },
 {
   data: 19856,
   value: "FROZEN NOVELTIES,JUC TYPE,POPSICLE SCRIBBLERS"
 },
 {
   data: 19857,
   value: "SNACKS,TORTILLA CHIPS,NACHO-FLAVOR,MADE W/ENR MASA FLR"
 },
 {
   data: 19858,
   value: "CANDIES,SUGAR-COATED ALMONDS"
 },
 {
   data: 19859,
   value: "COCOA,DRY PDR,HI-FAT OR BRKFST,PLN"
 },
 {
   data: 19860,
   value: "COCOA,DRY PDR,HI-FAT OR BRKFST,PROC W/ALKALI"
 },
 {
   data: 19866,
   value: "CANDIES,SOFT FRUIT & NUT SQUARES"
 },
 {
   data: 19867,
   value: "ICE CREAMS,VANILLA,FAT FREE"
 },
 {
   data: 19868,
   value: "SWEETENERS,TABLETOP,SUCRALOSE,SPLENDA PACKETS"
 },
 {
   data: 19871,
   value: "FROZEN NOVELTIES,NO SUGAR ADDED,FUDGESICLE POPS"
 },
 {
   data: 19872,
   value: "FROZEN NOVELTIES,FAT FREE FUDGESICLE BARS"
 },
 {
   data: 19873,
   value: "FROZ NOVELTIES,ICE TYPE,SUGAR FREE,ORNGE,CHRY,& GRP POPSICLE"
 },
 {
   data: 19874,
   value: "FRZ NVL, KLONDIKE,SLIM-A-BEAR FUDG BR,98% FT FR,NO SGR ADDED"
 },
 {
   data: 19875,
   value: "ICE CREAMS,BREYERS,ALL NAT LT VANILLA"
 },
 {
   data: 19876,
   value: "ICE CREAMS,BREYERS,ALL NAT LT FRENCH VANILLA"
 },
 {
   data: 19877,
   value: "ICE CREAMS,BREYERS,98% FAT FREE VANILLA"
 },
 {
   data: 19878,
   value: "ICE CREAMS,BREYERS,ALL NAT LT VANILLA CHOC STRAWBERRY"
 },
 {
   data: 19879,
   value: "ICE CREAMS,BREYERS,ALL NAT LT MINT CHOC CHIP"
 },
 {
   data: 19880,
   value: "ICE CREAMS,BREYERS,NO SUGAR ADDED,BUTTER PECAN"
 },
 {
   data: 19881,
   value: "ICE CREAMS,BREYERS,NO SUGAR ADDED,FRENCH VANILLA"
 },
 {
   data: 19882,
   value: "ICE CREAMS,BREYERS,NO SUGAR ADDED,VANILLA"
 },
 {
   data: 19883,
   value: "ICE CREAMS,BREYERS,NO SUGAR ADDED,VANILLA FUDGE TWIRL"
 },
 {
   data: 19884,
   value: "ICE CREAMS,BREYERS,NO SUGAR ADDED,VANILLA CHOC STRAWBERRY"
 },
 {
   data: 19885,
   value: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR VANILLA CONE"
 },
 {
   data: 19886,
   value: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR CHOC CONE"
 },
 {
   data: 19887,
   value: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR VANILLA SNDWCH"
 },
 {
   data: 19888,
   value: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR CHOC SNDWCH"
 },
 {
   data: 19889,
   value: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR MINT SNDWCH"
 },
 {
   data: 19890,
   value: "FROZEN NOVL,KLONDIKE,SLIM-A-BEAR,NO SGR ADDED,STICKLESS BAR"
 },
 {
   data: 19891,
   value: "FROZEN NOVELTIES,NO SUGAR ADDED CREAMSICLE POPS"
 },
 {
   data: 19892,
   value: "FROZEN NOVELTIES,SUGAR FREE,CREAMSICLE POPS"
 },
 {
   data: 19893,
   value: "ICE CREAMS,BREYERS,ALL NAT LT FRENCH CHOC"
 },
 {
   data: 19894,
   value: "ICE CREAMS,BREYERS,98% FAT FREE CHOC"
 },
 {
   data: 19895,
   value: "ICE CREAMS,BREYERS,NO SUGAR ADDED,CHOC CARAMEL"
 },
 {
   data: 19896,
   value: "CANDIES,REESE'S FAST BREAK,CANDY BAR"
 },
 {
   data: 19897,
   value: "CANDIES,MARS SNACKFOOD US,COCOAVIA CHOC COVERED ALMONDS"
 },
 {
   data: 19898,
   value: "ICE CREAMS,REG,LO CARBOHYDRATE,VANILLA"
 },
 {
   data: 19899,
   value: "ICE CREAMS,REG,LO CARBOHYDRATE,CHOC"
 },
 {
   data: 19902,
   value: "CHOCOLATE,DK,45- 59% CACAO SOL"
 },
 {
   data: 19903,
   value: "CHOCOLATE,DK,60-69% CACAO SOL"
 },
 {
   data: 19904,
   value: "CHOCOLATE,DK,70-85% CACAO SOL"
 },
 {
   data: 19905,
   value: "CANDIES,CHOC,DK,NFS (45-59% CACAO SOL 90%; 60-69% CACAO SOL"
 },
 {
   data: 19906,
   value: "SWEETENERS,FOR BAKING,BROWN,CONTAINS SUGAR & SUCRALOSE"
 },
 {
   data: 19907,
   value: "SWEETENERS,FOR BAKING,CONTAINS SUGAR & SUCRALOSE"
 },
 {
   data: 19908,
   value: "SUGAR,TURBINADO"
 },
 {
   data: 19909,
   value: "SWEETENERS,SUGAR SUB,GRANULATED,BROWN"
 },
 {
   data: 19910,
   value: "CANDIES,CRISPY BAR W/ PNUT BUTTER FILLING"
 },
 {
   data: 19911,
   value: "SYRUP,MAPLE,CANADIAN"
 },
 {
   data: 19912,
   value: "SWEETENER,SYRUP,AGAVE"
 },
 {
   data: 20001,
   value: "AMARANTH,UNCKD"
 },
 {
   data: 20002,
   value: "AMARANTH GRAIN,CKD"
 },
 {
   data: 20003,
   value: "ARROWROOT FLOUR"
 },
 {
   data: 20004,
   value: "BARLEY,HULLED"
 },
 {
   data: 20005,
   value: "BARLEY,PEARLED,RAW"
 },
 {
   data: 20006,
   value: "BARLEY,PEARLED,COOKED"
 },
 {
   data: 20008,
   value: "BUCKWHEAT"
 },
 {
   data: 20009,
   value: "BUCKWHEAT GROATS,RSTD,DRY"
 },
 {
   data: 20010,
   value: "BUCKWHEAT GROATS,RSTD,CKD"
 },
 {
   data: 20011,
   value: "BUCKWHEAT FLR,WHOLE-GROAT"
 },
 {
   data: 20012,
   value: "BULGUR,DRY"
 },
 {
   data: 20013,
   value: "BULGUR,COOKED"
 },
 {
   data: 20014,
   value: "CORN,YELLOW"
 },
 {
   data: 20015,
   value: "CORN BRAN,CRUDE"
 },
 {
   data: 20016,
   value: "CORN FLR,WHOLE-GRAIN,YEL"
 },
 {
   data: 20017,
   value: "CORN FLR,MASA,ENR,WHITE"
 },
 {
   data: 20018,
   value: "CORN FLR,DEGERMED,UNENR,YEL"
 },
 {
   data: 20019,
   value: "CORN FLR,MASA,UNENR,WHITE"
 },
 {
   data: 20020,
   value: "CORNMEAL,WHOLE-GRAIN,YEL"
 },
 {
   data: 20022,
   value: "CORNMEAL,DEGERMED,ENR,YEL"
 },
 {
   data: 20023,
   value: "CORNMEAL,SELF-RISING,BOLTED,PLN,ENR,YEL"
 },
 {
   data: 20024,
   value: "CORNMEAL,SELF-RISING,BOLTED,W/WHEAT FLR,ENR,YEL"
 },
 {
   data: 20025,
   value: "CORNMEAL,SELF-RISING,DEGERMED,ENR,YEL"
 },
 {
   data: 20027,
   value: "CORNSTARCH"
 },
 {
   data: 20028,
   value: "COUSCOUS,DRY"
 },
 {
   data: 20029,
   value: "COUSCOUS,COOKED"
 },
 {
   data: 20030,
   value: "HOMINY,CANNED,WHITE"
 },
 {
   data: 20031,
   value: "MILLET,RAW"
 },
 {
   data: 20032,
   value: "MILLET,COOKED"
 },
 {
   data: 20033,
   value: "OAT BRAN,RAW"
 },
 {
   data: 20034,
   value: "OAT BRAN,COOKED"
 },
 {
   data: 20035,
   value: "QUINOA,UNCKD"
 },
 {
   data: 20036,
   value: "RICE,BROWN,LONG-GRAIN,RAW"
 },
 {
   data: 20037,
   value: "RICE,BROWN,LONG-GRAIN,CKD"
 },
 {
   data: 20038,
   value: "OATS"
 },
 {
   data: 20040,
   value: "RICE,BROWN,MEDIUM-GRAIN,RAW"
 },
 {
   data: 20041,
   value: "RICE,BROWN,MEDIUM-GRAIN,CKD"
 },
 {
   data: 20044,
   value: "RICE,WHITE,LONG-GRAIN,REG,RAW,ENR"
 },
 {
   data: 20045,
   value: "RICE,WHITE,LONG-GRAIN,REG,CKD"
 },
 {
   data: 20046,
   value: "RICE,WHITE,LONG-GRAIN,PARBLD,ENR,DRY"
 },
 {
   data: 20047,
   value: "RICE,WHITE,LONG-GRAIN,PARBLD,ENR,CKD"
 },
 {
   data: 20048,
   value: "RICE,WHITE,LONG-GRAIN,PRECKD OR INST,ENR,DRY"
 },
 {
   data: 20049,
   value: "RICE,WHITE,LONG-GRAIN,PRECKD OR INST,ENR,PREP"
 },
 {
   data: 20050,
   value: "RICE,WHITE,MEDIUM-GRAIN,RAW,ENR"
 },
 {
   data: 20051,
   value: "RICE,WHITE,MEDIUM-GRAIN,CKD"
 },
 {
   data: 20052,
   value: "RICE,WHITE,SHORT-GRAIN,RAW"
 },
 {
   data: 20053,
   value: "RICE,WHITE,SHORT-GRAIN,CKD"
 },
 {
   data: 20054,
   value: "RICE,WHITE,GLUTINOUS,RAW"
 },
 {
   data: 20055,
   value: "RICE,WHITE,GLUTINOUS,CKD"
 },
 {
   data: 20056,
   value: "RICE,WHITE,WITH PASTA,DRY"
 },
 {
   data: 20057,
   value: "RICE,WHITE,W/PASTA,CKD"
 },
 {
   data: 20058,
   value: "RICE,WHITE,STMD,CHINESE RESTAURANT"
 },
 {
   data: 20060,
   value: "RICE BRAN,CRUDE"
 },
 {
   data: 20061,
   value: "RICE FLOUR,WHITE"
 },
 {
   data: 20062,
   value: "RYE"
 },
 {
   data: 20063,
   value: "RYE FLOUR,DARK"
 },
 {
   data: 20064,
   value: "RYE FLOUR,MEDIUM"
 },
 {
   data: 20065,
   value: "RYE FLOUR,LIGHT"
 },
 {
   data: 20066,
   value: "SEMOLINA,ENRICHED"
 },
 {
   data: 20067,
   value: "SORGHUM"
 },
 {
   data: 20068,
   value: "TAPIOCA,PEARL,DRY"
 },
 {
   data: 20069,
   value: "TRITICALE"
 },
 {
   data: 20070,
   value: "TRITICALE FLR,WHOLE-GRAIN"
 },
 {
   data: 20071,
   value: "WHEAT,HARD RED SPRING"
 },
 {
   data: 20072,
   value: "WHEAT,HARD RED WINTER"
 },
 {
   data: 20073,
   value: "WHEAT,SOFT RED WINTER"
 },
 {
   data: 20074,
   value: "WHEAT,HARD WHITE"
 },
 {
   data: 20075,
   value: "WHEAT,SOFT WHITE"
 },
 {
   data: 20076,
   value: "WHEAT,DURUM"
 },
 {
   data: 20077,
   value: "WHEAT BRAN,CRUDE"
 },
 {
   data: 20078,
   value: "WHEAT GERM,CRUDE"
 },
 {
   data: 20080,
   value: "WHEAT FLOUR,WHOLE-GRAIN"
 },
 {
   data: 20081,
   value: "WHEAT FLR,WHITE,ALL-PURPOSE,ENR,BLEACHED"
 },
 {
   data: 20082,
   value: "WHEAT FLR,WHITE,ALL-PURPOSE,SELF-RISING,ENR"
 },
 {
   data: 20083,
   value: "WHEAT FLR,WHITE,BREAD,ENR"
 },
 {
   data: 20084,
   value: "WHEAT FLR,WHITE,CAKE,ENR"
 },
 {
   data: 20086,
   value: "WHEAT FLR,WHITE,TORTILLA MIX,ENR"
 },
 {
   data: 20087,
   value: "WHEAT,SPROUTED"
 },
 {
   data: 20088,
   value: "WILD RICE,RAW"
 },
 {
   data: 20089,
   value: "WILD RICE,COOKED"
 },
 {
   data: 20090,
   value: "RICE FLOUR,BROWN"
 },
 {
   data: 20091,
   value: "PASTA,CORN,DRY"
 },
 {
   data: 20092,
   value: "PASTA,CORN,COOKED"
 },
 {
   data: 20093,
   value: "PASTA,FRESH-REFRIGERATED,PLN,AS PURCHASED"
 },
 {
   data: 20094,
   value: "PASTA,FRESH-REFRIGERATED,PLN,CKD"
 },
 {
   data: 20095,
   value: "PASTA,FRESH-REFRIGERATED,SPINACH,AS PURCHASED"
 },
 {
   data: 20096,
   value: "PASTA,FRESH-REFRIGERATED,SPINACH,CKD"
 },
 {
   data: 20097,
   value: "PASTA,HOMEMADE,MADE W/EGG,CKD"
 },
 {
   data: 20098,
   value: "PASTA,HOMEMADE,MADE WO/EGG,CKD"
 },
 {
   data: 20099,
   value: "MACARONI,DRY,ENR"
 },
 {
   data: 20100,
   value: "MACARONI,COOKED,ENRICHED"
 },
 {
   data: 20101,
   value: "MACARONI,PROTEIN-FORTIFIED,DRY,ENR,(N X 5.70)"
 },
 {
   data: 20102,
   value: "MACARONI,PROTEIN-FORTIFIED,CKD,ENR,(N X 5.70)"
 },
 {
   data: 20105,
   value: "MACARONI,VEG,DRY,ENR"
 },
 {
   data: 20106,
   value: "MACARONI,VEG,CKD,ENR"
 },
 {
   data: 20107,
   value: "MACARONI,WHOLE-WHEAT,DRY"
 },
 {
   data: 20108,
   value: "MACARONI,WHOLE-WHEAT,CKD"
 },
 {
   data: 20109,
   value: "NOODLES,EGG,DRY,ENRICHED"
 },
 {
   data: 20110,
   value: "NOODLES,EGG,CKD,ENR"
 },
 {
   data: 20111,
   value: "NOODLES,EGG,SPINACH,DRY,ENR"
 },
 {
   data: 20112,
   value: "NOODLES,EGG,SPINACH,CKD,ENR"
 },
 {
   data: 20113,
   value: "NOODLES,CHINESE,CHOW MEIN"
 },
 {
   data: 20114,
   value: "NOODLES,JAPANESE,SOBA,DRY"
 },
 {
   data: 20115,
   value: "NOODLES,JAPANESE,SOBA,CKD"
 },
 {
   data: 20116,
   value: "NOODLES,JAPANESE,SOMEN,DRY"
 },
 {
   data: 20117,
   value: "NOODLES,JAPANESE,SOMEN,CKD"
 },
 {
   data: 20118,
   value: "NOODLES,FLAT,CRUNCHY,CHINESE RESTAURANT"
 },
 {
   data: 20120,
   value: "SPAGHETTI,DRY,ENRICHED"
 },
 {
   data: 20121,
   value: "SPAGHETTI,CKD,ENR,WO/ SALT"
 },
 {
   data: 20122,
   value: "SPAGHETTI,PROTEIN-FORTIFIED,DRY,ENR (N X 5.70)"
 },
 {
   data: 20123,
   value: "SPAGHETTI,PROTEIN-FORTIFIED,CKD,ENR (N X 5.70)"
 },
 {
   data: 20124,
   value: "SPAGHETTI,WHOLE-WHEAT,DRY"
 },
 {
   data: 20125,
   value: "SPAGHETTI,WHOLE-WHEAT,CKD"
 },
 {
   data: 20126,
   value: "SPAGHETTI,SPINACH,DRY"
 },
 {
   data: 20127,
   value: "SPAGHETTI,SPINACH,COOKED"
 },
 {
   data: 20129,
   value: "WHEAT FLOURS,BREAD,UNENR"
 },
 {
   data: 20130,
   value: "BARLEY FLOUR OR MEAL"
 },
 {
   data: 20131,
   value: "BARLEY MALT FLR"
 },
 {
   data: 20132,
   value: "OAT FLR,PART DEBRANNED"
 },
 {
   data: 20133,
   value: "RICE NOODLES,DRY"
 },
 {
   data: 20134,
   value: "RICE NOODLES,COOKED"
 },
 {
   data: 20137,
   value: "QUINOA,CKD"
 },
 {
   data: 20138,
   value: "KAMUT,UNCKD"
 },
 {
   data: 20139,
   value: "KAMUT,CKD"
 },
 {
   data: 20140,
   value: "SPELT,UNCKD"
 },
 {
   data: 20141,
   value: "SPELT,CKD"
 },
 {
   data: 20142,
   value: "TEFF,UNCKD"
 },
 {
   data: 20143,
   value: "TEFF,CKD"
 },
 {
   data: 20301,
   value: "MACARONI,PROTEIN-FORTIFIED,DRY,ENR,(N X 6.25)"
 },
 {
   data: 20302,
   value: "MACARONI,PROTEIN-FORTIFIED,CKD,ENR,(N X 6.25)"
 },
 {
   data: 20310,
   value: "NOODLES,EGG,CKD,ENR,W/ SALT"
 },
 {
   data: 20314,
   value: "CORN,WHITE"
 },
 {
   data: 20315,
   value: "CORN FLR,WHOLE-GRAIN,BLUE (HARINA DE MAIZ MORADO)"
 },
 {
   data: 20316,
   value: "CORN FLR,WHOLE-GRAIN,WHITE"
 },
 {
   data: 20317,
   value: "CORN FLR,MASA,ENR,YEL"
 },
 {
   data: 20320,
   value: "CORNMEAL,WHOLE-GRAIN,WHITE"
 },
 {
   data: 20321,
   value: "SPAGHETTI,CKD,ENR,W/ SALT"
 },
 {
   data: 20322,
   value: "CORNMEAL,DEGERMED,ENR,WHITE"
 },
 {
   data: 20323,
   value: "CORNMEAL,SELF-RISING,BOLTED,PLN,ENR,WHITE"
 },
 {
   data: 20324,
   value: "CORNMEAL,SELF-RISING,BOLTED,W/WHEAT FLR,ENR,WHITE"
 },
 {
   data: 20325,
   value: "CORNMEAL,SELF-RISING,DEGERMED,ENR,WHITE"
 },
 {
   data: 20330,
   value: "HOMINY,CANNED,YELLOW"
 },
 {
   data: 20345,
   value: "RICE,WHITE,LONG-GRAIN,REG,CKD,ENR,W/SALT"
 },
 {
   data: 20381,
   value: "WHEAT FLR,WHITE,ALL-PURPOSE,ENR,CALCIUM-FORTIFIED"
 },
 {
   data: 20400,
   value: "MACARONI,CKD,UNENR"
 },
 {
   data: 20409,
   value: "NOODLES,EGG,DRY,UNENR"
 },
 {
   data: 20410,
   value: "NOODLES,EGG,CKD,UNENR,WO/ SALT"
 },
 {
   data: 20420,
   value: "SPAGHETTI,DRY,UNENRICHED"
 },
 {
   data: 20421,
   value: "SPAGHETTI,CKD,UNENR,WO/ SALT"
 },
 {
   data: 20422,
   value: "CORNMEAL,DEGERMED,UNENR,YEL"
 },
 {
   data: 20444,
   value: "RICE,WHITE,LONG-GRAIN,REG,RAW,UNENR"
 },
 {
   data: 20445,
   value: "RICE,WHITE,LONG-GRAIN,REG,CKD,UNENR,WO/SALT"
 },
 {
   data: 20446,
   value: "RICE,WHITE,LONG-GRAIN,PARBLD,UNENR,DRY"
 },
 {
   data: 20447,
   value: "RICE,WHITE,LONG-GRAIN,PARBLD,UNENR,CKD"
 },
 {
   data: 20450,
   value: "RICE,WHITE,MEDIUM-GRAIN,RAW,UNENR"
 },
 {
   data: 20451,
   value: "RICE,WHITE,MEDIUM-GRAIN,CKD,UNENR"
 },
 {
   data: 20452,
   value: "RICE,WHITE,SHORT-GRAIN,RAW,UNENR"
 },
 {
   data: 20453,
   value: "RICE,WHITE,SHORT-GRAIN,CKD,UNENR"
 },
 {
   data: 20466,
   value: "SEMOLINA,UNENRICHED"
 },
 {
   data: 20481,
   value: "WHEAT FLR,WHITE,ALL-PURPOSE,UNENR"
 },
 {
   data: 20499,
   value: "MACARONI,DRY,UNENRICHED"
 },
 {
   data: 20510,
   value: "NOODLES,EGG,CKD,UNENR,W/ SALT"
 },
 {
   data: 20521,
   value: "SPAGHETTI,CKD,UNENR,W/ SALT"
 },
 {
   data: 20522,
   value: "CORNMEAL,DEGERMED,UNENR,WHITE"
 },
 {
   data: 20523,
   value: "SPAGHETTI,PROTEIN-FORTIFIED,CKD,ENR (N X 6.25)"
 },
 {
   data: 20545,
   value: "RICE,WHITE,LONG-GRAIN,REG,CKD,UNENR,W/SALT"
 },
 {
   data: 20581,
   value: "WHEAT FLR,WHITE,ALL-PURPOSE,ENR,UNBLEACHED"
 },
 {
   data: 20622,
   value: "SPAGHETTI,PROTEIN-FORTIFIED,DRY,ENR (N X 6.25)"
 },
 {
   data: 20623,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),9% PROT,BLEACHED,ENR"
 },
 {
   data: 20624,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),9% PROT,BLEACHED,UNENR"
 },
 {
   data: 20628,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),10% PROT,BLEACHED,ENR"
 },
 {
   data: 20629,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),10% PROT,BLEACHED,UNENR"
 },
 {
   data: 20630,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),10% PROT,UNBLEACHED,ENR"
 },
 {
   data: 20634,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),11.5% PROT,BLEACHED,ENR"
 },
 {
   data: 20635,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),11.5% PROT,BLEACHED,UNENR"
 },
 {
   data: 20636,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),11.5% PROT,UNBLEACHED,ENR"
 },
 {
   data: 20640,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),13% PROT,BLEACHED,ENR"
 },
 {
   data: 20641,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),13% PROT,BLEACHED,UNENR"
 },
 {
   data: 20645,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),15% PROT,BLEACHED,ENR"
 },
 {
   data: 20646,
   value: "WHEAT FLR,WHITE (INDUSTRIAL),15% PROT,BLEACHED,UNENR"
 },
 {
   data: 20647,
   value: "MILLET FLR"
 },
 {
   data: 20648,
   value: "SORGHUM FLR"
 },
 {
   data: 20649,
   value: "WHEAT FLR,WHOLE-GRAIN,SOFT WHEAT"
 },
 {
   data: 21002,
   value: "FAST FOODS  BISCUIT  W/ EGG"
 },
 {
   data: 21003,
   value: "FAST FOODS,BISCUIT,W/EGG&BACON"
 },
 {
   data: 21004,
   value: "FAST FOODS,BISCUIT,W/EGG&HAM"
 },
 {
   data: 21005,
   value: "BREAKFAST ITEMS,BISCUIT W/EGG&SAUSAGE"
 },
 {
   data: 21006,
   value: "FAST FOODS,BISCUIT W/ EGG & STEAK"
 },
 {
   data: 21007,
   value: "FAST FOODS,BISCUIT,W/EGG,CHS,&BACON"
 },
 {
   data: 21008,
   value: "FAST FOODS,BISCUIT,W/HAM"
 },
 {
   data: 21009,
   value: "FAST FOODS,BISCUIT,W/SAUSAGE"
 },
 {
   data: 21011,
   value: "FAST FOODS,CROISSANT,W/EGG&CHS"
 },
 {
   data: 21012,
   value: "FAST FOODS,CROISSANT,W/EGG,CHS,&BACON"
 },
 {
   data: 21013,
   value: "FAST FOODS,CROISSANT,W/EGG,CHS,&HAM"
 },
 {
   data: 21014,
   value: "FAST FOODS,CROISSANT,W/EGG,CHS,&SAUSAGE"
 },
 {
   data: 21015,
   value: "FAST FOODS,DANISH PASTRY,CHS"
 },
 {
   data: 21016,
   value: "FAST FOODS,DANISH PASTRY,CINN"
 },
 {
   data: 21017,
   value: "FAST FOODS,DANISH PASTRY,FRUIT"
 },
 {
   data: 21018,
   value: "FAST FOODS,EGG,SCRAMBLED"
 },
 {
   data: 21019,
   value: "FAST FOODS,ENG MUFFIN,W/BUTTER"
 },
 {
   data: 21020,
   value: "FAST FOODS,ENG MUFFIN,W/CHS&SAUSAGE"
 },
 {
   data: 21021,
   value: "FAST FOODS,ENG MUFFIN,W/EGG,CHS,&CANADIAN BACON"
 },
 {
   data: 21022,
   value: "FAST FOODS,ENG MUFFIN,W/EGG,CHS,&SAUSAGE"
 },
 {
   data: 21023,
   value: "FAST FOODS,FRENCH TOAST W/ BUTTER"
 },
 {
   data: 21024,
   value: "FAST FOODS,FRENCH TOAST STKS"
 },
 {
   data: 21025,
   value: "FAST FOODS,PANCAKES W/BUTTER&SYRUP"
 },
 {
   data: 21026,
   value: "FAST FOODS,POTATOES,HASHED BROWN"
 },
 {
   data: 21027,
   value: "FAST FOODS,BROWNIE"
 },
 {
   data: 21028,
   value: "FAST FOODS,VANILLA,LT,SOFT-SERVE ICE CRM,W/ CONE"
 },
 {
   data: 21029,
   value: "FAST FOODS,COOKIES,ANIMAL CRACKERS"
 },
 {
   data: 21030,
   value: "FAST FOODS,COOKIES,CHOC CHIP"
 },
 {
   data: 21032,
   value: "FAST FOODS,SUNDAE,CARAMEL"
 },
 {
   data: 21033,
   value: "FAST FOODS,SUNDAE,HOT FUDGE"
 },
 {
   data: 21034,
   value: "FAST FOODS,SUNDAE,STRAWBERRY"
 },
 {
   data: 21035,
   value: "FAST FOODS,CHICK,BREADED&FRIED,DK MEAT (DRUMSTK OR THIGH)"
 },
 {
   data: 21036,
   value: "FAST FOODS,CHICK,BREADED&FRIED,LT MEAT (BREAST OR WING)"
 },
 {
   data: 21042,
   value: "FAST FOODS,CHILI CON CARNE"
 },
 {
   data: 21043,
   value: "FAST FOODS,CLAMS,BREADED&FRIED"
 },
 {
   data: 21046,
   value: "ENTREES,CRAB CAKE"
 },
 {
   data: 21047,
   value: "ENTREES,FISH FILLET,BATTERED OR BREADED,&FRIED"
 },
 {
   data: 21048,
   value: "FAST FOODS,OYSTERS,BATTERED OR BREADED,&FRIED"
 },
 {
   data: 21052,
   value: "FAST FOODS,SALAD,VEG,TOSSED,WO/DRSNG"
 },
 {
   data: 21053,
   value: "FAST FOODS,SALAD,VEG,TOSSED,WO/DRSNG,W/CHS&EGG"
 },
 {
   data: 21054,
   value: "FAST FOODS,SALAD,VEG,TOSSED,WO/DRSNG,W/CHICK"
 },
 {
   data: 21055,
   value: "FAST FOODS,SALAD,VEG,TOSSED,WO/DRSNG,W/PASTA&SEAFOOD"
 },
 {
   data: 21056,
   value: "FAST FOODS,SALAD,VEG,TOSSED,WO/DRSNG,W/SHRIMP"
 },
 {
   data: 21057,
   value: "FAST FOODS,SALAD,VEG TOSSED,WO/DRSNG,W/TURKEY,HAM&CHS"
 },
 {
   data: 21058,
   value: "FAST FOODS,SCALLOPS,BREADED&FRIED"
 },
 {
   data: 21059,
   value: "FAST FOODS,SHRIMP,BREADED&FRIED"
 },
 {
   data: 21060,
   value: "FAST FOODS,BURRITO,W/BNS"
 },
 {
   data: 21061,
   value: "FAST FOODS,BURRITO,W/BNS&CHS"
 },
 {
   data: 21062,
   value: "FAST FOODS,BURRITO,W/BNS&CHILI PEPPERS"
 },
 {
   data: 21063,
   value: "FAST FOODS,BURRITO,W/ BNS & BF"
 },
 {
   data: 21064,
   value: "FAST FOODS,BURRITO,W/BNS,CHS,&BF"
 },
 {
   data: 21065,
   value: "FAST FOODS,BURRITO,W/BNS,CHS,&CHILI PEPPERS"
 },
 {
   data: 21066,
   value: "FAST FOODS,BURRITO,W/BF"
 },
 {
   data: 21067,
   value: "FAST FOODS,BURRITO,W/BF&CHILI PEPPERS"
 },
 {
   data: 21068,
   value: "FAST FOODS,BURRITO,W/BF,CHS,&CHILI PEPPERS"
 },
 {
   data: 21069,
   value: "FAST FOODS,BURRITO,W/FRUIT (APPL OR CHERRY)"
 },
 {
   data: 21070,
   value: "FAST FOODS,CHIMICHANGA,W/BF"
 },
 {
   data: 21071,
   value: "FAST FOODS,CHIMICHANGA,W/BF&CHS"
 },
 {
   data: 21072,
   value: "FAST FOODS,CHIMICHANGA,W/BF&RED CHILI PEPPERS"
 },
 {
   data: 21073,
   value: "FAST FOODS,CHIMICHANGA,W/BF,CHS,&RED CHILI PEPPERS"
 },
 {
   data: 21074,
   value: "FAST FOODS,ENCHILADA,W/CHS"
 },
 {
   data: 21075,
   value: "FAST FOODS,ENCHILADA,W/CHS&BF"
 },
 {
   data: 21076,
   value: "FAST FOODS,ENCHIRITO,W/CHS,BF,&BNS"
 },
 {
   data: 21077,
   value: "FAST FOODS,FRIJOLES W/CHS"
 },
 {
   data: 21078,
   value: "FAST FOODS,NACHOS,W/CHS"
 },
 {
   data: 21079,
   value: "FAST FOODS,NACHOS,W/CHS&JALAPENO PEPPERS"
 },
 {
   data: 21080,
   value: "FAST FOODS,NACHOS,W/CHS,BNS,GROUND BF,&PEPPERS"
 },
 {
   data: 21081,
   value: "FAST FOODS,NACHOS,W/CINN&SUGAR"
 },
 {
   data: 21082,
   value: "FAST FOODS,TACO W/ BF,CHS & LETTUCE,HARD SHELL"
 },
 {
   data: 21083,
   value: "FAST FOODS,TACO SALAD"
 },
 {
   data: 21084,
   value: "FAST FOODS,TACO SALAD W/CHILI CON CARNE"
 },
 {
   data: 21085,
   value: "FAST FOODS,TOSTADA,W/BNS&CHS"
 },
 {
   data: 21086,
   value: "FAST FOODS,TOSTADA,W/BNS,BF,&CHS"
 },
 {
   data: 21087,
   value: "FAST FOODS,TOSTADA,W/BF&CHS"
 },
 {
   data: 21088,
   value: "TOSTADA WITH GUACAMOLE"
 },
 {
   data: 21089,
   value: "FAST FOODS,CHEESEBURGER; SINGLE,REG PATTY; PLN"
 },
 {
   data: 21090,
   value: "FAST FOODS,CHEESEBURGER; SINGLE,REG PATTY,W/ CONDMNT"
 },
 {
   data: 21091,
   value: "FAST FOODS,CHEESEBURGER; SINGLE,REG PATTY,W/ CONDMNT & VEG"
 },
 {
   data: 21092,
   value: "FAST FOODS,CHEESEBURGER; DOUBLE,REG PATTY; PLN"
 },
 {
   data: 21093,
   value: "FAST FOODS,CHEESEBURGER; DOUBLE,REG PATTY,W/ CONDMNT & VEG"
 },
 {
   data: 21094,
   value: "FAST FOODS,CHEESEBURGER,DOUBLE,REG PATTY & BUN,PLN"
 },
 {
   data: 21095,
   value: "FAST FOODS,CHSEBURGER; DBLE,REG,PATTY & BN; W/ CONDMNT & VEG"
 },
 {
   data: 21096,
   value: "FAST FOODS,CHEESEBURGER; SINGLE,LRG PATTY; PLN"
 },
 {
   data: 21097,
   value: "FAST FOODS,CHESEBURGER; SINGLE,LRG PATTY; W/ CONDMNT & BACON"
 },
 {
   data: 21098,
   value: "FAST FOODS,CHEESEBURGER; SINGLE,LRG PATTY; W/ CONDMNT & VEG"
 },
 {
   data: 21099,
   value: "FAST FOODS,CHSBURGER; SINGLE,LRG PATTY; W/ CONDMNT,VEG & HAM"
 },
 {
   data: 21100,
   value: "FAST FOODS,CHEESEBURGER; DOUBLE,LRG PATTY,W/ CONDMNT & VEG"
 },
 {
   data: 21101,
   value: "FAST FOODS,CHEESEBURGER; TRIPLE,REG PATTY; PLN"
 },
 {
   data: 21102,
   value: "FAST FOODS,CHICK FILLET SNDWCH,PLN"
 },
 {
   data: 21103,
   value: "FAST FOODS,CHICK FILLET SNDWCH,W/CHS"
 },
 {
   data: 21104,
   value: "FAST FOODS,EGG&CHS SNDWCH"
 },
 {
   data: 21105,
   value: "FAST FOODS,FISH SNDWCH,W/TARTAR SAU"
 },
 {
   data: 21106,
   value: "FAST FOODS,FISH SNDWCH,W/TARTAR SAU&CHS"
 },
 {
   data: 21107,
   value: "FAST FOODS,HAMBURGER; SINGLE,REG PATTY; PLN"
 },
 {
   data: 21108,
   value: "FAST FOODS,HAMBURGER; SINGLE,REG PATTY; W/ CONDMNT"
 },
 {
   data: 21109,
   value: "FAST FOODS,HAMBURGER; SINGLE,REG PATTY; W/ CONDMNT & VEG"
 },
 {
   data: 21110,
   value: "FAST FOODS,HAMBURGER; DOUBLE,REG,PATTY; PLN"
 },
 {
   data: 21111,
   value: "FAST FOODS,HAMBURGER; DOUBLE,REG PATTY; W/ CONDMNT"
 },
 {
   data: 21112,
   value: "FAST FOODS,HAMBURGER; SINGLE,LRG PATTY; PLN"
 },
 {
   data: 21113,
   value: "FAST FOODS,HAMBURGER; SINGLE,LRG PATTY; W/ CONDMNT & VEG"
 },
 {
   data: 21114,
   value: "FAST FOODS,HAMBURGER; DOUBLE,LRG PATTY; W/ CONDMNT & VEG"
 },
 {
   data: 21115,
   value: "FAST FOODS,HAMBURGER,LRG,TRIPLE PATTY,W/CONDMNT"
 },
 {
   data: 21116,
   value: "FAST FOODS,HAM&CHS SNDWCH"
 },
 {
   data: 21117,
   value: "FAST FOODS,HAM,EGG,&CHS SNDWCH"
 },
 {
   data: 21118,
   value: "FAST FOODS,HOTDOG,PLAIN"
 },
 {
   data: 21119,
   value: "FAST FOODS,HOTDOG,W/CHILI"
 },
 {
   data: 21120,
   value: "FAST FOODS,HOTDOG,W/CORN FLR COATING (CORNDOG)"
 },
 {
   data: 21121,
   value: "FAST FOODS,RST BF SNDWCH,PLN"
 },
 {
   data: 21122,
   value: "SANDWICHES&BURGERS,RST BF SNDWCH W/CHS"
 },
 {
   data: 21123,
   value: "SANDWICHES&BURGERS,STEAK SNDWCH"
 },
 {
   data: 21124,
   value: "FAST FOODS,SUBMARINE SNDWCH,W/COLD CUTS"
 },
 {
   data: 21125,
   value: "FAST FOODS,SUBMARINE SNDWCH,W/RST BF"
 },
 {
   data: 21126,
   value: "FAST FOODS,SUBMARINE SNDWCH,W/TUNA SALAD"
 },
 {
   data: 21127,
   value: "FAST FOODS, COLESLAW"
 },
 {
   data: 21128,
   value: "FAST FOODS,CORN ON THE COB W/BUTTER"
 },
 {
   data: 21129,
   value: "FAST FOODS,HUSH PUPPIES"
 },
 {
   data: 21130,
   value: "FAST FOODS,ONION RINGS,BREADED&FRIED"
 },
 {
   data: 21131,
   value: "FAST FOODS,POTATO,BKD&TOPPED W/CHS SAU"
 },
 {
   data: 21132,
   value: "FAST FOODS,POTATO,BKD&TOPPED W/CHS SAU&BACON"
 },
 {
   data: 21133,
   value: "FAST FOODS,POTATO,BKD&TOPPED W/CHS SAU&BROCCOLI"
 },
 {
   data: 21134,
   value: "FAST FOODS,POTATO,BKD&TOPPED W/CHS SAU&CHILI"
 },
 {
   data: 21135,
   value: "FAST FOODS,POTATO,BKD&TOPPED W/SOUR CRM&CHIVES"
 },
 {
   data: 21138,
   value: "FST FOODS, POTATO, FRNCH FRIED IN VEG OIL"
 },
 {
   data: 21139,
   value: "FAST FOODS,POTATO,MASHED"
 },
 {
   data: 21140,
   value: "SIDE DISHES,POTATO SALAD"
 },
 {
   data: 21141,
   value: "BURGER KING,VANILLA SHAKE"
 },
 {
   data: 21202,
   value: "FAST FOODS,HAMBURGER,LRG,SINGLE PATTY,W/CONDMNT"
 },
 {
   data: 21224,
   value: "PIZZA,CHS TOPPING,REG CRUST,FRZ,CKD"
 },
 {
   data: 21225,
   value: "PIZZA,CHS TOPPING,RISING CRUST,FRZ,CKD"
 },
 {
   data: 21226,
   value: "PIZZA,MEAT & VEG TOPPING,REG CRUST,FRZ,CKD"
 },
 {
   data: 21227,
   value: "PIZZA,MEAT & VEG TOPPING,RISING CRUST,FRZ,CKD"
 },
 {
   data: 21228,
   value: "MCDONALD'S,HAMBURGER"
 },
 {
   data: 21229,
   value: "FAST FOODS,CHICK,BREADED & FRIED,BNLESS PIECES,PLN"
 },
 {
   data: 21230,
   value: "FAST FOODS,CRISPY CHICK FILET SNDWCH,W/ LETTUCE & MAYO"
 },
 {
   data: 21232,
   value: "MCDONALD'S, FLT-O-FSH"
 },
 {
   data: 21233,
   value: "MCDONALD'S, CHEESEBURGER"
 },
 {
   data: 21234,
   value: "MCDONALD'S,QUARTER POUNDER"
 },
 {
   data: 21235,
   value: "MCDONALD'S,QUARTER POUNDER W/ CHS"
 },
 {
   data: 21237,
   value: "MCDONALD'S,BIG MAC"
 },
 {
   data: 21238,
   value: "MCDONALD'S,FRENCH FR"
 },
 {
   data: 21239,
   value: "WENDY'S,CLASSIC SINGLE HAMBURGER,NO CHS"
 },
 {
   data: 21240,
   value: "WENDY'S,CLASSIC SINGLE HAMBURGER,W/ CHS"
 },
 {
   data: 21241,
   value: "WENDY'S,JR. HAMBURGER,WO/ CHS"
 },
 {
   data: 21242,
   value: "WENDY'S,JR. HAMBURGER,W/ CHS"
 },
 {
   data: 21243,
   value: "WENDY'S,CLASSIC DOUBLE,W/ CHS"
 },
 {
   data: 21244,
   value: "WENDY'S,HOMESTYLE CHICK FILLET SNDWCH"
 },
 {
   data: 21245,
   value: "WENDY'S,ULTIMATE CHICK GRILL SNDWCH"
 },
 {
   data: 21246,
   value: "WENDY'S,CHICK NUGGETS"
 },
 {
   data: 21247,
   value: "WENDY'S,FRENCH FR"
 },
 {
   data: 21248,
   value: "WENDY'S,FROSTY DAIRY DSSRT"
 },
 {
   data: 21249,
   value: "BURGER KING,FRENCH FR"
 },
 {
   data: 21250,
   value: "BURGER KING,HAMBURGER"
 },
 {
   data: 21251,
   value: "BURGER KING, CHSBRGR"
 },
 {
   data: 21252,
   value: "BURGER KING,WHOPPER,NO CHS"
 },
 {
   data: 21253,
   value: "BURGER KING,WHOPPER,W/ CHS"
 },
 {
   data: 21254,
   value: "BURGER KING,DOUBLE WHOPPER,NO CHS"
 },
 {
   data: 21255,
   value: "BURGER KING,DOUBLE WHOPPER,W/ CHS"
 },
 {
   data: 21256,
   value: "BURGER KING,CHICK STRIPS"
 },
 {
   data: 21258,
   value: "BURGER KING,PREMIUM FISH SNDWCH"
 },
 {
   data: 21259,
   value: "BURGER KING,ORIGINAL CHICK SNDWCH"
 },
 {
   data: 21260,
   value: "TACO BELL,ORIGINAL TACO W/ BF,CHS & LETTUCE"
 },
 {
   data: 21261,
   value: "TACO BELL,SOFT TACO W/ BF,CHS & LETTUCE"
 },
 {
   data: 21262,
   value: "TACO BELL,SOFT TACO W/ CHICK,CHS & LETTUCE"
 },
 {
   data: 21263,
   value: "TACO BELL,SOFT TACO W/ STEAK"
 },
 {
   data: 21264,
   value: "TACO BELL,BEAN BURRITO"
 },
 {
   data: 21265,
   value: "TACO BELL,BURRITO SUPREME W/ BF"
 },
 {
   data: 21266,
   value: "TACO BELL,BURRITO SUPREME W/ CHICK"
 },
 {
   data: 21267,
   value: "TACO BELL,BURRITO SUPREME W/ STEAK"
 },
 {
   data: 21268,
   value: "TACO BELL,NACHOS"
 },
 {
   data: 21269,
   value: "TACO BELL,NACHOS SUPREME"
 },
 {
   data: 21270,
   value: "TACO BELL,TACO SALAD"
 },
 {
   data: 21271,
   value: "PIZZA HUT 12\" CHS PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21272,
   value: "PIZZA HUT 12\" CHS PIZZA,PAN CRUST"
 },
 {
   data: 21273,
   value: "PIZZA HUT 12\" CHS PIZZA,THIN 'N CRISPY CRUST"
 },
 {
   data: 21274,
   value: "PIZZA HUT 12\" PEPPERONI PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21275,
   value: "PIZZA HUT 12\" PEPPERONI PIZZA,PAN CRUST"
 },
 {
   data: 21276,
   value: "PIZZA HUT 12\" SUPER SUPREME PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21277,
   value: "DOMINO'S 14\" CHS PIZZA,CLASSIC HAND-TOSSED CRUST"
 },
 {
   data: 21278,
   value: "DOMINO'S 14\" CHS PIZZA,ULTIMATE DEEP DISH CRUST"
 },
 {
   data: 21279,
   value: "DOMINO'S 14\" CHS PIZZA,CRUNCHY THIN CRUST"
 },
 {
   data: 21280,
   value: "DOMINO'S 14\" PEPPERONI PIZZA,CLASSIC HAND-TOSSED CRUST"
 },
 {
   data: 21281,
   value: "DOMINO'S 14\" PEPPERONI PIZZA,ULTIMATE DEEP DISH CRUST"
 },
 {
   data: 21282,
   value: "DOMINO'S 14\" EXTRAVAGANZZA FST PIZZA,CLSSIC HAND-TOSSED CRST"
 },
 {
   data: 21283,
   value: "PAPA JOHN'S 14\" CHS PIZZA,ORIGINAL CRUST"
 },
 {
   data: 21284,
   value: "PAPA JOHN'S 14\" PEPPERONI PIZZA,ORIGINAL CRUST"
 },
 {
   data: 21285,
   value: "PAPA JOHN'S 14\" THE WORKS PIZZA,ORIGINAL CRUST"
 },
 {
   data: 21286,
   value: "PAPA JOHN'S 14\" CHS PIZZA,THIN CRUST"
 },
 {
   data: 21287,
   value: "LITTLE CAESARS 14\" ORIGINAL RND CHS PIZZA,REG CRUST"
 },
 {
   data: 21288,
   value: "LITTLE CAESARS 14\" ORIGINAL RND PEPPERONI PIZZA,REG CRUST"
 },
 {
   data: 21289,
   value: "LITTLE CAESARS 14\" ORIGINAL RND MEAT & VEG PIZZA,REG CRUST"
 },
 {
   data: 21290,
   value: "LITTLE CAESARS 14\" CHS PIZZA,LRG DEEP DISH CRUST"
 },
 {
   data: 21291,
   value: "LITTLE CAESARS 14\" PEPPERONI PIZZA,LRG DEEP DISH CRUST"
 },
 {
   data: 21292,
   value: "LITTLE CAESARS 14\" CHS PIZZA,THIN CRUST"
 },
 {
   data: 21293,
   value: "PIZZA HUT 14\" CHS PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21294,
   value: "PIZZA HUT 14\" CHS PIZZA,PAN CRUST"
 },
 {
   data: 21295,
   value: "PIZZA HUT 14\" CHS PIZZA,THIN 'N CRISPY CRUST"
 },
 {
   data: 21296,
   value: "PIZZA HUT 14\" PEPPERONI PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21297,
   value: "PIZZA HUT 14\" PEPPERONI PIZZA,PAN CRUST"
 },
 {
   data: 21298,
   value: "PIZZA HUT 14\" SUPER SUPREME PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21299,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,CHS TOPPING,REG CRUST"
 },
 {
   data: 21300,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,CHS TOPPING,THICK CRUST"
 },
 {
   data: 21301,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,CHS TOPPING,THIN CRUST"
 },
 {
   data: 21302,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,PEPPERONI TOPPING,REG CRUST"
 },
 {
   data: 21303,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,PEPPERONI TOPPING,THICK CRUST"
 },
 {
   data: 21304,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,MEAT & VEG TOPPING,REG CRUST"
 },
 {
   data: 21305,
   value: "FAST FOODS,GRIDDLE CAKE SNDWCH,EGG,CHS,& SAUSAGE"
 },
 {
   data: 21306,
   value: "FAST FOODS,GRIDDLE CAKE SNDWCH,SAUSAGE"
 },
 {
   data: 21307,
   value: "FAST FOODS,GRIDDLE CAKE SNDWCH,EGG,CHS,& BACON"
 },
 {
   data: 21308,
   value: "MCDONALD'S,CHICK SELECTS PREMIUM BREAST STRIPS"
 },
 {
   data: 21309,
   value: "MCDONALD'S,CHICK MCNUGGETS"
 },
 {
   data: 21310,
   value: "MCDONALD'S,BARBEQUE SAU"
 },
 {
   data: 21311,
   value: "MCDONALD'S,CREAMY RANCH SAU"
 },
 {
   data: 21312,
   value: "MCDONALD'S,HONEY"
 },
 {
   data: 21313,
   value: "MCDONALD'S,HOT MUSTARD SAU"
 },
 {
   data: 21314,
   value: "MCDONALD'S,SPICY BUFFALO SAU"
 },
 {
   data: 21315,
   value: "MCDONALD'S,SWT 'N SOUR SAU"
 },
 {
   data: 21316,
   value: "MCDONALD'S,TANGY HONEY MUSTARD SAU"
 },
 {
   data: 21317,
   value: "MCDONALD'S,BISCUIT,REG SIZE"
 },
 {
   data: 21318,
   value: "MCDONALD'S,DELUXE WARM CINN ROLL"
 },
 {
   data: 21319,
   value: "MCDONALD'S,HASH BROWN"
 },
 {
   data: 21320,
   value: "MCDONALD'S,SCRMBLD EGGS"
 },
 {
   data: 21321,
   value: "MCDONALD'S,HOTCAKES (PLAIN)"
 },
 {
   data: 21322,
   value: "MCDONALD'S,WARM CINN ROLL"
 },
 {
   data: 21323,
   value: "MCDONALD'S,SAUSAGE PATTY"
 },
 {
   data: 21324,
   value: "MCDONALD'S,BKD APPL PIE"
 },
 {
   data: 21325,
   value: "MCDONALD'S,MCDONALDLAND CHOC CHIP COOKIES"
 },
 {
   data: 21326,
   value: "MCDONALD'S,MCDONALDLAND COOKIES"
 },
 {
   data: 21327,
   value: "MCDONALD'S,BACON,EGG & CHS MCGRIDDLES"
 },
 {
   data: 21328,
   value: "MCDONALD'S,SAUSAGE MCGRIDDLES"
 },
 {
   data: 21329,
   value: "MCDONALD'S,SAUSAGE,EGG & CHS MCGRIDDLES"
 },
 {
   data: 21330,
   value: "MCDONALD'S,VANILLA TRIPLE THICK SHAKE"
 },
 {
   data: 21331,
   value: "MCDONALD'S,CHOC TRIPLE THICK SHAKE"
 },
 {
   data: 21332,
   value: "MCDONALD'S,STRAWBERRY TRIPLE THICK SHAKE"
 },
 {
   data: 21333,
   value: "MCDONALD'S,VANILLA RED FAT ICE CRM CONE"
 },
 {
   data: 21334,
   value: "MCDONALD'S,STRAWBERRY SUNDAE"
 },
 {
   data: 21335,
   value: "MCDONALD'S,HOT CARAMEL SUNDAE"
 },
 {
   data: 21336,
   value: "MCDONALD'S,HOT FUDGE SUNDAE"
 },
 {
   data: 21337,
   value: "MCDONALD'S,PNUTS (FOR SUNDAES)"
 },
 {
   data: 21338,
   value: "MCDONALD'S,MCFLURRY W/ M&M'S CANDIES"
 },
 {
   data: 21339,
   value: "MCDONALD'S,MCFLURRY W/ OREO COOKIES"
 },
 {
   data: 21340,
   value: "MCDONALD'S,SAUSAGE BURRITO"
 },
 {
   data: 21341,
   value: "MCDONALD'S,BIG BRKFST"
 },
 {
   data: 21342,
   value: "MCDONALD'S,APPL DIPPERS"
 },
 {
   data: 21343,
   value: "MCDONALD'S,LOFAT CARAMEL SAU"
 },
 {
   data: 21344,
   value: "MCDONALD'S,DOUBLE CHEESEBURGER"
 },
 {
   data: 21345,
   value: "MCDONALD'S,DOUBLE QUARTER POUNDER W/ CHS"
 },
 {
   data: 21346,
   value: "MCDONALD'S,NEWMAN'S OWN COBB DRSNG"
 },
 {
   data: 21347,
   value: "MCDONALD'S,NEWMAN'S OWN CREAMY CAESAR DRSNG"
 },
 {
   data: 21348,
   value: "MCDONALD'S,NEWMAN'S OWN LOFAT BALSAMIC VINAIGRETTE"
 },
 {
   data: 21349,
   value: "MCDONALD'S,NEWMAN'S OWN RANCH DRSNG"
 },
 {
   data: 21350,
   value: "MCDONALD'S,BIG MAC (WITHOUT BIG MAC SAUCE)"
 },
 {
   data: 21351,
   value: "MCDONALD'S,BIG 'N TASTY"
 },
 {
   data: 21352,
   value: "MCDONALD'S,BIG 'N TASTY (WITHOUT MAYONNAISE)"
 },
 {
   data: 21353,
   value: "MCDONALD'S,BIG 'N TASTY W/ CHS"
 },
 {
   data: 21354,
   value: "MCDONALD'S,BIG 'N TASTY W/ CHS (WITHOUT MAYONNAISE)"
 },
 {
   data: 21355,
   value: "MCDONALD'S,MCCHICKEN SNDWCH"
 },
 {
   data: 21356,
   value: "MCDONALD'S,MCCHICKEN SNDWCH (WITHOUT MAYONNAISE)"
 },
 {
   data: 21357,
   value: "MCDONALD'S,EGG MCMUFFIN"
 },
 {
   data: 21358,
   value: "MCDONALD'S,SAUSAGE MCMUFFIN"
 },
 {
   data: 21359,
   value: "MCDONALD'S,SAUSAGE MCMUFFIN W/ EGG"
 },
 {
   data: 21360,
   value: "MCDONALD'S,BACON EGG & CHS BISCUIT"
 },
 {
   data: 21361,
   value: "MCDONALD'S,SAUSAGE BISCUIT"
 },
 {
   data: 21362,
   value: "MCDONALD'S,SAUSAGE BISCUIT W/ EGG"
 },
 {
   data: 21363,
   value: "MCDONALD'S,DELUXE BRKFST,W/ SYRUP & MARGARINE"
 },
 {
   data: 21364,
   value: "MCDONALD'S,HOTCAKES & SAUSAGE"
 },
 {
   data: 21365,
   value: "MCDONALD'S,HOTCAKES (WITH 2 PATS MARGARINE & SYRUP)"
 },
 {
   data: 21366,
   value: "MCDONALD'S,APPL DIPPERS W/ LOFAT CARAMEL SAU"
 },
 {
   data: 21369,
   value: "MCDONALD'S,FRUIT & WALNUT SALAD"
 },
 {
   data: 21370,
   value: "MCDONALD'S,CAESAR SALAD W/ GRILLED CHICK"
 },
 {
   data: 21371,
   value: "MCDONALD'S,CAESAR SALAD W/ CRISPY CHICK"
 },
 {
   data: 21372,
   value: "MCDONALD'S,CAESAR SALAD WO/ CHICK"
 },
 {
   data: 21376,
   value: "MCDONALD'S,BACON RANCH SALAD W/ GRILLED CHICK"
 },
 {
   data: 21377,
   value: "MCDONALD'S BACON RANCH SALAD W/ CRISPY CHICK"
 },
 {
   data: 21378,
   value: "MCDONALD'S,BACON RANCH SALAD WO/ CHICK"
 },
 {
   data: 21379,
   value: "MCDONALD'S,SIDE SALAD"
 },
 {
   data: 21380,
   value: "MCDONALD'S,FRUIT 'N YOGURT PARFAIT"
 },
 {
   data: 21381,
   value: "MCDONALD'S,FRUIT 'N YOGURT PARFAIT (WITHOUT GRANOLA)"
 },
 {
   data: 21382,
   value: "MCDONALD'S,FILET-O-FISH (WITHOUT TARTAR SAUCE)"
 },
 {
   data: 21383,
   value: "BURGER KING,CROISSAN'WICH W/ SAUSAGE,EGG & CHS"
 },
 {
   data: 21384,
   value: "BURGER KING,CROISSAN'WICH W/ SAUSAGE & CHS"
 },
 {
   data: 21385,
   value: "BURGER KING,CROISSAN'WICH W/ EGG & CHS"
 },
 {
   data: 21386,
   value: "BURGER KING,FRENCH TOAST STKS"
 },
 {
   data: 21387,
   value: "BURGER KING,HASH BROWN ROUNDS"
 },
 {
   data: 21388,
   value: "FAST FOODS,MINIATURE CINN ROLLS"
 },
 {
   data: 21389,
   value: "FAST FOODS,HAMBURGER; DOUBLE,LRG PATY; W/ CONDMNT,VEG & MAYO"
 },
 {
   data: 21390,
   value: "FT FDS, HAMBRGER; SIN, LRG PATTY; W/ CONDMNTS, VEG, MAYO"
 },
 {
   data: 21391,
   value: "FAST FOODS,HAMBURGER; SINGLE,LRG PATTY; W/ CONDMNT"
 },
 {
   data: 21393,
   value: "FAST FOODS,HMBURGR; SNG,REG PTTY; DBL BN W/ CNDMNT & SPL SAU"
 },
 {
   data: 21395,
   value: "FAST FOODS,CHEESEBURGER; DOUBLE,REG PATTY; W/ CONDMNT"
 },
 {
   data: 21396,
   value: "FAST FOODS,CHEESEBURGER; DOUBLE,LRG PATTY; W/ CONDMNT"
 },
 {
   data: 21397,
   value: "FAST FOODS,CHESEBRGER; SING,LRG PATY; W/ CONDMNT,VEG & MAYO"
 },
 {
   data: 21398,
   value: "FAST FOODS,CHEESEBURGER; SINGLE,LRG PATTY; W/ CONDMNT"
 },
 {
   data: 21399,
   value: "FAST FDS,CHSEBURGER; DOUBLE,LRG PATTY; W/ CONDMNT,VEG & MAYO"
 },
 {
   data: 21400,
   value: "FAST FOODS,CHSBURGR; DBL,RG PTTY; DBL BN W/ CNDMNT & SPL SAU"
 },
 {
   data: 21401,
   value: "FAST FOODS,CHICK TENDERS"
 },
 {
   data: 21402,
   value: "MCDONALD'S,PREMIUM GRILLED CHICK CLASSIC SNDWCH"
 },
 {
   data: 21403,
   value: "MCDONALD'S,PREMIUM CRISPY CHICK CLASSIC SNDWCH"
 },
 {
   data: 21404,
   value: "MCDONALD'S,PREMIUM GRILLED CHICK CLUB SNDWCH"
 },
 {
   data: 21405,
   value: "MCDONALD'S,PREMIUM CRISPY CHICK CLUB SNDWCH"
 },
 {
   data: 21406,
   value: "MCDONALD'S,PREMIUM GRILLED CHICK RANCH BLT SNDWCH"
 },
 {
   data: 21407,
   value: "MCDONALD'S,PREMIUM CRISPY CHICK RANCH BLT SNDWCH"
 },
 {
   data: 21408,
   value: "MCDONALD'S,ENG MUFFIN"
 },
 {
   data: 21409,
   value: "FAST FOODS,BAGEL,W/ HAM,EGG,& CHS"
 },
 {
   data: 21410,
   value: "FAST FOODS,BAGEL,W/ EGG,SAUSAGE PATTY,CHS,& CONDMNT"
 },
 {
   data: 21411,
   value: "FAST FOODS,BAGEL,W/ BRKFST STEAK,EGG,CHS,& CONDMNT"
 },
 {
   data: 21412,
   value: "LIGHT ICE CRM,SOFT SERVE,BLENDED W/ MILK CHOC CANDIES"
 },
 {
   data: 21413,
   value: "LIGHT ICE CRM,SOFT SERVE,BLENDED W/ COOKIE PIECES"
 },
 {
   data: 21414,
   value: "POPEYES,BATTER FRIES,ANALYZED PRIOR TO DECEMBER 2006"
 },
 {
   data: 21415,
   value: "POPEYES,BISCUIT"
 },
 {
   data: 21416,
   value: "POPEYES,COLESLAW"
 },
 {
   data: 21417,
   value: "POPEYES,MILD CHICK STRIPS,ANALYZED 2006"
 },
 {
   data: 21418,
   value: "POPEYES,SPICY CHICK STRIPS,ANALYZED 2006"
 },
 {
   data: 21419,
   value: "KENTUCKY FRIED CHICK,BISCUIT,ANALYZED PRIOR TO JANUARY 2007"
 },
 {
   data: 21420,
   value: "KENTUCKY FRIED CHICK,COLESLAW"
 },
 {
   data: 21421,
   value: "KENTUCKY FRIED CHICK,CRISPY CHICK STRIPS"
 },
 {
   data: 21422,
   value: "KENTUCKY FRIED CHICK,POPCORN CHICK"
 },
 {
   data: 21423,
   value: "KENTUCKY FRIED CHICK,POTATO WEDGES,ANALYZED PRIOR 2007"
 },
 {
   data: 21424,
   value: "K FRIED CHICK,FRIED CHICK,ORIGINAL RECIPE,SKN & BREAD"
 },
 {
   data: 21425,
   value: "KENTUCKY FRIED CHICK,FRIED CHICK,ORIGINAL RECIPE,BREAST,MEAT"
 },
 {
   data: 21426,
   value: "KENTUCKY FRIED CHICK,ORIG RCPE,DRMSTK,MT ONY,SKN BRDNG RMVD"
 },
 {
   data: 21427,
   value: "KENTUCKY FRIED CHICK,ORG REC,THIGH,MEAT ONLY,SKN & BRNG RMVD"
 },
 {
   data: 21428,
   value: "KENTUCKY FRIED CHICK,ORG RCP,WING,MEAT ONLY,SKN & BRDNG RMVD"
 },
 {
   data: 21429,
   value: "KENTUCKY FRIED CHICK,FRIED CHICK,EX CRISPY,SKN & BREADING"
 },
 {
   data: 21430,
   value: "KENTUCKY FRIED CHICKCRISPY,BRST,MT ONLY,SKN & BRDNG RMVD"
 },
 {
   data: 21431,
   value: "KENTUCKY FRIED CHICK CRSPY,DRMSTK,MT ONLYSKN & BRDNG RMVD"
 },
 {
   data: 21432,
   value: "KENTUCKY FRIED CHICK CRISPY,THGH,MEAT ONLY,SKN & BRDING RMVD"
 },
 {
   data: 21433,
   value: "KENTUCKY FRIED CHICK CRISPY,WING,MEAT ONLY,SKN & BRDING RMVD"
 },
 {
   data: 21434,
   value: "KENTUCKY FRIED CHICK ORIG RECIPE,BREAST,MEAT & SKN W/ BRDING"
 },
 {
   data: 21435,
   value: "KENTUCKY FRIED CHICK ORG RECIPE,DRUMSTK,MEAT & SKN W/ BRDING"
 },
 {
   data: 21436,
   value: "KENTUCKY FRIED CHICK,ORG RECIPE,THIGH,MEAT & SKN W/ BRDING"
 },
 {
   data: 21437,
   value: "KENTUCKY FRIED CHICK ORG RECIPE,WING,MEAT & SKN W/ BRDING"
 },
 {
   data: 21438,
   value: "KENTUCKY FRIED CHICK CRISPY,BREAST,MEAT & SKN W/ BRDING"
 },
 {
   data: 21439,
   value: "KENTUCKY FRIED CHICK CRISPY,DRUMSTK,MEAT & SKN W/ BRDING"
 },
 {
   data: 21440,
   value: "KENTUCKY FRIED CHICK CRISPY,THIGH,MEAT & SKN W/ BREADING"
 },
 {
   data: 21441,
   value: "KENTUCKY FRIED CHICK CRISPY,WING,MEAT & SKN W/ BREADING"
 },
 {
   data: 21442,
   value: "POPEYES, CHICK,MILD,BREAST,MEAT ONLY,SKN & BRDING REMOVED"
 },
 {
   data: 21443,
   value: "POPEYES,FRIED CHICK,MILD,DRUMSTK,MEAT ONLY,SKN & BREADING RE"
 },
 {
   data: 21444,
   value: "POPEYES,FRIED CHICK,MILD,SKN & BREADING"
 },
 {
   data: 21445,
   value: "POPEYES,FRIED CHCK,MILD,THIGH,MEAT ONLY,SKN & BRDING REMOVED"
 },
 {
   data: 21446,
   value: "POPEYES,FRIED CHICK,MILD,WING,MEAT ONLY,SKN & BRDING REMOVED"
 },
 {
   data: 21456,
   value: "POPEYES,FRIED CHICK,MILD,BREAST,MEAT & SKN W/ BREADING"
 },
 {
   data: 21457,
   value: "POPEYES,FRIED CHICK,MILD,DRUMSTK,MEAT & SKN W/ BREADING"
 },
 {
   data: 21458,
   value: "POPEYES,FRIED CHICK,MILD,THIGH,MEAT & SKN W/ BREADING"
 },
 {
   data: 21459,
   value: "POPEYES,FRIED CHICK,MILD,WING,MEAT & SKN W/ BREADING"
 },
 {
   data: 21460,
   value: "MCDONALD'S,BISCUIT,LRG SIZE"
 },
 {
   data: 21461,
   value: "GRILLED CHICK,BACON & TOMO CLB SNDWCH,W/ CHS,LETTUCE,& MAYO"
 },
 {
   data: 21462,
   value: "CRISPY CHICK,BACON,& TOMATO CLUB SNDWCH,W/ CHS,LETUCE,& MAYO"
 },
 {
   data: 21463,
   value: "YOGURT PARFAIT,LOWFAT,W/ FRUIT & GRANOLA"
 },
 {
   data: 21464,
   value: "FAST FOODS,FRIED CHICK,BREAST,MEAT ONLY,SKN & BRDING REMOVED"
 },
 {
   data: 21465,
   value: "FAST FOODS,FRIED CHICK,DRMSTK,MEAT ONLY,SKN & BRDING REMOVED"
 },
 {
   data: 21466,
   value: "FAST FOODS,FRIED CHICK,THIGH,MEAT ONLY,SKN & BREDING REMOVED"
 },
 {
   data: 21467,
   value: "FAST FOODS,FRIED CHICK,WING,MEAT ONLY,SKN & BREADING REMOVED"
 },
 {
   data: 21468,
   value: "FAST FOODS,FRIED CHICK,SKN & BREADING FROM ALL PIECES"
 },
 {
   data: 21469,
   value: "FAST FOODS,FRIED CHICK,BREAST,MEAT & SKN & BREADING"
 },
 {
   data: 21470,
   value: "FAST FOODS,FRIED CHICK,DRUMSTK,MEAT & SKN W/ BREADING"
 },
 {
   data: 21471,
   value: "FAST FOODS,FRIED CHICK,THIGH,MEAT & SKN & BREADING"
 },
 {
   data: 21472,
   value: "FAST FOODS,FRIED CHICK,WING,MEAT & SKN & BREADING"
 },
 {
   data: 21473,
   value: "DIGIORNO PIZZA,CHS TOPPING,CHS STUFFED CRUST,FRZ,BKD"
 },
 {
   data: 21474,
   value: "DIGIORNO PIZZA,CHS TOPPING,RISING CRUST,FRZ,BKD"
 },
 {
   data: 21475,
   value: "DIGIORNO PIZZA,CHS TOPPING,THIN CRISPY CRUST,FRZ,BKD"
 },
 {
   data: 21476,
   value: "DIGIORNO PIZZA,PEPPERONI TOPPING,CHS STUFFED CRUST,FRZ,BKD"
 },
 {
   data: 21477,
   value: "DIGIORNO PIZZA,PEPPERONI TOPPING,RISING CRUST,FRZ,BKD"
 },
 {
   data: 21478,
   value: "DIGIORNO PIZZA,PEPPERONI TOPPING,THIN CRISPY CRUST,FRZ,BKD"
 },
 {
   data: 21479,
   value: "DIGIORNO PIZZA,SUPREME TOPPING,RISING CRUST,FRZ,BKD"
 },
 {
   data: 21480,
   value: "DIGIORNO PIZZA,SUPREME TOPPING,THIN CRISPY CRUST,FRZ,BKD"
 },
 {
   data: 21482,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,SAUSAGE TOPPING,THICK CRUST"
 },
 {
   data: 21483,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,SAUSAGE TOPPING,THIN CRUST"
 },
 {
   data: 21484,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,SAUSAGE TOPPING,REG CRUST"
 },
 {
   data: 21485,
   value: "FAST FD,PIZZA CHAIN,14\" PIZZA,PEPPERONI TOPPING,THIN CRUST"
 },
 {
   data: 21486,
   value: "FAST FOODS,TACO W/ BF,CHS & LETTUCE,SOFT"
 },
 {
   data: 21487,
   value: "FAST FOODS,TACO W/ CHICK,LETTUCE & CHS,SOFT"
 },
 {
   data: 21488,
   value: "FAST FOODS,QUESADILLA,W/ CHICK"
 },
 {
   data: 21489,
   value: "SALAD,GRAPE & APPL W/ YOGURT & CANDIED WALNUTS"
 },
 {
   data: 21490,
   value: "FAST FDS,GRILLED CHICK FILET SNDWCH,W/ LETTUCE,TOMATO & SPRD"
 },
 {
   data: 21491,
   value: "PIZZA HUT 14\" PEPPERONI PIZZA,THIN 'N CRISPY CRUST"
 },
 {
   data: 21492,
   value: "DOMINO'S 14\" PEPPERONI PIZZA,CRUNCHY THIN CRUST"
 },
 {
   data: 21493,
   value: "DOMINO'S 14\" SAUSAGE PIZZA,CRUNCHY THIN CRUST"
 },
 {
   data: 21494,
   value: "DOMINO'S 14\" SAUSAGE PIZZA,CLASSIC HAND-TOSSED CRUST"
 },
 {
   data: 21495,
   value: "DOMINO'S 14\" SAUSAGE PIZZA,ULTIMATE DEEP DISH CRUST"
 },
 {
   data: 21496,
   value: "PIZZA HUT 14\" SAUSAGE PIZZA,THIN 'N CRISPY CRUST"
 },
 {
   data: 21497,
   value: "PIZZA HUT 14\" SAUSAGE PIZZA,HAND-TOSSED CRUST"
 },
 {
   data: 21498,
   value: "PIZZA HUT 14\" SAUSAGE PIZZA,PAN CRUST"
 },
 {
   data: 21499,
   value: "KASHI PIZZA,RSTD VEG"
 },
 {
   data: 21500,
   value: "KASHI PIZZA,MUSHROOM TRIO & SPINACH"
 },
 {
   data: 21501,
   value: "KASHI PIZZA,MARGHERITA"
 },
 {
   data: 21502,
   value: "KASHI PIZZA,BASIL PESTO"
 },
 {
   data: 21503,
   value: "KASHI PIZZA,MEDITERRANEAN"
 },
 {
   data: 21504,
   value: "KASHI PIZZA,FOUR CHS"
 },
 {
   data: 21505,
   value: "PIZZA,CHS TOPPING,THIN CRUST,FRZ,CKD"
 },
 {
   data: 21506,
   value: "BURGER KING,DOUBLE CHEESEBURGER"
 },
 {
   data: 21507,
   value: "WENDY'S,DOUBLE STACK,W/ CHS"
 },
 {
   data: 21508,
   value: "WEND'YS,CRISPY CHICK SNDWCH"
 },
 {
   data: 21509,
   value: "BURGER KING,ONION RINGS"
 },
 {
   data: 21510,
   value: "WENDY'S,DAVE'S HOT 'N JUICY 1/4 LB,SINGLE"
 },
 {
   data: 22118,
   value: "MORNINGSTAR FARMS GARDEN VEGGIE PATTIES,FRZ,UNPREP"
 },
 {
   data: 22120,
   value: "MORNINGSTAR FARMS GRILLERS BURGER STYLE REC CRMBL,FRZ,UNPREP"
 },
 {
   data: 22121,
   value: "MORNINGSTAR FARMS GRILLERS VEGAN,FRZ,UNPREP"
 },
 {
   data: 22122,
   value: "MORNINGSTAR FARMS VEGGIE BRKFST SAUSAGE PATTIES,FRZ,UNPREP"
 },
 {
   data: 22123,
   value: "WORTHINGTON FOODS,MORNINGSTAR FARMS,SPICY BLACK BEAN BURGER"
 },
 {
   data: 22125,
   value: "GREEN GIANT,HARVEST BURGER,ORIG FLAV,ALL VEG PROT PATTY,FRZ"
 },
 {
   data: 22126,
   value: "LOMA LINDA BIG FRANKS,CND,UNPREP"
 },
 {
   data: 22247,
   value: "MACARONI & CHS,CND ENTREE"
 },
 {
   data: 22401,
   value: "SPAGHETTI W/ MEAT SAU,FRZ ENTREE"
 },
 {
   data: 22522,
   value: "PASTA W/SLICED FRANKS IN TOMATO SAU,CND ENTREE"
 },
 {
   data: 22528,
   value: "TURKEY POT PIE,FRZ ENTREE"
 },
 {
   data: 22529,
   value: "BEEF POT PIE,FRZ ENTREE,PREP"
 },
 {
   data: 22535,
   value: "HOT POCKETS,CROISSANT POCKTS CHIK,BROC&CHDR STUFD SNDWCH,FRZ"
 },
 {
   data: 22537,
   value: "HOT POCKETS HAM 'N CHS STUFFED SNDWCH,FRZ"
 },
 {
   data: 22899,
   value: "RAVIOLI,CHEESE-FILLED,CND"
 },
 {
   data: 22900,
   value: "RAVIOLI,MEAT-FILLED,W/ TOMATO SAU OR MEAT SAU,CND"
 },
 {
   data: 22901,
   value: "TORTELLINI,PASTA W/ CHS FILLING,FRESH-REFRIGERATED"
 },
 {
   data: 22903,
   value: "PIZZA,PEPPERONI TOPPING,REG CRUST,FRZ,CKD"
 },
 {
   data: 22904,
   value: "CHILI CON CARNE W/BNS,CND ENTREE"
 },
 {
   data: 22905,
   value: "BEEF STEW,CANNED ENTREE"
 },
 {
   data: 22906,
   value: "CHICKEN POT PIE,FRZ ENTREE,PREP"
 },
 {
   data: 22907,
   value: "PASTA W/MEATBALLS IN TOMATO SAU,CND ENTREE"
 },
 {
   data: 22908,
   value: "BEEF,CORNED BF HASH,W/ POTATO,CND"
 },
 {
   data: 22910,
   value: "LASAGNA,CHS,FRZ,PREP"
 },
 {
   data: 22911,
   value: "CHILI,NO BNS,CND ENTREE"
 },
 {
   data: 22912,
   value: "SPAGHETTI,W/ MEATBALLS,CND"
 },
 {
   data: 22914,
   value: "PASTA W/ TOMATO SAU,NO MEAT,CND"
 },
 {
   data: 22915,
   value: "LASAGNA W/ MEAT & SAU,LOW-FAT,FRZ ENTREE"
 },
 {
   data: 22916,
   value: "LASAGNA W/ MEAT & SAU,FRZ ENTREE"
 },
 {
   data: 22917,
   value: "BURRITO,BF & BEAN,FRZ"
 },
 {
   data: 22918,
   value: "BURRITO, BEAN AND CHEESE, FROZEN"
 },
 {
   data: 22919,
   value: "MACARONI & CHS,CND,MICROWAVABLE"
 },
 {
   data: 22928,
   value: "BURRITO,BF & BEAN,MICROWAVED"
 },
 {
   data: 22929,
   value: "CAMPBELL'S,SPAGHETTIOS,MINI BF RAVIOLI IN MEAT SAU"
 },
 {
   data: 22930,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTI IN TOMATO & CHS SAU"
 },
 {
   data: 22931,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS ORIGINAL"
 },
 {
   data: 22932,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS A TO Z'S"
 },
 {
   data: 22937,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS IN MEAT SAU"
 },
 {
   data: 22938,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS PLUS CA"
 },
 {
   data: 22939,
   value: "CAMPBELL'S,SPAGHETTIOS RAVIOLIOS BF RAVIOLI IN MEAT SAU"
 },
 {
   data: 22940,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIO'S W/ MEATBALLS"
 },
 {
   data: 22941,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIO'S W/ SLICED FRANKS"
 },
 {
   data: 22942,
   value: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS A TO Z'S W/ MEATBALLS"
 },
 {
   data: 22943,
   value: "SUPPER BAKES MEAL,CHEESY CHICK W/ PASTA (CHICK NOT INCLUDED)"
 },
 {
   data: 22944,
   value: "SUPPER BAKES MEAL KITS,CREAMY STROGANOFF SAU W/ PASTA"
 },
 {
   data: 22945,
   value: "SUPPER BAKES MEAL KITS,GARLIC CHICK W/ PASTA"
 },
 {
   data: 22946,
   value: "SUPPER BAKES MEAL KITS,HERB CHICK W/ RICE"
 },
 {
   data: 22947,
   value: "SUPPER BAKES MEAL KITS,LEMON CHICK W/ HERB RICE"
 },
 {
   data: 22948,
   value: "SUPPER MEAL KITS,SAVORY PORK CHOPS W/ HERB STUFFING"
 },
 {
   data: 22949,
   value: "SUPPER BAKES MEAL KITS,SOUTHWESTERN-STYLE CHICK W/RICE"
 },
 {
   data: 22950,
   value: "SUPPER BAKES MEAL,CHICK W/ STUFFING (CHICK NOT INCLUDED)"
 },
 {
   data: 22951,
   value: "SWANSON,CHICK A LA KING"
 },
 {
   data: 22952,
   value: "SWANSON,CHICK & DUMPLINGS"
 },
 {
   data: 22953,
   value: "EGG ROLLS,PORK,REFR,HTD"
 },
 {
   data: 22954,
   value: "EGG ROLLS,CHICK,REFR,HTD"
 },
 {
   data: 22955,
   value: "EGG ROLLS,VEG,REFR,HTD"
 },
 {
   data: 22956,
   value: "LASAGNA,VEG,FRZ,BKD"
 },
 {
   data: 22957,
   value: "TKY,STUFFING,MSHD POTATO W/GRAVY,ASSORTED VEG,FRZ,MICROWAVE"
 },
 {
   data: 22958,
   value: "RICE BOWL W/ CHICK,FRZ ENTREE,PREP"
 },
 {
   data: 22959,
   value: "MACARONI & CHS DINNER W/ DRY SAU MIX,BOXED,UNCKD"
 },
 {
   data: 22960,
   value: "MAC & CHS,DRY MIX,PREP W/ 2% MILK & 80% STK MARGARINE DRY MX"
 },
 {
   data: 22961,
   value: "HOT POCKETS,MEATBALLS & MOZZARELLA STUFFED SNDWCH,FRZ"
 },
 {
   data: 22962,
   value: "LEAN POCKETS,HAM N CHEDDAR"
 },
 {
   data: 22963,
   value: "LEAN POCKETS,MEATBALLS & MOZZARELLA"
 },
 {
   data: 22965,
   value: "CAMPBELL'S,SPAGHETTIOS ORIGINAL,EASY OPEN"
 },
 {
   data: 22966,
   value: "CAMPBELL'S,SPAGHETTIOS,W/ MEATBALLS -"
 },
 {
   data: 22969,
   value: "CHILI W/ BNS,MICROWAVABLE BOWLS"
 },
 {
   data: 22970,
   value: "MACARONI & CHS,FRZ ENTREE"
 },
 {
   data: 22971,
   value: "POTATO SALAD W/ EGG"
 },
 {
   data: 22972,
   value: "PULLED PORK IN BARBECUE SAU"
 },
 {
   data: 22973,
   value: "CORN DOGS,FRZ,PREP"
 },
 {
   data: 22974,
   value: "CHICKEN,NUGGETS,DK & WHITE MEAT,PRECKD,FRZ,NOT REHTD"
 },
 {
   data: 22975,
   value: "CHICKEN,NUGGETS,WHITE MEAT,PRECKD,FRZ,NOT REHTD"
 },
 {
   data: 22976,
   value: "RAVIOLI,CHS W/ TOMATO SAU,FRZ,NOT PREP,INCL REG & LT ENTREES"
 },
 {
   data: 22977,
   value: "LASAGNA W/ MEAT SAU,FRZ,PREP"
 },
 {
   data: 22978,
   value: "CHICKEN TENDERS,BREADED,FRZ,PREP"
 },
 {
   data: 22979,
   value: "KASHI,BLACK BEAN MANGO,FRZ ENTREE"
 },
 {
   data: 22980,
   value: "KASHI,CHICK & CHIPOTLE BBQ SAU W/ MANGO,FRZ ENTREE"
 },
 {
   data: 22981,
   value: "KASHI,CHICK ENCHILADA W/ ANCHO SAU,FRZ ENTREE"
 },
 {
   data: 22982,
   value: "KASHI,STEAM MEAL,CHICK FETTUCCINE,FRZ ENTREE"
 },
 {
   data: 22983,
   value: "KASHI,CHICK FLORENTINE,FRZ ENTREE"
 },
 {
   data: 22984,
   value: "KASHI,CHICK PASTA POMODORO,FRZ ENTREE"
 },
 {
   data: 22985,
   value: "KASHI,LEMONGRASS COCNT CHICK,FRZ ENTREE"
 },
 {
   data: 22986,
   value: "KASHI,MAYAN HARVEST BAKE,FRZ ENTREE"
 },
 {
   data: 22987,
   value: "KASHI,PESTO PASTA PRIMAVERA,FRZ ENTREE"
 },
 {
   data: 22988,
   value: "KASHI,PILAF,7 WHL GRAIN"
 },
 {
   data: 22989,
   value: "KASHI,RED CURRY CHICK,FRZ ENTREE"
 },
 {
   data: 22990,
   value: "KASHI,STEAM MEAL,RSTD GARLIC CHICK FARFALLE,FRZ ENTREE"
 },
 {
   data: 22991,
   value: "KASHI,STEAM MEAL,SESAME CHICK,FRZ ENTREE"
 },
 {
   data: 22992,
   value: "KASHI,SOUTHWEST STYLE CHICK,FRZ ENTREE"
 },
 {
   data: 22993,
   value: "KASHI,SPICY BLACK BEAN ENCHILADA,FRZ ENTREE"
 },
 {
   data: 22994,
   value: "KASHI,STEAM MEAL,SPINACH ARTICHOKE PASTA,FRZ ENTREE"
 },
 {
   data: 22995,
   value: "KASHI,SWT & SOUR CHICK,FRZ ENTREE"
 },
 {
   data: 22996,
   value: "KASHI,THREE CHS PENNE,FRZ ENTREE"
 },
 {
   data: 22997,
   value: "KASHI,TUSCAN VEGGIE BAKE,FRZ ENTREE"
 },
 {
   data: 22998,
   value: "RICE,CHICK FLAVOR,UNPREP"
 },
 {
   data: 22999,
   value: "RICE,CHICK FLAVOR,PREP W/ 80% MARGARINE"
 },
 {
   data: 23000,
   value: "BEEF,SHLDR POT RST OR STK,BNLS,LN & FAT,0\" FAT,ALL GRDS,R"
 },
 {
   data: 23001,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 23002,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23003,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 23004,
   value: "BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 23005,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8\"FAT,ALL GRDS,RAW"
 },
 {
   data: 23006,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8\"FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23007,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8\"FAT,SEL,RAW"
 },
 {
   data: 23008,
   value: "BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8\"FAT,SEL,CKD,BRLD"
 },
 {
   data: 23030,
   value: "BEEF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23031,
   value: "BF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0\" FAT,CH,CKD,GRILLED"
 },
 {
   data: 23032,
   value: "BEEF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT 0\" FAT,SEL,RAW"
 },
 {
   data: 23033,
   value: "BF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0\" FAT,SE,CKD,GRILLED"
 },
 {
   data: 23034,
   value: "BF,CHK,CLOD,SHLDR TENDER,MEDALLION,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23035,
   value: "BF,CHK,CLOD,SHDR TNDR,MED,LN & FAT,0\" FAT,CH,CKD,GRILLED"
 },
 {
   data: 23036,
   value: "BF,CHK,CLOD,SHLDR TENDER,MEDALLION,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23037,
   value: "BEEF,CHUCK,SHLDR CLOD,TOP & CNTR ,STK,LN & FAT,0\" FAT,CH,RAW"
 },
 {
   data: 23038,
   value: "BF,CHK,SHLDR CLOD,TOP & CNTR,STK,LN & FAT,0\" FAT,CH,CKD,GRLD"
 },
 {
   data: 23039,
   value: "BF,CHUCK,SHLDR CLOD, TOP & CNTR,STK,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23040,
   value: "BF,CHK, CLOD,TOP & CNTR,STK,LN & FAT,0\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23041,
   value: "BF,CHK,SHLDR CLOD,TOP BLADE,STEAK,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23042,
   value: "BF,CHK,CLOD,TOP BLADE,STEAK,LN & FAT,0\" FAT,CH,CKD,GRILLED"
 },
 {
   data: 23043,
   value: "BF,CHUCK,SHLDR CLOD,TOP BLADE,STEAK,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23044,
   value: "BF,CHK,CLOD,TOP BLADE,STEAK,LN & FAT,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23045,
   value: "BEEF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23046,
   value: "BF,RND,KNUCKLE,TIP CNTR,STK,LN & FAT,0\" FAT,CHOIC,CKD,GRLD"
 },
 {
   data: 23047,
   value: "BEEF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23048,
   value: "BF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0\" FAT,SE,CKD,GRILLED"
 },
 {
   data: 23049,
   value: "BF,RND,OUTSIDE RND,BTTM RND,STEAK,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23050,
   value: "BF,RND,OUT RND,BTTM RND,STK,LN & FAT,0\" FAT,CH,CKD,GRILLED"
 },
 {
   data: 23051,
   value: "BEEF,RND,OUTSIDE RND,BTTM RND,STEAK,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23052,
   value: "BEEF,RND,OUT RND,BTTM RND,STK,LN & FAT,0\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23053,
   value: "BF,CHK,CLD,SHLDR TNDR,MEDALLION,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23054,
   value: "BF,CHK,CLD,SHDR TNDR,MED,LN & FAT,0\" FAT,ALL GRDS,CK,GRLD"
 },
 {
   data: 23055,
   value: "BEEF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23056,
   value: "BF,RND,KNUCK,TIP SIDE,STK,LN & FAT,0\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23057,
   value: "BF,CHUCK,CLOD,TOP & CNTR,STEAK,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23058,
   value: "BEEF,CHCK,CLOD,SHLDR TOP&CNTR STKS,LN & FT,0\",ALL GRDS,GRLD"
 },
 {
   data: 23059,
   value: "BEEF,CHUCK,CLOD,TOP BLADE,STEAK,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23060,
   value: "BF,CHUCK,CLOD,TOP BLADE,STK,LN & FAT,0\" FAT,ALL,CKD,GRLD"
 },
 {
   data: 23061,
   value: "BEEF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23062,
   value: "BF,RND,KNUCKLE,TIP CNTR,STK,LN & FAT,0\" FAT,ALL,CKD,GRLD"
 },
 {
   data: 23063,
   value: "BF,RND,OUTSIDE RND,BTTM RND,STEAK,LN & FAT,0\" FAT,ALL,RAW"
 },
 {
   data: 23064,
   value: "BF,RND,OUT RND,BTTM RND,STK,LN & FAT,0\" FAT,ALL GRDS,CK,GRLD"
 },
 {
   data: 23065,
   value: "BF,CHK, CLOD,SHLDR TENDER,MED,LN & FAT,0\" FAT,SE,CKD,GRILLED"
 },
 {
   data: 23066,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23067,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23068,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23069,
   value: "BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0\" FAT,CHOIC,CKD"
 },
 {
   data: 23070,
   value: "BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0\" FAT,SEL,CKD,B"
 },
 {
   data: 23071,
   value: "BF,CHK EYE CNTRY-STL RIBS,BNLS,LN,0\" FAT,ALL GRDS, CKD, BRSD"
 },
 {
   data: 23072,
   value: "BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23073,
   value: "BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23074,
   value: "BEEF,CHK EYE COUNTRY-STYLE RIBS,BNLS,LN,0\" FAT,ALL GRDS, RAW"
 },
 {
   data: 23075,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN,0\" FAT,CHOIC,CKD,GRILLED"
 },
 {
   data: 23076,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23077,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN,0\" FAT,ALL GRDS,CKD,GRILLED"
 },
 {
   data: 23078,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23079,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23080,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23081,
   value: "BEEF,SHLDR POT RST,BNLESS,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23082,
   value: "BEEF,SHLDR POT RST,BNLESS,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23083,
   value: "BEEF,SHLDR POT RST,BNLESS,LN,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23084,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23085,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23086,
   value: "BEEF,CHK,MOCK TENDER STK,BNLS,LN,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23087,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23088,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23089,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23090,
   value: "BEEF,CHUCK FOR STEW,LN & FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23091,
   value: "BEEF,CHUCK FOR STEW,LN & FAT,SEL,CKD,BRSD"
 },
 {
   data: 23092,
   value: "BEEF,CHUCK FOR STEW,LN & FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23093,
   value: "BEEF,CHUCK FOR STEW,LN & FAT,ALL GRDS,RAW"
 },
 {
   data: 23094,
   value: "BEEF,CHUCK FOR STEW,LN & FAT,SEL,RAW"
 },
 {
   data: 23095,
   value: "BEEF,CHUCK FOR STEW,LN & FAT,CHOIC,RAW"
 },
 {
   data: 23096,
   value: "BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23097,
   value: "BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23098,
   value: "BEEF,CHUCK,UND BL STEAK,BNLS,LN,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23099,
   value: "BEEF,CHK,UND BLD, POT RST,BNL,LN & FAT,0\" FAT,ALL GR,CKD,BR"
 },
 {
   data: 23100,
   value: "BEEF,RIB EYE STK,BNLES,LIP-ON,LN,1/8\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23101,
   value: "BEEF,RIB EYE RST,BONE-IN,LIP-ON,LN,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23102,
   value: "BEEF,CHK,UND BL POT RST/STK,BNL,LN & FT,0\" FT, All GR, raw"
 },
 {
   data: 23103,
   value: "BEEF,CHK,UND BL POT RST OR STK,BNL,LN & FAT,0\" FAT, CH, RAW"
 },
 {
   data: 23104,
   value: "BEEF,CHK,UND BL POT RST/STEAK,BNL,LN & FAT,0\" FAT, SEL, RAW"
 },
 {
   data: 23105,
   value: "BEEF,CHK,UND BL CNTR STK,BNL,DEN CUT,LN & FAT, ALL GR, CKD"
 },
 {
   data: 23106,
   value: "BEEF,CHK,UND BLE CNTR STK,BNL,DEN CT,LN&FT, 0\" FT,CH,CKD,GLD"
 },
 {
   data: 23107,
   value: "BEEF,CHK,UNDBL CNTR STK,BNL,DEN CT,LN&FAT, 0\" FT,SEL,CKD,GLD"
 },
 {
   data: 23108,
   value: "BEEF,CHK,UND BL CNTR STK,BNL,DEN CUT,LN & FT,0\"FT,All Gr, RW"
 },
 {
   data: 23109,
   value: "BEEF,CHK,UNDBLE CNTR STK,BNL,DENR CUT,LN & FAT,0\"FAT, CH, RW"
 },
 {
   data: 23110,
   value: "BEEF,CHK,UND BLE CNTR STK,BNL,DEN CUT,LN & FT,0\"FT, SEL,RW"
 },
 {
   data: 23111,
   value: "BEEF,SHLDR POT RST OR STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23112,
   value: "BEEF,SHLDR POT RST OR STEAK,BNLESS,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23113,
   value: "BEEF,CHK EYE RST,BNLS,A BF RST,LN & FAT,0\",ALL GRD,CKD,RSTD"
 },
 {
   data: 23114,
   value: "BEEF,CHK EYE RST,BNLS,A BF RST,LN & FAT,0\",CH,CKD,RSTD"
 },
 {
   data: 23115,
   value: "BEEF,CHCK EYE RST,BNLS,A BF RST,LN & FAT,0\",SEL,C,RSTD"
 },
 {
   data: 23116,
   value: "BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN & FAT,0\" FAT,ALL GRDS"
 },
 {
   data: 23117,
   value: "BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,CK"
 },
 {
   data: 23118,
   value: "BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN & FAT,0\" FAT,SEL,CKD,"
 },
 {
   data: 23119,
   value: "BEEF,CHK,MOCK TNDR STK,BNL,LN & FAT,0\" FAT,ALL GRDS, CKD"
 },
 {
   data: 23120,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,CK"
 },
 {
   data: 23121,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN & FAT,0\" FAT,SEL,CKD,"
 },
 {
   data: 23122,
   value: "BEEF,CHK,MOCK TEN STK,BNL,LN & FAT,0\" FAT,ALL GRDS, CKD"
 },
 {
   data: 23123,
   value: "BEEF,CHK,MOCK TENDER STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23124,
   value: "BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23125,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0\" FAT,ALL GRDS,CKD,BRS"
 },
 {
   data: 23126,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23127,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23128,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23129,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23130,
   value: "BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23131,
   value: "BEEF,SHLDR POT RST,BNLESS,LN & FAT,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23132,
   value: "BEEF,SHLDR POT RST,BNLESS,LN & FAT,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23133,
   value: "BEEF,SHLDR POT RST,BNLESS,LN & FAT,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23134,
   value: "BEEF,CHK EYE CTRY-STYLE RIBS,BNL,LN & FAT,0\" FAT,ALL GR, CKD"
 },
 {
   data: 23135,
   value: "BEEF,CHK EYE CNTRY-STYL RIBS,BNL,LN & FAT,0\" FAT,CHOICE, CKD"
 },
 {
   data: 23136,
   value: "BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0\" FAT,SEL, CKD"
 },
 {
   data: 23137,
   value: "BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0\" FAT,ALL GR,RAW"
 },
 {
   data: 23138,
   value: "BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0\" FAT,CHOICE,RAW"
 },
 {
   data: 23139,
   value: "BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23140,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0\" FAT,ALL GRDS,CKD,GR"
 },
 {
   data: 23141,
   value: "BEEF,CHK EYE STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,CKD,GRILLED"
 },
 {
   data: 23142,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23143,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23144,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23145,
   value: "BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23146,
   value: "BEEF,RIB EYE RST,BNE-IN,LIP-ON,LN,1/8\" FT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23147,
   value: "BEEF,RIB EYE RST,BONE-IN,LIP-ON,LN,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23148,
   value: "BEEF,RIB EYE STEAK,BNLES,LIP-ON,LN,1/8\" FAT,CHOIC,CKD,GRILD"
 },
 {
   data: 23149,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP-ON,LN,1/8\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23150,
   value: "BEEF,RIB EYE STK/RST,BONE-IN,LIP-ON,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23151,
   value: "BEEF,RIB EYE STEAK/RST,BONE-IN,LIP-ON,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23152,
   value: "BEEF,RIB EYE STEAK/ROAST,BONE-IN,LIP-ON,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23153,
   value: "BEEF,RIB EYE STK/RST,BNLESS,LIP-ON,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23154,
   value: "BEEF,RIB EYE STEAK/ROAST,BNLESS,LIP-ON,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23155,
   value: "BEEF,RIB EYE STEAK/ROAST,BNLESS,LIP-ON,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23156,
   value: "BEEF,RIB EYE STK,BNE-IN,LIP-ON,LN,1/8\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23157,
   value: "BEEF,RIB EYE STEAK,BONE-IN,LIP-ON,LN,1/8\" FAT,CHOIC,CKD,GRLD"
 },
 {
   data: 23158,
   value: "BEEF,RIB EYE STEAK,BONE-IN,LIP-ON,LN,1/8\" FAT,SEL,CKD,GRILD"
 },
 {
   data: 23159,
   value: "BEEF,RIB EYE RST,BNLESS,LIP-ON,LN,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23160,
   value: "BEEF,RIB EYE RST,BNLESS,LIP-ON,LN,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23161,
   value: "BEEF,RIB EYE RST,BNLESS,LIP-ON,LN,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23162,
   value: "BEEF,PLATE STK,BNLE,INSDE SKRT,LN,0\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23163,
   value: "BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23164,
   value: "BEEF,PLATE STK,BNLES,INSIDE SKIRT,LN,0\" FAT,CHOIC,CKD,GRLD"
 },
 {
   data: 23165,
   value: "BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23166,
   value: "BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0\" FAT,SEL,CKD,GRILD"
 },
 {
   data: 23167,
   value: "BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23168,
   value: "BEEF,PLATE STK,BNLES,OTSDE SKIRT,LN,0\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23169,
   value: "BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23170,
   value: "BEEF,PLATE STEAK,BNLS,OUTSIDE SKIRT,LN,0\" FAT,CHOIC,CKD,GRLD"
 },
 {
   data: 23171,
   value: "BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23172,
   value: "BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23173,
   value: "BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23174,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0\" FAT,ALL GRDS,CKD,GRI"
 },
 {
   data: 23175,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23176,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0\" FAT,CHOIC,CKD,GRILLE"
 },
 {
   data: 23177,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23178,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23179,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23180,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23181,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23182,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23183,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23184,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23185,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23186,
   value: "BEEF,RIB EYE STK,BNE-IN,LIP-ON,LN & FT,1/8\" FAT,CHOC,CKD,GRL"
 },
 {
   data: 23187,
   value: "BEEF,RIB EYE STK,BNE-IN,LIP-ON,LN & FT,1/8\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23188,
   value: "BEEF,RIB EYE STK,BN-IN,LIP-ON,LN & FT,1/8\" FT,AL GDS,CKD,GRL"
 },
 {
   data: 23189,
   value: "BEEF,RIB EYE RST,BNE-IN,LIP-ON,LN & FAT,1/8\" FT,CHC,CKD,RST"
 },
 {
   data: 23190,
   value: "BEEF,RIB EYE RST,BNE-IN,LIP-ON,LN & FAT,1/8\" FAT,SEL,CKD,RST"
 },
 {
   data: 23191,
   value: "BEEF,RIB EYE RST,BNE-IN,LP-ON,LN & FT,1/8\" FT,AL GRD,CKD,RST"
 },
 {
   data: 23192,
   value: "BEEF,RIB EYE STK/RST,BNE-IN,IP-ON,LN & FT,1/8\" FT,AL GRDS,RW"
 },
 {
   data: 23193,
   value: "BEEF,RIB EYE STK/RST,BNE-IN,LIP-ON,LN & FAT,1/8\" FAT,CHC,RAW"
 },
 {
   data: 23194,
   value: "BEEF,RIB EYE STK/RST,BONE-IN,LIP-ON,LN & FAT,1/8\" FAT,SEL,RW"
 },
 {
   data: 23195,
   value: "BEEF,RIB EYE STEAK,BNLS,LIP-ON,LN & FAT,1/8\" FAT,CHC,CKD,GRD"
 },
 {
   data: 23196,
   value: "BEEF,RIB EYE STK,BNLS,LIP-ON,LN & FAT,1/8\" FAT,SEL,CKD,GILD"
 },
 {
   data: 23197,
   value: "BEEF,RIB EYE STK,BNLS,LIP-ON,LN & FT,1/8\" FT,AL GRD,CKD,GRLD"
 },
 {
   data: 23198,
   value: "BEEF,RIB EYE RST,BNLS,LP-ON,LN & FT,1/8\" FT,ALL GRD,CKD,RSTD"
 },
 {
   data: 23199,
   value: "BEEF,RIB EYE RST,BNLES,LIP-ON,LN & FAT,1/8\" FAT,CHC,CKD,RSTD"
 },
 {
   data: 23200,
   value: "BEEF,RIB EYE RST,BNLES,LIP-ON,LN & FAT,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23201,
   value: "BEEF,RIB EYE STK/RST,BNLS,LIP-ON,LN & FAT,1/8\" FAT,AL GRD,RW"
 },
 {
   data: 23202,
   value: "BEEF,RIB EYE STEAK/ROST,BNLS,LIP-ON,LN & FAT,1/8\" FAT,CHC,RW"
 },
 {
   data: 23213,
   value: "BEEF,RIB EYE STEAK/ROST,BNLS,LIP-ON,LN & FAT,1/8\" FAT,SEL,RW"
 },
 {
   data: 23214,
   value: "BEEF,PLTE STK,BNLS,INSD SKRT,LN & FAT,0\" FAT,ALL GRD,CKD,GRL"
 },
 {
   data: 23215,
   value: "BEEF,PLATE STK,BNLSS,INSDE SKRT,LN & FAT,0\" FAT,CHC,CKD,GRLD"
 },
 {
   data: 23216,
   value: "BEEF,PLATE STK,BNLES,INSDE SKRT,LN & FAT,0\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23217,
   value: "BEEF,PLATE STEK,BNLS,INSDE SKRT,LN & FAT,0\" FAT,ALL GRDS,RW"
 },
 {
   data: 23218,
   value: "BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN & FAT,0\" FAT,CHOC,RW"
 },
 {
   data: 23219,
   value: "BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23220,
   value: "BEEF,GROUND,UNSPEC FAT CONTENT,CKD"
 },
 {
   data: 23221,
   value: "BEEF,PLTE STK,BNLS,OUTSD SKRT,LN & FAT,0\" FT,AL GRD,CKD,GRLD"
 },
 {
   data: 23222,
   value: "BEEF,PLATE STK,BNLS,OUTSD SKRT,LN & FAT,0\" FT,CHC,CKD,GRLD"
 },
 {
   data: 23223,
   value: "BEEF,PLATE STK,BNLS,OTSDE SKRT,LN & FAT,0\" FAT,SEL,CKD,GRILD"
 },
 {
   data: 23224,
   value: "BEEF,PLATE STEK,BNLS,OUTSDE SKRT,LN & FAT,0\" FAT,ALL GRDS,RW"
 },
 {
   data: 23225,
   value: "BEEF,PLATE STEAK,BNLS,OUTSIDE SKRT,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23226,
   value: "BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN & FAT,0\" FAT,SEL,RW"
 },
 {
   data: 23227,
   value: "BEEF,RIB EYE STK,BNLS,LIP OF,LN & FAT,0\" FT,AL GRDS,CKD,GRLD"
 },
 {
   data: 23228,
   value: "BEEF,RIB EYE STEAK,BNLS,LIP OFF,LN & FAT,0\" FAT,CHC,CKD,GRLD"
 },
 {
   data: 23229,
   value: "BEEF,RIB EYE STEK,BNLES,LIP OFF,LN & FAT,0\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23230,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN & FAT,0\" FAT,ALL GRD,RW"
 },
 {
   data: 23231,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23232,
   value: "BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23233,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23234,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23235,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23236,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23237,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23238,
   value: "BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0\" FAT,SEL,RAW"
 },
 {
   data: 23239,
   value: "BEEF,LOIN,TOP SIRLIN PETITE RST,BNLS,LN,0\" FAT,CHOC,CKD,RSTD"
 },
 {
   data: 23240,
   value: "BEEF,LOIN,TOP SIRLOIN PETITE RST/FILET,BNLS,LN,0\" FAT,CHC,RW"
 },
 {
   data: 23241,
   value: "BEEF,LOIN,TOP SIRLN CAP STK,BNLS,LN,1/8\" FAT,AL GRDS,CKD,GLD"
 },
 {
   data: 23242,
   value: "BEEF,LOIN,TOP SIRLON CAP STK,BNLS,LN,1/8\" FAT,CHOIC,CKD,GRLD"
 },
 {
   data: 23243,
   value: "BEEF,LOIN,TOP SIRLOIN CAP STEK,BNLS,LN,1/8\" FAT,SEL,CKD,GRLD"
 },
 {
   data: 23244,
   value: "BEEF,LOIN,TOP SIRLOIN CAP STEK,BNLS,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23245,
   value: "BEEF,LOIN,TOP SIRLOIN CAP STEAK,BNLESS,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23246,
   value: "BEEF,LOIN,TOP SIRLOIN CAP STEAK,BNLESS,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23247,
   value: "BEEF,TOP LOIN FILET,BNLESS,LN,1/8\" FAT,ALL GRDS,CKD,GRILLED"
 },
 {
   data: 23248,
   value: "BEEF,TOP LOIN FILET,BNLESS,LN,1/8\" FAT,CHOIC,CKD,GRILLED"
 },
 {
   data: 23249,
   value: "BEEF,TOP LOIN FILET,BNLESS,LN,1/8\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23250,
   value: "BEEF,TOP LOIN PETITE RST,BNLSS,LN,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23251,
   value: "BEEF,TOP LOIN PETITE RST,BNLESS,LN,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23252,
   value: "BEEF,TOP LOIN PETITE RST,BNLESS,LN,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23253,
   value: "BEEF,TOP LOIN PETITE RST/FILET,BNLS,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23254,
   value: "BEEF,TOP LOIN PETITE ROAST/FILET,BNLESS,LN,1/8\" FAT,CHOC,RAW"
 },
 {
   data: 23255,
   value: "BEEF,TOP LOIN PETITE ROAST/FILET,BNLESS,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23256,
   value: "BEEF,LOIN,TOP SIRLOIN FILET,BNLS,LN,0\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23257,
   value: "BEEF,LOIN,TOP SIRLOIN FILET,BNLESS,LN,0\" FAT,CHOIC,CKD,GRILD"
 },
 {
   data: 23258,
   value: "BEEF,LOIN,TOP SIRLOIN FILET,BNLESS,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23259,
   value: "BEEF,LOIN,TOP SIRLON PTIT RST,BLS,LN,0\" FAT,AL GRDS,CKD,RSTD"
 },
 {
   data: 23260,
   value: "BEEF,LOIN,TOP SIRLOIN PETITE RST,BNLS,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23261,
   value: "BEEF,LOIN,TOP SRLN PETIT RST/FILT,BNLS,LN,0\" FAT,AL GRDS,RAW"
 },
 {
   data: 23262,
   value: "BEEF,LOIN,TOP SIRLON PETITE RST/FILET,BNLS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23263,
   value: "BEEF,RIBEYE PETITE ROAST/FILET,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23264,
   value: "BEEF,RIBEYE PETITE ROAST/FILET,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23265,
   value: "BEEF,RIBEYE PETITE ROAST/FILET,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23266,
   value: "BEEF,RIBEYE CAP STEAK,BNLESS,LN,0\" FAT,ALL GRDS,CKD,GRILLED"
 },
 {
   data: 23267,
   value: "BEEF,RIBEYE CAP STEAK,BNLESS,LN,0\" FAT,CHOIC,CKD,GRILLED"
 },
 {
   data: 23268,
   value: "BEEF,RIBEYE CAP STEAK,BNLESS,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23269,
   value: "BEEF,RIBEYE CAP STEAK,BNLESS,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23270,
   value: "BEEF,RIBEYE CAP STEAK,BNLESS,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23271,
   value: "BEEF,RIBEYE CAP STEAK,BNLESS,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23272,
   value: "BEEF,RIBEYE FILET,BNLESS,LN,0\" FAT,ALL GRDS,CKD,GRILLED"
 },
 {
   data: 23273,
   value: "BEEF,RIBEYE FILET,BNLESS,LN,0\" FAT,CHOIC,CKD,GRILLED"
 },
 {
   data: 23274,
   value: "BEEF,RIBEYE FILET,BNLESS,LN,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23275,
   value: "BEEF,RIBEYE PETITE RST,BNLESS,LN,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23276,
   value: "BEEF,RIBEYE PETITE RST,BNLESS,LN,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23277,
   value: "BEEF,RIBEYE PETITE RST,BNLESS,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23278,
   value: "BEEF,LOIN,TOP SRL CP STK,BNLS,LN & FT,1/8\" FT,ALGDS,CKD,GRLD"
 },
 {
   data: 23279,
   value: "BEEF,LOIN,TOP SRLN CAP STK,BLS,LN & FAT,1/8\" FAT,CHC,CKD,GLD"
 },
 {
   data: 23280,
   value: "BEEF,LOIN,TOP SRLN CAP STK,BLS,LN & FAT,1/8\" FAT,SEL,CKD,GLD"
 },
 {
   data: 23281,
   value: "BEEF,LOIN,TOP SIRLN CAP STK,BNLS,LN & FAT,1/8\" FAT,AL GDS,RW"
 },
 {
   data: 23282,
   value: "BEEF,LOIN,TOP SIRLOIN CAP STK,BNLS,LN & FAT,1/8\" FAT,CHC,RAW"
 },
 {
   data: 23283,
   value: "BEEF,LOIN,TOP SIRLOIN CAP STK,BNLS,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23284,
   value: "BEEF,TOP LOIN FILET,BNLS,LN & FAT,1/8\" FAT,ALL GRDS,CKD,GRLD"
 },
 {
   data: 23285,
   value: "BEEF,TOP LOIN FILET,BNLESS,LN & FAT,1/8\" FAT,CHOIC,CKD,GRILD"
 },
 {
   data: 23286,
   value: "BEEF,TOP LOIN FILET,BNLESS,LN & FAT,1/8\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23287,
   value: "BEEF,TOP LOIN PET RST,BNLS,LN & FAT,1/8\" FAT,AL GDS,CKD,RSTD"
 },
 {
   data: 23288,
   value: "BEEF,TOP LOIN PETI RST,BNLS,LN & FAT,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23289,
   value: "BEEF,TOP LOIN PETITE RST,BNLS,LN & FAT,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23290,
   value: "BEEF,TOP LOIN PETIT RST/FILT,BNS,LN & FAT,1/8\" FAT,AL GRD,RW"
 },
 {
   data: 23291,
   value: "BEEF,TOP LOIN PETITE RST/FILET,BNLS,LN & FAT,1/8\" FAT,CHC,RW"
 },
 {
   data: 23292,
   value: "BEEF,TOP LOIN PETITE RST/FILET,BNLS,LN & FAT,1/8\" FAT,SEL,RW"
 },
 {
   data: 23293,
   value: "BEEF,AUSTRALIAN,GRASS-FED,GROUND,85% LN / 15% FAT,RAW"
 },
 {
   data: 23294,
   value: "BEEF,AUSTRALIAN,GRSSFD,LOIN,TNDRLN STEAK/ROAST,BNLESS,LN,RAW"
 },
 {
   data: 23295,
   value: "BEEF,ASTRLN,WAGYU,LN,TNDRLN STK/RST,BNLS,LN,MRB SCR 4/5,RAW"
 },
 {
   data: 23296,
   value: "BEEF,AUSTRALIAN,GRASS-FED,EXTERNAL FAT,RAW"
 },
 {
   data: 23297,
   value: "BEEF,AUSTRALIAN,GRASS-FED,SEAM FAT,RAW"
 },
 {
   data: 23298,
   value: "BEEF,AUSTRALIAN,WAGYU,EXTERNAL FAT,MRBL SCR 4/5,RAW"
 },
 {
   data: 23299,
   value: "BEEF,AUSTRALIAN,WAGYU,SEAM FAT,MRBL SCR 4/5,RAW"
 },
 {
   data: 23300,
   value: "BEEF,AUSTRALIAN,WAGYU,EXTERNAL FAT,AUST. MARBLE SCORE 9,RAW"
 },
 {
   data: 23301,
   value: "BEEF,AUSTRALIAN,WAGYU,SEAM FAT,AUST. MARBLE SCORE 9,RAW"
 },
 {
   data: 23302,
   value: "BEEF,AUSTRALN,GRS-FED,LOIN,TENDRLN STK/RST,BNLS,LN & FAT,RAW"
 },
 {
   data: 23303,
   value: "BEEF,ASTRLIAN,GRSSFD,LOIN,TOP LOIN STEAK/ROAST,BNLESS,LN,RAW"
 },
 {
   data: 23304,
   value: "BEEF,AUST,WAGYU,LN,TDRLN STK/RST,BNLS,LN&FAT,MRBLSCR 4/5,RAW"
 },
 {
   data: 23305,
   value: "BEEF,AUSTRALN,GRS-FED,LOIN,TOP LOIN STK/RST,BNLS,LN & FAT,RW"
 },
 {
   data: 23306,
   value: "BEEF,ASTRLN,GRSSFD,LN,TOP SRLN CAP-OFF STEAK/RST,BNLS,LN,RAW"
 },
 {
   data: 23307,
   value: "BEEF,AUSTRALIAN,GRSSFD,RIB,RIBEYE STK/RST LIP-ON,BNLS,LN,RAW"
 },
 {
   data: 23308,
   value: "BEEF,AUSTRALIAN,GRSSFD,RND,BTTM RND STEAK/ROAST,BNLSS,LN,RAW"
 },
 {
   data: 23309,
   value: "BEEF,ASTRLN,GRSFD,RND,TOP RND CAP-OFF STEAK/RST,BNLSS,LN,RAW"
 },
 {
   data: 23310,
   value: "BEEF,ASTRLN,WAGYU,LN,TNDRLN STK/RST,BNLESS,LN,MRBL SCR 9,RAW"
 },
 {
   data: 23311,
   value: "BEEF,ASTRL,WGYU,LN,TP LN STK/RST,BNLS LN, AUS MRBL SC 4/5 RW"
 },
 {
   data: 23312,
   value: "BEEF,ASTRLN,WGYU,LOIN,TOP LN STK/RST,BNLS,LN, MRBL SCR 9,RAW"
 },
 {
   data: 23313,
   value: "BEE,ASTRLN,WGYU,RB,SML END RB STK/RST,BLS,LN,MRBLSCR 4/5,RAW"
 },
 {
   data: 23314,
   value: "BEE,ASTRLN,WAGYU,RB,SMLEND RB STK/RST,BNLS,LN,MRBL SCR 9,RAW"
 },
 {
   data: 23315,
   value: "BEEF,ASTRLN,GRSSFD,LN,TPSRLN CAPOFF STK/RST,BNLS,LN & FT,RAW"
 },
 {
   data: 23316,
   value: "BEEF,ASTRLN,GRSFD,RIB,RBEYE STK/RST LIP-ON,BNLS,LN & FAT,RAW"
 },
 {
   data: 23317,
   value: "BEEF,ASTRLN,GRSSFD,RND,BTTM RND STEAK/RST,BNLS,LN & FAT,RAW"
 },
 {
   data: 23318,
   value: "BEEF,ASTRLN,GRSFD,RND,TOPRND CAPOFF STK/RST,BNLS,LN & FT,RAW"
 },
 {
   data: 23319,
   value: "BEEF,ASTRLN,WGYU,LN,TOPLN STK/RST,BLS,LN&FAT,MRBL SCR 4/5,RW"
 },
 {
   data: 23320,
   value: "BEEF,AUSTRALIAN,WAGYU,LOIN,TOP LN STK/RST,LN & FAT,MRBL SCR"
 },
 {
   data: 23321,
   value: "BEEF,ASTRLN,WAGYU,RIB,SMLND RB STK/RST,BNLS,LN &FAT,MRBL SCR"
 },
 {
   data: 23322,
   value: "BEEF,ASTRLN,WGYU,RB,SML END RB STK/RST,BNLS,LN &FAT,MRBL SCR"
 },
 {
   data: 23323,
   value: "BEEF,ASTRLN,WGYU,LN,TNDRLN STK/RST,BNLS,LN&FT,MRBL SCR 9,RAW"
 },
 {
   data: 23501,
   value: "USDA COMMODITY,BF PATTIES W/VPP,FRZ,CKD"
 },
 {
   data: 23502,
   value: "USDA COMMODITY,BF,GROUND BULK/COARSE GROUND,FRZ,CKD"
 },
 {
   data: 23503,
   value: "USDA COMMODITY,BF,PATTIES (100%),FRZ,CKD"
 },
 {
   data: 23506,
   value: "USDA COMMODITY,BF PATTIES W/VPP,FRZ,RAW"
 },
 {
   data: 23507,
   value: "USDA COMMODITY,BF,PATTIES (100%),FRZ,RAW"
 },
 {
   data: 23508,
   value: "USDA COMMODITY,BF,GROUND,BULK/COARSE GROUND,FRZ,RAW"
 },
 {
   data: 23509,
   value: "BEEF,CHUCK,MOCK TENDER STK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23511,
   value: "BEEF,CHUCK,TOP BLADE,LN ONLY,TO 0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23513,
   value: "BEEF,CHUCK,CLOD RST,LN,1/4\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23514,
   value: "BEEF,CHUCK,CLOD RST,LN,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23515,
   value: "BEEF,CHUCK,CLOD RST,LN ONLY,TO 1/4\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23516,
   value: "BEEF,SHLDR STEAK,BNLESS,LN,0\" FAT,ALL GRDS,CKD,GRILLED"
 },
 {
   data: 23517,
   value: "BEEF,CHUCK,CLOD STEAK,LN ONLY,TO 1/4\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23519,
   value: "BEEF,CHCK,MCK TENDER STK,LN & FAT,0\" FAT,USDA CHOIC,CKD,BRLD"
 },
 {
   data: 23521,
   value: "BEEF,CHUCK,MOCK TENDER STK,LN & FAT,0\" FAT,USDA SEL,CKD,BRLD"
 },
 {
   data: 23523,
   value: "BEEF,CHUCK,TOP BLADE,LN & FAT,0\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 23525,
   value: "BEEF,CHUCK,TOP BLADE,LN & FAT,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23528,
   value: "BEEF,CHUCK,CLOD RST,LN & FAT,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23531,
   value: "BEEF,CHUCK,CLOD RST,LN & FAT,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23533,
   value: "BEEF,SHLDR STEAK,BNLESS,LN & FAT,0\" FAT,CHOIC,CKD,GRILLED"
 },
 {
   data: 23536,
   value: "BEEF,SHLDR STEAK,BNLESS,LN & FAT,0\" FAT,SEL,CKD,GRILLED"
 },
 {
   data: 23540,
   value: "BEEF,PLATE,SKIRT STEAK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23541,
   value: "BEEF,PLATE,OUTSIDE SKIRT,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23545,
   value: "BEEF,SIRLOIN,TRI-TIP STK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23547,
   value: "BEEF,CHUCK,MOCK TENDER STK,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23549,
   value: "BEEF,CHUCK,TOP BLADE,LN & FAT,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23552,
   value: "BEEF,CHUCK,CLOD RST,LN & FAT,0\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23554,
   value: "BEEF,SHLDR STEAK,BNLESS,LN & FAT,0\" FAT,ALL GRDS,CKD,GRILLED"
 },
 {
   data: 23557,
   value: "BEEF,GROUND,95% LN MEAT / 5% FAT,RAW"
 },
 {
   data: 23558,
   value: "BEEF,GROUND,95% LN MEAT / 5% FAT,PATTY,CKD,BRLD"
 },
 {
   data: 23559,
   value: "BEEF,GROUND,95% LN MEAT / 5% FAT,PATTY,CKD,PAN-BROILED"
 },
 {
   data: 23560,
   value: "BEEF,GROUND,95% LN MEAT / 5% FAT,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 23561,
   value: "BEEF,GROUND,95% LN MEAT / 5% FAT,LOAF,CKD,BKD"
 },
 {
   data: 23562,
   value: "BEEF,GROUND,90% LN MEAT / 10% FAT,RAW"
 },
 {
   data: 23563,
   value: "BEEF,GROUND,90% LN MEAT / 10% FAT,PATTY,CKD,BRLD"
 },
 {
   data: 23564,
   value: "BEEF,GROUND,90% LN MEAT / 10% FAT,PATTY,CKD,PAN-BROILED"
 },
 {
   data: 23565,
   value: "BEEF,GROUND,90% LN MEAT / 10% FAT,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 23566,
   value: "BEEF,GROUND,90% LN MEAT / 10% FAT,LOAF,CKD,BKD"
 },
 {
   data: 23567,
   value: "BEEF,GROUND,85% LN MEAT / 15% FAT,RAW"
 },
 {
   data: 23568,
   value: "BEEF,GROUND,85% LN MEAT / 15% FAT,PATTY,CKD,BRLD"
 },
 {
   data: 23569,
   value: "BEEF,GROUND,85% LN MEAT / 15% FAT,PATTY,CKD,PAN-BROILED"
 },
 {
   data: 23570,
   value: "BEEF,GROUND,85% LN MEAT / 15% FAT,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 23571,
   value: "BEEF,GROUND,85% LN MEAT / 15% FAT,LOAF,CKD,BKD"
 },
 {
   data: 23572,
   value: "BEEF,GROUND,80% LN MEAT / 20% FAT,RAW"
 },
 {
   data: 23573,
   value: "BEEF,GROUND,80% LN MEAT / 20% FAT,PATTY,CKD,BRLD"
 },
 {
   data: 23574,
   value: "BEEF,GROUND,80% LN MEAT / 20% FAT,PATTY,CKD,PAN-BROILED"
 },
 {
   data: 23575,
   value: "BEEF,GROUND,80% LN MEAT / 20% FAT,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 23576,
   value: "BEEF,GROUND,80% LN MEAT / 20% FAT,LOAF,CKD,BKD"
 },
 {
   data: 23577,
   value: "BEEF,GROUND,75% LN MEAT / 25% FAT,RAW"
 },
 {
   data: 23578,
   value: "BEEF,GROUND,75% LN MEAT / 25% FAT,PATTY,CKD,BRLD"
 },
 {
   data: 23579,
   value: "BEEF,GROUND,75% LN MEAT / 25% FAT,PATTY,CKD,PAN-BROILED"
 },
 {
   data: 23580,
   value: "BEEF,GROUND,75% LN MEAT / 25% FAT,CRUMBLES,CKD,PAN-BROWNED"
 },
 {
   data: 23581,
   value: "BEEF,GROUND,75% LN MEAT / 25% FAT,LOAF,CKD,BKD"
 },
 {
   data: 23582,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23583,
   value: "BEEF,TENDERLOIN,STEAK,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23584,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23585,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23586,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23587,
   value: "BEEF,TENDERLOIN,STEAK,LN,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23588,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23589,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23590,
   value: "BEEF,RND,BTTM RND RST,LN,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23591,
   value: "BEEF,RND,EYE OF RND,RST,LN,1/8\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23592,
   value: "BEEF,RND,TOP RND,STEAK,LN,1/8\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23593,
   value: "BEEF,RND,BTTM RND,STEAK,LN,1/8\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23594,
   value: "BEEF,RND,BTTM RND,RST,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23595,
   value: "BEEF,BRISKET,FLAT HALF,LN,1/8\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23596,
   value: "BEEF,BRISKET,FLAT HALF,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23597,
   value: "BEEF,RND,EYE OF RND,RST,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23598,
   value: "BEEF,RND,EYE OF RND,RST,LN,1/8\" FAT,ALL GRDS,CKD,RSTD"
 },
 {
   data: 23599,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23600,
   value: "BEEF,TENDERLOIN,STEAK,LN,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23601,
   value: "BEEF,TENDERLOIN,STEAK,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23602,
   value: "BEEF,CHUCK,ARM POT RST,LN,1/8\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23603,
   value: "BEEF,CHUCK,ARM POT RST,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23604,
   value: "BEEF,RND,BTTM RND,RST,LN,1/8\" FAT,ALL GRDS,CKD"
 },
 {
   data: 23605,
   value: "BEEF,RND,BTTM RND,STEAK,LN,1/8\" FAT,ALL GRDS,CKD,BRSD"
 },
 {
   data: 23606,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23607,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23608,
   value: "BEEF,RND,TOP RND,STEAK,LN,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23609,
   value: "BEEF,RND,TOP RND,STEAK,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23610,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23611,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,1/8\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23612,
   value: "BEEF,CHUCK,ARM POT RST,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23613,
   value: "BEEF,BRISKET,FLAT HALF,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23614,
   value: "BEEF,CHUCK,ARM POT RST,LN,1/8\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23615,
   value: "BEEF,BRISKET,FLAT HALF,LN,1/8\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23616,
   value: "BEEF,RND,EYE OF RND,RST,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23617,
   value: "BEEF,RND,TOP RND,STEAK,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23618,
   value: "BEEF,RND,BTTM RND,RST,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23619,
   value: "BEEF,RND,BTTM RND,RST,LN,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23620,
   value: "BEEF,RND,EYE OF RND,RST,LN,1/8\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23621,
   value: "BEEF,RND,TOP RND,STEAK,LN,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 23622,
   value: "BEEF,RND,BTTM RND,STEAK,LN,1/8\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 23623,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23624,
   value: "BEEF,TENDERLOIN,STEAK,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23625,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23626,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,1/8\"FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 23627,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23628,
   value: "BEEF,TENDERLOIN,STEAK,LN,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 23629,
   value: "BEEF,TOP SIRLOIN,STEAK,LN,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 23630,
   value: "BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8\" FAT,CHOIC,CKD,BRLD"
 },
 {
   data: 23631,
   value: "BEEF,CHUCK,ARM POT RST,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23632,
   value: "BEEF,BRISKET,FLAT HALF,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23633,
   value: "BEEF,CHUCK,ARM POT RST,LN,1/8\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23634,
   value: "BEEF,BRISKET,FLAT HALF,LN,1/8\" FAT,SEL,CKD,BRSD"
 },
 {
   data: 23635,
   value: "BEEF,RND,EYE OF RND,RST,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23636,
   value: "BEEF,RND,TOP RND,STEAK,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23637,
   value: "BEEF,RND,BTTM RND,RST,LN,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23638,
   value: "BEEF,RIB,SML END (RIBS 10-12),LN,1/8\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23640,
   value: "BEEF,VAR MEATS & BY-PRODUCTS,TRIPE,CKD,SIMMRD"
 },
 {
   data: 23646,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23647,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0\" FAT,CHOIC,CKD,RSTD"
 },
 {
   data: 23648,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23649,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0\" FAT,SEL,CKD,RSTD"
 },
 {
   data: 23650,
   value: "BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23651,
   value: "BEEF,RND,TIP RND,RST,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23652,
   value: "BEEF,RND,TIP RND,RST,LN,0\" FAT,CHOIC,RAW"
 },
 {
   data: 23653,
   value: "BEEF,RND,TIP RND,RST,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23654,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,ALL GRDS,CKD,BRLD"
 },
 {
   data: 23655,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,SEL,CKD,BRLD"
 },
 {
   data: 23656,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,ALL GRDS,RAW"
 },
 {
   data: 23657,
   value: "BEEF,FLANK,STEAK,LN,0\" FAT,SEL,RAW"
 },
 {
   data: 23658,
   value: "BEEF,BRISKET,FLAT HALF,LN & FAT,1/8\" FAT,CHOIC,RAW"
 },
 {
   data: 23659,
   value: "BEEF,BRISKET,FLAT HALF,LN & FAT,1/8\" FAT,SEL,RAW"
 },
 {
   data: 23660,
   value: "BEEF,BRISKET,FLAT HALF,LN & FAT,1/8\" FAT,CHOIC,CKD,BRSD"
 },
 {
   data: 25000,
   value: "POPCORN,OIL-POPPED,LOFAT"
 },
 {
   data: 25001,
   value: "POPCORN,OIL-POPPED,LOFAT"
 },
 {
   data: 25002,
   value: "SNACKS,POPCORN,UNPOPPED KRNLS"
 },
 {
   data: 25003,
   value: "SNACKS,CANDY ROLLS,YOGURT-COVERED,FRUIT FLAV W/ HI VIT C"
 },
 {
   data: 25004,
   value: "FORM BAR,MARS SNACK US,SNICKERSMARATHONCHEWCHOCPNUT BAR"
 },
 {
   data: 25005,
   value: "FORM BAR,MARS SNKF US,SNICKERS MARATHON MULTIGRNCRUNCH"
 },
 {
   data: 25006,
   value: "FORM BAR,MARS SNACK US,SNICKERS MARATHON DOUBLE CHOC NUT BAR"
 },
 {
   data: 25007,
   value: "SNACKS,M&M MARS,KUDOS WHL GRAIN BARS,PNUT BUTTER"
 },
 {
   data: 25008,
   value: "FORM BAR,MARS SNACKFOOD US,SNICKERS MARATHON HON NUT OAT BAR"
 },
 {
   data: 25009,
   value: "SNACKS,M&M MARS,KUDOS WHL GRAIN BAR,M&M'S MILK CHOC"
 },
 {
   data: 25010,
   value: "FORM BAR,MARS SNACKFOOD US,COCOAVIA,CHOC ALMOND"
 },
 {
   data: 25012,
   value: "SNACKS,SWT POTATO CHIPS,UNSALTED"
 },
 {
   data: 25013,
   value: "SNACKS,FRITOLAY,SUNCHIPS,MULTIGRAIN SNACK,ORIGINAL FLAVOR"
 },
 {
   data: 25014,
   value: "SNACKS,POPCORN,MICROWAVE,REG (BUTTER) FLAVOR, W/PARHYD OIL"
 },
 {
   data: 25015,
   value: "FORMBAR,MARSSNACK,SNICKERS MARATHONPROTPERFBAR,CARMELNUTRUSH"
 },
 {
   data: 25016,
   value: "FORM BAR,MARS SNACK US,SNICKERS MARATHON ENERGY BAR,ALL FLAV"
 },
 {
   data: 25017,
   value: "FORMULATED BAR,POWER BAR,CHOC"
 },
 {
   data: 25018,
   value: "FORM BAR,MARS SNACKFOOD US,COCOAVIA,CHOC BLUEBERRY"
 },
 {
   data: 25020,
   value: "FORMULATED BAR,SLIM-FAST OPTIMA MEAL BAR,MILK CHOC PNUT"
 },
 {
   data: 25021,
   value: "FORMULATED BAR,LUNA BAR,NUTZ OVER CHOC"
 },
 {
   data: 25022,
   value: "SNACKS,FRITOLAY,SUNCHIPS,MULTIGRAIN,FRENCH ONION FLAVOR"
 },
 {
   data: 25023,
   value: "SNACKS,FRITOLAY,SUNCHIPS,MULTIGRAIN,HARVEST CHEDDAR"
 },
 {
   data: 25024,
   value: "PRETZELS,SOFT,UNSALTED"
 },
 {
   data: 25025,
   value: "SNACKS,SOY CHIPS OR CRISPS,SALTED"
 },
 {
   data: 25026,
   value: "POPCORN,MICROWAVE,REG (BUTTER) FLAVOR,MADE W/ PALM OIL"
 },
 {
   data: 25027,
   value: "SNACKS,PLANTAIN CHIPS,SALTED"
 },
 {
   data: 25028,
   value: "TORTILLA CHIPS,YEL,PLN,SALTED"
 },
 {
   data: 25030,
   value: "SNACKS,VEG CHIPS,HAIN CELESTIAL GROUP,TERRA CHIPS"
 },
 {
   data: 25031,
   value: "FORM BAR,ZONE PERFECT CLASSIC CRUNCH BAR,MXD FLAVORS"
 },
 {
   data: 25032,
   value: "SNACKS,GRANOLA BAR,KASHI GOLEAN,CHEWY,MXD FLAVORS"
 },
 {
   data: 25033,
   value: "SNACKS,GRANOLA BAR,KASHI TLC BAR,CHEWY,MXD FLAVORS"
 },
 {
   data: 25034,
   value: "SNACKS,GRANOLA BAR,KASHI GOLEAN,CRUNCHY,MXD FLAVORS"
 },
 {
   data: 25035,
   value: "SNACKS,GRANOLA BAR,CHEWY,RED SUGAR,ALL FLAVORS"
 },
 {
   data: 25036,
   value: "SNACKS,GRANOLA BITES,MXD FLAVORS"
 },
 {
   data: 25037,
   value: "SNACKS,PITA CHIPS,SALTED"
 },
 {
   data: 25038,
   value: "SNACKS,GRANOLA BARS,SOFT,ALMOND,CONFECTIONERS COATING"
 },
 {
   data: 25039,
   value: "SNACKS,GRANOLA BARS,QUAKER OATMEAL TO GO,ALL FLAVORS"
 },
 {
   data: 25040,
   value: "SNACKS,VEG CHIPS,MADE FROM GARDEN VEG"
 },
 {
   data: 25041,
   value: "SNACKS,GRANOLA BAR,KASHI TLC BAR,CRUNCHY,MXD FLAVORS"
 },
 {
   data: 25043,
   value: "SNACKS,CANDY BITS,YOGURT COVERED W/ VIT C"
 },
 {
   data: 25045,
   value: "Formulated bar, high fiber, chewy, oats and chocolate"
 },
 {
   data: 25046,
   value: "SNACKS,BAGEL CHIPS,PLN"
 },
 {
   data: 25048,
   value: "SNACKS,NUTRI-GRAIN FRUIT & NUT BAR"
 },
 {
   data: 25050,
   value: "SNACKS,YUCCA (CASSAVA) CHIPS,SALTED"
 },
 {
   data: 25051,
   value: "Snacks, CLIF BAR, mixed flavors"
 },
 {
   data: 25052,
   value: "SNACKS,GRANOLA BAR,QUAKER,CHEWY,90 CAL BAR"
 },
 {
   data: 25053,
   value: "Snac, grano bar, GENER MILLS NATURE VALL, SWE&SAL NUT, peanu"
 },
 {
   data: 25054,
   value: "Snack,gran bar,GENERAL MILLS, NATURE VALLEY, w yogu coati"
 },
 {
   data: 25055,
   value: "Snac, grano bar, GENER MILLS, NATUR VALLE, CHEWY TRAIL MIX"
 },
 {
   data: 25056,
   value: "Snacks, granola bar, QUAKER, DIPPS, all flavors"
 },
 {
   data: 27000,
   value: "SOUP,EGG DROP,CHINESE RESTAURANT"
 },
 {
   data: 27001,
   value: "SOUP,HOT & SOUR,CHINESE RESTAURANT"
 },
 {
   data: 27002,
   value: "SOUP,WONTON,CHINESE RESTAURANT"
 },
 {
   data: 27004,
   value: "CAMPBELL'S CHUNKY SOUPS,BF STEW - FULL"
 },
 {
   data: 27005,
   value: "CAMPBELL'S CHUNKY SOUPS,BF STROGANOF -"
 },
 {
   data: 27006,
   value: "CAMPBELL'S CHUNKY,HEALTHY REQUEST BF BARLEY SOUP"
 },
 {
   data: 27007,
   value: "CAMPBELL'S CHNKY,HEALTHY REQUST MICROWAVBL ,CHICK NODLE SOUP"
 },
 {
   data: 27008,
   value: "HLTHY RQST MCRWVBL BWL,GRLL CHICK SSAGE GMB"
 },
 {
   data: 27009,
   value: "CAMPBELL'S CHUNKY SOUPS,HEALTHY REQUES"
 },
 {
   data: 27010,
   value: "CAMPBELL'S CHUNKY SOUPS,RIGATONI & MEA"
 },
 {
   data: 27011,
   value: "CAMPBELL'S CHUNKY SOUPS,TURKEY POT PIE"
 },
 {
   data: 27013,
   value: "CAMPBELL'S RED & WHITE,CHICK BARLEY W/"
 },
 {
   data: 27014,
   value: "CAMPBELL'S RED & WHITE,ITALIAN STYLE W"
 },
 {
   data: 27016,
   value: "CAMPBELL'S RED & WHITE,SOUPER SHAPES S"
 },
 {
   data: 27017,
   value: "CAMPBELL'S SEL MICROWAVEABLE BOWLS,HEA"
 },
 {
   data: 27018,
   value: "CAMPBELL'S SEL MICROWAVEABLE BOWLS,HEA"
 },
 {
   data: 27019,
   value: "CAMPBELL'S, SEL SOUP,HARVEST TOMATO W/ BASIL SOUP"
 },
 {
   data: 27020,
   value: "CAMPBELL'S SEL SOUP,ZESTY AZTECA MEATB"
 },
 {
   data: 27021,
   value: "CAMPBELL'S SEL SOUPS,HEALTHY REQUEST C"
 },
 {
   data: 27022,
   value: "CAMPBELL'S SOUP AT HAND,25% LESS NA CH"
 },
 {
   data: 27023,
   value: "CAMPBELL'S SOUP AT HAND,25% LESS NA CL"
 },
 {
   data: 27024,
   value: "CAMPBELL'S SEL GOLD LABEL SOUPS,CREAMY"
 },
 {
   data: 27025,
   value: "CAMPBELL'S SEL GOLD LABEL SOUPS,ITALIA"
 },
 {
   data: 27026,
   value: "CAMPBELL'S SEL GOLD LABEL SOUPS,SOUTHW"
 },
 {
   data: 27027,
   value: "PACE,PICO DE GALLO"
 },
 {
   data: 27028,
   value: "PACE,SALSA VERDE"
 },
 {
   data: 27029,
   value: "PACE,TEQUILA LIME SALSA"
 },
 {
   data: 27030,
   value: "PACE,TRIPLE PEPPER SALSA"
 },
 {
   data: 27032,
   value: "CAMPBELL'S RED & WHITE,LENTIL SOUP,COND"
 },
 {
   data: 27033,
   value: "PREGO PASTA,HEART SMART- TRADITIONAL S"
 },
 {
   data: 27034,
   value: "CAMPBELL'S,RED & WHITE,98% FAT FREE CRM OF MUSHROOM SOUP,CON"
 },
 {
   data: 27035,
   value: "SOUP,RAMEN NOODLE,DRY,ANY FLAVOR,RED FAT,RED NA"
 },
 {
   data: 27042,
   value: "SOUP,CLAM CHOWDER,NEW ENGLAND,CND,RTS"
 },
 {
   data: 27043,
   value: "SOUP,CLAM CHOWDER,NEW ENGLAND,RED NA,CND,RTS"
 },
 {
   data: 27044,
   value: "SOUP,CHICK NOODLE,RED NA,CND,RTS"
 },
 {
   data: 27045,
   value: "SOUP,BF & VEG,RED NA,CND,RTS"
 },
 {
   data: 27046,
   value: "SAUCE,DUCK,RTS"
 },
 {
   data: 27047,
   value: "SAUCE,SALSA,VERDE,RTS"
 },
 {
   data: 27048,
   value: "SAUCE,STEAK,TOMATO BSD"
 },
 {
   data: 27049,
   value: "SAUCE,TARTAR,RTS"
 },
 {
   data: 27050,
   value: "SAUCE,SWT & SOUR,RTS"
 },
 {
   data: 27051,
   value: "SAUCE,COCKTAIL,RTS"
 },
 {
   data: 27052,
   value: "DIP,SALSA CON QUESO,CHS & SALSA- MED"
 },
 {
   data: 27053,
   value: "DIP,OLD EL PASO,CHS 'N SALSA,MED"
 },
 {
   data: 27054,
   value: "DIP,TOSTITOS,SALSA CON QUESO,MED"
 },
 {
   data: 27055,
   value: "SAUCE,BARBECUE,SWT BABY RAY'S,ORIGINAL"
 },
 {
   data: 27056,
   value: "SAUCE,BARBECUE,BULL'S-EYE,ORIGINAL"
 },
 {
   data: 27057,
   value: "SAUCE,BARBECUE,KC MASTERPIECE,ORIGINAL"
 },
 {
   data: 27058,
   value: "SAUCE,BARBECUE,OPEN PIT,ORIGINAL"
 },
 {
   data: 28000,
   value: "KELLOGG'S,EGGO,MINI MUFFIN TOPS,CHOC CHIP"
 },
 {
   data: 28001,
   value: "KELLOGG'S,EGGO,NUTRI-GRAIN FRZ FRUIT PIZZA,MXD BERRY GRANOLA"
 },
 {
   data: 28002,
   value: "KELLOGG'S,EGGO,NUTRI-GRAIN FRZ FRUIT PIZZA,STRAWBERRY GRANOL"
 },
 {
   data: 28003,
   value: "KELLOGG'S,EGGO,PANCAKES,BLUEBERRY"
 },
 {
   data: 28004,
   value: "KELLOGG'S,EGGO,PANCAKES,CHOC CHIP"
 },
 {
   data: 28005,
   value: "KELLOGG'S,CINNABON,PANCAKES,CARAMEL"
 },
 {
   data: 28006,
   value: "KELLOGG'S,CINNABON,PANCAKES,ORIGINAL"
 },
 {
   data: 28007,
   value: "KELLOGG'S,EGGO,WAFFLERS,BROWN SUGAR CINN ROLL"
 },
 {
   data: 28008,
   value: "KELLOGG'S,EGGO,WAFFLERS,STRAWBERRY STRUDEL"
 },
 {
   data: 28009,
   value: "KELLOGG'S,EGGO,WAFFLES,BLUEBERRY"
 },
 {
   data: 28010,
   value: "KELLOGG'S,EGGO,WAFFLES,BTTRMLK"
 },
 {
   data: 28011,
   value: "KELLOGG'S,EGGO,WAFFLES,CINN TOAST"
 },
 {
   data: 28012,
   value: "KELLOGG'S,EGGO,FIBERPLUS WAFFLES,BTTRMLK"
 },
 {
   data: 28013,
   value: "KELLOGG'S,EGGO,FIBERPLUS WAFFLES,CHOC CHIP"
 },
 {
   data: 28014,
   value: "KELLOGG'S,EGGO,WAFFLES,FRENCH TOAST"
 },
 {
   data: 28015,
   value: "KELLOGG'S,EGGO,WAFFLES,HOMESTYLE"
 },
 {
   data: 28016,
   value: "KELLOGG'S,EGGO PROT,WAFFLES,HOMESTYLE"
 },
 {
   data: 28017,
   value: "KASHI,TLC,PITA CRISPS,SEA SALT"
 },
 {
   data: 28018,
   value: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,BLUEBERRY"
 },
 {
   data: 28019,
   value: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,HONEY OAT"
 },
 {
   data: 28020,
   value: "KASHI,TLC,PITA CRISPS,ZESTY SALSA"
 },
 {
   data: 28021,
   value: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,ORIGINAL"
 },
 {
   data: 28022,
   value: "KELLOGG'S,EGGO SEASONS,WAFFLES,PUMPKIN SPICE"
 },
 {
   data: 28023,
   value: "KELLOGG'S,SIMPLY EGGO,ORIGINAL"
 },
 {
   data: 28024,
   value: "KELLOGG'S,EGGO,WAFFLES,STRAWBERRY"
 },
 {
   data: 28025,
   value: "KELLOGG'S,EGGO,THICK & FLUFFY,WAFFLES,BROWN SUGAR"
 },
 {
   data: 28026,
   value: "KELLOGG'S,EGGO,THICK & FLUFFY,WAFFLES,ORIGINAL"
 },
 {
   data: 28027,
   value: "FAMOUS AMOS,CHOC CHIP COOKIES"
 },
 {
   data: 28028,
   value: "FAMOUS AMOS,CHOC CHIP PECAN COOKIES"
 },
 {
   data: 28029,
   value: "GIRL SCOUTS,CARAMEL DULCE DE LECHE COOKIES"
 },
 {
   data: 28030,
   value: "GIRL SCOUTS,CHALET COOKIES"
 },
 {
   data: 28031,
   value: "GIRL SCOUTS,DO-SI-DOS COOKIES"
 },
 {
   data: 28032,
   value: "GIRL SCOUTS,SAMOAS COOKIES"
 },
 {
   data: 28033,
   value: "GIRL SCOUTS,TAGALONGS COOKIES"
 },
 {
   data: 28034,
   value: "GIRL SCOUTS,THANK U BERRY MUNCH COOKIES"
 },
 {
   data: 28035,
   value: "GIRL SCOUTS,THIN MINTS COOKIES"
 },
 {
   data: 28036,
   value: "GIRL SCOUTS,TREFOILS COOKIES"
 },
 {
   data: 28037,
   value: "JACKSON'S,OLD FASHIONED LEMON JUMBLE COOKIES"
 },
 {
   data: 28038,
   value: "JACKSON'S,OLD FASHIONED VANILLA WAFERS"
 },
 {
   data: 28039,
   value: "KASHI,TLC,HAPPY TRAIL MIX COOKIES"
 },
 {
   data: 28040,
   value: "KASHI,TLC,OATMEAL DK CHOC COOKIES"
 },
 {
   data: 28041,
   value: "KASHI,TLC,OATMEAL RAISIN FLAX COOKIES"
 },
 {
   data: 28042,
   value: "KASHI,TLC,HONEY SESAME CRACKERS"
 },
 {
   data: 28043,
   value: "KEEBLER,ANIMALS,COOKIES"
 },
 {
   data: 28044,
   value: "KEEBLER,ANIMALS,FRSTD COOKIES"
 },
 {
   data: 28045,
   value: "KEEBLER,ANIMALS,ICED COOKIES"
 },
 {
   data: 28046,
   value: "KEEBLER,ANIMALS,CRACKERS"
 },
 {
   data: 28047,
   value: "KEEBLER,BAKER'S TREASURES,CHOC CHIP COOKIE,SOFT"
 },
 {
   data: 28048,
   value: "KEEBLER,BAKER'S TREASURES,OATMEAL RAISIN COOKIE,SOFT"
 },
 {
   data: 28049,
   value: "KEEBLER,CHS & CHEDDAR SNDWCH CRACKERS"
 },
 {
   data: 28050,
   value: "KEEBLER,CLUB & CHEDDAR SNDWCH CRACKERS"
 },
 {
   data: 28051,
   value: "KEEBLER,CHS ON WHEAT SNDWCH CRACKERS"
 },
 {
   data: 28052,
   value: "KEEBLER,CHIPS DELUXE,CHOC LOVERS COOKIES"
 },
 {
   data: 28053,
   value: "KEEBLER,CHIPS DELUXE,CHOC MALT CHUNK COOKIES"
 },
 {
   data: 28054,
   value: "KEEBLER,CHIPS DELUXE,COCNT COOKIES"
 },
 {
   data: 28055,
   value: "KEEBLER,CHIPS DELUXE,DK CHOC CHUNK COOKIES"
 },
 {
   data: 28056,
   value: "KEEBLER,CHIPS DELUXE,MINI CHOC CHIP COOKIES"
 },
 {
   data: 28057,
   value: "KEEBLER,CHIPS DELUXE,OATMEAL CHOC CHIP COOKIES"
 },
 {
   data: 28058,
   value: "KEEBLER,CHIPS DELUXE,ORIGINAL CHOC CHIP COOKIES"
 },
 {
   data: 28059,
   value: "KEEBLER,CHIPS DELUXE,PNUT BUTTER CUPS COOKIES"
 },
 {
   data: 28060,
   value: "KEEBLER,CHIPS DELUXE,RAINBOW CHOC CHIP COOKIES"
 },
 {
   data: 28061,
   value: "KEEBLER,CHIPS DELUXE,RAINBOW CHOC CHIP COOKIES,BITE SIZE"
 },
 {
   data: 28062,
   value: "KEEBLER,CHIPS DELUXE,SOFT 'N CHEWY CHOC CHIP COOKIES"
 },
 {
   data: 28063,
   value: "KEEBLER,CLUB,BUTTERY GARLIC CRACKERS"
 },
 {
   data: 28064,
   value: "KEEBLER,CLUB,DASH OF SALT CRACKERS"
 },
 {
   data: 28065,
   value: "KEEBLER,CLUB,MINIS ORIGINAL CRACKERS"
 },
 {
   data: 28066,
   value: "KEEBLER,CLUB,MINIS MULTIGRAIN CRACKERS"
 },
 {
   data: 28067,
   value: "KEEBLER,CLUB,MULTIGRAIN CRACKERS"
 },
 {
   data: 28068,
   value: "KEEBLER,CLUB,ORIGINAL CRACKERS"
 },
 {
   data: 28069,
   value: "KEEBLER,CLUB,RED FAT CRACKERS"
 },
 {
   data: 28070,
   value: "KEEBLER,CLUB CRACKERS,SNACK STKS,HONEY WHEAT"
 },
 {
   data: 28071,
   value: "KEEBLER,CLUB CRACKERS,SNACK STKS,ORIGINAL"
 },
 {
   data: 28072,
   value: "KEEBLER,COUNTRY STYLE OATMEAL COOKIES W/ RAISINS"
 },
 {
   data: 28073,
   value: "KEEBLER,DANISH WEDDING COOKIES"
 },
 {
   data: 28074,
   value: "KEEBLER,E.L. FUDGE,BUTTER FLAV COOKIES"
 },
 {
   data: 28075,
   value: "KEEBLER,E.L. FUDGE,DOUBLE STUFFED COOKIES"
 },
 {
   data: 28076,
   value: "KEEBLER,FUDGE SHOPPE,CHEESECAKE MIDDLES,DK CHOC"
 },
 {
   data: 28077,
   value: "KEEBLER,FUDGE SHOPPE,CHEESECAKE MIDDLES,ORIGINAL GRAHAM COOK"
 },
 {
   data: 28078,
   value: "KEEBLER,FUDGE SHOPPE,MINT CREME MIDDLES,CHOC GRAHAM COOKIES"
 },
 {
   data: 28079,
   value: "KEEBLER,FUDGE SHOPPE,COCNT DREAMS COOKIES"
 },
 {
   data: 28080,
   value: "KEEBLER,FUDGE SHOPPE,DELUXE GRAHAMS COOKIES"
 },
 {
   data: 28081,
   value: "KEEBLER,FUDGE SHOPPE,CARAMEL FILLED COOKIES"
 },
 {
   data: 28082,
   value: "KEEBLER,FUDGE SHOPPE,PNUT CREME FILLED COOKIES"
 },
 {
   data: 28083,
   value: "KEEBLER,FUDGE SHOPPE,TRIPLE FUDGE FILLED COOKIES"
 },
 {
   data: 28084,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE-DIPPED ICE CRM CUPS"
 },
 {
   data: 28085,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE GRAHAMS,1/2 DIPPED,RED FAT"
 },
 {
   data: 28086,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STKS"
 },
 {
   data: 28087,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,DK CHOC"
 },
 {
   data: 28088,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,HOLIDAY/SPIDERMAN"
 },
 {
   data: 28089,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,MINI"
 },
 {
   data: 28091,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,OATMEAL"
 },
 {
   data: 28092,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,ORIGINAL"
 },
 {
   data: 28093,
   value: "KEEBLER,FUDGE SHOPPE,GRASSHOPPER COOKIES,FUDGE MINT"
 },
 {
   data: 28094,
   value: "KEEBLER,FUDGE SHOPPE,JUMBO FUDGE STKS,VANILLA"
 },
 {
   data: 28095,
   value: "KEEBLER,FUDGE SHOPPE,JUMBO FUDGE STKS,PNUT BUTTER"
 },
 {
   data: 28096,
   value: "KEEBLER,FUDGE SHOPPE,MAGIC MIDDLES FUDGE FILLED COOKIES,ORIG"
 },
 {
   data: 28097,
   value: "KEEBLER,FUDGE SHOPPE,MERRY MINT PATTIES,HOLIDAY"
 },
 {
   data: 28098,
   value: "KEEBLER,FUDGE SHOPPE,MAGIC MIDDLES FUDGE FILLED COOKIES,PNUT"
 },
 {
   data: 28099,
   value: "KEEBLER,FUDGE SHOPPE,JUMBO FUDGE STKS,MINT"
 },
 {
   data: 28100,
   value: "KEEBLER,FUDGE SHOPPE,FUDGE STKS,PNUT BUTTER"
 },
 {
   data: 28101,
   value: "KEEBLER,CINN TOAST GRAHAMS"
 },
 {
   data: 28102,
   value: "KEEBLER,GRIPZ,CHIPS DELUXE,CHOC CHIP COOKIES,BITE-SIZE"
 },
 {
   data: 28103,
   value: "KEEBLER,GRIPZ,CHIPS DELUXE,RAINBOW CHOC CHIP COOKIES,BITE-SI"
 },
 {
   data: 28104,
   value: "KEEBLER,GRIPZ,CHOC CHIP GRAHAMS,BITE-SIZE"
 },
 {
   data: 28105,
   value: "KEEBLER,GRIPZ,CINN GRAHAMS,BITE-SIZE"
 },
 {
   data: 28106,
   value: "KEEBLER,ALMOND CRESCENTS COOKIES,HOLIDAY"
 },
 {
   data: 28107,
   value: "KEEBLER,GINGERBREAD MEN COOKIES,HOLIDAY"
 },
 {
   data: 28108,
   value: "KEEBLER,HOLIDAY JINGLES COOKIES"
 },
 {
   data: 28109,
   value: "KEEBLER,ICED OATMEAL COOKIES"
 },
 {
   data: 28110,
   value: "KEEBLER,TOAST & PNUT BUTTER SNDWCH CRACKERS"
 },
 {
   data: 28111,
   value: "KEEBLER,READY CRUST,CHOC PIE CRUST"
 },
 {
   data: 28112,
   value: "KEEBLER,READY CRUST,SHORTBREAD PIE CRUST"
 },
 {
   data: 28113,
   value: "KEEBLER,100 CAL RIGHT BITES,CHIPS DELUXE,CHOC CHIP COOKIES"
 },
 {
   data: 28114,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,DK CHOC FUDGE STRIP"
 },
 {
   data: 28115,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,FUDGE COVERED PRETZ"
 },
 {
   data: 28116,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,COOKIES 'N CREME"
 },
 {
   data: 28117,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI BROWNIES"
 },
 {
   data: 28118,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI FUDGE GRAHAMS"
 },
 {
   data: 28119,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI FUDGE STRIPES"
 },
 {
   data: 28120,
   value: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI MINTS GRASSHOP"
 },
 {
   data: 28121,
   value: "KEEBLER,100 CAL RIGHT BITES,SANDIES SHORTBREAD COOKIES,FUDGE"
 },
 {
   data: 28122,
   value: "KEEBLER,100 CAL RIGHT BITES,SANDIES SHORTBREAD COOKIES"
 },
 {
   data: 28123,
   value: "KEEBLER,100 CAL RIGHT BITES,WHITE FUDGE DIPPED PRETZELS"
 },
 {
   data: 28124,
   value: "KEEBLER,SANDIES,CASHEW SHORTBREAD COOKIES"
 },
 {
   data: 28125,
   value: "KEEBLER,SANDIES,CHOC CHIP & PECAN SHORTBREAD COOKIES"
 },
 {
   data: 28126,
   value: "KEEBLER,SANDIES,DK CHOC ALMOND SHORTBREAD COOKIES"
 },
 {
   data: 28127,
   value: "KEEBLER,SANDIES,PECAN SHORTBREAD COOKIES"
 },
 {
   data: 28128,
   value: "KEEBLER,SANDIES,PECAN SHORTBREAD COOKIES,BITE SIZE"
 },
 {
   data: 28129,
   value: "KEEBLER,SANDIES,PECAN SHORTBREAD COOKIES,RED FAT"
 },
 {
   data: 28130,
   value: "KEEBLER,SOFT BATCH,CHOC CHIP COOKIES"
 },
 {
   data: 28131,
   value: "KEEBLER,SWT CREMES COOKIES"
 },
 {
   data: 28132,
   value: "KEEBLER,TSTD COCNT COOKIES"
 },
 {
   data: 28133,
   value: "KEEBLER,TOASTEDS,BUTTERCRISPS CRACKERS"
 },
 {
   data: 28134,
   value: "KEEBLER,TOASTEDS,PARTY PK CRACKER ASSORTMENT"
 },
 {
   data: 28135,
   value: "KEEBLER,TOASTEDS,ONION CRACKERS"
 },
 {
   data: 28136,
   value: "KEEBLER,TOASTEDS,SESAME CRACKERS"
 },
 {
   data: 28137,
   value: "KEEBLER,TOASTEDS,WHEAT CRACKERS"
 },
 {
   data: 28138,
   value: "KEEBLER,TOWN HOUSE,BISTRO MULTIGRAIN CRACKERS"
 },
 {
   data: 28139,
   value: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,CHS"
 },
 {
   data: 28140,
   value: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,GARLIC HERB"
 },
 {
   data: 28141,
   value: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,ORIGINAL"
 },
 {
   data: 28142,
   value: "KEEBLER,TOWN HOUSE,ORIGINAL CRACKERS"
 },
 {
   data: 28143,
   value: "KEEBLER,TOWN HOUSE,RED FAT CRACKERS"
 },
 {
   data: 28144,
   value: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,RED FAT"
 },
 {
   data: 28145,
   value: "KEEBLER,TOWN HOUSE,TOPPERS,GARLIC HERB CRACKERS"
 },
 {
   data: 28146,
   value: "KEEBLER,TOWN HOUSE,TOPPERS,MULTIGRAIN CRACKERS"
 },
 {
   data: 28147,
   value: "KEEBLER,TOWN HOUSE,TOPPERS,ORIGINAL CRACKERS"
 },
 {
   data: 28148,
   value: "KEEBLER,TOWN HOUSE,WHEAT CRACKERS"
 },
 {
   data: 28149,
   value: "KEEBLER,TOWN HOUSE,FLATBREAD CRISPS,SEA SALT & OLIVE OIL CRA"
 },
 {
   data: 28150,
   value: "KEEBLER,TRADITIONS,ICED LEMONADE COOKIES"
 },
 {
   data: 28151,
   value: "KEEBLER,TRADITIONS,ICED OATMEAL COOKIES"
 },
 {
   data: 28152,
   value: "KEEBLER,VANILLA WAFERS MINIS,RAINBOW"
 },
 {
   data: 28153,
   value: "KEEBLER,VIENNA FINGERS W/ CREME FILLING"
 },
 {
   data: 28154,
   value: "KEEBLER,VIENNA FINGERS W/ CREME FILLING,RED FAT"
 },
 {
   data: 28155,
   value: "KEEBLER,WAFFLE BOWLS"
 },
 {
   data: 28156,
   value: "KEEBLER,WAFFLE CONES"
 },
 {
   data: 28157,
   value: "KEEBLER,WHEATABLES,HONEY WHEAT CRACKERS"
 },
 {
   data: 28158,
   value: "KEEBLER,WHEATABLES,NUT CRISP CRACKERS,RSTD ALMOND"
 },
 {
   data: 28159,
   value: "KEEBLER,WHEATABLES,NUT CRISP CRACKERS,TSTD PECAN"
 },
 {
   data: 28160,
   value: "KELLOGG'S,ALL-BRAN,GARLIC & HERB CRACKERS"
 },
 {
   data: 28161,
   value: "KELLOGG'S,ALL-BRAN,MULTIGRAIN CRACKERS"
 },
 {
   data: 28162,
   value: "KELLOGG'S,CORN FLAKES CRUMBS"
 },
 {
   data: 28163,
   value: "KELLOGG'S,POP-TARTS,FRSTD APPL STRUDEL TOASTER PASTRIES"
 },
 {
   data: 28164,
   value: "KELLOGG'S,POP-TARTS,FRSTD BLUEBERRY MUFFIN TOASTER PASTRIES"
 },
 {
   data: 28165,
   value: "KELLOGG'S,POP-TARTS,CHOC CHIP COOKIE DOUGH TOASTER PASTRIES"
 },
 {
   data: 28167,
   value: "KELLOGG'S,POP-TARTS,FRSTD CINN ROLL TOASTER PASTRIES"
 },
 {
   data: 28168,
   value: "KELLOGG'S,POP-TARTS,FRSTD CONFETTI CAKE TOASTER PASTRIES"
 },
 {
   data: 28169,
   value: "KELLOGG'S,POP-TARTS,FRSTD COOKIES & CREME TOASTER PASTRIES"
 },
 {
   data: 28170,
   value: "KELLOGG'S,POP-TARTS,FRSTD ORANGE CRM TOASTER PASTRIES"
 },
 {
   data: 28171,
   value: "KELLOGG'S,POP-TARTS,FRSTD PUMPKIN PIE TOASTER PASTRIES"
 },
 {
   data: 28172,
   value: "KELLOGG'S,POP-TARTS,FRSTD SPRING BERRY TOASTER PASTRIES"
 },
 {
   data: 28173,
   value: "KELLOGG'S,POP-TARTS,FRSTD SUGAR COOKIE TOASTER PASTRIES"
 },
 {
   data: 28174,
   value: "KELLOGG'S,POP-TARTS,FRSTD WAFFLE CONE TOASTER PASTRIES"
 },
 {
   data: 28175,
   value: "KELLOGG'S,POP-TARTS,FRSTD WILD FRUIT FUSION TOASTER PASTRIES"
 },
 {
   data: 28176,
   value: "KELLOGG'S,POP-TARTS,FRSTD WILD GRAPE TOASTER PASTRIES"
 },
 {
   data: 28177,
   value: "KELLOGG'S,POP-TARTS,FRSTD WILD STRAWBERRY TOASTER PASTRIES"
 },
 {
   data: 28178,
   value: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD HOT FUDGE SUNDAE TO"
 },
 {
   data: 28179,
   value: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD ICE CREME SNDWCH TO"
 },
 {
   data: 28180,
   value: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD RAINBOW CHIP TOASTE"
 },
 {
   data: 28181,
   value: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD STRAWBERRY MILKSHAK"
 },
 {
   data: 28182,
   value: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD VANILLA MILKSHAKE T"
 },
 {
   data: 28183,
   value: "KELLOGG'S,POP-TARTS MINI CRISPS,CINN BROWN SUGAR BKD BITES"
 },
 {
   data: 28184,
   value: "KELLOGG'S,POP-TARTS MINI CRISPS,FRSTD CHOC BKD BITES"
 },
 {
   data: 28185,
   value: "KELLOGG'S,POP-TARTS MINI CRISPS,FRSTD STRAWBERRY BKD BITES"
 },
 {
   data: 28186,
   value: "KELLOGG'S,SPL K,CRACKER CHIPS,CHEDDAR"
 },
 {
   data: 28187,
   value: "KELLOGG'S,SPL K,CRACKER CHIPS,SEA SALT"
 },
 {
   data: 28188,
   value: "KELLOGG'S,SPL K,CRACKER CHIPS,SOUR CRM & ONION"
 },
 {
   data: 28189,
   value: "KELLOGG'S,SPL K,CRACKER CHIPS,SOUTHWEST RANCH"
 },
 {
   data: 28190,
   value: "KELLOGG'S,SPL K,MULTIGRAIN CRACKERS"
 },
 {
   data: 28191,
   value: "KELLOGG'S,SPL K,SAVORY HERB CRACKERS"
 },
 {
   data: 28192,
   value: "KELLOGG'S,POP-TARTS,GINGERBREAD TOASTER PASTRIES"
 },
 {
   data: 28193,
   value: "KELLOGG'S,POP-TARTS,YUM-AZING VANILLA MILKSHAKE TOASTER PAST"
 },
 {
   data: 28194,
   value: "MOTHER'S,4TH OF JULY CIRCUS ANIMAL COOKIES"
 },
 {
   data: 28195,
   value: "MOTHER'S,CHOC CHIP COOKIES"
 },
 {
   data: 28196,
   value: "MOTHER'S,CIRCUS ANIMAL COOKIES"
 },
 {
   data: 28197,
   value: "MOTHER'S,COCNT COCADAS COOKIES"
 },
 {
   data: 28198,
   value: "MOTHER'S,DOUBLE FUDGE CREME SNDWCH COOKIES"
 },
 {
   data: 28199,
   value: "MOTHER'S,ENG TEA SNDWCH COOKIES"
 },
 {
   data: 28200,
   value: "MOTHER'S,HALLOWEEN CIRCUS ANIMALS COOKIES"
 },
 {
   data: 28201,
   value: "MOTHER'S,HOLIDAY CIRCUS ANIMAL COOKIES"
 },
 {
   data: 28202,
   value: "MOTHER'S,ICED LEMONADE COOKIES"
 },
 {
   data: 28203,
   value: "MOTHER'S,ICED OATMEAL COOKIES"
 },
 {
   data: 28204,
   value: "MOTHER'S,JUNGLE ANIMAL COOKIES"
 },
 {
   data: 28205,
   value: "MOTHER'S,MACAROON COOKIES"
 },
 {
   data: 28206,
   value: "MOTHER'S,OLD FASHIONED CHOC CHIP COOKIES"
 },
 {
   data: 28207,
   value: "MOTHER'S,OLD FASHIONED ICED OATMEAL COOKIES"
 },
 {
   data: 28208,
   value: "MOTHER'S,PNUT BUTTER GAUCHOS COOKIES"
 },
 {
   data: 28209,
   value: "MOTHER'S,TAFFY SNDWCH COOKIES"
 },
 {
   data: 28210,
   value: "MURRAY,SUGAR FREE,VANILLA SUGAR WAFER"
 },
 {
   data: 28211,
   value: "MURRAY,CHOCOLATEY CHIP THINS COOKIES"
 },
 {
   data: 28212,
   value: "MURRAY,COOKIE JAR CLASSICS,COCNT BARS COOKIES"
 },
 {
   data: 28213,
   value: "MURRAY,DUPLEX CREME SNDWCH COOKIES"
 },
 {
   data: 28214,
   value: "MURRAY,LEMON CREME SNDWCH COOKIES"
 },
 {
   data: 28215,
   value: "MURRAY,JACKS VANILLA WAFERS"
 },
 {
   data: 28216,
   value: "MURRAY,OLD FASHIONED ICED OATMEAL COOKIES"
 },
 {
   data: 28217,
   value: "MURRAY,SOUTHERN KITCHEN,CHOC CHIP COOKIES"
 },
 {
   data: 28218,
   value: "MURRAY,SOUTHERN KITCHEN,COCNT COOKIES"
 },
 {
   data: 28219,
   value: "MURRAY,SOUTHERN KITCHEN,ICED OATMEAL COOKIES"
 },
 {
   data: 28220,
   value: "MURRAY,SUGAR FREE,CHOC BITES COOKIES"
 },
 {
   data: 28221,
   value: "MURRAY,SUGAR FREE,CHOC CHIP & PECAN COOKIES"
 },
 {
   data: 28222,
   value: "MURRAY,SUGAR FREE,FUDGE DIPPED GRAHAMS"
 },
 {
   data: 28223,
   value: "MURRAY,SUGAR FREE,FUDGE DIPPED MINT COOKIES"
 },
 {
   data: 28224,
   value: "MURRAY,SUGAR FREE,FUDGE DIPPED WAFERS"
 },
 {
   data: 28225,
   value: "MURRAY,SUGAR FREE,PNUT BUTTER COOKIES"
 },
 {
   data: 28226,
   value: "MURRAY,SUGAR FREE,PECAN SHORTBREAD COOKIES"
 },
 {
   data: 28227,
   value: "MURRAY,SUGAR FREE,LEMON CREME SNDWCH COOKIES"
 },
 {
   data: 28228,
   value: "MURRAY,SUGAR FREE,VANILLA CREME SNDWCH COOKIES"
 },
 {
   data: 28229,
   value: "MURRAY,SUGAR FREE,SHORTBREAD COOKIES"
 },
 {
   data: 28230,
   value: "MURRAY,SUGAR FREE,SHORTBREAD BITES"
 },
 {
   data: 28231,
   value: "MURRAY,SUGAR FREE,VANILLA WAFER"
 },
 {
   data: 28232,
   value: "MURRAY,VANILLA SUGAR WAFER"
 },
 {
   data: 28233,
   value: "MURRAY,VANILLA WAFER"
 },
 {
   data: 28234,
   value: "SUNSHINE,CHEEZ-IT,ASIAGO CRACKERS"
 },
 {
   data: 28235,
   value: "SUNSHINE,CHEEZ-IT,BABY SWISS CRACKERS"
 },
 {
   data: 28236,
   value: "SUNSHINE,CHEEZ-IT,BIG CRACKERS"
 },
 {
   data: 28237,
   value: "SUNSHINE,CHEEZ-IT,CHEDDAR JACK CRACKERS"
 },
 {
   data: 28238,
   value: "SUNSHINE,CHEEZ-IT,COLBY CRACKERS"
 },
 {
   data: 28239,
   value: "SUNSHINE,CHEEZ-IT,DUOZ SHARP CHEDDAR PARMESAN CRACKERS"
 },
 {
   data: 28240,
   value: "SUNSHINE,CHEEZ-IT,DUOZ SMOKED CHEDDAR MONTEREY JACK CRACKERS"
 },
 {
   data: 28241,
   value: "SUNSHINE,GRIPZ,CHEEZ-IT CRACKERS"
 },
 {
   data: 28242,
   value: "SUNSHINE,GRIPZ,CHEEZ-IT MIXX & CHEESY PIZZA CRACKERS"
 },
 {
   data: 28243,
   value: "SUNSHINE,CHEEZ-IT,HOT & SPICY CRACKERS"
 },
 {
   data: 28244,
   value: "SUNSHINE,CHEEZ-IT,ITALIAN FOUR CHS CRACKERS"
 },
 {
   data: 28245,
   value: "SUNSHINE,CHEEZ-IT,CRACKERS (MADE W/ WHL GRAIN)"
 },
 {
   data: 28246,
   value: "SUNSHINE,CHEEZ-IT,MOZZARELLA CRACKERS"
 },
 {
   data: 28247,
   value: "SUNSHINE,CHEEZ-IT,PARMESAN GARLIC CRACKERS"
 },
 {
   data: 28248,
   value: "SUNSHINE,CHEEZ-IT,PEPPER JACK CRACKERS"
 },
 {
   data: 28249,
   value: "SUNSHINE,CHEEZ-IT,WHITE CHEDDAR,RED FAT CRACKERS"
 },
 {
   data: 28250,
   value: "SUNSHINE,CHEEZ-IT,100 CAL RIGHT BITES,EX CHEESY PARTY MIX"
 },
 {
   data: 28251,
   value: "SUNSHINE,CHEEZ-IT,100 CAL RIGHT BITES,RED FAT"
 },
 {
   data: 28252,
   value: "SUNSHINE,CHEEZ-IT,SCRABBLE JR. CRACKERS"
 },
 {
   data: 28253,
   value: "SUNSHINE,CHEEZ-IT,SNACK MIX"
 },
 {
   data: 28254,
   value: "SUNSHINE,CHEEZ-IT,SNACK MIX,WHITE CHEDDAR"
 },
 {
   data: 28255,
   value: "KEEBLER,ZESTA,EXPORT SODAS CRACKERS"
 },
 {
   data: 28256,
   value: "AUSTIN,PNUT BUTTER ON CHS CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 28257,
   value: "AUSTIN,PNUT BUTTER ON TOASTY CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 28258,
   value: "AUSTIN,CHEDDAR CHS ON WAFER CRACKERS,SANDWICH-TYPE"
 },
 {
   data: 28259,
   value: "KELLOGG'S,EGGO MINIS,PANCAKES,BTTRMLK"
 },
 {
   data: 28260,
   value: "KELLOGG'S,EGGO,WAFFLES,CHOC CHIP"
 },
 {
   data: 28261,
   value: "FAMOUS AMOS,CHOC SNDWCH CREME COOKIES"
 },
 {
   data: 28262,
   value: "FAMOUS AMOS,VANILLA SNDWCH CREME COOKIES"
 },
 {
   data: 28263,
   value: "KEEBLER,GRAHAMS,CINN CRISP"
 },
 {
   data: 28264,
   value: "KEEBLER,OATMEAL COOKIES"
 },
 {
   data: 28265,
   value: "KEEBLER,CHS & PNUT BUTTER SNDWCH CRACKERS"
 },
 {
   data: 28266,
   value: "KEEBLER,READY CRUST,GRAHAM PIE CRUST (10\"),RED FAT"
 },
 {
   data: 28267,
   value: "KEEBLER,SANDIES,SIMPLY SHORTBREAD COOKIES"
 },
 {
   data: 28268,
   value: "KEEBLER,SUGAR CONES"
 },
 {
   data: 28269,
   value: "MOTHER'S,OLD FASHIONED OATMEAL COOKIES"
 },
 {
   data: 28270,
   value: "MOTHER'S,VANILLA SNDWCH COOKIES"
 },
 {
   data: 28271,
   value: "MURRAY,COOKIE JAR CLASSICS,BUTTER COOKIES"
 },
 {
   data: 28272,
   value: "MURRAY,CHOC CREME SNDWCH COOKIES"
 },
 {
   data: 28273,
   value: "MURRAY,VANILLA CREME SNDWCH COOKIES"
 },
 {
   data: 28274,
   value: "MURRAY,HONEY GRAHAM"
 },
 {
   data: 28275,
   value: "MURRAY,OLD FASHIONED GINGERSNAPS COOKIES"
 },
 {
   data: 28276,
   value: "MURRAY,SOUTHERN KITCHEN,OATMEAL COOKIES"
 },
 {
   data: 28277,
   value: "MURRAY,SUGAR FREE,CHOC CHIP COOKIES"
 },
 {
   data: 28278,
   value: "MURRAY,SUGAR FREE,OATMEAL COOKIES"
 },
 {
   data: 28279,
   value: "MURRAY,SUGAR FREE,CHOC CREME SNDWCH COOKIES"
 },
 {
   data: 28280,
   value: "SUNSHINE,CHEEZ-IT,ORIGINAL CRACKERS"
 },
 {
   data: 28281,
   value: "SUNSHINE,CHEEZ-IT,RED FAT CRACKERS"
 },
 {
   data: 28282,
   value: "SUNSHINE,KRISPY,SOUP & OYSTER CRACKERS (LARGE)"
 },
 {
   data: 28283,
   value: "KEEBLER,ZESTA,SALTINES,ORIGINAL"
 },
 {
   data: 28284,
   value: "KEEBLER,ZESTA,SALTINES W/ WHL WHEAT"
 },
 {
   data: 31001,
   value: "CAMPBELL'S,TOMATO JUC"
 },
 {
   data: 31002,
   value: "CAMPBELL'S, TOMATO JUC,LO NA"
 },
 {
   data: 31005,
   value: "V8 VEG JUC,ORGANIC V8"
 },
 {
   data: 31006,
   value: "CAMPBELL'S,ORGANIC TOMATO JUC"
 },
 {
   data: 31007,
   value: "HEALTHY REQUEST TOMATO JUC"
 },
 {
   data: 31008,
   value: "CAMPBELL'S V8 100% VEG JUC"
 },
 {
   data: 31010,
   value: "V8 VEG JUC,ESSENTIAL ANTIOXIDANTS V8"
 },
 {
   data: 31011,
   value: "V8 VEG JUC,CA ENR V8"
 },
 {
   data: 31012,
   value: "V8 VEG JUC,LO NA V8"
 },
 {
   data: 31013,
   value: "V8 VEG JUC,SPICY HOT V8"
 },
 {
   data: 31014,
   value: "PACE,JALAPENOS NACHO SLICED PEPPERS"
 },
 {
   data: 31015,
   value: "PACE,DICED GRN CHILIES"
 },
 {
   data: 31016,
   value: "V8 60% VEG JUC,V8 V-LITE"
 },
 {
   data: 31017,
   value: "V8 VEG JUC,LO NA SPICY HOT"
 },
 {
   data: 31018,
   value: "V8 VEG JUC,HI FIBER V8"
 },
 {
   data: 31019,
   value: "SEAWEED,CANADIAN CULTIVATED EMI-TSUNOMATA,DRY"
 },
 {
   data: 31020,
   value: "SEAWEED,CANADIAN CULTIVATED EMI-TSUNOMATA,REHYDRATED"
 },
 {
   data: 32000,
   value: "RICE,BF FLAVOR,UNPREP"
 },
 {
   data: 32001,
   value: "RICE,BF FLAVOR,PREP W/ 80% MARGARINE"
 },
 {
   data: 32002,
   value: "RICE,RICE PILAF FLAVOR,UNPREP"
 },
 {
   data: 32003,
   value: "RICE,RICE PILAF FLAVOR,PREP W/ 80% MARGARINE"
 },
 {
   data: 32004,
   value: "MACARONI & CHS,BOX MIX W/ CHS SAU,UNPREP"
 },
 {
   data: 32005,
   value: "MACARONI & CHS,BOX MIX W/ CHS SAU,PREP"
 },
 {
   data: 35001,
   value: "AGUTUK,FISH/BERRY W/ SEAL OIL (ICE CREAM) (ALASKA NATIVE)"
 },
 {
   data: 35003,
   value: "AGUTUK,MEAT-CARIBOU (ALASKAN ICE CREAM) (ALASKA NATIVE)"
 },
 {
   data: 35004,
   value: "ASCIDIANS (TUNUGHNAK) (ALASKA NATIVE)"
 },
 {
   data: 35007,
   value: "BEAR,BLACK,MEAT (ALASKA NATIVE)"
 },
 {
   data: 35008,
   value: "BEAR,POLAR,MEAT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35009,
   value: "WHALE,BELUGA,MEAT,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35010,
   value: "WHALE,BELUGA,EYES (ALASKA NATIVE)"
 },
 {
   data: 35011,
   value: "Whale, beluga, meat, raw (Alaska Native)"
 },
 {
   data: 35012,
   value: "WHALE,BELUGA,FLIPPER,RAW (ALASKA NATIVE)"
 },
 {
   data: 35013,
   value: "WHALE,BELUGA,LIVER,RAW (ALASKA NATIVE)"
 },
 {
   data: 35014,
   value: "OIL,BELUGA,WHALE (ALASKA NATIVE)"
 },
 {
   data: 35015,
   value: "BLACKBERRIES,WILD,RAW (ALASKA NATIVE)"
 },
 {
   data: 35016,
   value: "FISH,BLACKFISH,WHL (ALASKA NATIVE)"
 },
 {
   data: 35017,
   value: "BLUEBERRIES,WILD,FRZ (ALASKA NATIVE)"
 },
 {
   data: 35021,
   value: "CARIBOU,BONE MARROW,RAW (ALASKA NATIVE)"
 },
 {
   data: 35022,
   value: "CARIBOU,EYE,RAW (ALASKA NATIVE)"
 },
 {
   data: 35023,
   value: "CARIBOU,LIVER,RAW (ALASKA NATIVE)"
 },
 {
   data: 35024,
   value: "STEW/SOUP,CARIBOU (ALASKA NATIVE)"
 },
 {
   data: 35025,
   value: "CARIBOU,TONGUE,RAW (ALASKA NATIVE)"
 },
 {
   data: 35026,
   value: "CHITON,LEATHERY,GUMBOOTS (ALASKA NATIVE)"
 },
 {
   data: 35027,
   value: "CLOUDBERRIES,RAW (ALASKA NATIVE)"
 },
 {
   data: 35028,
   value: "COCKLES,RAW (ALASKA NATIVE)"
 },
 {
   data: 35029,
   value: "CRANBERRIES,WILD,BUSH,RAW (ALASKA NATIVE)"
 },
 {
   data: 35030,
   value: "CRANBERRY,LO BUSH OR LINGENBERRY,RAW (ALASKA NATIVE)"
 },
 {
   data: 35034,
   value: "FISH,DEVILFISH,MEAT (ALASKA NATIVE)"
 },
 {
   data: 35038,
   value: "FIREWEED,YOUNG LEAVES,RAW (ALASKA NATIVE)"
 },
 {
   data: 35039,
   value: "FISH,HERRING EGGS ON GIANT KELP,PACIFIC (ALASKA NATIVE)"
 },
 {
   data: 35040,
   value: "FISH,HERRING EGGS,PACIFIC,DRY (ALASKA NATIVE)"
 },
 {
   data: 35041,
   value: "FISH,HERRING EGGS,PACIFIC,PLN (ALASKA NATIVE)"
 },
 {
   data: 35042,
   value: "FISH,HERRING,PACIFIC,FLSH,AIR-DRIED,PACK OIL (ALASKA NATIVE)"
 },
 {
   data: 35043,
   value: "HUCKLEBERRIES,RAW (ALASKA NATIVE)"
 },
 {
   data: 35046,
   value: "FISH,LINGCOD,MEAT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35047,
   value: "FISH,LINGCOD,LIVER (ALASKA NATIVE)"
 },
 {
   data: 35048,
   value: "STEW,MOOSE (ALASKA NATIVE)"
 },
 {
   data: 35049,
   value: "MOOSE,MEAT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35050,
   value: "MASHU ROOTS,RAW (ALASKA NATIVE)"
 },
 {
   data: 35051,
   value: "MOOSE,LIVER,BRSD (ALASKA NATIVE)"
 },
 {
   data: 35052,
   value: "MOUSE NUTS,ROOTS (ALASKA NATIVE)"
 },
 {
   data: 35053,
   value: "MOUSE NUTS,SEEDLINGS (ALASKA NATIVE)"
 },
 {
   data: 35054,
   value: "OCTOPUS (ALASKA NATIVE)"
 },
 {
   data: 35055,
   value: "SEAL,BEARDED (OOGRUK),MEAT,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35056,
   value: "SEAL,BEARDED (OOGRUK),MEAT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35057,
   value: "OIL,BEARDED SEAL (OOGRUK) (ALASKA NATIVE)"
 },
 {
   data: 35058,
   value: "OOPAH (TUNICATE),WHL ANIMAL (ALASKA NATIVE)"
 },
 {
   data: 35059,
   value: "OWL,HORNED,FLESH,RAW (ALASKA NATIVE)"
 },
 {
   data: 35060,
   value: "FISH,PIKE,NORTHERN,LIVER (ALASKA NATIVE)"
 },
 {
   data: 35063,
   value: "RHUBARB,WILD,LEAVES (ALASKA NATIVE)"
 },
 {
   data: 35064,
   value: "FISH,SALMON,TIPNUK,FERMENTED (ALASKA NATIVE)"
 },
 {
   data: 35065,
   value: "FISH,SALMON,KING,CHINOOK,KIPPERED,CND (ALASKA NATIVE)"
 },
 {
   data: 35066,
   value: "FISH,SALMON,KING,CHINOOK,SMOKED & CND (ALASKA NATIVE)"
 },
 {
   data: 35067,
   value: "FISH,SALMON,KING,CHINOOK,SMOKED,BRINED (ALASKA NATIVE)"
 },
 {
   data: 35068,
   value: "FISH,SALMON,KING,CHINOOK,LIVER (ALASKA NATIVE)"
 },
 {
   data: 35069,
   value: "DUCK,SCOTER,WHITE-WINGED,MEAT (ALASKA NATIVE)"
 },
 {
   data: 35070,
   value: "SEA CUCUMBER,YANE (ALASKA NATIVE)"
 },
 {
   data: 35071,
   value: "SEAL,RINGED,MEAT (ALASKA NATIVE)"
 },
 {
   data: 35072,
   value: "SEAL,RINGED,LIVER (ALASKA NATIVE)"
 },
 {
   data: 35073,
   value: "SOUP,FISH,HOMEMADE (ALASKA NATIVE)"
 },
 {
   data: 35074,
   value: "SOURDOCK,YOUNG LEAVES (ALASKA NATIVE)"
 },
 {
   data: 35075,
   value: "SQUIRREL,GROUND,MEAT (ALASKA NATIVE)"
 },
 {
   data: 35078,
   value: "TEA,TUNDRA,HERB & LABORADOR COMBINATION (ALASKA NATIVE)"
 },
 {
   data: 35079,
   value: "WALRUS,MEAT,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35080,
   value: "DEER (VENISON),SITKA,RAW (ALASKA NATIVE)"
 },
 {
   data: 35081,
   value: "WALRUS,MEAT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35082,
   value: "WALRUS,MEAT & SUBCUTANEOUS FAT RAW (ALASKA NATIVE)"
 },
 {
   data: 35083,
   value: "WALRUS,LIVER,RAW (ALASKA NATIVE)"
 },
 {
   data: 35084,
   value: "OIL,WALRUS (ALASKA NATIVE)"
 },
 {
   data: 35085,
   value: "WHALE,BOWHEAD,SUBCUTANEOUS FAT (BLUBBER) (ALASKA NATIVE)"
 },
 {
   data: 35086,
   value: "WHALE,BOWHEAD,SKN & SUBCUTANEOUS FATMUKTUK(ALASKA NATIVE)"
 },
 {
   data: 35087,
   value: "OIL,WHALE,BOWHEAD (ALASKA NATIVE)"
 },
 {
   data: 35088,
   value: "FISH,WHITEFISH,BROAD,LIVER (ALASKA NATIVE)"
 },
 {
   data: 35089,
   value: "FISH,WHITEFISH,MXD SP,RAW (ALASKA NATIVE)"
 },
 {
   data: 35091,
   value: "FISH,WHITEFISH,HEAD,EYES,CHEEKS & SOFT BONES (ALASKA NATIVE)"
 },
 {
   data: 35092,
   value: "WILLOW,LEAVES IN OIL (ALASKA NATIVE)"
 },
 {
   data: 35093,
   value: "WILLOW,YOUNG LEAVES,CHOPD (ALASKA NATIVE)"
 },
 {
   data: 35130,
   value: "MUSH,BLUE CORN W/ ASH (NAVAJO)"
 },
 {
   data: 35131,
   value: "CORNMEAL,BLUE (NAVAJO)"
 },
 {
   data: 35132,
   value: "MELON,BANANA (NAVAJO)"
 },
 {
   data: 35133,
   value: "CHILCHEN (RED BERRY BEVERAGE) (NAVAJO)"
 },
 {
   data: 35134,
   value: "CORN,DRIED (NAVAJO)"
 },
 {
   data: 35135,
   value: "CORN,WHITE,STMD (NAVAJO)"
 },
 {
   data: 35136,
   value: "CORNMEAL,WHITE (NAVAJO)"
 },
 {
   data: 35137,
   value: "CORNMEAL,YEL (NAVAJO)"
 },
 {
   data: 35138,
   value: "SQUASH,INDIAN,RAW (NAVAJO)"
 },
 {
   data: 35139,
   value: "SQUASH,INDIAN,CKD,BLD (NAVAJO)"
 },
 {
   data: 35140,
   value: "BREAD,KNEEL DOWN (NAVAJO)"
 },
 {
   data: 35141,
   value: "MUTTON,CKD,RSTD (NAVAJO)"
 },
 {
   data: 35142,
   value: "FRYBREAD,MADE W/ LARD (NAVAJO)"
 },
 {
   data: 35143,
   value: "TORTILLA,INCL PLN & FROM MUTTON SNDWCH (NAVAJO)"
 },
 {
   data: 35144,
   value: "STEW,DUMPLING W/ MUTTON (NAVAJO)"
 },
 {
   data: 35145,
   value: "STEW,HOMINY W/ MUTTON (NAVAJO)"
 },
 {
   data: 35146,
   value: "STEW,MUTTON,CORN,SQUASH (NAVAJO)"
 },
 {
   data: 35147,
   value: "TAMALES (NAVAJO)"
 },
 {
   data: 35148,
   value: "STEW,STMD CORN (NAVAJO)"
 },
 {
   data: 35149,
   value: "FISH,HALIBUT,RAW,W/ SKN (ALASKA NATIVE)"
 },
 {
   data: 35150,
   value: "FISH,SALMON,COHO (SILVER),RAW (ALASKA NATIVE)"
 },
 {
   data: 35151,
   value: "FISH,SALMON,SOCKEYE (RED),RAW (ALASKA NATIVE)"
 },
 {
   data: 35152,
   value: "FISH,SALMON,CHUM,RAW (ALASKA NATIVE)"
 },
 {
   data: 35153,
   value: "FISH,SALMON,KING (CHINOOK),RAW (ALASKA NATIVE)"
 },
 {
   data: 35154,
   value: "SALMONBERRIES,RAW (ALASKA NATIVE)"
 },
 {
   data: 35155,
   value: "BLUEBERRIES,WILD,RAW (ALASKA NATIVE)"
 },
 {
   data: 35156,
   value: "OIL,SPOTTED SEAL (ALASKA NATIVE)"
 },
 {
   data: 35157,
   value: "FISH,SALMON,RED,CND,BONES REMOVED (ALASKA NATIVE)"
 },
 {
   data: 35158,
   value: "FISH,WHITEFISH,EGGS (ALASKA NATIVE)"
 },
 {
   data: 35160,
   value: "CARIBOU,RUMP MEAT,HALF DRIED (ALASKA NATIVE)"
 },
 {
   data: 35161,
   value: "CARIBOU,SHLDR MEAT,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35162,
   value: "CARIBOU,HIND QUARTER MEAT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35164,
   value: "SEAL,BEARDED (OOGRUK),MEAT,DRIED,IN OIL (ALASKA NATIVE)"
 },
 {
   data: 35165,
   value: "FISH,WHITEFISH,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35166,
   value: "FISH,SALMON,RED,(SOCKEYE),CND,SMOKED (ALASKA NATIVE)"
 },
 {
   data: 35167,
   value: "FISH,SALMON,RED,(SOCKEYE),KIPPERED (ALASKA NATIVE)"
 },
 {
   data: 35168,
   value: "FISH,SALMON,KING,W/ SKN,KIPPERED,(ALASKA NATIVE)"
 },
 {
   data: 35169,
   value: "FISH,SHEEFISH,RAW (ALASKA NATIVE)"
 },
 {
   data: 35170,
   value: "SEAL,BEARDED (OOGRUK),MEAT,LO QUADRANT,RAW (ALASKA NATIVE)"
 },
 {
   data: 35171,
   value: "FISH,SALMON,CHUM,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35172,
   value: "ELK,FREE RANGE,GROUND,CKD PATTIES (SHOSHONE BANNOCK)"
 },
 {
   data: 35173,
   value: "ELK,FREE RANGE,GROUND,RAW (SHOSHONE BANNOCK)"
 },
 {
   data: 35174,
   value: "BUFFALO,FREE RANGE,TOP RND STEAK,RAW (SHOSHONE BANNOCK)"
 },
 {
   data: 35175,
   value: "SEAL,BEARDED (OOGRUK),MEAT,PART DRIED (ALASKA NATIVE)"
 },
 {
   data: 35176,
   value: "BUFFALO,FREE RANGE,TOP RND STEAK,CKD (SHOSHONE BANNOCK)"
 },
 {
   data: 35177,
   value: "ELK,FREE RANGE,RST,EYE OF RND,RAW (SHOSHONE BANNOCK)"
 },
 {
   data: 35178,
   value: "ELK,FREE RANGE,RST,EYE OF RND,CKD (SHOSHONE BANNOCK)"
 },
 {
   data: 35179,
   value: "CHOKECHERRIES,RAW,PITTED (SHOSHONE BANNOCK)"
 },
 {
   data: 35180,
   value: "STEELHEAD TROUT,DRIED,FLESH (SHOSHONE BANNOCK)"
 },
 {
   data: 35181,
   value: "STEELHEAD TROUT,BLD,CND (ALASKA NATIVE)"
 },
 {
   data: 35182,
   value: "ACORN STEW (APACHE)"
 },
 {
   data: 35183,
   value: "CORN,DRIED,YEL (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35184,
   value: "SMELT,DRIED (ALASKA NATIVE)"
 },
 {
   data: 35185,
   value: "FRYBREAD,MADE W/ LARD (APACHE)"
 },
 {
   data: 35186,
   value: "CORNED BF & POTATOES IN TORTILLA (APACHE)"
 },
 {
   data: 35187,
   value: "TENNIS BREAD,PLN (APACHE)"
 },
 {
   data: 35188,
   value: "FISH,HALIBUT,CKD,W/ SKN (ALASKA NATIVE)"
 },
 {
   data: 35190,
   value: "SALMON,RED (SOCKEYE),FILETS W/ SKN,SMOKED (ALASKA NATIVE)"
 },
 {
   data: 35192,
   value: "AGAVE,RAW (SOUTHWEST)"
 },
 {
   data: 35193,
   value: "AGAVE,CKD (SOUTHWEST)"
 },
 {
   data: 35194,
   value: "AGAVE,DRIED (SOUTHWEST)"
 },
 {
   data: 35195,
   value: "CATTAIL,NARROW LEAF SHOOTS (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35196,
   value: "LAMBSQUARTERS,RAW (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35197,
   value: "LAMBSQUARTERS,STMD (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35198,
   value: "PLAINS PRICKLYPEAR,RAW (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35199,
   value: "PLAINS PRICKLYPEAR,BRLD (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35200,
   value: "PRAIRIE TURNIPS,RAW (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35201,
   value: "PRAIRIE TURNIPS,BLD (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35202,
   value: "RASPBERRIES,WILD (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35203,
   value: "ROSE HIPS,WILD (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35204,
   value: "CHOKECHERRIES,RAW,PITTED (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35205,
   value: "STINGING NETTLES,BLANCHED (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35206,
   value: "PLUMS,WILD (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35207,
   value: "PINON NUTS,RSTD (NAVAJO)"
 },
 {
   data: 35211,
   value: "CARIBOU,HIND QUARTER,MEAT,CKD (ALASKA NATIVE)"
 },
 {
   data: 35225,
   value: "AGUTUK,FISH W/ SHORTENING (ALASKAN ICE CREAM) (ALASKA NATIVE"
 },
 {
   data: 35226,
   value: "SEA LION,STELLER,LIVER (ALASKA NATIVE)"
 },
 {
   data: 35227,
   value: "SEA LION,STELLER,KIDNEY (ALASKA NATIVE)"
 },
 {
   data: 35228,
   value: "SEA LION,STELLER,HEART (ALASKA NATIVE)"
 },
 {
   data: 35229,
   value: "SEA LION,STELLER,MEAT (ALASKA NATIVE)"
 },
 {
   data: 35230,
   value: "SEA LION,STELLER,MEAT W/ FAT (ALASKA NATIVE)"
 },
 {
   data: 35231,
   value: "SEA LION,STELLER,FAT (ALASKA NATIVE)"
 },
 {
   data: 35232,
   value: "WOCAS,DRIED SEEDS,OR,YELPONDLILY"
 },
 {
   data: 35233,
   value: "HAZELNUTS,BEAKED (NORTHERN PLAINS INDIANS)"
 },
 {
   data: 35234,
   value: "PIKI BREAD,MADE FROM BLUE CORNMEAL (HOPI)"
 },
 {
   data: 35235,
   value: "WOCAS,TUBER,CKD,OR,YEL POND LILY"
 },
 {
   data: 35236,
   value: "STEW,PINTO BEAN & HOMINY,BADUFSUKI (HOPI)"
 },
 {
   data: 35237,
   value: "TAMALES,MASA & PORK FILLING (HOPI)"
 },
 {
   data: 35238,
   value: "TEA,HERBAL,BREWED,HOHOYSI (HOPI)"
 },
 {
   data: 35239,
   value: "TORTILLA,BLUE CORN,SAKWAVIKAVIKI (HOPI)"
 },
 {
   data: 35240,
   value: "BREAD,BLUE CORN,SOMIVIKI (HOPI)"
 },
 {
   data: 36000,
   value: "APPLEBEE'S,9 OZ HOUSE SIRLOIN STEAK"
 },
 {
   data: 36001,
   value: "APPLEBEE'S,DOUBLE CRUNCH SHRIMP"
 },
 {
   data: 36002,
   value: "APPLEBEE'S,FRENCH FR"
 },
 {
   data: 36003,
   value: "APPLEBEE'S,KRAFT,MACARONI & CHS,FROM KID'S MENU"
 },
 {
   data: 36004,
   value: "APPLEBEE'S,MOZZARELLA STKS"
 },
 {
   data: 36005,
   value: "APPLEBEE'S,CHICK FINGERS,FROM KIDS' MENU"
 },
 {
   data: 36006,
   value: "T.G.I. FRIDAY'S,FRIDAY'S SHRIMP,BREADED"
 },
 {
   data: 36007,
   value: "T.G.I. FRIDAY'S,FRENCH FR"
 },
 {
   data: 36008,
   value: "T.G.I. FRIDAY'S,FRIED MOZZARELLA"
 },
 {
   data: 36009,
   value: "T.G.I. FRIDAY'S,MAC & CHS,FROM KID'S MENU"
 },
 {
   data: 36010,
   value: "T.G.I. FRIDAY'S,CHICK FINGERS,FROM KIDS' MENU"
 },
 {
   data: 36011,
   value: "T.G.I. FRIDAY'S,CLASSIC SIRLOIN STEAK"
 },
 {
   data: 36012,
   value: "RESTAURANT,FAMILY STYLE,FRIED MOZZARELLA STKS"
 },
 {
   data: 36013,
   value: "RESTAURANT,FAMILY STYLE,SIRLOIN STEAK"
 },
 {
   data: 36014,
   value: "RESTAURANT,FAMILY STYLE,FRENCH FR"
 },
 {
   data: 36015,
   value: "RESTAURANT,FAMILY STYLE,CHICK FINGERS,FROM KID'S MENU"
 },
 {
   data: 36016,
   value: "RESTAURANT,FAMILY STYLE,SHRIMP,BREADED & FRIED"
 },
 {
   data: 36017,
   value: "RESTAURANT,FAMILY STYLE,MACARONI & CHS,FROM KIDS' MENU"
 },
 {
   data: 36401,
   value: "RESTAURANT,LATINO,CHICK & RICE,ENTREE,PREP"
 },
 {
   data: 36403,
   value: "RESTAURANT,LATINO,EMPANADAS,BF,PREP"
 },
 {
   data: 36404,
   value: "RESTAURANT,LATINO,ARROZ CON LECHE (RICE PUDDING)"
 },
 {
   data: 36405,
   value: "RESTAURANT,LATINO,ARROZ CON FRIJOLES NEGROS (RICE&BLACK BNS)"
 },
 {
   data: 36406,
   value: "REST,LATINO,ARROZ CON ABICHUELAS COLORADOS (RICE&RED BNS)"
 },
 {
   data: 36407,
   value: "RESTAURANT,LATINO,ARROZ CON GRANDULES (RICE & PIGEONPEAS)"
 },
 {
   data: 36408,
   value: "RESTAURANT,LATINO,PUPUSAS CON FRIJOLES (PUPUSAS,BEAN)"
 },
 {
   data: 36409,
   value: "RESTAURANT,LATINO,PUPUSAS CON QUESO (PUPUSAS,CHEESE)"
 },
 {
   data: 36410,
   value: "RESTAURANT,LATINO,PUPUSAS DEL CERDO (PUPUSAS,PORK)"
 },
 {
   data: 36411,
   value: "RESTAURANT,LATINO,TAMALE,CORN"
 },
 {
   data: 36412,
   value: "RESTAURANT,LATINO,TAMALE,PORK"
 },
 {
   data: 36413,
   value: "RESTAURANT,LATINO,BLACK BEAN SOUP"
 },
 {
   data: 36414,
   value: "RESTAURANT,LATINO,TRIPE SOUP"
 },
 {
   data: 36415,
   value: "RESTAURANT,LATINO,AREPA (UNLEAVENED CORNMEAL BREAD)"
 },
 {
   data: 36416,
   value: "RESTAURANT,LATINO,BUNUELOS (FRIED YEAST BREAD)"
 },
 {
   data: 36601,
   value: "RESTAURANT,CHINESE,EGG ROLLS,ASSORTED"
 },
 {
   data: 36602,
   value: "RESTAURANT,CHINESE,FRIED RICE"
 },
 {
   data: 36603,
   value: "RESTAURANT,CHINESE,BF & VEG"
 },
 {
   data: 36604,
   value: "CRACKER BARREL,CHICK TENDERLOIN PLATTER,FRIED,FRM KID'S MENU"
 },
 {
   data: 36605,
   value: "CRACKER BARREL,COUNTRY FRIED SHRIMP PLATTER"
 },
 {
   data: 36606,
   value: "CRACKER BARREL,FARM RAISED CATFISH PLATTER"
 },
 {
   data: 36607,
   value: "CRACKER BARREL,STEAK FRIES"
 },
 {
   data: 36608,
   value: "CRACKER BARREL,GRILLED SIRLOIN STEAK"
 },
 {
   data: 36609,
   value: "CRACKER BARREL,MACARONI N' CHS PLATE,FROM KID'S MENU"
 },
 {
   data: 36610,
   value: "DENNY'S,FRENCH FR"
 },
 {
   data: 36611,
   value: "DENNY'S,MOZZARELLA CHS STKS"
 },
 {
   data: 36612,
   value: "DENNY'S,GOLDEN FRIED SHRIMP"
 },
 {
   data: 36613,
   value: "DENNY'S,MACARONI & CHS,FROM KID'S MENU"
 },
 {
   data: 36614,
   value: "DENNY'S,MOONS & STARS CHICK NUGGETS,FROM KID'S MENU"
 },
 {
   data: 36615,
   value: "DENNY'S,TOP SIRLOIN STEAK"
 },
 {
   data: 36617,
   value: "RESTAURANT,CHINESE,LEMON CHICK"
 },
 {
   data: 36618,
   value: "RESTAURANT,CHINESE,GENERAL TSO'S CHICK"
 },
 {
   data: 36619,
   value: "RESTAURANT,CHINESE,KUNG PAO CHICK"
 },
 {
   data: 36620,
   value: "RESTAURANT,CHINESE,SHRIMP & VEG"
 },
 {
   data: 36621,
   value: "RESTAURANT,CHINESE,SWT & SOUR CHICK"
 },
 {
   data: 36622,
   value: "RESTAURANT,CHINESE,SWT & SOUR PORK"
 },
 {
   data: 36623,
   value: "RESTAURANT,CHINESE,CHICK CHOW MEIN"
 },
 {
   data: 42040,
   value: "SYRUPS,GRENADINE"
 },
 {
   data: 42055,
   value: "FRUIT-FLAVORED DRK,DRY PDR MIX,LO CAL,W/ ASPRT"
 },
 {
   data: 42063,
   value: "PECTIN,LIQUID"
 },
 {
   data: 42074,
   value: "FROZ NOVLT,ICE CRM,VAN ICE CRM,LT,NO SUGAR ADDED,CHOC COATD"
 },
 {
   data: 42100,
   value: "CEREALS RTE,MARSHMLLW ALPHA-BITS"
 },
 {
   data: 42116,
   value: "CREAMY DRSNG,MADE W/SOUR CRM AND/OR BTTRMLK&OIL,RED CAL"
 },
 {
   data: 42117,
   value: "IMITATION CHS,AMERICAN OR CHEDDAR,LO CHOL"
 },
 {
   data: 42119,
   value: "BABYFOOD,BANANA JUC W/LOFAT YOGURT"
 },
 {
   data: 42120,
   value: "BABYFOOD,MXD FRUIT JUC W/LOFAT YOGURT"
 },
 {
   data: 42128,
   value: "TURKEY HAM,SLICED,EX LN,PREPACKAGED OR DELI-SLICED"
 },
 {
   data: 42129,
   value: "BOLOGNA,BF&PORK,LOFAT"
 },
 {
   data: 42130,
   value: "TURKEY BACON,COOKED"
 },
 {
   data: 42131,
   value: "MILK DSSRT,FRZ,MILK-FAT FREE,CHOC"
 },
 {
   data: 42135,
   value: "WHIPPED TOPPING,FRZ,LOFAT"
 },
 {
   data: 42136,
   value: "CREAM SUB,PDR,LT"
 },
 {
   data: 42137,
   value: "SALAD DRSNG,PEPPERCORN DRSNG,COMM,REG"
 },
 {
   data: 42138,
   value: "MAYONNAISE,RED-CAL OR DIET,CHOL-FREE"
 },
 {
   data: 42139,
   value: "GRANOLA BAR,SOFT,MILK CHOC COATD,PNUT BUTTER"
 },
 {
   data: 42140,
   value: "SALAD DRSNG,ITALIAN DRSNG,RED CAL"
 },
 {
   data: 42141,
   value: "CREAM SUB,LIQ,LT"
 },
 {
   data: 42148,
   value: "CANDIES,MARS SNACKFOOD US,M&M'S PNUT BUTTER CHOC CANDIES"
 },
 {
   data: 42150,
   value: "BABYFOOD,APPL YOGURT DSSRT,STR"
 },
 {
   data: 42151,
   value: "VEGETABLE OIL-BUTTER SPRD,RED CAL"
 },
 {
   data: 42153,
   value: "SALAD DRSNG,BLUE OR ROQUEFORT CHS DRSNG,LT"
 },
 {
   data: 42155,
   value: "CHEESE,MONTEREY,LOW FAT"
 },
 {
   data: 42157,
   value: "CRMY DRSG,MDE W/ SOUR CRM AND/OR BTRMLK & OIL,RED CAL,FTFREE"
 },
 {
   data: 42158,
   value: "CREAMY DRSNG,W/SOUR CRM AND/OR BTTRMLK&OIL,RED CAL,CHOL-FREE"
 },
 {
   data: 42161,
   value: "BOLOGNA,BEEF,LOW FAT"
 },
 {
   data: 42171,
   value: "SALAD DRSNG,FRENCH DRSNG,RED CAL"
 },
 {
   data: 42173,
   value: "TURKEY&PORK SAUSAGE,FRSH,BULK,PATTY OR LINK,CKD"
 },
 {
   data: 42178,
   value: "MAYONNAISE,MADE WITH TOFU"
 },
 {
   data: 42179,
   value: "FRANKFURTER,BF,LO FAT"
 },
 {
   data: 42182,
   value: "BEAN BEVERAGE"
 },
 {
   data: 42183,
   value: "CANDIES,MARS SNACKFOOD US,TWIX CHOC FUDGE COOKIE BARS"
 },
 {
   data: 42184,
   value: "CEREALS RTE,MUESLI,DRIED FRUIT & NUTS"
 },
 {
   data: 42185,
   value: "YOGURT,FRZ,CHOC,NON-FAT MILK,W/LO CAL SWTNR"
 },
 {
   data: 42186,
   value: "FROZEN YOGURTS,CHOC"
 },
 {
   data: 42187,
   value: "FROZEN YOGURTS,FLAVORS OTHER THAN CHOC"
 },
 {
   data: 42188,
   value: "FRANKFURTER,BF & PORK,LO FAT"
 },
 {
   data: 42189,
   value: "MILK,BTTRMLK,FLUID,CULTURED,RED FAT"
 },
 {
   data: 42190,
   value: "PORK SAUSAGE RICE LINKS,BROWN&SERVE,CKD"
 },
 {
   data: 42192,
   value: "SALAD DRSNG,BLUE OR ROQUEFORT CHS DRSNG,FAT-FREE"
 },
 {
   data: 42193,
   value: "SALAD DRSNG,MAYONNAISE-LIKE,FAT-FREE"
 },
 {
   data: 42196,
   value: "CANDIES,MARS SNACKFOOD US,MILKY WAY MIDNIGHT BAR"
 },
 {
   data: 42200,
   value: "PAPAD"
 },
 {
   data: 42204,
   value: "RICE CAKE,CRACKER (INCL HAIN MINI RICE CAKES)"
 },
 {
   data: 42205,
   value: "CHEESE,PAST PROCESS,CHEDDAR OR AMERICAN,FAT-FREE"
 },
 {
   data: 42227,
   value: "CANDIES,MARS SNACKFOOD US,M&M'S ALMOND CHOC CANDIES"
 },
 {
   data: 42230,
   value: "SALAD DRSNG,COLESLAW DRSNG,RED FAT"
 },
 {
   data: 42231,
   value: "OIL,FLAXSEED,COLD PRESSED"
 },
 {
   data: 42235,
   value: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT,LACTOSE RED"
 },
 {
   data: 42236,
   value: "CEREALS RTE,FRSTD OAT CRL W/MARSHMALLOWS"
 },
 {
   data: 42237,
   value: "CEREALS RTE,WEETABIX WHL WHEAT CRL"
 },
 {
   data: 42240,
   value: "CEREALS RTE,POST,HONEY BUNCHES OF OATS,W/ ALMONDS"
 },
 {
   data: 42241,
   value: "TURKEY,PORK,&BF SAUSAGE,RED FAT,SMOKED"
 },
 {
   data: 42256,
   value: "MARGARINE-LIKE,VEG OIL SPRD,STK OR TUB,SWTND"
 },
 {
   data: 42258,
   value: "CHEESE PRODUCT,PAST PROCESS,CHEDDAR,RED FAT"
 },
 {
   data: 42259,
   value: "SNACKS,POPCORN,HOME-PREPARED,OIL-POPPED,UNSALTED"
 },
 {
   data: 42261,
   value: "CEREALS RTE,POST,GREAT GRAINS CRUNCHY PECAN CRL"
 },
 {
   data: 42262,
   value: "SAUSAGE,CHICK&BF,SMOKED"
 },
 {
   data: 42265,
   value: "CEREALS RTE,POST,GREAT GRAINS,RAISIN,DATE & PECAN"
 },
 {
   data: 42266,
   value: "BABYFOOD,JUC,APPLE-SWEET POTATO"
 },
 {
   data: 42267,
   value: "BABYFOOD,JUC,ORANGE-CARROT"
 },
 {
   data: 42270,
   value: "ORANGE JUICE DRINK"
 },
 {
   data: 42272,
   value: "GRANOLA BAR,W/COCNT,CHOC COATD"
 },
 {
   data: 42278,
   value: "BABYFOOD,VEG&BROWN RICE,STR"
 },
 {
   data: 42279,
   value: "BABYFOOD,PEAS&BROWN RICE"
 },
 {
   data: 42280,
   value: "FRANKFURTER,MEAT & POULTRY,LO FAT"
 },
 {
   data: 42283,
   value: "POTATO CHIPS,WHITE,RESTRUCTURED,BKD"
 },
 {
   data: 42284,
   value: "BABYFOOD,BKD PRODUCT,FINGER SNACKS CRL"
 },
 {
   data: 42285,
   value: "BABYFOOD,CRL,BROWN RICE,DRY,INST"
 },
 {
   data: 42286,
   value: "BABYFOOD,GRN BNS&TURKEY,STR"
 },
 {
   data: 42289,
   value: "OIL,CORN AND CANOLA"
 },
 {
   data: 42290,
   value: "MILK,FLUID,NONFAT,CA FORT (FAT FREE OR SKIM)"
 },
 {
   data: 42291,
   value: "PEANUT BUTTER,RED NA"
 },
 {
   data: 42297,
   value: "CEREALS RTE,POST GREAT GRAINS BANANA NUT CRUNCH"
 },
 {
   data: 42303,
   value: "CHEESE,MUENSTER,LOW FAT"
 },
 {
   data: 42304,
   value: "CHEESE,MOZZARELLA,NON-FAT"
 },
 {
   data: 42307,
   value: "MARGARINE-LIKE,BUTTER-MARGARINE BLEND,80% FAT,STK,WO/ SALT"
 },
 {
   data: 42309,
   value: "MARGARINE-LIKE,VEG OIL-BUTTER SPRD,RED CAL,TUB,W/ SALT"
 },
 {
   data: 42316,
   value: "BABYFOOD,CARROTS,TODDLER"
 },
 {
   data: 43004,
   value: "BABYFOOD,DSSRT,BANANA PUDD,STR"
 },
 {
   data: 43006,
   value: "BABYFOOD,FRUIT,TUTTI FRUTTI,STR"
 },
 {
   data: 43007,
   value: "BABYFOOD,FRUIT,TUTTI FRUTTI,JR"
 },
 {
   data: 43008,
   value: "BABYFOOD,DINNER,CHICK&RICE"
 },
 {
   data: 43015,
   value: "SALAD DRSNG,CAESAR DRSNG,REG"
 },
 {
   data: 43016,
   value: "SALAD DRESSING,COLESLAW"
 },
 {
   data: 43017,
   value: "SALAD DRSNG,GRN GODDESS,REG"
 },
 {
   data: 43019,
   value: "SALAD DRSNG,SWT&SOUR"
 },
 {
   data: 43020,
   value: "SALAD DRSNG,BLUE OR ROQUEFORT CHS,LO CAL"
 },
 {
   data: 43021,
   value: "SALAD DRSNG,CAESAR,LO CAL"
 },
 {
   data: 43026,
   value: "SYRUPS,DIETETIC"
 },
 {
   data: 43028,
   value: "JAMS & PRESERVES,DIETETIC (WITH NA SACCHARIN),ANY FLAVOR"
 },
 {
   data: 43031,
   value: "CANDIES,CHOC COVERED,CARAMEL W/NUTS"
 },
 {
   data: 43046,
   value: "CANDIES,NOUGAT,W/ ALMONDS"
 },
 {
   data: 43057,
   value: "CANDIES,GUM DROPS,DIETETIC OR LO CAL (SORBITOL)"
 },
 {
   data: 43058,
   value: "CANDIES,HARD,DIETETIC OR LO CAL (SORBITOL)"
 },
 {
   data: 43059,
   value: "CANDIES,CHOC COVERED,DIETETIC OR LO CAL"
 },
 {
   data: 43060,
   value: "CHEWING GUM,SUGARLESS"
 },
 {
   data: 43075,
   value: "FLUID REPLCMNT,ELECTROLYTE SOLN (INCLUDE PEDIALYTE)"
 },
 {
   data: 43078,
   value: "BEVERAGE,MILKSHAKE MIX,DRY,NOT CHOC"
 },
 {
   data: 43098,
   value: "PIE FILLINGS,CHERRY,LO CAL"
 },
 {
   data: 43100,
   value: "BREAKFAST BARS,OATS,SUGAR,RAISINS,COCNT (INCL GRANOLA BAR)"
 },
 {
   data: 43109,
   value: "PRETZELS,SOFT"
 },
 {
   data: 43112,
   value: "BEANS,CHILI,BARBECUE,RANCH STYLE,CKD"
 },
 {
   data: 43114,
   value: "VERMICELLI,MADE FROM SOY"
 },
 {
   data: 43125,
   value: "BEANS,LIQ FROM STWD KIDNEY BNS"
 },
 {
   data: 43128,
   value: "CHICKEN,MEATLESS"
 },
 {
   data: 43129,
   value: "FISH STICKS,MEATLESS"
 },
 {
   data: 43130,
   value: "FRANKFURTER,MEATLESS"
 },
 {
   data: 43131,
   value: "LUNCHEON SLICES,MEATLESS"
 },
 {
   data: 43132,
   value: "MEATBALLS,MEATLESS"
 },
 {
   data: 43134,
   value: "VEGETARIAN FILLETS"
 },
 {
   data: 43135,
   value: "SANDWICH SPREAD,MEATLESS"
 },
 {
   data: 43136,
   value: "VEGETARIAN STEW"
 },
 {
   data: 43137,
   value: "VEGETARIAN MEATLOAF OR PATTIES"
 },
 {
   data: 43142,
   value: "RADISHES,HAWAIIAN STYLE,PICKLED"
 },
 {
   data: 43143,
   value: "CABBAGE,JAPANESE STYLE,FRSH,PICKLED"
 },
 {
   data: 43144,
   value: "CABBAGE,MUSTARD,SALTED"
 },
 {
   data: 43146,
   value: "EGGPLANT,PICKLED"
 },
 {
   data: 43154,
   value: "ALCOHOLIC BEV,WINE,COOKING"
 },
 {
   data: 43155,
   value: "ALCOHOLIC BEV,WINE,LT"
 },
 {
   data: 43158,
   value: "SWEETENERS,TABLETOP,SACCHARIN"
 },
 {
   data: 43205,
   value: "BEVERAGE,INST BRKFST PDR,CHOC,NOT RECON"
 },
 {
   data: 43212,
   value: "BACON BITS,MEATLESS"
 },
 {
   data: 43214,
   value: "BUTTER REPLCMNT,WO/FAT,PDR"
 },
 {
   data: 43215,
   value: "SALAD DRSNG,BTTRMLK,LITE"
 },
 {
   data: 43216,
   value: "SWEETENERS,TABLETOP,FRUCTOSE,DRY,PDR"
 },
 {
   data: 43217,
   value: "TOMATO SAU,CND,NO SALT ADDED"
 },
 {
   data: 43218,
   value: "CEREALS RTE,ALPEN"
 },
 {
   data: 43241,
   value: "CEREALS RTE,FAMILIA"
 },
 {
   data: 43245,
   value: "CEREALS RTE,WHEAT&BRAN,PRESWEETENED W/NUTS&FRUITS"
 },
 {
   data: 43260,
   value: "BEVERAGE,INST BRKFST PDR,CHOC,SUGAR-FREE,NOT RECON"
 },
 {
   data: 43261,
   value: "YOGURT,FRUIT VAR,NON-FAT"
 },
 {
   data: 43268,
   value: "WHIPPED CRM SUB,DIETETIC,MADE FROM PDR MIX"
 },
 {
   data: 43269,
   value: "FROZEN NOVELTIES,ICE CRM TYPE,SUNDAE,PREPACKAGED"
 },
 {
   data: 43273,
   value: "CHEESE,COTTAGE,W/VEG"
 },
 {
   data: 43274,
   value: "CHEESE,CREAM,LOW FAT"
 },
 {
   data: 43275,
   value: "CHEESE,PAST PROCESS,AMERICAN,LOFAT"
 },
 {
   data: 43276,
   value: "CHEESE SPRD,CRM CHS BASE"
 },
 {
   data: 43278,
   value: "CHEESE,AMERICAN CHEDDAR,IMITN"
 },
 {
   data: 43282,
   value: "QUAIL,COOKED,TOTAL EDIBLE"
 },
 {
   data: 43283,
   value: "PHEASANT,CKD,TOTAL EDIBLE"
 },
 {
   data: 43285,
   value: "EGGS,SCRMBLD,FRZ MIXTURE"
 },
 {
   data: 43287,
   value: "DOVE,CKD (INCL SQUAB)"
 },
 {
   data: 43297,
   value: "PORK,ORIENTAL STYLE,DEHYD"
 },
 {
   data: 43299,
   value: "SOYBEAN,CURD CHEESE"
 },
 {
   data: 43306,
   value: "CEREALS,NESTUM,PREP W/H2O"
 },
 {
   data: 43311,
   value: "POTATOES,CND,DRND SOL,NO SALT"
 },
 {
   data: 43312,
   value: "VEGETABLES,MXD (CORN,LIMA BNS,PEAS,GRN BNS,CRRT) CND,NO SALT"
 },
 {
   data: 43325,
   value: "PORK,CURED,HAM,BNLESS,LO NA,EX LN & REG,RSTD"
 },
 {
   data: 43326,
   value: "PORK,CURED,HAM,LO NA,LN & FAT,CKD"
 },
 {
   data: 43327,
   value: "PORK,CURED,HAM,BNLESS,LO NA,EX LN (APPROXIMATLY 5% FAT),RSTD"
 },
 {
   data: 43329,
   value: "SALAD DRSNG,MAYO & MAYONNAISE-TYPE,LO CAL"
 },
 {
   data: 43331,
   value: "SALAD DRSNG,BACON&TOMATO"
 },
 {
   data: 43340,
   value: "CHEESE,PARMESAN,LO NA"
 },
 {
   data: 43345,
   value: "FRUIT-FLAVORED DRK,PDR,W/ HI VIT C W/ OTHER ADDED VIT,LO CAL"
 },
 {
   data: 43346,
   value: "FROZEN NOVELTIES,JUC TYPE,ORANGE"
 },
 {
   data: 43350,
   value: "SAUERKRAUT,CND,LO NA"
 },
 {
   data: 43352,
   value: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT,NO NA"
 },
 {
   data: 43355,
   value: "MAYONNAISE,LO NA,LO CAL OR DIET"
 },
 {
   data: 43364,
   value: "SNACKS,TORTILLA CHIPS,UNSALTED,WHITE CORN"
 },
 {
   data: 43365,
   value: "TOMATO&VEG JUC,LO NA"
 },
 {
   data: 43366,
   value: "TURKEY,WING,SMOKED,CKD,W/SKN,BONE REMOVED"
 },
 {
   data: 43367,
   value: "TURKEY,DRUMSTK,SMOKED,CKD,W/SKN,BONE REMOVED"
 },
 {
   data: 43369,
   value: "CHOCOLATE-FLAVORED DRK,WHEY&MILK BSD"
 },
 {
   data: 43373,
   value: "BABYFOOD,DINNER,CHICK&NOODLE W/VEG,TODD"
 },
 {
   data: 43378,
   value: "PORK,CURED,BACON,CKD,BRLD,PAN-FRIED OR RSTD,RED NA"
 },
 {
   data: 43379,
   value: "CHEESE,PAST PROCESS,SWISS,LOFAT"
 },
 {
   data: 43382,
   value: "CRANBERRY JUC,UNSWTND"
 },
 {
   data: 43384,
   value: "BEEF,BOLOGNA,RED NA"
 },
 {
   data: 43387,
   value: "TURNIP GRNS,CND,NO SALT"
 },
 {
   data: 43390,
   value: "TURKEY,LT OR DK MEAT,SMOKED,CKD,W/SKN,BONE REMOVED"
 },
 {
   data: 43391,
   value: "TURKEY,LT OR DK MEAT,SMOKED,CKD,SKN & BONE REMOVED"
 },
 {
   data: 43392,
   value: "PALM HEARTS,RAW"
 },
 {
   data: 43393,
   value: "CEREALS RTE,POST,SHREDDED WHEAT N' BRAN,SPOON-SIZE"
 },
 {
   data: 43396,
   value: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT,W/VEG"
 },
 {
   data: 43398,
   value: "CHEESE,PAST PROCESS,CHEDDAR OR AMERICAN,LO NA"
 },
 {
   data: 43401,
   value: "COFFEE,DRY,PDR,W/ WHTNR,RED CAL"
 },
 {
   data: 43404,
   value: "CRANBERRY-APPLE JUC DRK,LO CAL,W/VIT C"
 },
 {
   data: 43405,
   value: "CHEESE,SWISS,LOW SODIUM"
 },
 {
   data: 43406,
   value: "YEAST EXTRACT SPREAD"
 },
 {
   data: 43408,
   value: "BABYFOOD,JUICE,PEAR"
 },
 {
   data: 43410,
   value: "CHICKEN,MEATLESS,BREADED,FRIED"
 },
 {
   data: 43417,
   value: "BABYFOOD,MEAT,BF W/VEG,TODD"
 },
 {
   data: 43432,
   value: "BABYFOOD,DINNER,MACARONI,BF&TOMATO SAU,TODD"
 },
 {
   data: 43441,
   value: "ROLLS,PUMPERNICKEL"
 },
 {
   data: 43447,
   value: "SNACKS,CORN-BASED,EXTRUDED,CHIPS,UNSALTED"
 },
 {
   data: 43449,
   value: "BEANS,BKD,CND,NO SALT ADDED"
 },
 {
   data: 43450,
   value: "FROZEN NOVELITES,JUC TYPE,JUC W/ CRM"
 },
 {
   data: 43476,
   value: "TOFU YOGURT"
 },
 {
   data: 43479,
   value: "ALCOHOLIC BEV,RICE (SAKE)"
 },
 {
   data: 43483,
   value: "MILLET,PUFFED"
 },
 {
   data: 43495,
   value: "CEREALS RTE,OAT BRAN FLAKES,HEALTH VALLEY"
 },
 {
   data: 43497,
   value: "JELLYFISH,DRIED,SALTED"
 },
 {
   data: 43506,
   value: "ICE CRM BAR,CHOC OR CARAMEL COVERED,W/NUTS"
 },
 {
   data: 43507,
   value: "FRANKFURTER,LO NA"
 },
 {
   data: 43510,
   value: "CEREALS RTE,CRISPY BROWN RICE"
 },
 {
   data: 43514,
   value: "FROZEN NOVELTIES,ICE TYPE,POP,W/ LO CAL SWTNR"
 },
 {
   data: 43523,
   value: "BABYFOOD,MXD FRUIT YOGURT,STR"
 },
 {
   data: 43528,
   value: "ENSURE PLUS,LIQ NUTR"
 },
 {
   data: 43529,
   value: "BABYFOOD,RICE&APPLS,DRY"
 },
 {
   data: 43535,
   value: "BABYFOOD,JUC,APPL - CHERRY"
 },
 {
   data: 43536,
   value: "BABYFOOD,DSSRT,PEACH YOGURT"
 },
 {
   data: 43537,
   value: "BABYFOOD,DSSRT,BLUEBERRY YOGURT,STR"
 },
 {
   data: 43539,
   value: "BABYFOOD,DSSRT,BANANA YOGURT,STR"
 },
 {
   data: 43541,
   value: "ICE CREAMS,CHOC,RICH"
 },
 {
   data: 43543,
   value: "MILK,IMITATION,NON-SOY"
 },
 {
   data: 43546,
   value: "BABYFOOD,BANANA NO TAPIOCA,STR"
 },
 {
   data: 43550,
   value: "BABYFOOD,BANANA APPL DSSRT,STR"
 },
 {
   data: 43566,
   value: "SNACKS,TORTILLA CHIPS,LT (BAKED W/ LESS OIL)"
 },
 {
   data: 43570,
   value: "CEREALS RTE,POST,HONEY BUNCHES OF OATS,HONEY RSTD"
 },
 {
   data: 43572,
   value: "POPCORN,MICROWAVE,LOFAT&NA"
 },
 {
   data: 43584,
   value: "CEREALS RTE,AMARANTH FLAKES"
 },
 {
   data: 43585,
   value: "BABYFOOD,FRUIT SUPREME DSSRT"
 },
 {
   data: 43589,
   value: "CHEESE,SWISS,LOW FAT"
 },
 {
   data: 43595,
   value: "BREAKFAST BAR,CORN FLAKE CRUST W/FRUIT"
 },
 {
   data: 43597,
   value: "CHEESE,MOZZARELLA,LO NA"
 },
 {
   data: 43598,
   value: "MAYONNAISE DRSNG,NO CHOL"
 },
 {
   data: 43599,
   value: "SALAD DRSNG,MAYO DRSNG,DIET,NO CHOL"
 },
 {
   data: 44005,
   value: "OIL,CORN,PEANUT,AND OLIVE"
 },
 {
   data: 44018,
   value: "SWEETENERS,TABLETOP,FRUCTOSE,LIQ"
 },
 {
   data: 44048,
   value: "CHEESE FOOD,IMITATION"
 },
 {
   data: 44055,
   value: "CELERY FLAKES,DRIED"
 },
 {
   data: 44061,
   value: "PUDDINGS,CHOC FLAVOR,LO CAL,INST,DRY MIX"
 },
 {
   data: 44074,
   value: "BABYFOOD,GRAPE JUC,NO SUGAR,CND"
 },
 {
   data: 44110,
   value: "JELLIES,RED SUGAR,HOME PRESERVED"
 },
 {
   data: 44158,
   value: "PIE FILLINGS,BLUEBERRY,CND"
 },
 {
   data: 44203,
   value: "COCKTAIL MIX,NON-ALCOHOLIC,CONCD,FRZ"
 },
 {
   data: 44258,
   value: "PUDDINGS,CHOC FLAVOR,LO CAL,REG,DRY MIX"
 },
 {
   data: 44259,
   value: "PUDDINGS,ALL FLAVORS XCPT CHOC,LO CAL,REG,DRY MIX"
 },
 {
   data: 44260,
   value: "PUDDINGS,ALL FLAVORS XCPT CHOC,LO CAL,INST,DRY MIX"
 },
 {
   data: 48052,
   value: "VITAL WHEAT GLUTEN"
 },
 {
   data: 80200,
   value: "FROG LEGS,RAW"
 },
 {
   data: 83110,
   value: "MACKEREL,SALTED"
 },
 {
   data: 90240,
   value: "SCALLOP,(BAY&SEA),CKD,STMD"
 },
 {
   data: 90480,
   value: "SYRUP,CANE"
 },
 {
   data: 90560,
   value: "SNAIL,RAW"
 },
 {
   data: 93600,
   value: "TURTLE,GREEN,RAW"
 }
];
  
  // setup autocomplete function pulling from foodItems[] array
  $('#autocomplete3').autocomplete({
    lookup: foodItems3,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Food Name:</strong> ' + suggestion.value + ' <br> <strong>ID Number:</strong> ' + suggestion.data;
      $('#outputcontent3').html(thehtml);
    }
  });
  

});