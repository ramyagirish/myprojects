import cv2
import numpy as np

img = cv2.imread("00030.jpg",1)

hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)

h = hsv[:,:,0]
s = hsv[:,:,1]

thresh_adapt = cv2.adaptiveThreshold(s, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 115,1)

edges = cv2.Canny(s,110,65)

sub = cv2.subtract(thresh_adapt,edges)

kernel = np.ones((3,3),'uint8')
gray_erode = cv2.erode(sub,kernel,iterations = 2)
cv2.imshow("Gray Scale",gray_erode)

# we need to get the contour associated with the largest object
_, contours, _ = cv2.findContours(gray_erode, cv2.RETR_TREE , cv2.CHAIN_APPROX_NONE)

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

cv2.imshow("final", img2)

cv2.waitKey(0)
cv2.destroyAllWindows()