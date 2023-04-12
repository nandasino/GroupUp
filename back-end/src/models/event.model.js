import joi from  "joi";

export const eventSchema = joi.object({
  date: joi.date().required(),
  hour: joi.string().required(),
  isPublic: joi.boolean().required(),
  city:  joi.string().min(1).max(50).required(),
  address: joi.string().min(1).max(50).required(),
  categoryId: joi.number().min(1).required(),
  vacancies: joi.number().min(1).required(),
  description: joi.string().min(1).max(180),
})