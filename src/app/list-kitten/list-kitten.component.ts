import { Component, Input, Output } from '@angular/core';
import { KittenModel } from '../models/kitten.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {

  showInfos: boolean = false;

  @Input()
  kittenList: KittenModel[] = [];

  @Output()
  adoptedKittenEmitter: EventEmitter<KittenModel> = new EventEmitter();
  
  adoptKitten(kitten: KittenModel) {
    kitten.isAdopted = true;
    this.adoptedKittenEmitter.emit(kitten);
  }
}
