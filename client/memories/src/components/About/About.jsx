

import { Typography } from "@mui/material";
import useStyles from "./style";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Typography className={classes.heading} variant="h4" gutterBottom>
        About Memories App
      </Typography>

      <Typography variant="h6" paragraph>
        Capture, Cherish, Relive.
      </Typography>

      <Typography variant="body1" paragraph>
        The Memories app is your personal digital scrapbook, designed to help you preserve the moments that matter most. Whether it&apos;s a snapshot of a family reunion, a video from a vacation, or a note from a special day, Memories lets you collect and organize your life&apos;s most cherished experiences in one place.
      </Typography>

      <Typography variant="body1" paragraph>
        With a simple, intuitive interface, you can:
      </Typography>

      <ul>
        <li>Create Memory Albums: Categorize your photos, videos, and notes by event or theme.</li>
        <li>Add Personal Touches: Include captions, dates, locations, and even voice recordings to make every memory come alive.</li>
        <li>Safely Store & Share: Keep your memories secure with cloud storage, and easily share them with loved ones or on social media.</li>
        <li>Relive Your Past: Take a walk down memory lane with features that let you revisit old memories, create montages, or get nostalgic with annual highlights.</li>
      </ul>

      <Typography variant="body1" paragraph>
        From everyday moments to once-in-a-lifetime experiences, Memories ensures that nothing gets lost in the shuffle. Whether you&apos;re looking to hold on to the present or relive the past, the Memories app makes it easy to preserve your life&apos;s journey, one moment at a time.
      </Typography>
    </div>
  );
}

export default About;

