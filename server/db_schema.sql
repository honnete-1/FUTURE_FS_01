CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  tech_stack TEXT,
  link VARCHAR(255),
  image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data (Corrected)
INSERT INTO projects (title, description, tech_stack, link, image_url) VALUES 
('Submission Reminder App', 'A reminder app developed with Shell Scripting.', '["Shell Scripting", "Linux Commands", "Automation"]', 'https://github.com/honnete-1/submission_reminder_app_honnete-1', '/assets/project1.png'),
('Personal Expense Tracker', 'Track your daily expenses easily via CLI.', '["Python", "CLI", "Data Management"]', 'https://github.com/honnete-1/Lab3-Personal-Expense-Tracker_honnete-1', '/assets/project2.png'),
('Mini Shop', 'Upcoming full stack development project.', '["In Development"]', 'https://github.com/honnete-1/FUTURE_FS_02', '/assets/project3.png'),
('Rebranded Website', 'Upcoming software solution.', '["In Development"]', 'https://github.com/honnete-1/FUTURE_FS_03', '/assets/project4.png');
