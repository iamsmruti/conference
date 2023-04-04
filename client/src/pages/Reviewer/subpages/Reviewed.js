import React from 'react'
import Heading from '../../../components/Heading'
import { PendingProposalCard } from '../../../components/PendingProposalCard'
import { ProposalCard } from '../../../components/ProposalCard'

const Reviewed = ({proposals}) => {
  return (
    <div>
      <Heading title={"Reviewed Proposals"}/>

      <div className='mt-5'>
        {proposals.map((item) => (
          <ProposalCard data={item}/>
        ))}
      </div>
    </div>
  )
}

export default Reviewed