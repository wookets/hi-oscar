exports.handler = async (event) => {
    return {
      "version": "string",
      "sessionAttributes": {
        "key": "value"
      },
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "Oscar is in the house",
          "ssml": "<speak>Oscar is in the house</speak>"
        },
        "shouldEndSession": true
       }
    }

}