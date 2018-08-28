// @flow strict

import { guard } from "decoders";
import type { Decoder } from "decoders";

function safeFetch<T>(
  input: string | Request,
  decoder: Decoder<T>,
  init?: RequestOptions
): Promise<T> {
  return fetch(input, init)
    .then(res => res.json())
    .then(json => guard(decoder)(json));
}
