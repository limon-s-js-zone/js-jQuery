async function displayusersRepos() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.profile);
    const commits = await getCommits(repos[0]);
    console.log("commit:>>", commits);
  } catch (error) {
    console.log(error.message);
  }
}
displayusersRepos();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting a user from a database");
      resolve({ id: id, profile: "limon" });
    }, 2000);
  });
}

function getRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Getting repositories from Git-APi:", user);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Git Api commits:", repo);
      resolve(["commit1", "commit2", "commit3"]);
    }, 2000);
  });
}
