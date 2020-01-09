let jsonString = [{
    id: 0,
    name: "mohan",
    surname: "dhakal"
}, {
    id: 1,
    name: "jd",
    surname: {
        address: "kathmandu"
    }
}];

let data = [{
    id: 1,
    add: function (a, b) {
        return a + b;
    }
}, {
    id: 2,
    add: function (a, b) {
        return a + b;
    }
}];
// index = prompt("Enter the index");
// let array = ["i", "am", "mohan", "kumar", "dhakal"];
// delete array[+index];
// array.splice(-3, 1, 'ram');
// alert(array);
// let mYname;
// for (i = 0; i < jsonString.length; i++) {
//     mYname = jsonString[i].name;
//     if (mYname.startsWith('m')) {
//         alert(jsonString[i].name);
//         delete jsonString[i];
//     }
// }
// let newArray = ["i", "am", "from ", "kathmandu"];

// alert(newArray.slice(1, 2));
// alert(newArray.concat(["more", "more"]));
// alert(newArray);

// let add = (a, b) => a + b;
// let result = (() => (prompt("Enter a Number") % 2 == 0) ? alert("even") : alert("odd"));

// result();
// ["kathmandu", "lalitpur", "bhaktapur"].forEach((item, index, array) => {
//     alert(`${item}is at index ${index}in ${array}`);
// });

let users = [
    {
        id: 1,
        name: "kathmandu",
    }, {
        id: 2,
        name: "laltipur",
    }, {
        id: 3,
        name: "bhaktapur",
    }
];
// let user = users.find(item => item.id == 1);
// alert(user.name);
let someUsers = users.filter(item => item.id < 3);
alert(someUsers[0].name);
// alert(jsonString[1].surname.address);
// alert(data[1].add(2, 3));