package com.api.Inventario.service;

import com.api.Inventario.models.dto.entity.Tiket;
import com.api.Inventario.models.dto.request.TiketRequest;
import com.api.Inventario.models.dto.response.TicketResponse;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class TiketServiceImpl extends BaseServiceImpl<TicketResponse, TiketRequest,Long,Tiket> {

	public TiketServiceImpl(BaseRepository<Tiket,Long> baseRepository) {
		super(baseRepository);
	}







}

