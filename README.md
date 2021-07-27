# My Resume in Web App Format

The purpose for this project is to move away from my previous Resume format which was a PDF generated from an Adobe Photoshop project. The reasoning for the switch is below:

1. A Photoshop License is expensive!
2. Although the document produced was accurate there were several issues with it:
  - It was a very large file size.
  - Each page was its own layer and they had to be combined manually in Acrobat.
  - There were, at times, issues with fonts not rendering correctly when exported as a PDF.
3. As a stand along web page/app the file is much smaller and allows device targeting.
  - Web experience can be made better and more appealing as well as to show off my we development skills.
  - Having print styles allows for a PDF to be generated that is suited for the print medium.
  - A decent mobile experience can be crafted.
  - I can use this as an excuse to play around with new technologies.

# Tech Stack

## UX
- React
- HTML
- SCSS

## Build
- react-scripts
- gulp

## Build Steps

```bash
npm run build # Outputs standard production react build
npx gulp      # Takes the production build and combines it all into the index.html file
```

# Roadmap

- Improve the Web UX to be more then a copy of the original print resume
- Add a mobile view
- Store fonts within the generated `index.html` file