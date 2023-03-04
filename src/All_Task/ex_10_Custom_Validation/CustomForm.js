import React, { useState } from 'react'

export default function CustomForm() {

    const [obj, setobj] = useState({
        firstName: "",
        lastName: "",
        Address1: "",
        Address2: "",
        Password: "",
        ConfirmPassword: "",
        City: "",
        State: "",
        Country: ""

    });

    const [validationError, setvalidationError] = useState({

        firstName: "",
        lastName: "",
        Address1: "",
        Password: "",
        ConfirmPassword: "",
        City: "",
        State: "",
        Country: ""
    });

    const validateOutput = (name, value) => {

        let erorrMsg = '';

        switch (name) {

            case "firstName":
                if (!value) {
                    erorrMsg = "Please Enter First Name";
                }
                break;

            case "lastName":
                if (!value) {
                    erorrMsg = "Please Enter Last Name";
                }
                break;

            case "Address1":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }
                break;
            case "Password":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }
                break;
            case "ConfirmPassword":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }
                break;
            case "City":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }
                break;
            case "State":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }
                break;
            case "Country":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }
                break;
        }
        return erorrMsg;
    }

    const mySubmit = (e) => {

        e.preventDefault();

        let ob = {};

        Object.keys(validationError).map((e) => {

            let errorMessage = validateOutput(e, obj[e]);

            ob[e] = errorMessage;

        })
        setvalidationError(ob);
        console.log(validationError);

    }
    const inputHandler = (e) => {
        const { name, value } = e.target;

        let errorMessage = validateOutput(name, value);

        setvalidationError({ ...errorMessage, [name]: errorMessage });

        setobj({ ...obj, [name]: value })
    }



    return (
        <div>
            <form onSubmit={mySubmit}>

                <div>
                    <input type="text" name="firstName" placeholder='firstName' onChange={inputHandler} onBlur={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.firstName}</span>
                </div>

                <div>
                    <input type="text" name="lastName" placeholder='lastName' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.lastName}</span>
                </div>
                <div>
                    <input type="text" name="Address1" placeholder='Address1' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.Address1}</span>
                </div>
                <div>
                    <input type="text" name="Address2" placeholder='Address2' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.Address2}</span>
                </div>

                <div>
                    <input type="text" name="Password" placeholder='Password' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.Password}</span>
                </div>

                <div>
                    <input type="text" name="ConfirmPassword" placeholder='ConfirmPassword' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.ConfirmPassword}</span>
                </div>

                <div>
                    <input type="text" name="City" placeholder='City' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.City}</span>
                </div>

                <div>
                    <input type="text" name="State" placeholder='State' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.State}</span>
                </div>

                <div>
                    <input type="text" name="Country" placeholder='Country' onChange={inputHandler} />
                    <span style={{ "color": "Red" }}> {validationError?.Country}</span>
                </div>

                <input type="submit" />
            </form>

        </div>
    )
}