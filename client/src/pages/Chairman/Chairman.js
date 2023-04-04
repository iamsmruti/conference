import React, { useState, useEffect } from 'react'
import { API } from '../../constants'
import Published from './subpages/Published'
import ReviewedProposals from './subpages/ReviewedProposals'
import axios from 'axios'

const Chairman = ({state}) => {
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
      {state === 1 && <ReviewedProposals proposals={proposals.filter((item) => item.status === 'approve pending')}/>}
      {state === 2 && <Published proposals={proposals.filter((item) => item.status !== 'approve pending')} />}
    </>
  )
}

export default Chairman