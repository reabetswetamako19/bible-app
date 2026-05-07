const verseText = document.getElementById("verse-text");
const verseReference = document.getElementById("verse-reference");
const button = document.getElementById("new-verse-btn");
const toggle = document.getElementById("theme-toggle");
const dateDisplay = document.getElementById("current-date");
const searchInput = document.getElementById("verse-search");
const resultsDropdown = document.getElementById("search-results");


// FIXED: Changed "Proverbs 3:5:6" to "Proverbs 3:5-6"
const verses = [
    "John 3:16", "Jeremiah 29:11", "Philippians 4:13", "Psalm 23:1", "Romans 8:28", "Isaiah 41:10", "Proverbs 3:5-6", "Matthew 11:28", "Joshua 1:9", "Psalm 46:1",
    "Romans 12:2", "Hebrews 11:1", "1 Corinthians 13:4-7", "Psalm 119:105", "Matthew 6:33", "Galatians 5:22-23", "2 Timothy 1:7", "Psalm 34:8", "Isaiah 40:31", "Matthew 5:16",
    "Philippians 4:6-7", "Proverbs 18:10", "James 1:5", "Psalm 37:4", "John 14:6", "Ephesians 2:8-9", "Romans 15:13", "1 Peter 5:7", "Lamentations 3:22-23", "Psalm 139:14",
    "Matthew 7:7", "Hebrews 4:12", "Romans 10:9", "Proverbs 16:3", "Psalm 19:14", "1 John 4:19", "James 1:2-4", "Psalm 118:24", "Isaiah 26:3", "Colossians 3:23",
    "Matthew 28:19-20", "Romans 5:8", "Psalm 56:3", "Ephesians 4:32", "Proverbs 3:27", "Isaiah 43:2", "Psalm 107:1", "Hebrews 12:1-2", "Philippians 2:3", "John 15:13",
    "Genesis 1:1", "Isaiah 9:6", "Matthew 6:34", "Psalm 121:1-2", "Micah 6:8", "Romans 6:23", "1 Corinthians 10:13", "2 Corinthians 5:17", "Psalm 27:1", "Galatians 2:20",
    "Revelation 3:20", "John 16:33", "2 Timothy 3:16", "Psalm 145:18", "Colossians 3:17", "1 Peter 3:15", "James 4:7", "John 1:1", "Psalm 119:11", "Matthew 5:14",
    "Romans 12:12", "Hebrews 10:24-25", "Ephesians 6:10-11", "Proverbs 4:23", "Psalm 51:10", "Luke 6:31", "Philippians 4:19", "Isaiah 55:6", "1 John 1:9", "Psalm 32:8",
    "Matthew 19:26", "2 Chronicles 7:14", "Proverbs 22:6", "Ecclesiastes 3:1", "Jeremiah 33:3", "Zephaniah 3:17", "John 13:34", "1 Thessalonians 5:16-18", "Psalm 103:1-2", "Galatians 6:9",
    "1 Corinthians 16:14", "Hebrews 13:8", "Psalm 62:8", "2 Corinthians 12:9", "Ephesians 2:10", "James 5:16", "Luke 1:37", "Matthew 5:44", "John 14:27", "Psalm 37:5",
    "Romans 1:16", "Proverbs 15:1", "1 Corinthians 15:58", "Deuteronomy 31:6", "Isaiah 40:29", "Psalm 16:11", "Ephesians 5:1-2", "1 John 4:8", "John 8:32", "Colossians 3:14",
    "Matthew 18:20", "Romans 8:31", "Hebrews 13:5", "Psalm 138:8", "Proverbs 19:21", "Luke 11:9", "Philippians 1:6", "1 Peter 2:9", "Psalm 119:9", "Isaiah 12:2",
    "Romans 12:1", "Matthew 22:37-39", "John 11:25", "1 John 5:4", "Psalm 42:1", "Exodus 14:14", "Philippians 4:8", "1 Corinthians 10:31", "2 Peter 3:9", "James 1:12",
    "Psalm 143:10", "Matthew 6:21", "Acts 1:8", "Colossians 3:2", "Psalm 9:10", "Proverbs 27:17", "Luke 10:27", "Isaiah 41:13", "1 Peter 5:6", "2 Corinthians 9:7",
    "Hebrews 6:19", "Romans 8:37", "Psalm 119:165", "John 15:5", "Ephesians 4:2", "Matthew 5:3", "Psalm 25:5", "1 John 3:18", "Proverbs 17:17", "Isaiah 6:8",
    "Luke 18:27", "Matthew 7:12", "Romans 5:1", "1 Corinthians 2:9", "Psalm 63:1", "Hebrews 11:6", "Proverbs 10:9", "Psalm 116:1", "Colossians 2:6-7", "2 Timothy 1:9",
    "Isaiah 53:5", "Psalm 84:11", "John 14:15", "1 Peter 4:8", "Matthew 25:40", "Romans 15:13", "Philippians 2:14-15", "1 John 5:14-15", "Psalm 33:11", "Exodus 15:2",
    "Jeremiah 17:7", "Proverbs 3:9-10", "Matthew 4:4", "Hebrews 13:16", "Romans 14:17", "Psalm 55:22", "Ephesians 3:16-17", "1 Peter 1:13", "John 6:35", "Psalm 28:7",
    "Proverbs 14:1", "Isaiah 30:15", "Matthew 10:32", "Romans 10:17", "1 Corinthians 6:19-20", "Psalm 126:5", "Philippians 3:14", "1 John 2:17", "Exodus 20:3", "Luke 6:35",
    "Jeremiah 24:7", "Proverbs 11:2", "Matthew 6:14", "Hebrews 3:13", "Romans 8:38-39", "Psalm 37:23", "Isaiah 40:8", "1 Peter 3:12", "John 14:12", "Psalm 90:12",
    "Matthew 11:29", "1 Chronicles 16:11", "Proverbs 2:6", "Job 19:25", "Luke 1:49", "Acts 4:12", "Romans 12:15", "1 Corinthians 13:13", "Psalm 112:7", "Hebrews 12:28",
    "James 4:10", "1 John 4:10", "Matthew 16:24", "Romans 13:10", "Proverbs 29:25", "Isaiah 58:11", "Psalm 30:5", "Ephesians 3:20-21", "2 Corinthians 4:16", "1 Peter 2:24",
    "John 17:17", "Psalm 51:12", "Genesis 28:15", "Proverbs 21:3", "Matthew 7:13-14", "Romans 12:10", "1 Corinthians 15:57", "Colossians 4:2", "Psalm 34:18", "Hebrews 10:23",
    "1 John 1:7", "James 1:19", "John 1:12", "Exodus 33:14", "Proverbs 12:22", "Isaiah 1:18", "Psalm 18:2", "Romans 12:3", "1 Corinthians 9:24", "Philippians 4:7",
    "Psalm 147:3", "John 8:12", "Matthew 24:35", "Romans 11:33", "2 Corinthians 1:3-4", "1 Peter 1:3", "Proverbs 28:13", "Isaiah 54:10", "James 2:17", "Psalm 119:10",
    "John 4:24", "Hebrews 12:14", "Matthew 5:9", "Romans 12:11", "1 Corinthians 3:16", "Ephesians 4:26", "Psalm 40:1", "Proverbs 3:3", "Isaiah 57:15", "1 John 3:1",
    "Jeremiah 29:13", "Luke 12:34", "John 10:27-28", "Romans 13:8", "Psalm 100:3", "Proverbs 21:21", "Matthew 5:8", "Philippians 2:5", "Hebrews 4:16", "James 1:17",
    "1 John 4:16", "Psalm 136:1", "John 12:26", "Romans 12:18", "1 Corinthians 1:18", "Ephesians 5:20", "Proverbs 8:33", "Isaiah 61:1", "Luke 2:10-11", "John 15:12",
    "Psalm 46:10", "Romans 15:4", "Matthew 6:19-20", "Hebrews 13:15", "James 3:17", "1 Peter 5:10", "1 John 2:1", "Proverbs 18:24", "Isaiah 40:11", "Psalm 91:2",
    "John 3:17", "Romans 6:4", "1 Corinthians 13:1", "Ephesians 4:29", "Colossians 3:12", "Hebrews 11:3", "James 1:22", "1 Peter 1:8", "John 14:21", "Psalm 119:130",
    "Proverbs 13:20", "Isaiah 43:1", "Matthew 21:22", "Romans 12:16", "1 Corinthians 15:33", "Ephesians 1:7", "Hebrews 2:1", "James 4:17", "1 John 1:5", "Psalm 113:3",
    "John 16:24", "Romans 12:21", "Matthew 5:5", "Philippians 4:11", "Colossians 3:15", "Hebrews 6:10", "James 5:13", "1 Peter 4:10", "Psalm 1:2", "Proverbs 16:9",
    "Isaiah 55:11", "Matthew 7:24", "John 5:24", "Romans 10:13", "1 Corinthians 16:13", "Ephesians 2:8", "Hebrews 12:11", "James 1:27", "1 John 3:2", "Psalm 37:3",
    "Proverbs 4:7", "Isaiah 35:10", "Matthew 22:39", "John 11:40", "Romans 8:1", "1 Corinthians 15:10", "Ephesians 5:15-16", "Hebrews 13:2", "James 2:26", "1 John 5:12",
    "Psalm 115:1", "Proverbs 24:16", "Isaiah 44:22", "Matthew 25:21", "John 15:9", "Romans 12:9", "1 Corinthians 10:13", "Ephesians 6:18", "Hebrews 11:40", "James 1:6",
    "1 John 4:12", "Psalm 145:9", "Proverbs 15:3", "Isaiah 60:1", "Matthew 26:41", "John 17:3", "Romans 14:19", "1 Corinthians 12:27", "Ephesians 4:3", "Hebrews 7:25",
    "James 4:6", "1 John 5:21", "Psalm 119:1", "Proverbs 23:17", "Isaiah 14:24"
];


function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

function fetchVerse(reference, animate = false) {
    if (animate) verseText.classList.add("fade-out");

    // Using a cleaner API URL
   fetch(`https://bible-api.com/${encodeURIComponent(reference)}`)
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
            verseText.textContent = data.text.trim();
            verseReference.textContent = data.reference;
            verseText.classList.remove("fade-out");
        }, animate ? 400 : 0);
    })
    .catch(err => {
        console.error("API Error:", err);
        verseText.textContent = "Scripture is loading... Please check your internet connection.";
        verseReference.textContent = reference; // Still show the reference even if text fails
    });
}

function loadDailyVerse() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const index = dayOfYear % verses.length;
    
    updateDate();
    fetchVerse(verses[index], false);
}

// TOGGLE LOGIC
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.querySelector(".icon").textContent = isDark ? "☀️" : "🌙";
});

// RANDOM BUTTON
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    fetchVerse(verses[randomIndex], true);
});

// START
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.querySelector(".icon").textContent = "☀️";
}
loadDailyVerse();
// Search Logic
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    resultsDropdown.innerHTML = ""; 

    if (query.length < 2) return; 

    const filtered = verses.filter(v => v.toLowerCase().includes(query));

    filtered.forEach(verse => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.textContent = verse;
        div.onclick = () => {
            fetchVerse(verse, true);
            resultsDropdown.innerHTML = "";
            searchInput.value = "";
        };
        resultsDropdown.appendChild(div);
    });
});

// Close search if clicking outside
document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target)) resultsDropdown.innerHTML = "";
});
