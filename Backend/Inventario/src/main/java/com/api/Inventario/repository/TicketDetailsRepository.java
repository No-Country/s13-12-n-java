package com.api.Inventario.repository;

import com.api.Inventario.model.entity.TicketDetails;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketDetailsRepository extends BaseRepository<TicketDetails, Long> {
}