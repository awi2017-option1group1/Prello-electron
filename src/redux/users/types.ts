type IBoardRole = {
    boardId: number,
    role: string
}

type ITeamRole = {
    teamId: number,
    role: string
}

export type IUser = {
    id: number,
    fullName?: string,
    username: string,
    bio?: Text,
    notificationEnabled: boolean,
    email: string,
    password: string,
    boardRole?: IBoardRole[],
    teamRole?: ITeamRole[]
}

export type ILoggedUser = {
    uid: number,
    email: string,
    username: string
}
