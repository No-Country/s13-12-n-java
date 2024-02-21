package com.api.Inventario.controller.base;
import com.api.Inventario.context.exception.MessageResponse;
import com.api.Inventario.models.dto.entity.base.Base;
import com.api.Inventario.service.base.BaseServiceImpl;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class BaseControllerImpl<RESPONSE,REQUEST,ID,ENTITY extends Base,S extends BaseServiceImpl<RESPONSE,REQUEST,ID,ENTITY>>{
	Logger logger = LoggerFactory.getLogger(BaseServiceImpl.class);
	@Autowired
	protected S service;

	@Secured("VENDEDOR")
	@PostMapping("/create")
	public ResponseEntity<RESPONSE> create( @Valid @RequestBody REQUEST request) {
		RESPONSE newEntity= service.create(request);
		return new ResponseEntity(newEntity, HttpStatus.CREATED);
	}
	@Secured("VENDEDOR")
	@GetMapping("/find/{id}")
	public ResponseEntity<RESPONSE> getById(@PathVariable ID id) {
		RESPONSE entity = service.getById(id);
		return new ResponseEntity(entity, HttpStatus.OK);
	}
	@Secured("VENDEDOR")
	@GetMapping("")
	public ResponseEntity<List<RESPONSE>> getAll() {
		List<RESPONSE> entity= service.getAll();
		return new ResponseEntity<>(entity , HttpStatus.OK);
	}
	@Secured("VENDEDOR")
	@PutMapping("/update/{id}")
	public ResponseEntity<RESPONSE> update(@PathVariable ID id, @RequestBody REQUEST request) {
		RESPONSE  updateEntity = service.update(id,request);
		if (updateEntity != null) {
			return ( new ResponseEntity("update", HttpStatus.OK));
		} else {
			return new ResponseEntity(new MessageResponse("you  haven't update your info"),HttpStatus.NOT_FOUND);
		}
	}
}
