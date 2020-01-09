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
}
];

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
}]
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
result = (() => (prompt("Enter a Number") % 2 == 0) ? "even" : "odd");
alert(result());

// alert(jsonString[1].surname.address);
// alert(data[1].add(2, 3));