import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTcxNTU1LTEzZDgtNDM1Yy1iMTQxLTg4NTFjMDNlZjkzMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyNDk4MDU2NywiZXhwIjoxNzMzNjIwNTY3fQ.9W3boZJQfepteDbKKW0jCI9lqsPTc7pisjVdnQt3dlM`
    }
})
