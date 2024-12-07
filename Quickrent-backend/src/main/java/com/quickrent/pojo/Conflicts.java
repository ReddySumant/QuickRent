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

@Entity
@Table(name = "conflicts")
@Getter
@Setter
@ToString(callSuper = true)
public class Conflicts extends BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="conflict_id")
	private Integer conflictid;		//primary key
	
//    @Column(name = "order_id", nullable = false)
//    private Integer orderId;  //foreign key

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "is_resolved")
    private Boolean isResolved;

//    @Column(name = "user_id", nullable = false)
//    private Integer userId; //foreign key

    // Default constructor
    public Conflicts() {}

    // Parameterized constructor
    public Conflicts(Integer orderId, String title, String description, Boolean isResolved, Integer userId) {
        //this.orderId = orderId;
        this.title = title;
        this.description = description;
        this.isResolved = isResolved;
       // this.userId = userId;
    }
}
