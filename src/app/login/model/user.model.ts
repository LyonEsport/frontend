import { Address } from "./address.model"

export type User = {
    id: number,
    email: string,
    password: string,
    last_name: string,
    first_name: string,
    addresses: Address[]
}