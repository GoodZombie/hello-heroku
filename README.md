# hello-heroku
1. Best viewed in Chrome browser.
2. Next, enter this URL: https://hello-heroku-zg.herokuapp.com/ into the bar ⏫. 
3. Finally, My website will appear and has links to lead to either my repository or to this exact Read Me. 🤯🤯
4. As of now the site is very basic but if you were to want to build onto it, you could for example:
       
       Change the js to just run the server rather than be a very basic site and create a full website using HTML, CSS and JS.
       one way of inserting the HTML would be: 
     "   function(req, res)
    {
        res.sendFile('index.html', { root: __dirname }); 
        //this 2nd argument says look into this directory we are already in and find that 1st file path. 
    }
    "
    This will send the html to the server to be displayed by Heroku or whatever hosting service you are currently using. 
       
