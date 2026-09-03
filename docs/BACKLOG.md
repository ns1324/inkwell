Definition of Done: see README.md
| ID | User Story | Priority | Points | Status | Notes |
|----|------------|----------|--------|--------|-------|
| US-01 | As a visitor, I want to register an account... | High | 3 | Requirements Defined | See use-cases.md |
| US-02 | As a registered user, I want to log in... | High |5 | Requirements Defined | See use-cases.md |
| US-03 | As an author, I want to write and publish... | High| 5 | Requirements Defined | Scope negotiated: plain text only, see Section 5.4 |
| US-04 | As a reader, I want to browse a public feed... | High | 3 | Requirements defined | See use-cases.md |
| US-05 | As a reader, I want to comment on a post... | Medium | 3 | Backlog | |
| US-06 | As a reader, I want to follow an author... | Medium| 3 | Backlog | |
| US-07 | As an author, I want basic analytics... | Low | 5 | Backlog | |
| US-08 | As a visitor, I want to be able to reset my password | Medium | 2 | Backlog | |
| US-09 | As a reader, I want to be able to sort by tag, so as to expedite the search process | Medium | 3 | Backlog | |

### Estimation and priority justification

US-08 - 2, Medium
- Priority: It is not as pressing as implementing accouont creation, but should be handled soon after.
- Points: Relativly straitforward, though requires email/other authentication.

US-09 - 3, Medium
- Priority: Application could launch without, though it is a common and popular feature amongst online apps.
- Points: Would require change to both the search api and the backend storage of tags for each post, esspecially if tags are not supported yet.
