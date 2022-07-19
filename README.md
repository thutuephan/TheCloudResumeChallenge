# TheCloudResumeChallenge-AWS


### This resume should be written in HTML and styled with CSS. 
 This HTML resume is deployed online as an Amazon S3 static website using HTTPS for security (Amazon ClouFront helps this), points a custom DNS domain name to the Cloud Front distribution.

### JavaScript

### Use Amazon DynamoDB for the database

### Create an API  that accepts requests from the web app and communicates with the database

### Test

### Infrastructure as Code - AWS SAM
1. Set up SAM CLI

    - install the AWS SAM CLI, verify the installation `sam --version`
    - run `sam init`
    - select `zip`, choose an AWS Quick Start application template `1-Hello World Example`
    - don't select enable X-Ray tracing o the function in the application (otherwise will be charged)
    - project name, cloning from https://github.com/aws-sam-cli-app-templates (process may take a moment)
    - in Windows Power Shell, run `cd cloud-resume-challenge` (in order to build successfully, python version had to match with the runtime of app which is python3.9) => downloaded from Microsoft Store)
    - then run `sam build`
    - build succeeded

2. Add permissions for SAM
    - AWSAPIGateway
    - AWSLambdaFullAccess
    - IAMFullAccess
    - AWSCloudFormationFullAccess

3. Deploy SAM



    



### Source Control

### CI/CD (Back-end)

### CI/CD (Front-end)




## (07-12-2022) Day 1 of Re-building everything)

1. SAM build, SAM deploy successfully! Thanks goodness!

- In Powershell, run `sam init` follow instructions either by Lou or on the command screen.

2. Stacks were built successfully in `CloudFormation/Stacks`

3. S3 bucket, Lambda Function, and ApiGateway were built and deployed as well.

Great job!

## (07-12-2022) Day 2

1. Created bucket policy

2. Deployed HTML & CSS file to S3 bucket

3. Created Amazon S3 static website 

4. Created `Distribution` in CloudFront

5. Registered a new domain name in Route 53

6. Secured the website by setting up HTTPS and ACM

7. Webiste is up and running

## Day 3

8. API Gateway 
9. Lambda function

## Day 4

10. Error and Troubleshooting

## Day 5

11. Created DynamoDB database

The visitor counter will need to retrieve and update its count in a database.

## Day 6

### New Issues

1.  Issue #1: could not update contents in S3 bucket were udpated, yet not reflecting in the website.

- Solution: Create an invalidation in CloudFront with the Object Paths as `/*`.

- The issue was still not solved

- A different approach: Updated and Deployed the current CloudFront Distribution, with another `Alternative Domain Name`

- Result: The website endpoint is updated, distribution domain name `...cloudfront.net` is therefore updated as well. However, another issue was discovered.

2. Issue #2: When clicking on `alternative domain name` and `registered domain name`, the website couldn't be accessed.

- Solution: 

    - requested a new certificate which included 2 domains
    - attached the new certificate to the new cloudfront distribution
    - under `custom SSL certificate`, point to the one was last created.

- Result: the website can be accessed on both custom domain and main domain.

### API Gateway CORS 

![aws-apigateway-config]()

- The CORS issue was finally resolved. There were nothing wrong with the steps taken before (modified lambda handler function in app.js, `actions` -> `enable CORS`).

- The resource was actually configured for CORS but somehow it kept showing errors `Add Access-Control-Allow-Headers` and so on. 

- Tested the response of the website in Chrome dev tools, everything worked. 