import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Author from './Author/Author'
import Chairman from './Chairman/Chairman'
import Reviewer from './Reviewer/Reviewer'
import Admin from './Admin/Admin'
import axios from 'axios'
import { API } from '../constants'

const Home = () => {
    const [state, setState] = React.useState('author')

    const [proposals, setProposals] = useState([])

    const [user, setUser] = useState({})

    const [subStateAuthor, setSubStateAuthor] = useState(1)
    const [subStateAdmin, setSubStateAdmin] = useState(1)
    const [subStateChairman, setSubStateChairman] = useState(1)
    const [subStateReviewer, setSubStateReviewer] = useState(1)

    useEffect(() => {
        axios.get(`${API}/proposal/all`).then((res) => {
            setProposals(res.data)
        }).catch((err) => {
            console.log(err)
        })

        axios.get(`${API}/user/info`, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then((res) => {
            setUser(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <Layout 
            state={state} 
            setState={setState} 
            setSubStateAuthor={setSubStateAuthor}
            setSubStateAdmin={setSubStateAdmin}
            setSubStateChairman={setSubStateChairman}
            setSubStateReviewer={setSubStateReviewer}
        >
            {state === 'author' && <Author proposals={proposals} state={subStateAuthor}/> }
            {state === 'reviewer' && <Reviewer proposals={proposals} state={subStateReviewer}/> }
            {state === 'chairman' && <Chairman proposals={proposals} state={subStateChairman}/> }
            {state === 'admin' && <Admin proposals={proposals} state={subStateAdmin}/>}
        </Layout>
    )
}

export default Home