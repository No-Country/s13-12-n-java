package com.api.Inventario.model.entity;
import com.api.Inventario.model.entity.base.Base;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.web.ConditionalOnEnabledResourceChain;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

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