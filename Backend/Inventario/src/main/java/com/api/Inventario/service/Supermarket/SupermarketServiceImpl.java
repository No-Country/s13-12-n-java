package com.api.Inventario.service.Supermarket;

import com.api.Inventario.model.dto.request.SupermarketRequest;
import com.api.Inventario.model.dto.response.SupermarketResponse;
import com.api.Inventario.model.entity.Supermarket;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class SupermarketServiceImpl extends BaseServiceImpl<SupermarketResponse, SupermarketRequest, Long, Supermarket>{

    public SupermarketServiceImpl(BaseRepository<Supermarket, Long> baseRespository){
        super(baseRespository);
    }
}
