import { SERVER_URL } from '../../common/constants';

class HttpService {
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
      const response = await fetch(`${SERVER_URL}boards/${boardId}`, {
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
}

export default HttpService;
