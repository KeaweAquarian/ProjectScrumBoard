package com.keaweaquarian.scrumboard.task;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

import static org.assertj.core.api.InstanceOfAssertFactories.OPTIONAL;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)
class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    private TaskService underTest;

    @BeforeEach
    void setUp(){

        underTest = new TaskService(taskRepository);
    }

    @Test
    void canGetTaskList() {
        //when
        underTest.getTaskList();
        //then
        verify(taskRepository).findAll();
    }

    @Test
    @Disabled
    void getTaskById() {

    }

    @Test
    void addNewTask() {
        //given
        Task task1 = new Task(
                "Button", "User needs to open form", false, "high", "#FCFE7C", "inProgress",false
        );
        //when
        underTest.addNewTask(task1);
        //then

        ArgumentCaptor<Task> taskArgumentCaptor = ArgumentCaptor.forClass(Task.class);

        verify(taskRepository).save(taskArgumentCaptor.capture());

        Task capturedTask = taskArgumentCaptor.getValue();

        assertThat(capturedTask).isEqualTo(task1);
    }

    @Test
    void cannotAddUsedTaskId() {
        //given
        Task task1 = new Task(
                "Button", "User needs to open form", false, "high", "#FCFE7C", "inProgress",false
        );
        //when

       underTest.addNewTask(task1);
       List<Task> task = taskRepository.findAll();
        boolean exists = taskRepository.findByFeature("Button").isPresent();
        //then
        assertThatThrownBy(() ->underTest.addNewTask(task1))
                .hasMessageContaining("Task already created");

    }

    @Test
    @Disabled
    void deleteTask() {
    }

    @Test
    @Disabled
    void updateTask() {
    }
}