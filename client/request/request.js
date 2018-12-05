import 'whatwg-fetch'

function request(method, url, body) {
    method = method.toUpperCase()
    let headers = {}
    if(method === 'GET') {
        body = undefined
    }else {
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        body = body && JSON.stringify(body)
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body
    }).then((res) => {
        return res.json()
    }).catch(err => {
        return err
    })
}

export const get = path => request('GET', path)
export const post = (path, body) => request('POST', path, body)
