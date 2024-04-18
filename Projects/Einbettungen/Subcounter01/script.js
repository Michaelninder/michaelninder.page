// YouTube API Key
const apiKey = 'YOUR_YOUTUBE_API_KEY';

// YouTube Channel ID
const channelId = 'YOUR_YOUTUBE_CHANNEL_ID';

// Fetch subscriber count
async function fetchSubscriberCount() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
        const data = await response.json();
        const subscriberCount = data.items[0].statistics.subscriberCount;
        document.getElementById('subscriber-count').textContent = subscriberCount + ' subscribers';
    } catch (error) {
        console.error('Error fetching subscriber count:', error);
        document.getElementById('subscriber-count').textContent = 'Error fetching subscriber count';
    }
}

// Initial fetch
fetchSubscriberCount();

// Update subscriber count every 30 seconds
setInterval(fetchSubscriberCount, 30000);
