# _Mr. Roberger's Neighborhood_

#### _Takes an inputted number and returns a range counting up to that number_ **04/03/2020**

#### By: _**Joshua Hellman**_

## Description

_This is a program that takes in an number inputted by a user and counts up to that number but mutates the output of certain numbers based on the specs listed bellow_

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**

```sh
cd desktop
```

Mac & linux

```sh
cd ~/Desktop
```

3.  in terminal type '_git clone {link to repository}_ '

```sh
git clone {link to repository}
```

4. navigate to the new folder that was created on your desk
5. select index.html
6. right click on the file and select _'open with'_
7. select your browser
8. enjoy this project


## Specs


### Behavior Driven Development Spec List

|                          Behavoir                          |       Input        |       Output       |
| :--------------------------------------------------------: | :----------------: | :----------------: |
|    The program will take an inputted number from a user and return a range counting up to that number    |     '4'     |      '0, 1, 2, 3, 4'       |
| The program will replace all numbers containing a 1 with "Beep" | '1' | '0, Beep' |
| The program will replace all numbers containing a 2 with "Boop" | '2' | '0, Beep, Boop' |
| The program will replace all numbers containing a 1 with "Beep" | '3' | '0, Beep, Boop, Won't you be my neighbor?' |

- _These rules are written in order of precedence_
  - 12 returns "Boop"
  - 23 returns "Won't you be my neighbor"


## Support

_The software is provided as is. It might work as expected - or not. Just don't blame me._

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
- [jQuery](https://jquery.com/) - Used to interact with the DOM
- [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
