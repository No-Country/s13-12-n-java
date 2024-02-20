package com.api.Inventario.controller;
import com.api.Inventario.models.dto.request.TiketRequest;
import com.api.Inventario.models.dto.response.TicketResponse;
import com.api.Inventario.service.TiketServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
@RestController
@RequestMapping("api/v1/prueba")
public class TicketController {
	@Autowired
	private TiketServiceImpl service;

	Logger log  = LoggerFactory.getLogger(TicketController.class);

	@Secured("COMPRADOR")
	@PostMapping("/create")
	public ResponseEntity<?> create( @RequestBody TiketRequest request) {
		TicketResponse newEntity= service.create(request);
		return new ResponseEntity<>(newEntity, HttpStatus.CREATED);
	}
}
