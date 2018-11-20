import praw
import csv

reddit = praw.Reddit(client_id='RkWGlCIjkTPhUQ',
                     client_secret='uMcdfncu3Cgws--K_65J5KDgiT0',
                     user_agent='my user agent')


# /r/music scrape
# ---------------------------------------------------------

rMusic = []

for submission in reddit.subreddit('music').top('day'):
    if submission.link_flair_text == 'music streaming':
        rMusic.append(submission.title)
    
# print '\n'.join(rMusic)

with open("rMusicData.csv", "w") as f:
    wr = csv.writer(f, delimiter="\n")
    rMusic = [text.encode("utf8") for text in rMusic]
    wr.writerow(rMusic)

# ---------------------------------------------------------
