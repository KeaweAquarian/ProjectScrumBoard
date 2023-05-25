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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

import static org.assertj.core.api.InstanceOfAssertFactories.OPTIONAL;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)
class TaskServiceTest {

    @Mock private TaskRepository taskRepository;
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

       given(taskRepository.findByFeature(task1.getFeature()))
               .willReturn(Optional.of(task1));

        //then
        assertThatThrownBy(() -> underTest.addNewTask(task1))
                .hasMessageContaining("already created");
        verify(taskRepository, never()).save(any());
    }

    @Test
    void deleteTask() {
        //given
        Task task1 = new Task(
                "Button", "User needs to open form", false, "high", "#FCFE7C", "inProgress",false
        );
        underTest.addNewTask(task1);
        //when
        given(taskRepository.existsById(0L))
                .willReturn(true);
        underTest.deleteTask(0L);
        //then

        ArgumentCaptor<Long> taskArgumentCaptor = ArgumentCaptor.forClass(Long.TYPE);

        verify(taskRepository).deleteById(taskArgumentCaptor.capture());

        Long capturedLong = taskArgumentCaptor.getValue();

        assertThat(capturedLong).isEqualTo(0L);
    }
    @Test
    void deleteTaskDNE() {
        //given
        //when
        given(taskRepository.existsById(0L))
                .willReturn(false);
        //then
        assertThatThrownBy(() -> underTest.deleteTask(0L))
                .hasMessageContaining("Task with id " + 0 + " does not exits.");
        verify(taskRepository, never()).deleteById(any());
    }

    @Test
    void updateTask() {
        //given
        Task task1 = new Task(
                "Button", "User needs to open form", false, "high", "#FCFE7C", "inProgress",false
        );
        Task task2 = new Task(
                "Bike", "To ride", false, "high", "#FCFE7C", "inProgress",false
        );
        given(taskRepository.findById(0L))
                .willReturn(Optional.of(task1));
        //when
        underTest.addNewTask(task1);

        underTest.updateTask(0L, task2);
        //then

        ArgumentCaptor<Task> taskArgumentCaptor = ArgumentCaptor.forClass(Task.class);

        verify(taskRepository).save(taskArgumentCaptor.capture());

        Task capturedTask = taskArgumentCaptor.getValue();

        assertThat(capturedTask).isEqualTo(task2);
    }
}