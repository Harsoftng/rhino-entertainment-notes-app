<p align="center">
  <a href="https://rhinoentertainmentgroup.com/" target="blank"><img src="https://rhinoentertainmentgroup.com/wp-content/uploads/2018/06/white-horizontal.png.webp" width="120" alt="Nest Logo" /></a>
</p> 

## Note to the team

Dear Rhino Entertainment Team,

Thank you once again for the opportunity to complete this assessment and showcase my skills. I truly appreciate the
four-hour time frame provided, though I found it a bit limiting to fully implement all the features I had envisioned. I
hope, however, that my submission effectively demonstrates my capabilities and expertise.

I apologize for exceeding the allotted time by about 40 minutes to finalize this documentation. Given more time,
I would have incorporated additional enhancements such as unit/e2e tests, authentication, authorization, pagination to optimize response
times and handle large volumes of notes, SSL implementation for improved security, and more.

Once again, I sincerely appreciate this opportunity. Below, you will find the setup instructions for the application.


## Description

A minimalistic Notes application in a monorepo consisting of a backend API and a
frontend interface that allows users to add and view notes.
Required Tech stack:
- NestJS
- TypeScript
- Redis / PostgreSQL to save data in (whichever you prefer)
- React
- Docker

#### Features:

- Add Notes
- Edit Notes
- View Notes
- Delete Notes


## Project setup


### Prerequisites

- Docker
- Make: Run `brew install make` on MacOs to install the Make program. The make program will make the installation easy
  and less stressful.


## Setup with make
Run the following command from the root directory to setup the application.

```bash
$ make setup-local
```

## Manual Setup
Run the following commands from the root directory to setup the application.

### Setup environment
```bash
$ rm -rf .env
$ rm -rf ./packages/notes-app/.env
$ rm -rf ./packages/notes-backend-api/.env
$ cp .env.dist .env
$ cp ./packages/notes-app/.env.dist ./packages/notes-app/.env
$ cp ./packages/notes-backend-api/.env.dist ./packages/notes-backend-api/.env
```

### Install and launch application
```bash
$ docker-compose up -d
$ yarn install
$ yarn setup:db:seed
$ yarn dev
```

## Open the app in a browser
- Launch your favorite browser
- Enter `http://localhost:3000` to open the notes app
- The backend runs on port 8080 at `http://localhost:8080`
 


#### Thanks and best regards