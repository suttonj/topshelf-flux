export default {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('booklist', JSON.stringify(
      {
        "name": "Steve Jobs",
        "count": 11,
        "frequency": "Manual Crawl",
        "version": 1,
        "newdata": true,
        "lastrunstatus": "success",
        "thisversionstatus": "success",
        "thisversionrun": "Wed Apr 22 2015 03:10:42 GMT+0000 (UTC)",
        "results": {
          "list": [
            {
              "id": "0",
              "title": "Atlas Shrugged by Ayn Rand"
            },
            {
              "id": "1",
              "title": "Moby Dick by Herman Melville"
            },
            {
              "id": "2",
              "title": "1984 by George Orwell"
            },
            {
              "id": "3",
              "title": "The Innovator's Dilemma by Clayton M. Christensen"
            },
            {
              "id": "4",
              "title": "Be here now by Ram Dass"
            },
            {
              "id": "5",
              "title": "Zen Mind, Beginner's Mind by Shunryu Suzuki"
            },
            {
              "id": "6",
              "title": "The Autobiography of Yogi by Paramahansa Yogananda"
            },
            {
              "id": "7",
              "title": "Diet for a Small Planet by Frances Moore Lappe"
            },
            {
              "id": "8",
              "title": "Inside the Tornado by Geoffrey A. Moore"
            },
            {
              "id": "9",
              "title": "Cutting Through Spiritual Materialism by Chogyam Trungpa"
            },
            {
              "id": "10",
              "title": "Only the Paranoid Survive by Andrew S. Grove"
            }
          ]
        }
      }
    ));
  }
};