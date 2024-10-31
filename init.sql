CREATE DATABASE IF NOT EXISTS aspectchallenge;
USE aspectchallenge;

CREATE TABLE exams (
    exam_id INT AUTO_INCREMENT PRIMARY KEY,
    exam_name VARCHAR(255) NOT NULL
);

CREATE TABLE available_times (
    time_id INT AUTO_INCREMENT PRIMARY KEY,
    exam_id INT,
    time TIME NOT NULL,
    FOREIGN KEY (exam_id) REFERENCES exams(exam_id)
);

CREATE TABLE appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    time_id INT,
    user_id INT,
    appointment_date DATE,
    comment VARCHAR(255),
    exam_id INT,
    FOREIGN KEY (time_id) REFERENCES available_times(time_id),
    FOREIGN KEY (exam_id) REFERENCES exams(exam_id) ON DELETE CASCADE
);


INSERT INTO exams (exam_name) VALUES 
('Blood Test'),
('X-Ray'),
('MRI'),
('Ultrasound'),
('CT Scan');


INSERT INTO available_times (exam_id, time) VALUES 
(1, '10:00:00'), 
(1, '14:00:00'),  
(2, '09:00:00'),  
(2, '13:00:00'),  
(3, '11:00:00'),  
(3, '15:00:00'),  
(4, '12:00:00'),  
(5, '16:00:00');

INSERT INTO appointments (time_id, user_id, appointment_date, exam_id, comment) VALUES 
(1, 1, '2024-11-10', 1, null),
(2, 1, '2024-11-10', 1, null),
(3, 1, '2024-11-30', 2, null),
(4, 1, '2024-12-01', 3, 'patient is diabetic'); 