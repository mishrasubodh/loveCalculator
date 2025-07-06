import { Component, OnInit } from "@angular/core";
import { Preferences } from '@capacitor/preferences';
import { SharedService } from "../services/shared.service";
import { ToastController } from '@ionic/angular';
@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
  standalone: false
})
export class HistoryPage implements OnInit {
  historydata: any = [];
  constructor(
    private sharedService: SharedService,
    public toastController: ToastController
  ) {

  }
  async deletedata(curentdata: any) {
    this.confirm_FUnction(curentdata)

  }
  async ngOnInit() {
    await Preferences.get({ key: 'session' }).then((value: any) => {
      if (value.value != null || undefined) {
        this.historydata = JSON.parse(value.value)?.slice();
      }
    });
  }
  async confirm_FUnction(data: any) {
    const toast = await this.toastController.create({
      message: 'are you sure want to delete this..?',
      position: 'middle', // change to 'middle' or 'bottom' as needed
      color: 'danger',
      buttons: [
        {
          text: 'yes',
          role: 'done',
          handler: async () => {
            console.log('User said yes');
            let forremoveData = this.historydata.splice(data, 1);
            await Preferences.remove({ key: 'session' });
            this.SaveDataToLocalStorage(this.historydata);
          },
        },
        {
          text: 'no',
          role: 'cancel',
          handler: () => {
            console.log('User said No');
          },
        }
      ]
    });
    toast.present();
  }
  async SaveDataToLocalStorage(data: any) {
    if (data.length !== 0) {
      var c: any = [];
      await Preferences.get({ key: 'session' }).then((value: any) => {

        if (value.value != null || undefined) {
          c = JSON.parse(value.value)?.slice();
        }
      });
      var a = [...data, ...c];
      await Preferences.set({
        key: 'session',
        value: JSON.stringify(a),
      });
    }
  }
}
