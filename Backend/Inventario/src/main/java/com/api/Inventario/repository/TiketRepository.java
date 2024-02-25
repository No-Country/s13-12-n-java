package com.api.Inventario.repository;


import com.api.Inventario.model.entity.Ticket;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TiketRepository extends BaseRepository<Ticket,Long> {




}