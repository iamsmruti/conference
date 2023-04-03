import { Button, Divider, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { API } from '../constants'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = () => {
        axios.post(`${API}/auth/register`, {
            name, email, password
        }).then((res) => {
            console.log(res)

            if(res.data.error){
                toast(res.data.error)
            } else{ 
                toast("Successfully Registered!")
                navigate('/login')
            }
        }).catch((err) => {
            toast(err.data.error)
        })
    }

    return (
        <div className='login grid grid-cols-2 w-[100%] h-[100vh]'>
            <div className='flex justify-center items-center w-[100%] h-[100vh]'>
                <div className='bg-white w-[400px] px-10 py-10 flex flex-col'>
                    <h1 className='font-semibold text-[24px] mb-3'>Register</h1>
                    <Divider />
    
                    <p className='mt-5'>Name</p>
                    <TextField onChange={(e) => setName(e.target.value)} sx={{mt: 0.5}}/>

                    <p className='mt-3'>Email</p>
                    <TextField onChange={(e) => setEmail(e.target.value)} sx={{mt: 0.5}}/>
    
                    <p className='mt-3'>Password</p>
                    <TextField type={"password"} onChange={(e) => setPassword(e.target.value)} sx={{mt: 0.5}}/>
    
                    <Button onClick={handleSubmit} variant='contained' sx={{mt: 3}}>
                        Submit
                    </Button>
    
                    <p className='text-[12px] mt-5'>
                        Already have an account ?
                        <span className='text-blue-600 ml-2'>
                            <Link to='/login'>Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage