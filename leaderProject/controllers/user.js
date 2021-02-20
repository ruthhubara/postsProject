const User = require('../models/user')
const Post = require('../models/post')

const jwt = require('jsonwebtoken')

const Login = async (req, res) => {
    try {

        console.log('work!!')
        const { userName, password } = req.body

        // const userLogin = await User.findById("6029842a44702efc0311a4be")
        const userLogin = await User.findOne({ userName: userName, password: password })
        if (userLogin == null) {
            res.json(false)
        }
        else {
            console.log("before jwt")
            const token = jwt.sign({ userName: userName, password: password }, process.env.SECRET)

            res.status(200).json({ userId: userLogin._id, token: token })
            console.log("after jwt")

            // console.log(userLogin)
        }
    }
    catch (err) {
        res.status(500).json({ error: err })
        console.log('drftgyh')
    }
}

const AddUser = async (req, res) => {
    try {
        console.log("fgcvdtcfdbhxji")
        const { userName, password } = req.body
        const user = await User.findOne({ userName: userName, password: password })
        if (user == null) {
            const newUser = new User({
                userName,
                password,
            })

            await newUser.save()
            const token = jwt.sign({ userName: userName, password: password }, process.env.SECRET)
            res.status(200).json({ userId: newUser._id, token: token })
        }
        else {
            res.json(false)
        }

        // const token = jwt.sign({userName: userName, password: password}, process.env.SECRET)


    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

const AddPost = async (req, res) => {
    try {
        jwt.verify(req.headers.authorization, process.env.SECRET)

    }
    catch (err) {
        res.status(401).json({ err: "verify err" })
    }
    try {
        console.log("dfdcf")
        const { title, body } = req.body
        //לא נותן להוסיף פוסטים שיש להם title ו body אותו דבר 
        // let post = await Post.findOne({ title: title, body: body })
        // if (post == null) {
        //     console.log('nullllllll')
        //     const newPost = new Post({
        //         title,
        //         body
        //     })
        //     await newPost.save()
        //     post = newPost
        //     console.log(post)

        // }
        let dateTime = new Date()
        let time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
        console.log(time);
        var date = dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear();


        // date.toDateString();
        // console.log(date)
        const newPost = new Post({
            title,
            body,
            date,
            time

        })
        await newPost.save()
        const userId = req.params.userId
        console.log("post:" + newPost)
        const user = await User.findById(userId)
        // לא ניתן להוסיף פוסט שכבר קיים במערך
        // if (!user.posts.includes(newPost._id)) {
        //     console.log("tttttttttttt")

        user.posts.push(newPost._id)
        await user.save()
        // }

        console.log(user)

        res.status(200).json({ post: newPost })
    }
    catch (err) {
        res.status(500).json({ error: err })
        console.log(err)
    }
}

const getUserPosts = async (req, res) => {
    try {
        jwt.verify(req.headers.authorization, process.env.SECRET)

    }
    catch (err) {
        res.status(401).json({ err: "verify err" })
    }
    try {
        const userId = req.params.userId
        const userWithPosts = await User.findById(userId).populate('posts')
        console.log(userWithPosts)
        res.status(200).json({ posts: userWithPosts.posts })
    }
    catch (err) {
        res.status(500).json({ error: err })
        console.log('error')
    }
}
module.exports = { Login, AddUser, getUserPosts, AddPost }


// const ls = require('local-storage');
//  ls.set('token', response.data.token)
//             ls.get('token')‏

// const ls = require('local-storage');
//  ls.set('token', response.data.token)
//             ls.get('token')‏
// const token=req.headers.authorization.split(' ')[1]
//         jwt.verify(token,process.env.JWT_KEY)‏