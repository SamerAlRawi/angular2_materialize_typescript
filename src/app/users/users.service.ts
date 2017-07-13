import { User } from './user'
import { Injectable } from '@angular/core';

export abstract class UsersServiceBase {
    abstract getUsers(): Promise<User[]>;
}

@Injectable()
export class UsersService implements UsersServiceBase {
    users: User[] = [
        new User('User 1', 'x@y.x'),
        new User('User 3', 'more@y.x'),
        new User('User 4', 'emsil@yx.com'),
        new User('User 2', 'dsdsd@fde.com')
    ];
    getUsers(): Promise<User[]> {
        const promise = new Promise<User[]>((resolve, reject) => {
            setTimeout(() => resolve(this.users), 2500);
        });
        return promise;
    }
}

