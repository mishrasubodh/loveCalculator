import { Component } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { SharedService } from '../services/shared.service'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-byphoto',
  templateUrl: './byphoto.page.html',
  styleUrls: ['./byphoto.page.scss'],
  standalone: false
})

export class ByphotoPage {
  imageURI: any;
  imageFileName: any;


  grandTotal: any
  Fname: any;
  FnameLength: any;
  Sname: any;
  SnameLength: any;
  Total: any;
  txtresult: any;
  loveTotal?: number
  submitted?: boolean;
  yourname: any;
  yourcrush: any;
  firsturl: any;
  scondurl: any;
  yourage: any;
  crushage: any;
  difcount: any;
  base64Data: any;
  converted_image?: string;
  constructor(
    public fb: FormBuilder,
    public nav: NavController,
    public behaveService: SharedService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) { }

  imageUrl: any
  imageUrl1: any
  editFile: boolean = true;
  removeUpload: boolean = false;






  async selectImage(who: 'one' | 'two') {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    if (who === 'one') {
      this.imageUrl = image.dataUrl;
    } else {
      this.imageUrl1 = image.dataUrl;
    }
  } catch (error) {
    console.error('Image selection cancelled or failed:', error);
  }
}

loading=false
  subbmitData(yourname: any, yourage: any, imgurl: any, yourcrush: any, yourcrushage: any, imgurl2: any) {
    this.loading=true
    this.difcount = 0;
    console.log(yourname, yourage, imgurl, yourcrush, yourcrushage, imgurl2)

    let agedif = Math.abs(yourage - yourcrushage);
    console.log(agedif)
    if (agedif < 5) { this.difcount = 10 }
    else if (agedif > 5 || agedif < 8) { this.difcount = 7 }
    else if (agedif > 10) { this.difcount = 3 }

    this.Fname = yourname.toUpperCase();
    this.FnameLength = this.Fname.length;
    this.Sname = yourcrush.toUpperCase();
    this.SnameLength = this.Sname.length;
    var lovecount = 0;
    for (var i = 0; i < this.FnameLength; i++) {
      var L1 = this.Fname.substring(i, i + 1);
      if (L1 == 'A') lovecount += 3;
      if (L1 == 'E') lovecount += 3;
      if (L1 == 'I') lovecount += 3;
      if (L1 == 'O') lovecount += 3;
      if (L1 == 'U') lovecount += 4;
      if (L1 == 'L') lovecount += 1;
      if (L1 == 'V') lovecount += 4;
    }

    for (var count = 0; count < this.SnameLength; count++) {
      var L2 = this.Sname.substring(count, count + 1);
      if (L2 == 'A') lovecount += 3;
      if (L2 == 'E') lovecount += 3;
      if (L2 == 'I') lovecount += 3;
      if (L2 == 'L') lovecount += 3;
      if (L2 == 'O') lovecount += 4;
      if (L2 == 'V') lovecount += 1;
      if (L2 == 'E') lovecount += 4;
    }
    var Total = 0;

    if (lovecount > 0) Total = 5 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 2) Total = 10 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 4) Total = 20 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 6) Total = 30 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 8) Total = 40 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 10) Total = 50 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 12) Total = 60 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 14) Total = 70 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 16) Total = 80 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 18) Total = 90 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 20) Total = 100 - ((this.FnameLength + this.SnameLength) / 2)
    if (lovecount > 22) Total = 110 - ((this.FnameLength + this.SnameLength) / 2)
    if (this.FnameLength == 0 || this.SnameLength == 0)
      this.Total = "Error";
    if (Total < 0) Total = 0;
    if (Total > 99) Total = 99;
    this.loveTotal = Math.floor(Total)
    this.grandTotal = this.difcount + this.loveTotal;
    if (this.grandTotal > 100) {
      this.grandTotal = 99
    }
    var data: any = new Object()
    data['Fname'] = this.Fname
    data['Sname'] = this.Sname
    data['Total'] = this.grandTotal
    data['from'] = 'by photo and age';
    this.behaveService.updatedDataSelection(data)
    setTimeout(() => {
this.loading=false
    }, 1100)
    this.nav.navigateRoot('/modal')
  }


}