package com.quickrent.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO extends BaseDTO {
    private Integer productId;
    private String title;
    private String brandName;
    private String description;
    private Double price;
    private Double advancePayment;
    private String sellerName; 
}
