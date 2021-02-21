import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import Login from '../component/login/login';
import Posts from '../component/posts';
import MyPosts from '../component/myPosts/myPosts';
import Register from '../component/register/register'
import UpdatePost from '../component/myPosts/updatePost'
import NewPost from '../component/newPost/newPost';
import './nav.css';
import newPost from '../component/newPost/newPost';
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
export default connect(mapStateToProps, null)(function RoutesNav(props) {
    const { user } = props
    return (
        <div>
            <Router>
                {/* <h1>{user.userName}</h1> */}
                <Nav />
                <Switch>
                    {/* <Route path="/">
                        <Login />
                    </Route> */}
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/myPosts">
                        <MyPosts />
                    </Route>
                    <Route path="/registerUser">
                        <Register />
                    </Route>
                    <Route path="/updatePost">
                        <UpdatePost />
                    </Route>
                    <Route path="/newPost">
                        <NewPost />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
})


function Nav() {
    return (
        <>
            <nav>
                <ul className="sidenav" style={{ color: 'green' }}>
                    <li>
                        <a href="/"  >exit</a>
                    </li>
                    <li>
                        <Link to="/posts">posts</Link>
                    </li>
                    <li>
                        <Link to="/myPosts">myPosts</Link>
                    </li>
                    <li>
                        <Link to="/newPost">New post</Link>
                    </li>

                </ul>
            </nav>
            <br></br>

        </>
    )
}