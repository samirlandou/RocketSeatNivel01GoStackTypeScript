import {Request, Response} from 'express'
import createUser from './services/CreteUser'

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'samir@gmail.com',
        password: '123456',
        techs:[
            'React',
            'React native',
            'NodeJS',
            { title: 'javascript', experience: 100}
        ]
    });

    return response.json({message: 'Hello My World'});
}