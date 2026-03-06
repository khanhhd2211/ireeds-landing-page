-- Update existing database to consolidate duplicate papers
-- and support comma-separated fields for multi-category papers

-- Delete duplicate entries
DELETE FROM research_paper WHERE id IN (15);

-- Update papers that belong to multiple categories
UPDATE research_paper 
SET fields = 'sustainable-economy,climate-change' 
WHERE id = 5;

-- Verify the changes
SELECT id, title, fields FROM research_paper WHERE id IN (5, 13, 14, 16, 17, 18, 19) ORDER BY id;
