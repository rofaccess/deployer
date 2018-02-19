#!/bin/bash
#!/bin/sh

# Go to current script directory
cd "$(dirname "$0")"

# Create backup
#ssh root@192.168.0.130 "PGPASSWORD=$SANATORIO_APP_DATABASE_PASSWORD pg_dump -U ih_migrate -h localhost -d sanatorio_app_production > db_backup.sql"

# Get backup file
#sftp root@192.168.0.130 "get db_backup.sql"

# Delete backup file
#ssh root@192.168.0.130 "rm db_backup.sql"

# Test line
#pg_dump -U ih_migrate seed_trunk > db_backup.sql
