export class User {
    username?: string;
    name?: string;
    password?: string;
    token?: string;

    constructor( username?: string, name?: string, password?: string, token?: string) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.token = token;
    }
}
