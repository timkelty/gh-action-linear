import type { LinearClient } from "@linear/sdk";

export const setLinearStatus = async (
	linear: LinearClient,
	{ linearIssueId, linearIssueStatus }: {
		linearIssueId: string;
		linearIssueStatus: string;
	},
) => {
	await linear.updateIssue(linearIssueId, { stateId: linearIssueStatus });
};
