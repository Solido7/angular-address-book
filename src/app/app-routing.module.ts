import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './contacts/add/add.component';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';
import { EditComponent } from './contacts/edit/edit.component';

const routes: Routes = [
  { path: 'contacts/add', component: AddComponent },
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/:id', component: ViewComponent },
  { path: 'contacts/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
