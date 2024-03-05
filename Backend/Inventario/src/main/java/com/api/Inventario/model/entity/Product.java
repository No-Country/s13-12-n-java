package com.api.Inventario.model.entity;

import com.api.Inventario.model.entity.base.Base;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "product")
public  class Product extends Base {
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
    @ManyToOne
    @JoinColumn(name= "category_id")
    @JsonBackReference
    private Category category;
    @ManyToOne
    @JoinColumn(name="ticket_id")
    private Ticket ticket;



}
