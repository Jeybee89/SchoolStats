# School Statistics (https://schooldata.nickwebdev.com)

This project/website was made for displaying information about schools in UK/London which you can find on GOV websites in an Excel sheet.

Purpose of the web site is to display in better way information from public sources in graphs and tables. Viewers can easily navigate thought the website end compare schools in regions. 

_This project was created as simple as possible on teh course recommendation and to show underspending of learned knowledge in the course module._ 

## Design

Design was created in Adobe XD the exported pdf you can find in the design folder in the project. Design is simple and more focused on data than modern design. 

## Technology 

For this project was used Angular 6 for better folder structure and Api connection to end points. 
Flask for backend, connection to MySQL DB and REST API.
Bootstrap 4 used to make website responsive across different screens  and speed up styling. 
Material Design for some styling.
Font Awesome for icons.
SASS for better organisation of css.
Ng Charts for for data visualisation. 

## Deployment 

Project was deployed on my Linode server running on Ubuntu 14 using Nginx and Cerbot for SSL. To run Flack I’m using nohup and is is connected to MySQL DB running on the same server. 

## Features 

Visitors can see data in tables and graphs also all in once or detailed. Website displays general and financial information. 

### Features Left to Implement

DB contain just 100 schools for now but there is opportunity to import all accessible data from GOV website. And then implement searching and sorting feature for better and faster access to data what visitors looking for.
 

## Testing 

The project was tested in chrome dev tools, in angular cli and AB testing on website. Also was manual testing though the website. Tested on Google Chrome and Safari and screens from 360px to 2680px. 

I had 2 big issue one was reloading page and get 404 because angular is single page application and on reload it loosing informations about page. I was fixed in Nginx configuration to look for index page. 

And second issue was running flask and angular on HTTPS to be able connect to each other without CORS policy blocking. It was fixed by WSGI configuration on server and adding SSL certificates to Flask.  

## How to run:

1. Clone project to your computer.
2. Run `npm install` to install npm packages 
3. Run `pip install flask-mysql`
4. Run `pip install cors`
5. Run `python mysql.py` (mysql-prod.py is with SSL for running on server with SSL certificate)
6. Run `ng start`
7. Open browser with http://localhost:4200/ 

And you should see the webpage. 

## Credits

Angular documentation 

Flask documentations 

Bootstrap documentation 

Stack overflow

Linode documentation/forum 

[GOV School data](https://www.compare-school-performance.service.gov.uk)
