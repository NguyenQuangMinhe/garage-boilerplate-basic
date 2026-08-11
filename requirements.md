# Requirements for Login page restyle 

- To build following features for the existing boilerplate. 
- A styled login page 
- A team page showing the following items 
  - Team name 
  - Each member’s: 
    - Photo 
    - Name 
    - Role 
    - Short blurb 

## Team page content fields and display rules
| Field        | Requirement | Proposed validation | Display rule                                                                                 |
| ------------ | ----------- | ------------------- | -------------------------------------------------------------------------------------------- |
| Team name    | Required    | Plain text          | Shown as the main heading. Must wrap on small screen and doesn’t overlap with other content. |
| Member photo | Required    | Image file          | Displayed consistently with team member entry.                                               |
| Member name  | Required    | Plain text          | Show under member photo.                                                                     |
| Member role  | Required    | Plain text          | Show under member name.                                                                      |
| Short blurb  | Required    | Plain text          | Show under member role.                                                                      |