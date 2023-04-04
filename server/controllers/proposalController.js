import Proposal from '../models/Proposal.js'

export const newProposal = async (req, res) => {
    try {
        const newProposal = new Proposal({
            title: req.body.title,
            description: req.body.description,
            author: req.user.email,
            fileUrl: req.body.fileUrl
        })

        const proposal = await newProposal.save()
        return res.status(200).json(proposal)
    } catch (err) {
        res.json({error: err})
    }
}

export const allProposals = async (req, res) => {
    try {
        const proposals = await Proposal.find({})
        return res.status(200).json(proposals)
    } catch (err) {
        return res.json({error: err})
    }
}

export const getProposals = async (req, res) => {

    try {
        const proposals = await Proposal.find({author: req.user.email})
        return res.status(200).json(proposals)
    } catch (err) {
        return res.json({error: err})
    }
}

export const updateProposal = async (req, res) => {
    const { id } = req.query
    console.log(id)

    try {
        await Proposal.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            fileUrl: req.body.fileUrl,
            status: req.body.status
        })

        return res.status(200).json("update successfull")
    } catch (err) {
        return res.json({error: err})
    }
}

export const deleteProposal = async (req, res) => {
    try {
        
        await Proposal.findByIdAndDelete(id)
        return res.status(200).json("Proposal has been deleted")
    } catch (err) {
        return res.json({error: err})
    }
}

export const proposalInfo = async (req, res) => {
    try {
        const proposal = Proposal.findById(req.id)
        return res.status(200).json(proposal)
    } catch (err) {
        return res.json({error: err})
    }
}