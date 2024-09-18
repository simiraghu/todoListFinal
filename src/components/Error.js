import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate()
    return (
        <div className='container text-center my-3'>
            <h2>OOPS, SOMETHING WENT WRONG..</h2>
            <button
                className='btn btn-success'
                onClick={() => navigate('/')
                }>Go back</button>
        </div>
    )
}

export default Error