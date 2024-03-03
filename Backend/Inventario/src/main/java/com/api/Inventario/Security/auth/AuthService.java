package com.api.Inventario.Security.auth;
import com.api.Inventario.Security.Dto.AuthResponse;
import com.api.Inventario.Security.Dto.LoginDto;
import com.api.Inventario.Security.Dto.RegistroDto;
import com.api.Inventario.Security.Entity.Users;
import com.api.Inventario.Security.Enum.Role;
import com.api.Inventario.Security.Jwt.JwtService;
import com.api.Inventario.Security.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    public AuthResponse login(LoginDto datos) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(datos.getEmail(), datos.getPassword()));
        UserDetails user = userRepository.findByEmail(datos.getEmail()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();
    }
    public AuthResponse registro(RegistroDto datos) {
    	
        Optional<Users> userOptional = userRepository.findByEmail(datos.getEmail());
        if (userOptional.isPresent()) {
            throw new RuntimeException("Ya existe un usuario con ese email");
        }
        Users user = Users.builder()
            .email(datos.getEmail())
            .password(passwordEncoder.encode(datos.getPassword()))
            .name(datos.getName())
            .lastName(datos.getLastName())
            .country(datos.getCountry())
            .role(Role.valueOf(datos.getRol()))
            .build();
        userRepository.save(user);
        return AuthResponse.builder()
            .token(jwtService.getToken(user))
            .build();
    }
}
