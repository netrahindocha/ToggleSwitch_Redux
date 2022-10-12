import { CHANGE_MODE } from "./Action"

const initialState = {
    islightOn: 'true',
    theme: 'lit'
}

const toggleMode = (state = initialState, action) => {
    console.log(state.theme);
    switch(action.type){
        case CHANGE_MODE: return{
            ...state,
            islightOn: (state.islightOn === 'true'?'false':'true'),
            theme: (state.islightOn === 'true'? 'dark': 'lit')
        }
        default: return state
    }
}

export default toggleMode