# Typed Fetch

Typed Fetch addresses the issue of flow not being able to validate the types of the data that an API call responds with. The package exposes the `typedFetch` function which mimics the fetch API but additionally accepts a decoder. If the response data's type is the expected type, the response is a promise of the decoded object. If the response json is of a different structure, an exception is raised that should be caught and handled.

## Examples

```javascript
import typedFetch from "typed-fetch";
import { object, string } from "decoders";

// Our response should include a title
const todosDecoder = object({ title: string });

typedFetch("https://jsonplaceholder.typicode.com/todos/1", todosDecoder)
.then(todos => {
  // todos has the flow type {| title: string |} as specified by the decoder

  const myTodos: { title: string } = todos; // passes a flow check
  const myFoo: { foo: string } = todos; // fails a flow check
})
```

For more examples on how decoders work, [go to the decoders github page](https://github.com/nvie/decoders)
