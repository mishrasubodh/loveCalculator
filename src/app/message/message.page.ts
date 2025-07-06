import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import quotesData from '../../assets/JSON/loveQuotes.json';
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
  standalone:false
})
export class MessagePage implements OnInit{
  allQuotes:any[]=quotesData;
  visibleQuotes: any[] = [];
  batchSize = 10;
  currentIndex = 0;
  constructor(
    public toastController: ToastController
  ) {
    this.loadMoreQuotes()

   }
  async presentToast() {
  this.toastController.create({
  message: 'Quote Copied!',
  duration: 1500,
  color: 'success',
  position: 'bottom',
  animated: true,  // enables smooth entry/exit
  cssClass: 'custom-toast'
}).then(t => t.present());
  }

  loadMoreQuotes(event?: any) {
    const nextBatch = this.allQuotes.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.visibleQuotes = [...this.visibleQuotes, ...nextBatch];
    this.currentIndex += this.batchSize;

    if (event) {
      event.target.complete();
      if (this.currentIndex >= this.allQuotes.length) {
        event.target.disabled = true;
      }
    }
  }


copyMessage(val: string){
  console.log(val ,"val")
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    console.log('selBox.value',selBox.value)
   this.presentToast()
  }

async shareQuote(quote: string) {
  await Share.share({
    title: '💌 Love Quote',
    text: `💖 "${quote}" 💖`,
    dialogTitle: 'Share this quote with someone special',
  });
}
  ngOnInit() {

  }

}