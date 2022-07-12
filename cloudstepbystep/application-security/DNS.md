## Table of Contents

- [What-is-DNS](#what-is-dns)
- [DNS-Terminologies](#dns-terminologies)
- [Amazon-Route-53](#amazon-route-53)
- [Register-A-Domain-Name](#register-a-domain-name)
- [Certificate](#certificate)
- [Create-Record](#create-record)
- [Apply-Certificate-to-CLF](#apply-certificate-to-clf)

## What is DNS

- Domain Name System which translates the human friendly hostnames into the machine IP addresses.

- For example: `www.google.com` => `172.217.18.36`

- DNS is the backbone of the Internet
- DNS uses hierarchical naming structure 

## DNS Terminologies

- Domain Registrar: Amazon Route 53, GoDaddy,...
- DNS Records: A, AAAA, CNAME, NS, ...
- Zone File: contains DNS records
- Name Server: resolves DNS queries (Authoritative or Non-Authoritative)
- Top Level Domain (TLD): .com, .us, .in, .gov, .org, ...
- Second Level Domain (SLD): amazon.com, google.com, ...

        http://api.www.example.com.

- The last dot at the end is called the root, and is the root of all the domain names.

## Amazon Route 53
1. 
- It is a highly available, scalable, fully managed and Authoritative DNS 
- Authoritative = the customer can update the DNS records

- Route 53 is also a Domain Registrar

- It has the ability to check the health of your resources
- The only AWS service which provides 100% availability SLA.
- 53 is a reference to the traditional DNS port used by DNS services.

2. Records

- The records define how you want to route traffic for a domain.
- Each record contains a lot of information:
    - Domain/subdomain Name - e.g., example.com
    - Record Type - e.g., A or AAAA
    - Value - e.g., 12.34.56.78
    - Routing Policy - how Route 53 responds to queries
    - TTL - amount of time the record cached at DNS Resolvers

3. Record Types

- `A` - maps a hostname to IPv4
- `AAAA` - maps a hostname to IPv6
- `CNAME` - maps a hostname to another hostname
- NS - Name Servers for the Hosted Zone: Control how traffic is routed for a domain

3.1. Hosted Zones

- A container of records that define how to route traffic to a domain and its subdomains
- Public Hosted Zones - contains records that specify how to route traffic on the Internet (public domain names)
- Private Hosted Zones - contain records that specify how you route traffic within one or more VPCs. They are not public available and only you within your own virtual private cloud or VPC can resolve this URL.

## Register A Domain Name

- Registered a domain name successfully through Route 53

## Certificate

- Got to Certificate
- Select Certificate Managers
- Request a certificate for the newly registered domain name
- Wait for this request to be done and then attach it to the cloudfront

- After 24 hours waiting, my domain's SSL certificate (Secure Sockets Layer) is finally validated.

![aws-ssl-cert](https://github.com/thutuephan/TheCloudResumeChallenge/blob/main/assets/images/aws-images/aws-domain-certificate.png)


## Next steps to take

1. attach the cert to  cloudfront distribution
2. let route 53 create a hosted zone for us
3. create record set to point to cloudfront dis.
4. create record hosted zone for 
5. point the custom domain name to cloudfront distribution


## Create record

- (while still waiting for the certificate to be validated)
- In Certificate console, select the Certificate ID
- In the Domain section, click `Create Records in Route 53`

- To check to see if it the record was created successfully, go to Route 3, under Hosted zone, the new record will be shown with the record name, type and value...

## Apply Certificate to CLF

- In order to attach our SSL certificate to CloudFront distribution, go to CloudFront
- Under `Distribution`, select `ID`
- Edit settings, click edit
- Under `Custom SSL certificate` choose SSL certificate => `save changes`

## Create A Record

- Go to CloudFront - Distribution
- In `Alternative Domain Names (CNAMES)` enter the alternative domain name (found in Route53- Hosted zones- CNAMES). In my case, I accidently have the custom domain name and alternative domain name with the same name. 

- save changes

- copy the  distribution domain name`(endpoint), go to Route 53/Hosted zones, click `create record`:

        record name: fillin sub domain
        record type: A - ROutes traffic to an IPv4 address and some AWS resources

        Select Alias, Choose endpoint: Alias to CloudFront distribution

        Choose distribution: (endpoint)


=> create A record

