package com.quickrent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickrent.dao.CategoryDao;
import com.quickrent.dao.ProductDao;
import com.quickrent.dto.ProductResponseDTO;
import com.quickrent.pojo.Product;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	CategoryDao categoryDao;
	
	@Autowired
	ProductDao productDao;
	
	@Override
	public ProductResponseDTO getProductsByCategoryId(Integer id) {
		// TODO Auto-generated method stub
		List<Product> products = productDao.findProductByCategoryId(id);
		return new ProductResponseDTO(products);
	}

}
