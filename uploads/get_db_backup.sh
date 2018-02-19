#!/bin/bash
#!/bin/sh

# Go to current script directory
cd "$(dirname "$0")"

# Create backup
ssh root@192.168.0.130 'PGPASSWORD=$SANATORIO_APP_DATABASE_PASSWORD pg_dump -U ih_migrate -h localhost -d sanatorio_app_production > db_backup.sql'

# Wait for finish copy
sleep 5

# Get backup file
echo "get db_backup.sql" | sftp root@192.168.0.130

# Delete backup file
ssh root@192.168.0.130 "rm db_backup.sql"

# Test line
# pg_dump -U ih_migrate seed_trunk > db_backup.sql