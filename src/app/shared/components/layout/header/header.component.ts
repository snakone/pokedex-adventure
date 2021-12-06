import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() menu: string | undefined;

  constructor() { }

  ngOnInit() {}

}
