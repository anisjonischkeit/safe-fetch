"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typedFetch;

var _decoders = require("decoders");

function typedFetch(input, decoder, init) {
  return fetch(input, init).then(function (res) {
    return res.json();
  }).then(function (json) {
    return (0, _decoders.guard)(decoder)(json);
  });
} //  strict