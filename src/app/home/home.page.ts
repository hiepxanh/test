import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  topFive = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']
  constructor(
    public navController: NavController,
  ) {}

}
