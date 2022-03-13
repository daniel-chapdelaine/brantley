# JBmassage webpage

## Development server

Pull down Master branch

Create a local branch to make changes.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

When you're happy with the changes push the local branch code to github. Make a pull request to Master. If there are no merge conflicts merge the code into Master.

## Deployment

Deployment was configured using a [cPanel Tutorial on How to use Push aka Manual Dployment with Git](https://www.youtube.com/watch?v=hFyvGkE5zbQ)

Steps: 
1. Run `npm run build` on a local branch with your changes (not master), this will build the useable artifact in the dist/brantley dir.

2. Push code to github and merge into master.

3. Go to HostPapa -> cPanel -> git version control 

4. Find brantley-repository and click manage

5. Go to Pull or Deploy tab

6. click Update from Remote and Verify your changes have been pulled 

7. Click Deploy HEAD Commit
