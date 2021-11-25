import { hasLen } from './dataChecker';

const readFile = (file) => {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onload = (evt) => {
      const text = evt.target.result;
      if (text) resolve(text.split(','));
    };
    fileReader.onerror = reject;
    fileReader.readAsText(file);
  });
};

const csvToArrayAsync = async (files = []) => {
  const promises = [];

  if (hasLen(files)) {
    for (let fileCount = 0; fileCount < files.length; fileCount++) promises.push(readFile(files[fileCount]));
  }

  return Promise.all(promises).then((values) => [].concat(...values));
};

export default csvToArrayAsync;
