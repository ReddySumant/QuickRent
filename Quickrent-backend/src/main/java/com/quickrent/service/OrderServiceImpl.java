package com.quickrent.service;

import org.hibernate.HibernateException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickrent.dao.OrderDao;
import com.quickrent.dto.ResponseOrderDTO;
import com.quickrent.pojo.Order;
import com.quickrent.pojo.Product;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public ResponseOrderDTO getOrderData(int orderId) {
		// TODO Auto-generated method stub
		Order order = orderDao.findById(orderId).orElseThrow(()-> new HibernateException("hi"));
		Product product = order.getProduct();
		ResponseOrderDTO orderdto = mapper.map(order, ResponseOrderDTO.class);
		orderdto.setProductTitle(product.getTitle());
		orderdto.setProductBrand(product.getBrandName());
		orderdto.setProductSellerName(product.getUser().getFirstname() + " " + product.getUser().getLastname());
		orderdto.setCustomerName(order.getUser().getFirstname() + " "+ order.getUser().getLastname());
		return orderdto;
	}

}
