package com.api.Inventario.model.dto.response;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyResponse {

    private Long id ;

    private String name;

    private String cuit;

    private String address;

    private String phone;

    private String email;
}
