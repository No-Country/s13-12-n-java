package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.entity.TiendaDeRopa;
import com.api.Inventario.model.dto.request.TiendaDeRopaRequest;
import com.api.Inventario.model.dto.response.TiendaDeRopaResponse;
import com.api.Inventario.service.TiendaDeRopa.TiendaDeRopaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/tienda-de-ropa")
public class TiendaDeRopaController extends BaseControllerImpl<TiendaDeRopaResponse, TiendaDeRopaRequest, Long, TiendaDeRopa, TiendaDeRopaServiceImpl> {
    @Autowired
    private TiendaDeRopaServiceImpl tiendaDeRopaServiceImpl;
    
    @DeleteMapping("delete/{id}")
    public void deleteById(@PathVariable("id") Long id){
        this.tiendaDeRopaServiceImpl.deleteById(id);
    }
}
