document.addEventListener("DOMContentLoaded", function() {
    let socket;

    document.addEventListener("DOMContentLoaded", function() {
    socket = new WebSocket('wss://example.com/socket');

    socket.addEventListener('open', function(event) {
        console.log('WebSocket is open now.');
    });

    socket.addEventListener('message', function(event) {
        console.log('Message from server ', event.data);
    });

    socket.addEventListener('close', function(event) {
        console.log('WebSocket is closed now.');
    });

    socket.addEventListener('error', function(error) {
        console.log('WebSocket error: ', error);
    });
});

// Close WebSocket connection before the page is unloaded
window.addEventListener('beforeunload', function() {
    if (socket) {
        socket.close();
    }
});
    
    // JavaScript to handle dynamic elements
    // Function to add articles dynamically
    function addArticles() {
        const articlesSection = document.querySelector(".articles");
        const articlesContent = [
            {
                "title": "Getting Started with HAM Radio",
                "content": "Getting started with HAM radio is an exciting journey into the world of amateur radio communications. As a HAM radio operator, you gain the ability to communicate with others across town, across the country, or even around the globe, all without the need for traditional communication infrastructures. The first step in this adventure is obtaining your HAM radio license, which involves studying for and passing an exam that covers basic electronic principles, operating procedures, and regulations. There are three levels of licenses in the United States: Technician, General, and Amateur Extra, each granting increasing levels of operating privileges. Once licensed, you will need to acquire the right equipment, which typically includes a transceiver (a combined transmitter and receiver), an antenna, and various accessories to optimize your setup. Many beginners start with a handheld transceiver, often called an HT, which is portable and relatively inexpensive. Joining a local HAM radio club can provide invaluable support and resources, as these communities are full of experienced operators eager to help newcomers. By diving into HAM radio, you not only develop technical skills but also join a global community of enthusiasts who use their knowledge and equipment for everything from emergency communications to experimenting with cutting-edge technology."
            },
            {
                title: "Essential Equipment",
                image: "images/equipment.avif",
                alt: "Essential Equipment",
                content: "Getting started with HAM radio requires some essential equipment to begin your journey into the world of amateur radio communications. The cornerstone of any HAM radio setup is the transceiver, a device that both transmits and receives radio signals. For beginners, a handheld transceiver (HT) is often the best choice due to its portability and ease of use. These devices are relatively affordable and provide a great way to learn the basics of radio communication. As you progress, you might consider investing in a more powerful base station transceiver, which offers greater range and capabilities. Alongside the transceiver, an efficient antenna is crucial for clear and effective communication. Different antennas serve various purposes, from simple whip antennas for handheld devices to more complex beam antennas for long-distance communication. In addition to the transceiver and antenna, other accessories can enhance your HAM radio experience. A power supply is essential for base station transceivers, as they require a stable and reliable source of power. For mobile operations, a car battery or a dedicated portable power source can be useful. An SWR (Standing Wave Ratio) meter is another important tool, helping you to fine-tune your antenna for optimal performance and reduce signal loss. Don’t forget about essential safety gear, such as grounding equipment to protect against electrical surges. With the right equipment, you will be well-equipped to explore the vast and exciting world of HAM radio."
            },
            {
                title: "Licensing Process",
                image: "images/licensing.avif",
                alt: "Licensing Process",
                content: "The licensing process is a crucial step in becoming a HAM radio operator, as it grants you the legal authority to transmit on amateur radio frequencies. In the United States, there are three levels of HAM radio licenses: Technician, General, and Amateur Extra. Each level requires passing an exam that tests your knowledge of radio theory, regulations, and operating practices. The Technician license is the entry-level certification and covers basic radio concepts and operating procedures. It allows you to operate on VHF and UHF frequencies, which are ideal for local communications. As you gain experience, you can pursue the General and Amateur Extra licenses, which grant access to more frequencies and advanced operating privileges. Preparing for the licensing exams involves studying the relevant materials and taking practice tests to ensure you understand the concepts and regulations. Many resources are available to help you, including online courses, study guides, and local HAM radio clubs that offer classes and mentoring. Once you feel ready, you can register for an exam session through the American Radio Relay League (ARRL) or another authorized Volunteer Examiner Coordinator (VEC). The exams are typically administered by volunteer examiners who are experienced HAM radio operators. Passing the exam not only grants you a license but also opens the door to a vibrant community of amateur radio enthusiasts and a wealth of opportunities for exploration and communication."
            }
        ];

        articlesContent.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.classList.add("article");

            const titleElement = document.createElement("h2");
            titleElement.textContent = article.title;
            articleElement.appendChild(titleElement);

            if (article.image) {
                const imageElement = document.createElement("img");
                imageElement.src = article.image;
                imageElement.alt = article.alt;
                articleElement.appendChild(imageElement);
            }

            const contentElement = document.createElement("p");
            contentElement.textContent = article.content;
            articleElement.appendChild(contentElement);

            articlesSection.appendChild(articleElement);
        });

        // Reapply search functionality to newly added articles
        const searchButton = document.querySelector("#search-button");
        const searchInput = document.querySelector("#search-input");
        const articles = document.querySelectorAll(".article");

        searchButton.addEventListener("click", function() {
            const query = searchInput.value.toLowerCase();
            articles.forEach(article => {
                if (article.textContent.toLowerCase().includes(query)) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        });
    }
    // Call the function to add articles
    addArticles();
});
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