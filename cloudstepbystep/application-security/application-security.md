Table of Contents

- [IAM](#iam)
- [AWS-CLI-Configuration](#aws-cli-configuration)
- [AWS-SAM-CLI](#aws-sam-cli)
- [Snippets](#snippets)

### IAM 

1. Create an IAM user from the root account
- create a new user (with alias account)
- create a new group called `admin` and add new user to the group with permission `AdministratorAccess`. It will cause an error if we do not have this. 

- assign permissions: 
    - IAMFullAccess
    - AmazonS3FullAccess
    - IAMCloudFormationFullAccess
    - AWSLambdaFull_Access
    - APIGatewayAdministrator


2. AWS CLI installation

- It was already installed.
- To be sure it was fully installed, opened Command Prompt and typed `aws --version`:
`aws-cli/2.7.11 Python/3.9.11 Windows/10 exe/AMD64 prompt/off`

### WS CLI configure
- in the command promt, 
    - typed `aws configure`
    - entered aws access key id, acces secret key, and region name
    - default output format[json]
- In order to check to see how it works, type in `aws iam list-users`. It will list all the users in my account


### AWS SAM CLI 

1. Install the AWS SAM (Serverless Application Model) CLI 64-bit

2. Verify the installation
    - `sam --version`

3. Run `sam init`

4. Error run into while trying to setup AWS SAM CLI:
- error number 1 (pic1)

Error occured while cloning from https://github.com/aws/aws-sam-cli-app-templates

- error number 2 (pic2)
A lot of people had the same issue and someone on stackoverflow pointed out the where it went wrong. That was because there was a space between AWS and SAM in the path:

    `Cloning from https://github.com/aws/aws-sam-cli-app-templates (process may take a moment)
    Error: Unstable state when updating repo. Check that you have permissions to create/delete files in C:\Users\alice\AppData\Roaming\AWS SAM directory or file an issue at https://github.com/aws/aws-sam-cli/issues`

To fix this, run this command:

    `sam init --location "C:\Users[your_user_name]\AppData\Roaming\AWS SAM\aws-sam-cli-app-templates\python3.9\cookiecutter-aws-sam-hello-python"`

This time, a different error occured after filling out the app name. It required to put in `runtime [python3.9]` and `architectures[]` which I did not know what to type in.

- It looks like my local user doesn't have permissions for SAM to write those files/directory I'm in. 
- Try altering the permissions of my user on the system, maybe running the command with elevated permissions (like run as administrator on powershell???!!!). I know almost nothing of Windows / Windows admin

### Sinppets

#### SAM error #1
![sam-cli-error-1](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/aws-sam-error-1.png)

### SAM error #2
![sam-cli-error-2](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/aws-sam-error2.png)


