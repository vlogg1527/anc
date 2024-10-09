//script.js
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load the Socket.io client library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.js';
    script.onload = initializeSocket;
    document.head.appendChild(script);

    function initializeSocket() {
        const socket = io('https://api-037.ruk-av.com');

        // Create a container for the stats
        const statsContainer = document.createElement('div');
        statsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        statsContainer.style.color = 'white';
        statsContainer.style.padding = '10px';
        statsContainer.style.fontFamily = 'Arial, sans-serif';
        statsContainer.style.fontSize = '14px';
        statsContainer.style.borderRadius = '5px';
        statsContainer.style.textAlign = 'right';
        statsContainer.style.position = 'absolute';
        statsContainer.style.right = '10px';
        statsContainer.style.top = '10px';
        statsContainer.style.zIndex = '1000';

        statsContainer.innerHTML = `
            <div>
                <div class="Icon-icon--ZWJkO Icon-size-md--YTY5O" style="display: inline-flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" style="margin-right: 5px;">
                        <path fill="#FFFFFF" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                    </svg>
                    <span id="visitorCount">0</span>
                </div>
            </div>
        `;

        document.body.appendChild(statsContainer);

        // Listen for updates from the server
        socket.on('updateStats', (stats) => {
            document.getElementById('visitorCount').textContent = stats.active.toLocaleString();
        });
    }
});
