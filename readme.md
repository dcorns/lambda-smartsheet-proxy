# lambda-smartsheet-proxy
Send requests to the smartsheet api using AWS lambda functions locally
### Usage
1. Create a config.json containing a property called smartSheetToken and assign it the value of your smartsheet token.
2. Make sure that you have aws-cli and aws sam installed. Execute sam local start-api from a terminal session. Now you can make calls to the smart sheet api from another application running in brower by directing calls to http:localost:3000 or by navigating to localhost:3000 in the brower adding the api path (http://localhost:3000/2.0/sheets).
### Supported calls
/2.0/users/me..../2.0/sheets..../2.0/sheets/{sheetId}