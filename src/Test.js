import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Test = () => {
    return (
        <Formik
            initialValues={{ 
                firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form >
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" fullWidth />
                <br/>

                <ErrorMessage name="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <br/>

                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" style={{color:"red"}} />
                <br/>
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" style={{color:"red"}}/>
                <button type="submit" formNoValidate>Submit</button>
            </Form>
        </Formik>
    );
};