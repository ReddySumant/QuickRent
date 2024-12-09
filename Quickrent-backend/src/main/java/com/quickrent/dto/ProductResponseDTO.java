package com.quickrent.dto;

import java.util.List;

import com.quickrent.pojo.Product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ProductResponseDTO {
	private List<Product> products;
}
