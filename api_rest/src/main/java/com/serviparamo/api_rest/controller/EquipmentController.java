package com.serviparamo.api_rest.controller;

import com.serviparamo.api_rest.dto.EquipmentDto;
import com.serviparamo.api_rest.dto.ServerResponseDataDto;
import com.serviparamo.api_rest.entity.EquipmentEntity;
import com.serviparamo.api_rest.service.EquipmentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/equipment")

public class EquipmentController {
    @Autowired
    private EquipmentService service;

    @Autowired
    private EquipmentService equipmentService;


    //prueba de consulta x customerId

    //@GetMapping("/findByCustomerId")
    //public List<EquipmentDto> getEquipments(@RequestParam Long id) {
    @GetMapping("/findByCustomerId/{id}")
        public List<EquipmentDto> getEquipments(@PathVariable("id") Long id) {

        // Llama al servicio para obtener los datos filtrados por customerId
        return equipmentService.getEquipmentsByCustomerId(id);

        //EquipmentDto dto = this.service.getById(id);
        /*
        EquipmentDto dto = this.service.getEquipmentsByCustomerId(id);

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro encontrado")
                .build();

        */
    }
    // fin de prueba

    @PostMapping()
    public ServerResponseDataDto create(@RequestBody @Valid EquipmentDto dto) {

        EquipmentDto response = this.service.create(dto);

        return ServerResponseDataDto.builder()
                .data(response)
                .status(HttpStatus.OK.value())
                .message("Registro creado con exito")
                .build();

    }
    @GetMapping
    public ServerResponseDataDto findAll() {

        List<EquipmentDto> dtos = this.service.findAll();

        return ServerResponseDataDto.builder()
                .data(dtos)
                .status(HttpStatus.OK.value())
                .message("Registro encontrados")
                .build();
    }

    @GetMapping("/{id}")
    public ServerResponseDataDto findById(@PathVariable("id") Long id) {

        EquipmentDto dto = this.service.getById(id);

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
            @RequestBody @Valid EquipmentDto newData
    ) {

        EquipmentDto dto = this.service.updateById(id, newData);

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro actualizado")
                .build();
    }

}
