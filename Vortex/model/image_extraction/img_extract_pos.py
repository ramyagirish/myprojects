import cv2 
import os 
import numpy as np

# prepare a list of files in a directory 
file_list = os.listdir()

# counter to assign file name
num = 1

# loop to finally modify our positive images
if not os.path.exists('pos'):
        os.makedirs('pos')

for file in file_list:
    if file.endswith('.jpg'):
        img = cv2.imread(file,cv2.IMREAD_GRAYSCALE)
        filename = 'pos/' + str(num) +'.jpg'
        num += 1
        cv2.imwrite(filename,img)
        line = filename + ' 1 0 0 100 50\n'
        with open('pos/info.txt','a') as f:
            f.write(line)
