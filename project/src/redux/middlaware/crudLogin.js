import { actionsUser } from "../actions/userAction";
// import { useHistory } from 'react-router-dom';

export const login = ({ dispatch, getState }) => next => action => {
    if (action.type === 'LOGIN') {
        const u = action.payload
        const user = { userName: u.userName, password: u.password }

        fetch('http://localhost:3001/login/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
  
            body: JSON.stringify(user)

        })
            .then((res) => res.json()).then((resJson) => {
                console.log(resJson)
                debugger
                if (resJson.userId != null) {
                    localStorage.setItem('token',resJson.token)
                    debugger
                    user.id = resJson.userId
                    console.log(user.id)
                    dispatch(actionsUser.setUser(user))

                    // alert("ברוך הבא ל " + user.userName)
                }
                else {
                    alert("שם משתמש או סיסמא שגויים !!!!!!!!")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return next(action);
};
