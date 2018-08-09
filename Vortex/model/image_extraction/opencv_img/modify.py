import cv2
import numpy as np

def resize_image(img_string,n):   
    # read the image file
    img = cv2.imread(img_string, 1)
    
    # convert the image to Gray scale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # blurring the image
    gray_blur = cv2.GaussianBlur(gray,(5,5),0)
    
    # segmentation
    thresh_adapt = cv2.adaptiveThreshold(gray_blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 115,1)
    
    # dilate the gray scale image
    kernel = np.ones((5,5),'uint8')
    gray_dilate = cv2.dilate(thresh_adapt,kernel,iterations=2)
    
    
    #canny edge detection and combine edges to main blob
    canny = cv2.Canny(gray_dilate, 100, 70)
    comb = cv2.bitwise_xor(gray_dilate,canny)
    
    # image inversion
    white = np.ones((img.shape[0],img.shape[1]),'uint8')*255
    comb2 = cv2.bitwise_xor(comb,white)
    
    
    # we need to get the contour associated with the largest object
    _, contours, hierarchy = cv2.findContours(comb2, cv2.RETR_TREE , cv2.CHAIN_APPROX_NONE)
    
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
            cv2.imshow("cropped image", i)
        
            #cv2.imwrite("pos/r_img_1.jpg",i)
    
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    
    s = "r_img_" + str(n) + ".jpg"
    #cv2.imwrite(s,img2)
    
resize_image("00030.jpg",400)


