package com.quickrent.pojo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="orders")

public class Order extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id")
	private Integer orderId;
	
	@Column(columnDefinition = "DOUBLE DEFAULT 0")
	private Double discount;
	
	@Column(columnDefinition = "DOUBLE DEFAULT 0")
	private Double taxes;
	
	@Column(name="start_date", nullable = false)
	private LocalDate startDate;
	
	@Column(name="end_date", nullable = false)
	private LocalDate endDate;
	
	@Enumerated(EnumType.STRING)
	@Column(name="billing_cycle", length = 20, nullable = false)
	private BillingCycle billingCycle;

	@Column(name="is_cancelled", columnDefinition = "BOOLEAN DEFAULT 0")
	private Boolean isCancelled;
	
	//Foreign keys
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product product;
	//private Customer customer;
}
