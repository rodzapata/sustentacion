package com.serviparamo.api_rest.repository;

import com.serviparamo.api_rest.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends
        JpaRepository<UserEntity, Long>,
        JpaSpecificationExecutor<UserEntity> {

    UserEntity findByEmail(String email);
/*
    @Query("UPDATE Usuario u SET u.password = :newPassword WHERE u.email = :oldEmail")
    int actualizarPassword(@Param("newPassword") String newPassword, @Param("oldEmail") String oldEmail);

 */
}

