import mongoose from 'mongoose'

const ProposalSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        unique: true,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'review pending'
    }
}, {timestamps : true})

const Proposal = mongoose.model('Proposal', ProposalSchema)
export default Proposal

// 1 - review pending
// 2 - approve pending
// 3 - published