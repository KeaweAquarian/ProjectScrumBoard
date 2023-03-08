package com.keaweaquarian.scrumboard.Tasks;

import com.keaweaquarian.scrumboard.task.Task;
import org.apache.catalina.LifecycleState;

import java.util.List;

public class Tasks {
    private List<Task> tasks;

    public Tasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTaskList(List<Task> tasks) {
        this.tasks = tasks;
    }
}
