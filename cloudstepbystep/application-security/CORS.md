## Cross-origin resource sharing (CORS)

- Under bucket's `Permissions`, scroll down to `Cross-origin resource sharing(CORS)
- Click `Edit`, paste the code in CORS file and paste it to the box


        [
            {
                "AllowedHeaders": [
                    "Authorization"
                ],
                "AllowedMethods": [
                    "GET"
                ],
                "AllowedOrigins": [
                    "http://alice-cloud-appyappy.s3-website-us-east-1.amazonaws.com"
                ],
                "ExposeHeaders": [],
                "MaxAgeSeconds": 3000
            }
        ]

