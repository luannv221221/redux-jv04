const initailQantity = 17;
export const cart = (state = initailQantity, action) => {
    switch (action.type) {
        case "increase":
            return state + action.payload;
        case "decrease":
            return state - action.payload;
        default:
            return state;
    }
}