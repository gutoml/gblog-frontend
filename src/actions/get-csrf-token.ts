"use server";

export async function getCsrfToken() {
  await fetch(`${process.env.URL_API}/csrf-token`)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error);
}
