
import {quizResultArrayObjTypes} from './types/Types'


export default  async function Quizapi(url:string):Promise<quizResultArrayObjTypes[]>{
    
    
    let response = await fetch(url).then((response)=>{
        if(response.ok){
            return response.json()
        }
    }).catch(()=>{
        console.log("error")
    })
    
    if(response===undefined){
        return []
    }
    
       
     let {results} = response
    
    return results
    
    

        
    
    
    
}