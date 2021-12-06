import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pokedex-play-actions',
  templateUrl: './play-actions.component.html',
  styleUrls: ['./play-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayActionsComponent {

  @Input() rolls: number | undefined;
  @Input() pokeballs: number | undefined;

  @Input() playing: boolean | undefined;
  @Input() show: boolean | undefined;

  @Output() onRoll = new EventEmitter<void>();
  @Output() onPokeball = new EventEmitter<void>();
  @Output() onShare = new EventEmitter<void>();
  @Output() onReset = new EventEmitter<void>();

  constructor() { }

  public doRoll(): void { this.onRoll.emit(); }
  public doPokeball(): void { this.onPokeball.emit();}
  public share(): void { this.onShare.emit(); }
  public reset(): void { this.onReset.emit(); }

}
