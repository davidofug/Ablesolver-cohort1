// displayUser.js
"use strict";

const fetchCurrentUser = require("./fetchCurrentUser.js");

document.querySelector("#button").addEventListener('click',() => {
  fetchCurrentUser( user => {
    const loggedText = `Logged ${(user.loggedIn ? "In" : "Out")}`;
    document.querySelector("#username").innerText = `${user.fullName} - ${loggedText}`;
  });
});
