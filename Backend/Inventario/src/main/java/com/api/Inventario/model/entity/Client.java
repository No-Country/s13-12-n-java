package com.api.Inventario.model.entity;

import com.api.Inventario.model.entity.base.Base;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
 public class Client extends Base {
    @Column( nullable = false)
    private Date birthday;
    private String address;
    @Column( nullable = false)
    private String tel;
    @Column( nullable = false)
    private String email;
    private Date initialDate;
    private String supervisor;
    private String time;
    private Double salary;
    private boolean status = true;
}
