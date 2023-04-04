import React, { useState, useEffect } from 'react'
import PendingRequests from './subpages/PendingRequests'
import Reviewed from './subpages/Reviewed'
import { API } from '../../constants'
import axios from 'axios'

const Reviewer = ({state}) => {
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
      {state === 1 && <PendingRequests proposals={proposals.filter((item) => item.status === 'review pending')}/>}
      {state === 2 && <Reviewed proposals={proposals.filter((item) => item.status !== 'review pending')}/>}
    </>
  )
}

export default Reviewer