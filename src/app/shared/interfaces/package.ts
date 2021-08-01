import { IUser } from './user';
import { IPackageSize } from './package-sizes';

export interface Ipackage {
    _id: Number,
    shipmentType: String,
    address: String,
    sizes: IPackageSize,
    weight: Number,
    cost: Number,
    creator: IUser,
    status: String,
    showDetails: Boolean
}