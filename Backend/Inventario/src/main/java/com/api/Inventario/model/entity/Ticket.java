package com.api.Inventario.model.entity;

import com.api.Inventario.Security.Entity.Users;
import com.api.Inventario.model.entity.base.Base;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@ToString
public class Ticket extends Base {
	private String tipo; // Ejemplo: Factura, Nota de crédito, etc.
	private String numero;
	private LocalDate fechaEmision;
	@OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL)
	private List<TicketDetails> ticketDetails = new ArrayList<>();

	@JsonIgnore
	@JoinColumn(name = "user_id", nullable = false)
	private Users users;


}