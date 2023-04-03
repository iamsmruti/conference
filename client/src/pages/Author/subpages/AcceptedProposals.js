import React, { useState } from 'react'
import Heading from '../../../components/Heading'
import NothingToShow from '../../../components/NothingToShow'

const AcceptedProposals = () => {
  const [proposals, setProposals] = useState([])
  return (
    <div>
      <Heading title={"Accepted Proposals"}/>

      {proposals.length === 0 ? <NothingToShow /> : <>Hello Buddy</>}
    </div>
  )
}

export default AcceptedProposals