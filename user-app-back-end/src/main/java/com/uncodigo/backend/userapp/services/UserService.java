package com.uncodigo.backend.userapp.services;

import com.uncodigo.backend.userapp.models.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();
    Optional<User> findById(Long id);
    User save(User user);
    Optional<User> update(Long id, User user);
    void remove(Long id);
}
