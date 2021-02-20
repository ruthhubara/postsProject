export const toUpperCase = ({ dispatch, getState }) => next => action => {

        action.payload =  action.payload.toUpperCase();
    
    return next(action);
};