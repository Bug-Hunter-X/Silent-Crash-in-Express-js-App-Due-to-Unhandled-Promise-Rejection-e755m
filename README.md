# Silent Crash in Express.js App Due to Unhandled Promise Rejection

This repository demonstrates a common but easily overlooked error in Express.js applications:  unhandled promise rejections in asynchronous route handlers.  When an asynchronous operation within a route throws an error and isn't properly caught, the entire Express application can crash without any clear indication of the problem.

## The Bug
The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation.  This operation can fail, resulting in a promise rejection.  However, the error handling is insufficient to prevent the application from crashing.

## The Solution
The `bugSolution.js` file presents a corrected version of the application.  It demonstrates proper error handling using a `.catch` block within the promise chain to gracefully handle errors and prevent application crashes.

## How to reproduce the bug
1. Clone the repository
2. Navigate to the directory
3. Run `node bug.js`
4. Refresh several times.  Eventually, the server will crash due to an unhandled promise rejection.

## How to run the solution
1. Clone the repository
2. Navigate to the directory
3. Run `node bugSolution.js`
4. The application now handles errors gracefully and won't crash.