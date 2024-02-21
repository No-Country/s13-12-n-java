package com.api.Inventario.controller.base;

import org.springframework.security.access.annotation.Secured;

import java.util.List;

public interface IbaseController<RESPONSE,REQUEST,ID> {
	public RESPONSE create(REQUEST request);
   public RESPONSE getById(ID id);
	public List<RESPONSE> getAll() ;
	 public RESPONSE update(ID id, REQUEST  request);
//	boolean delete(ID id);

}
