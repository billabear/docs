---
title: Create New User
sidebar_label: Create New User
sidebar_position: 22
---
This command is a helper for user administration. Sometimes you need to create a user manually without having access to the user. For example, a new developer needing access.


## How it works

If an email and password are given in the command arguments then it'll just instantly change the password. If one of these is missing it will provide a prompt to provide this information.

## How to run

The following command can be used to execute the command.

`bin/console parthenon:user:create-user`

or 

`bin/console parthenon:user:create-user <email> <password>`

## Options

| Name | Default | Description |
| email | `null` | The email of the user the new user |
| password | `null` | The new password |
