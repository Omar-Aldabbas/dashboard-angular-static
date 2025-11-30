import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = "control";
  // @HostListener('click') onClick() {
  //   console.log('they clicked me');
  // }
  @Input({ required: true }) label!: string;

  private el = inject(ElementRef);

  onClick() {
    console.log('they clicked me');
    console.log(this.el);
  }
}
