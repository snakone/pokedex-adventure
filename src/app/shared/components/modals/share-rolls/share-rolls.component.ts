import { Component, Input } from '@angular/core';
import { CrafterService } from '@core/services/crafter.service';
import { IonItemSliding } from '@ionic/angular';

import { Pokemon } from '@shared/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-share-rolls',
  templateUrl: './share-rolls.component.html',
  styleUrls: ['./share-rolls.component.scss'],
})

export class ShareRollsComponent {

  @Input() list: Pokemon[];

  constructor(
    private crafter: CrafterService
  ) { }

  public close(): void {
    this.crafter.dismissModal();
  }

  public async share(): Promise<void> {
    const alert = await this.crafter.alert('Shared Successfully');
    alert.present();
    alert.onDidDismiss().then(_ => this.close());
  }

  public async delete(
    index: number,
    slider: IonItemSliding
  ): Promise<void> {
    const { role } = await this.crafter.confirm(
      'Do you want to remove this Pokémon?',
      'Remove ' + this.list[index].name
    );

    if (!role) {
      this.list = this.list.filter((_, i) => i !== index);
    } else {
      slider.close();
    }
  }

}
