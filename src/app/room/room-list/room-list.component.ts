import { Component } from '@angular/core';
import { Room, ROOMS } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  rooms: Room[] = ROOMS

  edit(room: Room) {
    console.log(room);
  }
}
