import { changeMode } from "./Action"

export const mapStateToProps = (state) => {
    return{
        islightOn: state.islightOn
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        changeMode: () => {dispatch(changeMode())}
    }
}