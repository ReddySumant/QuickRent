
package com.quickrent.service;

import com.quickrent.dao.OrderDao;
import com.quickrent.dto.OrderDTO;
import com.quickrent.pojo.Order;
import com.quickrent.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    public List<OrderDTO> getOrdersByUserId(Integer userId) {
        List<Order> orders = orderDao.findOrdersByUserId(userId);
        // Convert Orders to OrderDTOs 
        return orders.stream().map(order -> {
            OrderDTO dto = new OrderDTO();
            dto.setOrderId(order.getOrderId());
            dto.setDiscount(order.getDiscount());
            dto.setTaxes(order.getTaxes());
            dto.setStartDate(order.getStartDate());
            dto.setEndDate(order.getEndDate());
            dto.setBillingCycle(order.getBillingCycle().toString());
            dto.setAddress(order.getAddress());
            dto.setCity(order.getCity());
            dto.setState(order.getState());
            dto.setCountry(order.getCountry());
            dto.setPincode(order.getPincode());
            dto.setProductName(order.getProduct().getTitle()); 
            dto.setUserName(order.getUser().getFirstname() + " " + order.getUser().getLastname()); 
            return dto;
        }).collect(Collectors.toList());
    }

    @Override
    public Order saveOrder(Order order) {
        return orderDao.save(order);
    }
}
