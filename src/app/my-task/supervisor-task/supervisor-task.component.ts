import { Component, OnInit } from '@angular/core';
import {MyTaskService} from '../my-task.service';

import { ServiceService } from '../../../../src/app/service/service.service';
@Component({
  selector: 'app-supervisor-task',
  templateUrl: './supervisor-task.component.html',
  styleUrls: ['./supervisor-task.component.css']
})
export class SupervisorTaskComponent implements OnInit {
  taskwaithing = 120;

  tasks;
  constructor(private myTaskService: MyTaskService,private serviceService:ServiceService) { 
    this.serviceService.disableBrowserBackButton();
  }

  ngOnInit() {
    this.getSupervisedTask();

  }

  getSupervisedTask() {
    this.myTaskService.getSupervisertasks().subscribe(tasks => {
      this.tasks = tasks;
      this.tasks = (Object.assign([], this.tasks.Table1));
      console.log('tasks', tasks);
      console.log('this.taskList', this.tasks);
    });
  }
}
