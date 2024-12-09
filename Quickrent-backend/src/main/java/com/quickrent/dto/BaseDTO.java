package com.quickrent.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseDTO {
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
}
