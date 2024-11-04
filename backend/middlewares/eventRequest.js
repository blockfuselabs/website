const Joi  = require('joi');

const eventSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    start_date: Joi.date().greater('now').required(),
    end_date: Joi.date().greater('now').required(),
    link: Joi.string().uri().required(),
    image: Joi.string().required()
});


const eventUpdateSchema = Joi.object({
    title: Joi.string().min(3),
    description: Joi.string(),
    start_date: Joi.date().greater('now'),
    end_date: Joi.date().greater('now'),
    link: Joi.string().uri(),
    image: Joi.string()
});

const validateEvent = (req, res, next) => {
    const { error } = eventSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validateEventUpdate = (req, res, next) => {
    const { error } = eventUpdateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = { validateEvent, validateEventUpdate };