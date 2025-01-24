## Getting Started

`Node v20`

###### `.env` File Setup:

1. Create `.env` at the root of the project
2. Add two new variables called `DATABASE_URL` and `PORT`
3. Set the first variable to your database connection string and choose a port to run the server on
4. Ex: `DATABASE_URL="mysql://USERNAME:PASSWORD@HOST/DATABASE_NAME`
   `PORT=3001`

> NOTE: Make sure your mySql server is running you can check with MYSQL WORKBENCH

##### PRISMA Setup To Initialize Database:

First Run:

```bash
 npx prisma migrate dev --name init
```

Then Run:

```bash
npx prisma generate
```

##### After successful database setup:

Run on of the following command to start the dev server:

```bash
npx ts-node src/server.ts
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.
