import cv2
import numpy as np

img = cv2.imread("00030.jpg",1)

h = img.shape[0]

w = img.shape[1]

md = min(h,w)
img_r = cv2.resize(img, (md*2,md))
 
gray = cv2.cvtColor(img_r,cv2.COLOR_BGR2GRAY)

kernel = np.ones((5,5),'uint8')
gray_dilate = cv2.dilate(gray,kernel,iterations = 5)

gray_blur = cv2.GaussianBlur(gray_dilate,(5,5),0)

canny = cv2.Canny(gray, 70, 100)
comb = cv2.bitwise_xor(gray_blur,canny)

thresh_adapt = cv2.adaptiveThreshold(comb, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 115,1)
    
white = np.ones((img_r.shape[0],img_r.shape[1]),'uint8')*255
comb = cv2.bitwise_xor(thresh_adapt,white)

# we need to get the contour associated with the largest object
_, contours, hierarchy = cv2.findContours(comb, cv2.RETR_TREE , cv2.CHAIN_APPROX_NONE)

con_area = []
for c in contours: 
    area = cv2.contourArea(c)
    con_area.append(area)

m = max(con_area)
img2 = img_r.copy()

for c in contours:
    if cv2.contourArea(c) == m:
        x,y,w,h = cv2.boundingRect(c)
        cv2.rectangle(img2,(x,y),(x+w,y+h),(0,255,0),2)
        i = img2[y:y+h,x:x+w]
        i = cv2.resize(i,(100,50))
        cv2.imshow("cropped image", i)
        
        #cv2.imwrite("pos/r_img_28.jpg",i)

cv2.imshow("Gray Scale", img2)

cv2.waitKey(0)
cv2.destroyAllWindows()

