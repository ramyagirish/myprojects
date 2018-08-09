This folder contains the following folders and includes code some of which (files in the configs folder, export_inference_graph.py and faster_rcnn_client.py in gRPc_client_server folder, xml_to_csv.py and generate_tfrecords.py that have been obtained from open source resources and mdified for our application) that have been.

The project was built using the following open source material available online;

1. https://github.com/tensorflow/models: for model creation
2. https://github.com/datitran/raccoon_dataset:for creating csv of labels and tfrecord files 
3. https://github.com/tensorflow/serving: for creating gRPC client and server
 
All the files associated with the SSD inception model and Faster R-CNN have been put in the model/deep_learning folder. The files associated with Haar Cascade creation have been put in model/image_extraction folder.The saved model that wereused to create the server in is model/deep_learning/saved_model_variables folder.
 
