package com.quickrent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor // Generates a no-argument constructor
@AllArgsConstructor // Generates an all-argument constructor
public class ProductDTO {

    private Integer productId; // Maps to product_id in the database
    private String title; // Maps to title in the database
    private String brandName; // Maps to brand_name in the database
    private String modelName; // Maps to model_name in the database
    private String description; // Maps to description in the database
    private String specifications; // Maps to specifications in the database
    private Double price; // Maps to price in the database
    private Double advancePayment; // Maps to advance_payment in the database
    private Boolean isActive; // Maps to is_active in the database
    private Boolean isApproved; // Maps to is_approved in the database
    private Integer categoryId; // Represents the foreign key to the category
    private Integer userId; // Represents the foreign key to the user
}
