'use strict';

import { PASSWORD_ADVANCED_SUCCESS, PASSWORD_SIMPLE_SUCCESS, SETTINGS_UPDATE } from '../../application/password/password.types';
import { passwordReducer } from '../../application/password/password.reducer';
import { defaultPasswordSettings } from '../../../server/constants/password.constants';

let getTestState = () => {
    return {
        passwordSimple: "simple-password",
        passwordAdvanced: "advance-password",
        settings: defaultPasswordSettings
    };
};

let getTestSetting = (updates) => {
    let testPayload = {
        length: 22,
        lowercase: false,
        uppercase: true,
        numbers: true,
        symbols: true
    };
    return Object.assign({}, testPayload, updates);
}

describe("passwordReducer", () => {
    it("should return state for PASSWORD_SIMPLE_SUCCESS", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: PASSWORD_SIMPLE_SUCCESS, payload: { password: 'updated-simple-password' } });
        
        // assert
        expect(result.passwordSimple).toEqual('updated-simple-password');
    });

    it("should return state for PASSWORD_ADVANCED_SUCCESS", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: PASSWORD_ADVANCED_SUCCESS, payload: { password: 'updated-advanced-password' } });
        
        // assert
        expect(result.passwordAdvanced).toEqual('updated-advanced-password');
    });

    it("should return setting with updated length for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ length: 33 }) });

        // assert
        expect(result.settings.length).toEqual(33);
    });

    it("should return setting with updated lowercase for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ lowercase: false }) });

        // assert
        expect(result.settings.lowercase).toEqual(false);
    });

    it("should return setting with updated uppercase for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ uppercase: true }) });

        // assert
        expect(result.settings.uppercase).toEqual(true);
    });

    it("should return setting with updated numbers for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ numbers: true }) });

        // assert
        expect(result.settings.numbers).toEqual(true);
    });

    it("should return setting with updated symbols for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ symbols: true }) });

        // assert
        expect(result.settings.symbols).toEqual(true);
    });

    it("should return passed state for unknown action type", () => {
        // arrange & act
        let testState = getTestState();
        let result = passwordReducer(testState, { type: 'unknown-type', payload: {} });
        
        // assert
        expect(result).toEqual(testState);
    });

    it("should return default state when action type is unknown and no initial state passed", () => {
        // arrange & act
        let result = passwordReducer(undefined, { type: 'unknown-type', payload: {} });
        
        // assert
        expect(result).toEqual({
            passwordSimple: "",
            passwordAdvanced: "",
            settings: defaultPasswordSettings
        });
    });
});