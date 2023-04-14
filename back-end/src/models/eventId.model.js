import joi from  "joi";

export const eventIdSchema = joi.object({
  eventId: joi.number().required()
})