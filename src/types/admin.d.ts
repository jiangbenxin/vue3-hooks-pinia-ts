interface AdminObjItf{
    id?:number
    username?:string
    nickname?:string
    email?:string
    password?:string
    note?:string
    state?:number
}
interface AdminRoleFormItf{
    userRoles:RoleObjItf[]
    roleLists:RoleObjItf[]
    adminId:number
}