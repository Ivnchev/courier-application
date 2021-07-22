import { environment } from 'src/environments/environment'


export const constants = {
    baseUrl: environment.production === true ? 'https://courier-workshop.herokuapp.com/api/v1/' :'http://localhost:3000/api/v1/',
    authHeaderName: 'x-auth',
}