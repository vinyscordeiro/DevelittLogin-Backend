import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/me', ensureAuthenticated, async (request,response) => {

    const usersRepository = getCustomRepository(UsersRepository);
    const { id } = request.user;
    
    const user = await usersRepository.findOne({ where : {id} });

    if (!user) {
        return response.status(400).json({ message: "User not Found"});
    }

    delete user.password

    return response.json({user});

});

usersRouter.get('/all', ensureAuthenticated ,async (request,response) => {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();

    return response.json({users});
});

usersRouter.post('/', async (request,response) => {
    const { name, email, birthday, password } = request.body;

    const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            birthday,
            email,
            password,
        });

        delete user.password
        
        return response.json({user});
    
});

export default usersRouter;
