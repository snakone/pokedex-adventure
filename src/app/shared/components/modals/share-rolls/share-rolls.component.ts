import { Component, Input } from '@angular/core';
import { CrafterService } from '@core/services/crafter.service';

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

  public delete(index: number): void {
    this.list = this.list.filter((_, i) => i !== index);
  }

}
