import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Heading from '../../../components/Heading'
import { toast } from 'react-toastify'
import axios from 'axios'
import {API} from '../../../constants.js'
import PDFViewer from '../../../components/PDFViewer'
import { useNavigate } from 'react-router-dom'


const SubmitProposal = () => {
  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  function handleClick() {
    window.cloudinary.openUploadWidget({
      cloudName: "dftw7onwl",
      uploadPreset: "smrutify",
      sources: [
        "local",
      ],
      clientAllowedFormats: ['pdf'],
      maxFileSize: 5500000,
      showAdvancedOptions: false,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#007FFF",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#007FFF",
          action: "#007FFF",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },
        fonts: {
          default: null,
          "'Inter', sans-serif": {
            url: "https://fonts.googleapis.com/css2?family=Inter",
            active: true
          }
        }
      }
    },
      (err, info) => {
        if (info.event === "success") {
          console.log(info.info.secure_url)
          setFile(info.info.secure_url)
        } else {
          return err
        }
      }
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(title === '' || description === '' || file === ''){
      toast("All Fields are required")
    } else {
      axios.post(`${API}/proposal/create`, {
        title: title,
        description: description,
        fileUrl: file
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((res) => {
        console.log(res)
        if(res.data.error) toast(res.data.error)
        else{ 
          window.location.reload(false)
          toast('Proposal Created Successfully')
        }
      }).catch((err) => {
        toast(err.error)
      })
    }
  }

  return (
    <div>
      <Heading title={"Submit a new Proposal"}/>

      <div className='w-[600px]'>
        <p className='mt-5'>Title</p>
        <TextField onChange={(e) => setTitle(e.target.value)} fullWidth sx={{mt: 0.5}}/>

        <p className='mt-5'>Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} className="border-[1.5px] border-slate-300 w-[100%] min-h-[100px] rounded mt-[5px] px-2 py-1" fullWidth sx={{mt: 0.5}}/>

        {file === '' && <p className='mt-5'>Upload PDF</p>}
        {file === '' && <div onClick={handleClick} className='h-[100px] w-[100%] border-[1.5px] border-dashed border-slate-400 cursor-pointer flex justify-center items-center mt-[5px]'>
          <p>Click to select file</p>
          {file !== '' && <PDFViewer />}
        </div>}

        {file !== '' && <PDFViewer url={file}/>}

        <Button onClick={handleSubmit} variant='contained' sx={{mt: 6}}>Submit</Button>
      </div>
    </div>
  )
}

export default SubmitProposal