DROP TRIGGER IF EXISTS update_remaining_pages_after_login;
DELIMITER $$

CREATE TRIGGER update_remaining_pages_after_login
BEFORE UPDATE ON student
FOR EACH ROW
BEGIN
    DECLARE default_pages INT;
    DECLARE old_semester INT;
    DECLARE new_semester INT;
    DECLARE year_diff INT;
    DECLARE additional_pages INT;

    -- Fetch the default pages value from the system config table
    SELECT value INTO default_pages FROM system_config WHERE name = 'default_pages';

    -- Ensure the default_pages value is not NULL
    IF default_pages IS NULL THEN
        SET default_pages = 0;
    END IF;

    -- Calculate the semester for the last login stored in the login log
    SET old_semester = CASE
        WHEN MONTH(NEW.last_login) BETWEEN 9 AND 12 THEN 3
        WHEN MONTH(NEW.last_login) BETWEEN 1 AND 4 THEN 1
        WHEN MONTH(NEW.last_login) BETWEEN 5 AND 8 THEN 2
        ELSE NULL
    END;

    -- Calculate the semester for the new login (current time)
    SET new_semester = CASE
        WHEN MONTH(NEW.last_login) BETWEEN 9 AND 12 THEN 3
        WHEN MONTH(NEW.last_login) BETWEEN 1 AND 4 THEN 1
        WHEN MONTH(NEW.last_login) BETWEEN 5 AND 8 THEN 2
        ELSE NULL
    END;

    -- Calculate the year difference between the new login and the old login
    SET year_diff = YEAR(NEW.last_login) - YEAR(OLD.last_login);

    -- Calculate additional pages based on the difference
    SET additional_pages = (new_semester + (year_diff * 3) - old_semester) * default_pages;

    -- Ensure additional_pages is non-negative
    IF additional_pages > 0 THEN
        -- Update the remaining pages for the student
        SET NEW.remaining_pages = NEW.remaining_pages + additional_pages;
    END IF;

    -- Optional: Log trigger execution
    INSERT INTO trigger_log (message)
    VALUES (CONCAT('Student: ', NEW.student_id, ', Additional Pages: ', additional_pages,', Config: ',year_diff,' ',old_semester,' ',new_semester,' ',default_pages));
END$$

DELIMITER ;