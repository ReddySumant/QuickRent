package com.quickrent.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickrent.pojo.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {
}