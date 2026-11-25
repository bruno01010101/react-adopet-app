export interface IPet {
    id: string;
    name: string;
    age: string;
    details: string;
    location: string;
    description?: string; // torna o parametro opcional
    image: string | undefined; // torna o parametro opcional
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone?: string;
    city?: string;
    about?: string;
}