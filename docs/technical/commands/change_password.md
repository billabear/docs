---
title: Change User Password
sidebar_label: Change User Password
sidebar_position: 19
---
This command is a helper for user administration. Sometimes a user will forget their password and can't use the forget password for whatever reason. In this case you can use this command


## How it works

If an email and password are given in the command arguments then it'll just instantly change the password. If one of these is missing it will provide a prompt to provide this information.

## How to run

The following command can be used to execute the command.

`bin/console parthenon:user:change-password`

or 

`bin/console parthenon:user:change-password <email> <password>`

## Options

| Name | Default | Description |
| email | `null` | The email of the user whose password you want to change |
| password | `null` | The new password |
