package com.quickrent.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.quickrent.pojo.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {
	
	@Query("select p from products p where p.category = :categoryId")
	List<Product> findProductByCategoryId(@Param("categoryId") Integer categoryId);
}
