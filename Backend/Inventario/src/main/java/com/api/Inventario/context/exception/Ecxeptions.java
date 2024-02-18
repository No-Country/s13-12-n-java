package com.api.Inventario.context.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.util.HashMap;
import java.util.Map;
public class Ecxeptions {
	@RestControllerAdvice
	public class ExeptionHandler {
		@ResponseStatus(HttpStatus.BAD_REQUEST)
		@ExceptionHandler(MethodArgumentNotValidException.class)
		public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
			Map<String, String> errors = new HashMap<>();
			ex.getBindingResult().getAllErrors().forEach((error) -> {
				String fieldName = ((FieldError) error).getField();
				String errorMessage = error.getDefaultMessage();
				errors.put(fieldName, errorMessage);
			});
			return errors;
		}
		@ExceptionHandler(RuntimeException.class)
		public ResponseEntity<MessageResponse> runtimeExeption(RuntimeException exception){
			MessageResponse messageResponse = MessageResponse.builder().message(exception.getMessage()).build();
			return new ResponseEntity<>(messageResponse, HttpStatus.BAD_REQUEST);
		}
	}
}
