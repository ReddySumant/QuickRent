package com.quickrent.dto;

import java.time.LocalDate;

import com.quickrent.pojo.BillingCycle;

import lombok.Data;

@Data
public class OrderRequestDto {

	private Double discount;
	private Double taxes;
	private LocalDate startDate;
	private LocalDate endDate;
	private BillingCycle billingCycle;
	private Boolean isCancelled;
	private String address;
	private String city;
	private String state;
	private String country;
	private String pincode;
	private Integer productId;
	private Integer userId;

}
