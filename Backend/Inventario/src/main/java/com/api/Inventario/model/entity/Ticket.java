package com.api.Inventario.model.entity;

import com.api.Inventario.Security.Entity.Users;
import com.api.Inventario.model.entity.base.Base;
import com.api.Inventario.model.enums.TipoTicketEnum;
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

	private String tipo;
	private String numero;
	private LocalDate fechaEmision;
	@JsonIgnore
	@JoinColumn(name = "user_id", nullable = false)
	private Users users;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ticket_details_id", referencedColumnName = "id")
	private TicketDetails ticketDetails;
}