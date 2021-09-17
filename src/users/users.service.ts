import { Injectable } from "@nestjs/common";
import {User} from './users.model'
import { v4 as uuidv4 } from 'uuid';

@Injectable()

export class UsersService {
    private users: User[] = [];

    insertUser(username: string, password: string){
        const id = uuidv4();
        const newUser = new User(id, username, password, '17/9/2021 12:30:21');

        this.users.push(newUser);
        return 'inserted';
    }

    getUsers(){
        return [ ... this.users]
    }

}