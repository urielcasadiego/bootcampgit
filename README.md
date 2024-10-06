# bootcampgit

git init
echo "# bootcampgit" >> README.md
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:urielcasadiego/xxxxxxxxxx.git
git push -u origin master

/* cambiar de rama */
git checkout master

/* crear nueva rama a partir de master*/
git checkout -b develop master

/* ver las ramas */
git branch

/* crear rama desde develop */
 git checkout -b feature/lab2 develop

/* crear rama a remoto */
git push --set-upstream origin feature/lab1dev

/* eliminar git add */
git reset




