package com.api.Inventario.controller;

import com.api.Inventario.context.exception.MessageResponse;
import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.dto.request.SupermarketRequest;
import com.api.Inventario.model.dto.response.SupermarketResponse;
import com.api.Inventario.model.entity.Supermarket;
import com.api.Inventario.service.Supermarket.SupermarketServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/supermarket")
public class SupermarketController extends BaseControllerImpl<SupermarketResponse, SupermarketRequest, Long, Supermarket, SupermarketServiceImpl> {
	@PostMapping("/create-supermarket")
	public ResponseEntity<SupermarketResponse> create(@Valid @RequestBody SupermarketRequest request) {
		service.createSupermarket(request);

		return new ResponseEntity(new MessageResponse("Created Product"), HttpStatus.CREATED);




	}

}
