from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials

import os
region = "centralindia"
key = "2a3fb38024184f2e9cccdf6a207454a6"

credentials = CognitiveServicesCredentials(key)
client = ComputerVisionClient(
    endpoint="https://" + region + ".api.cognitive.microsoft.com/",
    credentials=credentials
)

# import models
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes

url = "https://github.com/Azure-Samples/cognitive-services-python-sdk-samples/raw/master/samples/vision/images/make_things_happen.jpg"
raw = True
numberOfCharsInOperationId = 36

# SDK call
rawHttpResponse = client.read(url, language="en", raw=True)

# Get ID from returned headers
operationLocation = rawHttpResponse.headers["Operation-Location"]
idLocation = len(operationLocation) - numberOfCharsInOperationId
operationId = operationLocation[idLocation:]

# SDK call
result = client.get_read_result(operationId)

# Get data
if result.status == OperationStatusCodes.succeeded:

    for line in result.analyze_result.read_results[0].lines:
        print(line.text)