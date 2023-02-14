import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import Container from '@mui/material/Container';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';


export default function RegWithDesignuseFormik() {


    let cities = ["Rajkot", "Ahmedabad", "Vadodara", "Surat"];
    let states = ["Gujarat", "Maharastra", "Rajeshthan", "Delhi"];
    let genders = ["Male", "Female", "Other"];



    const validationSchema = yup.object({
        firstName: yup.string()
            .min(2, "Too sort!")
            .max(15, "Too long!")
            .required(' Please enter the First Name'),
        lastName: yup.string()
            .min(2, "Too sort!")
            .max(15, "Too long!")
            .required(' Please enter the Last Name'),
        gender: yup.string()
            .required(' Please select gender'),
        email: yup.string()
            .email()
            .required(' Please enter the Email'),
        mobilenumber: yup.string()
            .min(10, "Too Sort")
            .max(10, "Must be exactly 10 digits")
            .matches(/^[0-9]+$/, 'Phone number is not valid')
            .required('Please enter the Mobile number'),
        dob: yup.date()
            .max(new Date(Date.now() - 567648000000), " You must be at least 18 years")
            .required(' Please Enter Your DOB!'),
        password: yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, ' Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
            .required(' Please enter the Password'),
        confirmPassword: yup.string()
            .oneOf([null, yup.ref('password')], ' Password should be match')
            .required(' Please enter the Password'),
        address: yup.string()
            .min(5, 'Too sort!')
            .max(100, 'Too long!')
            .required('Please enter the Address'),
        city: yup.string()
            .required('Please select the City'),
        state: yup.string()
            .required('Please select the State'),
        zipCode: yup.string()
            .min(6, "Too Sort")
            .max(6, "Must be exactly 6 digits")
            .matches(/^[0-9]+$/, 'Zip-Code is not valid')
            .required('Please enter the Zip-Code'),
        acceptTerm: yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")

    });

    const formik = useFormik({
        initialValues: {
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
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });



    return (
        <div>
            <Container maxWidth="sm" sx={{
                marginTop: 4,
                textAlign: 'center',
            }}>
                <Typography component="h1" variant="h5" >
                    Form
                </Typography>

                <Box component="form" noValidate sx={{ mb: 2 }} onSubmit={formik.handleSubmit}>

                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="firstName"
                        label="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="lastName"
                        label="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />

                    <RadioGroup sx={{ mb: 2 }}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={formik.handleChange}
                        error={formik.touched.gender && Boolean(formik.errors.gender)}
                        helperText={formik.touched.gender && formik.errors.gender}
                    >

                        {/* <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" name="gender" control={<Radio />} label="Other" /> */}
                        {
                            genders.map((gen) => {
                                return (
                                    <FormControlLabel
                                        value={gen}
                                        name="gender"
                                        control={<Radio />}
                                        label={gen} />
                                )
                            })
                        }
                    </RadioGroup>

                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="email"
                        label="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="mobilenumber"
                        label="mobilenumber"
                        value={formik.values.mobilenumber}
                        onChange={formik.handleChange}
                        error={formik.touched.mobilenumber && Boolean(formik.errors.mobilenumber)}
                        helperText={formik.touched.mobilenumber && formik.errors.mobilenumber}
                    />

                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="dob"
                        label="dob"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                        helperText={formik.touched.dob && formik.errors.dob}
                    />


                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="password"
                        label="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="confirmPassword"
                        label="confirmPassword"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />

                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="address"
                        label="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />


                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            name="city"
                            labelId="demo-simple-select-label"
                            label="city"
                            value={formik.values.city}
                            sx={{ textAlign: "left" }}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        >
                            <MenuItem value=''>Select</MenuItem>
                            {
                                cities.map((city) => {
                                    return (
                                        <MenuItem value={city}>{city}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            name="state"
                            labelId="demo-simple-select-label"
                            label="state"
                            value={formik.values.state}
                            sx={{ textAlign: "left" }}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}

                        >
                            <MenuItem value=''>Select</MenuItem>
                            {
                                states.map((state) => {
                                    return (
                                        <MenuItem value={state}>{state}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>


                    <TextField fullWidth
                        sx={{ mb: 2 }}
                        name="zipCode"
                        label="zipCode"
                        value={formik.values.zipCode}
                        onChange={formik.handleChange}
                        error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                        helperText={formik.touched.zipCode && formik.errors.zipCode}
                    />


                    <FormControlLabel
                        control={<Checkbox name="acceptTerm" onClick={formik.handleChange} />}
                        label="Accept Terms"
                        error={formik.touched.acceptTerm && Boolean(formik.errors.acceptTerm)}
                        helperText={formik.touched.acceptTerm && formik.errors.acceptTerm}
                    />

                    <Button sx={{ mt: 1 }} color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>


                </Box>
            </Container>
        </div>
    )
}
