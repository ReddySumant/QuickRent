package com.quickrent.controller;

import com.quickrent.pojo.Product;
import com.quickrent.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    // API to get products by category ID
    @GetMapping("/{categoryId}/products")
    public List<Product> getProductsByCategoryId(@PathVariable Integer categoryId) {
    	System.out.println("int getProductByCategoryId" + categoryId);
        return categoryService.getProductsByCategoryId(categoryId);
    }
}
