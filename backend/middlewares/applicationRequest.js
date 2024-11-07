const Joi  = require('joi');
const countries = require('../json/country.json');

const applicationSchema = Joi.object({
    fullname: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required(),
    gender: Joi.string().valid('male', 'female', 'others').insensitive().required(),
    country: Joi.string().valid(...countries).insensitive().required(),
    state: Joi.string().required(),
    residential_address: Joi.string().required(),
    referral_source: Joi.string().required(),
    application_type: Joi.string().valid('waitlist', 'web2', 'web3').insensitive().required(),
});


const validateApplication = (req, res, next) => {

    const { error } = applicationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

module.exports = { validateApplication };