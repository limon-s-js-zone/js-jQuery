logger = (result = "", params = "") => console.log(result, params);

logger("App-started");
const getUser = (id, callback) => {
  logger("Data fetxhing start>3000....");
  setTimeout(() => {
    callback({ id: id, name: "limon" });
  }, 2000);
};
const getRopository = (user, callback) => {
  logger("Repositorty fetching start>3000....", user);
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
};
const getCommits = (repo, callback) => {
  logger("Commit fetching start>3000....", repo);
  setTimeout(() => {
    callback(["commit1", "commit2", "commit3"]);
  }, 2000);
};

getUser(1, (user) => {
  getRopository(user.name, (repo) => {
    logger("Repos:", repo);
    getCommits(repo[0], (commit) => {
      logger("Commit:", commit);
    });
  });
});
logger("App-End");
