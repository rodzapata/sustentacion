package com.serviparamo.api_rest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class EntityCountDto {
    private long customerCount;
    private long activityCount;
    private long equipmentCount;

    // Constructor, getters y setters

    /*
    public EntityCountDto(long customerCount, long activityCount, long equipmentCount) {
        this.customerCount = customerCount;
        this.activityCount = activityCount;
        this.equipmentCount = equipmentCount;
    }
    */

/*
    public long getCustomerCount() {
        return customerCount;
    }

    public void setCustomerCount(long customerCount) {
        this.customerCount = customerCount;
    }

    public long getActivityCount() {
        return activityCount;
    }

    public void setActivityCount(long activityCount) {
        this.activityCount = activityCount;
    }

    public long getEquipmentCount() {
        return equipmentCount;
    }

    public void setEquipmentCount(long equipmentCount) {
        this.equipmentCount = equipmentCount;
    }

 */
}
