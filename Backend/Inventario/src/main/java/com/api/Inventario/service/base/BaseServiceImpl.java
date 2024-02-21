package com.api.Inventario.service.base;
import com.api.Inventario.models.dto.entity.Ticket;

import com.api.Inventario.models.dto.entity.base.Base;
import com.api.Inventario.repository.base.BaseRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import java.lang.reflect.ParameterizedType;
import java.util.List;
public   class BaseServiceImpl<RESPONSE,REQUEST,ID,ENTITY extends  Base> implements BaseService<RESPONSE,REQUEST,ID> {
	 Logger logger = LoggerFactory.getLogger(BaseServiceImpl.class);
	@Autowired
	 BaseRepository<ENTITY,ID> baseRepository;
	@Autowired
	private  ModelMapper modelMapper;
	public BaseServiceImpl(BaseRepository<Ticket, Long> baseRepository) {
	}
	@Override
	public RESPONSE create(REQUEST request) {
		try {
			Class<ENTITY> entityType = extractGenericType();
			ENTITY entity = modelMapper.map(request,entityType);
			baseRepository.save(entity);
			Class<RESPONSE> response = extractGeneric();
			return modelMapper.map(entity,response);
		} catch (Exception e) {
			e.printStackTrace();
			return null ;
		}
	}

	@Override
	public RESPONSE getById(ID id) {
		return null;
	}

	@Override
	public List<RESPONSE> getAll() {
		return null;
	}

	@Override
	public RESPONSE update(ID id, REQUEST request) {
		return null;
	}

	private Class<ENTITY> extractGenericType() {
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<ENTITY>) genericSuperclass.getActualTypeArguments()[3];
	}
	private Class<RESPONSE> extractGeneric() {
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<RESPONSE>) genericSuperclass.getActualTypeArguments()[0];
	}

}
