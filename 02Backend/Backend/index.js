import express from 'express';

const app = express();

app.get('/',(req,res)=>{
   console.log("Server is ready");
   res.send('<h1>Home route pe aapka swagat ha</h1>');
});

app.get('/jokes',(req,res)=>{
   const jokes = [
    {
      "id": 1,
      "title": "The Mathematician's Joke",
      "content": "Why was six afraid of seven? Because seven eight (ate) nine!"
    },
    {
      "id": 2,
      "title": "The Programmer's Joke",
      "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      "id": 3,
      "title": "The Coffee Joke",
      "content": "Why did the coffee file a police report? It got mugged!"
    },
    {
      "id": 4,
      "title": "The Physics Joke",
      "content": "Why can't you trust an atom? Because they make up everything!"
    },
    {
      "id": 5,
      "title": "The Dad Joke",
      "content": "Why don't skeletons fight each other? They don't have the guts!"
    }
  ]
  res.send(jokes);
});

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log("App is listening at ",port);
})