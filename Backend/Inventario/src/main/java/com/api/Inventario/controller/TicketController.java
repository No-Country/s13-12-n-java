package com.api.Inventario.controller;
import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.entity.Ticket;
import com.api.Inventario.model.dto.request.TicketRequest;
import com.api.Inventario.model.dto.response.TicketResponse;
import com.api.Inventario.service.Ticket.TicketServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/ticket")
public class TicketController extends BaseControllerImpl<TicketResponse,TicketRequest,Long,Ticket,TicketServiceImpl> {
	@Autowired
	private TicketServiceImpl service;


}
