package com.quickrent.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickrent.pojo.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {
	
}
