import Joi from '@hapi/joi';

/**
 * @description UserSchema class validates user data
*/
class UserSchema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
  static signup(data) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
          'string.base': 'email must be a string',
          'string.email': 'email must be a valid email',
          'any.required': 'email is required',
          'string.empty': 'email is not allowed to be empty'
        }),

      userName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
          'string.base': 'userName must be a string',
          'string.min': 'userName length must be at least {{#limit}} characters long',
          'string.max': 'userName length must be less than or equal to {{#limit}} characters long',
          'any.required': 'userName is required',
          'string.empty': 'userName is not allowed to be empty'
        }),

      password: Joi.string()
        .min(8)
        .max(64)
        .required()
        .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .messages({
          'string.base': 'password must be a string',
          'string.min': 'password length must be at least {{#limit}} characters long',
          'string.max': 'password length must be less than or equal to {{#limit}} characters long',
          'any.required': 'password is required',
          'string.pattern.base': 'password must include at least a number and a capital letter',
          'string.empty': 'password is not allowed to be empty'
        }),
    });

    return schema.validate(data);
  }

  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
  static profile(data) {
    const schema = Joi.object().keys({
      first_name: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'firstName must be a string',
          'string.min': 'firstName length must be at least {{#limit}} characters long',
          'string.max': 'firstName length must be less than or equal to {{#limit}} characters long',
        }),
      last_name: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'lastName must be a string',
          'string.min': 'lastName length must be at least {{#limit}} characters long',
          'string.max': 'lastName length must be less than or equal to {{#limit}} characters long',
        }),
      user_name: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'userName must be a string',
          'string.min': 'userName length must be at least {{#limit}} characters long',
          'string.max': 'userName length must be less than or equal to {{#limit}} characters long',
        }),
      phone: Joi.string().min(10).max(20)
        .messages({
          'string.base': 'phone must be a string',
          'string.min': 'phone length must be at least {{#limit}} characters long',
          'string.max': 'phone length must be less than or equal to {{#limit}} characters long',
        }),
      gender: Joi.string().regex(/^(Male|Female|MALE|FEMALE|male|female)$/)
        .messages({
          'string.base': 'gender must be a string',
          'string.pattern.base': 'gender must be Male|Female|MALE|FEMALE|male|female',
        }),
      dob: Joi.date()
        .messages({
          'date.base': 'dob must be a date',
        }),
      address: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'address must be a string',
          'string.min': 'address length must be at least {{#limit}} characters long',
          'string.max': 'address length must be less than or equal to {{#limit}} characters long',
        }),
      country: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'country must be a string',
          'string.min': 'country length must be at least {{#limit}} characters long',
          'string.max': 'country length must be less than or equal to {{#limit}} characters long',
        }),
      prefered_language: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'prefered_language must be a string',
          'string.min': 'prefered_language length must be at least {{#limit}} characters long',
          'string.max': 'prefered_language length must be less than or equal to {{#limit}} characters long',
        }),
      prefered_currency: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'prefered_currency must be a string',
          'string.min': 'prefered_currency length must be at least {{#limit}} characters long',
          'string.max': 'prefered_currency length must be less than or equal to {{#limit}} characters long',
        }),
      company: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'company must be a string',
          'string.min': 'company length must be at least {{#limit}} characters long',
          'string.max': 'company length must be less than or equal to {{#limit}} characters long',
        }),
      department: Joi.string().min(3).max(30)
        .messages({
          'string.base': 'department must be a string',
          'string.min': 'department length must be at least {{#limit}} characters long',
          'string.max': 'department length must be less than or equal to {{#limit}} characters long',
        }),
      line_manager: Joi.string()
        .messages({
          'string.base': 'line_manager must be a string',
        }),
    });
    return schema.validate(data);
  }

  /**
  * @static
  * @param {obj} data
  * @returns {obj} returns schema object
 */
  static assignRole(data) {
    const schema = Joi.object({

      email: Joi.string()
        .email()
        .required()
        .messages({
          'string.base': 'email must be a string',
          'string.email': 'email must be a valid email',
          'any.required': 'email is required',
          'string.empty': 'email is not allowed to be empty'
        }),
      role: Joi
        .string()
        .trim()
        .valid(
          'travel-administrator',
          'host-supplier',
          'manager',
          'requester',
          'super-administrator'
        )
        .required()
    });

    return schema.validate(data);
  }
}

export default UserSchema;
