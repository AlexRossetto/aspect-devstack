CREATE DATABASE IF NOT EXISTS aspectchallenge;
USE aspectchallenge;

CREATE TABLE IF NOT EXISTS exams (
    id_exam INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS appointments (
    id_appointment INT AUTO_INCREMENT PRIMARY KEY,
    specialty VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    comments VARCHAR(255) NULL
);


INSERT INTO exams (name, specialty)
VALUES 
    ('General Blood Test', 'Hematology'),
    ('MRI Scan', 'Radiology'),
    ('Cardiac Stress Test', 'Cardiology');