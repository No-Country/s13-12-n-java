package com.api.Inventario.service.Ticket;

import com.api.Inventario.model.dto.request.TicketRequest;

public interface ITicketService {
	void  createTicketAndDetail (TicketRequest ticketRequest);
}
