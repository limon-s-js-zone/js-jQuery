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
function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject("something went wrong");
            }
        }, 2000);
    });
}
// async await
async function init() {
    try {
        await createPosts({ title: "node.Js", body: "this is for node.js" });
        getpost();
    } catch (error) {
        console.log(error);
    }
}
init();
// // async await fetch
async function fetchUser() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchUser();
/* createPosts({ title: "node.Js", body: "this is for node.js" })
    .then(getpost)
    .catch((err) => console.log(err));
// promiseAll

var promise1 = Promise.resolve("hello javascript");
var promise2 = 10;
var promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "goodby javascript");
});
var promise4 = fetch(
    "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json());
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
    console.log(values)
);
 */
