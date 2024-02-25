package com.api.Inventario.service.base;
import java.util.List;
public interface BaseService <RESPONSE,REQUEST,ID>{
	RESPONSE create(REQUEST request);
	RESPONSE getById(ID id);
	List<RESPONSE> getAll() ;
	RESPONSE update(ID id, REQUEST  request);
//	boolean delete(ID id);
}
