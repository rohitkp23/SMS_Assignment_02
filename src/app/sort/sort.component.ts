import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  @Output() sortSelected = new EventEmitter<string>();

  onSortChange(criteria: string) {
    this.sortSelected.emit(criteria);
  }
}
