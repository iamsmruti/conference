import React from 'react'
import { Divider } from '@mui/material'

const Heading = ({title}) => {
  return (
    <>
    <div className='text-2xl font-semibold mb-4'>{title}</div>
    <Divider />
    </>
  )
}

export default Heading