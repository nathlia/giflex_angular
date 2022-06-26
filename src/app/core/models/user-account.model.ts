export class UserAccount {    
    username?: string;
    name?: string;
    password?: string;
    token?: string;
    is_admin?: boolean;

    constructor( username?: string, name?: string, password?: string, token?: string, is_admin?: boolean) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.token = token;
        this.is_admin = is_admin;
    }
}
