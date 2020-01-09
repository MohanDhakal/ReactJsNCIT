let salary, type, taxAmount;
let discount = 0.5;
/*salary constants*/
function calculateTaxAmount() {
    /*first get input value*/
    salary = +(document.getElementById('salary').value);

    if (document.getElementById('r_gov').checked) {
        type = document.getElementById('r_gov').value;
    } else if (document.getElementById('r_ngov').checked) {
        type = document.getElementById('r_ngov').value;
    } else type = "no item selected";
    taxAmount = (salary) * (getTaxPercent() * 0.01);
    alert(getTaxPercent());
    taxAmount = (type == 'Gov') ? (taxAmount * discount) : taxAmount;
    document.getElementById('placeholder').innerHTML = "Your Tax Amount is Nrs :" + taxAmount;
}

function getTaxPercent() {
    /*now compare salary and calculate percentage*/
    return (10000 <= salary <= 30000) ? 1.5 :
        (30000 < salary <= 50000) ? 2 :
            (50000 < salary <= 80000) ? 5 :
                (salary > 80000) ? 7 : 0;
}

