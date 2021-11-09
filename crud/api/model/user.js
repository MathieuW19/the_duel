const joi = require('joi');

const schema = joi.object({
    uuid: joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }),

    lastname: joi.string()
    .min(2)
    .max(24)
    .required(),

    firstname: joi.string()
    .min(2)
    .max(24)
    .required(),

    password: joi.string()
    .alphanum()
    .min(60)
    .max(60)
    .required(),

    role: joi.number()
    .allow(0,1)
    .required(),

    gender: joi.number()
    .allow(0,1)
    .required(),

    authorized: joi.boolean(),

    optin: joi.boolean(),

    double_optin: joi.boolean()    

})