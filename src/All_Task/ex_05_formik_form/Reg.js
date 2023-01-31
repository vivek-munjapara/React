import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Reg() {

    let cities = ["Rajkot", "Ahmedabad", "Vadodara", "Surat"];
    let states = ["Gujarat", "Maharastra", "Rajeshthan", "Delhi"];
    let genders = ["Male", "Female", "Other"];


    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too sort!")
            .max(15, "Too long!")
            .required(' Please enter the First Name'),
        lastName: Yup.string()
            .min(2, "Too sort!")
            .max(15, "Too long!")
            .required(' Please enter the Last Name'),
        gender: Yup.string()
            .required(' Please select gender'),
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
            .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, ' Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
            .required(' Please enter the Password'),
        confirmPassword: Yup.string()
            .oneOf([null, Yup.ref('password')], ' Password should be match')
            .required(' Please enter the Password'),
        address: Yup.string()
            .min(5, 'Too sort!')
            .max(100, 'Too long!')
            .required('Please enter the Address'),
        city: Yup.string()
            .required('Please select the City'),
        state: Yup.string()
            .required('Please select the State'),
        zipCode: Yup.string()
            .min(6, "Too Sort")
            .max(6, "Must be exactly 6 digits")
            .matches(/^[0-9]+$/, 'Zip-Code is not valid')
            .required('Please enter the Zip-Code'),
        acceptTerm: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")


    });



    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    gender: '',
                    email: '',
                    mobilenumber: '',
                    dob: '',
                    password: '',
                    confirmPassword: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    acceptTerm: false

                }}


                validationSchema={SignupSchema}

                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder=" john" />
                        <ErrorMessage name="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder=" carter" />
                        <ErrorMessage name="lastName" />
                    </div>

                    <div>
                        <label htmlFor="gender">Gender</label>
                        {genders.map((gender) => {
                            return (
                                <label>
                                    <Field type="radio" name="gender" value={gender} />{gender}
                                </label>
                            )
                        })}
                        <ErrorMessage name="gender" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder=" john@acme.com"
                            type="email"
                        />
                        <ErrorMessage name="email" />
                    </div>

                    <div>
                        <label htmlFor="mobilenumber">Mobile number</label>
                        <Field id="mobilenumber" name="mobilenumber" placeholder=" 9878725462" />
                        <ErrorMessage name="mobilenumber" />
                    </div>

                    <div>
                        <label htmlFor="dob">Birth date</label>
                        <Field type="date" id="dob" name="dob" placeholder=" 27-05-2001" />
                        <ErrorMessage name="dob" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" placeholder="" />
                        <ErrorMessage name="password" />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="" />
                        <ErrorMessage name="confirmPassword" />
                    </div>


                    <div>
                        <label htmlFor="address">Address</label>
                        <Field id="address" name="address" placeholder=" 24-D, Bird circle " />
                        <ErrorMessage name="address" />
                    </div>


                    <div>
                        <label htmlFor="city">City </label>
                        <Field name="city" as="select">
                            <option value="">Select City</option>
                            {cities.map((city) => {
                                return (
                                    <option value={city}>{city}</option>
                                )
                            })}
                        </Field>
                        <ErrorMessage name="city" />
                    </div>


                    <div>
                        <label htmlFor="state">State </label>
                        <Field name="state" as="select">
                            <option value="">Select State</option>
                            {states.map((state) => {
                                return (
                                    <option value={state}>{state}</option>
                                )
                            })}
                        </Field>
                        <ErrorMessage name="state" />
                    </div>

                    <div>
                        <label htmlFor="zipCode">Zip code</label>
                        <Field id="zipCode" name="zipCode" placeholder=" 456987" />
                        <ErrorMessage name="zipCode" />
                    </div>

                    <div>
                        <label htmlFor="acceptTerm">Accept Terms</label>
                        <Field type="checkbox" name="acceptTerm" />
                        <ErrorMessage name="acceptTerm" />
                    </div>


                    <button type="submit">Submit</button>


                </Form>
            </Formik>
        </div>
    )
}
