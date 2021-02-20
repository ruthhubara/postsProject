import { actionsProduct } from "../Actions/ProductAction";

export const UpperToProductName = ({ dispatch, getState }) => next => action => {
    debugger;
    if (action.type === 'UPPERCASE_PRODUCT_NAME') {
        debugger
        // let name = getState().productsReducer.product.name
        let newProduct = action.payload.toUpperCase();
        dispatch(actionsProduct.setProductName(newProduct))
    }

    return next(action);
};
