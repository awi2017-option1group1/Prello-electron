import thunk from 'redux-thunk'
import * as nock from 'nock'
import configureMockStore from 'redux-mock-store'
import { getBaseUrl } from '../../shared/http'
import {   ERROR, 
           FETCH_BOARDS, 
           FETCH_BOARDS_SUCCESS, 
           INCREMENT_NOTIF_NUMBER, 
           MARK_AS_READ } from './actions'
import { actionCreators } from './actions'

describe('Board sync actions', () => {
    it('should return a error action', () => {
        const expectedAction = {
            type: ERROR,
            message: 'did not created',
        }
        expect(actionCreators.fetchBoardsRequestError('did not created')).toEqual(expectedAction)
    }),
    it('should return a fetch success action', () => {
        const expectedAction = {
            type: FETCH_BOARDS_SUCCESS, 
            boards: [],
        }
        expect(actionCreators.fetchBoardsRequestSuccess([])).toEqual(expectedAction)
    }),
    it('should return a create board action', () => {
        const expectedAction = {
           type: FETCH_BOARDS,
           userID: 1
        }
        expect(actionCreators.fetchBoardsRequest(1)).toEqual(expectedAction)
    }),
    it('should return a increment notification action', () => {
        const expectedAction = {
           type: INCREMENT_NOTIF_NUMBER,
           index: 1
        }
        expect(actionCreators.incrementNotifNumber(1)).toEqual(expectedAction)
    }),
    it('should return a marked as read notification action', () => {
        const expectedAction = {
            type: MARK_AS_READ,
            index: 1
        }
        expect(actionCreators.markAsRead(1)).toEqual(expectedAction)
    })
})
const mockStore = configureMockStore([thunk])
describe('Board async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })
    it('should create FETCH_BOARDS_SUCCESS when success create response is received', () => {
        nock(getBaseUrl())
            .get('/users/1/boards')
            .reply(200, {   
                boards: [{
                    id: -1,
                    title: 'default',
                    notifNumber: 0,
                    position: 0
                }] 
            })
        const expectedActions = [
            {   
                type: FETCH_BOARDS,
                userID: 1
            },
            { 
                type: FETCH_BOARDS_SUCCESS,
                boards: [{
                    id: -1,
                    title: 'default',
                    notifNumber: 0,
                    position: 0
                }]
            }
        ]
        const store = mockStore({ 
            boards: [{
                id: -1,
                title: 'default',
                notifNumber: 0,
                position: 0
            }]
        })
        return store.dispatch(actionCreators.fetchBoard()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
