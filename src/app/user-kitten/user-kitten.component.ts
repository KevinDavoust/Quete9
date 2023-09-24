import { Component, Input } from '@angular/core';
import { KittenModel } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {
  
  @Input()
  adoptedKittenList: KittenModel[] = [];
}
