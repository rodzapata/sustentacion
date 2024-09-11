package com.serviparamo.api_rest.controller;

import com.serviparamo.api_rest.dto.EquipmentTypeDto;
import com.serviparamo.api_rest.dto.ServerResponseDataDto;
import com.serviparamo.api_rest.service.EquipmentTypeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/equipment-type")
public class EquipmentTypeController {
    @Autowired
    private EquipmentTypeService service;

    @PostMapping()
    public ServerResponseDataDto create(@RequestBody @Valid EquipmentTypeDto dto) {

        EquipmentTypeDto response = this.service.create(dto);

        return ServerResponseDataDto.builder()
                .data(response)
                .status(HttpStatus.OK.value())
                .message("Registro creado con exito")
                .build();

    }
    @GetMapping
    public ServerResponseDataDto findAll() {

        List<EquipmentTypeDto> dtos = this.service.findAll();

        return ServerResponseDataDto.builder()
                .data(dtos)
                .status(HttpStatus.OK.value())
                .message("Registro encontrados")
                .build();
    }

    @GetMapping("/{id}")
    public ServerResponseDataDto findById(@PathVariable("id") Long id) {

        EquipmentTypeDto dto = this.service.getById(id);

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro encontrado")
                .build();
    }
    @DeleteMapping("/{id}")
    public ServerResponseDataDto deleteById(@PathVariable("id") Long id){
        return ServerResponseDataDto.builder()
                .data(this.service.deleteById(id))
                .status(HttpStatus.OK.value())
                .message("Registro eliminado")
                .build();
    }
    @PutMapping("/{id}")
    public ServerResponseDataDto updateById(
            @PathVariable("id") Long id,
            @RequestBody @Valid EquipmentTypeDto newData
    ) {

        EquipmentTypeDto dto = this.service.updateById(id, newData);

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro actualizado")
                .build();
    }


}
