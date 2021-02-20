
import { produce } from 'immer';
import  createReducer  from "./ReducerUtils";

const initialState = {
    product: {
        id: "",
        name: "",
        price: ""
    },

    products: [
        {
            id: "1",
            name: "מראה",
            price: "10.9"
        },
        {
            id: "2",
            name: "כובע",
            price: "39.9"
        },
        {
            id: "3",
            name: "כדור",
            price: "15"
        }
    ],
    id: 4
}

const Products = {
    setProductName(state, action){
        state.product.name = action.payload;
    },
    setProductPrice(state, action){
        state.product.price = action.payload;
    },
    addNewProduct(state, action){
        state.product.id = state.id;
        state.id ++;
        let productsList = [...state.products, state.product];
        state.products = productsList;
    }
}


export default produce((action, payload) => createReducer(action, payload, Products), initialState)
