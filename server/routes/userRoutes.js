import express from 'express'
const router = express.Router()

import { userRoles, userInfo, allUsers, deleteUser, updateUser, createUser } from '../controllers/userController.js'
import { verify } from '../middlewares/verify.js'

router.get('/roles', verify, userRoles )
router.get('/all?id', allUsers)
router.get('/info', verify, userInfo )
router.post('/create', createUser)
router.delete('/delete', deleteUser)
router.put('/update', updateUser )

export default router

