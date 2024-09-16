package com.serviparamo.api_rest.controller;

import com.serviparamo.api_rest.dto.EntityCountDto;
import com.serviparamo.api_rest.service.EntityCountService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EntityCountController {

    private final EntityCountService entityCountService;

    public EntityCountController(EntityCountService entityCountService) {
        this.entityCountService = entityCountService;
    }

    @GetMapping("/entity-counts")
    public EntityCountDto getEntityCounts() {
        return entityCountService.getEntityCounts();
    }
}
