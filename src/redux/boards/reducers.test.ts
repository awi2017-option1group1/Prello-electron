import { reducer } from './reducers'
import { TEST } from '../testActions'
import {    FETCH_BOARDS, 
            FETCH_BOARDS_SUCCESS, 
            INCREMENT_NOTIF_NUMBER, 
            MARK_AS_READ } from './actions'

describe('Board reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: TEST })).toEqual({
            boards: [{
                id: -1,
                title: 'default',
                notifNumber: 0,
                position: 0
            }],
            error: null,
            isProcessing: false,
            userID: 1,
        })
    })

    it('should handle FETCH_BOARDS', () => {
        expect(reducer(undefined, {
            type: FETCH_BOARDS,
            userID: 1
        }
    )).toEqual(
        {
            boards: [{
                id: -1,
                title: 'default',
                notifNumber: 0,
                position: 0
            }],
            error: null,
            isProcessing: true,
            userID: 1,
        }
    )
    })

    it('shoul handle FETCH_BOARDS_SUCCESS', () => {
        expect(reducer(undefined, {
            type: FETCH_BOARDS_SUCCESS,
            boards: [{
                id: -1,
                title: 'default',
                notifNumber: 0,
                position: 0
            }]
        })).toEqual(
            {
                boards: [{
                    id: -1,
                    title: 'default',
                    notifNumber: 0,
                    position: 0
                }],
                error: null,
                isProcessing: false,
                userID: 1,
            }
        )
    })

    it('shoul handle INCREMENT_NOTIF_NUMBER', () => {
        expect(reducer(undefined, {
            type: INCREMENT_NOTIF_NUMBER,
            index: 0
        })).toEqual(
            {
                boards: [{
                    id: -1,
                    title: 'default',
                    notifNumber: 1,
                    position: 0
                }],
                error: null,
                isProcessing: false,
                userID: 1,
            }
        )
    })

    it('shoul handle MARK_AS_READ', () => {
        expect(reducer(undefined, {
            type: MARK_AS_READ,
            index: 0
        })).toEqual(
            {
                boards: [{
                    id: -1,
                    title: 'default',
                    notifNumber: 0,
                    position: 0
                }],
                error: null,
                isProcessing: false,
                userID: 1,
            }
        )
    })
})
