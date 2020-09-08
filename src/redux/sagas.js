import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_POSTS, FETCH_POSTS} from './types'
import {showLoader, hideLoader, showAlert} from './actions'

// тут обрабатываем саги
export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker) // Указывает, что необходмо обрабатывать каждый экшен
}

function* sagaWorker() {
    try {
        yield put(showLoader()) // Как диспатч(почти)
        const payload = yield call(fetchPosts) // Ждем пока выполнится
        yield put( {type: FETCH_POSTS, payload} )
        yield put(hideLoader())
    } catch (error) {
        yield put (showAlert('GG WP'))
        yield put (hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}