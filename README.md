# React-Fetch-Hook

> A simple react hook to consume REST API's.

[![NPM](https://img.shields.io/npm/v/@ajay_g/react-fetch.svg)](https://www.npmjs.com/package/@ajay_g/react-fetch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ajay_g/react-fetch
```

```bash
yarn add @ajay_g/react-fetch
```

## Usage

## Fetching data on component render:

```jsx
import React from "react";
import { useFetch } from "@ajay_g/react-fetch";

const GetUser = () => {
  const [loading, data, error] = useFetch("http://localhost:8080/user/1", {
    method: "GET",
    // ...other request options
  });

  if (loading) return "Loading...";

  return (
    <div>
      <p>{data.userName}</p>
    </div>
  );
};
```

## Fetching data manually:

```jsx
import React, {useState} from "react";
import { useLazyFetch } from "@ajay_g/react-fetch";

const GetAllPosts = () => {
  const [posts, setPosts] = useState([])
  const [getAllPosts, loading, error] = useLazyFetch("http://localhost:8080/posts",
  (response) => {
    console.log("response", response);
    setPosts(response)
  }
  {
    method: "GET",
    // ...other request options
  });

  if (loading) return "Loading...";

  return (
    <div>
      <button onClick={getAllPosts}>Get Users</button>
      {posts.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};
```

## License

MIT © [Ajay](LICENSE)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
