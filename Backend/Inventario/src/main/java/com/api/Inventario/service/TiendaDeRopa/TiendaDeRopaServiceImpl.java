package com.api.Inventario.service.TiendaDeRopa;

import com.api.Inventario.model.entity.TiendaDeRopa;
import com.api.Inventario.model.dto.request.TiendaDeRopaRequest;
import com.api.Inventario.model.dto.response.TiendaDeRopaResponse;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class TiendaDeRopaServiceImpl extends BaseServiceImpl<TiendaDeRopaResponse, TiendaDeRopaRequest, Long, TiendaDeRopa> implements ITiendaDeRopaService {

        public TiendaDeRopaServiceImpl baseRepository;
        public TiendaDeRopaServiceImpl(BaseRepository<TiendaDeRopa, Long> baseRespository){
            super(baseRespository);
        }

        @Override
        public void deleteById(Long id) {
            this.baseRepository.deleteById(id);
        }
}
