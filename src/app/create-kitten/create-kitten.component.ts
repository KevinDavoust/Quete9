import { Component, Output } from '@angular/core';
import { KittenModel } from '../models/kitten.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {
  
  model: KittenModel = new KittenModel("", "", "", "");
  
  @Output() 
  sendKittenToParent: EventEmitter<KittenModel> = new EventEmitter();

  onSubmit(): void {
    console.log(this.model);
    this.sendKittenToParent.emit(this.model);
  }

  
}
