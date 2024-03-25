export interface UserState {
    users: Array<User>
}

interface User {
    id: string;
    MetkaArray?: Array<MetkaElement>;
    TypeString: string;
    Login: string;
    Password: string;
}

interface MetkaElement {
    text: string
}