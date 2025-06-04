package com.serviparamo.api_rest.repository;

import com.serviparamo.api_rest.entity.MenuEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends
        JpaRepository<MenuEntity, Long>,
        JpaSpecificationExecutor<MenuEntity> {

}
