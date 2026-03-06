# Database Update Instructions

The database has been updated to support papers appearing in multiple categories without duplication.

## What Changed:

1. **Schema Updated**: The `fields` column now supports comma-separated values (e.g., "sustainable-economy,climate-change")

2. **Queries Updated**: All three pages now use `LIKE '%field%'` to match papers that belong to multiple categories

3. **Duplicate Removed**: "Vulnerability to Natural Disaster..." paper now has one record with fields="sustainable-economy,climate-change"

## To Apply Changes to Running Database:

Run these commands in your terminal:

```bash
cd /media/armon/minhquan/ireeds/demo-docker

# Apply the database update
cat update_fields.sql | docker exec -i demo-docker-db-1 psql -U demo_user -d demo
```

Or manually:

```bash
docker exec -it demo-docker-db-1 psql -U demo_user -d demo -c "DELETE FROM research_paper WHERE id = 15;"
docker exec -it demo-docker-db-1 psql -U demo_user -d demo -c "UPDATE research_paper SET fields = 'sustainable-economy,climate-change' WHERE id = 5;"
```

## Result:

- Papers can now belong to multiple categories
- No duplicates in the database  
- Each relevant page will show all papers that match its category
- "Vulnerability to Natural Disaster" paper will appear on both sustainable-economy and climate-change pages
