package com.coffeeshop.model.web;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@NoArgsConstructor
@Data
public class PersonDto {

    private String firstName;

    private String lastName;

    @Positive
    @Max(120)
    @Min(0)
    private Integer age;
}
