import path from "path";

export async function getSortedPostsData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  console.log(res.json());
  return res.json();
}
