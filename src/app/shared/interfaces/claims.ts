import { IUser } from './user';
import { Ipackage } from './package';

export interface IClaim {
    _id: Number,
    trackingNumber: Ipackage,
    title: String,
    description: String,
    creator: IUser,
    showDetails: Boolean,
    createdAt: Date
}