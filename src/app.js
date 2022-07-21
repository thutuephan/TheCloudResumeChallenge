// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */



exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Contr0l-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': '*',
                'Accept': '*/*',
                'Content-Type': 'application/json'
                // 'Accept': '*/*',
                // 'Content-Type': 'application/json'

                // 'Access-Control-Allow-Origins': 'https://alicezenmind.com',
                // 'Access-Control-Allow-Methods': 'GET',
                // 'Access-Control-Allow-Headers': 'x-apigateway-header',
                // 'MaxAge': 600,
                // 'AllowCredentials': true,
                // 'Accept': '*/*',
                // 'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                message: 'mother earth please save me from this madness!',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

