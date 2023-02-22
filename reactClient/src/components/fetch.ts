import environment from "../env/environment";

type method = 'GET'|'POST'|'PUT'|'DELETE';
interface fetchArgument {route:string,method:method,body:any,headers:any};
const defaultArgument:fetchArgument = {route:'',method:'GET',body:undefined,headers:undefined}
const url:string = environment.backendURL;

export const fetchComponent = async({route,method,body,headers}:fetchArgument = defaultArgument) => new Promise(async(resolve,reject) => {
    await(await fetch(`${url}${route}`,{method,mode:'cors',body,headers})).json()
    .then(data => resolve(data))
    .catch((error:any) => reject(error))
})