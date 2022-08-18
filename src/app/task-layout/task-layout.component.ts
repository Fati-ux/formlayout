import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LayoutService } from './layout.service';
import * as Survey from 'survey-angular';
import { ServiceService } from '../service/service.service';
import { FormBuilder } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NotificationsService } from 'angular2-notifications';
import {
  StepperOrientation,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-task-layout',
  templateUrl: './task-layout.component.html',
  styleUrls: ['./task-layout.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class TaskLayoutComponent implements OnInit {
  @Output() completed1 = new EventEmitter();
  @Input() formData;
  @Input() Mode;
  ID1 = 'survry';
  formlist: formlist[] = [];

  formcode: any;
  surveyModel1: Survey.SurveyModel;
  stepperOrientation: Observable<StepperOrientation>;
  constructor(
    private _formBuilder: FormBuilder,
    private service: LayoutService,
    breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    public serviceService: ServiceService,
    private notificationsService: NotificationsService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.formcode = params['formcode'];
      this.service.AllgetFormData(this.formcode).subscribe((data) => {
        this.formlist = data as formlist[];
      });
      this.getallform();
    });
  }
  getallform() {
    for (let i = 0; i < formlist.length; i++) {
      this.viewform1(formlist[i].Json, formlist[i].Form_Code);
    }
  }
  viewform1(data: any, OD: any): any {
    console.log(data);
    this.surveyModel1 = new Survey.Model(data);
    this.surveyModel1.data = this.formData;

    if (this.Mode) {
      this.surveyModel1.mode = this.Mode; // 'display';
      Survey.SurveyNG.render(OD, { model: this.surveyModel1 });
      console.info('result1', this.surveyModel1.mode);
    } else {
      Survey.SurveyNG.render(OD, { model: this.surveyModel1 });
      this.surveyModel1.onComplete.add((result) => {
        console.log('result', result);

        this.completed1.emit(result.data);
      });
    }
  }
}
export class formlist {
  MetaFormCode: string;
  Form_Code: string;
  Table_code: string;
  Table_Name: string;
  Order: string;
  Join_Table: string;
  Json: string;
}
