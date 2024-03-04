package com.api.Inventario.model.entity;
import com.api.Inventario.model.entity.base.Base;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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
    @JsonIgnore
    @OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
    List<Supermarket>supermarketList = new ArrayList<>();
}
