const BASE_URL = "http://localhost:8081";

const LOGIN = "/login";

const apiSettings = {
    login: async (userCreate) => {
        const endpoint = BASE_URL + LOGIN;
        return await (await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCreate)
        })).json();
    },
}