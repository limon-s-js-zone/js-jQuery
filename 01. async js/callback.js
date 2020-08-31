const posts = [
    { title: "javascript", body: "this is post one" },
    { title: "C#", body: "this is post for C#" },
    { title: "Python", body: "this is post for Python" },
];
function getpost() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li><span>${post.title}</span> ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
// getpost();
createPosts({ title: "node.Js", body: "this is for node.js" }, getpost);
