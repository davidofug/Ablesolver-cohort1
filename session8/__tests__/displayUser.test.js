/**
 * @jest-environment jsdom
 */
// __tests__/displayUser-test.js
"use strict";

jest.mock("../src/fetchCurrentUser");

test("displays a user after a click", () => {
  // Set up our document body
  document.body.innerHTML =
    `<div>
      <span id="username" />
      <button id="button" />
    </div>`;

  // This module has a side-effect
  require("../src/displayUser");

  const fetchCurrentUser = require("../src/fetchCurrentUser");

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  fetchCurrentUser.mockImplementation( callback => {
    callback({
      fullName: "Johnny Cash",
      loggedIn: true,
    });
  });

  // Use jquery to emulate a click on our button
  document.getElementById("button").click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(fetchCurrentUser).toBeCalled();
  expect(document.getElementById("username").innerText).toEqual(
    "Johnny Cash - Logged In"
  );
});
