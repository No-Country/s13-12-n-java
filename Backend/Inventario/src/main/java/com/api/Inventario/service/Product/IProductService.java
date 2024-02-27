package com.api.Inventario.service.Product;

public interface IProductService {

    void deleteById(Long id);

    Double calclIVA(Double price);
}
