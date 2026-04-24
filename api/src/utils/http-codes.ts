import { HttpCode } from "../models/httpModel"

export const ok = async (data:any): Promise<HttpCode> => {

    return {

        statusCode:200,
        body:data

    }
}

export const noContent = async (): Promise<HttpCode> => {

    return {

        statusCode:204,
        body: null

    }
}

export const badRequest = async (): Promise<HttpCode> => {
    return{
        statusCode:400,
        body:null
    }
}

export const created = async (): Promise<HttpCode> =>{
    return{
        statusCode:200,
        body:{
            message:"sucesseful",
        }
    }    
}