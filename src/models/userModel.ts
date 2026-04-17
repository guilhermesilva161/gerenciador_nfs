export interface CreateUserDTO{
    username:string;
    password:string;
    roleId:number; 
    operId:number | null
}