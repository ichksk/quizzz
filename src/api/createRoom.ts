"use server"

import { apiUrl } from "@/constants/url"

export const createRoom = async () => {
  const res = await fetch(`${apiUrl}/rooms`)
  const json = await res.json()
  console.log(json)
}