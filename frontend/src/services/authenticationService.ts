import { getURLs } from "../utils/configuration";
import { AuthenticationModel } from '../models/authenticationModel';

export const signUp = async (data: AuthenticationModel) => {
    const response = await fetch(getURLs().AuthenticationSignUp, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

export const signIn = async (data: AuthenticationModel) => {
    const response = await fetch(getURLs().AuthenticationSignIn, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

export const logOut = async (data: AuthenticationModel) => {
    const response = await fetch(getURLs().AuthenticationLogOut, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}
