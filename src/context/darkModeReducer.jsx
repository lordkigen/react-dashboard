const DarkModeReducer  = (State , action) => {
    switch(action.type){
        case "LIGHT": {
            return {
                darkMode: false,
            };
        }
        case "DARK": {
            return {
                darkMode: true,
            };
        }
        case "TOGGLE": {
            return {
                darkMode: !State.darkMode,
            };
        }
        default: return State
    }
}

export default  DarkModeReducer