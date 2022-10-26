const plateau = {
    x: 5,
    y: 5
}
const commands = "FFRFLFLF";

const solution = (plateau, commands) => {
    const plateauX = plateau.x;
    const plateauY = plateau.y;

    const robot = {
        x: 1,
        y: 1,
        direction: "NORTH"
    }

    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

    const move = (command) => {
        switch (command) {
            case "L":
                turnLeft();
                break;
            case "R":
                turnRight();
                break;
            case "F":
                moveForward();
                break;
            default:
                break;
        }
    }

    const turnLeft = () => {
        const index = directions.indexOf(robot.direction);
        if (index === 0) {
            robot.direction = directions[directions.length - 1];
        } else {
            robot.direction = directions[index - 1];
        }
    }

    const turnRight = () => {
        const index = directions.indexOf(robot.direction);
        if (index === directions.length - 1) {
            robot.direction = directions[0];
        } else {
            robot.direction = directions[index + 1];
        }
    }

    const moveForward = () => {
        switch (robot.direction) {
            case "NORTH":
                if (robot.y < plateauY) {
                    robot.y++;
                }
                break;
            case "EAST":
                if (robot.x < plateauX) {
                    robot.x++;
                }
                break;
            case "SOUTH":
                if (robot.y > 1) {
                    robot.y--;
                }
                break;
            case "WEST":
                if (robot.x > 1) {
                    robot.x--;
                }
                break;
            default:
                break;
        }
    }


    for (let i = 0; i < commands.length; i++) {
        move(commands[i]);
    }


    return `${robot.x},${robot.y},${robot.direction}`;
}


console.log(solution(plateau, commands));