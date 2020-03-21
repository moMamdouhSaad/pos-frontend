import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { ItemsContainerComponent } from './containers/items-container/items-container.component';
import { CategoriesContainerComponent } from './containers/categories-container/categories-container.component';
import { TablesContainerComponent } from './containers/tables-container/tables-container.component';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { ItemsListComponent } from './views/items-list/items-list.component';
import { EditItemDialogsComponent } from './views/dialogs/edit-item-dialogs/edit-item-dialogs.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminPanelComponent, ItemsContainerComponent, CategoriesContainerComponent, TablesContainerComponent, UsersContainerComponent, ItemsListComponent, EditItemDialogsComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ],
  entryComponents: [EditItemDialogsComponent]
})
export class AdminPanelModule { }
