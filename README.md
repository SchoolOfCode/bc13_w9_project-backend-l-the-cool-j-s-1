# API planning request for Weekly review

## Description

This app aims to help people prepare for interviews in the tech industry. This app will have a list of questions that will be randomly selected and displayed to the user.

## API request

| API request           | Description           | API response | Description           |
| --------------------- | --------------------- | ------------ | --------------------- |
| GET /questions        | Get all questions     | 200          | OK                    |
| GET /questions/:id    | Get a question by id  | 201          | Created               |
| POST /questions       | Create a new question | 400          | Bad request           |
| PUT /questions/:id    | Update a question     | 404          | Not found             |
| DELETE /questions/:id | Delete a question     | 500          | Internal server error |

## API request body

| API request body | Description |
| ---------------- | ----------- |
| id               | Question id |
| question         | Question    |
| answer           | Answer      |

## API request example

| API request example | Description           |
| ------------------- | --------------------- |
| GET /questions      | Get all questions     |
| GET /questions/1    | Get a question by id  |
| POST /questions     | Create a new question |
| PUT /questions/1    | Update a question     |
| DELETE /questions/1 | Delete a question     |

# API planning request for Random Interview question

## Description

This app aims to help people prepare for interviews in the tech industry. This app will have a list of questions that will be randomly selected and displayed to the user.

## API request

| API request           | Description           | API response | Description           |
| --------------------- | --------------------- | ------------ | --------------------- |
| GET /questions        | Get all questions     | 200          | OK                    |
| GET /questions/:id    | Get a question by id  | 201          | Created               |
| POST /questions       | Create a new question | 400          | Bad request           |
| PUT /questions/:id    | Update a question     | 404          | Not found             |
| DELETE /questions/:id | Delete a question     | 500          | Internal server error |

## API request body

| API request body | Description |
| ---------------- | ----------- |
| id               | Question id |
| question         | Question    |

## API request example

| API request example | Description           |
| ------------------- | --------------------- |
| GET /questions      | Get all questions     |
| GET /questions/1    | Get a question by id  |
| POST /questions     | Create a new question |
| PUT /questions/1    | Update a question     |
| DELETE /questions/1 | Delete a question     |
