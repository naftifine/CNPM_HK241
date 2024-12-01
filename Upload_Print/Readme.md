I insert new data for test in mysql:
INSERT INTO student (student_id, name, major, bknetid, password) 
VALUES ('2210023', 'An1', 'CE1', 'an2210023', '1');
('2210022', 'An', 'CE', 'an2210022', '1');
INSERT INTO printer (printer_id, brand_name, printer_model, description, status, campus_name, building_name, room_number)
VALUES
    ('H6P5555', 'ABCD', '1', 'first', 'available', 'Cơ sở 1', 'H1', '116'),
    ('H6P5554', 'ABCE', '1', 'first', 'unavailable', 'Cơ sở 2', 'H6', '112');

When uploading, the documents will save in dir uploads in BackEnd
You should run the server.js in dir Upload_Print.
The server receive input is student_id, printer_id, file, page_size and number_of_pages.


