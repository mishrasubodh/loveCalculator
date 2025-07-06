import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { SharedService } from "../services/shared.service";
@Component({
  selector: "app-by-dob",
  templateUrl: "./by-dob.page.html",
  styleUrls: ["./by-dob.page.scss"],
  standalone:false
})
export class ByDobPage implements OnInit {
  Fname: any;
  FnameLength: any;
  Sname: any;
  SnameLength: any;
  Total: any;
  txtresult: any;
  loveTotal?: number;
  grandTotal?: number;
  yourname: any;
  yourdob: any;
  yourCrushname: any;
  yourCrushdob: any;
  dobCount?: number;
  today:any=new Date()
  constructor(public nav: NavController, public behaveService: SharedService) {}

  ngOnInit() {}
  submmit(yourname:any, yourdob:any, yourCrushname:any, yourCrushdob:any) {
    this.dobCount = 0;
    var obj:any = {};
    obj["yourname"] = yourname;
    obj["yourdob"] = this.getFullDate(yourdob);
    obj["yourCrushname"] = yourCrushname;
    obj["yourCrushdob"] = this.getFullDate(yourCrushdob);

    let ydob = new Date(yourdob).getFullYear();
    let cdob = new Date(yourCrushdob).getFullYear();
let toUpperCase
    let dobdif = ydob - cdob;
    if (dobdif < 3) {
      this.dobCount = 7;
    } else if (dobdif > 3 || dobdif < 8) {
      this.dobCount = 5;
    } else {
      this.dobCount = 3;
    }
    this.Fname = yourname.toUpperCase();
    this.FnameLength = this.Fname.length;
    this.Sname = yourCrushname.toUpperCase();
    this.SnameLength = this.Sname.length;
    var lovecount = 0;
    for (var i = 0; i < this.FnameLength; i++) {
      var L1 = this.Fname.substring(i, i + 1);
      if (L1 == "A") lovecount += 3;
      if (L1 == "E") lovecount += 3;
      if (L1 == "I") lovecount += 3;
      if (L1 == "O") lovecount += 3;
      if (L1 == "U") lovecount += 4;
      if (L1 == "L") lovecount += 1;
      if (L1 == "V") lovecount += 4;
    }

    for (var count = 0; count < this.SnameLength; count++) {
      var L2 = this.Sname.substring(count, count + 1);
      if (L2 == "A") lovecount += 3;
      if (L2 == "E") lovecount += 3;
      if (L2 == "I") lovecount += 3;
      if (L2 == "L") lovecount += 3;
      if (L2 == "O") lovecount += 4;
      if (L2 == "V") lovecount += 1;
      if (L2 == "E") lovecount += 4;
    }
    var Total = 0;

    if (lovecount > 0) Total = 5 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 2) Total = 10 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 4) Total = 20 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 6) Total = 30 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 8) Total = 40 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 10) Total = 50 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 12) Total = 60 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 14) Total = 70 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 16) Total = 80 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 18) Total = 90 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 20) Total = 100 - (this.FnameLength + this.SnameLength) / 2;
    if (lovecount > 22) Total = 110 - (this.FnameLength + this.SnameLength) / 2;
    if (this.FnameLength == 0 || this.SnameLength == 0) this.Total = "Error";
    if (Total < 0) Total = 0;
    if (Total > 99) Total = 99;
    this.loveTotal = Math.floor(Total);
    this.grandTotal = this.loveTotal + this.dobCount;
    console.log(this.grandTotal, " this.grandTotal");
    if (this.grandTotal >= 100) {
      this.grandTotal = 99;
    }
    console.log(this.dobCount, "this.dobCount");
    console.log(this.loveTotal, " this.loveTotal");
    console.log(this.grandTotal, " this.grandTotal");
    var data:any = new Object();
    data["Fname"] = this.Fname;
    data["Sname"] = this.Sname;
    data["Total"] = this.grandTotal;
    data['from']='by date of Birth';
    this.behaveService.updatedDataSelection(data);
    setTimeout(() => {

this.yourname=''
this.yourdob=''
this.yourCrushname=''
  this.yourCrushdob=''

    }, 1000);
    this.nav.navigateRoot("/modal");
  }

  getFullDate(dateTime:any) {
    let date = new Date(dateTime).getDate();
    let month = new Date(dateTime).getMonth() + 1;
    let year = new Date(dateTime).getFullYear();
    return `${date}-${month}-${year}`;
  }
}
