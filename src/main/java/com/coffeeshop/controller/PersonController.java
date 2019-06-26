package com.coffeeshop.controller;

import com.coffeeshop.model.entity.Person;
import com.coffeeshop.model.web.PersonDto;
import com.coffeeshop.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/persons")
    public List<Person> getAll(){
        return personRepository.findAll();
    }

    @PostMapping("/persons")
    public Person create(@RequestBody PersonDto personDto) {
        return personRepository.save(Person.builder()
                                .firstName(personDto.getFirstName())
                                .lastName(personDto.getLastName())
                                .age(personDto.getAge()).build());
    }

    @GetMapping("/persons/{id}")
    public Person getPerson(@PathVariable(name = "id") Long id) {
        System.out.println(personRepository.findById(id).orElse(null));
        return personRepository.findById(id).orElse(null);
    }


}
