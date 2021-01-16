import generatePDF from "./generate/pdf";
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

const isDirectory = source => lstatSync(source).isDirectory()

const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const defaultOptions = {
  website: true,
  primary: true,
  debug: true,
  printOptions: {
    displayHeaderFooter: false,
  },
};

const meta = {
  name: "Max Clayton Clowes",
  description: "Product Manager with diverse software engineering and design background, and experience as a founder of a client-facing business. Have been delivering websites and apps for 10+ years. Duke of York Young Entrepreneur Award winner 2017.",
  previewImage: "https://portfolio.mcclowes.com/preview.png",
  previewImageText: "Max Clayton Clowes Portfolio",
  url: "https://portfolio.mcclowes.com/",
  twitterUsername: "@mcclowes",
}

const createPortfolio = () => {
  const options = {
    meta,
    ...defaultOptions
  }

  const destination = `./mcclowes_portfolio.pdf`

  const directories = getDirectories('./src/projects')

  generatePDF(directories, destination, options);
};

createPortfolio()