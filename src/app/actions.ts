"use server"

const url = process.env.API_URL || ""

export async function findName(prevState: any, formData: FormData) {
  let number = formData.get("number") as string
  number = number.replace(/\D/g, "")
  if (!number) {
    return { name: "", error: "Number is required" }
  }
  if (number.length < 10 || number.length > 10) {
    return { name: "", error: "Number should be 10 digits long" }
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      entity: "vpa",
      value: number,
    }),
  })

  if (!response.ok) {
    console.error(`Error: ${number}: ${response.statusText}`)

    if (response.status === 429) {
      return { name: "", error: "Too many requests, try again later" }
    }
    if (response.status === 400) {
      return { name: "", error: "Number not found" }
    }
    return { name: "", error: "Something went wrong..." }
  }

  const data = await response.json()
  console.log({ number, ...data })

  return { name: data.customer_name.toLowerCase(), error: "" }
}
