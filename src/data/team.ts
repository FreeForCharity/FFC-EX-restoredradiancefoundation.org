// Team member data
// This file imports team member data from JSON files in ./team/ directory
// To edit team members, add JSON files in src/data/team/ and import them here.
// Each member needs: name, title, imageUrl (a /Images/* path), linkedinUrl.
//
// The charity has not supplied its leadership yet (ffc-content.json
// `leadership: []`), so the team is empty and listed in `siteConfig.pending`.
// Never fill it with the template's sample members: they are the supporting
// organization's own staff.

export type TeamMember = {
  name: string
  title: string
  imageUrl: string
  linkedinUrl: string
}

export const team: TeamMember[] = []

// The subset with the required `name` populated.
export const configuredTeam: TeamMember[] = team.filter(
  (member) => typeof member.name === 'string' && member.name.trim().length > 0
)
