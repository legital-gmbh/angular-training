export const ROOMS: Room[] = [
  {building: 'A', roomNumber: 1, seats: 40, projectorPresent:true},
  {building: 'A', roomNumber: 101, seats: 30, projectorPresent:true},
  {building: 'B', roomNumber: 1, seats: 10, projectorPresent:false}
];

export interface Room {
  building: string;
  roomNumber: number;
  seats: number;
  projectorPresent: boolean;
}
