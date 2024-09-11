package com.serviparamo.api_rest.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "service_order_detail")
public class ServiceOrderDetailEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "service_order_id", nullable = false)
    private ServiceOrderEntity serviceOrder;

    @ManyToOne
    @JoinColumn(name = "activity_id", nullable = false)
    private ActivityEntity activity;

    private String description;
    // Getters y Setters
}
