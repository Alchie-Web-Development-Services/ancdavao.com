import { Timestamp } from "firebase/firestore";

export interface Pledge {
  id: string;
  amount: number;
  fulfilled: number;
  year: number;
  paid_at: Timestamp;
  payment_channel: string;
}
