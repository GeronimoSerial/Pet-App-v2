export class User {
    email: string;
    token: string;
}


export interface UserRegister {
    username: string,
    password: string,
    name: string,
    lastname: string,
    birthday: Date

}


export interface UserLogin{
    username: string;
    password: string;
}


