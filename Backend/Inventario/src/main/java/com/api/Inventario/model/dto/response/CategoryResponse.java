package com.api.Inventario.model.dto.response;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponse {

    private Long id;

    private String nameCategory;

    private String descriptionCategory;
}
