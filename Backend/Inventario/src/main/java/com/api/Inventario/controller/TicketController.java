package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;

import com.api.Inventario.models.dto.entity.Ticket;
import com.api.Inventario.models.dto.request.TicketRequest;

import com.api.Inventario.models.dto.response.TicketResponse;
import com.api.Inventario.service.TicketServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/prueba")
public class TicketController extends BaseControllerImpl<TicketResponse,TicketRequest,Long,Ticket,TicketServiceImpl> {
	@Autowired
	private TicketServiceImpl service;


//	@Secured("COMPRADOR")
//	@PostMapping("/create")
//	public ResponseEntity<?> create( @RequestBody TiketRequest request) {
//		TicketResponse newEntity= service.create(request);
//		return new ResponseEntity<>(newEntity, HttpStatus.CREATED);
//	}
}
