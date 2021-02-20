import React from 'react';
import { connect } from 'react-redux';
import { setUserFirstName, setUserLastName, setUserPhone, setUserAddress } from '../redux/Actions/UserAction';

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        setFirstName: (firstName) => dispatch(setUserFirstName(firstName)),
        setLastName: (lastName) => dispatch(setUserLastName(lastName)),
        setPhone: (phone) => dispatch(setUserPhone(phone)),
        setAddress: (address) => dispatch(setUserAddress(address)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(function Products(props) {

    const { user, setFirstName, setLastName, setPhone, setAddress } = props;

    return (
        <>
            <h5>פרטי משתמש:</h5>
            <div>שם פרטי: {user.firstName}</div>
            <div>שם משפחה: {user.lastName}</div>
            <div>פלאפון: {user.phone}</div>
            <div>כתובת: {user.address}</div>

            <h6 style={{ color: "green" }}>עידכון משתמש</h6>
            <div className="col">
                <input type="text" placeholder="הכנס שם פרטי" onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="col" style={{ marginTop: 5 }}>
                <input type="text" placeholder="הכנס שם משפחה" onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="col" style={{ marginTop: 5 }}>
                <input type="text" placeholder="הכנס פלאפון" onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="col" style={{ marginTop: 5 }}>
                <input type="text" placeholder="הכנס כתובת" onChange={(e) => setAddress(e.target.value)} />
            </div>
        </>
    )
})