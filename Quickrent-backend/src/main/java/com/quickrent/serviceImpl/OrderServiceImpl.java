package com.quickrent.serviceImpl;

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
import com.quickrent.service.OrderService;

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
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Order order = modelMapper.map(orderRequestDto, Order.class);
		if (Objects.nonNull(orderRequestDto.getProductId())) {
			order.setProduct(getProductById(orderRequestDto.getProductId()));
		}
		if (Objects.nonNull(orderRequestDto.getUserId())) {
			order.setUser(getUserByUsdrId(orderRequestDto.getUserId()));
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
