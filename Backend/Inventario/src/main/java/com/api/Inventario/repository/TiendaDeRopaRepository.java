package com.api.Inventario.repository;

import com.api.Inventario.model.entity.TiendaDeRopa;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TiendaDeRopaRepository extends BaseRepository<TiendaDeRopa, Long> {
}