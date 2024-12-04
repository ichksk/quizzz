"use server"

import { apiUrl } from "@/constants/url"

export const createRoom = async () => {
  const res = await fetch(`${apiUrl}/`)
  const json = await res.json()
  console.log(json)
}