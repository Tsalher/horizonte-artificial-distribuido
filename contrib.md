# Instructions to contribute
1. Fork the project.
2. Clone your fork with the Git command `git clone <url>`
3. Create development branches (as many as you need) with the commands:  

    ```  
    git branch  
    git checkout -b <name_of_new_branch>  
    git checkout <name_of_new_branch>  
    ```

4. Edit files in desired branch and check with `git status`
5. Add the edited files to the staging area with the command `git add .`
6. Commit your changes: `git commit -m "Description of the changes"`
7. Push to GitHub: `git Push`
8. When you think the feature is ready to be included in the main project, initiate a pull request.

Please write your code and comments in English.

## Updating your forked repository
1. In your repository, register the repository you forked the project from, which is this one. This creates a name to refer to the online upstream repository. This only needs to be done once.

```
git remote add upstream https://github.com/Tsalher/horizonte-artificial-distribuido
```

2. Commit your changes to the branch you are working on and checkout the master branch. Committing is not strictly necessary, but sometimes you will not be able to checkout without committing. Git will alert you with a warning. If you ignore the warning and force the checkout without committing, you may lose code!

```
git add .
git commit -m "<commit message>"
git checkout master
```

3. Fetch the changes from this repository.

```
git fetch upstream
```

4. Merge the changes into your master branch.
```
git merge upstream/master
```

5. If you want to incorporate the changes to a development branch (in the example, it is called *devel*, checkout to it and merge with your updated master branch.

```
git checkout devel
git merge master
```

## Tip
Create branches for all your development. Do not commit to the master branch even in your fork. By doing this, you will avoid
merge conflicts when updating your fork.
