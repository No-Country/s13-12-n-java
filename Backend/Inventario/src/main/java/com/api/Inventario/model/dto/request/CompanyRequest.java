package com.api.Inventario.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyRequest {

    @NotBlank
    private String name;
    @NotBlank
    private String cuit;
    @NotBlank
    private String address;
    @NotBlank
    private String phone;
    @NotBlank
    private String email;
}
