
const Post = require('../models/post')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const AddPost = async (req, res) => {
    try {
        console.log('addddddddddddddddddddddddddddddd')

        const { title, body } = req.body
        // const token = jwt.sign({userName: userName, password: password}, process.env.SECRET)
        const newPost = new Post({
            title,
            body
        })

        await newPost.save()
        res.status(200).json({ post: newPost })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}
const deletePost = async (req, res) => {
    try {
        jwt.verify(req.headers.authorization, process.env.SECRET)

    }
    catch (err) {
        res.status(401).json({ err: "verify err" })
    }
    try {
        // authorization‏
        console.log("aaaaaaaaaaaa")
        const userId = req.params.userId
        const postId = req.params.postId

        await Post.findByIdAndDelete(postId)
        // const user = await User.findById(userId)

        // let newUserPosts = []
        // for (let i = 0; i < user.posts.length; i++) {
        //     if (user.posts[i] != postId) {
        //         console.log(user.posts[i])
        //         newUserPosts.push(user.posts[i])
        //         console.log(newUserPosts)
        //     }

        // }
        const user = await User.findByIdAndUpdate(userId, { $pull: { posts: postId } })

        // user.posts = newUserPosts
        user.save()
        // user.posts.remove(postId)
        res.status(200).json(true)
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}

const updatePost = async (req, res) => {
    try {
        jwt.verify(req.headers.authorization, process.env.SECRET)

    }
    catch (err) {
        res.status(401).json({ err: "verify err" })
    }
    try {

        console.log('update')
        console.log(req.params.postId)
        console.log(req.body)
        await Post.findByIdAndUpdate(req.params.postId, req.body)
        res.status(200).json(true)

    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}
module.exports = { AddPost, deletePost, updatePost }









// const submitFunction = async () => {
//     let data = { name: user.name, password: user.password };
//     fetch("http://localhost:3001/addUser", {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .then((data) => {
//             debugger
//             setId(data.user._id);
//             localStorage.setItem('user','Bearer '+data.token)
//             history.push('/tasks');
//         })
//         .catch(err => console.log(err))
// }



















// const addTaskFunc = (task) => {
//     let data = { userId: user.id, task: task };
//     fetch(`http://localhost:3001/addTask`, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": localStorage.getItem('user')
//         },
//         body: JSON.stringify(data)
//     })
//         .then(res => {
//             if (res.status === 401)
//                 history.push('/error');
//             else
//                 return res.json()
//         })
//         .then((res) => {
//             console.log(res.task)
//             addTask(res.task);
//             alert("The task was successfully added");
//         })
//         .catch(err => console.log(err))
// }











// const getUser = async (req, res) => {
// try {
//     let user = await User.findOne({ "name": req.body.name, "password": req.body.password });
//     if (user) {     
//            let token = jwt.sign({ "name": user.name, "password": user.password }, process.env.JWT_KEY);
//         res.status(200).json({ user: user, token: token });
//     }
//     else
//         res.status(404).json({ message: "No user found!!!" })
// }
// catch (err) {
//     res.status(400).json({ message: err });
// }
// }
// const getTasksToUser = async (req, res) => {
// try {
//     let token = req.headers.authorization.split(' ')[1];
//     jwt.verify(token, process.env.JWT_KEY);
// }
// catch (err) {
//     res.status(401).json({ message: "error verify" })
// }
// try {
//     let user = await User.findOne({ _id: req.params.id }).populate('tasks');
//     console.log("user: ", user)
//     if (user)
//         res.status(200).json({ user: user.tasks });
//     else
//         res.status(404).json({ message: "No user found!!!" })
// }
// catch (err) {
//     res.status(400).json({ message: err });
// }
// }



