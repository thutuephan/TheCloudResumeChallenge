
- [AWS-CloudFront](#aws-cloudfront)
- [CloudFront-Origins](#cloudfront---origins)
- [CloudFront-At-A-High-Level](#cloudfront-at-a-high-level)

## AWS CloudFront

- Content Delivery Network (CDN)
- Improves read performance, content is cached at the edge
- 216 Point of Presence globally (edge locations)
- Gives us DDoS protection which is to protect against attacks that are Distributed Denial of Service, integration with Shield, AWS Web Application Firewall
- Allow us to expose external HTTPS and can talk to internal HTTPS backends

## CloudFront - Origins

1. S3 bucket:

- We would use CloudFront in front of S3 bucket as a very common pattern to distribute our files globally and cache them at the edge
- We can also get enhanced security with CloudFront Origin Access Identity (OAI). This allows S3 bucket to only allow communication from CloudFront and from nowhere else.
- We can use CloudFront as an ingress (to upload files into S3 from anywhere in the world.)

2. Custom Origin (HTTP)

There must be an HTTP endpoints, so it could be anything that respects the HTTP protocol. Such as, 
- Application Load Balancer
- EC2 instance
- S3 website (must first enable the bucket as a static S3 website)
- Or it could be any HTTP backend we want.

## CloudFront At A High Level

How it works at a high level

- A bunch of edge locations all around the globe and they're connected to the origin. It could be an S3 bucket or any HTTP endpoints. Clients want to access our CloudFront distribution

- The Client will send an HTTP request directly into CloudFront.
- The request will be a URL, some query string parameters and there will be some headers.
- The edge location will forward the request to your origin that includes the query strings and headers, then your origin (S3 or HTTP) responds to the edge location.
-The edge location will cache the response based on the cache settings we've defined and return back to the client.
- The next time another client makes similar request, the edge location will first look into the cache before forwarding the request to the origin. 










