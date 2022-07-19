## API endpoint

- This API endpoint worked, returned all green "checked" when running `enable CORS`. (LAMBDA without PROXY)

`https://ctxductxo0.execute-api.us-east-1.amazonaws.com/prod/myvisitor`

- But when inspecting the sources in dev tools, there were still errors. 


*** Update (07/19/2022)

- The CORS issue was finally resolved. There were nothing wrong with the steps taken before (modified lambda handler function in app.js, `actions` -> `enable CORS`).

- The resource was actually configured for CORS but somehow it kept showing errors `Add Access-Control-Allow-Headers` and so on. 

- Tested the response of the website in Chrome dev tools, everything worked. 

## What is API Gateway

1. API Gateway is a service which allows you to publish, maintain, monitor, and secure APIs at any scale

2. An API is like a front door for applications to access data, business logic, or functionality from your backend services, e.g., applications running on EC2, Lambda

3. Supported API Types

- RESTful APIs are optimized for stateless, serverless workloads.
- Websocket APIs are for real-time, two-way, stateful communication e.g., chat apps.


* RESTful APIs 
- REST stands for Representational State Transfer
- RESTful APIs are optimized for serverless and web applications
- They are stateless so nothing is persisted within the applications or API itself.
- RESTful APIs supports JSON (JavaScript Object Notation)

4. API Gateway provides a single endpoint for all client traffic interacting with the backend of you application.

5. So What API Gateway can do is

- to allow you to connect to applications running on Lambda, EC2, or Elastic Beanstalk and services like DynamoDB and Kinesis.
- to support multiple endpoints and Targets
- to support multiple versions of API so you can have different versions for your development, testing, and production environment.


## Create a New API


1. Failed to setup CORS with AWS Lambda and API Gateway (which was automatically created when configuring SAM template)

2. Created a new API which invokes the same the Lambda function

3. Tested the `GET` method, good response

4. Created `Resources` method named `myvisitor` and set it directly `enable CORS` to see if it works


5. Deployed the new API, and named the stage `prod`



WE NEED TO INSERT THE ENDPOINT URL OF OUR API GATEWAY INTO INDEX.HTML code so that when the user visits our website, it will call API Gateway and invoke our Lambda function.


