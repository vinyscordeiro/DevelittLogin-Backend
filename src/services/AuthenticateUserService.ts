import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import auth from '../config/auth';
import AppError from '../errors/AppError';


interface AuthRequest {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: AuthRequest ):Promise<Response> {
        
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({ where: { email }});

        if(!user) {
            throw new AppError('Incorret email/password combination.');
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new AppError('Incorret email/password combination.');
        }

        const token = sign({}, auth.jwt.secret,{
            subject: user.id,
            expiresIn: auth.jwt.expiresIn
        });

        return{
            user,
            token
        }
    }
}

export default AuthenticateUserService;