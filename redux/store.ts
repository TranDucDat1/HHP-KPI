import { configureStore } from "@reduxjs/toolkit";
import { setInfoUserSlider} from "./reducer"
const store = configureStore({
    reducer:{
        setInfoUserSlider: setInfoUserSlider.reducer
    }
})

export default store