const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operations-1");
    resolve(1);
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operations-2");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));

// We don't have multi thread.but that single thread works as a multi-thrad opeartions.That means all the asychronous operations start at a smae time. It does not depennd another async operations.

// but

Promise.race([p1, p2])
  .then((result) => {
    console.log("Promise races"), console.log(result);
  })
  .catch((err) => console.log("Error", err.message));
