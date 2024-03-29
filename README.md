# Workbook with JSON

This project is a workbook application built with React that allows users to manage and answer questions stored in a JSON file. Questions are grouped by categories, and users can edit or add answers to each question.
## Getting Started

This project was bootstrapped with Create React App.
## Available Scripts

In the project directory, you can run:
### npm start

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
### nodemon App.js

Alternatively, if you are working in the ./frontend directory, you can use nodemon to start the development server. This command also reloads the server when changes are made.
Functionality

    Display unanswered questions grouped by categories in tabs.
    Ability to edit or add answers to questions.
    Save answers in the same JSON format as the questions.

## Example Question

#### json
{
    "id": 3,
    "category": "functional patterns",
    "question": "What is the difference between `let` & `var`?",
    "answer": ""
}

## Installation

    1.Clone this repository to your local machine.
    2.Open a terminal and navigate to the project directory.
    3.Run npm install to install the required dependencies.

## Usage

    1.After installing dependencies, start the application with npm start.
    2.Alternatively, if you are in the ./frontend directory, you can use nodemon App.js.
    3.Once the application is running, unanswered questions will be displayed in tabs grouped by categories.
    4.Click on the tabs to view questions in each category.
    5.Edit or add answers by clicking on a question and entering your response.
    6.Click "Save" to store your answer.

Contributors

    AdrianMonemi
