import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spin from './Spin';

const User_todos = () => {

    const [todo, setTodo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const todos = async () => {
        try {
            const token = localStorage.getItem('token')
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todo/get_todo_by_userid`,
                {
                    headers: {
                        token: token
                    }
                })

            const reverse_data = data?.todos?.reverse()
            setTodo(reverse_data)
            setIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    const handleConfirm = async (id) => {
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/todo/delete_todo/${id}`)
            if (data?.success) {
                toast.success(data?.success)
            }
            todos()

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }


    useEffect(() => {
        todos()
    }, [])

    return (
        <>
            <button
                className='btn btn-sm btn-success mx-3 my-2'
                type='button'
                onClick={() => navigate('/create_todos')}>+ Add Todo</button>

            <div className='d-flex'>
                {
                    isLoading ? <p className='container text-center'><Spin /></p> : todo.length ? todo?.map((item) => (
                        <div
                            className="card my-2 mx-3 box d-flex"
                            style={
                                {
                                    width: "20rem",
                                    display: 'flex',
                                    border: '2px solid black'
                                }
                            }>

                            <div class="card-body" >
                                <h5 class="card-title">Title : {item?.title} </h5>

                                <h6 class="card-subtitle mb-2 text-body-secondary my-2">Tags : {item?.tags}</h6>
                                <p class="card-text">Description : {item?.description}</p>

                                <div>
                                    <MdEditSquare
                                        style={
                                            {
                                                cursor: 'pointer',
                                                margin: '3px'
                                            }
                                        }

                                        onClick={() => navigate(`/update_todo/${item?._id}`)} />

                                    <Popconfirm
                                        title="Delete the task"
                                        description={`Are you sure you want to delete ${item?.title}`}
                                        okText="Delete"
                                        onConfirm={() => handleConfirm(item?._id)}
                                        cancelText="cancel"
                                    >
                                        <RiDeleteBin7Fill
                                            style={
                                                {
                                                    cursor: 'pointer',
                                                    margin: '0px 10px'
                                                }
                                            }
                                        />
                                    </Popconfirm>

                                </div>
                            </div>
                        </div>
                    )) : <h5 className='mx-3'>No todos found!</h5>
                }
            </div>
        </>
    )
}

export default User_todos