import React, { useEffect, useState, useLayoutEffect } from 'react'
import { API } from '../constants'
import MultipleSelectChip from './MultiSelect'
import axios from 'axios'
import { toast } from 'react-toastify'
import useDidMountEffect from '../hooks/useDidMountEffect'

const UserCard = ({user}) => {
  const [role, setRole] = useState(user.roles)

  useDidMountEffect(() => {
    console.log(role)

    axios.put(`${API}/user/updateRoles?id=${user._id}`, {
      roles: role
    }).then((res) => {
      toast('updated successfully')
    }).catch((err) => {
      toast(err.message)
    })
  }, [role])

  useEffect(() => {

  }, [])

  return (
    <div className='grid grid-cols-8 w-[800px] border-[1px] border-solid border-slate-300 mb-[20px] px-5 py-5 shadow-md'>
      <div className='col-span-1 flex justify-center items-center'>
        <div className='w-[100px] h-[100px] bg-blue-500 rounded-full'/>
      </div>
      
      <div className='col-span-4 pl-4'>
        <p className='capitalize font-semibold text-[18px]'>{user.name}</p>
        <p className='text-blue-500'>{user.email}</p>

        <p className='text-[12px] mt-3'>Member since {user.createdAt}</p>
      </div>
      <div className='col-span-3'>
          <MultipleSelectChip role={role} setRole={setRole}/>
      </div>
    </div>
  )
}

export default UserCard