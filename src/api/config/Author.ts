import ApiClient from "@/api/config/ApiClient";
import {RegisterResponseType} from "@/types/api/Auth";


 interface RegisterData {
     username: string;
     password: string | number;
     email: string;
 }


interface LoginData {
   identifier: string;
    password: string | number;
}

export function registerApiCall(data: RegisterData): Promise<RegisterResponseType> {

    return  ApiClient.post('/auth/local/register', data)
}


export function loginApiCall(data: LoginData): Promise<RegisterResponseType> {

    return  ApiClient.post('/auth/local', data)
}