package com.api.Inventario.Security.auth;
import com.api.Inventario.Security.Dto.AuthResponse;
import com.api.Inventario.Security.Dto.LoginDto;
import com.api.Inventario.Security.Dto.RegistroDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
	public AuthController(AuthService authService) {
		this.authService = authService;
	}
	private final AuthService authService;

    @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginDto datos) {
    	try {
    		return ResponseEntity.ok(authService.login(datos));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("registro")
    public ResponseEntity<AuthResponse> registro(@RequestBody RegistroDto datos) {
		try {
    		return ResponseEntity.ok(authService.registro(datos));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
