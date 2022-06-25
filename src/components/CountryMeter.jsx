import React from 'react'

import useAxiosFetch from '../hooks/useAxiosFetch'
import { COUNTRY_CODES } from '../utils/utils'

export const CountryMeter = () => {
    const {data, isLoading} = useAxiosFetch(COUNTRY_CODES)

    const Counter = data.filter(amount => amount["ISO4217-currency_country_name"]).length
    const EuroUser = data.filter(amount => amount["ISO4217-currency_name"] === 'Euro').length
    return (
        <div>
            {isLoading && "Loading . . ."}
            {!isLoading && <div>
                <h1>There are {Counter} countries</h1>
                <h1>{EuroUser} of them use Euro as their currency</h1>
            </div>}
        </div>
    )
}