// /////////////////////////////////////////////////////////////////////////////////////////
//  Feature Flags Store
// /////////////////////////////////////////////////////////////////////////////////////////

/**
 * Feature Flag Store
 * Stores of the feature flags that are retrieved from LaunchDarkly
 * @typedef {object} FeatureFlagStore
 * @property {boolean} isReady - Have the flags been retrieved and stored.
 * @property {Object.<string, boolean>} flags - List of flags
 */

// /////////////////////////////////////////////////////////////////////////////////////////
//  User Store
// /////////////////////////////////////////////////////////////////////////////////////////

/**
 * User Store
 * @typedef {object} UserStore
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} fullName - Computed getter combining firstName and lastName
 * @property {() => Promise<void>} fetchUser - Fetches and hydrates user state
 */
