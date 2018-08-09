"""Send JPEG image to tensorflow_model_server loaded with inception model.
"""

from __future__ import print_function

# This is a placeholder for a Google-internal import.
import time
from grpc.beta import implementations
import tensorflow as tf
from PIL import Image
import numpy as np

from tensorflow_serving.apis import predict_pb2
from tensorflow_serving.apis import prediction_service_pb2



tf.app.flags.DEFINE_string('server', '0.0.0.0:9000',
                           'PredictionService host:port')
tf.app.flags.DEFINE_string('image', '', 'path to image in JPEG format')
FLAGS = tf.app.flags.FLAGS


def main(_):
  host, port = FLAGS.server.split(':')
  channel = implementations.insecure_channel(host, int(port))
  stub = prediction_service_pb2.beta_create_PredictionService_stub(channel)
  # Send request
  start = time.time()
  with open(FLAGS.image, 'rb') as f:
    # See prediction_service.proto for gRPC request/response details.
    data = f.read()
    img = Image.open(FLAGS.image)
    (im_width, im_height) = img.size
    img = np.array(img.getdata()).reshape((im_height, im_width, 3)).astype(np.uint8)
    request = predict_pb2.PredictRequest()
    request.model_spec.name = 'faster_rcnn'
    request.model_spec.signature_name = 'serving_default'
    request.inputs['inputs'].CopyFrom(
        tf.contrib.util.make_tensor_proto(np.expand_dims(img, 0)))
    result = stub.Predict(request, 1200.0)  # 10 secs timeout
    end = time.time()
    print("The time required to do inference is {:0.2f}".format(end-start))
    print(result)



if __name__ == '__main__':
    tf.app.run()
