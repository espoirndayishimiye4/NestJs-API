import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller('users')

export class UserController {
    constructor(private readonly userService: UsersService) {}


    @Post()
    insertUser(
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        const userId  = this.userService.insertUser(username,password);
        
        return{ id: userId};
    }

    @Get()
    getAllUsers(){
        return this.userService.getUsers();
    }

}