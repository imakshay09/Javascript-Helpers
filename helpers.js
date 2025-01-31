/* -------------------------------------------------------------------------- */
/*                           Random Number Generator                          */
/* -------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/* -------------------------------------------------------------------------- */
/*                             unique id generator                            */
/* -------------------------------------------------------------------------- */
const uuid = require('uuid');

function generateUUID() {
  return uuid.v4();
}

/* -------------------------------------------------------------------------- */
/*                        Remove Duplicates from Array                        */
/* -------------------------------------------------------------------------- */
function removeDuplicates(array) {
    return Array.from(new Set(array));
  }

/* -------------------------------------------------------------------------- */
/*                            Get Current TimeStamp                           */
/* -------------------------------------------------------------------------- */
function getCurrentTimestamp() {
    return new Date().getTime();
  }

/* -------------------------------------------------------------------------- */
/*                          check valid Email address                         */
/* -------------------------------------------------------------------------- */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /* -------------------------------------------------------------------------- */
  /*                     Get Random Boolean (true or false):                    */
  /* -------------------------------------------------------------------------- */
  function getRandomBoolean() {
    return Math.random() < 0.5;
  }
  
  /* -------------------------------------------------------------------------- */
/*                          check valid phone number                         */
/* -------------------------------------------------------------------------- */
function validateMobileNumber(mobileNumber) {
  var pattern = /^\d{10}$/;
  return pattern.test(mobileNumber);
}