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

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
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
    @Disabled
    void deleteTask() {
    }

    @Test
    @Disabled
    void updateTask() {
    }
}