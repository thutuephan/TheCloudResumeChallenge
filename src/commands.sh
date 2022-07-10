# create an s3 bucket
aws s3 mb s3://alice-code-sam

# package cloudformation, and we need to specify the s3 bucket that we're in  the file 
aws cloudformation package --s3-bucket alice-code-sam

#then we need to specify the template file we have, and the output of template file
aws cloudformation package --s3-bucket alice-code-sam --template-file template.yaml --output-template-file gen/template-generated.yaml

# so that is my transform cloudformation template

# aws cloudformation package --s3-bucket alice-code-sam --template-file TheCloudResumeChallenge/src/template.yaml --output-template-file gen/template-generated.yaml