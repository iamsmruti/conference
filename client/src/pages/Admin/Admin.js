import React from 'react'
import CreateUsers from './subpages/CreateUsers'
import ManageRoles from './subpages/ManageRoles'
import PendingPapers from './subpages/PendingPapers'
import PublishedPapers from './subpages/PublishedPapers'

const Admin = ({state}) => {
  return (
    <>
      {state == 1 && <ManageRoles />}
      {state == 2 && <CreateUsers />}
      {state == 3 && <PublishedPapers />}
      {state == 4 && <PendingPapers />}
    </>
  )
}

export default Admin