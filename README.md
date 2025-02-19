# Node.js Express Server Hang on Long Requests

This repository demonstrates a common issue in Node.js Express servers where long-running requests can cause the server to appear unresponsive or hang.  The problem arises when a request takes longer than the default timeout setting, leading to a stalled connection.

## Bug Description

The provided `bug.js` file shows a simple Express server with a route that simulates a long-running task using `setTimeout`. If this task takes longer than the server's default timeout, the connection hangs.  The solution addresses this by explicitly setting a timeout for the response.

## Solution

The `bugSolution.js` file presents the corrected code with a timeout set using `res.setTimeout`. This ensures the response is sent or an error is generated after a specified time, preventing the server from hanging. 