import { connect } from 'react-redux';
import { getBoards } from '../../modules/redux/content/content-actions';
import { getBoardsSelector } from '../../modules/redux/content/content-selectors';
import { RootState } from '../../modules/redux/store';
import BoardList from '../board-list';

const mapStateToProps = (state: RootState) => ({
  boards: getBoardsSelector(state),
});

const BoardListContainer = connect(mapStateToProps, { getBoards })(BoardList);

export default BoardListContainer;
