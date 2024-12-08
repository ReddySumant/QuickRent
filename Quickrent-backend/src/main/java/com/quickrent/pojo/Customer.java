package com.quickrent.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Table(name = "customer") // Maps this entity to the "customer" table
@Getter
@Setter
@ToString(callSuper = true) // Includes fields from BaseEntity in the toString() method
public class Customer extends BaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customer_id")
	private Integer customerid;
    
    // One-to-one relationship with the User entity
   // @OneToOne
   // @JoinColumn(name = "user_id", nullable = false, unique = true) // Foreign key for User
   // private User user;

    
}

