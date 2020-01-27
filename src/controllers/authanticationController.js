import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../models';

import hashPassword from '../utils/hash';

dotenv.config();

export default class AuthanticationController {
  /**
   * @description This helps a new User to create credentials
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   * @returns  {object} The response object
   */
  static async register(req, res) {
    try {
      const {
        firstName,
        lastName,
        userName,
        password,
        role,
        email
      } = req.body;
      const user = await User.create(
        {
          user_name: userName,
          first_name: firstName,
          last_name: lastName,
          email,
          password: await hashPassword(password),
          role
        },
        {
          fields: [
            'user_name',
            'email',
            'password',
            'first_name',
            'last_name',
            'role'
          ]
        }
      );
      const newUser = {
        id: user.id,
        email: user.email
      };
      const token = jwt.sign(newUser, process.env.KEY);
      res.status(201).json({
        status: 201,
        data: {
          token
        }
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          status: 400,
          error: 'Email exist already'
        });
      } else {
        res.status(500).json({
          status: 500,
          error
        });
      }
    }
  }
}