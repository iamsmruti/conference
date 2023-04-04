import VisibilityIcon from '@mui/icons-material/Visibility';

export const ProposalCard = ({data}) => {
    console.log(data.fileUrl)
    return (
      <div className='grid grid-cols-9 mb-[20px] border-[1px] border-solid border-slate-400 shadow-md px-[20px] py-[10px] w-[800px]'>
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
          <p className='text-[16px]'>Updated at {data.updatedAt.substring(0, 10)}</p>
        </div>
        <div className='col-span-1'>
          <a href={data.fileUrl} target="_blank">
            <VisibilityIcon />
          </a>
        </div>
      </div>
    )
}

