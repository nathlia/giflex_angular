export class Player {    
    username?: string;
    name?: string;
    password?: string;
    token?: string;
    isAdmin?: boolean;

    constructor( username?: string, name?: string, password?: string, token?: string, isAdmin?: boolean) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.token = token;
        this.isAdmin = isAdmin;
    }
}
