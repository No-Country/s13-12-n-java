package com.api.Inventario.Security.auth;
import com.api.Inventario.Security.Dto.AuthResponse;
import com.api.Inventario.Security.Dto.LoginDto;
import com.api.Inventario.Security.Dto.RegistroDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {
	public AuthController(AuthService authService) {
		this.authService = authService;
	}
	private final AuthService authService;
	@CrossOrigin("*")
    @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginDto datos) {
    	try {
    		return ResponseEntity.ok(authService.login(datos));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
	@CrossOrigin("*")
    @PostMapping("registro")
    public ResponseEntity<AuthResponse> registro(@RequestBody RegistroDto datos) {
		try {
    		return ResponseEntity.ok(authService.registro(datos));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
