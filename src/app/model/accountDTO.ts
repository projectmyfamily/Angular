import { MembrosDTO } from './membrosDTO';
export interface AccountDTO{
    id: string,
    nome: string,
    email: string
    membros: MembrosDTO

}