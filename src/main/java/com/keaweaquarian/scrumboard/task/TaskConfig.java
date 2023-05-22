/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
package com.keaweaquarian.scrumboard.task;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
@Configuration
public class TaskConfig {



//Default dummy data for demo account.
    @Bean
    CommandLineRunner commandLineRunner(
            TaskRepository repository){
        return args -> {
            Task task1 = new Task(
                    "Button", "User needs to open form", false, "high", "#FCFE7C", "inProgress",false
            );


            Task task2 = new Task(
                    "Home Screen Logo", "User needs company logo to direct clients back to home page", false, "low", "#FCFE7C", "notCommited",false
            );
            Task task3 = new Task(
                    "Navigation Links", "User needs to navigate through pages", false, "medium", "#FCFE7C", "notCommited",false
            );
            Task task4 = new Task(
                    "Habbit add form", "Form to create a habbit", false, "medium", "#FCFE7C", "inProgress",false
            );


            Task task5 = new Task(
                    "Log in form", "Create a log in form that takes users to personal accounts", false, "high", "#FCFE7C", "completed",true
            );
            Task task6 = new Task(
                    "Daily habbit links component", "User needs to see each days habbit links", false, "medium", "#FCFE7C", "toDo",false
            );
            Task task7 = new Task(
                    "Habbits Component", "An interface to the individual habbit", false, "high", "#FCFE7C", "toDo",false
            );


            Task task8 = new Task(
                    "Delete Button", "A way to delete habbits", false, "high", "#FCFE7C", "toDo",false
            );
            Task task9 = new Task(
                    "Graph Based Success Chart", "Offer the user an overveiw of their accomplishments", false, "low", "#FCFE7C", "notCommited",false
            );
            Task task10 = new Task(
                    "OnClick method to mark a habbit completed", "System to mark each habbit completed", false, "medium", "#FCFE7C", "toDo",false
            );
            Task task11 = new Task(
                    "Alarm", "Alert that user has not marked off habbit on time", false, "low", "#FCFE7C", "notCommited",false
            );
            Task task12 = new Task(
                    "Edit Feature", "Means for users to edit set habits", false, "high", "#FCFE7C", "inProgress",false
            );


            Task task13 = new Task(
                    "Daily Habbits Component", "User can see habbits that need to be done for each day", false, "medium", "#FCFE7C", "completed",true
            );
            Task task14 = new Task(
                    "Weekly habbit links component", "User needs to see each weeks habbit links", false, "low", "#FCFE7C", "completed",false
            );
            Task task15 = new Task(
                    "Monthly habbit links component", "User needs to see each months habbit links", false, "low", "#FCFE7C", "inProgress",false
            );


            Task task16 = new Task(
                    "Schedule Feature", "Mark a habbit for a specific date", false, "low", "#FCFE7C", "notCommited",false
            );
            Task task17 = new Task(
                    "About Link", "Describe the features of the app", false, "low", "#FCFE7C", "notCommited",false
            );
            repository.saveAll(
                    List.of(task1, task2, task3, task4, task5, task6,task7, task8, task9,task10, task11, task12, task13, task14, task15, task16, task17 )
            );
        };
    }
}
