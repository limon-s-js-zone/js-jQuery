var getText = document.getElementById("getTxt");
var getUsers = document.getElementById("getUsers");
var getApiData = document.getElementById("getApiData");
var submit_Form = document.getElementById("submitForm");
var check_all = document.getElementById("checkALL");
getText.addEventListener("click", getTxt);
getUsers.addEventListener("click", getUser);
getApiData.addEventListener("click", fetchApiData);
submit_Form.addEventListener("click", postData);
check_all.onclick = checkAll;

function getTxt() {
    fetch("sample.txt")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        });
    console.log(123);
}
function getUser() {
    fetch("users.json")
        .then((res) => res.json())
        .then((data) => {
            let output = "<h2 class='mb-3'>Users</h2>";
            data.forEach(function (user) {
                output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">Id:${user.id}</li>
                    <li class="list-group-item">Name:${user.name}</li>
                    <li class="list-group-item">Email:${user.email}</li>
                </ul>
                `;
            });
            document.getElementById("output").innerHTML = output;
            console.log(data);
        });
}
function fetchApiData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            let output = "<h2 class='mb-3'>Posts</h2>";
            data.forEach(function (post) {
                output += `
                    <div class="card card-body mb-3">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;
            });
            document.getElementById("output").innerHTML = output;
            console.log(data);
        });
}

// post data
function postData(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    const selectedSubject = document.querySelectorAll("input[name='subject']");
    let subject;
    for (const sub of selectedSubject) {
        if (sub.checked) {
            subject = sub.value;
        }
    }
    // checkbox
    let colors = generateCheckbox("colorset");
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain,*/*",
            "Content-Type": "Application/json",
        },
        // credentials: "",
        body: JSON.stringify({
            name: name,
            email: email,
            gender: gender,
            subject: subject,
            colors: colors,
        }),
    })
        .then((succes) => succes.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    // console.log(colors);
    console.log(gender);
    // console.log(subject);
}
function generateCheckbox(name) {
    let checkboxs = document.querySelectorAll(`input[name='${name}']:checked`);
    var values = [];
    checkboxs.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}
function check(checked) {
    const cbs = document.querySelectorAll('input[name="colorset"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
}
function checkAll() {
    check(true);
    this.onclick = uncheckAll;
}
function uncheckAll() {
    check(false);
    // reassign click event handler
    this.onclick = checkAll;
}

// validation
function error(input, message) {
    input.className = "error";
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}
const error = input.previousElementSibling;
error.innerText = message;

function success(input) {
    input.className = "success";
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = "";
    return true;
}
