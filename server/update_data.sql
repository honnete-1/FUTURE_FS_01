USE portfolio_db;

-- 1. Fix Submission Reminder App (Shell Scripting/Linux)
UPDATE projects 
SET tech_stack = '["Shell Scripting", "Linux Commands", "Automation"]' 
WHERE title LIKE '%Submission Reminder%';

-- 2. Fix Personal Expense Tracker (Python/CLI)
UPDATE projects 
SET tech_stack = '["Python", "CLI", "Data Management"]' 
WHERE title LIKE '%Expense Tracker%';

-- 3. Verify Changes
SELECT * FROM projects;
