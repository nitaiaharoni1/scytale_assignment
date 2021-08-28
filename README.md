# Scytale Home Assignment

## How to run?
In the root directory *scytale_assignment* just run *npm start*.

## Server Side
Built with *express typescript* and *MongoDB (mongoose)*.

Two routes:
* **GET** /prs
  Fetches a list of all existing pull requests.
* **POST** /prs
  Creates a new pull request.

### Pull Request Properties
Each PR should have the following properties:
- PR number.
- Title.
- Description.
- Author (full name).
- Status (Draft/Open/Closed).
- Labels.
- Creation Date.

## Client Side
Built with react typescript (with Vite), the client displays a list of all PRs fetched from the server.

There is an option for server-side filtering by clicking on the headers of the columns:
- PR status (Draft/Open/Closed).
- Labels.

There is an option to sort (asc/desc) clicking on the headers of the columns:
- PR number.
- Title.

The dashboard was designed as a table using MaterialUI Data-Grid.
