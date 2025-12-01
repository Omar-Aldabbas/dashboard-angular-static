import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') private form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  title: string = '';
  request: string = '';

  @Output() add = new EventEmitter<{ title: string; request: string }>();

  //this when using elment instance or ifk what they call it #input
  // onSubmit(title: HTMLInputElement, request: HTMLTextAreaElement) {
  //   this.add.emit({ title: title.value, request: request.value });
  //   // this.form?.nativeElement.reset();
  //   this.form().nativeElement.reset();
  // }
  onSubmit() {
    this.add.emit({ title: this.title,  request: this.request })
  }
}
