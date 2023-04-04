import React from 'react'
import Heading from '../../../components/Heading'
import {ProposalCard} from '../../../components/ProposalCard'

const PublishedPapers = ({proposals}) => {
  return (
    <div>
      <Heading title={"Published Papers"}/>

      <div className='mt-5'>
        {proposals.map((item) => (
          <ProposalCard data={item}/>
        ))}
      </div>
    </div>
  )
}

export default PublishedPapers