package com.serviparamo.api_rest.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendSimpleEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("servios355@gamail.com"); // El remitente (tu correo)
        message.setTo(to); // Destinatario
        message.setSubject(subject); // Asunto
        message.setText(text); // Contenido del correo

        mailSender.send(message);
    }
}
