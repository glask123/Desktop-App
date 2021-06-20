require(`dotenv`).config();
const express = require(`express`);
const bodyParser = require(`body-parser`);
const fetch = require(`node-fetch`);

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/assignments`, (req, res) => {
  const options = {
    method: `GET`,
    headers: {
      authorization: "Bearer " + process.env.TOKEN,
      "content-type": "application/json",
      accept: `application/json`,
    },
    timeout: 5000,
  };

  let urls = [
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_2986429`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20context_codes[]=course_2986437`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_2986379`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_3014320`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_2986565`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_3014320`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_2986449`,
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?end_date=2021-06-20&context_codes[]=course_2986449&context_codes[]=course_3014320&context_codes[]=course_2986565&context_codes[]=course_3014320&context_codes[]=course_2986379context_codes[]=course_2986437&context_codes[]=course_2986429`,
  ];

  let data = [];

  Promise.all(
    urls.map((url) =>
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => res.members)
    )
  ).then((members) => {
    data = [].concat(...members);
    console.log(members);
  });

  let shortenedData = [];

  data.forEach((item, index) => {
    if ((item.type = `assignment`)) {
      shortenedData[index] = {
        title: item.title,
        class: item.context_name,
        due: item.due_at,
        key: item.id,
        url: item.url,
      };
    } else {
      shortenedData[index] = {
        title: item.title,
        class: item.context_name,
        due: item.start_at,
        key: item.id,
        url: item.url,
      };
    }
  });

  console.log(shortenedData);

  fetch(
    `https://hw.instructure.com/api/v1/users/${process.env.USER_ID}/calendar_events?type=assignment&end_date=2021-06-20&context_codes[]=course_2986449&context_codes[]=course_2986379&context_codes[]=course_2986556&context_codes[]=course_3014320&context_codes[]=course_2986399&context_codes[]=course_2986203&context_codes[]=course_2986565&context_codes[]=course_2986437&context_codes[]=course_2986429`,
    options
  )
    .then((res) => res.json())
    .then(
      (result) => {
        res.status(200).send(JSON.stringify(result));
      },
      (error) => {
        res.status(404);
        console.log(error);
      }
    )
    .catch((err) => {
      res.status(404);
      console.log(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
