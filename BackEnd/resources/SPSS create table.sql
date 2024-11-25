USE HCMUT_SPSS;

CREATE TABLE student (
	student_id VARCHAR(20) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	remaining_pages INT DEFAULT 0,
	bknetid VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
);

CREATE TABLE printer (
    printer_id VARCHAR(20) PRIMARY KEY,
    brand_name VARCHAR(50) NOT NULL,
    printer_model VARCHAR(50) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'available',
    campus_name VARCHAR(100) NOT NULL,
    building_name VARCHAR(100) NOT NULL,
    room_number VARCHAR(20) NOT NULL
);
CREATE TABLE print_history (
    section_id INT IDENTITY(1,1) PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL,
    printer_id VARCHAR(20) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    number_of_pages INT NOT NULL,
    page_size VARCHAR(20) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE,
    FOREIGN KEY (printer_id) REFERENCES printer(printer_id) ON DELETE CASCADE
);
CREATE TABLE Purchase (
    purchase_id VARCHAR(20) PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL,
    number_of_pages INT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE
);
