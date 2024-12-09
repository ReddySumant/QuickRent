package com.quickrent.service;

import com.quickrent.dto.ResponseOrderDTO;

public interface OrderService {

	ResponseOrderDTO getOrderData(int orderId);

}
