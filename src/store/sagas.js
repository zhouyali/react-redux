import { takeEvery,put } from 'redux-saga/effects';
import { getInitList } from './actionCreator';
import { initListType } from './actionType'
import axios from 'axios';
function* getInitListSaga() {
    try{
        const res = yield axios.get('/list.json');
        const action = getInitList(res.data);
        yield put(action)
    }catch(e) {
        console.log('network faild')
    }
}
function* mySaga() {
    yield takeEvery(initListType, getInitListSaga)
}
export default mySaga;
