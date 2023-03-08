package com.keaweaquarian.scrumboard.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TaskService {

    public final TaskRepository taskRepository;
@Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<com.keaweaquarian.scrumboard.task.Task> getTaskList(){
        return  taskRepository.findAll();
    }
    public Task getTaskById(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new IllegalStateException(
                        "This task does not exist"
                ));
        return task;
    }


    public void addNewTask(Task task) {
        Optional<Task> taskOptional = taskRepository
                .findById(task.getId());
        if(taskOptional.isPresent()){
            throw new IllegalStateException("Id already created");
        }

    taskRepository.save(task);
    }

    public void deleteTask(Long taskId) {
        boolean exists = taskRepository.existsById(taskId);
        if (!exists){
            throw  new IllegalStateException("Task with id " + taskId + " does not exits.");
        }
    taskRepository.deleteById(taskId);
    }

    @Transactional
    public void updateTask(Long taskId, Task task) {
        Task task2 = taskRepository.findById(taskId)
                .orElseThrow(() -> new IllegalStateException(
                        "This task does not exist"
                ));
        if (task.getFeature() != null && task.getFeature().length() >0 && !Objects.equals(task2.getFeature(), task.getFeature())){
            task2.setFeature(task.getFeature());
        }
        if (task.getUserStory() != null && task.getUserStory().length() > 0 &&
                !Objects.equals(task2.getUserStory(), task.getUserStory())){
            task2.setUserStory(task.getUserStory());
        }

        if (task.getPriority() != null && task.getPriority().length() > 0 &&
                !Objects.equals(task2.getPriority(), task.getPriority())){
            task2.setPriority(task.getPriority());
        }

        if (task.getColor() != null && task.getColor().length() > 0 &&
                !Objects.equals(task2.getColor(), task.getColor())){
            task2.setColor(task.getColor());
        }

        if (task.getProgress() != null && task.getProgress().length() > 0 &&
                !Objects.equals(task2.getProgress(), task.getProgress())){
            task2.setProgress(task.getProgress());
        }

        if (task.isTested() != task2.isTested()){
            task2.setTested(task.isTested());
        }
    }


}
