import React, { useEffect, useState } from 'react'
import Heading from '../../../components/Heading'
import { API } from '../../../constants'
import axios from 'axios'

import UserCard from '../../../components/UserCard'

const ManageRoles = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${API}/user/all`).then((res) => {
      console.log(res.data)
      setUsers(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <Heading title={"Manage Roles"}/>

      <div className='mt-5'>
        {users.map((user) => (
          <UserCard user={user}/>
        ))}
      </div>
    </div>
  )
}

export default ManageRoles