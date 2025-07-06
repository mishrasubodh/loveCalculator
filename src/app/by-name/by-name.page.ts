import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import {SharedService}from '../services/shared.service'
@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.page.html',
  styleUrls: ['./by-name.page.scss'],
  standalone:false
})
export class ByNamePage {

 Fname: any;
  FnameLength: any;
  Sname: any;
  yourname:any;
  yourcrush:any;
  SnameLength: any;
  Total: any;
  txtresult: any;
  loveTotal?:number
  constructor(
    public nav: NavController,
   public behaveService: SharedService,
    ) {

 
   }
  async subbmit(yname:any,cname:any) {
    console.log('form', yname,cname)
    this.Fname = yname.toUpperCase();
    this.FnameLength = this.Fname.length;
    this.Sname = cname.toUpperCase();
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
        this.loveTotal= Math.floor(Total)
      var data:any=new Object()
      data['Fname']= this.Fname
       data['Sname']=this.Sname
        data['Total']= this.loveTotal
        data['from']='by name';
        this.behaveService.updatedDataSelection(data)
        //  setTimeout(()=>{
        //    form.reset();
        //   },500)
       
       this.nav.navigateRoot('/modal');
  }
       
  }
