"use-strict"
const {getRepositories,getUser,getCommits}=require("./functions/callbackv1");
// to deal with async code in javascript

// callback: a callback is a function when a asynchronous function is ready.
// promise: is an object that holds the eventual result of an asynchronous operation.
// async/await
// Anonymos Function: A function that does not have a name

console.log("Before");
// callback healing //v-1
// getUser(1,function(user){
//     console.log(user);
//     getRepositories(user.profile,function(repo){
//         console.log(repo);
//         getCommits(repo,(commits)=>{
//             console.log(commits);
//         })
//     })
// });
// callback healing
getUser(1,usersRepos);

// make anonymos function to a named function
function usersRepos(user){
    console.log(user);
    getRepositories(user.profile,getRepos)
}
// const usersRepos=(user)=>{
//     console.log(user);
//    return getRepositories(user.profile,getRepos)
// }
const getRepos=(repo)=>{
    console.log(repo);
    getCommits(repo,commits);//pass function reference not calling function
}

function commits(commits){
    console.log(commits);
}


console.log("After");

