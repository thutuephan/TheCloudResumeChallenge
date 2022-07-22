## CI/CD (Front end) - CloudFront Distribution Invalidation

- Goal: when I push new website code, the S3 bucket automatically gets updated. 

- Method: to invalidate the CloudFront cache by creating a distribution invalidation with the path `/` or `/*` or a specific path for each file

- Issue: I did that step yet my website didn't update new content even though the S3 bucket's content was updated from my code.

- Reason: I needed to redirect HTTP to HTTPs under `Behaviors`.

![cloudfront-behavior](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/aws-cloudfront-invalidation.png)

- Solutions: 
    - Created a behavior with Viewer protocol policy is `Redirect HTTP to HTTPS`, and Path pattern is `*`
    - Created an invalidation `/*`

- Result: Problem solved


