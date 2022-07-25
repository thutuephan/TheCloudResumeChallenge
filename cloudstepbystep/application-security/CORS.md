## Cross-origin resource sharing (CORS)

Enabling CORS with API Gateway and Lambda function

1. Modify `lambda handler function` in app.js

2. Update `index.html` file, added the fetch request with the link

## Errors

### Error 1

When trying to enable CORS, there were 2 errors appeared:

- 1. Add Access-Control-Allow-Origin Method Response Header to GET method: solved by adding method response type HTTP 200

![GET-MethodResponse](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/aws-apigateway-cors-solution1a.png)

- 2. Add Access-Control-Allow-Origin Integration Response Header Mapping to GET method

![Integration-Mapping-Error]()
    - Tried so many different ways to modify the headers, read so many docs on how to enable CORS with Lambda Proxy Integration, tested back and forth. Nothing worked.

![Lambda-Error](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/lambda.png)




    - Then went in API / GET / Integration Request and turned off "Lambda Proxy Integration", got all green checked marks but the website still got CORS errors...

    - Changed back to Lambda Proxy

    - Got the final header in app.js as bellow

            `'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Contr0l-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': '*',
                'Accept': '*/*',
                'Content-Type': 'application/json'
                
            },
            `

- I still don't know how and why it finally worked!!! I got the exact same thing from the very beginning. 


### Error 2

The whole response body (status code, headers, body) displayed on the page. 


![visitor-counter](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/aws-output-error.png)

What I did to solve this issue?

- Followed the instructions recommended in this article:

[CORS-in-API-Gateway](https://medium.com/@patrick.krisko/cors-in-api-gateway-3d615cc0d1)


    - Go to OPTIONS - Method Execution - Integration Response - Mapping Templates

    - Modify Content-Type: application/json
    - On the right hand side of if, copy the code and paste it to "Generate template" section:

        Generate template":  #set($context.responseOverride.header[“Access-Control-Allow-Origin”] = $stageVariables.allowedOrigin)

    - Go to Stages, deploy that API again to Prod stage

    - Check Lambda function -> should return 200 code

    - Invoke GET url again

    - It rendered only the visitor counts. 

![visitor-counter-rendered]()
