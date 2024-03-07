package com.api.Inventario.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProviderResponse {

    private Long id;

    private String name;

    private String cuit;

    private String contact;

    private String address;

    private String phone;

    private String email;

}
