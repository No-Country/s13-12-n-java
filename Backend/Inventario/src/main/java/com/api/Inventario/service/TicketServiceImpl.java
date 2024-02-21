package com.api.Inventario.service;

import com.api.Inventario.models.dto.entity.Ticket;
import com.api.Inventario.models.dto.request.TicketRequest;
import com.api.Inventario.models.dto.response.TicketResponse;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class TicketServiceImpl extends BaseServiceImpl<TicketResponse, TicketRequest,Long,Ticket> {

	public TicketServiceImpl(BaseRepository<Ticket,Long> baseRepository) {
		super(baseRepository);
	}







}

