package com.api.Inventario.model.entity;
import com.api.Inventario.model.entity.base.Base;
import jakarta.persistence.*;
import lombok.*;
@Getter @Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Category extends Base {
    @Column(name = "name", nullable = false, unique = true)
    private String nameCategory;
    @Column(name = "description", nullable = false, unique = true)
    private String descriptionCategory;
}
