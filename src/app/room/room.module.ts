import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomPreviewComponent } from './room-preview/room-preview.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomPreviewComponent,
    RoomEditComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule
  ]
})
export class RoomModule { }
