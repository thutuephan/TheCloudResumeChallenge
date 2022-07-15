[
    {
        "AllowedHeaders": [
            "Authorization"
        ],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "<url of first bucket with http://...without slash at the end>"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]

// exports.handler = async (event) => {
//     const response = {
//         statusCode: 200,
//         headers: {
//             "Access-Control-Allow-Headers" : "Authorization",
//             "Access-Control-Allow-Origin": "http://...website.s3-website-us-east-1.amazonaws.com",
//             "Access-Control-Allow-Methods": "GET"
//         },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };