import { createStore } from "redux";
import toggleMode from "./Reducer";

const store = createStore(toggleMode)

export default store