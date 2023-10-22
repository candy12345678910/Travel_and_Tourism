import axios from "axios";

const URL = 'http://localhost:8000';

export const AddUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
        console.log(data);
    }catch(error){
        console.log('Error While Add User', error);
    }
}
