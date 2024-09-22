import { Prisma } from '@prisma/client';

const getPracticeTaskRevisionQuery = ({
  userId,
  practiceSetId,
}: {
  userId: string;
  practiceSetId: string;
}) => {
  return Prisma.sql`
WITH LatestUserSubmitTask AS (
       SELECT DISTINCT ON ("practiceTaskId")
         "practiceTaskId",
         "submittedAt"
       FROM "UserSubmitTask"
       WHERE "userId" = ${userId}
       ORDER BY "practiceTaskId", "submittedAt" DESC
     )
     SELECT pt.id, 
            ARRAY_AGG(t."name") AS taskTags,  -- Aggregate task tags into an array
            l."submittedAt" AS latestSubmission
     FROM "PracticeTask" pt
     LEFT JOIN "_PracticeTaskToTaskTag" mt ON pt.id = mt."A"  -- Join with mapping table
     LEFT JOIN "TaskTag" t ON mt."B" = t.id  -- Join with TaskTag
     LEFT JOIN LatestUserSubmitTask l ON pt.id = l."practiceTaskId"
     WHERE pt."practiceSetId" = ${practiceSetId}
       AND pt."status" = 'LIVE'
       AND (
         (t."name" = 'Easy' AND l."submittedAt" <= NOW() - INTERVAL '10 days') OR
         (t."name" = 'Medium' AND l."submittedAt" <= NOW() - INTERVAL '5 days') OR
         (t."name" = 'Hard' AND l."submittedAt" <= NOW() - INTERVAL '3 days')
       )
     GROUP BY pt.id, l."submittedAt"  -- Group by task ID and latest submission date
     ORDER BY l."submittedAt" DESC;
     `;
};

export default getPracticeTaskRevisionQuery;
