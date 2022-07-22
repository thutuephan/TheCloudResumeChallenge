## Capacity Mode

I used `on-demand` pricing for the database for this project

## DynamDB

### Intro
- It is a NoSQL Serverless Database 
- NoSQL databases do not support query joins (or just limited support)
- All the data that is needed for a query is present in one row in database
- NoSQL databases don't perform aggregations such as "SUM", "AVG",...
- NoSQL databases scale horizontally (meaning if we need more write or read capacity, we can just have more instances and it will scale really well)

- Amazon DynamoDB is fully managed, high available with replication across multiple AZs.

- Scales to massive workloads, distributed database
- It scales millions of requests per seconds, trillions of row, 100s of TB of storage
- Fast and consistent in performance (low latency on retrieval)
- It is a service that is fully integrated with IAM for security, authorization and administration and administration
- Standard & Infrequent Access (IA) Table Class for different Tiers

### DynamoDB Structure

- DynamDB is made of Tables
- Each table has a Primary Key (must be decided at creation time)
- Each table can have an infinite number of items (rows)
- Each item has attributes (can be added over time / can be null)


## Template

    DynamoDBTable:
        Type: AWS::DynamoDB::Table
        Properties:
            TableName: alice-cloud-resume
            BillingMode: PAY_PER_REQUEST
            AttributeDefinitions:
                - AttributeName: "ID"
                  AttributeType: "S"
            KeySchema:
                - AttributeName: "ID"
                  KeyType: "HASH"

