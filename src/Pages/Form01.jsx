import React, { useState } from "react";

export const Form01 = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
        if (inputValue.length >= 5) {
            // submit form
        } else {
            setInputError('Input must be at least 5 characters');
        }
    };

    // 

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);

        if (value.length < 5) {
            setInputError('Input must be at least 5 characters');
        } else {
            setInputError(null);
        }
    }

    return (
        <form className=" p-8 block space-x-8"
            onSubmit={handleSubmit}>
            {/* <label>
                Fruit:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            {inputError && <div className=" text-red-600 italic">{inputError}</div>}
            <button type="submit">Submit</button> */}

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {inputError && <div className=" text-red-600 italic">{inputError}</div>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {inputError && <div className=" text-red-600 italic">{inputError}</div>}

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            {inputError && <div className=" text-red-600 italic">{inputError}</div>}

            <button type="submit">Submit</button>
        </form>
    );
}