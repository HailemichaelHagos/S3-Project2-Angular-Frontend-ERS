export interface Reimbursement{
    
    reimbursementId: number,
    requestingEmployeeId: number,
	reimbursementAmount: number,
	requestApproved: boolean,
	dateOfRequest: string,
	dateResolved: string

}