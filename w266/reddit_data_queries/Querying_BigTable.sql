// Original query:

SELECT * FROM [fh-bigquery:reddit_posts.2017_12] where subreddit = 'The_Donald'

// Needed to create a dataset in order to download 
//
// Querying the dataset:

SELECT * FROM [w266_final_politics_reddit.results_20180310_180017] // give better name

// Then exported to Google Cloud Storage
//
// Created a Bucket: w266_final_politics_reddit

// May need to replace newlines

SELECT REPLACE(selftext, "\n", " ") FROM ...

// Then export to table: w266_final_politics_reddit/name.csv

// 1)

SELECT REPLACE(selftext, "\n", " ") 
FROM [fh-bigquery:reddit_posts.full_corpus_201512] 
where subreddit = 'SandersForPresident' and selftext != '' 
