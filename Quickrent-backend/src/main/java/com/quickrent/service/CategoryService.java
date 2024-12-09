package com.quickrent.service;

import com.quickrent.dao.CategoryDao;
import com.quickrent.pojo.Category;
import com.quickrent.pojo.Product;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CategoryService {

    @Autowired
    private CategoryDao categoryDao;

    // Method to fetch products by category ID
    public List<Product> getProductsByCategoryId(Integer categoryId) {
        // Fetch category from the database
        Category category = categoryDao.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found with ID: " + categoryId));
        // Return the list of products
        return category.getProducts();
    }
}
