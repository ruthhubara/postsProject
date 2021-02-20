import { actionsUser } from "../actions/userAction";

export const addUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_USER') {
        
        const u = action.payload
        const user = { userName: u.userName, password: u.password }

        fetch('http://localhost:3001/AddUser', {
            method: 'post',
            headers: { 'Content-Type': 'application/json',
                            // Authorization: TokenToString,
         },
            // headers: {
            //     // Authorization: TokenToString,
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(user)

        })
            .then((res) => res.json()).then((resJson) => {
                console.log(resJson)
                debugger
                if (resJson.userId != null) {
                    localStorage.setItem('token',resJson.token)
                    console.log(resJson.token)
                    debugger
                    user.id = resJson.userId;
                    dispatch(actionsUser.setUser(user))
                    // alert("נרשמת בהצלחה!!")
                }
                else {
                    alert("שם משתמש וסיסמא כבר קימים במערכת")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return next(action);
};