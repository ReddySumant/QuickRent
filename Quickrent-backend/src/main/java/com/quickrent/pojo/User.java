package com.quickrent.pojo;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "users")
public class User extends BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer usersid;

    @Column(name="first_name",length = 100, nullable = false)
    private String firstname;

    @Column(name="last_name",length = 100, nullable = false)
    private String lastname;

    @Column(name="email",length = 100, unique = true, nullable = false)
    private String email;

    @Column(name="password",length = 255, nullable = false)
    private String password;

    @Column(name="phone_no",length = 15)
    private String phoneNo;

    @Column(name="is_verified",nullable = false)
    private Boolean isVerified;

    @Column(name="aadhar_card_no",length = 20)
    private String aadharCardNo;

    @Column(name="aadhar_card_file",length = 255)
    private String aadharCardFile;

    @Column(name="pan_card_no",length = 20)
    private String panCardNo;

    @Column(name="pan_card_file",length = 255)
    private String panCardFile;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Address address;
}
