function generateHTTPRequest(method, url, headers, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
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

function generateHTTPRequest2(method, url, headers, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
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

const method2 = 'POST';
const url2 = 'https://api.example.com/data2';
const headers2 = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
};
const body2 = JSON.stringify({ key: 'value' });

generateHTTPRequest2(method2, url2, headers2, body2)
    .then(response => {
        console.log('HTTP Request Successful:', response);
    })
    .catch(error => {
        console.error('HTTP Request Failed:', error);
    });

function generateHTTPRequest3(method, url, headers, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
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

const method3 = 'PUT';
const url3 = 'https://api.example.com/data3';
const headers3 = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
};
const body3 = JSON.stringify({ key: 'value' });

generateHTTPRequest3(method3, url3, headers3, body3)
    .then(response => {
        console.log('HTTP Request Successful:', response);
    })
    .catch(error => {
        console.error('HTTP Request Failed:', error);
    });
