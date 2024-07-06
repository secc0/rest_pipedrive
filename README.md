# REST API for Pipedrive
This project is a simple REST API built with Node.js and Express that interacts with the Pipedrive API to fetch deal and product information. The API fetches data from Pipedrive and returns structured client data including the deal creator's email, name, product names, and product prices.

## Project Structure
The project has the following structure:

```
node_modules/
src/
  ├── config/
  │   └── axios.js
  ├── service/
  │   ├── getDeal.js
  │   ├── getProduct.js
  ├── app.js
  └── server.js
.env
.gitignore
package-lock.json
package.json
```
File Descriptions
src/config/axios.js: Contains the configuration for Axios, a promise-based HTTP client for making requests to the Pipedrive API.
src/service/getDeal.js: Defines the function to fetch deal details from the Pipedrive API.
src/service/getProduct.js: Defines the function to fetch product details associated with a deal from the Pipedrive API.
src/app.js: Sets up the Express application, defines the API endpoint, and handles the main logic for fetching and structuring the client data.
src/server.js: Starts the Express server and listens on a specified port.
.env: Contains environment variables, including the API token and port number.
.gitignore: Specifies files and directories to be ignored by Git.
package-lock.json: Automatically generated file that contains the dependency tree.
package.json: Lists the project dependencies and scripts.
Setup Instructions
Clone the Repository:

```
git clone <repository_url>
cd rest_api_pipedrive
```

## Install Dependencies:

```
npm install
```
## Environment Variables:
Create a .env file in the root directory and add your Pipedrive API token and the port number:

## Env:
```
TOKEN=your_pipedrive_api_token
PORT=port
```
## Run the Server:

```
npm start
```
