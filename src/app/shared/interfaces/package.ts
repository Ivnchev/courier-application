import { IUser } from './user';
import { IPackageSize } from './package-sizes';

export interface Ipackage {
    _id: number,
    shipmentType: string,
    address: string,
    sizes: IPackageSize,
    weight: number,
    cost: number,
    creator: IUser,
    status: string,
    showDetails: Boolean
}