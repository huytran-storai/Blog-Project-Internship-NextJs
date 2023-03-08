const baseURL: string = "http://localhost:3000/api/posts";

export default async function getPost(id?: number) {
  const res = await fetch(`${baseURL}`);
  const posts = await res.json();

  if (id) {
    return posts.find((value: any) => value.id == id);
  }
  return posts;
}
