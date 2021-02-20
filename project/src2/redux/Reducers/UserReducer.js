import { produce } from 'immer'

const initialState = {
    user: {
        firstName: "",
        lastName: "",
        phone: "",
        address: ""
    },
}

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            state.user.firstName = action.payload;
            break;
        case 'SET_LAST_NAME':
            state.user.lastName = action.payload;
            break;
        case 'SET_PHONE':
            state.user.phone = action.payload;
            break;
        case 'SET_ADDRESS':
            state.user.address = action.payload;
            break;
    }
}, initialState)
