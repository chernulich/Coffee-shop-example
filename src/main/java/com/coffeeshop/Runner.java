package com.coffeeshop;

import com.coffeeshop.model.entity.Example;
import com.coffeeshop.model.entity.Person;
import com.coffeeshop.repository.ExampleRepository;
import com.coffeeshop.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class Runner implements CommandLineRunner {

    @Autowired
    private ExampleRepository exampleRepository;

    @Autowired
    private PersonRepository personRepository;


    @Override
    public void run(String... args) throws Exception {
        exampleRepository.saveAll(
                Stream.of(Example.builder()
                                .name("Sarah")
                                .build(),
                        Example.builder()
                                .name("David")
                                .build()
                )
                        .collect(Collectors.toList()));
        personRepository.save(Person.builder()
                                    .firstName("Petya")
                                    .lastName("Petrov")
                                    .age(21).build());
    }
}
