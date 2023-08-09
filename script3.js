function addNewWeField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("we");
    let weAddBOb = document.getElementById("weAddB");

    weOb.insertBefore(newNode, weAddBOb);
}

function addNewsField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('sField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let sOb = document.getElementById("s");
    let sAddBOb = document.getElementById("sAddB");

    sOb.insertBefore(newNode, sAddBOb);
}

function addNewAqField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("aq");
    let weAddBOb = document.getElementById("aqAddB");

    weOb.insertBefore(newNode, weAddBOb);
}

function genrateR() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = fbField;

    let ghField = document.getElementById("ghField").value;
    let ghT = document.getElementById("ghT");
    ghT.innerHTML = ghField;

    let inField = document.getElementById("inField").value;
    let inT = document.getElementById("inT");
    inT.innerHTML = inField;

    let obField = document.getElementById("obField").value;
    let obT = document.getElementById("obT");
    obT.innerHTML = obField;

    let we = document.getElementsByClassName("weField");
    let str1 = '';
    for (let e of we) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str1;

    let s = document.getElementsByClassName("sField");
    let str3 = '';
    for (let e of s) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("sT").innerHTML = str3;

    let aq = document.getElementsByClassName("aqField");
    let str2 = '';
    for (let e of aq) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str2;

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onload = function () {
        document.getElementById("imgT").src = reader.result;
    }


    document.getElementById("r-form").style.display = "none";
    document.getElementById("r-template").style.display = "block";

}

function printResume() {
    window.print();
}