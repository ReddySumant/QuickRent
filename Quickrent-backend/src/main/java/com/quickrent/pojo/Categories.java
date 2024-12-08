package com.quickrent.pojo;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories") // Maps this class to the "categories" table in the database
public class Categories {

    // Primary key: category_id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremented primary key
    @Column(name = "category_id") // Maps to the "category_id" column
    private Integer categoryId;

    // category_name column
    @Column(name = "category_name", nullable = false, length = 100) // Maps to the "category_name" column
    private String categoryName;

    // description column
    @Column(name = "description", length = 255) // Maps to the "description" column
    private String description;

    // parent_category column
    @Column(name = "parent_category", length = 100) // Maps to the "parent_category" column
    private String parentCategory;
}
