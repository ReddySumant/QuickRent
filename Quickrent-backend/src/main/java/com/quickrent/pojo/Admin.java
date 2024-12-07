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

@Entity // Marks this class as a JPA entity
@Table(name = "admin") // Specifies the table name in the database
@Getter
@Setter
@ToString(callSuper = true) // Includes fields from BaseEntity in the toString() method
public class Admin extends BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="emp_id")
	private Integer empid;

    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email; // Admin email address (unique)

    @Column(name = "password", nullable = false, length = 255)
    private String password; // Admin password

    // Default Constructor
    public Admin() {
    }

    // Parameterized Constructor
    public Admin(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
