export interface RegisterResponseType {
    jwt: string;
    user: User
}
export interface User {
    id: number
    name: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
}