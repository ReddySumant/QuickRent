package com.quickrent.service;

import com.quickrent.dto.OrderRequestDto;
import com.quickrent.dto.OrderResponseDto;

public interface OrderService {

	OrderResponseDto saveOrder(OrderRequestDto orderRequestDto);

}
