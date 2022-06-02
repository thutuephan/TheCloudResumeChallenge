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
    - in Windows Power Shell, run `cd cloud-resume-challenge`
    - then run `sam build`
    - build succeeded
    



### Source Control

### CI/CD (Back-end)

### CI/CD (Front-end)

http://mybucketaws-resume-46531321.s3-website-us-east-1.amazonaws.com


