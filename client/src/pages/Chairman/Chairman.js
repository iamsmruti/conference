import React from 'react'
import Published from './subpages/Published'
import ReviewedProposals from './subpages/ReviewedProposals'

const Chairman = ({state}) => {
  return (
    <>
      {state === 1 && <ReviewedProposals />}
      {state === 2 && <Published />}
    </>
  )
}

export default Chairman