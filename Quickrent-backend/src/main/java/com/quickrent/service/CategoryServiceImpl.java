package com.quickrent.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickrent.dao.CategoryDao;
import com.quickrent.dto.ProductDTO;
import com.quickrent.dto.ProductResponseFromCategoryDTO;
import com.quickrent.pojo.Category;
import com.quickrent.pojo.Product;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	CategoryDao categoryDao;
	
	@Autowired
	ModelMapper mapper;
	
	@Override
	public ProductResponseFromCategoryDTO getProductsByCategoryId(Integer categoryId) {
		Category category = categoryDao.findById(categoryId).orElseThrow(() -> new RuntimeException("Invalid Category Id"));
		List<Product> products = category.getProducts(); 
		List<ProductDTO> reponseList = new ArrayList<>();
		for(Product p: products) {
			ProductDTO proddto =  mapper.map(p, ProductDTO.class);
			reponseList.add(proddto);
		}
		return new ProductResponseFromCategoryDTO(reponseList);
	}

}
