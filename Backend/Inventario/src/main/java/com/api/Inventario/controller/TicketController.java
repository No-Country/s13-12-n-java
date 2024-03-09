package com.api.Inventario.controller;
import com.api.Inventario.context.exception.MessageResponse;
import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.entity.Ticket;
import com.api.Inventario.model.dto.request.TicketRequest;
import com.api.Inventario.model.dto.response.TicketResponse;
import com.api.Inventario.service.Ticket.TicketServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/ticket")
public class TicketController extends BaseControllerImpl<TicketResponse,TicketRequest,Long,Ticket,TicketServiceImpl> {
	@Autowired
	private TicketServiceImpl service;


	@PostMapping("/create-ticket")
	public ResponseEntity<TicketResponse> create(@Valid @RequestBody TicketRequest request) {
	  service.createTicketAndDetail(request);
		return new ResponseEntity(new MessageResponse("Created Tcket"), HttpStatus.CREATED);
	}

}
