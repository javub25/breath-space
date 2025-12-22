create table public.user_history (
  created_at timestamp with time zone not null default now(),
  activity text null,
  energy text null,
  minutes text null,
  "recommendationMessage" text null,
  user_id uuid not null default auth.uid (),
  id uuid not null default gen_random_uuid (),
  constraint user_history_pkey primary key (id),
  constraint fk_user foreign KEY (user_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;


INSERT INTO "public"."user_history"("created_at", "activity", "energy", "minutes", "recommendationMessage", "user_id", "id") VALUES ('2025-12-12 12:23:39.074956+00', 'Mental work', 'High', '2 minutes', 'Breathe 3 times fast', 'd5e18241-8a21-4a31-bd00-3601b2247591', '030a82c1-cbd4-4b83-82dd-46c428b2a5b1'), ('2025-12-12 15:21:49.675311+00', 'Mental work', 'High', '2 minutes', 'Breathe 3 times fast', 'd5e18241-8a21-4a31-bd00-3601b2247591', '29790c5b-93ea-491d-acfb-e351f8dafbfd'), ('2025-12-12 15:17:37.942965+00', 'Mental work', 'High', '2 minutes', 'Breathe 3 times fast', 'd5e18241-8a21-4a31-bd00-3601b2247591', '63c34919-f812-41c2-8d4d-180f7e219800'), ('2025-12-12 12:24:04.88413+00', 'Intense exercise', 'High', '2 minutes', 'Breathe slowly', 'd5e18241-8a21-4a31-bd00-3601b2247591', '67023836-5c21-48fc-b99d-bb21bea81de9'), ('2025-12-12 13:12:20.644902+00', 'Heavy Screen Use', 'High', '2 minutes', 'Look far away', 'd5e18241-8a21-4a31-bd00-3601b2247591', '754c0a18-ba75-4d05-bb99-0c4f267091bb'), ('2025-12-12 14:55:29.511179+00', 'Long Time Sitting', 'Low', '5 minutes', 'Stretch gently', 'd5e18241-8a21-4a31-bd00-3601b2247591', '82095884-f988-4c96-9689-8da8366d8226'), ('2025-12-12 15:28:02.956028+00', 'Long Time Sitting', 'High', '2 minutes', 'Stand up and stretch', 'd5e18241-8a21-4a31-bd00-3601b2247591', '997c5e2a-d962-439c-a009-4eb941a577dc'), ('2025-12-12 12:24:23.464578+00', 'Intense exercise', 'High', '3 minutes', 'Stretch shoulders', 'd5e18241-8a21-4a31-bd00-3601b2247591', 'a5993845-871b-4ba2-9f4c-afdd3dc3c221'), ('2025-12-12 13:11:13.918948+00', 'Many Meetings', 'High', '5 minutes', 'Quick mental reset', 'd5e18241-8a21-4a31-bd00-3601b2247591', 'addf7547-dbe6-4222-a4db-fa2ae976d32f'), ('2025-12-12 14:55:24.203268+00', 'Long Time Sitting', 'Low', '5 minutes', 'Stretch gently', 'd5e18241-8a21-4a31-bd00-3601b2247591', 'bfe5315e-06bb-4910-9cb0-6d3e49a17a8d');