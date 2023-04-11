import joi from  "joi";

export const citySchema = joi.object({
    city: joi.string().min(1).required(),
})