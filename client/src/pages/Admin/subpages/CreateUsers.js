import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Heading from '../../../components/Heading'
import MultipleSelectChip from '../../../components/MultiSelect'
import { toast } from 'react-toastify' 
import axios from 'axios'
import { API } from '../../../constants'

const CreateUsers = () => {
  const [role, setRole] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    if(role === [] || name === '' || email === '' || password === ''){
      toast("All Fields are required")
    } else {
      axios.post(`${API}/user/create`, {
        name: name, 
        email: email, 
        password: password,
        roles: role
      }).then((res) => {
        console.log(res)
        if(res.data.error){
            toast(res.data.error)
        } else if (res.error) {
            toast(res.error.message)
        } else{ 
            toast("Successfully created")
        }
      }).catch((err) => {
        console.log(err)
        toast(err.message)
      })
    }
  }

  return (
    <div>
      <Heading title={"Create User"}/>

      <div className='w-[600px]'>
        <p className='mt-5'>Name</p>
        <TextField onChange={(e) => setName(e.target.value)} fullWidth sx={{mt: 0.5}}/>

        <p className='mt-5'>Email</p>
        <TextField onChange={(e) => setEmail(e.target.value)} type={"email"} fullWidth sx={{mt: 0.5}}/>

        <p className='mt-5'>Password</p>
        <TextField onChange={(e) => setPassword(e.target.value)} type={"password"} fullWidth sx={{mt: 0.5}}/>

        <p className='mt-5'>Select roles</p>
        <MultipleSelectChip role={role} setRole={setRole}/>

        <Button onClick={handleSubmit} variant='contained' sx={{mt: 6}}>Submit</Button>
      </div>
    </div>
  )
}

export default CreateUsers