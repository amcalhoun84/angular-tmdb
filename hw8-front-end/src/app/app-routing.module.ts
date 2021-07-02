import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyListComponent } from './my-list/my-list.component';
import { WatchComponent} from './watch/watch.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home"},
  { path: "home", component: HomeComponent },
  { path: "myList", component: MyListComponent},
  { path: "watch/:media/:id", component: WatchComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
