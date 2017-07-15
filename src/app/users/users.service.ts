import { User } from './user'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Request, Response, Headers } from '@angular/http';

export abstract class UsersServiceBase {
    abstract getUsers(): Promise<User[]>;
}

@Injectable()
export class UsersService implements UsersServiceBase {
    protected http: Http;
    private usersResponse: any;

    users: User[] = [
        new User('User 1', 'x@y.x'),
        new User('User 3', 'more@y.x'),
        new User('User 4', 'emsil@yx.com'),
        new User('User 2', 'dsdsd@fde.com')
    ];

    constructor(backend: Http) {
        this.http = backend;
    }

    getUsers(): Promise<User[]> {
        const promise = new Promise<User[]>((resolve, reject) => {
            this.http.get('/assets/getusers.json').subscribe(
                _ => this.users = JSON.parse(_.text()), // data
                console.log, // error
                () => resolve(this.users) // action
            );
        });
        return promise;
    }
}

