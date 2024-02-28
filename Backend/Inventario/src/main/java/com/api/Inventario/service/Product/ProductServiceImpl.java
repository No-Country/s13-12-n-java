package com.api.Inventario.service.Product;

import com.api.Inventario.model.dto.request.ProductRequest;
import com.api.Inventario.model.dto.response.ProductResponse;
import com.api.Inventario.model.entity.Product;
import com.api.Inventario.repository.ProductRepository;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;

import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ProductServiceImpl extends BaseServiceImpl<ProductResponse, ProductRequest,Long, Product> implements IProductService {

    public ProductRepository repository;
    public ProductServiceImpl(BaseRepository<Product, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public void deleteById(Long id) {
        Optional<Product> optionalProduct = this.repository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("Product not found");
        }
        this.repository.deleteById(id);
    }
}
