import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameLocation, Pokemon } from '@shared/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-play-info',
  templateUrl: './play-info.component.html',
  styleUrls: ['./play-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayInfoComponent {

  @Input() pokemon: Pokemon | undefined;
  @Input() region: string | undefined;
  @Input() location: GameLocation | undefined;

  @Input() playing: boolean | undefined;
  @Input() show: boolean | undefined;

  constructor() { }

}
