package com.api.Inventario.service.Client;

import com.api.Inventario.model.dto.request.ClientRequest;
import com.api.Inventario.model.dto.response.ClientResponse;
import com.api.Inventario.model.entity.Client;
import com.api.Inventario.repository.ClientRepository;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl extends BaseServiceImpl<ClientResponse, ClientRequest,Long, Client> implements IClientService {

    public ClientRepository repository;
    public ClientServiceImpl(BaseRepository<Client, Long> baseRepository) {
        super(baseRepository);
    }
}
