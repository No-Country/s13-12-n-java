package com.api.Inventario.Security.Dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroDto {
    String email;
    String password;
    String name;
    String lastName;
    String country;
    String rol;
}