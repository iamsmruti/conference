import React from 'react'
import PendingRequests from './subpages/PendingRequests'
import Reviewed from './subpages/Reviewed'

const Reviewer = ({state}) => {
  return (
    <>
      {state === 1 && <PendingRequests />}
      {state === 2 && <Reviewed />}
    </>
  )
}

export default Reviewer