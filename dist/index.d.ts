/// <reference types="react" />
import React from "react";
interface PlaidAccount {
    id: string;
    name: string;
    mask: string;
    type: string;
    subtype: string;
    verification_status: string;
}
interface PlaidInstitution {
    name: string;
    institution_id: string;
}
interface PlaidLinkError {
    error_type: string;
    error_code: string;
    error_message: string;
    display_message: string;
}
interface PlaidLinkOnSuccessMetadata {
    institution: null | PlaidInstitution;
    accounts: Array<PlaidAccount>;
    link_session_id: string;
    transfer_status?: string;
}
interface PlaidLinkOnExitMetadata {
    institution: null | PlaidInstitution;
    // see possible values for status at https://plaid.com/docs/link/web/#link-web-onexit-status
    status: null | string;
    link_session_id: string;
    request_id: string;
}
interface PlaidLinkOnEventMetadata {
    error_type: null | string;
    error_code: null | string;
    error_message: null | string;
    exit_status: null | string;
    institution_id: null | string;
    institution_name: null | string;
    institution_search_query: null | string;
    mfa_type: null | string;
    // see possible values for view_name at https://plaid.com/docs/link/web/#link-web-onevent-view-name
    view_name: null | string;
    // see possible values for selection at https://plaid.com/docs/link/web/#link-web-onevent-selection
    selection: null | string;
    // ISO 8601 format timestamp
    timestamp: string;
    link_session_id: string;
    request_id: string;
}
type PlaidLinkOnSuccess = (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => void;
type PlaidLinkOnExit = (error: null | PlaidLinkError, metadata: PlaidLinkOnExitMetadata) => void;
// The following event names are stable and will not be deprecated or changed
declare enum PlaidLinkStableEvent {
    OPEN = "OPEN",
    EXIT = "EXIT",
    HANDOFF = "HANDOFF",
    SELECT_INSTITUTION = "SELECT_INSTITUTION",
    ERROR = "ERROR",
    BANK_INCOME_INSIGHTS_COMPLETED = "BANK_INCOME_INSIGHTS_COMPLETED",
    IDENTITY_VERIFICATION_PASS_SESSION = "IDENTITY_VERIFICATION_PASS_SESSION",
    IDENTITY_VERIFICATION_FAIL_SESSION = "IDENTITY_VERIFICATION_FAIL_SESSION"
}
type PlaidLinkOnEvent = (
// see possible values for eventName at
// https://plaid.com/docs/link/web/#link-web-onevent-eventName.
// Events other than stable events are informational and subject to change,
// and therefore should not be used to customize your product experience.
eventName: PlaidLinkStableEvent | string, metadata: PlaidLinkOnEventMetadata) => void;
type PlaidLinkOnLoad = () => void;
interface CommonPlaidLinkOptions<T> {
    // A function that is called when a user has successfully connecter an Item.
    // The function should expect two arguments, the public_key and a metadata object
    onSuccess: T;
    // A callback that is called when a user has specifically exited Link flow
    onExit?: PlaidLinkOnExit;
    // A callback that is called when the Link module has finished loading.
    // Calls to plaidLinkHandler.open() prior to the onLoad callback will be
    // delayed until the module is fully loaded.
    onLoad?: PlaidLinkOnLoad;
    // A callback that is called during a user's flow in Link.
    // See all values for eventName here https://plaid.com/docs/link/web/#link-web-onevent-eventName
    onEvent?: PlaidLinkOnEvent;
}
/**
 * @deprecated Public key integrations are deprecated and should not be used.
 * https://plaid.com/docs/link/link-token-migration-guide/
 */
type PlaidLinkOptionsWithPublicKey = CommonPlaidLinkOptions<PlaidLinkOnSuccess> & {
    // The public_key associated with your account; available from
    // the Plaid dashboard (https://dashboard.plaid.com)
    publicKey: string;
    // Provide a public_token to initialize Link in update mode.
    token?: string;
    // Displayed once a user has successfully linked their account
    clientName: string;
    // The Plaid API environment on which to create user accounts.
    env: string;
    // The Plaid products you wish to use, an array containing some of connect,
    // auth, identity, income, transactions, assets, liabilities
    product: Array<string>;
    // An array of countries to filter institutions
    countryCodes?: Array<string>;
    // A local string to change the default Link display language
    language?: string;
    // Your user's associated email address - specify to enable all Auth features.
    // Note that userLegalName must also be set.
    userEmailAddress?: string;
    // Your user's legal first and last name – specify to enable all Auth features.
    // Note that userEmailAddress must also be set.
    userLegalName?: string;
    // Specify a webhook to associate with a user.
    webhook?: string;
    linkCustomizationName?: string;
    accountSubtypes?: {
        [key: string]: Array<string>;
    };
    oauthNonce?: string;
    oauthRedirectUri?: string;
    oauthStateId?: string;
    paymentToken?: string;
};
type PlaidLinkOptionsWithLinkToken = CommonPlaidLinkOptions<PlaidLinkOnSuccess> & {
    // Provide a link_token associated with your account. Create one
    // using the /link/token/create endpoint.
    token: string | null;
    // receivedRedirectUri is required on the second-initialization of link when using Link
    // with a redirect_uri to support OAuth flows.
    receivedRedirectUri?: string;
};
// Either the publicKey or the token field must be configured. The publicKey
// is deprecated so prefer to initialize Link with a Link Token instead.
type PlaidLinkOptions = PlaidLinkOptionsWithPublicKey | PlaidLinkOptionsWithLinkToken;
type PlaidLinkPropTypes = PlaidLinkOptions & {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
interface PlaidHandler {
    open: (institutionId?: string) => void;
    exit: (force?: boolean) => void;
    destroy: () => void;
}
interface Plaid extends PlaidHandler {
    create: (config: PlaidLinkOptions) => PlaidHandler;
}
declare global {
    interface Window {
        Plaid: Plaid;
    }
}
/**
 * This hook loads Plaid script and manages the Plaid Link creation for you.
 * You get easy open & exit methods to call and loading & error states.
 *
 * This will destroy the Plaid UI on un-mounting so it's up to you to be
 * graceful to the user.
 *
 * A new Plaid instance is created every time the token and products options change.
 * It's up to you to prevent unnecessary re-creations on re-render.
 */
declare const usePlaidLink: (options: PlaidLinkOptions) => {
    error: ErrorEvent | null;
    ready: boolean;
    exit: Function;
    open: Function;
};
declare const PlaidLink: React.FC<PlaidLinkPropTypes>;
export { usePlaidLink, PlaidLink, PlaidAccount, PlaidInstitution, PlaidLinkError, PlaidLinkOnSuccessMetadata, PlaidLinkOnExitMetadata, PlaidLinkOnEventMetadata, PlaidLinkOnSuccess, PlaidLinkOnExit, PlaidLinkStableEvent, PlaidLinkOnEvent, PlaidLinkOnLoad, CommonPlaidLinkOptions, PlaidLinkOptionsWithPublicKey, PlaidLinkOptionsWithLinkToken, PlaidLinkOptions, PlaidLinkPropTypes, PlaidHandler, Plaid };
