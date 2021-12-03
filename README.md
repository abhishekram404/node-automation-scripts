# node-automation-scripts
A repository of scripts for automation of personal tasks using Node JS. 

## Scripts
### moveFilesFromNestedFolder.js 
A NodeJS script to move multiple files from nested folders into a single root folder.

#### Before
```
root
|   pre-existingFile.txt
|   someOtherFile.txt
|
|---folder1
|   |   file11.txt
|   |   file12.txt
|
|
|---folder2
|   |   file21.txt
|   |   file22.txt
|

```

#### After
```
root
|   pre-existingFile.txt
|   someOtherFile.txt
|   file11.txt
|   file12.txt
|   file21.txt
|   file22.txt
|
|---folder1
|   |   
|   |   
|
|---folder2
|   |   
|   |   
|

```
