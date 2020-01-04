export interface Meter {
    id: number,
    name: string,
    debitorGroupId: number
    readings: MeterReading[]
}
export interface DebitorGroup {
  id: number,
  name: string,
  members: DebitorGroupMember[]
}
export interface DebitorGroupMember {
  id: number,
  username: string,
  percentage: number,
  debitorGroupId: number
}

export interface MeterReading {
  measuredAt: string,
  value: number,
  meterId: number
}

export interface Bill {
  id: number,
  amount: number,
  meterName: string
  meterId: number
  debitorGroup: DebitorGroup
}

export interface UserBill {
  id: number,
  periodName: string,
  username: string,
  entries: UserBillEntry
}

export interface UserBillEntry {
  meterName: string
  cost: number
  userBillId: number
}
