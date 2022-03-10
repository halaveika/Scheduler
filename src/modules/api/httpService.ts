import { SERVER_URL, DEFAULT_COLUMNS } from '../../common/constants';
import BoardType from '../../common/types/board-type';
import ColumnType from '../../common/types/column-type';
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

  static async updateBoard(board: BoardType) {
    try {
      const response = await fetch(`${SERVER_URL}boards/${board.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(board),
      });
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Updated Board from server');
    }
  }

  static async createBoard(board: Omit<BoardType, 'id'>) {
    try {
      const boardResponse = await fetch(`${SERVER_URL}boards`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(board),
      });
      const createdBoard: BoardType = await boardResponse.json();
      const createdColumns = await Promise.all(
        DEFAULT_COLUMNS.map(async (column) =>
          fetch(`${SERVER_URL}boards/${createdBoard.id}/columns`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(column),
          }),
        ),
      );
      const columns = await Promise.all(
        createdColumns.map(async (c): Promise<ColumnType> => c.json()),
      );
      return { ...createdBoard, columns } as BoardType;
    } catch (error) {
      throw new Error('Error fetching Posted Board from server');
    }
  }

  static async deleteBoard(boardId: string) {
    try {
      const response = await fetch(`${SERVER_URL}boards/${boardId}`, {
        method: 'DELETE',
      });
      console.log('http-service - deleteBoard: ' + response);
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Delete Board by id from server');
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

  static async deleteTask(boardId: string, taskId: string) {
    try {
      const response = await fetch(
        `${SERVER_URL}boards/${boardId}/tasks/${taskId}`,
        {
          method: 'DELETE',
        },
      );
      return response.json();
    } catch (error) {
      throw new Error('Error fetching Delete Task by id from server');
    }
  }
}

export default HttpService;
