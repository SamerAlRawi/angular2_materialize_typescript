export class User {
    name: string;
    email: string;
    isReadOnly: boolean;
    editing: boolean;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
