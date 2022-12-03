import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../service/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {

  room: Room = {} as Room

  constructor(private roomService: RoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.roomService.load(id).subscribe((room) => {
          this.room = room;
        })
      }
    })
  }

  onSubmit() {
    this.roomService.save(this.room).subscribe((room) => {
      this.room = room;
    });
  }
}
