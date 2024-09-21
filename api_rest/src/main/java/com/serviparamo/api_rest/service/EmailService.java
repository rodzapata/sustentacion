package com.serviparamo.api_rest.service;

import com.serviparamo.api_rest.dto.UserDto;
import com.serviparamo.api_rest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    @Autowired
    private UserService userService;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendSimpleEmail(String to, String subject, String text) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("servios355@gamail.com"); // El remitente (tu correo)
        message.setTo(to); // Destinatario
        message.setSubject(subject); // Asunto
        String token=generarCodigoRecuperacion();

        // Ejemplo de uso de actualizarPassword
        UserDto userDto = new UserDto();
        userDto.setEmail(to);
        userDto.setPassword(token);  // Genera una nueva contraseña

        boolean actualizado = userService.actualizarPassword(userDto);

        if (actualizado) {
            System.out.println("Contraseña actualizada correctamente.");
            String frase="La nueva contraseña es : "+token;
            message.setText(frase); // Contenido del correo
            mailSender.send(message);

        } else {
            System.out.println("No se pudo actualizar la contraseña. Usuario no encontrado.");
        }

        /*
        String frase="La nueva contraseña es : "+token;
        message.setText(frase); // Contenido del correo

        mailSender.send(message);

         */
    }

    public String generarCodigoRecuperacion() {
        Random random = new Random();
        int codigo = random.nextInt(900000) + 100000;
        return String.valueOf(codigo);
    }

}
