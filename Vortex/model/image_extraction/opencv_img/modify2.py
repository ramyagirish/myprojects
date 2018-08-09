import cv2
import numpy as np

def resize_image(img_string):   
    # read the image file
    img = cv2.imread(img_string, 1)
    cv2.imshow("Original",img)
    
    # convert the image to Gray scale
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    cv2.imshow("hue",hsv[:,:,0])
    cv2.imshow("satuarted",hsv[:,:,1])
    
    
    h = hsv[:,:,0]
    s = hsv[:,:,1]
     
    comb = cv2.bitwise_xor(h,s)
    cv2.imshow("combined",comb)
    
    # blurring the image
    gray_blur = cv2.GaussianBlur(comb,(5,5),0)
    cv2.imshow("Blurred",gray_blur)
    # segmentation
    thresh_adapt = cv2.adaptiveThreshold(gray_blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 115,1)
    cv2.imshow("Segmented",thresh_adapt)
    
    # image inversion
    white = np.ones((img.shape[0],img.shape[1]),'uint8')*255
    comb2 = cv2.bitwise_xor(thresh_adapt,white)
    cv2.imshow("Inverted", comb2)
    
    
    # we need to get the contour associated with the largest object
    _, contours, _ = cv2.findContours(comb2, cv2.RETR_EXTERNAL , cv2.CHAIN_APPROX_NONE)
    
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
        
           cv2.imwrite("pos/r_img_30.jpg",i)
    cv2.imshow("last",img2)
   
    #cv2.waitKey(0)
    #cv2.destroyAllWindows()

resize_image("00030.jpg")
