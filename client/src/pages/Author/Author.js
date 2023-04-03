import React from 'react'
import AcceptedProposals from './subpages/AcceptedProposals'
import PendingProposals from './subpages/PendingProposals'
import SubmitProposal from './subpages/SubmitProposal'

const Author = ({state}) => {
  return (
    <>
      {state === 1 && <AcceptedProposals />}
      {state === 2 && <PendingProposals />}
      {state === 3 && <SubmitProposal />}
    </>
  )
}

export default Author