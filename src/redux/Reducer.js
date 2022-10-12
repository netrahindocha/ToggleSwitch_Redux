import { CHANGE_MODE } from "./Action"

const initialState = {
    islightOn: 'true'
}

const toggleMode = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MODE: return{
            ...state,
            islightOn: (state.islightOn? "false" : "true")
        }
        default: return state
    }
}

export default toggleMode