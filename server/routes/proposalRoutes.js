import express from 'express'
const router = express.Router()

import { allProposals, newProposal, proposalInfo, deleteProposal, updateProposal, getProposals } from '../controllers/proposalController.js'
import { verify } from '../middlewares/verify.js'

router.get('/all', allProposals )
router.post('/create', verify, newProposal)

router.get('/info', proposalInfo )
router.get('/get-proposals', verify, getProposals)

router.put('/update', updateProposal)
router.delete('/delete', deleteProposal)

export default router

