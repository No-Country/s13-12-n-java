package com.api.Inventario.model.entity;

import com.api.Inventario.model.entity.base.Base;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "category")
public class Category extends Base {

    @Column(name = "name", nullable = false, unique = true)
    private String nameCategory;

    @Column(name = "description", nullable = false, unique = true)
    private String descriptionCategory;
}
