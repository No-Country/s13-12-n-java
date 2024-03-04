package com.api.Inventario.service.Provider;

import com.api.Inventario.model.dto.request.ProviderRequest;
import com.api.Inventario.model.dto.response.ProviderResponse;
import com.api.Inventario.model.entity.Provider;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;
@Service
public class ProviderServiceImpl extends BaseServiceImpl<ProviderResponse, ProviderRequest, Long, Provider> implements IProviderService {

    public ProviderServiceImpl(BaseRepository<Provider, Long> repository) {
        super(repository);
    }


}
