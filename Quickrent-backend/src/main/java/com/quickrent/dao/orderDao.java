package com.quickrent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quickrent.pojo.Order;

@Repository
public interface orderDao extends JpaRepository<Order, Integer> { }