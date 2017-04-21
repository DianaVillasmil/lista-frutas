# lista-frutas
*Se creo la carpeta leccion-13/dentro de esta se creo la carpeta assets y el documento *index.html
*Dentro de la carpeta assest se creo la carpeta js
*Dentro de la carpeta js se encuentra el archivo javascript.js 

*Se creo un repositorio
*Se subio el proyecto
Aca los comandos de la terminal

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13
$ git init
Initialized empty Git repository in C:/Users/Diana/Desktop/leccion-13/.git/

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git add .

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git commit -m "Primer commit"
[master (root-commit) 51f0590] Primer commit
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 assets/js/javascript.js
 create mode 100644 index.html

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git remote add origin https://github.com/DianaVillasmil/lista-frutas.git

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git push -u origin master
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (5/5), 342 bytes | 0 bytes/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/DianaVillasmil/lista-frutas.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)

*Se prosiguio a la realizacion del codigo en los documentos html y js.
*Al culminar continuamos en la terminal para pushear el codigo

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git pull origin master
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/DianaVillasmil/lista-frutas
 * branch            master     -> FETCH_HEAD
   51f0590..0d86339  master     -> origin/master
Updating 51f0590..0d86339
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git add .

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git commit -m "Ya funciona"
[master 746996d] Ya funciona
 3 files changed, 37 insertions(+)
 create mode 100644 assets/frutas.png

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git push
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 2.39 MiB | 318.00 KiB/s, done.
Total 7 (delta 0), reused 0 (delta 0)
To https://github.com/DianaVillasmil/lista-frutas.git
   0d86339..746996d  master -> master

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git checkout -b gh-pages
Switched to a new branch 'gh-pages'

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (gh-pages)
$ git merge master
Already up-to-date.

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (gh-pages)
$ git push origin gh-pages
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/DianaVillasmil/lista-frutas.git
 * [new branch]      gh-pages -> gh-pages

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (gh-pages)
$ git add .

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (gh-pages)
$ git commit -m "agregado .gitignore"
[gh-pages 468ec30] agregado .gitignore
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .gitignore

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (gh-pages)
$ checkout master
bash: checkout: command not found

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (gh-pages)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git merge gh-pages
Updating 746996d..468ec30
Fast-forward
 .gitignore | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .gitignore

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 353 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/DianaVillasmil/lista-frutas.git
   746996d..468ec30  master -> master

Diana@DIANA-AIO MINGW64 ~/Desktop/leccion-13 (master)
$ git push origin gh-pages
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/DianaVillasmil/lista-frutas.git
   746996d..468ec30  gh-pages -> gh-pages

   
