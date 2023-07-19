import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FormSearch = ({ nameCityClean }) => {
    const [city, setCity] = useState("");

    const onInputValue = ({ target }) => {
        const { value } = target;
        setCity(value);
    }

    const onSubmitForm = e => {
        e.preventDefault();
        const cityValue = city.trim().toLowerCase();
        if (cityValue.length <= 1) return
        // // 
        nameCityClean(city);
        setCity("")
    }
    return (
        <form className='form' onSubmit={onSubmitForm}>
            <input type="text"
                name="weather"
                placeholder='Introduce una ciudad de españa'
                value={city}
                onChange={onInputValue}
            />
            <button type="submit">
                Buscar
            </button>
        </form>
    )
}


FormSearch.propTypes = {
    nameCityClean:PropTypes.func.isRequired
}


export default FormSearch