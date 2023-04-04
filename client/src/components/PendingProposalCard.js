import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { API } from '../constants';

import { toast } from 'react-toastify'

export const PendingProposalCard = ({data}) => {
    const updateStatus = () => {
      console.log(data._id)
      axios.put(`${API}/proposal/update?id=${data._id}`, {
        title: data.title,
        description: data.description,
        fileUrl: data.fileUrl,
        author: data.author,
        status: data.status === 'review pending' ? "approve pending" : "published"
      }).then((res) => {
        toast("Updated Successfully !")
      }).catch((err) => {
        toast(err.message)
      })
    }
    console.log(data.fileUrl)
    return (
      <div className='grid grid-cols-10 mb-[20px] border-[1px] border-solid border-slate-400 shadow-md pl-[20px] pr-[10px] py-[10px] w-[800px]'>
        <div className='col-span-1'>
          <div className='bg-blue-300 w-[40px] h-[40px] flex justify-center items-center rounded-full'>
            <p className='text-3xl font-semibold mt-[-5px]'>{data?.author.substring(0, 1)}</p>
          </div>
        </div>
        <div className='col-span-4 '>
          <p className='text-[20px] font-semibold title'>{data.title}</p>
          <p className='text-[16px] h-max-[50px] description mb-[20px]'>{data.description}</p>
  
          {data.status !== 'publised' && <p>status: <span className='text-red-400'>{data.status}</span></p>}
          {data.status === 'publised' && <p>status: <span className='text-green-400'>{data.status}</span></p>}
        </div>
        <div className='col-span-3'>
          <p className='text-[16px]'>Created at {data.createdAt.substring(0, 10)}</p>
        </div>
        <div className='col-span-1'>
          <a href={data.fileUrl} target="_blank">
            <VisibilityIcon />
          </a>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-start'>
          <IconButton onClick={updateStatus} sx={{bgcolor: 'lightgreen'}}>
            <DoneOutlinedIcon sx={{color: 'green'}}/>
          </IconButton>

          <IconButton sx={{bgcolor: red[100], mt: 2}}>
            <ClearOutlinedIcon sx={{color: 'red'}}/>
          </IconButton>
        </div>
      </div>
    )
}

