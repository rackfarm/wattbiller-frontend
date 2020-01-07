export interface Meter extends Dto {
  name: string;
  debitorGroupId: number;
  readings: MeterReading[];
  creditorUserId: string;
  creditorUsername: string;
}

export interface DebitorGroup extends Dto {
  name: string;
  members: DebitorGroupMember[];
}

export interface DebitorGroupMember extends Dto {
  username: string;
  percentage: number;
  debitorGroupId: number;
}

export interface MeterReading extends Dto {
  measuredAt: string;
  value: number;
  meterId: number;
}

export interface PeriodicStatement extends Dto {
  amount: number;
  meterName: string;
  meterId: number;
  debitorGroup: DebitorGroup;
}

export interface UserBill extends Dto {
  periodName: string;
  username: string;
  entries: UserBillEntry;
  amount: number;
}

export interface UserBillEntry {
  meterName: string;
  cost: number;
  userBillId: number;
}

export interface Dto {
 id: number;
}
