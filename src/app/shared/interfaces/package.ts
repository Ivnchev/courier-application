import { IUser } from './user';

export interface Ipackage {
    _id: Number,
    shipmentType: String,
    address: String,
    size: String,
    weight: Number,
    cost: Number,
    creator: IUser,
    status: String,
    showDetails: Boolean
}