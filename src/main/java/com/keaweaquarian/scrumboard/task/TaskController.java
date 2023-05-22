/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
package com.keaweaquarian.scrumboard.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

//Endpoint to access tasks from database
@CrossOrigin
@RestController
@RequestMapping("api/tasks")
public class TaskController {

    private final TaskService taskService;
@Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> taskList(){

        return taskService.getTaskList();
    }

    //Endpoint for a individual tasks
    @GetMapping(path ="{taskId}")
    public Task task(@PathVariable("taskId") Long taskId){
        return taskService.getTaskById(taskId);
    }

    //Endpoint to add a new task
    @PostMapping
    public void registerNewTask(@RequestBody Task task){
        taskService.addNewTask(task);
    }

    //Endpoint to delete a task
    @DeleteMapping(path = "{taskId}")
    public void deleteTask(@PathVariable("taskId") Long taskId){
        taskService.deleteTask(taskId);
    }

    //Endpoint to update a task
    @PutMapping(path = "{taskId}")
    public void updateTask(
            @PathVariable("taskId") Long taskId, @RequestBody Task task
//            @RequestParam(required = false) String feature,
//            @RequestParam(required = false) String userStory,
//            @RequestParam(required = false) String priority,
//            @RequestParam(required = false) String color,
//            @RequestParam(required = false) String progress,
//            @RequestParam(required = false) boolean tested
    ){
        taskService.updateTask(taskId, task);
    }
}
