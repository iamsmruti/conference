import Joi from 'joi'

export const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    })

    return (schema.validate(data))
}

export const creationValidation = data => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        roles: Joi.array().required()
    })

    return (schema.validate(data))
}


export const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    })

    return (schema.validate(data))
}

