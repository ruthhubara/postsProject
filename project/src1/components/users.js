import React from 'react';
import { connect } from 'react-redux';
// import { setUserName, setUserPhone, setUserMail, setUserAddress, addNewUser } from '../redux/Actions/UserAction';
import { actionsUser } from '../redux/Actions/UserAction';


function mapStateToProps(state) {

    return {
        users: state.userReducer.users
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        // setName: (name) => dispatch(setUserName(name)),
        // setPhone: (phone) => dispatch(setUserPhone(phone)),
        // setMail: (mail) => dispatch(setUserMail(mail)),
        // setAddress: (address) => dispatch(setUserAddress(address)),
        // addUser: () => dispatch(addNewUser())
        setName: (name) => dispatch(actionsUser.setUserName(name)),
        setPhone: (phone) => dispatch(actionsUser.setUserPhone(phone)),
        setMail: (mail) => dispatch(actionsUser.setUserMail(mail)),
        setAddress: (address) => dispatch(actionsUser.setUserAddress(address)),
        addUser: () => dispatch(actionsUser.addNewUser())

    }
)

export default connect(mapStateToProps, mapDispatchToProps)(function Products(props) {

    const { users, setName, setPhone, setMail, setAddress, addUser } = props;


    return (
        <>
            <table className="table col-10" style = {{ marginLeft: 80}}>
                <thead>
                    <tr style={{ color: "green" }}>
                        <th scope="col">name</th>
                        <th scope="col">phone</th>
                        <th scope="col">mail</th>
                        <th scope="col">address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td >{u.name}</td>
                            <td>{u.phone}</td>
                            <td>{u.email}</td>
                            <td>{u.address}</td>
                            {/* <td>
                                <input onChange={(e) => updateName(e.target.value)} placeholder="הכנס שם" />
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />
            <br />


                <h6 style={{ color: "green" }}>הוספת משתמש חדש</h6>

                <div className="col">
                    <input type="text" placeholder="הכנס שם" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="col" style={{ marginTop: 5 }}>
                    <input type="text" placeholder="הכנס פלאפון" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="col" style={{ marginTop: 5 }}>
                    <input type="text" placeholder="הכנס מייל" onChange={(e) => setMail(e.target.value)} />
                </div>

                <div className="col" style={{ marginTop: 5 }}>
                    <input type="text" placeholder="הכנס כתובת" onChange={(e) => setAddress(e.target.value)} />
                </div>

                <button className="btn btn-success" style={{ marginTop: 5 }} onClick={addUser}>הרשמה</button>
        </>
    )

})