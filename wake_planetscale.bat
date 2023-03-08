Title Wake Planetscale Console

cd %USERPROFILE%
cd Documents/wake-planetscale
call npm i
call npx cypress run --spec "cypress/e2e/wake-planetscale.cy.js"

pause
