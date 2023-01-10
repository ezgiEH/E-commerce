import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjgyYWUyMjUzZTE0YTI0M2UwMGEyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzM0NTgxOSwiZXhwIjoxNjczNjA1MDE5fQ.16HPoPDBaPOHBMOLwIr8ZPth83zG6HneZ0ve6C0-8iE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})