import { ServiceService } from '../../../../src/app/service/service.service';
import { Component, OnInit } from '@angular/core';
import { MyTaskService } from '../my-task.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css'],
})
export class MyTaskComponent implements OnInit {
  taskwaithing = 120;

  taskList: any;
  taskLists: any[] = [];
  filteredTaskList: any;
  lockedpromise;
  loading = 0;
  messageAppNo;
  messageCache = [];
  messageObj = {
    currentMessage: null,
    currentMessageIndex: 0,
    messages: null,
  };
  direction = {
    NEXT: 'd00',
    PREV: 'd01',
  };
  loadingMessage = false;
  constructor(
    private location: Location,

    private myTaskService: MyTaskService,
    private serviceService: ServiceService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
    this.serviceService.disableBrowserBackButton();
  }

  ngOnInit() {
    this.getMyTask();
  }

  myTaskHasNoData: boolean = false;
  myTaskLoading: boolean = false;
  async getMyTask() {
    this.myTaskLoading = true;
    var userInfo = await this.serviceService
      .getUserInfoByUserName(environment.username)
      .toPromise();
    var orgCode = userInfo[0].organization_code;
    console.log('User Info', userInfo);

    this.myTaskService.getMytasks(orgCode).subscribe(
      (taskList) => {
        this.taskList = taskList;
        this.taskList = Object.assign([], this.taskList.Table1);
        this.myTaskLoading = false;

        for (let i = 0; i < this.taskList.length; i++) {
          if (this.taskList[i].TaskType !== 'Start') {
            this.taskLists.push(this.taskList[i]);
          } else {
            //this.taskLists=this.taskList;
            // console.log(this.taskList[i]);
            // console.log("With out Start",this.taskList);
          }
        }
        console.log(
          'Tasklists',
          this.taskLists,
          'length',
          this.taskLists.length
        );
        if (this.taskLists.length == 0) {
          this.myTaskHasNoData = true;
        } else {
          this.myTaskHasNoData = false;
        }

        this.filteredTaskList = this.taskLists;
      },
      (error) => {
        this.myTaskLoading = false;
        console.log('error');
      }
    );
  }

  //For message

  canGo(where) {
    if (this.messageObj.messages) {
      if (where == this.direction.NEXT) {
        return (
          this.messageObj.currentMessageIndex <
          this.messageObj.messages.length - 1
        );
      } else if (where == this.direction.PREV) {
        return this.messageObj.currentMessageIndex > 0;
      }
      return false;
    } else {
      return false;
    }
  }

  navigateMessage(direction) {
    if (
      this.messageObj.messages ? this.messageObj.messages.length > 0 : false
    ) {
      if (
        direction == this.direction.NEXT &&
        this.messageObj.currentMessageIndex <
          this.messageObj.messages.length - 1
      ) {
        this.messageObj.currentMessageIndex += 1;
        this.messageObj.currentMessage =
          this.messageObj.messages[this.messageObj.currentMessageIndex][
            'remarks'
          ];
      } else if (
        direction == this.direction.PREV &&
        this.messageObj.currentMessageIndex > 0
      ) {
        this.messageObj.currentMessageIndex -= 1;
        this.messageObj.currentMessage =
          this.messageObj.messages[this.messageObj.currentMessageIndex][
            'remarks'
          ];
      }
    }
  }
  openModal(id) {
    // this.modal.getModal(id).open();
  }

  closeModal(id) {
    // this.modal.getModal(id).close();
  }

  showMessage(appNo, task) {
    if (appNo != this.messageAppNo) {
      let messageInCache = false;
      this.loadingMessage = true;

      this.messageObj.currentMessage = null;
      this.messageObj.currentMessageIndex = 0;
      this.messageObj.messages = null;

      this.messageCache.some((message) => {
        if (message['appNo'] == appNo) {
          messageInCache = true;
          this.messageObj.messages = message['messages'];
          if (this.messageObj.messages) {
            this.messageObj.currentMessage =
              this.messageObj.messages[0]['remarks'];
          }
          this.loadingMessage = false;
          return true;
        }
        return false;
      });

      if (!messageInCache) {
        this.serviceService.GetNote(appNo).subscribe(
          (result) => {
            this.messageObj.messages = result;
            if (this.messageObj.messages) {
              this.messageCache.push({
                appNo: this.messageAppNo,
                messages: result,
              });
              this.messageObj.currentMessage =
                this.messageObj.messages[0]['remarks'];
            }
            this.loadingMessage = false;
          },
          (error) => {
            this.loadingMessage = false;
            console.error('message error :: ', error);
          }
        );
      }
    }
    this.openModal('messages');
    this.messageAppNo = appNo;
  }

  go(task) {
    console.log('step 2');
    console.log('task.to_screen', task.to_screen);
    if (task.to_screen == 'a7a1e05e-32c2-4f44-ad58-306572c64593') {
      this.router.navigate([
        '/services/2/' +
          task.todo_comment +
          '/' +
          task.task_types_id +
          '/' +
          task.tasks_id +
          '/' +
          task.service_details_id +
          '/' +
          task.id,
      ]);
    } else if (task.to_screen == 'da8c5bd4-ea3d-4f02-b1b2-38cf26d6d1ff') {
      this.router.navigate([
        '/services/3/' +
          task.todo_comment +
          '/' +
          task.task_types_id +
          '/' +
          task.tasks_id +
          '/' +
          task.service_details_id +
          '/' +
          task.id,
      ]);
    } else if (task.to_screen == '9e0834e9-7ec2-460c-a5ed-7ade1204c7ee') {
      this.router.navigate([
        '/services/4/' +
          task.todo_comment +
          '/' +
          task.task_types_id +
          '/' +
          task.tasks_id +
          '/' +
          task.service_details_id +
          '/' +
          task.id,
      ]);
    } else {
      console.log('step 3');
      this.router.navigate([
        '/services/00069b92-c7a6-4688-ac7d-1d42544e47ae/' +
          task.todo_comment +
          '/' +
          task.tasks_id +
          '/' +
          task.task_types_id +
          '/' +
          task.service_details_id +
          '/' +
          task.id +
          '/' +
          task.to_screen,
      ]);
    }
    // a7a1e05e-32c2-4f44-ad58-306572c64593 for plot
    // da8c5bd4-ea3d-4f02-b1b2-38cf26d6d1ff for property
    // 9e0834e9-7ec2-460c-a5ed-7ade1204c7ee for certefcate
    // this.router.navigate(['/service/1']);
  }
  IsLockedBy_OtherUser(task) {
    console.log('step 1');
    this.lockedpromise = this.myTaskService
      .IsLockedBy_OtherUser(task.id)
      .subscribe(
        (message) => {
          if (!message) {
            this.go(task);
          } else {
            const toast = this.notificationsService.error(
              'Error',
              'This Application No is being Processed by another staff. ' +
                'Please choose another Application No. ' +
                '/ ይህን ማመልከቻ በሌላ ሰራተኛ እየተስተናገደ ስለሆነ እባክዎ ሌላ ማመልከቻ ቁጥር ይውሰዱ፡፡'
            );
          }
          // const toast = this.notificationsService.success('Sucess', message);
        },
        (error) => {
          console.log(error);
          if (error.status == '400') {
            const toast = this.notificationsService.error(
              'Error',
              error.error.InnerException.Errors[0].message
            );
          } else {
            const toast = this.notificationsService.error(
              'Error',
              'SomeThing Went Wrong'
            );
          }
        }
      );
  }
}
