import cv2
import numpy as np

thresh = 15

img = cv2.imread("00003.jpg",1)
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

ret, thresh_adapt = cv2.threshold(gray,thresh,255,cv2.THRESH_BINARY_INV)

kernel = cv2.getStructuringElement(cv2.MORPH_CROSS,(3,3))
gray_dilate = cv2.dilate(thresh_adapt,kernel,iterations = 13)

_, contours, _ = cv2.findContours(gray_dilate, cv2.RETR_EXTERNAL , cv2.CHAIN_APPROX_NONE)

con_area = []
for c in contours: 
    area = cv2.contourArea(c)
    con_area.append(area)

m = max(con_area)
img2 = img.copy()

for c in contours:
    if cv2.contourArea(c) == m:
        x,y,w,h = cv2.boundingRect(c)
        cv2.rectangle(img2,(x,y),(x+w,y+h),(0,255,0),2)
        i = img[y:y+h,x:x+w]
        i = cv2.resize(i,(100,50))
        #cv2.imshow("cropped image", i)
        
        cv2.imwrite("pos/r_img_3.jpg",i)

#cv2.imshow("Gray Scale", img2)





#cv2.waitKey(0)
#cv2.destroyAllWindows()