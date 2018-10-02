var name = localStorage.getItem("clientName");
var person = JSON.parse(localStorage.getItem(name));

var obj = document.getElementById("results");

var results = "First Name:" + person["fname"] + "\n";
results += "Last Name: " +person["lname"] + "\n";
results += "Level 1 Duration: " + person["duration1"] + " seconds\n"; 
results += "Level 2 Duration: " + person["duration2"] + " seconds\n"; 
results += "Level 3 Duration: " + person["duration3"] + " seconds\n"; 
results += "Level 4 Duration: " + person["duration4"] + " seconds\n"; 
results += "Age: " + person["age"] + "\n";
results += "Slept At: " + person["sleep"] + "\n";
results += "Woke At: " + person["awake"] + "\n";
results += "Hours Asleep: " + person["hoursSleep"] + "\n";
results += "Experience Level: " + person["expLevel"] + "\n";
results += "Email Address: " + person["emailAddress"] + "\n";
results += "Wants Response: " + person["wantResponse"];

obj.innerText = results;
