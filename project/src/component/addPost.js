
export default function addPost(post, userId) {
    debugger
    const postToAdd = { title: post.title, body: post.body }
    // const userId = user.id
    console.log(post)

    fetch('http://localhost:3001/AddPost/' + userId, {

        method: 'post',
        headers: {
            'Authorization': localStorage.getItem('token'),
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postToAdd)
    })
        .then((res) => res.json()).then((resJson) => {
            debugger
            alert("נוסף בהצלחה")

        })
        .catch((err) => {
            console.log(err)
        })
}