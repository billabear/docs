---
title: Give User Role
sidebar_label: Give User Role
sidebar_position: 20
---
This command is a helper for user administration. Sometimes it's needed to manually give a user a role. For example, a developer needs to up their access.


## How it works

If an email and role are given in the command arguments then it'll just instantly change the password. If one of these is missing it will provide a prompt to provide this information.

## How to run

The following command can be used to execute the command.

`bin/console parthenon:user:give-role`

or 

`bin/console parthenon:user:give-role <email> <role>`

## Options

| Name | Default | Description |
| email | `null` | The email of the user whose password you want to change |
| role | `null` | The new role |
