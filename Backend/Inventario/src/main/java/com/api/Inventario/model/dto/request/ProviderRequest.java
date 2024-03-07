package com.api.Inventario.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProviderRequest {

    @NotBlank
    private String name;

    @NotBlank
    private String cuit;

    @NotBlank
    private String contact;

    @NotBlank
    private String address;

    @NotBlank
    private String phone;

    @NotBlank
    private String email;


}
