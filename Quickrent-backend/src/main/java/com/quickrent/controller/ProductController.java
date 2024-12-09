package com.quickrent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.quickrent.dto.ApiResponse;
import com.quickrent.dto.ProductDTO;
import com.quickrent.pojo.Product;
import com.quickrent.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	

    @Autowired
    private ProductService productService;

    public ProductController() {
        System.out.println("in ctor " + getClass());
    }

    // Get all products
    @GetMapping
    public ResponseEntity<?> getProducts() {
        System.out.println("in get all products");
        List<ProductDTO> products = productService.getAllProducts();
        if (products.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        return ResponseEntity.status(HttpStatus.OK).body(products);
    }

    // Add a new product
    @PostMapping
    public ResponseEntity<?> addNewProduct(@RequestBody Product product) {
        System.out.println("in add new product " + product);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse(productService.addNewProduct(product)));
    }

    // Delete a product by ID
    @DeleteMapping("/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer productId) {
        System.out.println("in delete product " + productId);
        try {
            return ResponseEntity.ok(productService.deleteProduct(productId));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage()));
        }
    }

    // Get a product by ID
    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductDetails(@PathVariable Integer productId) {
        System.out.println("in get product details " + productId);
        try {
            return ResponseEntity.ok(productService.getProductDetails(productId));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage()));
        }
    }
    
    // Update a product by ID
    @PutMapping("/{productId}")
    public ResponseEntity<?> updateProductDetails(@PathVariable Integer productId,
                                                  @RequestBody Product product) {
        System.out.println("in update product " + productId + " " + product);
        try {
            return ResponseEntity.ok(productService.updateProductDetails(productId, product));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage()));
        }
    }
}