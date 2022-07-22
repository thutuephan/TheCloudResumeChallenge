import boto3
import json


print('Loading function')

def lambdaHandler(event, context):
    return {
        'statusCode': 200,
        'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': '*',
                'Accept': '*/*',
                'Content-Type': 'application/json'       
                },

        'body': json.dumps({
            'message': 'hello mother earth',
            # 'location': ip.text.replace('\n','')
        }),

        
    }