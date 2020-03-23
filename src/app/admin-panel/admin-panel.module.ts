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
import { AddItemDialogsComponent } from './views/dialogs/add-item-dialogs/add-item-dialogs.component';
import { CategoriesListComponent } from './views/categories-list/categories-list.component';
import { EditCategoryDialogComponent } from './views/dialogs/edit-category-dialog/edit-category-dialog.component';
import { AddCategoryDialogComponent } from './views/dialogs/add-category-dialog/add-category-dialog.component';


@NgModule({
  declarations: [AdminPanelComponent, ItemsContainerComponent, CategoriesContainerComponent, TablesContainerComponent, UsersContainerComponent, ItemsListComponent, EditItemDialogsComponent, AddItemDialogsComponent, CategoriesListComponent, EditCategoryDialogComponent, AddCategoryDialogComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ],
  entryComponents: [EditItemDialogsComponent, AddItemDialogsComponent, EditCategoryDialogComponent, AddCategoryDialogComponent]
})
export class AdminPanelModule { }
