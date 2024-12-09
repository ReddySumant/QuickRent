package com.quickrent.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quickrent.dto.OrderDTO;
import com.quickrent.pojo.Order;
import com.quickrent.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.quickrent.dto.OrderRequestDto;
import com.quickrent.dto.OrderResponseDto;
import com.quickrent.service.OrderService;
import com.quickrent.dto.RequestOrderDTO;


@RestController
@RequestMapping("/api/order")
@CrossOrigin(value = { "http://localhost:3000/" })
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	public OrderController() {
		System.out.println("Inside Order Controller");
	}
	
	@PostMapping("/getorder")
	public ResponseEntity<?> getOrderData(@RequestBody RequestOrderDTO reqDTO){
		return ResponseEntity.ok(orderService.getOrderData(reqDTO.getId()));
	}

  // Get orders by user ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDTO>> getOrdersByUserId(@PathVariable Integer userId) {
        List<OrderDTO> orderDTOs = orderService.getOrdersByUserId(userId);
        return ResponseEntity.ok(orderDTOs);
    }

    @PostMapping
    public OrderResponseDto createOrder(@RequestBody OrderRequestDto orderRequestDto) {
      return orderService.saveOrder(orderRequestDto);
    }

    /*
     * Extra by Ashwini
    // Save a new order
    @PostMapping
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.saveOrder(order));
    }
    */
	
}

