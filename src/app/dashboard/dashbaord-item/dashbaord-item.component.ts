import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashbaord-item',
  standalone: true,
  imports: [],
  templateUrl: './dashbaord-item.component.html',
  styleUrl: './dashbaord-item.component.css',
  host: {
    class: 'dashboard-item',
  },
})
export class DashbaordItemComponent {
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input({ required: true }) title!: string;

  // image2 = input.required<{src: string, alt: string}>()
  // title2 = input.required<string>()
}
