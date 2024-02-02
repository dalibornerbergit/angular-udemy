import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(event: Event) {
    event.preventDefault();

    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
