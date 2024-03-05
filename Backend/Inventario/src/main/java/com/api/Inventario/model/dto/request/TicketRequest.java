package com.api.Inventario.model.dto.request;

import com.api.Inventario.Security.Entity.Users;
import com.api.Inventario.model.entity.Product;
import com.api.Inventario.model.entity.TicketDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TicketRequest {
	private Long id ;
	private String tipo ;
	private String numero;
	private LocalDate fechaEmision;
	private List<TicketDetails> ticketDetails;
	private List<Product> productList;
	private Long user;

}
