export async function getSortedPostsData() {
  const res = await fetch("https://api.publicapis.org/entries", {
    method: "GET",
  }).then((res) => res.json());

  return {
    props: {
      allPostsData: res,
    },
  };
}
