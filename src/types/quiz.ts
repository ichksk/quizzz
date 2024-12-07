import { BaseModel } from "./base";
import { Room } from "./room";
import { User } from "./user";

// Quiz interface
export interface Quiz extends BaseModel {
  question: string;
  image?: string;
  explanation: string;
  roomId: number;
  isActive: boolean;

  // Relationships
  room?: Room;
  choices?: Choice[];
  results?: QuizResult[];
}

// Choice interface
export interface Choice extends BaseModel {
  quizId: number;
  text: string;           // 選択肢の内容
  index: number;          // 選択肢の順番
  isCorrect: boolean;     // 正解かどうか

  // Relationships
  quiz?: Quiz;
  selectedIn?: QuizResult[];
}

// QuizResult interface
export interface QuizResult extends BaseModel {
  userId: number;
  quizId: number;
  selectedChoiceId: number;
  answeredAt: Date;

  // Relationships
  user?: User;
  quiz?: Quiz;
  selectedChoice?: Choice;
}