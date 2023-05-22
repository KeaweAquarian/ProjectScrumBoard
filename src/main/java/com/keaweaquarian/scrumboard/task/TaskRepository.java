/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
package com.keaweaquarian.scrumboard.task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
