import { AddressType } from "./address_type.model"
import { Country } from "./country.model"

export type Address = {
    id: number,
    zip_code: string,
    city: string,
    number: string,
    street: string,
    type: AddressType
    country: Country
}