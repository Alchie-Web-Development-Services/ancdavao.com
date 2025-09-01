export interface Invoice {
  id: string;
  amount: number;
  status: string;
  created: string; // ISO 8601 timestamp string
  updated: string; // ISO 8601 timestamp string
  user_id: string;
  currency: string;
  description: string;
  external_id: string;
  paid_amount: number;
  payer_email: string;
  merchant_name: string;
  payment_method: string;
  payment_channel: string;
  payment_id: string;
  is_high: boolean;
  paid_at: string; // ISO 8601 timestamp string
}
