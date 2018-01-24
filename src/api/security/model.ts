export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    type: string;

    static Type: string = "io.sunshower.sdk.v1.model.core.security.PrincipalElement";

    constructor(v?: any) {
        this.type = User.Type;
        if (v) {
            Object.assign(this, v);
            this.firstName = v['first-name'];
            this.lastName = v['last-name'];
            this.emailAddress = v['email-address'];
            this.phoneNumber = v['phone-number'];
        }
    }

    toJson(): Object {
        return {
            username: this.username,
            "first-name": this.firstName,
            "last-name": this.lastName,
            "email-address": this.emailAddress,
            "phone-number": this.phoneNumber,
            password: this.password
        }
    }


}

export class Token {

    static Type: string = "io.sunshower.sdk.v1.model.core.security.AuthenticationTokenElement";


    type: string;
    value: string;

    constructor(v?: any) {
        if (v) {
            Object.assign(this, v);
        }
        this.type = Token.Type;
    }
}

export class Authentication {
    static Type: string = "io.sunshower.sdk.v1.model.core.security.AuthenticationElement";

    type: string;
    token: Token;
    principal: User;

    constructor(v?: any) {
        if (v) {
            this.token = new Token(v.token);
            this.principal = new User(v.principal);
        }
        this.type = Authentication.Type;
    }
}


export class Activation {

    static Type: string = "";

    activator: User;
    temporaryPassword: string;


    constructor(a?: any) {
        if (a) {
            Object.assign(this, a);
            if (a.activator) {
                this.activator = new User(a.activator);
            }
        }
    }
}