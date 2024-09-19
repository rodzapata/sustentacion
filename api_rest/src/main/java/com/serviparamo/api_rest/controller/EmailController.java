package com.serviparamo.api_rest.controller;

import com.serviparamo.api_rest.dto.EmailDto;
import com.serviparamo.api_rest.service.EmailService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailDto emailRequest) {
        emailService.sendSimpleEmail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getText());
        return "Correo enviado con éxito a " + emailRequest.getTo();
    }
}
