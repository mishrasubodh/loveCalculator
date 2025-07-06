import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {SharedService}from '../services/shared.service'
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  standalone:false
})

export class ListPage implements OnInit {
  public items: Array<{ title: string; note: string; icon: string }> = [];
  questions:any = [];
  activeQuest = 0;
  userName = '';
  names:any = {};
  yourName: any;
  Fname: any;
  FnameLength: any;
  Sname: any;
  yourname:any;
  yourcrush:any;
  SnameLength: any;
  Total: any;
  txtresult: any;
  loveTotal?:number
  grandtotal?: number;
  constructor(
    public nav: NavController,
    public behaveService: SharedService,
  ) {
    this.questions = [...questions.map(item => { 
      return { ...item }
     })];
  }

  ngOnInit() {
  }

  next() {
    if(!this.questions[this.activeQuest].selected) return false;
    if(this.activeQuest >= this.questions.length - 1) {
     this.Fname = this.yourName.toUpperCase();
     this.FnameLength = this.Fname.length;
     this.Sname = this.userName.toUpperCase();
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
        this.grandtotal= this.loveTotal+5;
        if (this.grandtotal > 99) this.grandtotal = 99;
       var data:any=new Object()
       data['Fname']= this.Fname
        data['Sname']=this.Sname
         data['Total']= this.grandtotal
         data['from']='by quize';
         this.behaveService.updatedDataSelection(data)
        this.nav.navigateRoot('/modal');
      return;
    };
    this.activeQuest++;
    return
  }

  getOption(option:any, idx:any) {
    this.questions[idx].selected = option;
  }

  getName(e:any, option:any, num:any) {
    if(e.target.value) {
      this.names[option] = e.target.value;
    }
    if(Object.keys(this.names).length == num) {
      this.questions[0]['selected'] = this.names;
    }
    this.yourName = this.names['name'];
    this.userName = this.names['crush'];
  }
}

const questions = [
  { quest: 'Please enter your and your partner\'s name', options: ['Your name', 'Your crush name'], name: ['name', 'crush']},
  { quest: "Do ${name} have same age.?", options: ['yes', 'no', '2 year difrence', 'more then 2 year'], selected: '' },
  { quest: 'does ${name} know your all secret.?', options: ['yes', 'approximate', 'no'], selected: '' },
  { quest: 'does ${name} happy when both are togather.?', options: ['yes', 'very', 'no'], selected: '' },
  { quest: 'do you feel sad when ${name} not with you.?', options: ['always', 'Occasionally', 'never'], selected: '' },
  { quest: "Do you often offer ${name} gifts.?", options: ['yes', 'rarely', 'on every occasion'], selected: '' },
  { quest: 'does ${name} make effort to go out with you.?', options: ['yes all time', 'yes as a friend', 'no'], selected: '' },
  { quest: 'when you find yourself in the evening, you tell each other the day.?', options: ['yes', 'sometimes', 'no'], selected: '' },
  { quest: 'do you think you know all about ${name}.?', options: ['yes', 'a little', 'no'], selected: '' },
  { quest: 'do you smiling every time you  think think of ${name}.?', options: ['always', 'Occasionally', 'never'], selected: '' },
  { quest: 'can you know when ${name} is upset.?', options: ['always', 'Occasionally', 'never'], selected: '' },
]