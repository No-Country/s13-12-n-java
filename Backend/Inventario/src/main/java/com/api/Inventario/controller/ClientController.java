package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.dto.request.ClientRequest;
import com.api.Inventario.model.dto.response.ClientResponse;
import com.api.Inventario.model.entity.Client;
import com.api.Inventario.service.Client.ClientServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/clients")
public class ClientController extends BaseControllerImpl<ClientResponse, ClientRequest, Long, Client, ClientServiceImpl> { //esta capa solo se comunica con la capa de servicio
}