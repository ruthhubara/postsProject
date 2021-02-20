import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import addPost from './addPost';

// import axios from 'axios'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(function Posts(props) {
    const { user } = props;
    let [ListPosts, setListPosts] = useState([]);
    useEffect(
        () => {

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            })
                .then((res) => res.json()).then((resJson) => {
                    setListPosts(resJson)
                    console.log(ListPosts)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        //     axios.get(`https://jsonplaceholder.typicode.com/posts`)
        //         .then(response => {
        //             ListPosts = response.data
        //             // console.log(ListPosts)
        //         }).catch(err => {
        //             console.log("err ", err)
        //         })
        // }
        , []
    )




    return (
        <>
            {/* <table>
                <th>
                    <td>title</td>
                    <td>body</td>
                </th>
                {ListPosts.map((item) => (

                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>
                            <button onClick={() => { addPost(item) }}>add to my posts</button>
                        </td>
                    </tr>
                ))}
                

            </table> */}
            {/* {ListPosts.map((item) => (
                <div key={item.id} className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>
                    </div>
                </div>))}
                { */}
            <h1 style={{ color: 'green' }}>posts</h1>
            <div className="row" style={{ marginLeft: 2 }} >
                {ListPosts[0] && ListPosts.map((post) =>
                    <div key={post._id} className="card border-success mb-3 ml-2 mr-2" style={{ width: "18rem" }}>
                        <div className="card-header">
                            <svg style={{ width: 30, height: 50 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div className="card-body text-success">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button type="button" onClick={() => { addPost(post, user.id) }} className="btn btn-outline-success" >add to my posts</button>

                        </div>
                    </div>

                )}
            </div>


            {/* <div key={post._id} className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">date:{post.date}  time:{post.time}</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button type="button" onClick={() => deletePost(post._id)} className="btn btn-outline-success" style={{ marginRight: 20 }}>delete</button>
                            <button type="button" onClick={() => updatePost(post)} className="btn btn-outline-success">update</button>
                        </div>
                    </div> */}
        </>
    )

})




// import { setTempElementImg } from '../actions/canvasActions'
// import { setUser, setCheckPermission } from '../actions/userAction'
// import $ from 'jquery'
// import { auth } from '../../services/firebase';
// import axios from 'axios';
// import promise from 'promise'

// let username = ''
// export const checkPermission = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'CHECK_PERMISSION') {
//         console.log("user2: ", username);
//         let TokenToString = action.payload.accessToken.toString();
//         let dataToProfilePage = {
//             action: "loginCheckPermission",
//             token: TokenToString,
//         };
//         // username = getState().user.user.username
//         if (username === "null" || username === null) {
//             username = getState().user.user.username
//         }
//         $.ajax({
//             url: "https://blox.leader.codes/api/checkPremission/" + username,
//             headers: {
//                 Authorization: TokenToString
//             },
//             method: "post",
//             dataType: "json",
//             contentType: "application/json",
//             withCradentials: true,
//             data: JSON.stringify(dataToProfilePage),
//             success: function (data) {
//                 // history = useHistory()
//                 console.log("dataaaaaa", data)
//                 let jsonWebToken = data.jwt;
//                 let uid = data.uid;
//                 let noQuotesJwtData = jsonWebToken.split('"').join("");
//                 let now = new Date();
//                 now.setMonth(now.getMonth() + 1);
//                 document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/; Expires=" + now.toUTCString() + ";"
//                 let username1 = data.username
//                 dispatch(setUser({ "_id": data._id, "username": username1, "email": data.email, "uId": data.uid, "jwt": data.jwt }))
//                 console.log("uuu", username)
//                 let tempUserName = ''
//                 if (username1 !== null && username1 !== undefined) {
//                     tempUserName = username1.replace(' ', '%20')
//                 }
//                 //'http://localhost:3000/' + tempUserName
//                 // if (username1 !== null && (window.location.href != 'https://blox.leader.codes/' + tempUserName + '/')) {
//                 //     window.location.href = '/' + username1
//                 // }

//             },
//         });

//     }
//     return next(action);
// }

// export const onAuthStateChanged = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'ON_AUTH_STATE_CHANGED') {
//         auth.onAuthStateChanged(function (user) {
//             console.log("onauthstatechanged work from middleware", user);
//             if (user) {
//                 username = user.displayName;
//                 console.log("user: ", username);
//                 console.log("auth.currentUser", auth.currentUser);
//                 auth
//                     .currentUser.getIdToken(true)
//                     .then((firebaseToken) => {
//                         console.log("ft", firebaseToken);
//                         $.ajax({
//                             url: "https://blox.leader.codes/api/getAccessToken",
//                             method: "post",
//                             dataType: "json",
//                             contentType: "application/json",
//                             data: JSON.stringify({
//                                 action: "firebaseloginwithcredentials",
//                                 jwt: firebaseToken
//                             }),
//                             success: function (data) {
//                                 console.log("data", data);
//                                 dispatch(setCheckPermission(data, action.username))
//                                 // checkPremission(data);
//                             }
//                         });
//                     })
//                     .catch(function (error) {
//                         alert(error);
//                     });
//             }
//             else {
//                 //"http://localhost:3000/" 
//                 // if (window.location.href !== "https://blox.leader.codes/") {
//                 //     console.log("location")
//                 //     window.location.href = '/'
//                 // }
//             }
//         });
//     }

//     return next(action);
// }

// export const getImageFromServer = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'UPLOAD_IMAGE') {

//         $.ajax({
//             "url": 'https://blox.leader.codes/api/uploadImage/' + 'bNS4EGSQGTOuAeflYgJCULKdg122',
//             "method": "POST",
//             "processData": false,
//             "mimeType": "multipart/form-data",
//             "contentType": false,
//             "headers": {
//                 //בauthorization יש לשים jwt אחר!!!!!!!      
//                 "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJiTlM0RUdTUUdUT3VBZWZsWWdKQ1VMS2RnMTIyIiwiZW1haWwiOiJyaXZrYWZmQGdtYWlsLmNvbSIsImlwIjoiNS4xMDIuMjQ2LjIwMiIsImlhdCI6MTYwNzMzNzAxNn0.bLKjgoxTtM_UybtlAARgUViXTMwpl4WttYMUvZAsIGU"

//             },
//             "data": action.fd,
//             "async": false,
//             success: function (data1) {
//                 console.log("success")
//                 console.log(data1);
//                 setTimeout(function () {
//                     console.log("after setTimeOut");
//                     dispatch(setTempElementImg(data1, action.local_img))
//                 }, 2000);
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         });

//     }
//     // remeber!!!!!!!!!!!
//     return next(action);
// };

// export const sendTemplateToServer = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'TEMPLATE_IMAGE_TO_SERVER') {
//         $.ajax({
//             "url": 'https://blox.leader.codes/api/add-template-image',
//             "method": "POST",
//             "processData": false,
//             "mimeType": "multipart/form-data",
//             "contentType": false,
//             cache: false,
//             "headers": {
//                 //בauthorization יש לשים jwt אחר!!!!!!!      
//                 "Authorization": getState().user.user.jwt

//             },
//             "data": action.payload,
//             "async": false,
//             success: function (data1) {
//                 console.log("success")
//                 console.log(data1)
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         });


//     }
//     if (action.type === 'ADD_TEMPLATE_TO_SERVER') {
//         axios.post('https://blox.leader.codes/api/add-template/', action.payload)
//             .then(res => console.log(res.data))
//             .then(
//                 (res) => {
//                     alert('Add Template Successfuly')
//                     console.log("success" + res)
//                 })
//             .catch(err => console.log(err));
//         // $.ajax({
//         //     "type": "POST",
//         //     "url": 'https://blox.leader.codes/api/add-template',
//         //     "data": action.payload,
//         //     success: function (msg) {
//         //         alert('Add Template Successfuly');
//         //         console.log("success")
//         //         console.log(msg);
//         //     },
//         //     error: function (err) {
//         //         console.log(err)
//         //     },
//         // })

//     }
//     return next(action);
// };
