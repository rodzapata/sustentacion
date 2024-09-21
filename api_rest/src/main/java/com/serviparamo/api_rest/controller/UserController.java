package com.serviparamo.api_rest.controller;

import com.serviparamo.api_rest.dto.LoginDto;
import com.serviparamo.api_rest.dto.PasswordResetRequestDto;
import com.serviparamo.api_rest.dto.ServerResponseDataDto;
import com.serviparamo.api_rest.dto.UserDto;
import com.serviparamo.api_rest.entity.UserEntity;
import com.serviparamo.api_rest.service.EmailService;
import com.serviparamo.api_rest.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private EmailService emailService;

    @PutMapping("/actualizar-password")
    public String actualizarPassword(@RequestBody UserDto userDto) {
        boolean actualizado = service.actualizarPassword(userDto);

        if (actualizado) {
            return "Contraseña actualizada correctamente.";
        } else {
            return "Usuario no encontrado.";
        }
    }
    /*
    @PostMapping("/reset")
    public ResponseEntity<String> resetPassword(@RequestBody PasswordResetRequestDto request) {
        try {
            // Buscar el usuario por correo electrónico
            UserEntity user = service.findByEmail(request.getEmail());
            if (user == null) {
                return new ResponseEntity<>("Usuario no encontrado", HttpStatus.NOT_FOUND);
            }

            // Generar nueva contraseña aleatoria
            String newPassword = service.generateRandomPassword();

            // Actualizar la contraseña del usuario
            service.updatePassword(user, newPassword);

            // Enviar el correo con la nueva contraseña
            emailService.sendPasswordResetEmail(user.getEmail(), newPassword);

            return new ResponseEntity<>("Correo enviado con la nueva contraseña", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al restablecer la contraseña", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

     */
    @PostMapping("/validar-credenciales")
    public ServerResponseDataDto validarCredenciales(@RequestBody UserDto userDto) {

        UserDto dto = this.service.validarCredenciales(userDto.getEmail(), userDto.getPassword());

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro encontrado")
                .build();
    }



    /*
    @PostMapping("/validar-credenciales")
    public boolean validarCredenciales(@RequestBody @Valid LoginDto dto) {
        return service.validarCredenciales(dto.getEmail(),dto.getPassword());
    }
*/
    @PostMapping()
    public ServerResponseDataDto create(@RequestBody @Valid UserDto dto) {

        UserDto response = this.service.create(dto);

        return ServerResponseDataDto.builder()
                .data(response)
                .status(HttpStatus.OK.value())
                .message("Registro creado con exito")
                .build();

    }
    @GetMapping
    public ServerResponseDataDto findAll() {

        List<UserDto> dtos = this.service.findAll();

        return ServerResponseDataDto.builder()
                .data(dtos)
                .status(HttpStatus.OK.value())
                .message("Registro encontrados")
                .build();
    }

    @GetMapping("/{id}")
    public ServerResponseDataDto findById(@PathVariable("id") Long id) {

        UserDto dto = this.service.getById(id);

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
            @RequestBody @Valid UserDto newData
    ) {

        UserDto dto = this.service.updateById(id, newData);

        return ServerResponseDataDto.builder()
                .data(dto)
                .status(HttpStatus.OK.value())
                .message("Registro actualizado")
                .build();
    }

}
