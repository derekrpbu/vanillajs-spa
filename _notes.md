## SPA Project

---



Link Video 1: https://www.youtube.com/watch?v=6BozpmSjk-Y

Part 2: https://www.youtube.com/watch?v=OstALBk-jTc



Other Videos:

https://www.youtube.com/watch?v=K6IH25Vf8ZA

https://www.youtube.com/watch?v=G1eW3Oi6uoc



We will be doing all the client side routing ourselves

SPA have a single html file, all content is loaded dynamically using javascript thru ajax or fetch requests to the serverside to retrieve data.

It operates like a native app, so no page refreshes.



anchor tags with attribute 'data-link' will use the history api



create npm project

```sh
npm init -y
npm i express
```



Error "Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec."



To fix this we use a Middleware to serve the static directory.

Whenever route has '/static' we will serve the static directoy as per usual

```js
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))
```





Navigate using **History API**, used to access resources without loading them.



In a SPA we call the subpages 'Views'. You need a single js file for each veiw.



continue with Part 2...

















