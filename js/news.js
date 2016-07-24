var quotes = ["\"Man is still the most extraordinary computer of all.\" - John F. Kennedy",
"\"The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.\" - Ted Nelson",
"\"It's hardware that makes a machine fast. It's software that makes a fast machine slow.\" - Craig Bruce"];

var news_caption = "";
var news_caption_len = 0;

$(document).ready(function() {
    setInterval ('showNews()', 7000);
    newsEl = $('#news-caption');
    showNews();
});

function newsType() {
    newsEl.html(news_caption.substr(0, news_caption_len++));
    if (news_caption_len < news_caption.length + 1) {
        setTimeout('newsType()', 30);
    } else {
        news_caption_len = 0;
        news_caption = "";
    }
}

var quote_i = 0;
function showNews() {
    if (quote_i == 3) {
        quote_i = 0;
    }

    news_caption = quotes[quote_i++];
    newsType();
}