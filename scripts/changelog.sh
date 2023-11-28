#!/bin/bash
echo "bash" $BASH_VERSION

# exit when any command fails
set -e

RED='\033[0;31m'
NC='\033[0m' # No Color
MAIN_BRANCH_NAME="master"
RELEASE_BRANCH_NAME="release"

function changelog() {
  echo "create $RELEASE_BRANCH_NAME branch in local repository..."
  git checkout -b $RELEASE_BRANCH_NAME

  echo "set upstream $RELEASE_BRANCH_NAME branch in remote repository..."
  git push -u origin $RELEASE_BRANCH_NAME

  echo "bump version and generate changelog..."
  git fetch --prune origin  \"+refs/tags/*:refs/tags/*\" && yarn lerna version --yes
  echo "successfully generated changelog!"
}

function check_current_branch_is_main_branch() {
  echo "check current branch is $MAIN_BRANCH_NAME branch..."
  local CURRENT_BRANCH=$(git branch --show-current)

  if [[ $CURRENT_BRANCH != $MAIN_BRANCH_NAME ]]
  then
    echo "your current branch is not $MAIN_BRANCH_NAME!"
    echo "checkout into $MAIN_BRANCH_NAME..."
    git checkout $MAIN_BRANCH_NAME
  fi

  echo "pull $MAIN_BRANCH_NAME"
  git pull origin $MAIN_BRANCH_NAME
}

function check_release_branch_in_remote() {
  echo "check $RELEASE_BRANCH_NAME branch in remote repository..."
  local EXISTED_IN_REMOTE=$(git ls-remote --heads origin $RELEASE_BRANCH_NAME)

  if [[ -n $EXISTED_IN_REMOTE ]]
  then
    echo "${RED} $RELEASE_BRANCH_NAME branch is exists in remote repository! you should remove it first!"
    exit 0
  fi
}

echo "prepare generate changelog..."
check_current_branch_is_main_branch
check_release_branch_in_remote

echo "check $RELEASE_BRANCH_NAME branch in local repository..."
EXISTED_IN_LOCAL=$(git branch --list $RELEASE_BRANCH_NAME)

if [[ -z $EXISTED_IN_LOCAL ]]
then
  changelog
else
  echo "$RELEASE_BRANCH_NAME branch is exists in local repository!"
  echo "delete $RELEASE_BRANCH_NAME branch..."
  git branch -D $RELEASE_BRANCH_NAME

  changelog
fi