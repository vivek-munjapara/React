import { Email, Password } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import lanContext from './LanContext'
import { useFormik } from 'formik';
import * as yup from 'yup';




const validationSchema = yup.object({
    firstName: yup
        .string('Enter your First Name')
        .required('First Name is required'),
    lastName: yup
        .string('Enter your Last Name')
        .required('Last Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export default function Form() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const { lan } = useContext(lanContext)


    const lanObj = {
        en: {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            password: 'Password'
        },

        hi: {
            firstName: 'पहला नाम',
            lastName: 'उपनाम',
            email: 'ईमेल',
            password: 'पासवर्ड'
        }
    }

    return (<>
        
        <Box component="main" sx={{ p: 3, mt: 8, display: 'flex', justifyContent: 'center' }}>
            <form style={{ width: '500px'}} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    sx={{ mb: 1 }}
                    id="firstName"
                    name="firstName"
                    label={lanObj[lan].firstName}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    fullWidth
                    sx={{ mb: 1 }}
                    id="lastName"
                    name="lastName"
                    label={lanObj[lan].lastName}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                    fullWidth
                    sx={{ mb: 1 }}
                    id="email"
                    name="email"
                    label={lanObj[lan].email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    id="password"
                    name="password"
                    label={lanObj[lan].password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    </>
    )
}
