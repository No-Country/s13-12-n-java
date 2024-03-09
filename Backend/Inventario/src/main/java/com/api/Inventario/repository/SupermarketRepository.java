package com.api.Inventario.repository;

import com.api.Inventario.model.entity.Supermarket;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupermarketRepository extends BaseRepository<Supermarket, Long> {
}