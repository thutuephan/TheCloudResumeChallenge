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




