export interface ProjectList {
    project: string;
    avatar: string;
    status: string;
    tasks: string;
    desc: string;
    progress: number;
    startDate: string;
    endDate: string;
    tagLine: string;
    member: Member[];
}

interface Member {
    avatar: string;
    name: string;
}
