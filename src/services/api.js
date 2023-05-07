import axios from "axios";

const apiKey = 'nXcqgTjPL69FTZyrPGj8Ah831G2niLMSU63LtEysWYMz9gPdd2p6s5pZ946mBolasxzXXxS';
const baseUrl = 'http://localhost:7023';


function CreateCustomer(){
    
}

const api = axios.create({
    apiKey: `${apiKey}`,
    baseURL: '',
});

export default CreateCustomer