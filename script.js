document.addEventListener('DOMContentLoaded', function() {
    // 音乐数据 - 修改为你自己的文件路径！
    const musicData = [
        {
            title: "Song F",
            cover: "D:\HuaweiMoveData\Users\华为14\Desktop\riverheartz\images\1680619956753.png",  // 本地图片路径
            audio: "D:\HuaweiMoveData\Users\华为14\Desktop\riverheartz\audio\song1.mp3",   // 本地音频路径
            description: "让我带走这里火红的舞蹈"
        },
        {
            title: "日落大道",
            cover: "D:\HuaweiMoveData\Users\华为14\Desktop\riverheartz\images\1681308559617.png",
            audio: "D:\HuaweiMoveData\Users\华为14\Desktop\riverheartz\audio\song2.mp3",
            description: "晚风吹过金色沙滩海边的晚宴"
        }
        // 添加更多歌曲...
    ];

    const musicGrid = document.getElementById('musicGrid');
    const audioPlayer = document.getElementById('audioPlayer');

    // 动态加载音乐项目
    musicData.forEach(song => {
        const item = document.createElement('div');
        item.className = 'music-item';
        item.innerHTML = `
            <div class="album-cover" style="background-image: url('${song.cover}')"></div>
            <div class="song-title">${song.title}</div>
        `;
        
        // 点击播放
        item.addEventListener('click', () => {
            audioPlayer.src = song.audio;
            audioPlayer.play();
        });
        
        // 悬停显示描述
        item.addEventListener('mouseover', () => {
            item.setAttribute('title', song.description);
        });
        
        musicGrid.appendChild(item);
    });

    // 创建下落音符动画
    function createNote() {
        const note = document.createElement('div');
        note.className = 'note';
        note.innerHTML = '<i class="fas fa-music"></i>';
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(note);
        
        setTimeout(() => {
            note.remove();
        }, 5000);
    }

    setInterval(createNote, 300);
});