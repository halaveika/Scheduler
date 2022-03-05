import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import OverflowedHiddenText from '../_ui/overflowed-hidden__text';
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
        <div
          className="board-poster"
          style={{
            backgroundImage: `url(${'assets/images/sunflowers-board.jpg'})`,
          }}
        ></div>
        <OverflowedHiddenText
          text={title}
          innerClass="board-item__title"
        ></OverflowedHiddenText>
      </Link>
    </Card>
  );
};

export default BoardListItem;
