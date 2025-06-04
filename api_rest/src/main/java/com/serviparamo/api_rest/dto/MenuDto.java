package com.serviparamo.api_rest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class MenuDto {
    private Long id;
    private String category;
    private String item;
    private String icon;
    private String link;

    public MenuDto(){

    }
}
