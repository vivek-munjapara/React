import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function RegFormikMaterial() {

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


    const ErrorM = ({ children }) => {
        return (
            <div>
                <font color="red">{children}</font>
            </div>
        );
    };


    return (
        <div>
            <Container maxWidth="sm" sx={{ marginTop: 4, textAlign: 'center' }}>
                <Typography component="h1" variant="h5" >
                    Sign Up
                </Typography>


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
                        <TextField sx={{ m: 1, minWidth: '47%' }} id="firstName" name="firstName" placeholder="First Name" label="First Name" variant="outlined" />
                        <ErrorMessage name="firstName" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} id="lastName" name="lastName" placeholder=" carter" label="Last Name" variant="outlined" />
                        <ErrorMessage name="lastName" component={ErrorM} />

                        <FormLabel sx={{ m: 1, display: 'flex', textAlign: 'left' }} >Gender</FormLabel>
                        <RadioGroup sx={{ m: 1, display: 'flex', textAlign: 'left' }} label="Gender" row>
                            {
                                genders.map((gender) => {
                                    return (<FormControlLabel type="radio" control={<Radio />} value={gender} label={gender} />
                                    )
                                })

                            }
                        </RadioGroup>

                        <ErrorMessage name="gender" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }}
                            id="email"
                            name="email"
                            placeholder=" john@acme.com"
                            type="email" label="Email" variant="outlined"
                        />
                        <ErrorMessage name="email" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} id="mobilenumber" name="mobilenumber" placeholder=" 9878725462" label="Mobile" variant="outlined" />
                        <ErrorMessage name="mobilenumber" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} type="date" id="dob" name="dob" placeholder=" 27-05-2001" label="Date of birth" variant="outlined" InputLabelProps={{ shrink: true }} />
                        <ErrorMessage name="dob" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} type="password" id="password" name="password" label="Password" variant="outlined" />
                        <ErrorMessage name="password" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} type="password" id="confirmPassword" name="confirmPassword" label="Confirm Password" variant="outlined" />
                        <ErrorMessage name="confirmPassword" component={ErrorM} />




                        <FormControl sx={{ m: 1, minWidth: '47%' }}>
                            <InputLabel>City</InputLabel>
                            <Select label="City">
                                {
                                    cities.map((city) => {
                                        return (
                                            <MenuItem value={city}>{city}</MenuItem>)
                                    })
                                }
                            </Select>
                        </FormControl>
                        <ErrorMessage name="city" component={ErrorM} />

                        <FormControl sx={{ m: 1, minWidth: '47%' }}>
                            <InputLabel>State</InputLabel>
                            <Select label="State">
                                {
                                    states.map((state) => {
                                        return (
                                            <MenuItem value={state}>{state}</MenuItem>)
                                    })
                                }

                            </Select>
                        </FormControl>
                        <ErrorMessage name="state" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} id="address" name="address" placeholder=" 24-D, Bird circle " label="Address" variant="outlined" />
                        <ErrorMessage name="address" component={ErrorM} />

                        <TextField sx={{ m: 1, minWidth: '47%' }} id="zipCode" name="zipCode" placeholder=" 456987" label="Zip code" variant="outlined" />
                        <ErrorMessage name="zipCode" component={ErrorM} />


                        <FormControlLabel sx={{ m: 2, minWidth: '44%' }} control={<Checkbox />} label="Accept Terms" name="acceptTerm" />
                        <ErrorMessage name="acceptTerm" component={ErrorM} />


                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, width: '180px' }}>
                            Sign In
                        </Button>


                    </Form>
                </Formik>
            </Container>
        </div>
    )
}
