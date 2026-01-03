import TaskStat from '@/components/stats/TaskStat';
import { getAllLists } from '@/services/lists/getAllLists';
import { useAuth } from '@/stores/authStore';
import { TodoList } from '@/types/list.types';
import React, { useEffect, useState } from 'react';
import { BsListTask } from 'react-icons/bs';

const HomePage: React.FC = () => {

  const { user } = useAuth();
  
  const [lists, setLists] = useState<TodoList[]>([]);

  useEffect(() => {
    if (user?.id) {
      getAllLists(user.id)
        .then(setLists)
        .catch(error => console.error(error));
    }
  }, [user]);

  return (
    <div className="text-black-font gap-4">
      <h2 className="text-2xl font-bold">Hi {user?.firstName}, how are you today?</h2>
      <div>
        <p className="text-lg font-bold">Tasks Status :</p>
        <div className="flex gap-4">
          <TaskStat 
            title="On Going Lists" 
            value={lists.length} 
            subtitle="To Complete" 
            icon={<BsListTask className="h-8 w-8" />} 
            className="bg-stat-light-red text-stat-red-font" 
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;