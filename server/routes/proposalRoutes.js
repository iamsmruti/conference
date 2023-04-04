import express from 'express'
const router = express.Router()

import { allProposals, newProposal, proposalInfo, deleteProposal, updateProposal } from '../controllers/proposalController.js'

router.get('/all', allProposals )
router.post('/create', newProposal)
router.get('/info', proposalInfo )

router.put('/update', updateProposal)
router.delete('/delete', deleteProposal)

export default router

