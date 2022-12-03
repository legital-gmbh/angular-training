import { Component } from '@angular/core';
import { Room } from '../room';
import { Router } from '@angular/router';
import { RoomService } from '../service/room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  rooms$: Observable<Room[]> = this.roomService.loadAll();

  constructor(private roomService: RoomService, private router: Router) { }

  edit(room: Room) {
    this.router.navigate(['room','room-edit', room.id]);
  }
}
