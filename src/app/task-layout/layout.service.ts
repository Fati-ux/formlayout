import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  private Physicalform = environment.rootPath3 + 'physicalforms/GetMetadata';
  private AllFormPath = environment.rootPath3 + '_viewFormlayout/GetMetadata';

  constructor(private http: HttpClient) {}

  getFormData(formcode) {
    return this.http.get<any>(this.AllFormPath + '/' + formcode);
  }
  getAllPhyicalFormData(): Observable<FormData> {
    return this.http.get<any>(this.Physicalform);
  }
  AllgetFormData(formcode) {
    return this.http.get<any>(this.AllFormPath + '/' + formcode);
  }
}
