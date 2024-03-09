package com.api.Inventario.model.entity;

import com.api.Inventario.model.entity.base.Base;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public abstract class Product extends Base {
    @Column( nullable = false)
    private String name;
    private String description;
    @Column( nullable = false)
    private Double price;
    @Column( nullable = false)
    private int stock;
    private int stockMin = 5;
    private String image;
    private boolean status = true;
}
