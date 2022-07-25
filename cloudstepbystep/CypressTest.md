## Cypress Test

### Intro

An end-to-end or smoke test is run after your API gets deployed. It uses the real, live URL of your API and makes sure that it provides the expected responses to a test call. This indirectly verifies that

1. your Lambda code is working as expected,

2. permissions and other config are correct between your gateway, your function, and your database, and 

3. all your resources have been deployed successfully.

An excellent for running smoke tests is called Cypress. It is a JavaScript testing framework that lets you call your API endpoint just like the JavaScript code in your front-end app is doing. 

Things to check in this smoke test:

- Make sure your API not only returns an updated value to you, but actually updates the database

- Make sure your API responds to unexpected input correctly; what if the inbound request is not formatted the right way?

- Make sure you are checking edge cases in your funciton logic. What happens if the visitor count is not initialized?

### Installation

    `npm install cypress --save-dev`

    