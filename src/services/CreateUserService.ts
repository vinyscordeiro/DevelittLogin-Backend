import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface ResquestDTO {
    name: string;
    birthday: Date;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, birthday, email, password }: ResquestDTO): Promise<User>{

        const usersRepository = getCustomRepository(UsersRepository);
        const userExists = await usersRepository.findByEmail(email);

        if(userExists) {
            throw new AppError('Email adress already exists');
        }

        const hashedPassword = await hash(password, 8);

        const  user = usersRepository.create({
            name,
            birthday,
            email,
            password: hashedPassword
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
