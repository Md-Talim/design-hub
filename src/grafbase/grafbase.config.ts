import { g, auth, config } from '@grafbase/sdk';

const User = g.model('User', {
  avatarUrl: g.url(),
  description: g.string().optional(),
  email: g.string().unique(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  name: g.string().length({ min: 2, max: 20 }),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model('Project', {
  category: g.string().search(),
  createdBy: g.relation(() => User),
  description: g.string(),
  githubUrl: g.url(),
  image: g.url(),
  liveSiteUrl: g.url(),
  title: g.string().length({ min: 4 }),
});

export default config({
  schema: g,
});
