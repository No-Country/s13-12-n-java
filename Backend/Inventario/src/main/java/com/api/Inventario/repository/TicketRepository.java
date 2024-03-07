package com.api.Inventario.repository;


import com.api.Inventario.model.entity.Ticket;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends BaseRepository<Ticket,Long> {




}