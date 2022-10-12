import { changeMode } from "./Action"

export const mapStateToProps = (state) => {
    return{
        islightOn: state.islightOn,
        theme: state.theme
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        changeMode: () => {dispatch(changeMode())}
    }
}