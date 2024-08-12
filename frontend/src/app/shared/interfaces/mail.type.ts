export interface Mail {
    name: string;
    avatar: string;
    title: string;
    date: string;
    to: string;
    respect: string;
    content: string;
    checked : boolean,
    attachShow: string,
    inboxActive:string,
    star: string,
    attachment: Attachment[];
}

export interface ReadMail {
  name: string;
  avatar: string;
  title: string;
  date: string;
  to: string;
  respect: string;
  content: string;
  checked : boolean,
  attachShow: string,
  inboxActive:string,
  star: string,
  attachment: Attachment[];
}

export interface Attachment {
    file: string;
    size: string;
    type: 'pdf' | 'doc' | 'xls' | 'ppt' | 'txt' | 'folder' | 'image';
}
