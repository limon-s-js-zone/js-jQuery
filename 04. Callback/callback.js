function getUser(id, callback) {
  setTimeout(() => {
    console.log("Getting a user from a database");
    callback({ id: id, profile: "limon" });
  }, 2000);
}

function getRepositories(user, callback) {
  setTimeout(function () {
    console.log("Getting repositories from Git-APi:", user);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
function getCommits(repo, callback) {
  setTimeout(function () {
    console.log("Git Api commits");
    callback(["commit1", "commit2", "commit3"]);
  }, 2000);
}

getUser(1, usersRepos);

function usersRepos(user) {
  console.log(user);
  getRepositories(user.profile, getRepos);
}

const getRepos = (repo) => {
  console.log(repo);
  getCommits(repo, commits); //pass function reference not calling function
};

function commits(commits) {
  console.log(commits);
}
