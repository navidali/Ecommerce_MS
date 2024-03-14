
# B2B Ecommerce Platform

This repository contains the codebase for a scalable and modular microservice-based ecommerce platform. It includes 3 backend services and a frontend. Tested and deployed on AWS incorportating Lambda, SQS, SNS, Cloudformation.



## Features

- User Management: User registration, profile management, and authentication/authorization.
- Seller Program: Allow users to easily list/manage products they wish to sell.
- Product Catalog: Manage and browse through a wide range of products across different categories.
- Shopping Cart: Users can add/remove/edit items to/from their shopping cart.
-  Checkout: Seamless checkout process with support for various payment methods through Stripe.
- Containerized Deployment: Utilize Docker containers to manage persistent data for PostgreSQL databases.
- AWS Integration: Leverage both AWS CDK and Serverless framework to create Lambda functions for scalable cloud deployment.





## Tech Stack

**Client:** React, Typescript

**Backend:** Typescript, Serverless Framework, AWS CDK, PostgreSQL, MongoDB Atlas, Docker, AWS (Lambda, SNS, SQS, EC2, API Gateway,CloudFormation, CloudWatch)

**Testing:** Table Plus, Postman, Serverless Offline


## Getting Started

1. Clone the repository:

```bash
    yarn install ecommerce-ms
    cd ecommerce-ms
```

2. Install the dependencies for each microservice:
```bash
    cd <microservice-name>
    yarn install
```

3. Start Docker Containers for User and Transaction Service:

```bash
    cd <microservice-name>
    make start_db
```

4. Edit ```.env``` file within user-service and the db-connection.ts file within product_service under utility.

5. Create the Database migrations for both user-service and transaction-service:
```bash
    cd <microservice-name>
    make migrate
```

6. Now run both user-service and buysale locally from the terminal:
```bash
    cd user-service
    yarn run dev

    cd buysale
    yarn run start
```
7. To deploy on AWS have a EC2 container running (note this will charge your AWS account). Then for each service edit prod values within ```database.json``` if available and also the database client files under ```utility```. Lastly edit the ```AppConst.ts``` file in the buysale service with the deployed API Gateway path on AWS and run buysale locally.