const config = {
    api: 'http://localhost:1995',// proxy. ändra detta då det kan påverka deloy med heroku
    options: {
        headers: { 'content-type': 'application/json' },
    },
};

const getAllHamsters = () => {
    return fetch(`${config.api}/hamsters/`, {
            method: 'GET',
            ...config.options,
        })
        .then((response) => handleResponse(response))
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
};

const getHamster = (id) => {
    return fetch(`${config.api}/${id}`, {
            method: 'GET',
            //body: data ? JSON.stringify(data) : null,
            ...config.options,
        })
        .then((response) => handleResponse(response))
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
};



const postHamster = (data) => {
    return fetch(`${config.api}/hamsters/`, {
            method: 'POST',
            body: data ? JSON.stringify(data) : null,
            ...config.options,
        })
        .then((response) => handleResponse(response))
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
};


const updateHamster = (id, data) => {
    return fetch(`${config.api}/${id}`, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : null,
            ...config.options,
        })
        .then((response) => handleResponse(response))
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
};

const deleteHamster = (id) => {
    return fetch(`${config.api}/${id}`, {
            method: 'DELETE',
            ...config.options,
        })
        .then((response) => handleResponse(response))
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
};

const getRandomHamster = () => {
    return fetch(`${config.api}/random`, {
            method: 'GET',
            ...config.options,
        })
        .then((response) => handleResponse(response))
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
};

const handleResponse = (response) => {
    // You can handle 400 errors as well.
    if (response.status === 200) {
        return response.json();
    } else {
        throw Error(response.json() | 'error');
    }
};

export default { getAllHamsters, getHamster, postHamster, updateHamster, deleteHamster, getRandomHamster };