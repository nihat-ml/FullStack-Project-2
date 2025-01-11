import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'; 


function AddPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    image: Yup.string()
      .url('Must be a valid URL')
      .required('Image URL is required'),
    specialty: Yup.string()
      .required('Specialty is required')
      .min(3, 'Specialty must be at least 3 characters'),
    monthlyIncome: Yup.number()
      .required('Monthly Income is required')
      .min(0, 'Income must be a positive number'),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post('http://localhost:3001/members', values)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Member added successfully!',
        });
        resetForm();
        navigate('/'); 
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Error adding member: ' + err.message,
        });
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Add New Member</h2>
      <Formik
        initialValues={{
          name: '',
          image: '',
          specialty: '',
          monthlyIncome: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="specialty">Specialty</label>
              <Field id="specialty" name="specialty" className="form-control" />
              <ErrorMessage name="specialty" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="monthlyIncome">Monthly Income</label>
              <Field id="monthlyIncome" name="monthlyIncome" type="number" className="form-control" />
              <ErrorMessage name="monthlyIncome" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="image">Image URL</label>
              <Field id="image" name="image" className="form-control" />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            <Button type="submit" variant="success" className="me-3">
              Submit
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/')}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddPage;
