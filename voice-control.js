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

// 在页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    initSpeechRecognition();
}); 