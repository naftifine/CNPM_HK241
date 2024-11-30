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

        IF old_last_login IS NULL THEN
            UPDATE student
            SET last_login = new_last_login
            WHERE student_id = NEW.student_id;
            RETURN;
        END IF;

        SELECT default_pages INTO default_pages FROM config;

        IF MONTH(old_last_login) BETWEEN 9 AND 12 THEN
            SET old_semester = 3;
        ELSEIF MONTH(old_last_login) BETWEEN 1 AND 4 THEN
            SET old_semester = 1;
        ELSEIF MONTH(old_last_login) BETWEEN 5 AND 8 THEN
            SET old_semester = 2;
        END IF;

        IF MONTH(new_last_login) BETWEEN 9 AND 12 THEN
            SET new_semester = 3;
        ELSEIF MONTH(new_last_login) BETWEEN 1 AND 4 THEN
            SET new_semester = 1;
        ELSEIF MONTH(new_last_login) BETWEEN 5 AND 8 THEN
            SET new_semester = 2;
        END IF;

        SET year_diff = YEAR(new_last_login) - YEAR(old_last_login);

        SET remaining_pages = (new_semester + year_diff * 3 - old_semester) * default_pages;

        IF remaining_pages < 0 THEN
            RETURN;
        END IF;

        UPDATE student
        SET remaining_pages = remaining_pages + remaining_pages,
            last_login = new_last_login
        WHERE student_id = NEW.student_id;
    END IF;
END$$

DELIMITER ;
