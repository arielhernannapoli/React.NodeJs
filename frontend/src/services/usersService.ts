import { getURLs } from "../utils/configuration";
import { UserModel } from '../models/userModel';

export const me = async (data: UserModel) => {
    const response = await fetch(getURLs().UsersMe, {
        method: 'GET',        
        headers: {
            'Authorization': '',
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}