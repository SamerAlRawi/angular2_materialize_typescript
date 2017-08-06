export class User {
    name: string;
    email: string;
    isReadOnly: boolean;
    dateCreated: Date;
    editing: boolean;

    constructor(name: string = '', email: string = '', date: Date = null) {
        this.name = name;
        this.email = email;
        this.dateCreated = date;
    }
}
