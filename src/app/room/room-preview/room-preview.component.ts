import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-preview',
  templateUrl: './room-preview.component.html',
  styleUrls: ['./room-preview.component.scss']
})
export class RoomPreviewComponent {

  @Input()
  room!: Room // ! indicates that we know variable may be undefined

  @Output()
  selectRoom: EventEmitter<Room> = new EventEmitter<Room>();

  onRoomClick(room: Room) {
    this.selectRoom.emit(room)
  }
}
