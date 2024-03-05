package com.api.Inventario.model.entity;
import com.api.Inventario.model.enums.UnitOfMeasure;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;
@Getter @Setter
@Entity
@ToString
public class Supermarket extends Product {
    private Date expiration;
    @Enumerated(EnumType.STRING)
    private UnitOfMeasure unitOfMeasure;
}
