package com.api.Inventario.Security.Entity;

import com.api.Inventario.Security.Enum.Role;
import com.api.Inventario.model.entity.Ticket;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.mapping.UnionSubclass;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Users implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String email;
    String lastName;
    String name;
    String country;
    String password;
    @Enumerated(EnumType.STRING)
    Role role;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    List<Ticket> ticketList = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      return List.of(new SimpleGrantedAuthority((role.name())));
    }
    @Override
    public String getUsername() {
        return email;
    }
    @Override
    public boolean isAccountNonExpired() {
       return true;
    }
    @Override
    public boolean isAccountNonLocked() {
       return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }

}
