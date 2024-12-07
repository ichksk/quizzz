import { BaseModel } from "./base";
import { QuizResult } from "./quiz";
import { Room, RoomParticipant } from "./room";



// User interface
export interface User extends BaseModel {
  username?: string;

  // Relationships
  createdRooms?: Room[];
  participatedRooms?: RoomParticipant[];
  quizResults?: QuizResult[];
}

