import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTaskRoutingModule } from './my-task-routing.module';
import { TaskComponent } from './task.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { SupervisorTaskComponent } from './supervisor-task/supervisor-task.component';
import { MyTaskService } from './my-task.service';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { EscapeHtmlPipe } from './Keephtml';
@NgModule({
  imports: [
    CommonModule,
    TableModule,
    MyTaskRoutingModule,
    TranslateModule.forChild({}),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    TaskComponent,
    MyTaskComponent,
    SupervisorTaskComponent,
    EscapeHtmlPipe,
  ],
  providers: [MyTaskService],
})
export class MyTaskModule {}
