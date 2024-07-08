document.addEventListener("DOMContentLoaded", function() {
    function addArticlesMain() {
        const articlesSection = document.querySelector(".articles1");
        const articlesContent = [
            {
                title: "Welcome to the Ham Radio Nexus",
                content: "Welcome to Ham Radio Nerxus, your ultimate resource for everything related to HAM radio! Whether you are a seasoned operator or a curious newcomer, our website is designed to provide valuable information, helpful tutorials, and engaging community events that cater to all your HAM radio needs."
            },
            {
                title: "Why HAM Radio?",
                content: "HAM radio, also known as amateur radio, is more than just a hobby—it is a way to connect with people around the world, learn about technology, and provide crucial communication during emergencies. With a rich history and a vibrant community, HAM radio offers endless opportunities for learning and growth. Whether you’re interested in talking to astronauts aboard the International Space Station, experimenting with cutting-edge technology, or simply making new friends, HAM radio has something for everyone."
            }
        ];

        articlesContent.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.classList.add("article");

            const titleElement = document.createElement("h1");
            titleElement.textContent = article.title;
            articleElement.appendChild(titleElement);

            const contentElement = document.createElement("p");
            contentElement.textContent = article.content;
            articleElement.appendChild(contentElement);

            articlesSection.appendChild(articleElement);
        });
    }
    // Call the function to add articles
    addArticlesMain();
});