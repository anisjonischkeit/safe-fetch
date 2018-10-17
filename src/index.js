// @flow strict

import { guard } from "decoders";
import type { Decoder } from "decoders";

export type FetchError =
  | { type: 'Timeout' }
  | { type: 'NetworkError' }
  | { type: 'BadStatus', response: Response }
  | { type: 'BadPayload', message: string, response: Response }

type Result<E, D> =
  | { status: 'Ok', data: D }
  | { status: 'Err', error: E }

type FetchResult<D> = Result<FetchError, D>

export default function typedFetch<T>(
  input: string | Request,
  decoder: Decoder<T>,
  init?: RequestOptions
): Promise<FetchResult<T>> {
  return fetch(input, init)
    .then(res => res.json())
    .then(json => guard(decoder)(json))
    .then(res => ({ status: 'Ok', data: res }))
    .catch(err => ({ status: 'Err', error: { type: 'Timeout' }}));
}
