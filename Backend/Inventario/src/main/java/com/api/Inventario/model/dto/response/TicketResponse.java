package com.api.Inventario.model.dto.response;

import com.api.Inventario.model.entity.TicketDetails;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TicketResponse {
	private Long id ;
	private String numero;
	private LocalDate fechaEmision;
	private List<TicketDetails> ticketDetails;
}
