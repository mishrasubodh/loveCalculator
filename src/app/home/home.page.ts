import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import quotesData from '../../assets/JSON/loveQuotes.json';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:false
})
export class HomePage {
 allQuotes :any[]= quotesData
;

currentIndex = 0;
currentQuote = this.allQuotes[0];

refreshQuote() {
  this.currentIndex = (this.currentIndex + 1) % this.allQuotes.length;
  this.currentQuote = this.allQuotes[this.currentIndex];
}
  constructor(
    private router: Router
  ) {
    console.log('call home page');
  }
  goBypage(title:any){
    if(title==1){
this.router.navigateByUrl('/by-name');
    }
    else if(title==2){
this.router.navigateByUrl('/by-dob');
    }
    else if(title==3){
this.router.navigateByUrl('/byphoto');
    }
  }

shareQuote(currentMSg:any) {
  Share.share({
    title: 'Love Quote 💖',
    text: `💖${currentMSg}  💖`,
    dialogTitle: 'Share this beautiful quote'
  });
}


  goToQuotes() {
    // Navigation logic (replace with your real route)
    console.log('Navigate to romantic quotes page');
  }
}
