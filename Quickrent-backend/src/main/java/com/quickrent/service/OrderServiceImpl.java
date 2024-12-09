package com.quickrent.service;

import java.lang.StackWalker.Option;
import java.util.Objects;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickrent.dao.ProductDao;
import com.quickrent.dao.UserDao;
import com.quickrent.dao.orderDao;
import com.quickrent.dto.OrderRequestDto;
import com.quickrent.dto.OrderResponseDto;
import com.quickrent.pojo.Order;
import com.quickrent.pojo.Product;
import com.quickrent.pojo.User;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private UserDao userDao;

	@Autowired
	private ProductDao productDao;

	@Autowired
	private orderDao orderDao;

	@Override
	public OrderResponseDto saveOrder(OrderRequestDto orderRequestDto) {
		Order order = modelMapper.map(orderRequestDto, Order.class);
		if (Objects.nonNull(orderRequestDto.getProductId())) {
			Product product = getProductById(orderRequestDto.getProductId());
			order.setProduct(product);
			product.getOrders().add(order);
			productDao.save(product);
		}
		if (Objects.nonNull(orderRequestDto.getUserId())) {
			User user = getUserByUsdrId(orderRequestDto.getUserId());
			order.setUser(user);
			user.getOrders().add(order);
			userDao.save(user);
		}
		order = orderDao.save(order);
		OrderResponseDto response = modelMapper.map(order, OrderResponseDto.class);
		return response;
	}

	private User getUserByUsdrId(Integer userId) {
		Optional<User> user = userDao.findById(userId);
		if (user.isPresent()) {
			return user.get();
		} else {
			return null;
		}
	}

	private Product getProductById(Integer productId) {
		Optional<Product> product = productDao.findById(productId);
		if (product.isPresent()) {
			return product.get();
		} else {
			return null;
		}
	}

}
