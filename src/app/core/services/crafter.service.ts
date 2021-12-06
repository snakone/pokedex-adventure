import { ComponentRef, Injectable } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

@Injectable({providedIn: 'root'})

export class CrafterService {

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  public async modal(
    component: any, 
    data?: any
  ): Promise<void> {
    const modal = await this.modalCtrl.create({
      component,
      componentProps: data
    });

    return modal.present();
  }

  public async alert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      header: 'Pokédex Adventure',
      mode: 'ios',
      message,
      buttons: ['OK']
    });
    return alert;
  }

  public async confirm(message: string, header: string): Promise<any> {
    const alert = await this.alertCtrl.create({
      header,
      message,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        { text: 'OK' }
      ]
    });

    alert.present();
    return alert.onDidDismiss();
  }

  public dismissModal(): void {
    this.modalCtrl.dismiss();
  }
}