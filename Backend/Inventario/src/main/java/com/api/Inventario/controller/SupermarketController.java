package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.dto.request.SupermarketRequest;
import com.api.Inventario.model.dto.response.SupermarketResponse;
import com.api.Inventario.model.entity.Supermarket;
import com.api.Inventario.service.Supermarket.SupermarketServiceImpl;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/supermarket")
public class SupermarketController extends BaseControllerImpl<SupermarketResponse, SupermarketRequest, Long, Supermarket, SupermarketServiceImpl> {
}
