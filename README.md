# Project CoffeeTime 

### [Github Link](https://github.com/UCB-INFO-FRONTEND-WEBARCH/project-coffeetime)

A. IDE
-----------
For this prject we will be using VS Code and only that. Please download and install it from [here](https://code.visualstudio.com/download).

**IMP:** DO NOT use any other editors as it might result in displaying unnecessary changes when performing git merge later.

B. Plug-ins for VS Code
-----------------------
We will be using following plugins which will makes React development easy for us. Please install these plugins by going to Extensions tab (Cmd-Shift-X) on the left and seraching for them -

1. [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) (by Microsoft)
2. [ES7 React/Redux/GraphQL snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) (by dsznajder)
3. [Latest Typescript and Javascript Grammar](https://marketplace.visualstudio.com/items?itemName=ms-vscode.typescript-javascript-grammar) (by Microsoft)
4. [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (by Eric Amodio)

C. Github Process
-----------------
### 1. Clone the repo
Run the following commands to clone the repo to your local machine -
```
cd ~

git clone https://github.com/UCB-INFO-FRONTEND-WEBARCH/project-coffeetime

cd project-coffeetime
```

### 2. Working with Git Branch
**NOTE**: You cannot directly push changes to `master` branch. DO NOT WORK directly on `master`.    

As as part of our development process, we all will be working on our individual development branches. We currently have 5 dev branches, namely `vivant-dev`, `aneesa-dev`, `bomi-dev`, `chintan-dev` and `nithya-dev`. You are only supposed to push changes into your own dev branch.

**IMP**: Branch restrictions are currently in place which will restrict your push access to only your own `name-dev` branch. You cannot push into any other branch.

### 3. Verify current branch
This is denoted at bottom-left corner in VS Code's blue footer.

OR

Use the following command to check what branch you are currently on -
```
git branch
```
The current branch you are on will be marked with an asterisk (*).

### 4. Switch to other branch
Click on the branch name at bottom-left corner in VS Code's blue ribbon to open a dropdown. You can select the option `origin/yourname-dev` to switch your branch. Verify that you have switched by checking the branch name in bottom-left corner.

OR

Use the following command to switch to `yourname-dev` branch (if you are currently on a different branch like `master`) -
```
git checkout yourname-dev
```

### 5. Before Making Changes (DO THIS ALWAYS)
Make sure that you run below commands before starting to make any changes (even if you are on your dev branch) -
```
git checkout master
git pull

git checkout yourname-dev
git merge master
git push
```
This will pull all the latest changes from master branch into your own dev branch.

### 6. Before Closing VS Code
Make sure that you commit all the changes you have worked on for the day and push them to the repo (using below instruction) before calling it a day.

**IMP**: Never leave uncommitted/unpushed changes. It is **REALLY BAD** practice.

### 7. Pushing changes
It's useful and convenient to use VS Code's git integration to perform push operation. Click the icon right next to `branch name` in VS Code bottom-left on blue footer ribbon to push your changes.

OR

Use the following command to push your changes (verify that you are on `yourname-dev` branch first) -
```
git push
```

### 8. Creating Pull Requests (PR)
You should regularly create pull request (PR) to merge your `yourname-dev` branch changes into `master` from time to time, especially when your functionality/feature is good to be shipped. Unless you do this, your changes are not available for other developers. In general, create pull requests every week so that everyone working is on same page.

a. Go to our [repo](https://github.com/UCB-INFO-FRONTEND-WEBARCH/project-coffeetime) on github.

b. Go to `Pull Requests` tab and click on `New pull request` button.

c. Make sure that `base:master` is set to `master` on left hand side of arrow from the dropdown and `compare:yourname-dev` is set on right hand side of arrow from the dropdown.

d. Assign 3 to 4 reviewers for the code changes you want to merge. You need `Approve` from at least two reviewers in order to merge changes to `master` branch.

e. If you are a reviewer assigned to a PR, make sure that the code looks sane and good coding practices are followed. Provide `Review Comments` asking for additional changes if you see something off. Otherwise, if everything looks ok, `Approve` the PR and the changes are good to merge to master branch.

D. Running CoffeeTime App
-------------------------
Inside coffeetime-app directory, you can run several commands:

`yarn start`: Starts the development server.

`yarn build`: Bundles the app into static files for production.

`yarn test`: Starts the test runner.

`yarn eject`: Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:
```
cd coffeetime-app
yarn start
```

Happy coding!