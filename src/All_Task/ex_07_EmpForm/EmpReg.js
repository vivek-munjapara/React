import { CleaningServices } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import DisplayEmpData from './DisplayEmpData';
import './EmpReg.css';
import EmpSearch from './EmpSearch';

export default function EmpReg() {

    const [data, setData] = useState([]);

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too sort!")
            .max(15, "Too long!")
            .required(' Please enter the First Name'),
        lastName: Yup.string()
            .min(2, "Too sort!")
            .max(15, "Too long!")
            .required(' Please enter the First Name'),
        email: Yup.string()
            .email()
            .required(' Please enter the Email'),
        mobilenumber: Yup.string()
            .min(10, "Too Sort")
            .max(10, "Must be exactly 10 digits")
            .matches(/^[0-9]+$/, 'Phone number is not valid')
            .required('Please enter the Mobile number'),
        dob: Yup.date()
            .max(new Date(Date.now() - 567648000000), " You must be at least 18 years")
            .required(' Please Enter Your DOB!'),
        password: Yup.string()
            // .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, ' Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
            .required(' Please enter the Password'),
        acceptTerm: Yup.boolean()
            .oneOf([true], "Please accept the terms and conditions")

    })

    const ErrorM = ({ children }) => {
        return (
            <div>
                <font color="red">{children}</font>
            </div>
        );
    };


    const dltData = useCallback((index) => {
        let d = [...data]
        d.splice(index, 1)
        setData(d)
        console.log('hello')
    }, [data])

    return (
        <>
            <div className='container'>

                <div>
                    <h1>Sign Up</h1>
                </div>

                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        mobilenumber: '',
                        dob: '',
                        password: '',
                        acceptTerm: false
                    }}

                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        // console.log(values)
                        let rowobj = [...data]
                        rowobj.push(values)
                        setData(rowobj)
                        // console.log(rowobj)
                    }}
                >
                    <Form>
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <Field id="firstName" name="firstName" placeholder=" john" />
                            <span><ErrorMessage name="firstName" /></span>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <Field id="lastName" name="lastName" placeholder=" carter" />
                            <span><ErrorMessage name="lastName" /></span>
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field id="email" name="email" placeholder=" john@acme.com" type="email" />
                            <span><ErrorMessage name="email" /></span>
                        </div>

                        <div>
                            <label htmlFor="mobilenumber">Mobile number:</label>
                            <Field id="mobilenumber" name="mobilenumber" placeholder=" 9878725462" />
                            <ErrorMessage name="mobilenumber" />
                        </div>

                        <div>
                            <label htmlFor="dob">Birth date:</label>
                            <Field type="date" id="dob" name="dob" placeholder=" 27-05-2001" />
                            <span><ErrorMessage name="dob" /></span>
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" id="password" name="password" placeholder="" />
                            <span><ErrorMessage name="password" /></span>
                        </div>

                        <div>
                            <label htmlFor="acceptTerm">Accept Terms:</label>
                            <Field type="checkbox" name="acceptTerm" />
                            <span><ErrorMessage name="acceptTerm" /></span>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
            <EmpSearch searchItem={data} />
            
            <DisplayEmpData item={data} remove={dltData} />
        </>
    )
}
