export default function Reducer (state ,{type,payload}){
    switch(type){
        case "TEST":
            return{
                ...state,
                name: payload
            }        
            default:
            return state
    }
}