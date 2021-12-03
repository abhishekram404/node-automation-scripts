// a node script to move files from nested folders into a single root folder
const { promises: fs } = require("fs");
const path = require("path");
module.exports.moveFilesFromNestedFolder = async () => {
  try {
    const files = await fs.readdir(__dirname, { withFileTypes: true });
    const folders = await filterFolders(files);
    folders.forEach(async (folder) => {
      let files = await fs.readdir(path.join(__dirname, folder.name), {
        withFileTypes: true,
      });
      if (files.length < 1) {
        return;
      }
      files = await filterFiles(files);
      files.forEach(async (file) => {
        console.log(path.join(__dirname, folder.name, file.name));
        await fs.rename(
          path.join(__dirname, folder.name, file.name),
          path.join(__dirname, file.name)
        );
        console.log(file.name + "moved successfully.");
      });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.filterFolders = (
  dirents = fs.readdir(__dirname, { withFileTypes: true })
) => dirents.filter((dirent) => dirent.isDirectory());

module.exports.filterFiles = (
  dirents = fs.readdir(__dirname, { withFileTypes: true })
) => dirents.filter((dirent) => dirent.isFile());
