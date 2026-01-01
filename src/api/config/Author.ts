import ApiClient from "@/api/config/ApiClient";
import {RegisterResponseType} from "@/types/api/Auth";


 interface Data {
     username: string;
     password: string | number;
     email: string;
 }

export function registerApiCall(data: Data): Promise<RegisterResponseType> {

    return  ApiClient.post('/auth/local/register', data)
}