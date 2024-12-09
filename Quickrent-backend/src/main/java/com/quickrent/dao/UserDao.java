package com.quickrent.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickrent.pojo.User;

public interface UserDao extends JpaRepository<User, Integer> {
}
