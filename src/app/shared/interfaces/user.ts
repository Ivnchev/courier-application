export interface IUser {
    _id: string,
    username: string,
    email: string,
    image: string,
    role: string,
    shipments: string[],
    claims: string[],
    gender: string
}