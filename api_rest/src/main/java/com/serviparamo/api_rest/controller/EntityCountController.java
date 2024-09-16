package com.serviparamo.api_rest.controller;

import com.serviparamo.api_rest.dto.EntityCountDto;
import com.serviparamo.api_rest.dto.ServerResponseDataDto;
import com.serviparamo.api_rest.service.EntityCountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EntityCountController {

    @Autowired
    private EntityCountService entityCountService;


    @GetMapping("/entity-counts")
    public ServerResponseDataDto getEntityCounts() {

        EntityCountDto dto = this.entityCountService.getEntityCounts();

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro encontrados")
                .build();

    }
}