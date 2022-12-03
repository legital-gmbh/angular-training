import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomEditComponent } from './room-edit/room-edit.component';

const routes: Routes = [
  { path: 'room-list', component: RoomListComponent },
  { path: 'room-add', component: RoomEditComponent },
  { path: 'room-edit/:id', component: RoomEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
