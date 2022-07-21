## Lambda function

### Break the function down

- Break down the existing lambda function into two parts
    - One which will add the values to the database 
    - Another one that's gonna get those values from the database

### Why do we do that

- When it comes to Lambda function, there're basically two architectural patterns that we can go down. 
- 1. One is monolithic function. What you're doing is you're putting all of your code into a single lambda deploy. The way that that works is that's going to root at the application level so requests are going to come in through the `Load Balancer` or `API Gateway`. They're going to hit the same endpoint. They're gonna hit the same lambda function and then at the start of the lambda there's going to be some logic like `if` condition, type of logic that says if this request goes here, this request goes there. 
- All of our code is bundled into one lambda and we can root like that.


- 2. the other is just having sort of smaller functions or micro functions where you have a lambda function or like the actual lambda infrastructure

- Per lambda per functionality (which is we're going to do in this project)
