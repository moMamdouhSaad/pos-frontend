import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './admin-panel.component';
import { ItemsContainerComponent } from './containers/items-container/items-container.component';
import { CategoriesContainerComponent } from './containers/categories-container/categories-container.component';
import { TablesContainerComponent } from './containers/tables-container/tables-container.component';
import { UsersContainerComponent } from './containers/users-container/users-container.component';

const routes: Routes =
 [
{ path: '', component: AdminPanelComponent },
{ path: 'items', component: ItemsContainerComponent },
{ path: 'categories', component: CategoriesContainerComponent },
{ path: 'tables', component: TablesContainerComponent },
{ path: 'users', component: UsersContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
