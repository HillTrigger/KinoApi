import { KEY, URL_SEARCH } from "./constans";

export async function search(text) {
  let res = await fetch(URL_SEARCH + text, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": KEY,
    },
  });
  let data = await res.json();
  return data;
}
