const joi = require('joi');

const schema = joi.object({
    uuid: joi.string()
    .uuid(),

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
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

module.exports = schema;