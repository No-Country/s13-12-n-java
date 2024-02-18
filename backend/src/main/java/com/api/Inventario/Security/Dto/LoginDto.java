package com.api.Inventario.Security.Dto;


import lombok.*;

@Getter @Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    String email;
    String password; 
}
