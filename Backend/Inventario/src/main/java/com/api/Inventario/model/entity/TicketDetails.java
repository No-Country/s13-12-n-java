package com.api.Inventario.model.entity;
import com.api.Inventario.model.entity.base.Base;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@ToString
public class TicketDetails extends Base {
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "ticket_id", nullable = false)
	private Ticket ticket;
	private Integer amount;

}