import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Platform, AlertController } from "@ionic/angular";
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavController } from "@ionic/angular";
import { App } from '@capacitor/app';
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  standalone:false
})
export class AppComponent {
  public appPages = [
   {
    title: "Home",
    url: "/home",
    icon: "home-outline"
  },
  {
    title: "Love Quotes",
    url: "/message",
    icon: "chatbubble-ellipses-outline"
  },
  {
    title: "Love Quiz",
    url: "/list",
    icon: "heart-outline"
  },
  {
    title: "History",
    url: "/history",
    icon: "time-outline"
  }
  ];

  constructor(
    private platform: Platform,
    private alertCtrl: AlertController,
    private router: Router,
    private navctrl: NavController
  ) {
    this.initializeApp();
    this.handleHardwareBackButton();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setStyle({ style: Style.Light });
      SplashScreen.hide();
    });
  }


  count: number = 0;
  private handleHardwareBackButton(): void {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      console.log(this.router.url, "this.router.url");

      if (this.router.url == "/message") {
        this.navctrl.navigateRoot("/home");
      } else if (this.router.url == "/by-name") {
        this.navctrl.navigateRoot('/home')
      } else if (this.router.url == "/by-dob") {
        this.navctrl.back();
      } else if (this.router.url == "/byphoto") {
        this.navctrl.back();
      } else if (this.router.url == "/history") {
        this.navctrl.navigateRoot("/home");
      } else if (this.router.url == "/social-shair") {
        this.navctrl.back();
      } else if (this.router.url == "/modal") {
        this.navctrl.navigateRoot("/home");
      } else if (this.router.url == "/home") {
        this.count++;
        if (this.count === 1) {
          this.showConfirm("Do you want to exit ");
        }
      }
    });
  }
  async showConfirm(title:any) {
    const confirm = await this.alertCtrl.create({
      header: title,
      cssClass: "custom-alertDanger",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            this.count = 0;
            //console.log('Disagree clicked');
          }
        },
        {
          text: "ok",
          handler: () => {
           App.exitApp();
          }
        }
      ]
    });
    await confirm.present();
  }
}
