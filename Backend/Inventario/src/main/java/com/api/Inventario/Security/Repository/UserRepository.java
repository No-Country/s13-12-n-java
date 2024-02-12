package com.api.Inventario.Security.Repository;




import com.api.Inventario.Security.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface UserRepository extends JpaRepository<Users,Integer> {
    Optional<Users> findByEmail(String email);
}
