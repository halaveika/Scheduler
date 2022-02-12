import { connect } from 'react-redux';
import { getBoards } from '../../modules/redux/content/content-selectors';
import { RootState } from '../../modules/redux/store';
import BoardList from '../board-list';

export const mapStateToProps = (state: RootState) => ({
  boards: getBoards(state),
});

const BoardListContainer = connect(mapStateToProps, null)(BoardList);

export default BoardListContainer;
