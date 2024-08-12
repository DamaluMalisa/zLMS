export interface ContactGrid {
    avatar: string;
    name: string;
    rule: string;
    checked : boolean,
    star: string,
    user: User[];
}

interface User {
    type: 'call' | 'skype' | 'map' | 'mail';
    icon: string;
    name: string;
}
