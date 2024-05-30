import {create} from 'apisauce';

const apiClient = create({
    baseURL: 'https://demandapi-sandbox.booking.com/3.1/accommodations/details'
});

apiClient.get('/extras').then(response => {
     if(!response.ok){
        response.problem
     }
});

export default apiClient;

