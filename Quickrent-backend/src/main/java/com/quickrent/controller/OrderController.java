package com.quickrent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quickrent.dto.OrderRequestDto;
import com.quickrent.dto.OrderResponseDto;
import com.quickrent.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping
	public OrderResponseDto createOrder(@RequestBody OrderRequestDto orderRequestDto) {
		return orderService.saveOrder(orderRequestDto);
	}

}
