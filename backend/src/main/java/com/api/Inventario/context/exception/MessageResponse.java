package com.api.Inventario.context.exception;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageResponse {
	 private String message;
}
