import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signin = () => {

    const [value, setValue] = useState(
        {
            email: '',
            password: ''
        }
    )

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/login_user`, value)
            const token = data?.token
            localStorage.setItem('token', token)
            
            if (data?.success) {
                toast.success(data?.message)
            }
            navigate('/')

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    const handleOnchange = (e) => {
        setValue(
            {
                ...value,
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <div>
            <form
                className='container my-3'
                onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label
                        for="exampleInputEmail1"
                        className="form-label">Email address</label>
                    <input
                        type="email"
                        name='email'
                        value={value?.email}
                        onChange={(e) => handleOnchange(e)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label
                        for="exampleInputPassword1"
                        className="form-label">Password</label>
                    <input
                        type="password"
                        name='password'
                        value={value?.password}
                        onChange={(e) => handleOnchange(e)}
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>

                <button
                    type="submit"
                    className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Signin