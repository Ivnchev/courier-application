import { environment } from 'src/environments/environment'


export const constants = {
    baseUrl: environment.production === true ? 'https://lit-sea-01538.herokuapp.com/' :'http://localhost:3000/api/v1/',
    authHeaderName: 'x-auth',
}