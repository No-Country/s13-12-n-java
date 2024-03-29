package com.api.Inventario.service.base;
import com.api.Inventario.model.entity.base.Base;
import com.api.Inventario.repository.base.BaseRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.stream.Collectors;
public   class BaseServiceImpl<RESPONSE,REQUEST,ID,ENTITY extends  Base> implements BaseService<RESPONSE,REQUEST,ID> {
	 Logger logger = LoggerFactory.getLogger(BaseServiceImpl.class);
	@Autowired
	 BaseRepository<ENTITY,ID> baseRepository;
	@Autowired
	private  ModelMapper modelMapper;

	public BaseServiceImpl(BaseRepository<ENTITY, Long> baseRepository) {
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
		Class<RESPONSE> responseType = extractGeneric();
		Class<ENTITY> entityType = extractGenericType();
		RESPONSE e=	modelMapper.map(baseRepository.findById(id).orElseThrow(),responseType);
		return e;
	}
	@Override
	public List<RESPONSE> getAll() {
		Class<RESPONSE> entityType =  extractGeneric();
		List<ENTITY> e =  baseRepository.findAll();
		return e.stream()
				.map(generic -> modelMapper.map(generic,entityType))
				.collect(Collectors.toList());
	}
	@Override
	public RESPONSE update(ID id, REQUEST request) {
		Class<RESPONSE> r = extractGeneric();
		ENTITY entityOptional = baseRepository.findById(id).orElseThrow();
		System.out.println(entityOptional.toString());
		if (entityOptional !=  null ) {
			ENTITY existingEntity = entityOptional;
			modelMapper.map(request, existingEntity);
			ENTITY updatedEntity = baseRepository.save(existingEntity);
			RESPONSE response = entityToResponse(existingEntity);
			return response ;
		}
		return (RESPONSE) new RuntimeException("fsdf");
	}

	@Override
	public void delete(ID id) {

	}

	private Class<ENTITY> extractGenericType() {
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<ENTITY>) genericSuperclass.getActualTypeArguments()[3];
	}
	private Class<RESPONSE> extractGeneric() {
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<RESPONSE>) genericSuperclass.getActualTypeArguments()[0];
	}
	RESPONSE entityToResponse(ENTITY entity){
		Class<RESPONSE> responseClass = extractGeneric();
		RESPONSE   response = modelMapper.map(entity,responseClass);
		return  response ;
	}
}
