function generateHTTPRequest(method, url, headers, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
        // Set headers
        if (headers) {
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });
        }

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function() {
            reject(xhr.statusText);
        };

        xhr.send(body);
    });
}

// Example usage:
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
