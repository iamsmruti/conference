import React from 'react'
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';

const NothingToShow = () => {
  return (
    <div className='w-[100%] h-[70vh] flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col text-[24px]'>
        <ErrorTwoToneIcon sx={{fontSize: 72}}/>
        <p className='mt-5'>Nothing To Show</p>
      </div>
    </div>
  )
}

export default NothingToShow