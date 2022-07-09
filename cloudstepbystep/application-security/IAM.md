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

3. AWS CLI configure
- in the command promt, 
    - typed `aws configure`
    - entered aws access key id, acces secret key, and region name
    - default output format[json]
- In order to check to see how it works, type in `aws iam list-users`. It will list all the users in my account



