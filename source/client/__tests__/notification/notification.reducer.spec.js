'use strict';

import { DISMISS_NOTIFICATION, SEND_NOTIFICATION } from '../../application/notification/notification.types';
import { OrderedSet } from 'immutable';
import { notificationReducer } from '../../application/notification/notification.reducer';

describe("notificationReducer", () => {
    let getTestState = () => {
        return {
            notifications: OrderedSet()
        };
    };
    
    it("should add passed notification for SEND_NOTIFICATION action", () => {
        // arrange & act
        let testAction = { type: SEND_NOTIFICATION, payload: { notification: { key: 'new-test-notification', value: 'new-test-notification' } } };
        let result = notificationReducer(getTestState(), testAction);
        
        // assert
        expect(result.notifications.filter(n => n.key === testAction.payload.notification.key).count()).toEqual(1);
    });

    it("should remove specified notification for DISMISS_NOTIFICATION action", () => {
        // arrange
        let testState = getTestState();
        let testAction = { type: SEND_NOTIFICATION, payload: { notification: { key: 'new-test-notification', value: 'new-test-notification' } } };
        notificationReducer(testState, testAction);
        
        // act
        testAction = { type: DISMISS_NOTIFICATION, payload: { key: 'new-test-notification' } };
        let result = notificationReducer(testState, testAction);

        // assert
        expect(result.notifications.filter(n => n.key === testAction.payload.notification.key).count()).toEqual(0);
    });

    it("should return passed state for unknown action type", () => {
        // arrange & act
        let testState = getTestState();
        let result = notificationReducer(testState, { type: 'unknown-type', payload: {} });
        
        // assert
        expect(result).toEqual(testState);
    });

    it("should return default state when action type is unknown and no initial state passed", () => {
        // arrange & act
        let result = notificationReducer(undefined, { type: 'unknown-type', payload: {} });
        
        // assert
        expect(result).toEqual(getTestState());
    });
});