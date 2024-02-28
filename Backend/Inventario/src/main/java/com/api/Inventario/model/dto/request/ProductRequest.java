package com.api.Inventario.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {

    @NotBlank(message = "Name is required")
    private String name;
    private String description;
    private Double price;
    private int stock;
    private String image;
}
