import os
import io
import json
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
import requests # pip install requests
from PIL import Image, ImageDraw, ImageFont

credential = json.load(open('credential.json'))
API_KEY = credential['API_KEY']
ENDPOINT = credential['ENDPOINT']

credentials = CognitiveServicesCredentials(API_KEY)
client = ComputerVisionClient(
    endpoint="https://" + "centralindia" + ".api.cognitive.microsoft.com/",
    credentials=credentials
)

local_image = "https://github.com/Azure-Samples/cognitive-services-python-sdk-samples/raw/master/samples/vision/images/make_things_happen.jpg"
url = local_image
raw = True
numberOfCharsInOperationId = 36

# SDK call
rawHttpResponse = client.read(url, language="en", raw=True)
operationLocation = rawHttpResponse.headers['Operation-Location']
idLocation = len(operationLocation) - numberOfCharsInOperationId
operationId = operationLocation[idLocation:]
result = client.get_read_result(operationId)

print(result)
print(result.status)
print(result.analyze_result)

# if result.status == OperationStatusCodes.succeeded:
#     read_results = result.analyze_result.read_results
#     for analyzed_result in read_results:
#         for line in analyzed_result.lines:
#             print(line.text)

if result.status == OperationStatusCodes.succeeded:

    for line in result.analyze_result.read_results[0].lines:
        print(line.text)
