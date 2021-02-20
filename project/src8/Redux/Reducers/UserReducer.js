
import { produce } from 'immer';
import createReducer  from "./ReducerUtils";

const initialState = {
    user: {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: ""
    },

    users: [
        {
            id: "100",
            name: "Chana Cohen",
            phone: "0533122777",
            email: "c777@gmail.com",
            address: "chana 12 jerusalem"

        }
    ],


    id: 101

}

const Users = {
    setUserName(state, action) {
        state.user.name = action.payload;
    },

    setUserPhone(state, action){
        state.user.phone = action.payload;
    },
    setUserMail(state, action){
        state.user.email = action.payload;
    },
    setUserAddress(state, action){
        state.user.address = action.payload;
    },
    addNewUser(state, action){
        state.user.id = state.id;
        state.id ++;
        let usersList = [...state.users, state.user];
        state.users =usersList;
      
    }
}

export default produce ((action, payload) => createReducer(action, payload, Users), initialState);
