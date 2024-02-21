package com.api.Inventario.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class TicketRequest {

private String name;

	@Override
	public String toString() {
		return "TicketRequest{" +
				"name='" + name + '\'' +
				'}';
	}
}
