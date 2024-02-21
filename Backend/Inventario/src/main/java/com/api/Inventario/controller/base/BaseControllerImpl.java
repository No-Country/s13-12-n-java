package com.api.Inventario.controller.base;
import com.api.Inventario.models.dto.entity.base.Base;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class BaseControllerImpl<RESPONSE,REQUEST,ID,ENTITY extends Base,S extends BaseServiceImpl<RESPONSE,REQUEST,ID,ENTITY>>{
	Logger logger = LoggerFactory.getLogger(BaseServiceImpl.class);
	@Autowired
	protected S service;

	@Secured("COMPRADOR")
	@PostMapping("/create")
	public ResponseEntity<RESPONSE> create(@RequestBody REQUEST request) {
		RESPONSE newEntity= service.create(request);
		return new ResponseEntity(newEntity, HttpStatus.CREATED);
	}
	public RESPONSE getById(ID id) {
		return null;
	}

	public List<RESPONSE> getAll() {
		return null;
	}

	public RESPONSE update(ID id, REQUEST request) {
		return null;
	}
}
