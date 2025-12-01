import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];


  addTicket(ticketData: { title: string, request: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.request,
      id: `${Math.floor(Math.random() * 100)}`,
      status: 'open',
    }

    this.tickets.push(ticket);
    console.log(this.tickets)
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket) => ticket.id === id ? {...ticket, status: 'close'} : ticket)
  }
}
