import { BaseModel } from "./base";
import { Quiz } from "./quiz";
import { User } from "./user";

export enum RoomStatus {
  WAITING = "waiting",    // 参加者待ち
  PLAYING = "playing",    // ゲーム中
  FINISHED = "finished"   // 終了
}

// Room interface
export interface Room extends BaseModel {
  roomCode?: string;      // ユーザーが決めるユニークなルームID
  creatorId: number;
  status: RoomStatus;     // ルームの状態

  // Relationships
  creator?: User;
  quizzes?: Quiz[];
  participants?: RoomParticipant[];
}

// RoomParticipant interface
export interface RoomParticipant extends BaseModel {
  userId: number;
  roomId: number;
  joinedAt: Date;

  // Relationships
  user?: User;
  room?: Room;
}