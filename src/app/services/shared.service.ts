import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSource = new BehaviorSubject(
    {
      Fname: '',
      Sname: '',
      Total: '',
      from: ''
    });
  data = this.dataSource.asObservable();
  screensortData = new BehaviorSubject(null);
  constructor() {
  }

  updatedDataSelection(data: any) {
    this.dataSource.next(data);
    this.SaveDataToLocalStorage(data)
  }

  updateImageData(data: any) {
    this.screensortData.next(data);
  }

  a: any = []
  async SaveDataToLocalStorage(data: object) {
    this.a = []
    await Preferences.get({ key: 'session' }).then((value: any) => {
      if(value.value !=null || undefined){
      this.a = JSON.parse(value.value)?.slice();
      }
    });
    this.a.unshift(data);
    await Preferences.set({
      key: 'session',
      value: JSON.stringify(this.a),
    });
  }

}