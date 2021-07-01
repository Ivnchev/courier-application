export interface IUser {
    _id: String,
    username: String,
    email: String,
    image: String,
    role: String,
    shipments: string[],
    claims: string[]
}