import { APIHeader, KYCListApi, KYCVerificationApi, VerificationOptionsApi } from '../models/api-models';

const defaultHeader: APIHeader = {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
};

export const getKYCData = (): Promise<KYCListApi> => {
    return fetch('./dummyHomeData.json', defaultHeader).then(res => res.json());
}

export const getVerificationData = (kycId: string): Promise<KYCVerificationApi> => {
    return fetch('../dummyVerificationData.json', defaultHeader).then(res => res.json());
}

export const getVerificationOptionsData = (): Promise<VerificationOptionsApi> => {
    return fetch('../dummyVerificationOptionsData.json', defaultHeader).then(res => res.json());
}