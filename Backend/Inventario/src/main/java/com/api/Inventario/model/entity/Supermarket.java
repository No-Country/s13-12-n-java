package com.api.Inventario.model.entity;

import com.api.Inventario.model.enums.UnitOfMeasure;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "supermarket")
public class Supermarket extends Product {
    private Date expiration;
    @Enumerated(EnumType.STRING)
    private UnitOfMeasure unitOfMeasure;
}
