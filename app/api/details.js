import apiClient from "./client";

const endpoint = '/extras';

const getDetails = () => apiClient.get(endpoint);

export default {
    endpoint:[
        "photos",
        "policies",
    ],
};