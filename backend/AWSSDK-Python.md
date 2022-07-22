## Install the AWS SDK for Python Boto3

1. Installation

- Run Command Prompt as Administrator, and run the following commands to install boto3
    - `python`
    - `pip install boto3`
    - successfully installed `boto3-1.24.35 botocore-1.27.35`

2. Using `boto3`

- In the Command Prompt run:

    - `python`
    - `import boto3`
    - `s3 = boto3.resource('s3')`
    - `for bucket in s3.buckets.all():
...     print(bucket.name)`

- A list of s3 buckets will be displayed in the terminal

