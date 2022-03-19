
export interface PendingRequest  {
    reimbursementId: number,
    requestingEmployeeId: number,
    reimbursementAmount: number,
    //requestApproved: true,
    dateOfRequest: string
}