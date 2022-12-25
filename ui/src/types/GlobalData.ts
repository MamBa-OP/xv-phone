export interface GlobalData {
    user: User;
    time: string;
    background: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}
