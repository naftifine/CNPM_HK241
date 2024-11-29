DELIMITER $$

CREATE TRIGGER update_remaining_pages
AFTER UPDATE ON student
FOR EACH ROW
BEGIN
    IF NEW.last_login IS NOT NULL THEN
        DECLARE old_last_login DATE;
        DECLARE new_last_login DATE;
        DECLARE default_pages INT;
        DECLARE remaining_pages INT;
        DECLARE year_diff INT;
        DECLARE old_semester INT;
        DECLARE new_semester INT;

        SET old_last_login = OLD.last_login;
        SET new_last_login = NEW.last_login;

        -- Check if old_last_login is NULL
        IF old_last_login IS NULL THEN
            UPDATE student
            SET last_login = new_last_login
            WHERE student_id = NEW.student_id;
            RETURN;
        END IF;
        -- End check NULL

        -- Fetch default pages from config
        SELECT default_pages INTO default_pages FROM config;

        -- Determine old_semester
        IF MONTH(old_last_login) BETWEEN 9 AND 12 THEN
            SET old_semester = 3;
        ELSEIF MONTH(old_last_login) BETWEEN 1 AND 4 THEN
            SET old_semester = 1;
        ELSEIF MONTH(old_last_login) BETWEEN 5 AND 8 THEN
            SET old_semester = 2;
        END IF;

        -- Determine new_semester
        IF MONTH(new_last_login) BETWEEN 9 AND 12 THEN
            SET new_semester = 3;
        ELSEIF MONTH(new_last_login) BETWEEN 1 AND 4 THEN
            SET new_semester = 1;
        ELSEIF MONTH(new_last_login) BETWEEN 5 AND 8 THEN
            SET new_semester = 2;
        END IF;

        -- Calculate year difference
        SET year_diff = YEAR(new_last_login) - YEAR(old_last_login);

        -- Calculate remaining pages to add
        SET remaining_pages = (new_semester + year_diff * 3 - old_semester) * default_pages;

        -- If remaining pages < 0, do nothing
        IF remaining_pages < 0 THEN
            RETURN;
        END IF;

        -- Update student record
        UPDATE student
        SET remaining_pages = remaining_pages + remaining_pages,
            last_login = new_last_login
        WHERE student_id = NEW.student_id;
    END IF;
END$$

DELIMITER ;
