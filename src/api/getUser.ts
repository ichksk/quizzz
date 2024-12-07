"uee server"
import { apiUrl } from "@/constants/url"
import { User } from "@/types/user"

export const getUser = async () => {
  const res = await fetch(`${apiUrl}/users/`,
    {
      method: 'GET',
      credentials: 'include',
    }
  )

  const json = await res.json()
  return {
    id: json.id,
    username: json.username,
    createdRooms: json.create_rooms,
    participatedRooms: json.participated_rooms,
    quizResults: json.quiz_results,
    updatedAt: json.updated_at,
    createdAt: json.created_at,
  } as User
}