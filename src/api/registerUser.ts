import { apiUrl } from "@/constants/url"

export const registerUser = async () => {
  const res = await fetch(`${apiUrl}/users/register`,
    {
      method: 'POST',
    }
  )

  const json = await res.json()
  return json
}