export interface UserBill {
  id: number;
  periodName: string;
  username: string;
  entries: Array<UserBillEntry>;
  amount: number;
}

export interface UserBillEntry {
  meterName: string;
  cost: number;
  userBillId: number;
}
