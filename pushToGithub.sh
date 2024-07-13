#!/bin/bash

# reponame=$1;
# branch=$2;
remoteName=$1;
gitstatus=$(git status)


if [[ $gitstatus != "" ]]

then

echo -e "what files do you want to exclude? \nplease use the d keyword when you are done."
res=''

while [[ $res != "d" ]]
    do
        read res
        if [[ $res != "d" ]]
            then
                echo '.'$res >> .gitignore
        fi
    done

git add .
echo "please write a meaningful comment for this commit";
read comment
git commit -m 'new commit'
git push $remoteName main

fi