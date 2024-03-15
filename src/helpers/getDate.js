import { format } from 'date-fns';

function getToday() {
  const today = new Date();
  return format(today, 'yyyy-MM-dd');
}

export default getToday;
