package com.api.Inventario.model.entity;

import com.api.Inventario.model.enums.Genero;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tienda_de_ropa")
public class TiendaDeRopa  extends Product {
    private String Talla;
    private String Color;
    private String Material;
    @Enumerated(EnumType.STRING)
    private Genero Genero;
}
