import { Component, Input, Output } from '@angular/core';
import { KittenModel } from './models/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quete9';
  
  @Output()
  kittenList: KittenModel[] = [
    {
      name: "chat 1",
      race: "race1",
      birthdate: "10/10/1010",
      image: "http://placekitten.com/150/200",
      isAdopted: false
    }
  ]
  kitten!: KittenModel;

  @Output()
  adoptedKittenList: KittenModel[] = [];

  
  @Input()
  receiveKitten($event: KittenModel) {
    this.kittenList.push($event);
  }
  
  @Input()
  kittenAdopted(kitten: KittenModel) {
    this.adoptedKittenList.push(kitten);
    console.log(kitten)
  }
}
