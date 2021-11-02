import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model';

@Component({
  selector: 'app-app-game-tabs',
  templateUrl: './app-game-tabs.component.html',
  styleUrls: ['./app-game-tabs.component.scss']
})
export class AppGameTabsComponent implements OnInit {
  @Input() game: Game
  constructor() { }

  ngOnInit(): void {
  }

}
