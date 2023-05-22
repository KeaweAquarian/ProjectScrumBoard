/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */

package com.keaweaquarian.scrumboard.task;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@NoArgsConstructor
@Entity
@Data
@Table(name="task")
public class Task {
//Auto generate id number
    @Id
    @SequenceGenerator(
            name = "task_sequence",
            sequenceName = "task_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "task_sequence"
    )
    private long id;
    private String feature;
    private String userStory;
    private boolean reminder;
    private String priority;
    private String color;
    private String progress;
    private boolean tested;

    public Task(String feature, String userStory, boolean reminder, String priority, String color, String progress, boolean tested) {
        this.feature = feature;
        this.userStory = userStory;
        this.reminder = reminder;
        this.priority = priority;
        this.color = color;
        this.progress = progress;
        this.tested = tested;
    }
}
