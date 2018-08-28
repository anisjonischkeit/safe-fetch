"use strict";

var _decoders = require("decoders");

function safeFetch(input, decoder, init) {
  return fetch(input, init).then(function (res) {
    return res.json();
  }).then(function (json) {
    return (0, _decoders.guard)(decoder)(json);
  });
} //  strict