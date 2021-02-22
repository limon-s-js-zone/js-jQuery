"use-strict"
const p=new Promise((resolve,reject)=>{
    // kick off some async work
    // ...
    setTimeout(() => {
        // resolve(1);//pending=>resolved,fulfilled
        reject(new Error("error-occured"));//pending=>reject,fulfilled
    }, 2000);
})

// consume the promise
p.then(result=>console.log("Result:",result)).catch(err=>console.log(err.message));

const user=getUser(1).then(user=>getRepositories(user.profile)).then(repo=>getCommits(repo[0])).then(commit=>console.log(commit)).catch(err=>console.log(err.message));

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Getting a user from a database");
            resolve({id:id,profile:"limon"});
        },2000)
    })
}

function getRepositories(user){
    return new Promise((resolve,reject)=>{

        setTimeout(function(){
            console.log("Getting repositories from Git-APi:",user);
            resolve(["repo1","repo2","repo3"])
        },2000)
    })
}
function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Git Api commits:",repo);
            resolve(["commit1","commit2","commit3"])
        },2000)
    })
}





// promise: pomise is an object that holds the eventual result of an asynchronous function.Initialy it's a independending state when we create the promises.
// anywhere we have an asychronous function that takes a callback we should modified that function that reaturn a promise.   