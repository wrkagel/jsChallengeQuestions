# jsChallengeQuestions 
## Upload or download jsChallengeQuestions.

## How to download files using git bash
**git init**
*create a local git repository in the folder containing the files to be uploaded/downloaded, if one does not already exist (only needed once)*

**git remote add origin https://github.com/akromatikus/jsChallengeQuestions.git**
*choose the git url to upload/download to, only needed once*

**git pull origin master**
*clone everything in the repository*

## How to upload files using git bash
*first make a subfolder containing your files in the folder where git bash was opened. Uploading a folder with your files will make the master branch easier to navigate*

**git add 'folder name'** *or...* **git add .** 
*choose the folder you want to upload. git add . will choose all files in the directory*

**git commit -m 'custom note'**
*prepares those chosen files for commit to github*

**git push origin master**
*upload the files*
 

  
  
  
