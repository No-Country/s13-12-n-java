package com.api.Inventario.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TiendaDeRopaResponse {

        Long id;
        String name;
        String description;
        Double price;
        int stock;
        int stockMin;
        String image;
        String Talla;
        String Color;
        String Material;
        String Genero;
        boolean status;
}
