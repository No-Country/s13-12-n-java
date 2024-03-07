package com.api.Inventario.repository;

import com.api.Inventario.model.entity.Client;
import com.api.Inventario.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends BaseRepository<Client, Long> { //<nombre de la entidad, tipo del identificador que marcamos con @id>

}