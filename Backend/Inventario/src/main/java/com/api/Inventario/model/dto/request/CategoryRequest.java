package com.api.Inventario.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequest {

    @NotBlank(message = "El nombre es requerido obligatoriamente")
    private String nameCategory;

    @NotBlank(message = "La descripción es requerida obligatoriamente")
    private String descriptionCategory;
}
