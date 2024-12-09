package com.quickrent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quickrent.dto.RequestOrderDTO;
import com.quickrent.service.OrderService;


@RestController
@RequestMapping("/order")
@CrossOrigin(value = { "http://localhost:3000/" })
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	public OrderController() {
		System.out.println("Inside Order Controller");
	}
	
	@PostMapping
	public ResponseEntity<?> getOrderData(@RequestBody RequestOrderDTO reqDTO){
		return ResponseEntity.ok(orderService.getOrderData(reqDTO.getId()));
	}
	
}