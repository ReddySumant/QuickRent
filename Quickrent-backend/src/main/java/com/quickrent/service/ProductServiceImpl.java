package com.quickrent.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickrent.dao.ProductDao;
import com.quickrent.dto.ProductDTO;
import com.quickrent.mapper.ProductMapper;
import com.quickrent.pojo.Product;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;
    
    @Override
    public List<ProductDTO> getAllProducts() {
        return productDao.findAll()
                .stream()
                .map(ProductMapper::toProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public String addNewProduct(Product product) {
        productDao.save(product);
        return "Product added successfully!";
    }

    @Override
    public String deleteProduct(Integer productId) {
        if (!productDao.existsById(productId)) {
            throw new RuntimeException("Product not found!");
        }
        productDao.deleteById(productId);
        return "Product deleted successfully!";
    }

    @Override
    public ProductDTO getProductDetails(Integer productId) {
        Product product = productDao.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found!"));
        return ProductMapper.toProductDTO(product);
    }

    @Override
    public ProductDTO updateProductDetails(Integer productId, Product updatedProduct) {
        Product product = productDao.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found!"));

        // Update product fields
        product.setTitle(updatedProduct.getTitle());
        product.setBrandName(updatedProduct.getBrandName());
        product.setDescription(updatedProduct.getDescription());
        product.setPrice(updatedProduct.getPrice());
        product.setAdvancePayment(updatedProduct.getAdvancePayment());

        // Save the updated product
        productDao.save(product);

        return ProductMapper.toProductDTO(product);
    }
}