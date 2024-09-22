import { practiceTaskTabs } from '../practiceTask.const';

const getPracticeTaskCondition = ({
  slug,
  userId,
}: {
  slug: string;
  userId: string;
}) => {
  switch (slug) {
    case practiceTaskTabs.all:
      return {};
    case practiceTaskTabs.completed:
      return { userSubmitTasks: { some: { userId } } };
    case practiceTaskTabs.remaining:
      return { userSubmitTasks: { none: { userId } } };
    case practiceTaskTabs.revision:
      return { userSubmitTasks: { some: { userId } } };
    default:
      return {};
  }
};

export default getPracticeTaskCondition;
