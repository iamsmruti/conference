import React, { useState, useEffect } from 'react'
import AcceptedProposals from './subpages/AcceptedProposals'
import PendingProposals from './subpages/PendingProposals'
import SubmitProposal from './subpages/SubmitProposal'
import axios from 'axios';
import { API } from '../../constants';

const Author = ({state}) => {
  const [ proposals, setProposals] = useState([])

  useEffect(() => {
    axios.get(`${API}/proposal/get-proposals`, {
      headers: {
        token: localStorage.getItem('token')
      }
    }).then((res) => {
      setProposals(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {state === 1 && <AcceptedProposals proposals={proposals.filter((item) => item.status !== 'published')}/>}
      {state === 2 && <PendingProposals proposals={proposals.filter((item) => item.status !== 'published')}/>}
      {state === 3 && <SubmitProposal />}
    </>
  )
}

export default Author