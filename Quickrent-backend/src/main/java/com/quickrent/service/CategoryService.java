package com.quickrent.service;

import com.quickrent.dto.ProductResponseDTO;

public interface CategoryService {

	ProductResponseDTO getProductsByCategoryId(Integer id);

}
