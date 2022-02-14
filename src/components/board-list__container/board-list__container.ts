import { connect } from 'react-redux';
import { AuthActionCreators } from '../../modules/redux/auth/auth-actions';
import { ContentActionCreators } from '../../modules/redux/content/content-actions';
import { getBoardsSelector } from '../../modules/redux/content/content-selectors';
import { RootState } from '../../modules/redux/store';
import BoardList from '../board-list';

const { getBoards } = ContentActionCreators;
const { login } = AuthActionCreators;

const mapStateToProps = (state: RootState) => ({
  boards: getBoardsSelector(state),
});

const BoardListContainer = connect(mapStateToProps, { getBoards, login })(
  BoardList,
);

export default BoardListContainer;
