package com.api.Inventario.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientRequest {

    @NotBlank(message = "Birthday is required")
    private String birthday;
    private String address;
    @NotBlank(message = "Tel is required")
    private String tel;
    @NotBlank(message = "Email is required")
    private String email;
    private String initialDate;
    private String supervisor;
    private String time;
    private Double salary;
}
