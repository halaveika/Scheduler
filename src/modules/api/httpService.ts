import { SERVER_URL } from '../../common/constants';
import TaskType from '../../common/types/task-type';

class HttpService {
  static async Login(login: string, password: string) {
    try {
      const response = await fetch(`${SERVER_URL}login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Auth Token');
    }
  }

  static async getBoards() {
    try {
      const response = await fetch(`${SERVER_URL}boards`, { method: 'GET' });
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Get Boards from server');
    }
  }

  static async getBoard(id: string) {
    try {
      const response = await fetch(`${SERVER_URL}boards/${id}`, {
        method: 'GET',
      });
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Get Board by id from server');
    }
  }

  static async getTasks(boardId: string) {
    try {
      const response = await fetch(`${SERVER_URL}boards/${boardId}/tasks`, {
        method: 'GET',
      });
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Get Tasks from Board from server');
    }
  }

  static async getTask(boardId: string, taskId: string) {
    try {
      const response = await fetch(
        `${SERVER_URL}boards/${boardId}/tasks/${taskId}`,
        {
          method: 'GET',
        },
      );
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Get Task by id from server');
    }
  }

  static async createTask(boardId: string, task: Omit<TaskType, 'id'>) {
    try {
      const response = await fetch(`${SERVER_URL}boards/${boardId}/tasks`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Posted Task from server');
    }
  }

  static async updateTask(boardId: string, task: TaskType) {
    try {
      const response = await fetch(
        `${SERVER_URL}boards/${boardId}/tasks/${task.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        },
      );
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Updated Task from server');
    }
  }
}

export default HttpService;
