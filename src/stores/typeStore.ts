export interface UserState {
    users: Array<User>;
    addUser: boolean;
}

interface User {
    id: string;
    MetkaArray?: Array<MetkaElement>;
    TypeString: string;
    Login: string;
    Password: string;
}

interface MetkaElement {
    text: string;
}
