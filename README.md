# DevelittLogin(Backend)

An application developed to store use Data to log in on a mobile application using email and password, after the first login and if the user wants to, it is possible to use the fingerprint(Android) or FaceID (IOS). The main goal for this project is to train the whole application making process, including requisites, UX development, backend in node (Express), and frontend using React Native, these kinds of applications are good for studying new library and in this case, I used LocalAuthentication from Expo.

# Requiriments
1. Docker
2. Yarn
3. Node

# Database
Create postgres container at Docker
Example: docker run --name devlogin -e POSTGRES_PASSWORD=docker -e POSTGRESQL_USERNAME=postgres -p 5432:5432 -d postgresql

Make the migration process to the Database
yarn typeorm migration:run

# Installation 
Install all the dependencies with: yarn

# Running the app
run: yarn dev


