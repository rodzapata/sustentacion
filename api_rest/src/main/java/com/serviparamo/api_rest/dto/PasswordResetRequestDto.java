package com.serviparamo.api_rest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class PasswordResetRequestDto {
    private String email;

    // Getters y Setters
    /*
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

     */
}
