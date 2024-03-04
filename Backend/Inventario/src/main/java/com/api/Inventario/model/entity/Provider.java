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
@Table(name = "provider")
public class Provider extends Base {

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false,unique = true)
    private int cuit;

    @Column(nullable = false,unique = true)
    private String contact;

    @Column(nullable = false,unique = true)
    private String address;

    @Column(nullable = false,unique = true)
    private String phone;

    @Column(nullable = false,unique = true)
    private String email;


}
