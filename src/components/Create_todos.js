import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Create_todos = () => {

    const navigate = useNavigate()

    const [todos, setTodos] = useState(
        {
            title: '',
            description: '',
            tags: ''
        }
    )

    const handleOnchange = (e) => {
        setTodos(
            {
                ...todos,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/todo/create_todo`, todos,
                {
                    headers: {
                        token: token
                    }
                }
            )

            if (data?.success) {
                toast.success(data?.success)
            }

            navigate('/your_todos')

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className='container my-3'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label
                        for="exampleInputEmail1"
                        class="form-label">Title</label>
                    <input
                        type="text"
                        name='title'
                        value={todos?.title}
                        onChange={(e) => handleOnchange(e)}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>

                <div class="mb-3">
                    <label
                        for="exampleInputPassword1"
                        class="form-label">Description</label>
                    <input
                        type="text"
                        name='description'
                        value={todos?.description}
                        onChange={(e) => handleOnchange(e)}
                        class="form-control"
                        id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                    <label
                        for="exampleInputPassword1"
                        class="form-label">Tags</label>
                    <input
                        type="text"
                        name='tags'
                        value={todos?.tags}
                        onChange={(e) => handleOnchange(e)}
                        class="form-control"
                        id="exampleInputPassword1" />
                </div>


                <button
                    type="submit"
                    class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Create_todos