import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Create_todos = () => {

    const navigate = useNavigate()
    const { id } = useParams()

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

    const todos_data = async () => {
        try {

            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todo/get_todo_by_id/${id}`)
            console.log(data)
            setTodos(data?.get_todo_by_id)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        todos_data()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/todo/update_todo/${id}`, todos)
            if (data?.success) {
                toast.success(data?.message)
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