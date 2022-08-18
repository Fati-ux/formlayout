import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  DoCheck,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  StepperOrientation,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { LayoutService } from '../../task-layout/layout.service';
import * as Survey from 'survey-angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-formlayoutsteper',
  templateUrl: './formlayoutsteper.component.html',
  styleUrls: ['./formlayoutsteper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FormlayoutsteperComponent implements OnInit {
  activedStep = 0;
  @ViewChild('myDiv') myDiv;

  @Output() completed1 = new EventEmitter();
  @Input() formData;
  @Input() Mode;
  OD = 'survry';
  ALLformlist: formlist[] = [];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  formcode: any;
  surveyModel1: Survey.SurveyModel;
  stepperOrientation: Observable<StepperOrientation>;
  constructor(
    private _formBuilder: FormBuilder,
    private service: LayoutService,
    breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    public serviceService: ServiceService,
    private notificationsService: NotificationsService,
    el: ElementRef
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.formcode = params['formcode'];
      this.service.getFormData(this.formcode).subscribe((data) => {
        this.ALLformlist = data as formlist[];
      });
    });

    if (this.Mode == 'display') {
      this.viewform1(this.formData, this.formcode);
    }
  }
  ngDoCheck() {
    console.log('do check');
  }
  ngAfterViewInit() {
    console.log('after view init');
  }
  prevStep(formlist) {
    this.activedStep = formlist - 1;
  }

  nextStep(formlist) {
    this.activedStep = formlist + 1;
  }

  submit() {}

  getallform() {
    for (let i = 0; i < this.ALLformlist.length; i++) {
      this.viewform1(this.ALLformlist[i].Json, this.ALLformlist[i].Form_Code);
      // console.log(
      //   'form',
      //   this.ALLformlist[i].Json,
      //   this.ALLformlist[i].Form_Code
      // );
    }
  }
  viewform1(data: any, OD: any): any {
    console.log(OD);
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
        //this.serviceService.PanalIDformcode = OD;
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
