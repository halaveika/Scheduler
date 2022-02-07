import BoardType from '../../../src/common/types/board-type';

const BoardMock: BoardType = {
  id: 'qc9f5811-81a4-41f2-ba7d-aa7d46a39e3f',
  title: 'testBoard',
  columns: [
    {
      id: 'qc9f6811-81a4-41f2-ba7d-aa7d46a39e3f',
      title: 'To Do',
      order: 0,
    },
    { id: 'qc9f7811-81a4-41f2-ba7d-aa7d46a39e3f', title: 'Doing', order: 1 },
    { id: 'qc9f8811-81a4-41f2-ba7d-aa7d46a39e3f', title: 'Done', order: 2 },
  ],
};

export default BoardMock;