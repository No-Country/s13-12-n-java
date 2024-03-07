package com.api.Inventario.repository.base;

import com.api.Inventario.model.entity.base.Base;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T extends Base,ID> extends JpaRepository<T, ID> {
}