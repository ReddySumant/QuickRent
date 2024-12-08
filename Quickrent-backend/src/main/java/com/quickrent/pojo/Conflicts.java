package com.quickrent.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "conflicts")
@Data
@ToString(callSuper = true)
public class Conflicts extends BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="conflict_id")
	private Integer conflictid;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "is_resolved")
    private Boolean isResolved;

    @ManyToOne
	@JoinTable("user_id")
	private User user;
    
    @ManyToOne
	@JoinTable("order_id")
	private Order order;
    
    // Default constructor
    public Conflicts() {}

   
}
