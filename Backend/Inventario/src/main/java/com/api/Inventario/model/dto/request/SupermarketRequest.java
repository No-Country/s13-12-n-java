package com.api.Inventario.model.dto.request;

import lombok.*;

import java.util.Date;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SupermarketRequest {

        private String name;
        private String description;
        private Double price;
        private int stock;
        private String image;
        private Date expiration;
        private String unitOfMeasure;

        private Long category;
}
