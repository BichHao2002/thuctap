import React, { Component, useState, useEffect } from 'react'
import { Button, Form} from 'react-bootstrap';
// import  from 'react-bootstrap/Form';

import {useFormik} from 'formik';

import * as Yup from 'yup'

import 'bootstrap/dist/css/bootstrap.min.css';
import { CountryData } from '../dataCountry/CountryData';
import { useNavigate } from 'react-router-dom';
import '../style/style.css'

function Edit(){
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      code: '',
      description: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('You must enter name!'),
      code: Yup.string().required('You must enter code!'),
      description: Yup.string().required('You must enter description!'),
    }),

    onSubmit: (values) => {
      console.log(values);
      const index = CountryData.findIndex((country) => country.name === values.name);
      CountryData[index].name = values.name;
      CountryData[index].code = values.code;
      CountryData[index].description = values.description;
      navigate('/Country');
    },

   
  });


  useEffect(() => {
    formik.
   
  setValues({
      
     
  name: localStorage.getItem('Name'),
      code: localStorage.getItem('Code'),
      
     
  description: localStorage.getItem('Desc'),
    });
  }, []);

  

   return(
    <div className='Edit'>
        <h1>Edit Country</h1>
          <Form className='d-grid gap-1' onSubmit={formik.handleSubmit}>
                <Form.Group className='mb-1' controlId = "forName">
                    <Form.Control type="text" name='name' placeholder="Enter Name" value={formik.values.name} onChange={formik.handleChange}>
                    </Form.Control>
                </Form.Group>
                {formik.errors.name && formik.touched.name && (<p style={{color: "red"}} >{formik.errors.name}</p>)}
                <Form.Group className='mb-1' controlId = "forCode">
                    <Form.Control type="text" name='code' placeholder="Enter Code" value={formik.values.code} onChange={formik.handleChange}>
                    </Form.Control>
                </Form.Group>
                {formik.errors.code && formik.touched.code && (<p style={{color: "red"}}>{formik.errors.code}</p>)}

                <Form.Group className='mb-1' controlId = "forDesc">
                    <Form.Control type="text" name='description' placeholder="Enter Description" value={formik.values.description} onChange={formik.handleChange}>
                    </Form.Control>
                </Form.Group>
                {formik.errors.description && formik.touched.description && (<p style={{color: "red"}}>{formik.errors.description}</p>)}

                <Button style={{background:"gray", border: "none"}} type='submit' value='Submit Form' >Update</Button>
            </Form>
    </div>
   )
}
export default Edit;