var btn = document.getElementById("btn");
var box = document.getElementById("box");
var winner = document.getElementById("winner");

var teams = [
    {
        name: "CSK",
        fullName: "Chennai Super Kings",
        captain: "MS Dhoni",
        trophys: 5,
        color: "#b8860b"
    },
    {
        name: "MI",
        fullName: "Mumbai Indians",
        captain: "Rohit Sharma",
        trophys: 5,
        color: "blue"
    },
    {
        name: "RCB",
        fullName: "Royal Challengers Bangalore",
        captain: "Virat Kohli",
        trophys: 1,
        color: "red"
    },
    {
        name: "KKR",
        fullName: "Kolkata Knight Riders",
        captain: "Ajinkya Rahane",
        trophys: 3,
        color: "purple"
    },
    {
        name: "DC",
        fullName: "Delhi Capitals",
        captain: "Rishabh Pant",
        trophys: 0,
        color: "#020268"
    },
    {
        name: "PBKS",
        fullName: "Punjab Kings",
        captain: "Shreyas Iyer",
        trophys: 0,
        color: "#8b008b"
    },
    {
        name: "RR",
        fullName: "Rajasthan Royals",
        captain: "Sanju Samson",
        trophys: 1,
        color: "#fda0f1"
    }
]

btn.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * teams.length);
    var team = teams[randomIndex];
    winner.innerHTML = `
    ${team.name} <br>
    ${team.fullName} <br>
    ${team.captain} will lift the <br>IPL Trophy this year!`;
    box.style.backgroundColor = team.color;
})