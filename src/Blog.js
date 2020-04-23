import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '/technology'},
  { title: 'Business', url: '/business' },
  { title: 'Science', url: '/science' },
  { title: 'Health', url: '/health' },
  { title: 'Travel', url: './travel' }
];

const mainFeaturedPost = {
  title: 'Trending Now',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
  url: '/posts/trending',
};

const featuredPosts = [
  {
    title: 'Featured Post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'Continue reading…',
    url: '/posts/featured/1'
  },
  {
    title: 'Featured Post',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'Continue reading…',
    url: '/posts/featured/1'
  },
];

const sidebar = {
  title: 'About Me',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum metus turpis, in finibus urna convallis nec. Phasellus et risus nunc. Donec porttitor commodo massa non tempor.',
 archives: [
    { title: 'May 2020', url: '/posts/archives/2020/may' },
    { title: 'April 2020', url: '/posts/archives/2020/apr' },
     { title: 'March 2020', url: '/posts/archives/2020/mar' },
    { title: 'February 2020', url: '/posts/archives/2020/feb' },
    { title: 'January 2020', url: '/posts/archives/2020/jan' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon , url: 'https://github.com/kjain0073'},
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/kritik-jain-473119174/' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/kritik.jain.338?ref=bookmarks' },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Welcome to My Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Come Visit Again !" description="Made by Kritik Jain" />
    </React.Fragment>
  );
}
