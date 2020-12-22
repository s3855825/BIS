import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://groupmakercollab.herokuapp.com/'
})

export default apiClient;