import React, { useState } from "react";

const FunctionalForm = () => {
    const [inputField, setInputField] = useState({
        name: "",
        email: "",
    });

    const [message, setMessage] = useState("");

    const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputField.name && inputField.email) {
            setMessage("Form submitted successfully!");
            console.log(inputField);
        } else {
            setMessage("Please fill all fields.");
        }
    };

    return (
        <form onSubmit={submitForm}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={inputField.name}
                onChange={updateForm}
            />

            <br />
            <br />

            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={inputField.email}
                onChange={updateForm}
            />

            <br />
            <br />

            <button type="submit">Submit</button>

            <p>{message}</p>
        </form>
    );
};

export default FunctionalForm;