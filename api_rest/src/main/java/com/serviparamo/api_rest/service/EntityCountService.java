package com.serviparamo.api_rest.service;

import com.serviparamo.api_rest.dto.EntityCountDto;
import com.serviparamo.api_rest.repository.ActivityRepository;
import com.serviparamo.api_rest.repository.CustomerRepository;
import com.serviparamo.api_rest.repository.EquipmentRepository;
import org.springframework.stereotype.Service;

@Service
public class EntityCountService {

    private final CustomerRepository customerRepository;
    private final ActivityRepository activityRepository;
    private final EquipmentRepository equipmentRepository;

    public EntityCountService(CustomerRepository customerRepository, ActivityRepository activityRepository, EquipmentRepository equipmentRepository) {
        this.customerRepository = customerRepository;
        this.activityRepository = activityRepository;
        this.equipmentRepository = equipmentRepository;
    }

    public EntityCountDto getEntityCounts() {
        long customerCount = customerRepository.count();
        long activityCount = activityRepository.count();
        long equipmentCount = equipmentRepository.count();

        return new EntityCountDto(customerCount, activityCount, equipmentCount);
    }
}
