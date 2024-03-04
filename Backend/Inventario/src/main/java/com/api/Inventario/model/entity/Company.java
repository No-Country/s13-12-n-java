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
@Table(name = "company")
public class Company extends Base {

    @Column(nullable = false,unique = true)
    private String name;
    @Column(nullable = false,unique = true)
    private String cuit;
    @Column(nullable = false,unique = true)
    private String address;
    @Column(nullable = false,unique = true)
    private String phone;
    @Column(nullable = false,unique = true)
    private String email;

}
