export interface Chat {
    name: string;
    avatar: string;
    msg: Msg[];
    time: string;
    chatType: string;
    id: number;
    day: string;
    newChat: number;
}

export interface Msg {
    avatar: string;
    text: string;
    from: string;
    time: string;
    msgType: 'text' | 'date' | 'image' | 'file';
}
