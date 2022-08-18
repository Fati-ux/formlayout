import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutService } from '../task-layout/layout.service';
import * as Survey from 'survey-angular';
import { async } from 'rxjs';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.css']
})
  
export class FormLayoutComponent implements OnInit {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
  @Output() completed1 = new EventEmitter();
  @Output() completed2 = new EventEmitter();
  @Output() completed3 = new EventEmitter();
   @Output() completed4 = new EventEmitter();
  formcode = '47942017-56D5-431E-BE3F-D6AE18AF63D4';
  @Input() formData;
  @Input() Mode;
    @Input() formData2;
  @Input() Mode2;
    @Input() formData3;
  @Input() Mode3;
    @Input() formData4;
  @Input() Mode4;
  surveyModel1: any;
  surveyModel2: any;
  surveyModel3: any;
  surveyModel4: any;
  json;
  data: any;
  ID1 = 'suryeelement';
  ID2 = 'suryeelement1';
  ID3 = 'suryeelement2';
  ID4 = 'suryeelement3';

  listofform: listofformcode[] = [
    { id: 'Form 1', formcode: 'EC52101A-F679-46EE-A16C-601BC03E6BE9' },
    { id: 'Form 2', formcode: 'CE03101A-F584-46EE-A16C-601BC03E6CE5' },
    { id: 'Form 3', formcode: '5b506707-c4fc-4e4d-81c9-348c5da3d478' },
    { id: 'Form 4', formcode: 'CE03101A-F584-46EE-A16C-601BC03E6CE5' },
  ];
  formlist: formlist[];
  fordatalist1: any;
  constructor(private service: LayoutService) { }
  items: any
  expandedIndex = 0;

  ngOnInit(): void {
    console.info(this.formcode);
      this.service.AllgetFormData(this.formcode).subscribe(data => {
        this.formlist = data as formlist[]
        console.log('formdatalist', this.formlist)

        for (let i = 0; i < this.formlist.length; i++) { 
           console.log(this.formlist[i].Json);
    this.surveyModel1[i] = new Survey.Model(data);
    this.surveyModel1.data = this.formData;
    if (this.Mode) {
      this.surveyModel1.mode = this.Mode; // 'display';
      Survey.SurveyNG.render(this.ID1, { model: this.surveyModel1 });
      console.info('result1', this.surveyModel1.mode);
       
    } else {
      Survey.SurveyNG.render(this.ID1, { model: this.surveyModel1 });
      this.surveyModel1.onComplete.add(result => {
        console.log('result', result);
              
        this.completed1.emit(result.data);
      });

    }
        }
      });
    // this.viewform1(this.formlist[1].Json)
      // this.service.getAllPhyicalFormData().subscribe(data => { 
      //   this.fordatalist1 = data
      //   console.log('formdatalist', this.fordatalist1)
      // });
  }

  getAllForm(formcode) {
    this.service.getFormData('EC52101A-F679-46EE-A16C-601BC03E6BE9').subscribe(data => {
      this.viewform1(data);
    })
    
    
  }



  viewform1(data: any): any {
    
    console.log(data);
    this.surveyModel1 = new Survey.Model(data);
    this.surveyModel1.data = this.formData;
    if (this.Mode) {
      this.surveyModel1.mode = this.Mode; // 'display';
      Survey.SurveyNG.render(this.ID1, { model: this.surveyModel1 });
      console.info('result1', this.surveyModel1.mode);
       
    } else {
      Survey.SurveyNG.render(this.ID1, { model: this.surveyModel1 });
      this.surveyModel1.onComplete.add(result => {
        console.log('result', result);
              
        this.completed1.emit(result.data);
      });

    }
  
  }
   viewform2(data: any): any {
    
    console.log(data);
    this.surveyModel2 = new Survey.Model(data);
    this.surveyModel2.data = this.formData2;
    if (this.Mode2) {
      this.surveyModel2.mode = this.Mode2; // 'display';
      Survey.SurveyNG.render(this.ID2, { model: this.surveyModel2 });
      console.info('result1', this.surveyModel2.mode);
       
    } else {
      Survey.SurveyNG.render(this.ID2, { model: this.surveyModel2 });
      this.surveyModel2.onComplete.add(result => {
        console.log('result', result);
              
        this.completed2.emit(result.data);
      });

    }
  
   }
   viewform3(data: any): any {
    
    console.log(data);
    this.surveyModel3 = new Survey.Model(data);
    this.surveyModel3.data = this.formData3;
    if (this.Mode3) {
      this.surveyModel3.mode = this.Mode3; // 'display';
      Survey.SurveyNG.render(this.ID3, { model: this.surveyModel3});
      console.info('result1', this.surveyModel3.mode);
       
    } else {
      Survey.SurveyNG.render(this.ID3, { model: this.surveyModel3 });
      this.surveyModel3.onComplete.add(result => {
        console.log('result', result);
              
        this.completed3.emit(result.data);
      });

    }
  
   }
   viewform4(data: any): any {
    
    console.log(data);
    this.surveyModel4 = new Survey.Model(data);
    this.surveyModel4.data = this.formData4;
    if (this.Mode4) {
      this.surveyModel4.mode = this.Mode4; // 'display';
      Survey.SurveyNG.render(this.ID4, { model: this.surveyModel4 });
      console.info('result1', this.surveyModel4.mode);
       
    } else {
      Survey.SurveyNG.render(this.ID4, { model: this.surveyModel4 });
      this.surveyModel4.onComplete.add(result => {
        console.log('result', result);
              
        this.completed4.emit(result.data);
      });

    }
  
  }
 
}
class listofformcode {
 public id: string;
  public formcode: string;
}
export class formlist{
  MetaFormCode: string;
  Form_Code: string;
  Table_code: string;
  Table_Name: string;
  Order: string;
  Join_Table: string;
  Json: string;
}
