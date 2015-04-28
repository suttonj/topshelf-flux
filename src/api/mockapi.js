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
              "title": "Atlas Shrugged by Ayn Rand"
            },
            {
              "title": "Moby Dick by Herman Melville"
            },
            {
              "title": "1984 by George Orwell"
            },
            {
              "title": "The Innovator's Dilemma by Clayton M. Christensen"
            },
            {
              "title": "Be here now by Ram Dass"
            },
            {
              "title": "Zen Mind, Beginner's Mind by Shunryu Suzuki"
            },
            {
              "title": "The Autobiography of Yogi by Paramahansa Yogananda"
            },
            {
              "title": "Diet for a Small Planet by Frances Moore Lappe"
            },
            {
              "title": "Inside the Tornado by Geoffrey A. Moore"
            },
            {
              "title": "Cutting Through Spiritual Materialism by Chogyam Trungpa"
            },
            {
              "title": "Only the Paranoid Survive by Andrew S. Grove"
            }
          ]
        }
      }
    ));
  }
};