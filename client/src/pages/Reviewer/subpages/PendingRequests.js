import React from 'react'
import Heading from '../../../components/Heading'
import { PendingProposalCard } from '../../../components/PendingProposalCard'

const PendingRequests = ({proposals}) => {
  return (
    <div>
      <Heading title={"Pending Requests"}/>

      <div className='mt-5'>
        {proposals.map((item) => (
          <PendingProposalCard data={item}/>
        ))}
      </div>
    </div>
  )
}

export default PendingRequests