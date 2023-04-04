import React, { useState, useEffect } from 'react'
import CreateUsers from './subpages/CreateUsers'
import ManageRoles from './subpages/ManageRoles'
import PendingPapers from './subpages/PendingPapers'
import PublishedPapers from './subpages/PublishedPapers'

import axios from 'axios'
import { API } from '../../constants'


const Admin = ({state}) => {
  const [proposals, setProposals] = useState([])

  useEffect(() => {
    axios.get(`${API}/proposal/all`).then((res) => {
      console.log(res.data)
      setProposals(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {state == 1 && <ManageRoles />}
      {state == 2 && <CreateUsers />}
      {state == 3 && <PublishedPapers proposals={proposals.filter((item) => item.status === 'published')}/>}
      {state == 4 && <PendingPapers proposals={proposals.filter((item) => item.status !== 'published')}/>}
    </>
  )
}

export default Admin