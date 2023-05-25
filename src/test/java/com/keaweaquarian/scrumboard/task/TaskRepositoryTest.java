package com.keaweaquarian.scrumboard.task;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class TaskRepositoryTest {

    @Autowired
    private TaskRepository taskRepository;

    @AfterEach
    void tearDown() {
        taskRepository.deleteAll();
    }

    @Test
    void findByFeature() {
        //given
        Task task1 = new Task(
                "Button", "User needs to open form", false, "high", "#FCFE7C", "inProgress",false
        );

        taskRepository.save(task1);

        //when
        boolean exists = taskRepository.findByFeature("Button").isPresent();
List<Task> list = taskRepository.findAll();
        //then
        assertThat(exists).isTrue();

    }
}