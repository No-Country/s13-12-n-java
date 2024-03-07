package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.dto.request.ProviderRequest;
import com.api.Inventario.model.dto.response.ProviderResponse;
import com.api.Inventario.model.entity.Provider;
import com.api.Inventario.service.Provider.ProviderServiceImpl;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("providers")
public class ProviderController extends BaseControllerImpl<ProviderResponse, ProviderRequest, Long, Provider, ProviderServiceImpl> {
}
