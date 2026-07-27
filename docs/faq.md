# FAQ

### What is test-alchemy?

test-alchemy is a sandbox repository managed by the alchemy-org software factory. It serves as a test environment for exploring and validating development workflows and processes within the alchemy ecosystem.

### How do issues get resolved automatically by the factory?

The alchemy-org software factory automates the issue resolution process through intelligent pull request handling. When a pull request is created that addresses an issue, the factory automatically detects the connection (typically through issue references in the PR body, such as "Closes #N"). Once the pull request is merged and all acceptance criteria are met, the factory automatically closes the associated issue, streamlining the development workflow and ensuring traceability between code changes and resolved issues.

### How do I create a new issue?

To create a new issue, navigate to the Issues section of the repository and click the "New Issue" button. Provide a clear title describing the problem or feature request, and fill in the issue body with relevant details, acceptance criteria, and any additional context that would help reviewers understand the scope of work. Make sure your issue follows the repository's guidelines and includes all necessary information for someone to start working on it.

### What should I include in a pull request?

When creating a pull request, include a descriptive title that summarizes the change, and in the pull request body, reference the issue it addresses using "Closes #N" syntax. Provide a clear description of what changes were made and why, ensure all tests pass, and follow the code style and conventions of the project. The pull request should be focused on solving a single issue or implementing a single feature to make reviews easier and more efficient.
