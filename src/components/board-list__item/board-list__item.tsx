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
    <Card className="board-list__item">
      <Link to={`board/${id}/${title}`}>
        <div className="overlay" />
        <img
          className="board-poster"
          alt="Poster!"
          src="./assets/images/sunflowers-board.jpg"
        />
        <span className="board-item__title">{title}</span>
      </Link>
    </Card>
  );
};

export default BoardListItem;
