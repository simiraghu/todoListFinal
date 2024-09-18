import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Yup_schema } from '../schema/Yup_schema'
import { toast } from 'react-toastify'

const Signup = () => {

    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup_schema,
        onSubmit: async (values, action) => {

            try {

                const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/create_user`, values)
                if (data?.success) {
                    toast.success(data?.message)
                }
                navigate('/signin')

            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
    })

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = formik

    const navigate = useNavigate()

    return (
        <div>
            <form
                className='container my-3'
                onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        for="exampleInputEmail1"
                        className="form-label">User name</label>
                    <input
                        type="text"
                        name='username'
                        value={values?.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                        id="exampleInputEmail12"
                        aria-describedby="emailHelp" />
                </div>

                {
                    errors && touched?.username ? <p
                        style={
                            {
                                color: 'red'
                            }
                        }>{errors?.username}</p> : ''
                }

                <div className="mb-3">
                    <label
                        for="exampleInputEmail1"
                        className="form-label">Email address</label>
                    <input
                        type="email"
                        name='email'
                        value={values?.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>

                {
                    errors && touched?.email ? <p
                        style={
                            {
                                color: 'red'
                            }
                        }>{errors?.email}</p> : ''
                }

                <div className="mb-3">
                    <label
                        for="exampleInputPassword1"
                        className="form-label">Password</label>
                    <input
                        type="password"
                        name='password'
                        value={values?.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>

                {
                    errors && touched?.password ? <p
                        style={
                            {
                                color: 'red'
                            }
                        }>{errors?.password}</p> : ''
                }

                <button
                    type="submit"
                    className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Signup