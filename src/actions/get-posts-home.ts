"use server";

export async function getPostsHome() {
  fetch(`${process.env.URL_API}/api/v1`);
}
