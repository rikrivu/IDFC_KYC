export interface APIHeader {
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export interface KYCListApi {
    kycs: KYCApi[];
    statistics: StatisticsApi[];
    size: number;
}

export interface KYCApi {
    kyc_id: string;
    assigned_on: string;
    last_updated: string;
    customer_name: string;
    agent_name: string;
    ai_checks: string;
    status: string;
}

export interface StatisticsApi {
    display_name: string;
    label: string;
    value: number;
}

export interface KYCVerificationApi {
    kyc_name: string;
	kyc_id: string;
	security_question: SecurityQuestionApi[]
}

export interface SecurityQuestionApi {
    question_id: number;
    question: string;
    type: string;
    url: string;
    start_time: string;
    end_time: string;
    agent_input: boolean;
    ai_engine_input: boolean;
    name_on_pan: string;
    number_on_pan: string;
    ai_name_on_pan: string;
}

export interface VerificationOptionsApi{
    AGREE: string;
	DISAGREE: string;
}
