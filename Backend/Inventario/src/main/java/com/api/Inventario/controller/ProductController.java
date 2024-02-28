package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.entity.Product;
import com.api.Inventario.model.dto.request.ProductRequest;
import com.api.Inventario.model.dto.response.ProductResponse;
import com.api.Inventario.service.Product.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/products")
public class ProductController extends BaseControllerImpl<ProductResponse, ProductRequest, Long, Product, ProductServiceImpl> { //esta capa solo se comunica con la capa de servicio

    @Autowired
    private ProductServiceImpl productServiceImpl;

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        this.productServiceImpl.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}