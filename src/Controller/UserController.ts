import axios, { AxiosResponse } from 'axios';

export async function UserRegister(url: string, data: any): Promise<AxiosResponse<any>> {
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

export async function login(url: string, data: any): Promise<AxiosResponse<any>> {
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        if (error) {
            return error.response;
        } else {
            throw error;
        }
    }
}
