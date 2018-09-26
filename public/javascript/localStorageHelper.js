console.log("test");

const personData = {
    fname: null,
    lname: null,
    age: null,
    sleep: null,
    awake: null,
    hoursSleep: null,
    emailAddress: null,
    wantResponse: null,
    expLevel: null
};

function processForm() {

    saveFormData();
    window.location = "ready";
    console.log("Changed webpage?");
}

function newPerson() {
    personData.fname = "Thom";
    personData.lname = "Bilton";

    window.localStorage.setItem("test1", JSON.stringify(personData));
}

function saveFormData() {
    personData.fname = document.getElementById("fname").value;
    personData.lname = document.getElementById("lname").value;
    personData.age = document.getElementById("inputAge").value;
    personData.sleep = document.getElementById("inputBedTime").value;
    personData.awake = document.getElementById("inputAwakeTime").value;
    personData.emailAddress = document.getElementById("inputEmail").value;
    personData.wantResponse = document.getElementById("emailResults").value;
    personData.expLevel = document.getElementById("expLevel").value;
    personData.hoursSleep = calculateSleepDuration(
        personData.sleep,
        personData.awake
    );

    window.localStorage.setItem(
        personData.fname + personData.lname,
        JSON.stringify(personData)
    );
}

/**
 * Right now, the maths only works for the hours. Not minutes. But input says nearest hour anyways
 * @param {*} sleepTime
 * @param {*} awakeTime
 */
function calculateSleepDuration(sleepTime, awakeTime) {
    var value = 0;

    value = (2400 - parseInt(sleepTime) + parseInt(awakeTime)) % 2400;

    value /= 100;

    return value;
}
