# My Resume in Web App Format

You can find the [latest build on the Github Releases](https://github.com/bbertrim/resume/releases/latest) page. Or you can visit the [Github Pages page](https://bbertrim.github.io/resume) where it is hosted.

The purpose for this project is to move away from my previous Resume format which was a PDF generated from an Adobe Photoshop project. The reasoning for the switch is below:

1. A Adobe Creative Cloud License is expensive!
2. Although the document produced was accurate there were several issues with it:
    - It was a very large file size.
    - Each page was its own layer and they had to be combined manually in Acrobat.
    - There were, at times, issues with fonts not rendering correctly when exported as a PDF.
3. As a standalone web page/app the file is much smaller and allows device targeting.
    - Web experience can be made better and more appealing as well as to show off my we development skills.
    - Having print styles allows for a PDF to be generated that is suited for the print medium.
    - A decent mobile experience can be crafted.
    - I can use this as vector to play around with new technologies.

# Tools and Applications Used

| Tool/App | Description |
| ---- | ----------- |
| [Visual Studio Code](https://code.visualstudio.com/) | My IDE of choice for Frontend Development |
| [Inkscape](https://inkscape.org/) | Vector Graphics |
| [SVG 2 JSX](https://svg2jsx.com/) | A Tool for cleaning up svg xml so that it can be used in JSX |

# Tech Stack

- React
- HTML
- SCSS

# Build

The build process is simple. Lean on react-scripts to build a final website then use a Gulp build script to combine all files into a single html source file.

## Build Steps

```bash
npm run build # Outputs standard production react build
npx gulp      # Takes the production build and combines it all into the index.html file
```

## CI/CD

There are two Github actions that drive the CI/CD pipeline

### Release (On merges to main):

- Builds a release build
- Creates an tags a new Release in Github
- Generates a PDF based on the build
- Pushes the built artifacts (PDF and HTML file) to the created release.
- Deploys the built page to Github pages

### Back-merge (On merges to main):

- Creates a back-merge PR automatically so I don't have to

# Roadmap

- Store fonts within the generated `index.html` file via data URLs
- Fix issue with Safari PDF export (Safari has a hard coded 2cm margin which causes every other page to be blank when printing)
- Improve scrolling effects an employ other effects such as parallax and translation transitions instead of just opacity
- Add navigatable subsections for web view with additional information such as accomplishments and more detailed information around each section
- Improve the visuals for the Print bubble
- Figure out a better way to import svg files that will embed them in the built html file automatically rather then adding the SVG XML directly to the react components.
