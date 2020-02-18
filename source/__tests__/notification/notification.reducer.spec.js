import { DISMISS_NOTIFICATION, SEND_NOTIFICATION } from "../../application/notification/notification.types"
import { notificationReducer } from "../../application/notification/notification.reducer"

const getTestState = () => ({
    notifications: []
})

describe("notificationReducer", () => {
    it("should add passed notification for SEND_NOTIFICATION action", () => {
        const testAction = { type: SEND_NOTIFICATION, payload: { notification: { key: "new-test-notification", value: "new-test-notification" } } }
        const result = notificationReducer(getTestState(), testAction)

        expect(result.notifications.filter(n => n.key === testAction.payload.notification.key)).toHaveLength(1)
    })

    it("should remove specified notification for DISMISS_NOTIFICATION action", () => {
        const testState = getTestState()
        let testAction = { type: SEND_NOTIFICATION, payload: { notification: { key: "new-test-notification", value: "new-test-notification" } } }
        notificationReducer(testState, testAction)

        testAction = { type: DISMISS_NOTIFICATION, payload: { key: "new-test-notification" } }
        const result = notificationReducer(testState, testAction)

        expect(result.notifications.filter(n => n.key === testAction.payload.notification.key)).toHaveLength(0)
    })

    it("should return passed state for unknown action type", () => {
        const testState = getTestState()
        const result = notificationReducer(testState, { type: "unknown-type", payload: {} })

        expect(result).toEqual(testState)
    })

    it("should return default state when action type is unknown and no initial state passed", () => {
        const result = notificationReducer(undefined, { type: "unknown-type", payload: {} })

        expect(result).toEqual(getTestState())
    })
})