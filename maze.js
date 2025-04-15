// 迷宫相关变量
let maze = [];
let path = [];
let catPosition = [1, 1];
const mazeSize = 11;
let isMoving = false;
let moveTimeout = null;

// 语音识别相关变量
let recognition = null;
let isListening = false;

// 初始化语音识别
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'zh-CN';

        recognition.onresult = function(event) {
            const last = event.results.length - 1;
            const command = event.results[last][0].transcript.trim().toLowerCase();
            console.log('识别到的命令:', command);

            if (command.includes('上') || command.includes('前')) {
                moveCat('up');
            } else if (command.includes('下') || command.includes('后')) {
                moveCat('down');
            } else if (command.includes('左')) {
                moveCat('left');
            } else if (command.includes('右')) {
                moveCat('right');
            }
        };

        recognition.onend = function() {
            if (isListening) {
                recognition.start();
            }
        };

        recognition.onerror = function(event) {
            console.error('语音识别错误:', event.error);
            stopVoiceControl();
        };
    }
}

// 切换语音控制
function toggleVoiceControl() {
    const voiceButton = document.getElementById('voiceControl');
    
    if (!recognition) {
        initSpeechRecognition();
    }

    if (!isListening) {
        try {
            recognition.start();
            isListening = true;
            voiceButton.textContent = '停止语音控制';
            voiceButton.classList.add('listening');
            document.getElementById('mazeInfo').textContent = '请说"上、下、左、右"来控制小猫移动';
        } catch (error) {
            console.error('启动语音识别失败:', error);
        }
    } else {
        stopVoiceControl();
    }
}

// 停止语音控制
function stopVoiceControl() {
    if (recognition) {
        recognition.stop();
    }
    isListening = false;
    const voiceButton = document.getElementById('voiceControl');
    voiceButton.textContent = '开始语音控制';
    voiceButton.classList.remove('listening');
    document.getElementById('mazeInfo').textContent = '使用方向键或语音控制小猫移动！';
}

// 生成迷宫
function generateMaze() {
    console.log('开始生成迷宫...');
    maze = [];
    path = [];
    
    // 初始化迷宫
    for (let i = 0; i < mazeSize; i++) {
        maze[i] = [];
        for (let j = 0; j < mazeSize; j++) {
            maze[i][j] = 1;
        }
    }

    function carve(x, y) {
        maze[x][y] = 0;
        const directions = [[0, 2], [2, 0], [0, -2], [-2, 0]];
        
        for (let i = directions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [directions[i], directions[j]] = [directions[j], directions[i]];
        }
        
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX > 0 && newX < mazeSize - 1 && newY > 0 && newY < mazeSize - 1 && maze[newX][newY] === 1) {
                maze[x + dx/2][y + dy/2] = 0;
                carve(newX, newY);
            }
        }
    }

    carve(1, 1);
    maze[1][1] = 2;
    maze[mazeSize-2][mazeSize-2] = 3;
    catPosition = [1, 1];
    displayMaze();
}

// 显示迷宫
function displayMaze() {
    const mazeElement = document.getElementById('maze');
    mazeElement.style.gridTemplateColumns = `repeat(${mazeSize}, 1fr)`;
    mazeElement.innerHTML = '';
    
    for (let i = 0; i < mazeSize; i++) {
        for (let j = 0; j < mazeSize; j++) {
            const cell = document.createElement('div');
            cell.className = 'maze-cell';
            
            if (maze[i][j] === 1) {
                cell.classList.add('wall');
            } else if (maze[i][j] === 2) {
                cell.classList.add('start');
            } else if (maze[i][j] === 3) {
                cell.classList.add('end');
            }
            
            if (i === catPosition[0] && j === catPosition[1]) {
                cell.classList.add('cat');
            }
            
            mazeElement.appendChild(cell);
        }
    }
}

// 移动小猫
function moveCat(direction) {
    if (isMoving) return;
    
    const [x, y] = catPosition;
    let newX = x;
    let newY = y;
    
    switch(direction) {
        case 'up': newX--; break;
        case 'down': newX++; break;
        case 'left': newY--; break;
        case 'right': newY++; break;
    }
    
    if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize && maze[newX][newY] !== 1) {
        isMoving = true;
        catPosition = [newX, newY];
        displayMaze();
        
        if (maze[newX][newY] === 3) {
            celebrateSuccess();
        }
        
        setTimeout(() => {
            isMoving = false;
        }, 300);
    }
}

// 庆祝成功
function celebrateSuccess() {
    alert('恭喜你！小猫成功到达终点！');
    generateMaze();
}

// 在页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    initSpeechRecognition();
    generateMaze();
    
    // 添加键盘控制
    document.addEventListener('keydown', (e) => {
        if (e.key.startsWith('Arrow')) {
            switch(e.key) {
                case 'ArrowUp': moveCat('up'); break;
                case 'ArrowDown': moveCat('down'); break;
                case 'ArrowLeft': moveCat('left'); break;
                case 'ArrowRight': moveCat('right'); break;
            }
        }
    });
}); 