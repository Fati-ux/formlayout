import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  AddEmployee: FormGroup;

  WorkInfoo: FormGroup;
  AddPayrollAdditionType: FormGroup;
  AddPayrollDeduction: FormGroup;
  AddCourtOrderDeduction: FormGroup;
  AddStructures: FormGroup;
  servID;
  servName;
  ApCode;
  AppNO: string;
  AppCode;
  taskID;
  taskid;
  docID;
  sdpID;
  todo;
  validated: boolean = false;
  ApplicationNo: null;
  ServiceName: null;
  disablefins: boolean = true;
  private PlotManagementUrl = environment.rootPath + 'Plot_Registration'; // URL to web api
  private PropertyListUrl = environment.rootPath + 'Property_Registration'; // URL to web api
  private CertificateVersionUrl = environment.rootPath + 'Certificate_Version'; // URL to web api
  private DeedUrl = environment.rootPath + 'Deed_Registration'; // URL to web api
  private License_ServiceURL = environment.rootPath + 'License_Service'; // URL to web api
  private saveFileLookUP = environment.rootPath + 'BPEL/SaveDocumentMaster'; // URL to web api

  //for review button
  private getAllDocumentURL = environment.rootPath + 'BPEL/getAllDocument';
  private SaveNoteURL = environment.rootPath + 'BPEL/Edit_postit_notes'; // URL to web api
  private AddNoteURL = environment.rootPath + 'BPEL/Set_postit_notes'; // URL to web api
  private SendNoteURL = environment.rootPath + 'BPEL/sendNot'; // URL to web api
  private DeleteNoteURL = environment.rootPath + 'BPEL/Delete_postit_notes'; // URL to web api
  private GetNoteURL = environment.rootPath + 'BPEL/Get_postit_notes';
  private getToDoURL = environment.rootPath + 'BPEL/todo'; // URL to web api // URL to web api
  private isvalidatedURL = environment.rootPath + 'BPEL/isvalidated'; // URL to web api
  private RemoveDocURL =
    environment.rootPath + 'BPEL/Remove_RequrementDocument'; // URL to web api
  //for review button
  private CustomerTypeLookUP = environment.rootPath + 'Customer_Type_Lookup'; // URL to web api
  private CustomerLookUP = environment.rootPath + 'Customer'; // URL to web api
  private SuspendedReasonLookUP =
    environment.rootPath + 'Suspension_Reason_Lookup'; // URL to web api
  private PropertyTypeLookUP = environment.rootPath + 'Property_Type_Lookup'; // URL to web api
  private PropertyStatusLookUP = environment.rootPath + 'Property_StatusLookup'; // URL to web api
  private ServiceDeliveryUnitLookUP = environment.rootPath + 'BPEL/AllOrg';
  private Deed_Transfer_Lookup =
    environment.rootPath + 'Deed_Transfer_Lookup/Get';
  private Lease_Type_Lookup = environment.rootPath + 'Lease_Type_Lookup/Get';
  private WoredaLookUP = environment.rootPath + 'Woreda_Lookup'; // URL to web api
  private PlotStutusLookUP = environment.rootPath + 'Plotl_Status_Lookup'; // URL to web api
  private PlotLandUseLookUP = environment.rootPath + 'Plot_Type_Of_Use_Lookup'; // URL to web api
  private saveFormDataURL = environment.rootPath + 'BPEL/Savedata'; // URL to web api
  private getTaskRuleURL = environment.rootPath + 'BPEL/TaskRule'; // URL to web api
  private getTodandAppNoURL = environment.rootPath + 'BPEL/TodandAppNo';
  // URL to web api
  private getRequerdURL =
    environment.rootPath + 'BPEL/getRequrementDocumentOfTasks'; // URL to web api
  private nextTaskCompleteURL = environment.rootPath + 'BPEL/nextTaskComplete'; // URL to web api
  private nextTaskAcceptOrRejectURl =
    environment.rootPath + 'BPEL/nextTaskAcceptOrReject'; // URL to web api
  private SaveDataURL = environment.rootPath + 'BPEL/SaveData'; // URL to web api
  private GetDataURL = environment.rootPath + 'BPEL/GetData'; // URL to web api
  private EmployementType =
    environment.rootPath + 'BPEL/GetLookUp?DropGownName=employment_Type';
  private Sex = environment.rootPath + 'BPEL/GetLookUp?DropGownName=Sex';
  private MartialStatus =
    environment.rootPath + 'BPEL/GetLookUp?DropGownName=Marital Status';

  private ViewUserInfo =
    environment.rootPath2 + 'view/ViewAspNetUsersWorkInfoDetail';
  private PayrollAddition = environment.rootPath2 + 'HRA/PayrollAddition';
  private PayrollDeductionType = environment.rootPath2 + 'HRA/PayrollDeduction';
  private Employee = environment.rootPath2 + 'HRA/CEmployee';
  private EmployeeByID = environment.rootPath2 + 'HRA/CEmployee/EmployeeId';
  private getContract = environment.rootPath2 + 'dbo/procContract';
  private EmployeeByUser = environment.rootPath2 + 'HRA/CEmployee/UserID';
  private employeeTransferType =
    environment.rootPath + 'BPEL/GetLookUp?DropGownName=Employee_Transfer_Type';
  private GLaccount = environment.rootPath2 + 'bscChartOfAccount';
  private Nationality =
    environment.rootPath + 'BPEL/GetLookUp?DropGownName=Country';
  private Users = environment.rootPath2 + 'dbo/procaspnetUsers';
  private Rolid = environment.rootPath2 + 'dbo/procaspnetUsers/UserId/RolId';
  private cemployee = environment.rootPath2 + 'HRA/CEmployee';
  private workInfo = environment.rootPath2 + 'HRA/WorkInfo';
  private Structurediv =
    environment.rootPath2 + 'HRA/OrganizationalStructure/DIV';
  private Structure = environment.rootPath2 + 'HRA/OrganizationalStructure';
  private StructureOrgId =
    environment.rootPath2 + 'HRA/OrganizationalStructure/organizationcode';
  private Department = environment.rootPath2 + 'finance/procdepartments';
  private EmployementReq = environment.rootPath2 + 'HRA/EmployementRequest';
  private PayrollAdditionType =
    environment.rootPath2 + 'HRA/PayrollAdditionType';
  private DeductionType = environment.rootPath2 + 'HRA/DiducationType';
  private CourtDeduction =
    environment.rootPath2 + 'HRA/procCourtOrderDeductionn';
  private JobPosition = environment.rootPath2 + 'HRA/procJobPositions';
  private organization = environment.rootPath2 + 'finance/procorganizations';
  private cUnit = environment.rootPath2 + 'finance/cUnit';
  private MytasksUrl = environment.rootPath + 'BPEL/GetlistofTodo'; //mytask url
  private BackURL = environment.rootPath + 'BPEL/TaskBack';
  private Departments = environment.rootPath2 + 'finance/procdepartments';
  abc: any;
  div: string;
  WorkInfo: any;
  AddJobPosition: any;

  constructor(private http: HttpClient) {}
  getDepartmentsLoadAll(organizations_Organization_Code) {
    return this.http.get<any>(
      this.Departments +
        '/' +
        'organizations' +
        '/' +
        organizations_Organization_Code
    );
  }
  getViewAspNetUsersWorkInfoDetailAll(orgcode) {
    return this.http.get<any>(this.organization + '/' + orgcode);
  }
  getMytasks(org) {
    return this.http.get(
      this.MytasksUrl +
        '?username=' +
        environment.username +
        '&orgid=' +
        org +
        '&lanid=10D04E8B-3361-E111-95D5-00E04C05559B&userroll' +
        '=00000000-0000-0000-0000-000000000000'
    );
  }
  Back(ApplicationNo, todoid) {
    return this.http.post(
      this.BackURL +
        '?' +
        'ApplicationNo=' +
        ApplicationNo +
        '&UserName=' +
        environment.username +
        '&todoid=' +
        todoid,
      null
    );
  }

  disableBrowserBackButton() {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }
  getGender() {
    return this.http.get<any>(this.Sex);
  }

  getMaritalStatus() {
    return this.http.get<any>(this.MartialStatus);
  }

  getDepartmentByID(div_ID) {
    return this.http.get<any>(this.Department + '/' + div_ID);
  }

  getDepartments() {
    return this.http.get<any>(this.Department);
  }

  getAllContract() {
    return this.http.get<any>(this.getContract);
  }
  //Employee Transfer Type
  getAllEmployeeTransferType() {
    return this.http.get<any>(this.employeeTransferType);
  }
  //Payroll Addition

  getPayrollAddition() {
    return this.http.get<any>(this.PayrollAddition);
  }
  //Payrol Addition Type
  getPayrollAdditionType() {
    return this.http.get<any>(this.PayrollAdditionType);
  }
  getPayrollAdditionTypeByID(id) {
    return this.http.get<any>(this.PayrollAdditionType + '/' + id);
  }
  savePayrollAdditionType(data) {
    //console.log("Data",data,"api",this.PayrollAdditionType)
    return this.http.post(this.PayrollAdditionType, data);
  }
  updatePayrollAdditionType(data) {
    return this.http.put(this.PayrollAdditionType, data);
  }
  deletePayrollAdditionType(payID) {
    return this.http.delete(this.PayrollAdditionType + '/' + payID);
  }

  getPayrollAddtion() {
    return this.http.get<any>(this.PayrollAddition);
  }

  //cUnit
  loadAllcUnit() {
    return this.http.get<any>(this.cUnit);
  }
  //Payrol Deduction Type

  getPayrollDeductionType() {
    return this.http.get<any>(this.PayrollDeductionType);
  }
  getPayrollDeductionTypeByID(payDedID) {
    return this.http.get<any>(this.PayrollDeductionType + '/' + payDedID);
  }
  savePayrollDeductionType(data) {
    return this.http.post(this.PayrollDeductionType, data);
  }
  updatePayrollDeductionType(data) {
    return this.http.put(this.PayrollDeductionType, data);
  }
  deletePayrollDeductionType(payDedID) {
    return this.http.delete(this.PayrollDeductionType + '/' + payDedID);
  }

  //Employee Information

  getEmployee() {
    return this.http.get<any>(this.Employee);
  }
  getEmployeeByID(Emp_ID) {
    return this.http.get<any>(this.EmployeeByID + '/' + Emp_ID);
  }
  getEmployeeByUserID(userID) {
    return this.http.get<any>(this.EmployeeByUser + '/' + userID);
  }
  saveEmployee(data) {
    return this.http.post(this.Employee, data);
  }
  updateEmployee(data) {
    return this.http.put(this.Employee, data);
  }
  deleteEmployee(Emp_ID) {
    return this.http.delete(this.Employee + '/' + Emp_ID);
  }

  getUserInfoByUserName(userName) {
    return this.http.get<any>(this.ViewUserInfo + '/' + userName);
  }

  getEmployementTypes() {
    return this.http.get<any>(this.EmployementType);
  }
  getChartOfAccount() {
    return this.http.get<any>(this.GLaccount);
  }
  getNationality() {
    return this.http.get<any>(this.Nationality);
  }

  getOrganiztionAll() {
    return this.http.get<any>(this.organization);
  }
  getUsers() {
    return this.http.get<any>(this.Users);
  }
  getUsersRolid() {
    return this.http.get<any>(this.Rolid);
  }
  getcemployee() {
    return this.http.get<any>(this.cemployee);
  }

  saveWorkInfo(data) {
    return this.http.post(this.workInfo, data);
  }
  updateWorkInfo(data) {
    return this.http.put(this.workInfo, data);
  }
  getWorkInfoByWorkInfoID(workInfoID) {
    return this.http.get<any>(this.workInfo + '/' + workInfoID);
  }
  getWorkInfo() {
    return this.http.get<any>(this.workInfo);
  }
  getEmployRequest() {
    return this.http.get<any>(this.EmployementReq);
  }

  getPayrollDiductionType() {
    return this.http.get<any>(this.DeductionType);
  }

  getCourtOrderDeduction() {
    return this.http.get<any>(this.CourtDeduction);
  }
  getCourtOrderDeductionByID(Court_ID) {
    return this.http.get<any>(this.CourtDeduction + '/' + Court_ID);
  }
  saveCourtOrderDeduction(data) {
    return this.http.post(this.CourtDeduction, data);
  }
  updateCourtOrderDeduction(data) {
    return this.http.put(this.CourtDeduction, data);
  }
  deleteCourtOrderDeduction(Court_ID) {
    return this.http.delete(this.CourtDeduction + '/' + Court_ID);
  }

  getPayrollAdditon() {
    return this.http.get<any>(this.PayrollAddition);
  }
  getPayrollAdditonByID(id) {
    return this.http.get<any>(this.PayrollAddition + '/' + id);
  }
  savePayrollAdditon(data) {
    return this.http.post(this.PayrollAddition, data);
  }
  updatePayrollAdditon(data) {
    return this.http.put(this.PayrollAddition, data);
  }
  deletePayrollAdditon(payID) {
    return this.http.delete(this.PayrollAddition + '/' + payID);
  }

  getPayrollAdditonType() {
    return this.http.get<any>(this.PayrollAdditionType);
  }
  getPayrolDeductionType() {
    return this.http.get<any>(this.DeductionType);
  }
  getPayrolDeductionTTypeByID(id) {
    return this.http.get<any>(this.DeductionType + '/' + id);
  }
  savePayrolDeductionTType(data) {
    return this.http.post(this.DeductionType, data);
  }
  updatePayrolDeductionTType(data) {
    return this.http.put(this.DeductionType, data);
  }
  deletePayrolDeductionTType(payID) {
    return this.http.delete(this.DeductionType + '/' + payID);
  }

  //structure

  saveStructure(data) {
    return this.http.post(this.Structure, data);
  }
  updateStructure(data) {
    return this.http.put(this.Structure, data);
  }
  getStructureById(struct_ID) {
    return this.http.get<any>(this.Structure + '/' + struct_ID);
  }
  getStructureBydiv(div) {
    return this.http.get<any>(this.Structurediv + '/' + div);
  }
  getStructure() {
    return this.http.get<any>(this.Structure);
  }
  //Position
  getPosition() {
    return this.http.get<any>(this.JobPosition);
  }
  savePosition(data) {
    return this.http.post(this.JobPosition, data);
  }
  updatePosition(data) {
    return this.http.put(this.JobPosition, data);
  }
  getPositionById(pos_ID: string) {
    return this.http.get<any>(this.JobPosition + '/' + pos_ID);
  }
  deletetPosition(emplyee_ID) {
    return this.http.delete(this.JobPosition + '/' + emplyee_ID);
  }

  saveFormData(formData) {
    const ApplicationCode = '00000000-0000-0000-0000-000000000000';
    const serviceId = '000000-0000-0000-0000-000000000000';
    const taskid = 'c8c52994-57e4-4b3a-a7be-1d00ea0db37f';
    const orgid = '930d1c20-9e0e-4a50-9eb2-e542fafbad68';
    const userid = environment.username;
    const json = formData;
    const docid = '00000000-0000-0000-0000-000000000000';
    return this.http.put<any>(this.saveFormDataURL, {
      ApplicationCode,
      serviceId,
      taskid,
      orgid,
      userid,
      json,
      docid,
    });
  }

  saveFile(
    DocData,
    FileType,
    ApplicationNo,
    RequrementID,
    TaskType,
    Requrement,
    docID
  ) {
    // console.log('File', File);
    /*return this.http.post(this.saveFileLookUP + '?' + 'TaskType=' + TaskType + '&ApplicationNo=' + ApplicationNo + '&DocData=' + File + '&uid=00000000-0000-0000-0000-000000000000' + '&FileType=' + Type + '&RequrementID=' + ReqId + '&Requrement=' + Requrement, null);*/

    return this.http.post(this.saveFileLookUP, {
      TaskType,
      ApplicationNo,
      DocData,
      uid: environment.username,
      FileType,
      RequrementID,
      Requrement,
      docID,
    });
  }

  getTodandAppNo(AppNo) {
    return this.http.get<any[]>(
      this.getTodandAppNoURL + '?' + 'ApplicationNo=' + AppNo
    );
  }

  getAll(AppNo) {
    return this.http.get<any[]>(
      this.License_ServiceURL +
        '?' +
        'sortOrder=test&currentFilter=' +
        AppNo +
        '&searchString&pageIndex&pageSize'
    );
  }

  getPriveys(certefcatcode) {
    return this.http.get<any[]>(
      this.License_ServiceURL +
        '?' +
        'sortOrder=test&currentFilter=' +
        certefcatcode +
        '&searchString&pageIndex&pageSize'
    );
  }

  getRequerdDocs(TaskID) {
    return this.http.get(this.getRequerdURL + '?TaskID=' + TaskID);
  }

  getTaskRule(tasksId) {
    return this.http.post(
      this.getTaskRuleURL +
        '?' +
        'taskid=' +
        tasksId +
        '&langid=00000000-0000-0000-0000-000000000000',
      null
    );
  }

  getPlotManagement(plotid) {
    return this.http.get(
      this.PlotManagementUrl +
        '?' +
        'sortOrder=test&currentFilter=' +
        plotid +
        '&searchString&pageIndex&pageSize'
    );
  }

  getPropertyList(plotid) {
    return this.http.get(
      this.PropertyListUrl +
        '?' +
        'sortOrder=test&currentFilter=' +
        plotid +
        '&searchStringByPID&searchStringByPloteID&pageIndex&pageSize'
    );
  }

  getDeedTable(propertyID) {
    return this.http.get(
      this.DeedUrl +
        '?' +
        'sortOrder=test&currentFilter=' +
        propertyID +
        '&searchString&pageIndex&pageSize'
    );
  }

  getCertificateVersion(ownerShipid) {
    return this.http.get(
      this.CertificateVersionUrl +
        '?' +
        'sortOrder=test&currentFilter=' +
        ownerShipid +
        '&searchString&pageIndex&pageSize'
    );
  }

  getCustomerLookUP() {
    return this.http.get(
      this.CustomerLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getCustomerTypeLookUP() {
    return this.http.get(
      this.CustomerTypeLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getSuspendedReasonLookUP() {
    return this.http.get(
      this.SuspendedReasonLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getPropertyTypeLookUP() {
    return this.http.get(
      this.PropertyTypeLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getPropertyStatusLookUP() {
    return this.http.get(
      this.PropertyStatusLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getServiceDeliveryUnitLookUP() {
    return this.http.get(
      this.ServiceDeliveryUnitLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getTransferTypeLookUP() {
    return this.http.get(
      this.Deed_Transfer_Lookup +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }
  getLease_Type_Lookup() {
    return this.http.get(
      this.Lease_Type_Lookup +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getWoredaLookUP() {
    return this.http.get(
      this.WoredaLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getPlotStutusLookUP() {
    return this.http.get(
      this.PlotStutusLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  getPlotLandUseLookUP() {
    return this.http.get(
      this.PlotLandUseLookUP +
        '?' +
        'sortOrder=test&currentFilter&searchString&pageIndex&pageSize'
    );
  }

  Submit(AppCode, docID, todoID, ruleid) {
    return this.http.post(
      this.nextTaskCompleteURL +
        '?ApplicationNo=' +
        AppCode +
        '&docid=' +
        docID +
        '&todoid=' +
        todoID +
        '&userName=' +
        environment.username +
        '&status=C&Taskruleid=' +
        ruleid +
        '&ispending=false',
      null
    );
  }

  SubmitAR(AppCode, docID, todoID, ruleid) {
    return this.http.post(
      this.nextTaskAcceptOrRejectURl +
        '?ApplicationNo=' +
        AppCode +
        '&docid=' +
        docID +
        '&eid=00000000-0000-0000-0000-000000000000&isPending=false&todoid=' +
        todoID +
        '&userName=' +
        environment.username +
        '&status=C&taskruleid=' +
        ruleid,
      null
    );
  }

  saveForm(ApplicationCode, serviceId, taskid, orgid, json, docid, todoID) {
    return this.http.post(
      this.SaveDataURL +
        '?ApplicationCode=' +
        ApplicationCode +
        '&serviceId=' +
        serviceId +
        '&taskid=' +
        taskid +
        '&orgid=' +
        orgid +
        '&UserName=' +
        environment.username +
        '&json=' +
        json +
        '&docid=' +
        docid +
        '&todoID=' +
        todoID,
      null
    );
  }

  GetForm(docid) {
    return this.http.get(this.GetDataURL + '?docid=' + docid);
  }

  //for review button
  RemoveDoc(DocCode) {
    return this.http.post(
      this.RemoveDocURL +
        '?currentUserId=' +
        environment.username +
        '&document_code=' +
        DocCode,
      null
    );
  }

  getAllDocument(ApplicationCode, DocID) {
    return this.http.get<any[]>(
      this.getAllDocumentURL +
        '?' +
        'ApplicationCode=' +
        ApplicationCode +
        '&DocID=' +
        DocID
    );
  }
  GetNote(ApplicationNo) {
    return this.http.post(
      this.GetNoteURL + '?Application_number=' + ApplicationNo,
      null
    );
  }
  addNote(ApplicationNumber, Msg, docid) {
    return this.http.post(
      this.AddNoteURL +
        '?Application_number=' +
        ApplicationNumber +
        '&uid=' +
        environment.username +
        '&Msg=' +
        Msg +
        '&docid=' +
        docid,
      null
    );
  }
  getToDo(todoid) {
    return this.http.get(this.getToDoURL + '?todoid=' + todoid);
  }

  isvalidated(todoid, taskid, Plotid, ProperyID, DocID) {
    return this.http.get(
      this.isvalidatedURL +
        '?Username=' +
        environment.username +
        '&todoid=' +
        todoid +
        '&taskid=' +
        taskid +
        '&Plotid=' +
        Plotid +
        '&ProperyID=' +
        ProperyID +
        '&DocID=' +
        DocID
    );
  }

  DeleteNote(ApplicationNo, noteid) {
    return this.http.post(
      this.DeleteNoteURL +
        '?Application_number=' +
        ApplicationNo +
        '&postitid=' +
        noteid,
      null
    );
  }

  sendNote(msg, AppNo, todoid, orgid) {
    return this.http.post(
      this.SendNoteURL +
        '?meg=' +
        msg +
        '&Application_number=' +
        AppNo +
        '&todoid=' +
        todoid +
        '&orgid=' +
        orgid,
      null
    );
  }
  saveNote(msg, noteid, docid) {
    return this.http.post(
      this.SaveNoteURL +
        '?msg=' +
        msg +
        '&postitid=' +
        noteid +
        '&docid=' +
        docid,
      null
    );
  }
}
