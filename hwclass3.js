
let users = [
    {
        id: 0,
        fname: "mohan",
        lname: "Dhakal",
        address: "koteshowr",
        salary: 12000

    }, {
        id: 1,
        fname: "Ram",
        lname: "adhikari",
        address: "Latitpur",
        salary: 12000
    }, {
        id: 2,
        fname: "Chhote",
        lname: "Boka",
        address: "Pokhara",
        salary: 12000
    }
];

let newUser = {
    id: prompt("Enter Id"),
    fname: prompt("Enter First Name"),
    lname: prompt("Enter Last Name"),
    address: prompt("Enter your address"),
    salary: prompt("Enter your salary")
};
//concate doesn't modify the original string
// alert((userslist.find(item => item.id == newUser.id)).fname);

users.forEach((item, index, array) => {
    // alert(item.fname);
    (item.fname != newUser.fname && item.lname != newUser.lname) ? alert(concatUser(newUser).fname) : alert(`user already exists with username ${newUser.fname}`);
});

function concatUser(user) {
    newUserList = users.concat(user);
    return newUserList.find(item => item.id == user.id);
}

// document.getElementById('placeholder').innerHTML = "dummy";