import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service'
// import { Screenshot } from '@ionic-native/screenshot/ngx';
// import { File } from "@ionic-native/file/ngx";
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import html2canvas from 'html2canvas';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: false
})
export class ModalPage implements OnInit {
  quoteText: string = '';
  yname: any;
  cname: any;
  lcount: any;
  screen: any;
  dirResponse: any;
 showBtn:boolean=true
  constructor(
    public behaveService: SharedService,
    private location: Location,
    private navctrl :NavController
    // private screenshot:Screenshot,
    // private file: File,


  ) {
    this.behaveService.data.subscribe(data => {
      console.log(data)
      this.yname = data['Fname']
      this.cname = data['Sname']
      this.lcount = data['Total']
      this.setQuoteBasedOnPercentage();
    })
  }
    ngOnInit() {}
  getBackgroundClass(): string {
    if (this.lcount >= 90) {
      return 'bg-love-90';
    } else if (this.lcount >= 50) {
      return 'bg-love-50';
    } else if (this.lcount >= 30) {
      return 'bg-love-30';
    } else {
      return 'bg-love-low';
    }
  }
  setQuoteBasedOnPercentage() {
    if (this.lcount >= 90) {
      this.quoteText = "❤️ True love stories never have endings. You both are perfect for each other!";
    } else if (this.lcount >= 50) {
      this.quoteText = "💕 Love is growing together. You both share a strong connection.";
    } else if (this.lcount >= 30) {
      this.quoteText = "💛 There's potential here. Keep understanding and trusting each other!";
    } else {
      this.quoteText = "💔 Love is like a puzzle. Sometimes, the pieces just don’t fit.";
    }
  }

  goBack() {
    this.location.back();
  }

 async socialShare() {
    this.showBtn=false;
    setTimeout(async () => {
      try {
        const element = document.body; // Or any specific DOM element
        html2canvas(element).then(canvas => {
          const base64image = canvas.toDataURL('image/png');
          if(base64image) this.shareBase64Image(base64image)
          // Optional: save it or share it
        });


      } catch (error) {
        console.error('❌ Screenshot failed:', error);
      }

      // Step 3: Show buttons again
      this.showBtn=true;
    }, 100);
  }

async  shareBase64Image(base64Image: string) {
  const fileName = `love-result-${Date.now()}.png`;

  // Remove base64 prefix
  const base64Data = base64Image.replace(/^data:image\/png;base64,/, '');

  // Write the file to temporary cache directory
  const saved = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Cache,
  });

  // Get file URI (works on Android/iOS)
  const uri = await Filesystem.getUri({
    path: fileName,
    directory: Directory.Cache,
  });

  // Share the image using Capacitor Share API
  await Share.share({
    title: 'My Love Result ❤️',
    text: 'Check out this love result!',
    url: uri.uri, // Share file URI
    dialogTitle: 'Share your result',
  });
}
}
