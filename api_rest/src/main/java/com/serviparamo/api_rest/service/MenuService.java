package com.serviparamo.api_rest.service;

import com.serviparamo.api_rest.dto.MenuDto;
import com.serviparamo.api_rest.entity.MenuEntity;
import com.serviparamo.api_rest.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuService {
    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<MenuDto> getAllMenus() {
        List<MenuEntity> menus = menuRepository.findAll();

        return menus.stream()
                .map(menu -> new MenuDto(
                        menu.getId(),
                        menu.getCategory(),
                        menu.getItem(),
                        menu.getIcon(),
                        menu.getLink()
                ))
                .collect(Collectors.toList());
    }

}
