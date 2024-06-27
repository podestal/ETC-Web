import AuthClient from "./authClient";

export interface User {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    group_name?: string
}

export default new AuthClient<User>('/users/me/')