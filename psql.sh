psql -h 127.0.0.1 -U postgres -d strapi -W < home/strapi.sql

pg_dump -c --if-exists --exclude-table=strapi_administrator -h 127.0.0.1 -U postgres -d strapi -W > strapi_new.sql
