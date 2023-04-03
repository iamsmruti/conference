import React, { useState } from 'react'
import Layout from '../components/Layout'
import Author from './Author/Author'
import Chairman from './Chairman/Chairman'
import Reviewer from './Reviewer/Reviewer'
import Admin from './Admin/Admin'

const Home = () => {
    const [state, setState] = React.useState('author')

    const [subStateAuthor, setSubStateAuthor] = useState(1)
    const [subStateAdmin, setSubStateAdmin] = useState(1)
    const [subStateChairman, setSubStateChairman] = useState(1)
    const [subStateReviewer, setSubStateReviewer] = useState(1)

    return (
        <Layout 
            state={state} 
            setState={setState} 
            setSubStateAuthor={setSubStateAuthor}
            setSubStateAdmin={setSubStateAdmin}
            setSubStateChairman={setSubStateChairman}
            setSubStateReviewer={setSubStateReviewer}
        >
            {state === 'author' && <Author state={subStateAuthor}/> }
            {state === 'reviewer' && <Reviewer state={subStateReviewer}/> }
            {state === 'chairman' && <Chairman state={subStateChairman}/> }
            {state === 'admin' && <Admin state={subStateAdmin}/>}
        </Layout>
    )
}

export default Home