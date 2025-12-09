export interface DemoFormInfo {
    "businessEmail": string,
    "firstName": string,
    "lastName": string,
    "companyName": string,
    "jobTitle": string,
    "phoneNumber": string,
    "state": string,
    "revenue": "<$100M revenue" | ">$100M to <$2B revenue" | ">$2B revenue"
}

export default class DemoConstants {
    static readonly DEMO_URL = 'https://safetychain.com/book-a-demo';
    static readonly EMAIL_INPUT = 'Business Email';
    static readonly FIRST_NAME_INPUT = 'First Name';
    static readonly LAST_NAME_INPUT = 'Last Name';
    static readonly COMPANY_NAME_INPUT = 'Company name';
    static readonly JOB_TITLE_INPUT = 'Job Title';
    static readonly PHONE_NUMBER_INPUT = 'Your Direct Phone Number';
    static readonly STATE_DROPDOWN = 'Company Headquarters State/Province';
    static readonly REVENUE_DROPDOWN = 'Company Annual Revenue Size';
    static readonly AGREE_CHECKBOX = '#consent_to_receive_marketing_info';
    static readonly SUBMIT_BUTTON = 'submit';
    static readonly FORM_SUBMISSION_CONFIRMATION_TEXT = 'Thank you for contacting us for a demo of SafetyChain. A sales representative will reach out soon.';
}