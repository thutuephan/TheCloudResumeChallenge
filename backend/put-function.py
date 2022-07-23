import boto3
import json


print('Loading function')
# resource: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Table.update_item

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('alice-resume-cloud2')

def lambda_handler(event, context):
    response = table.update_item(
        Key = {
            'ID': 'visitors'
        },
        UpdateExpression="SET #att = #att + :val1"
        ExpressionAttributeNames= {"#att": "Counts"}
        ExpressionAttributeValue={":val1": 1},
        ReturnValues="UPDATED_NEW"
    )

    numberOfVisits = response['Attributes']['visitor_count']
    return {
        'statusCode': 200,
        'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': '*',
                'Accept': '*/*',
                'Content-Type': 'application/json'       
                },

        'body': numberOfVisits
        # json.dumps({
        #     'message': 'hello mother earth',
            # 'location': ip.text.replace('\n','')
        },

        
    