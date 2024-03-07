package com.api.Inventario.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientResponse {

    Long id;
    String birthday;
    String address;
    String tel;
    String email;
    String initialDate;
    String supervisor;
    String time;
    Double salary;
    boolean status;
}
