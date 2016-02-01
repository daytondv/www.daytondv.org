# Dayton Data Visualization Meetup Website

This is the repository for the Dayton Data Visualization meetup website at
http://www.daytondv.com
We would love for you to join us! Become a member of our group at the
meetup.com website http://www.meetup.com/daytondv and come to our next event.

## Contributing
We need help with this site. See the current open issues list at
https://github.com/bowmanmc/www.daytondv.com/issues
It takes a lot to build and run a site like this, but hopefully by enlisting the
community, we can make a valuable resource for the Dayton (and beyond)
Data Visualization community. We need help with HTML & CSS development, site
layout and design, content writing and editing, and tutorial creation.

For some issues, such as editing or writing content, you can submit pull requests
directly through the GitHub interface. For edits, navigate to the file you want
to change through the GitHub.com website
https://github.com/bowmanmc/www.daytondv.com/tree/master/src
and click the pencil button in the toolbar. For new files, navigate to the
*folder* where you want the file to go, and click the "New File" button in the
toolbar. These edits will then go to the site organizers, who will review your
changes and either accept them into the project or get back to you with
comments.

For other issues, you'll have to get the code running locally. This site is
built using
[node.js](http://nodejs.org)
and
[jekyll](https://jekyllrb.com/)
, which means you'll have to have these tools installed
(along with their dependencies) first.

### Node.js
Go to http://nodejs.org and follow their instructions to get node running on
your machine. This site was built with nodejs version 4.1.1, so you may need
to upgrade your installation or use a version manager such as
[n](https://github.com/tj/n) You can check which version of node.js you are
running by opening a terminal or console window and typing
`node --version`


### Jekyll
Jekyll is a static site generator that helps us keep our content and HTML
organized into components that can be compiled into a site we can publish.
Jekyll is written in ruby, so the first step is to go to
https://www.ruby-lang.org/en/ and follow the instructions there for your
system. The version of ruby on my machine is 2.2.1. You can check which version
of ruby you are running by opening a terminal or console window and typing
`ruby --version`

Once ruby is installed, you can install jekyll by executing the following
command
`gem install jekyll`
This will install the latest stable version of jekyll onto your machine.
I am running version 3.0.1. You can
check which version of jekyll you are running by opening a terminal or console
window and typing
`jekyll --version`

### Developing
Though this site is using jekyll to merge our resources into a static site,
we will be using npm (a node.js component) to run everything. Open a
terminal or console window and navigate to the directory where you checked
out this repository to. The first step is to install the development libraries
used by node. Execute `npm install` to download and install the dependencies
listed in the package.json file. This should take a minute and will download
and install a bunch of libraries into a folder named node_modules. If this
command gets interrupted or fails, delete the node_modules directory and try
again.

Once the `npm install` command is complete, execute `npm start`. This command
starts a browser sync session on port 9000 and will watch the src directory
for changes. Once you change a file, it will use jekyll to rebuild the site
and reload your browser for you. You should now be able to see the site by
opening a browser and navigating to http://localhost:9000.

### Pull Requests
Once you fix an issue or have a change to make, you'll need to submit a pull
request to the organizers for review. You can do this by forking the
[www.daytondv.com](https://github.com/bowmanmc/www.daytondv.com)
repository into your own account, making your changes,
and then by clicking the "New Pull Request" button on GitHub. If this is done
correctly, you should see it show up in our list of open pull requests at
https://github.com/bowmanmc/www.daytondv.com/pulls
