# Contributing

Hello and welcome to the PearEdit-UI Repository. Whether you would like to report a bug, request a feature, or contribute code and documentation: we appreciate anyone who is willing to give their time to help improve this project.

We have created templates for both issues and pull requests that we ask you to follow when submitting either.

## Submitting Changes

On this project we ask that you follow our fork-and-branch strategy.

### Setup

- Fork the repo you would like to contribute to.

- Clone that fork to your local machine.

- Add our repo as a new remote called upstream.

```bash
# Add upstream remote to repo
git remote add upstream git@github.com:rangle/[repo_name].git
```

- Work on a branch that is descriptively named. (We prefer the `chore/fix/feat` convention).

```bash
# chore branch
git checkout -b chore/update-documentation

# fix branch
git checkout -b fix/authentication

# feature branch
git checkout -b feat/add-login-modal
```
### Commits

Writing good commit messages makes all the difference in a project. To anyone reading the git log, `fixed more code` and `LOL, don't even know how this got in here` doesn't explain what changes were made with that commit and can get annoying pretty quickly. Below are the seven basic rules to what we consider writing good commit messages:

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

For more information and examples of these rules, checkout [this awesome blog post](https://chris.beams.io/posts/git-commit/)

### Submitting a Pull Request

Once you've finished, rebase from `upstream/master` to make sure you have the most up-to-date changes. Then, push your branch to **your** remote fork (`origin`) to create a pull request via GitHub.

```sh
# get latest changes from the main repo
git fetch upstream

# replay your work on top of the latest changes
git rebase upstream/master

## If you have conflicts, fix them in your editor, then do
git add [conflicted files]
git rebase --continue

# Push it up.
git push origin feat/my-awesome-feature
```

Also, be sure to answer all the questions in the pull request template and add `(connects to #<issue_number>)` where `<issue_number>` is the number of the issue your PR addresses, to the title. Please tag either @ShaunLloyd or @LeoRotaRossi (or both) for review. 
