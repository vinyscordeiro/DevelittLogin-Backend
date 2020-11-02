# DevelittLogin-Backend
Application developed to storage use Data to login on a mobile application using email and password, after the first login and if the user want to it is possible to use the fingerprint(Android) or FaceID (IOS). The main goal for this project is to train the the hole application making process, including requisites, UX development, backend in node (Express) and frontend using React Native, this kinds of applications are good for studing new librarys and in this case i used LocalAuthentication from Expo.  

# Requeriments
1. docker
2. yarn
3. node

# Database
Create postgres container at Docker
Example: docker run --name devlogin -e POSTGRES_PASSWORD=docker -e POSTGRESQL_USERNAME=postgres -p 5432:5432 -d postgresql

Make the migration process to the Database
yarn typeorm migration:run

# Installation 
Install all the dependencies with: yarn

# Running the app
run: yarn dev


