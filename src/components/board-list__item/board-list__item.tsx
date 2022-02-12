import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './board-list__item.scss';

interface IBoardListItemProps {
  id: string;
  title: string;
}

const BoardListItem = ({ id, title }: IBoardListItemProps): JSX.Element => {
  return (
    <Link to={`board/${id}/${title}`}>
      <Card className="board-list__item">
        <span>{title}</span>
      </Card>
    </Link>
  );
};

export default BoardListItem;
