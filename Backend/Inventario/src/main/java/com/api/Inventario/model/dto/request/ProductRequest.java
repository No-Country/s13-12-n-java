package com.api.Inventario.model.dto.request;

import lombok.*;

@Setter @Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductRequest {
    private String name;
    private String description;
    private Double price;
    private int stock;
    private String image;
}
