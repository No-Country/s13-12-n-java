package com.api.Inventario.repository;

import com.api.Inventario.model.entity.Product;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends BaseRepository<Product, Long> { //<nombre de la entidad, tipo del identificador que marcamos con @id>

}