import BoardType from '../../../src/common/types/board-type';

const BoardMock: BoardType = {
  id: 'c383851c-8cc5-424b-9c53-53b2591609d5',
  title: 'testBoard',
  columns: [
    {
      id: 'e4ec53eb-768e-431d-b9cf-4d6f5cb928d6',
      title: 'To Do',
      order: 0,
    },
    { id: '9da73fb6-5849-4611-8d21-b891f901cff7', title: 'Doing', order: 1 },
    { id: '9f0f1c04-9829-4630-9758-a5f486176c10', title: 'Done', order: 2 },
  ],
};

export default BoardMock;