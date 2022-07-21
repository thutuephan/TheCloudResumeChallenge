## Cross-origin resource sharing (CORS)

Enabling CORS with API Gateway and Lambda function

1. Modify `lambda handler function` in app.js

2. Update `index.html` file, added the fetch request with the link

## Errors

When trying to enable CORS, there were 2 errors appeared:

- 1. Add Access-Control-Allow-Origin Method Response Header to GET method: solved by adding method response type HTTP 200

![GET-MethodResponse]()

- 2. Add Access-Control-Allow-Origin Integration Response Header Mapping to GET method

![Integration-Mapping-Error]()
    - Tried so many different ways to modify the headers, read so many docs on how to enable CORS with Lambda Proxy Integration, tested back and forth. Nothing worked.

![Lambda-Error]()




    - Then went in API / GET / Integration Request and turned off "Lambda Proxy Integration", got all green checked marks but the website still got CORS errors...

    - Changed back to Lambda Proxy

    - Got the final header in app.js as bellow

            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Contr0l-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': '*',
                'Accept': '*/*',
                'Content-Type': 'application/json'
                
            },
            

- I still don't know how and why it finally worked!!! I got the exact same thing from the very beginning. 



