import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceService } from './service.service';

import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { DropdownModule } from 'primeng/dropdown';

import { FormlayoutsteperComponent } from './formlayoutsteper/formlayoutsteper.component';
import { SortPipe } from '../service/formlayoutsteper/sort.pipe';
import { MaterialExampleModule } from '../../../src/material.module';

import { MatButtonModule } from '@angular/material/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormDisplayComponent } from '../formdisplay/formdisplay.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  imports: [
    TabsModule.forRoot(),
    FileUploadModule,
    BsDropdownModule.forRoot(),
    NgbModule,
    SidebarModule.forRoot(),
    BrowserModule,
    ConfirmDialogModule,
    CardModule,
    NgxSmartModalModule.forChild(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceRoutingModule,
    MaterialExampleModule,
    TableModule,
    DialogModule,
    // TabsModule.forRoot(),

    MatButtonModule,

    BrowserAnimationsModule,
    // BsDropdownModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
  ],
  declarations: [
    ServiceComponent,
    FormlayoutsteperComponent,
    FormDisplayComponent,
    SortPipe,
  ],
  providers: [ServiceService, MessageService, ConfirmationService],
  entryComponents: [],
})
export class ServiceModule {}
