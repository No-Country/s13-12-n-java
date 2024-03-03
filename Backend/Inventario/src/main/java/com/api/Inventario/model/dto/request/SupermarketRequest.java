package com.api.Inventario.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupermarketRequest {

        @NotBlank(message = "Name is required")
        private String name;
        private String description;
        private Double price;
        private int stock;
        private String image;
        private Date expiration;
        private String unitOfMeasure;
}
