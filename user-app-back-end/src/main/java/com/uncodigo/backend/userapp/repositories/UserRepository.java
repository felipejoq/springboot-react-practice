package com.uncodigo.backend.userapp.repositories;

import com.uncodigo.backend.userapp.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
