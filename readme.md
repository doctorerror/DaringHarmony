## HTTP Request Generator

### Description

This JavaScript module provides a function to generate HTTP requests using XMLHttpRequest. It allows you to specify the HTTP method, URL, headers, and body, and returns a Promise that resolves with the response data or rejects with an error message if the request fails.

### Usage

To use this module, include it in your JavaScript project and call the `generateHTTPRequest` function with the appropriate parameters:

1. **Parameters**:
   - `method`: The HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
   - `url`: The URL of the API endpoint.
   - `headers`: An object containing HTTP headers (optional).
   - `body`: The request body, typically a JSON string (optional).

2. **Example**:

```javascript
const method = 'GET';
const url = 'https://api.example.com/data';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
};
const body = JSON.stringify({ key: 'value' });

generateHTTPRequest(method, url, headers, body)
    .then(response => {
        console.log('HTTP Request Successful:', response);
    })
    .catch(error => {
        console.error('HTTP Request Failed:', error);
    });
