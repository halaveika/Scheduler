import { connect } from 'react-redux';
import { getBoards } from '../../modules/redux/content/content-selectors';
import { RootState } from '../../modules/redux/store';
import Board from '../board';

export const mapStateToProps = (state: RootState) => ({
  boards: getBoards(state),
});

const BoardContainer = connect(mapStateToProps, null)(Board);

export default BoardContainer;
