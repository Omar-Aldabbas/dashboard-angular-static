import { Component, Input, output, Output } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data?: Ticket;
  isVisable = false;
  close = output();
  onToggleTicket() {
    this.isVisable = !this.isVisable;
  }

  onCompleteTicket() {
    this.close.emit()
  }
}
